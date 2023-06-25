import { createContext } from 'react';
import DataFetching from './DataFetching';

export const UserContextProvider = createContext();

export default function UserProvider({ url, children }) {
  return (
    <DataFetching url={url}>
      {({ data, loading }) => (
        <UserContextProvider.Provider value={{ data, loading }}>
          {children}
        </UserContextProvider.Provider>
      )}
    </DataFetching>
  );
}
