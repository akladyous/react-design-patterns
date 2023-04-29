type OnMouseClickHandler = (event: React.MouseEvent<HTMLElement>) => void;

interface ClickHandler {
  (event: React.MouseEvent<HTMLElement>): void;
}

// typescript function type expression vs function call signatures
