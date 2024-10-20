import { Spinner } from '@components/ui/spinner';

import { cn } from '@utils/cn';
import { getStyles } from '@utils';
import { IconButtonProps } from './types';
import {
  baseStyles,
  iconButtonVariants,
} from './constants/iconButtonStyles';

export const IconButton = <
  C extends React.ElementType = 'button',
>({
  as,
  className,
  variant = 'primary',
  size = 'md',
  shape = 'circle',
  isLoading = false,
  children,
  ...props
}: IconButtonProps<C>) => {
  const iconButtonStyles = getStyles(iconButtonVariants);

  const Comp = as || 'button';

  return (
    <Comp
      className={cn(
        iconButtonStyles({ variant, size, shape }, baseStyles),
        className,
        isLoading && 'hover:bg-transparent'
      )}
      disabled={isLoading}
      {...props}
    >
      {isLoading ? (
        <Spinner size={'rg'} />
      ) : (
        <span>{children}</span>
      )}
    </Comp>
  );
};
