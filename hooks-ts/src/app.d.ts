type OnMouseClickHandler = (event: React.MouseEvent<HTMLElement>) => void;

interface ClickHandler {
  (event: React.MouseEvent<HTMLElement>): void;
}

type ObjectWithMethod = {
  (x: number): number;
};
type Sum1 = (a: number, b: number) => number;
interface Sum2 {
  (a: number, b: number): number;
}

// typescript function type expression vs function call signatures
