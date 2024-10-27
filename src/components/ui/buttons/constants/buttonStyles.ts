export const baseStyles =
  'relative inline-flex items-center gap-x-[10px] font-fredoka text-[14px] font-medium transition duration-100 ease-in';

export const variant = {
  default: 'text-black',
  primary:
    'text-white bg-black hover:bg-black-hover disabled:hover:bg-black disabled:opacity-65',
  secondary: 'bg-white text-black hover:bg-black',
  border: 'bg-primary text-white border-2',
  danger: 'text-danger',
};

export const size = {
  sm: 'py-[10px] px-[12px] rounded-full',
  md: 'py-[12px] px-[14px] rounded-full',
  lg: 'py-[14px] px-[16px] rounded-full',
};

export const textAlign = {
  right: 'text-rigth',
  center: 'text-center',
  left: 'text-left',
};

export const align = {
  left: 'justify-start',
  center: 'justify-center',
  right: 'justify-end',
  spaceBetween: 'justify-between',
  spaceAround: 'justify-around',
  spaceEvenly: 'justify-evenly',
  stretch: 'justify-stretch',
};

export const buttonVariants = {
  variant,
  size,
  textAlign,
  align,
};
