import { useAuth } from "../../hooks/auth";
import { USER_ROLE } from "../../utils/roles";

import { Container } from "./styles";

export function Home() {
  const { user } = useAuth();

  return(
    <Container>
      
    </Container>
  )
}
