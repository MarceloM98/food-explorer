import {
  Container,
  Main,
  ButtonBack,
  Form,
  InputWrapper,
  TextArea,
  SectionIngredients,
  SendFormWithImage,
} from "./styles";

import { Header } from "../../components/Header/";
import { Footer } from "../../components/Footer/";
import { Input } from "../../components/Input";
import { NoteItem } from "../../components/NoteItem";
import { Button } from "../../components/Button";

import { IoIosArrowBack } from "react-icons/io";
import { FiUpload } from "react-icons/fi";

import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import { useAuth } from "../../hooks/auth";
import { api } from "../../services/api";

export function AddDish() {
  const { user } = useAuth();
  const navigate = useNavigate();

  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState("");
  const [category, setCategory] = useState("");

  const [ingredients, setIngredients] = useState([]);
  const [newIngredient, setNewIngredient] = useState("");

  const [imageFile, setImageFile] = useState(null);

  function handleAddIngredient() {
    setIngredients((prevState) => [...prevState, newIngredient]);
    setNewIngredient("");
  }

  function handleRemoveIngredient(ingredientDeleted) {
    setIngredients((prevState) =>
      prevState.filter((ingredient) => ingredient !== ingredientDeleted)
    );
  }

  async function handleNewDish() {
    if (!imageFile) {
      return alert("O prato precisa de uma Imagem");
    }
    if (!name) {
      return alert("Dígite o nome do prato");
    }

    if (!price) {
      return alert("Adicione um preço ao prato");
    }

    if (!category) {
      return alert("Adicione uma categoria ao prato");
    }

    if (!description) {
      return alert("Adicione uma descrição para o prato");
    }

    if (newIngredient) {
      return alert("Você deixou um ingrediente no campo para adicionar");
    }

    const response = await api.post(`/dishes`, {
      name,
      description,
      price,
      category,
      ingredients,
    });
    const note_id = response.data;

    const formData = new FormData();
    formData.append("photo", imageFile);

    api.patch(`/dishes/photo/${note_id}`, formData);

    alert("Prato cadastrado com sucesso");
    navigate("/");
  }

  return (
    <Container>
      <Header />

      <Main>
        <ButtonBack>
          <Link to="/">
            <IoIosArrowBack size={32} />
            Voltar
          </Link>

          <h2>Adicionar prato</h2>
        </ButtonBack>

        <Form>
          <InputWrapper>
            <Input
              label="name"
              title="Nome do prato"
              type="text"
              placeholder="Ex.: Salada Ceasar"
              onChange={(e) => setName(e.target.value)}
            />

            <Input
              label="name"
              title="Preço"
              type="text"
              placeholder="R$ 00,00"
              onChange={(e) => setPrice(e.target.value)}
            />

            <Input
              label="categoria"
              title="Categoria"
              type="text"
              placeholder="Categoria"
              onChange={(e) => setCategory(e.target.value)}
            />
          </InputWrapper>

          <SectionIngredients>
            {ingredients.map((ingredient, index) => (
              <NoteItem
                key={String(index)}
                value={ingredient}
                onClick={() => handleRemoveIngredient(ingredient)}
              />
            ))}

            <NoteItem
              isNew
              placeholder="Adicionar"
              onChange={(e) => setNewIngredient(e.target.value)}
              value={newIngredient}
              onClick={handleAddIngredient}
            />
          </SectionIngredients>

          <TextArea>
            <label htmlFor="">Descrição</label>
            <textarea
              placeholder="Fale brevemente sobre o prato, seus ingredientes e composição"
              onChange={(e) => setDescription(e.target.value)}
            ></textarea>
          </TextArea>

          <SendFormWithImage>
            <div className="uploadImage">
              <label id="file" htmlFor="image">
                Imagem do prato
                <div className="uploadImageSelect">
                  <FiUpload size={24} />
                  <span>Selecione a imagem</span>
                  <input
                    id="image"
                    type="file"
                    onChange={(e) => setImageFile(e.target.files[0])}
                  />
                </div>
              </label>
            </div>

            <Button
              className="addButton"
              title="Adicionar pedido"
              onClick={handleNewDish}
            />
          </SendFormWithImage>
        </Form>
      </Main>

      <Footer />
    </Container>
  );
}
