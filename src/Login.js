import { Button } from "@material-ui/core";
import React from "react";
import { auth, provider } from "./firebase";
import "./Login.css";

function Login() {
  const signIn = () => {
    auth.signInWithPopup(provider).catch((error) => alert(error.message));
  };

  return (
    <div className="login">
      <div className="login__logo">
        <img
          src="https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/a60c69b4-dbdc-49e3-b152-43bbdbfb0160/d6dy6qy-19e320f2-932f-4549-8050-2b7fb9289eda.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOiIsImlzcyI6InVybjphcHA6Iiwib2JqIjpbW3sicGF0aCI6IlwvZlwvYTYwYzY5YjQtZGJkYy00OWUzLWIxNTItNDNiYmRiZmIwMTYwXC9kNmR5NnF5LTE5ZTMyMGYyLTkzMmYtNDU0OS04MDUwLTJiN2ZiOTI4OWVkYS5wbmcifV1dLCJhdWQiOlsidXJuOnNlcnZpY2U6ZmlsZS5kb3dubG9hZCJdfQ.AQSIo8n9g9HHLZFVdCwqbDOjFg9DwZI35LCTIuLgtEw"
          alt=""
        />
        <h1>iMessage</h1>
      </div>

      <Button onClick={signIn}>Sign In</Button>
    </div>
  );
}

export default Login;
