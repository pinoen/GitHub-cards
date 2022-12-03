import { createContext, useState } from "react";
export const AuthContext = createContext();

const AuthProvider = ({ children }) => {

  const [isAuth, setIsAuth] = useState(false)

  const handleAuth = () => {
    setIsAuth(preVal => !preVal)
  }

  const store = {
    isAuth,
    handleAuth
  }
  return (
    <AuthContext.Provider value={store}>
      {children}
    </AuthContext.Provider>
  )
}

export default AuthProvider