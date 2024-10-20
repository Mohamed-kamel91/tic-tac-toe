import { cn } from '@utils/cn';

type LabelProps = React.LabelHTMLAttributes<HTMLLabelElement> & {
  icon?: JSX.Element;
  children: React.ReactNode;
};

export const Label = ({
  className = '',
  icon,
  children,
  ...Props
}: LabelProps) => {
  return (
    <label className={cn('font-medium', className)} {...Props}>
      <div className="flex items-center gap-2">
        {icon}
        {children}
      </div>
    </label>
  );
};
