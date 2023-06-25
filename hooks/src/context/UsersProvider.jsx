import { createContext, useContext, useEffect, useState } from 'react';
import { usersData } from '../data/users';

export const UserContext = createContext();

export default function UsersProvider({ children }) {
  return (
    <UserContext.Provider value={{ usersData }}>
      {children}
    </UserContext.Provider>
  );
}
