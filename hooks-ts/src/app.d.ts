type OnMouseClickHandler = (event: React.MouseEvent<HTMLElement>) => void;

interface ClickHandler {
  (event: React.MouseEvent<HTMLElement>): void;
}

// typescript function type expression vs function call signatures

type User = {
  id: number;
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

enum ActionType {
  SET_NAME = 'SET_NAME',
  SET_EMAIL = 'SET_EMAIL',
  SET_STREET = 'SET_STREET',
  SET_CITY = 'SET_CITY',
  SET_ZIPCODE = 'SET_ZIPCODE',
}

type Action =
  | { type: ActionType.SET_NAME; payload: string }
  | { type: ActionType.SET_EMAIL; payload: string }
  | { type: ActionType.SET_STREET; payload: string }
  | { type: ActionType.SET_CITY; payload: string }
  | { type: ActionType.SET_ZIPCODE; payload: string };

const initialState: User = {
  id: 0,
  name: '',
  username: '',
  email: '',
  address: {
    street: '',
    suite: '',
    city: '',
    zipcode: '',
    geo: {
      lat: '',
      lng: '',
    },
  },
  phone: '',
  website: '',
  company: {
    name: '',
    catchPhrase: '',
    bs: '',
  },
};
