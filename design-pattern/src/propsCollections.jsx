const compose =
  (...functions) =>
  (...args) =>
    functions.forEach((fn) => fn?.(...args));

export const getDroppableProps = ({
  onDragOver: replacementOnDragOver,
  ...replacementProps
}) => {
  const defaultOnDragOver = (event) => {
    event.preventDefault();
  };

  return {
    onDragOver: compose(replacementOnDragOver, defaultOnDragOver),
    onDrop: (event) => {},
    ...replacementProps,
  };
};
