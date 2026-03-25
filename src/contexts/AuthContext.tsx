import { createContext, useContext, useState, ReactNode } from "react";

interface User {
  id: string;
  name: string;
  email: string;
  role: "owner" | "expert";
}

interface AuthContextType {
  user: User | null;
  isAuthenticated: boolean;
  login: (email: string, password: string, remember: boolean) => Promise<void>;
  signup: (name: string, email: string, password: string, role: "owner" | "expert") => Promise<void>;
  logout: () => void;
}

const AuthContext = createContext<AuthContextType | null>(null);

export function AuthProvider({ children }: { children: ReactNode }) {
  const [user, setUser] = useState<User | null>(() => {
    const saved = localStorage.getItem("expertolib_user");
    return saved ? JSON.parse(saved) : null;
  });

  const login = async (email: string, _password: string, remember: boolean) => {
    await new Promise((r) => setTimeout(r, 800));
    const mockUser: User = {
      id: "1",
      name: email.includes("expert") ? "Dr. Marc Dupont" : "Jean Martin",
      email,
      role: email.includes("expert") ? "expert" : "owner",
    };
    setUser(mockUser);
    if (remember) localStorage.setItem("expertolib_user", JSON.stringify(mockUser));
  };

  const signup = async (name: string, email: string, _password: string, role: "owner" | "expert") => {
    await new Promise((r) => setTimeout(r, 800));
    const mockUser: User = { id: "2", name, email, role };
    setUser(mockUser);
    localStorage.setItem("expertolib_user", JSON.stringify(mockUser));
  };

  const logout = () => {
    setUser(null);
    localStorage.removeItem("expertolib_user");
  };

  return (
    <AuthContext.Provider value={{ user, isAuthenticated: !!user, login, signup, logout }}>
      {children}
    </AuthContext.Provider>
  );
}

export const useAuth = () => {
  const ctx = useContext(AuthContext);
  if (!ctx) throw new Error("useAuth must be inside AuthProvider");
  return ctx;
};
