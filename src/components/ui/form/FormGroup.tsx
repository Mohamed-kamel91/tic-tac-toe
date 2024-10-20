import { Label } from './Label';
import { Error } from './Error';

import { cn } from '@utils';

type FormGroupProps = {
  styles?: {
    groupStyles?: string;
    labelStyles?: string;
    errorStyles?: string;
  };
  id: string;
  label?: string;
  labelIcon?: JSX.Element;
  icon?: JSX.Element;
  error?: string;
  children: React.ReactNode;
};

export const FormGroup = ({
  id,
  styles,
  label = '',
  labelIcon,
  error,
  children,
}: FormGroupProps) => {
  const { groupStyles, labelStyles, errorStyles } = styles || {};
  
  return (
    <div className={groupStyles}>
      <Label
        className={labelStyles}
        htmlFor={id}
        icon={labelIcon}
      >
        {label}
      </Label>

      <div className="mt-[10px]">{children}</div>

      <Error
        className={cn('mt-[10px]', errorStyles)}
        errorMessage={error}
      />
    </div>
  );
};
