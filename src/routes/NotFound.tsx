import { House } from 'lucide-react';
import { Link } from 'react-router-dom';

import { Img } from '@components/ui/image';

import { cn } from '@utils';

import notFound from '@assets/images/404.png';

export const NotFound = () => {
  return (
    <div
      className={cn(
        'flex flex-col items-center justify-center',
        'h-screen w-screen p-10',
        'text-center font-semibold',
        'bg-blue-light'
      )}
    >
      <div className="h-[400px] w-[400px]">
        <Img
          src={notFound}
          alt="404 - not found"
        />
      </div>
      <h1 className="mb-2 text-[18px] font-medium">
        The page you are looking for does not exist.
      </h1>
      <Link
        className={cn(
          'inline-flex items-center gap-2',
          'mt-4 h-[60px] px-4',
          'text-left text-sm font-medium',
          'rounded-full bg-black text-white',
          'transition-all duration-100 ease-out',
          'hover:bg-black-dark'
        )}
        to="/"
        replace
      >
        <House size={20} />
        <span>Go to Home</span>
      </Link>
    </div>
  );
};
