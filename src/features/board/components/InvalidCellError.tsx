import { ReactPortal } from '@components/ui/react-portal';

import { cn } from '@utils';

type InvalidCellErrorProps = {
  message: string;
};

export const InvalidCellError = ({
  message,
}: InvalidCellErrorProps) => {
  return (
    <ReactPortal wrapperId="toast-root">
      <div
        className="fixed bottom-5 left-1/2 -translate-x-1/2"
        role="alert"
        aria-live="assertive"
      >
        <div
          className={cn(
            'p-[10px_20px]',
            'rounded-full border border-primary bg-white shadow-md',
            'slide-in'
          )}
        >
          <p className="text-[14px] font-medium text-primary">
            {message}
          </p>
        </div>
      </div>
    </ReactPortal>
  );
};
