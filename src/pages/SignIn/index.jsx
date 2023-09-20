import { useState } from "react";

import { useAuth } from "../../hooks/auth.jsx";

import { Container } from "./styles.js";
import { Link } from "react-router-dom";

export function SignIn() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const { signIn } = useAuth();

  function handleSignIn() {
    signIn({ email, password });
  }
  <Container>
    
  </Container>
}
