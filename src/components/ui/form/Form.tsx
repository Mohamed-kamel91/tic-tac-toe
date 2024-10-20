import { cn } from '@utils/cn';

type FormProps = React.FormHTMLAttributes<HTMLFormElement> & {
  children: any;
};

export const Form = ({
  className,
  id,
  children,
  onSubmit,
  ...Props
}: FormProps) => {
  return (
    <form
      className={cn(className)}
      id={id}
      noValidate
      onSubmit={onSubmit}
      {...Props}
    >
      {children}
    </form>
  );
};
