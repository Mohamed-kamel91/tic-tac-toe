import { useIsMounted } from '@hooks/useIsMounted';
import { Transition, TransitionCssProps } from './Transition';

type SlideProps = {
  in?: boolean;
  slideOnMount?: boolean;
  withFade?: boolean;
  direction?: 'right' | 'left' | 'top' | 'bottom';
  offsetX?: number;
  offsetY?: number;
  transition?: TransitionCssProps;
  children: React.ReactNode;
};

// Helper function to calculate translation based on direction and offset
const getTranslateValues = (
  direction: string,
  offsetX: number,
  offsetY: number
) => {
  const translateX = direction === 'left' ? -offsetX : offsetX;
  const translateY = direction === 'top' ? -offsetY : offsetY;
  return `${translateX}px, ${translateY}px`;
};

export const SlideIn = ({
  in: enter = false,
  slideOnMount = false,
  withFade = false,
  direction = 'right',
  offsetX = 0,
  offsetY = 0,
  transition,
  children,
}: SlideProps) => {
  const { isMounted } = useIsMounted();

  const getTransitionStyles = () => {
    // If mounted and slideOnMount is true, override enter and slide to final position
    if (isMounted) {
      if (slideOnMount) {
        return { translate: '0, 0', opacity: 1 };
      }
  
      // If enter is true but slideOnMount is false, transition in
      if (enter && !slideOnMount) {
        return { translate: '0, 0', opacity: 1 };
      }
    } 

    // Default sliding from offset
    return {
      translate: getTranslateValues(direction, offsetX, offsetY),
      opacity: 0,
    };
  };

  const { translate, opacity } = getTransitionStyles();

  return (
    <Transition
      styles={{
        transform: `translate(${translate})`,
        opacity: withFade ? opacity : 1,
      }}
      {...transition}
    >
      {children}
    </Transition>
  );
};
