import { Container, Content, Logo, Search, Profile, Logout } from "./styles";

import { HeaderButton } from "../../components/HeaderButton/";

import { AiOutlineSearch } from "react-icons/ai";
import { FiLogOut, FiUser } from "react-icons/fi";

import { useAuth } from "../../hooks/auth";
import { useNavigate } from "react-router-dom";

export function Header({ search }) {
  const { user, signOut } = useAuth();

  const navigate = useNavigate();

  function handleGoBack() {
    navigate("/");
  }

  function handleGoToProfilePage() {
    navigate("/profile");
  }

  function handleWrapperSignOut() {
    signOut();
    handleGoBack();
  }

  return (
    <Container>
      <Content>
        <Logo to="/">
          <svg
            width="30"
            height="36"
            viewBox="0 0 26 30"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M13.0635 0.306641L25.7096 7.60782V22.2102L13.0635 29.5114L0.417527 22.2102V7.60782L13.0635 0.306641Z"
              fill="#065E7C"
            />
          </svg>

          <h2>food explorer</h2>
        </Logo>

        <Search>
          {<AiOutlineSearch size={20} />}
          <input
            placeholder="Busque pelas opções de pratos"
            type="text"
            onChange={(e) => {
              search(e.target.value);
            }}
          />
        </Search>

        {user.role === "admin" ? (
          <HeaderButton isAdmin={true} title="Novo Prato" to="/newdish" />
        ) : (
          <HeaderButton title="Meu pedido (0)" to="/orderpage" />
        )}

        <Profile onClick={handleGoToProfilePage}>
          <FiUser />
        </Profile>

        <Logout onClick={handleWrapperSignOut}>
          <FiLogOut />
        </Logout>
      </Content>
    </Container>
  );
}
