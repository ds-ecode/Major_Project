import React, { createContext, useContext, useState, ReactNode } from 'react';

interface User {
  name: string;
  email: string;
  phone: string;
  dateOfBirth: string;
  address: string;
}

interface UserContextType {
  user: User;
  updateUser: (user: User) => void;
}

const defaultUser: User = {
  name: "John Doe",
  email: "john.doe@example.com",
  phone: "(555) 123-4567",
  dateOfBirth: "1990-01-01",
  address: "123 Main St, Anytown, USA"
};

const UserContext = createContext<UserContextType | undefined>(undefined);

export const UserProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [user, setUser] = useState<User>(defaultUser);

  const updateUser = (updatedUser: User) => {
    setUser(updatedUser);
  };

  return (
    <UserContext.Provider value={{ user, updateUser }}>
      {children}
    </UserContext.Provider>
  );
};

export const useUser = () => {
  const context = useContext(UserContext);
  if (context === undefined) {
    throw new Error('useUser must be used within a UserProvider');
  }
  return context;
};