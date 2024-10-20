import { Link } from 'react-router-dom';
import { cn } from '@utils';

export const Header = () => {
  return (
    <header className="relative h-[80px] border-b">
      <Link
        className={cn(
          'absolute left-1/2 top-full -translate-x-1/2 -translate-y-[calc(94px/2)]',
          'after:absolute after:right-full after:top-0 after:h-[94px] after:w-[16px] after:bg-white after:content-[""]',
          'before:absolute before:left-full before:top-0 before:h-[94px] before:w-[16px] before:bg-white before:content-[""]'
        )}
        to="/"
      >
        <div
          className={cn(
            'flex flex-col p-[10px]',
            'font-fredoka font-semibold tracking-[1px]',
            'rounded-sm border bg-white'
          )}
        >
          <span>TIC</span>
          <span>TAC</span>
          <span>TOE</span>
        </div>
      </Link>
    </header>
  );
};
