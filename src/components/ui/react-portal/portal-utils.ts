/**
 * Creates a wrapper element with the specified ID and appends it to a given DOM node.
 *
 * @param wrapperId - The ID to set for the created wrapper element.
 * @param domNode - The DOM node to which the wrapper element will be appended. Defaults to the document body if not provided.
 * @returns The created portal wrapper element.
 */
export const createPortalWrapper = (
  wrapperId: string,
  domNode: Element = document.body
) => {
  // Create wrapper to append child into
  const wrapperElement = document.createElement('div');

  // Set Id attribute for portal wrapper
  wrapperElement.setAttribute('id', wrapperId);

  // Append child if dom node provided
  domNode.appendChild(wrapperElement);

  return wrapperElement;
};

export const hasChildElements = (
  element: HTMLElement
): boolean => {
  if (element && element.hasChildNodes()) {
    // Check if any child node is an element node
    const childElements = Array.from(element.childNodes).filter(
      (node) => node.nodeType === Node.ELEMENT_NODE
    );

    if (childElements.length > 0) {
      return true;
    }
  }

  return false;
};
