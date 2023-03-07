import React, { useState } from "react";
import { IonPage, IonModal } from "@ionic/react";
import "./Login.scss";
import {
  setIsLoggedIn,
  setUsername,
  setEmail,
} from "../data/user/user.actions";
import { connect } from "../data/connect";
import { Route, RouteComponentProps } from "react-router";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faClose } from "@fortawesome/free-solid-svg-icons";
import { set } from "../util/store";
// import { GooglePlus } from '@ionic-native/google-plus'
import { GoogleAuth } from "@codetrix-studio/capacitor-google-auth";
import { Plugins } from "@capacitor/core";
import Store from "../helpers/Store";

interface OwnProps extends RouteComponentProps { }

interface DispatchProps {
  setIsLoggedIn: typeof setIsLoggedIn;
  setUsername: typeof setUsername;
  setEmail: typeof setEmail;
}

interface LoginProps extends OwnProps, DispatchProps { }

const Login: React.FC<LoginProps> = ({
  setIsLoggedIn,
  history,
  setUsername: setUsernameAction,
  setEmail: setEmailAction,
}) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [emailError, setEmailError] = useState(false);
  const [passwordError, setPasswordError] = useState(false);
  const [signupModal, setSignupModal] = useState(false);

  const login = async (e: React.FormEvent) => {
    e.preventDefault();
    setFormSubmitted(true);
    /*
    if (!email) {
      setEmailError(true);
    }
    if (!password) {
      setPasswordError(true);
    }

    if (email && password) {
      console.log(JSON.stringify({ email, password }), '=======> ')
      try {
        const response = await fetch(
          `${process.env.REACT_APP_API}/auth/login`,
          {
            method: "POST",
            body: JSON.stringify({ email, password }),
            headers: {
              "Content-Type": "application/json",
              Accept: "application/json",
            },
          }
        );

        if (!response.ok) {
          const message = await response.json();
        } else {
          const result = await response.json();
          Store.set("token", result.token);
          history.push("/tabs/home", { direction: "none" });
        }
      } catch (err) {
        alert(err);
        console.log(err);
      }
    }
    */
    history.push("/tabs/corte");
  };

  const handleGoogle = async () => {
    const result = await GoogleAuth.signIn();
    console.log({ result });
  };

  React.useEffect(() => {
    GoogleAuth.initialize();
    console.log('Google Auth Init')
  }, []);

  return (
    <IonPage id="login-page">
      <div className="flex flex-col h-screen items-center">
        <div className="pt-24 flex justify-center">
          <img src="assets/img/logo.png" alt="Ionic logo" className="m-4" style={{ width: "50%" }} />
        </div>

        <div className="mb-8 text-center pt-24">
          <span
            className="text-3xl underline" onClick={() => history.push("/signup") }
            id="sign_up"
          >
            Sign Up
          </span>
        </div>
        {/* <button
          className="w-1/2 py-4 border-2 border-gray-400 bg-gray-200 mx-auto rounded-xl"
          onClick={handleGoogle}
        >
          Google Sign in
        </button> */}

        <form noValidate onSubmit={login} className="px-4 mb-auto w-full">
          
          <input
            name="email"
            type="email"
            className="p-2 border-2 border-gray-100 rounded-xl w-full block mb-8 sign-input"
            placeholder="Email Address"
            value={email}
            onChange={(e) => setEmail(e.target.value!)}
            required
          ></input>

          {formSubmitted && emailError && (
            <span className="text-red-400">
              <p className="ion-padding-start">Email is required</p>
            </span>
          )}

          <input
            name="password"
            type="password"
            className="p-2 border-2 border-gray-100 rounded-xl w-full block mb-8 sign-input"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value!)}
            required
          ></input>

          {formSubmitted && passwordError && (
            <span className="text-red-400">
              <p className="ion-padding-start">Password is required</p>
            </span>
          )}

          

          <button
            type="submit"
            className="w-full py-4 mt-4 rounded-xl"
            id="btn_login"
          >
            LOGIN
          </button>

          <div className="w-full text-center py-8">
            <a
              href="/forgot-password"
              className="text-black-600 font-bold underline"
              id="forgot_password"
            >
              Forgot Password?
            </a>
          </div>
          <div className="flex justify-center">
            <img src="assets/img/fingerprint.svg" id="img_finger_print"/>
          </div>
        </form>
      </div>


      <IonModal isOpen={signupModal} id="ion-my-modal">
        <div className="p-4">
          <span onClick={() => setSignupModal(false)}>
            <FontAwesomeIcon icon={faClose} size="2x" />
          </span>
        </div>
        <div className="flex flex-col h-screen justify-center p-4 text-center">
          <div className="">
            <img
              src="/assets/img/logo-lg.png"
              alt="logo lg"
              className="object-none mx-auto mb-4"
            />
            <p className="my-4 font-bold">Create an account to continue</p>
            <p>
              By creating an account you agree to our Terms of Service and
              Privacy Policy
            </p>
          </div>
          <div className="mb-auto">
            <a
              href="/signup"
              className="w-full my-8 bg-purple-600 text-white py-4 block rounded-xl font-bold"
            >
              Sign up with email{" "}
            </a>
            <div>or</div>
            <div
              className="w-full my-4 border-2 py-4 border-gray-300  rounded-xl"
              onClick={handleGoogle}
            >
              Sign up with Google{" "}
            </div>
            <div className="w-full my-4 border-2 py-4 border-gray-300  rounded-xl">
              Sign up with Apple
            </div>
            <div className="w-full my-4 border-2 py-4 border-gray-300  rounded-xl">
              Sign up with Facebook
            </div>
          </div>
          <div className="font-bold mb-8">
            <p>
              Already have an account?{" "}
              <span
                className="py-4 text-purple-600 font-bold"
                onClick={() => setSignupModal(false)}
              >
                Login
              </span>
            </p>
          </div>
        </div>
      </IonModal>
    </IonPage>
  );
};

export default connect<OwnProps, {}, DispatchProps>({
  mapDispatchToProps: {
    setIsLoggedIn,
    setUsername,
    setEmail,
  },
  component: Login,
});
