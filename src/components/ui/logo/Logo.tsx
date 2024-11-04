import { cn } from '@utils';

type LogoProps = {
  color?: 'primary' | 'secondary';
  size?: 'sm' | 'md' | 'lg' | 'xlg';
  align?: 'left' | 'center' | 'right';
} & React.HTMLAttributes<HTMLHeadingElement>;

const sizes = {
  sm: 'text-[20px]',
  md: 'text-[25px]',
  lg: 'text-[30px]',
  xlg: 'text-[35px]',
};

const colors = {
  primary: 'text-primary',
  secondary: 'text-white',
};

const position = {
  left: 'text-left',
  center: 'text-center',
  right: 'text-right',
};

export const Logo = ({
  className = '',
  color = 'primary',
  size = 'md',
  align = 'left',
}: LogoProps) => {
  const baseStyles = 'font-Anton tracking-widest drop-shadow-sm';

  const styles = cn(
    baseStyles,
    sizes[size],
    colors[color],
    position[align],
    className
  );

  return (
    <h1 className={styles}>
      <span className="block">TIC</span>
      <span className="block">TAC</span>
      <span className="block">TOE</span>
    </h1>
  );
};
