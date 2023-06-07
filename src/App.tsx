import { AuthTokenContextProvider } from "./components/authTokenContextProvider/AuthTokenContextProvider";
// import { Button } from "./components/button/Button";
import { ChangePasswordForm } from "./components/changePasswordForm/ChangePasswordForm";
import { LoginForm } from "./components/loginForm/LoginForm";
// import { registerUser } from "./services/api/auth/registerUser";
// import { registerOrganization } from "./services/api/auth/registerOrganization";
import "./styles/_global.scss";
import { ProfileForm } from "./components/profileForm/ProfileForm";
import { UpdateProfileForm } from "./components/updateProfileForm/UpdateProfileForm";

function App() {
  return (
    <AuthTokenContextProvider>
      {/* <Button
        text="Register"
        onClick={() => {
          registerUser({ email: "agata@qwe.com", password: "123QweAgata" });
        }}
      /> */}
      {/* <Button
        text="Register Organization"
        onClick={() => {
          registerOrganization({
            email: "organization@test.test",
            password: "123TestOrg",
          });
        }}
      /> */}
      <LoginForm />
      <ChangePasswordForm />
      <ProfileForm />
      <UpdateProfileForm />
    </AuthTokenContextProvider>
  );
}

export default App;
