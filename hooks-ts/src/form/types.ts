export interface User {
  id: string;
  firstName: string;
  lastName: string;
  email: string;
  password: string;
  address: Address;
}

export interface Address {
  street: string;
  city: string;
  state: string;
  zipCode: string;
  geo: GeoLocation;
}

export interface GeoLocation {
  latitude: string;
  longitude: string;
}
