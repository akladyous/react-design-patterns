export default function FunctionAsChild({ children }) {
  const text =
    'Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias quos numquam, a maxime recusandae repellat tenetur asperiores nihil animi nostrum vero explicabo itaque laborum laboriosam eaque voluptas eveniet molestiae iusto?';
  const isFunctionChild = typeof children === 'function';
  return (
    <>
      <div>
        <p>
          {isFunctionChild ? (
            children(text)
          ) : (
            <>
              {text}
              {children}
            </>
          )}
        </p>
      </div>
    </>
  );
}
