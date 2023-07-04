import { AuthTokenContextProvider } from "./components/authTokenContextProvider/AuthTokenContextProvider";
import "./styles/_global.scss";
// import { LoginPage } from "./pages/auth/login";
import { CustomQueryClientProvider } from "./components/customQueryClientProvider/CustomQueryClientProvider";
// import { EventsList } from "./components/eventsList/EventsList";
// import { Layout } from "./components/layout/Layout";
import { RouterProvider } from "./components/routes/Routes";
import { UserProfileContextProvider } from "./components/userProfileContextProvider/UserProfileContextProvider";

function App() {
  return (
    <CustomQueryClientProvider>
      <AuthTokenContextProvider>
        <UserProfileContextProvider>
          <RouterProvider />
          {/* <LoginPage />
        <EventsList /> */}
        </UserProfileContextProvider>
      </AuthTokenContextProvider>
    </CustomQueryClientProvider>
  );
}

export default App;
