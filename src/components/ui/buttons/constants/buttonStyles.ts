export const baseStyles =
  'relative inline-flex items-center gap-x-[10px] font-fredoka text-[14px] font-medium transition duration-100 ease-in';

export const variant = {
  default: 'text-black',
  primary:
    'text-white bg-black hover:bg-black-dark disabled:hover:bg-black disabled:opacity-65',
  secondary: 'bg-white text-black',
  outline:
    'bg-white text-black border border-black-light hover:bg-gray',
  danger: 'text-danger',
};

export const size = {
  sm: 'px-[12px] py-[12px] rounded-full',
  md: 'px-[14px] py-[14px] rounded-full',
  lg: 'px-[16px] py-[16px] rounded-full',
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
