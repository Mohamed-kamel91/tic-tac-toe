import { Spinner } from '@components/ui/spinner';

import { cn, getStyles } from '@utils';
import { baseStyles, buttonVariants } from './constants/buttonStyles';
import { ButtonProps } from './types';

export const Button = <C extends React.ElementType = 'button'>({
  as,
  className,
  variant = 'primary',
  size = 'md',
  shape = 'rounded',
  textAlign = 'center',
  align = 'center',
  isLoading = false,
  icon,
  children,
  ...props
}: ButtonProps<C>) => {
  const buttonStyles = getStyles(buttonVariants);

  const Comp = as || 'button';

  return (
    <Comp
      className={cn(
        buttonStyles({ variant, size, textAlign, align }, baseStyles),
        shape === 'sharp' && 'rounded-full',
        isLoading && 'disabled:opacity-80',
        className
      )}
      {...props}
    >
      {isLoading && <Spinner size="rg" />}

      {!isLoading && icon && <span>{icon}</span>}

      <span className="shrink-0">{children}</span>
    </Comp>
  );
};
