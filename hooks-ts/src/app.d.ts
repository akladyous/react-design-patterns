type OnMouseClickHandler = (event: React.MouseEvent<HTMLElement>) => void;

interface ClickHandler {
  (event: React.MouseEvent<HTMLElement>): void;
}

// typescript function type expression vs function call signatures

type User = {
  id: number | string;
  name: string;
  username: string;
  email: string;
  address: {
    street: string;
    suite: string;
    city: string;
    zipcode: string;
    geo: {
      lat: string;
      lng: string;
    };
  };
  phone: string;
  website: string;
  company: {
    name: string;
    catchPhrase: string;
    bs: string;
  };
};
