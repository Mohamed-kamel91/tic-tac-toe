import React, { forwardRef } from 'react';

import { useImageLoad } from './useImageLoad';
import { cn } from '@utils';

import fallbackImg from '@assets/images/fallback.png';

type ImageProps = {
  objectFit?:
    | 'contain'
    | 'cover'
    | 'fill'
    | 'scale-down'
    | 'none';
  dataTestid?: string;
} & React.ImgHTMLAttributes<HTMLImageElement>;

export const Img = React.memo(
  forwardRef<HTMLImageElement, ImageProps>(
    (
      {
        className = '',
        src,
        alt,
        objectFit = 'contain',
        dataTestid,
        ...restProps
      },
      ref
    ) => {
      // Image load hook
      const {
        isLoaded,
        isError,
        handleImageLoad,
        handleImageError,
      } = useImageLoad();

      return (
        <img
          ref={ref}
          className={cn(
            'h-full w-full',
            `object-${objectFit}`,
            'transition-opacity duration-250 ease-in-out',
            className,
            isLoaded
              ? 'opacity-1 visible'
              : 'invisible opacity-0'
          )}
          src={isError ? fallbackImg : src}
          alt={alt ?? ''}
          crossOrigin="anonymous"
          onLoad={handleImageLoad}
          onError={handleImageError}
          data-testid={dataTestid}
          {...restProps}
        />
      );
    }
  )
);

Img.displayName = 'Img';
