import { createContext, useContext, useEffect, useState } from 'react';
import { usersData } from '../data/users';

export const UserDataContext = createContext();

export default function UserDataProvider({ children }) {
  return (
    <UserDataContext.Provider value={usersData}>
      {children}
    </UserDataContext.Provider>
  );
}
