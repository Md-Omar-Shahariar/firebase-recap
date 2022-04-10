import "./App.css";
import app from "./firebase.init";
import {
  getAuth,
  GoogleAuthProvider,
  signInWithPopup,
  signOut,
} from "firebase/auth";
import { useState } from "react";

const auth = getAuth(app);

function App() {
  const [user, setUser] = useState({});
  const provider = new GoogleAuthProvider();

  const handleGoogleSignIn = () => {
    signInWithPopup(auth, provider)
      .then((result) => {
        const user = result.user;
        setUser(user);
        console.log(user);
      })
      .catch((error) => {});
  };

  const handleSignOut = () => {
    signOut(auth)
      .then(() => {
        setUser({});
      })
      .catch((error) => {
        console.log(error);
      });
  };
  return (
    <div className="App">
      <button onClick={handleGoogleSignIn}>Google</button>
      <h2>Name: {user.displayName}</h2>
      <h3>Your Email : {user.email} </h3>
      <h4>{user.providerId}</h4>

      <button onClick={handleSignOut}>Sign Out</button>
    </div>
  );
}

export default App;
