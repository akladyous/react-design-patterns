type User = {
  id: string;
  firstName: string;
  lastName: string;
  email: string;
  password: string;
  address: {
    street: string;
    city: string;
    state: string;
    zipcode: string;
    geo: {
      lat: string;
      lng: string;
    };
  };
};

enum ActionType {
  SET_VALUE = 'SET_VALUE',
  SET_NESTED_VALUE = 'SET_NESTED_VALUE',
}

type PayloadType = {
  name: string;
  value: string;
};

type Action =
  | {
      type: ActionType.SET_VALUE;
      payload: PayloadType;
    }
  | {
      type: ActionType.SET_NESTED_VALUE;
      payload: PayloadType;
    };
