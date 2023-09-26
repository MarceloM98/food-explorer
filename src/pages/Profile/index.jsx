import { Container, Main, Form } from "./styles";

import { Header } from "../../components/Header";
import { Button } from "../../components/Button";
import { InputProfile } from "../../components/InputProfile";

import { useState } from "react";
import { useAuth } from "../../hooks/auth";

import { api } from "../../services/api";

import { FiUser, FiMail, FiLock } from "react-icons/fi";

export function Profile() {
  const { user, updateProfile } = useAuth();

  const [name, setName] = useState(user.name);
  const [email, setEmail] = useState(user.email);
  const [passwordOld, setPasswordOld] = useState();
  const [passwordNew, setPasswordNew] = useState();

  async function handleUpdate() {
    const user = {
      name,
      email,
      password: passwordNew,
      old_password: passwordOld,
    };
    updateProfile(user);
  }

  return (
    <Container>
      <Header />
      <Main>
        <Form>
          <InputProfile
            placeholder="Nome"
            type="text"
            icon={FiUser}
            value={name}
            onChange={(e) => setName(e.target.value)}
          />

          <InputProfile
            placeholder="E-mail"
            type="text"
            icon={FiMail}
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />

          <InputProfile
            placeholder="Senha atual"
            type="password"
            icon={FiLock}
            onChange={(e) => setPasswordOld(e.target.value)}
          />

          <InputProfile
            placeholder="Nova senha"
            type="password"
            icon={FiLock}
            onChange={(e) => setPasswordNew(e.target.value)}
          />

          <Button title="Salvar alterações" onClick={handleUpdate} />
        </Form>
      </Main>
    </Container>
  );
}
