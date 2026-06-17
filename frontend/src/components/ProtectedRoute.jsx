function ProtectedRoute({ children }) {
  const isLoggedIn = true;

  return isLoggedIn ? children : <h1>Please Login</h1>;
}

export default ProtectedRoute;