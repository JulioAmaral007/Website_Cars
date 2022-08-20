import React from "react";
import { AuthProvider } from "./Contexts/auth";

import AppRoutes from "./Routes/routes";

function App() {
  return (
    <div className="App">
      <>
        <AuthProvider>
          <AppRoutes />
        </AuthProvider>
      </>
    </div>
  );
}

export default App;
