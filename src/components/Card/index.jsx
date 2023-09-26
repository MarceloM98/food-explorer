import { Container } from "./styles";

import { Button } from "../Button";

import { BiMinus, BiPlus } from "react-icons/bi";
import { AiOutlineHeart } from "react-icons/ai";

import { useState } from "react";
import { Link } from "react-router-dom";
import { useAuth } from "../../hooks/auth";
import { api } from "../../services/api";
import { GoPencil } from "react-icons/go";

export function Card({ data, ...rest }) {
  const imageURL = `${api.defaults.baseURL}/files/${data.photo}`;

  const { user } = useAuth();

  const [quantity, setQuantity] = useState(1);

  function handleAddItem() {
    const limitOfSameItemsInCart = quantity >= 15;

    if (limitOfSameItemsInCart) {
      return alert(
        "Ei, você está ultrapassando o limite de um mesmo item em um pedido"
      );
    }

    setQuantity(quantity + 1);
  }

  function handleRemoveItem() {
    setQuantity(quantity - 1);

    if (quantity == 1) {
      setQuantity(1);
    }
  }

  return (
    <Container {...rest}>
      {user.role !== "admin" ? (
        <Link className="FavoriteDish">
          <AiOutlineHeart />
        </Link>
      ) : (
        <Link to={`/edit/${data.id}`} className="FavoriteDish">
          <GoPencil />
        </Link>
      )}

      <img src={imageURL} alt="" />

      <Link to={`/details/${data.id}`}>
        <h2>{data.name}</h2>
      </Link>

      <span>{data.description}</span>

      <h4>R$ {data.price}</h4>

      {user.role !== "admin" ? (
        <div className="AmountItemsAndBuy-wrapper">
          <div className="Amount">
            <button className="MinusItem" onClick={handleRemoveItem}>
              <BiMinus />
            </button>

            <span>{quantity < 10 ? `0${quantity}` : quantity}</span>

            <button className="PlusItem" onClick={handleAddItem}>
              <BiPlus />
            </button>
          </div>
          <Button title="incluir" />
        </div>
      ) : (
        <></>
      )}
    </Container>
  );
}
