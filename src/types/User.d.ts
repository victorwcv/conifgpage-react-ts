export interface User {
  id?: string;
  name: string;
  username: string;
  password: string;
  email: string;
  phoneNumber?: string;
}

export interface UserContextType {
  user: User | null;
  setUser: (user: User | null) => void;
}
