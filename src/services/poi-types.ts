export interface Location {
  lat: number;
  lng: number;
}

export interface Pois {
  attractionType: string;
  attractionName: string;
  attractionDesc: string;
  admissionFee: string;
  location: Location;
}

export interface User {
  firstName: string;
  lastName: string;
  email: string;
  password: string;
  _id: string;
}
