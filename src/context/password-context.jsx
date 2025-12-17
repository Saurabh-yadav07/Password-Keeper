import { createContext, useState } from "react";

const PasswordContext = createContext();

export function PasswordProvider({ children }) {
  const [passwords, setPasswords] = useState([]);

  const addPassword = data => {
    setPasswords(prev => [...prev, { id: crypto.randomUUID(), ...data }]);
  };

  const editPassword = (id, updated) => {
    setPasswords(prev =>
      prev.map(p => (p.id === id ? { ...p, ...updated } : p))
    );
  };

  const deletePassword = id => {
    setPasswords(prev => prev.filter(p => p.id !== id));
  };

  return (
    <PasswordContext.Provider
      value={{ passwords, addPassword, editPassword, deletePassword }}
    >
      {children}
    </PasswordContext.Provider>
  );
}

export default PasswordContext;