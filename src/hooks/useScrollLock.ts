import { useCallback, useLayoutEffect, useRef } from 'react';

type UseScrollLockOptions = {
  lock?: boolean;
  lockTarget?: HTMLElement | string;
};

type TargetStyle = {
  paddingRight: CSSStyleDeclaration['paddingRight'];
  overflow: CSSStyleDeclaration['overflow'];
};

export const useScrollLock = (
  options: UseScrollLockOptions = {}
) => {
  const { lockTarget, lock = false } = options;

  const target = useRef<HTMLElement | null>(null);
  const targetStyle = useRef<TargetStyle | null>(null);

  const lockScroll = useCallback(() => {
    if (target.current) {
      // Get element inline styles
      const { paddingRight, overflow } = target.current.style;

      // Preserve element inline styles
      targetStyle.current = { paddingRight, overflow };

      const offsetWidth =
        target.current === document.body
          ? window.innerWidth
          : target.current.offsetWidth;

      const scrollbarWidth =
        offsetWidth - target.current.clientWidth;

      // // Get current padding right in px
      const currentPaddingRight = parseInt(
        window.getComputedStyle(target.current).paddingRight,
        10
      );

      target.current.style.paddingRight = `${scrollbarWidth + currentPaddingRight}px`;
      target.current.style.overflow = 'hidden';
    }
  }, []);

  const unlockScroll = useCallback(() => {
    // Set element back to its preserved style
    if (target.current && targetStyle.current) {
      const { paddingRight, overflow } = targetStyle.current;
      target.current.style.paddingRight = paddingRight;
      target.current.style.overflow = overflow;
    }
  }, []);

  useLayoutEffect(() => {
    console.log("in");
    
    if (lockTarget) {
      target.current =
        typeof lockTarget === 'string'
          ? document.querySelector(lockTarget)
          : lockTarget;
    }

    if (!target.current) {
      target.current = document.body;
    }

    if (lock) {
      lockScroll();
    }

    return () => {
      if (lock) {
        console.log("out");
        unlockScroll();
      }
    };
  }, [lock, lockTarget, lockScroll, unlockScroll]);
};
