import { BrowserRouter } from "react-router-dom";
import { useEffect } from "react"
import AppRouter from "./app/router";
import { useAuthStore } from "./app/store/authStore";


function App() {
  const initAuthListener = useAuthStore(
    (state) => state.initAuthListener
  )

  useEffect(() => {
    initAuthListener()
  }, [initAuthListener])

  return (
    <>
    <BrowserRouter>
        <AppRouter />
      </BrowserRouter>
    </>
  )
}

export default App;
