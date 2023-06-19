import { AuthTokenContextProvider } from "./components/authTokenContextProvider/AuthTokenContextProvider";
import "./styles/_global.scss";
import { LoginPage } from "./pages/auth/login";
import { CustomQueryClientProvider } from "./components/customQueryClientProvider/CustomQueryClientProvider";
import { EventsList } from "./components/eventsList/EventsList";
import { Layout } from "./components/layout/Layout";
import { RouterProvider } from "./components/routes/Routes";

function App() {
  return (
    <CustomQueryClientProvider>
      <AuthTokenContextProvider>
        <RouterProvider />
        {/* <LoginPage />
        <EventsList /> */}
      </AuthTokenContextProvider>
    </CustomQueryClientProvider>
  );
}

export default App;
