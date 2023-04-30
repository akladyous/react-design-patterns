type User = {
  id: number;
  name: string;
  userName: string;
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
  | { type: 'SET_NAME'; payload: string }
  | { type: 'SET_EMAIL'; payload: string }
  | { type: 'SET_STREET'; payload: string }
  | { type: 'SET_CITY'; payload: string }
  | { type: 'SET_ZIPCODE'; payload: string }
  | { type: 'SET_LAT'; payload: string }
  | { type: 'SET_LNG'; payload: string };
