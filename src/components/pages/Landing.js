import RegisterForm from "../forms/RegisterForm";
import LoginForm from "../forms/LoginForm";
import { useState } from "react";

const Landing = (props) => {
  const [hasAccount, setHasAccount] = useState(false);

  const { setUser } = props;

  return (
    <div>
      <h1>Landing Page</h1>

      {/* renders register first */}
      {hasAccount === false ? (
        <div>
          <RegisterForm setUser={setUser} />
          <p>
            {" "}
            Already have an account?{" "}
            <span
              type="button"
              className="btn btn-primary"
              onClick={() => setHasAccount(true)}
            >
              Login
            </span>{" "}
          </p>
        </div>
      ) : (
        <LoginForm setUser={setUser} />
      )}
    </div>
  );
};

export default Landing;
