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
