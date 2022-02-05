import { AuthProvider } from "hooks/auth";
import GlobalStyle from "styles/GlobalStyle";
import {ToastContainer} from "react-toastify"
import {BrowserRouter} from "react-router-dom"
import Routes from "routes";

function App() {
  return (
    <BrowserRouter>
      <GlobalStyle />
      <ToastContainer autoClose={3000}/>
      <AuthProvider>
        <Routes />
      </AuthProvider>
    </BrowserRouter>
  );
}

export default App;
