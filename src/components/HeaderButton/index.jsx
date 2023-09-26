import { Container } from "./styles";

import { TbReceipt } from "react-icons/tb";

export function HeaderButton({ isAdmin, title, ...rest }) {
  return (
    <Container {...rest}>
      {isAdmin ?? <TbReceipt />}
      {title}
    </Container>
  );
}
