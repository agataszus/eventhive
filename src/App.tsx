import { AuthTokenContextProvider } from "./components/authTokenContextProvider/AuthTokenContextProvider";
import "./styles/_global.scss";
import { CustomQueryClientProvider } from "./components/customQueryClientProvider/CustomQueryClientProvider";
import { RouterProvider } from "./components/routes/Routes";
import { UserProfileContextProvider } from "./components/userProfileContextProvider/UserProfileContextProvider";

function App() {
  return (
    <CustomQueryClientProvider>
      <AuthTokenContextProvider>
        <UserProfileContextProvider>
          <RouterProvider />
        </UserProfileContextProvider>
      </AuthTokenContextProvider>
    </CustomQueryClientProvider>
  );
}

export default App;
