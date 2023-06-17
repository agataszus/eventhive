import { AuthTokenContextProvider } from "./components/authTokenContextProvider/AuthTokenContextProvider";
import "./styles/_global.scss";
import { LoginPage } from "./pages/auth/login";
import { CustomQueryClientProvider } from "./components/customQueryClientProvider/CustomQueryClientProvider";
import { EventsList } from "./components/eventsList/EventsList";

function App() {
  return (
    <CustomQueryClientProvider>
      <AuthTokenContextProvider>
        <LoginPage />
        <EventsList />
      </AuthTokenContextProvider>
    </CustomQueryClientProvider>
  );
}

export default App;
