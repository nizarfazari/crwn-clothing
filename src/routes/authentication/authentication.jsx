import SignInForm from "../../components/sign-in/sign-in";
import SignUpForm from "../../components/sign-up/sign-up-form.component";

import './authentication.scss'

const Authentication = () => {
  return (
    <div className="authentication-container">
      <SignInForm />
      <SignUpForm />
    </div>
  );
};

export default Authentication;
