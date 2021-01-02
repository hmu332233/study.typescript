export interface PhoneNumberDictionary {
  [key: string]: {
    num: number;
  };
}

export interface Contact {
  name: string;
  address: string;
  phones: PhoneNumberDictionary;
}

export enum PhoneType {
  home = 'home',
  office = 'office',
  studio = 'studio',
}