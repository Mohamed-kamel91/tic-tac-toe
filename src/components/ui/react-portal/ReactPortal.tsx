import { ReactNode, useState, useEffect } from 'react';
import { createPortal } from 'react-dom';

import { createPortalWrapper, hasChildElements } from './portal-utils';

type ReactPortalType = {
  wrapperId?: string;
  domNode?: Element;
  children: ReactNode;
};

export const ReactPortal = ({
  wrapperId = "react-portal-wrapper",
  domNode,
  children,
}: ReactPortalType) => {
  // States
  const [portalNode, setPortalNode] = useState<HTMLElement | null>(null);
  
  useEffect(() => {
    let wrapper = document.getElementById(wrapperId);

    // if element is not found with wrapperId or wrapperId is not provided,
    // create and append to body
    if (!wrapper) {
      wrapper = createPortalWrapper(wrapperId, domNode);
    }

    setPortalNode(wrapper);

    // delete wrapper when component unmounts
    return () => {
      if (
        wrapper 
        && !hasChildElements(wrapper)
        && wrapper.parentElement
      ) {
        wrapper.parentElement.removeChild(wrapper);
      }
    }
  }, [wrapperId]);

  // wrapperElement state will be null on the very first render.
  if (!portalNode) return null;

  return createPortal(children, portalNode);
}