import { AuthTokenContextProvider } from "./components/authTokenContextProvider/AuthTokenContextProvider";
import "./styles/_global.scss";
import { CustomQueryClientProvider } from "./components/customQueryClientProvider/CustomQueryClientProvider";
import { RouterProvider } from "./components/routes/Routes";
import { UserProfileContextProvider } from "./components/userProfileContextProvider/UserProfileContextProvider";
import { ShoppingCartContextProvider } from "./components/shoppingCartContextProvider/ShoppingCartContextProvider";

function App() {
  return (
    <CustomQueryClientProvider>
      <AuthTokenContextProvider>
        <UserProfileContextProvider>
          <ShoppingCartContextProvider>
            <RouterProvider />
          </ShoppingCartContextProvider>
        </UserProfileContextProvider>
      </AuthTokenContextProvider>
    </CustomQueryClientProvider>
  );
}

export default App;
