import { Transition, TransitionCssProps } from './Transition';

import { useIsMounted } from '@hooks/useIsMounted';

type FadeInProps = {
  in?: boolean;
  className?: string;
  children: React.ReactNode;
} & Omit<TransitionCssProps, 'property'>;

export const FadeIn = ({
  in: enter,
  className = "",
  delay,
  duration,
  timingFunction,
  children,
}: FadeInProps) => {
  const { isMounted } = useIsMounted();
  
  const transitionStyles = {
    property: 'opacity',
    delay,
    duration,
    timingFunction,
  };

  const opacity: number = (() => {
    if (enter === undefined) {
      return isMounted ? 1 : 0;
    }

    return enter ? 1 : 0;
  })();

  // const opacity = isMounted ? 1 : 0;

  return (
    <Transition className={className} styles={{ opacity }} {...transitionStyles}>
      {children}
    </Transition>
  );
};
