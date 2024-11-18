import { useIsMounted } from '@hooks/useIsMounted';

type DelayedMountProps = {
  delay?: number;
  children: React.ReactNode;
};

export const DelayedMount = ({
  delay = 150,
  children,
}: DelayedMountProps) => {
  const { isMounted } = useIsMounted(delay);

  if (!isMounted) {
    return null;
  }

  return <>{children}</>;
};
