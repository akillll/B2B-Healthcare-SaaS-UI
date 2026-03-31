import { BrowserRouter } from "react-router-dom";
import AppRouter from "./app/router";
import { useEffect } from "react";


function App() {

  return (
    <>
    <BrowserRouter>
        <AppRouter />
      </BrowserRouter>
    </>
  )
}

export default App;
