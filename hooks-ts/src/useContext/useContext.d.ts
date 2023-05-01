export type User = {
  id: string;
  firstName: string;
  lastName: string;
  email: string;
  password: string;
  address: {
    street: string;
    city: string;
    state: string;
    zipCode: string;
    geo: {
      lat: string;
      lng: string;
    };
  };
};

export type PayloadType = {
  name: HTMLInputElement.name;
  value: string;
};

export enum ActionType {
  SET_VALUE = 'SET_VALUE',
  SET_ADDRESS = 'SET_ADDRESS',
  SET_GEO = 'SET_GEO',
}

export type Action =
  | {
      type: ActionType.SET_VALUE;
      payload: PayloadType;
    }
  | {
      type: ActionType.SET_NESTED_VALUE;
      payload: PayloadType;
    }
  | {
      type: ActionType.SET_GEO;
      payload: PayloadType;
    };
