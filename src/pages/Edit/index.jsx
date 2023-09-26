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

import { Link, useNavigate, useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import { api } from "../../services/api";

export function Edit() {
  const params = useParams();
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

  async function handleEditDish() {
    if (!imageFile) {
      return alert("Adicione uma imagem para o prato");
    }

    if (!name) {
      return alert("Adicione um titulo para o prato");
    }

    if (!description) {
      return alert("Adicione uma descrição para o prato");
    }

    if (!category) {
      return alert("Adicione um categoria para o prato");
    }

    if (!price) {
      return alert("Adicione um preço para o prato");
    }

    if (newIngredient) {
      return alert(
        "Você deixou um ingrediente no campo para adicionar, mas não clicou em adicionar.Clique para adicionar ou deixe o campo vazio."
      );
    }

    api.patch(`/dishes/${params.id}`, {
      name,
      description,
      price,
      category,
      ingredients,
    });

    if (imageFile) {
      const formData = new FormData();
      formData.append("photo", imageFile);

      api.patch(`/dishes/photo/${params.id}`, formData);
    }

    alert("Prato modificado com sucesso");
  }

  async function handleDeleteDish() {
    const adminConfirm = confirm("Você gostaria de deletar esse prato?");
    if (adminConfirm) {
      api.delete(`/dishes/${params.id}`);
      alert("o prato foi deletado");
      navigate("/");
    }
    return;
  }

  useEffect(() => {
    async function fetchDish() {
      const response = await api.get(`/dishes/${params.id}`);

      const { name, description, category, price, ingredients } = response.data;
      setName(name);
      setDescription(description);
      setCategory(category);
      setPrice(price);
      setIngredients(ingredients.map((ingredient) => ingredient.name));
    }

    fetchDish();
  }, []);

  return (
    <Container>
      <Header />
      <Main>
        <ButtonBack>
          <Link to="/">
            <IoIosArrowBack size={32} />
            Voltar
          </Link>

          <h2>Editar prato</h2>
        </ButtonBack>

        <Form>
          <InputWrapper>
            <Input
              label="name"
              title="Nome do prato"
              type="text"
              placeholder="Ex.: Salada Ceasar"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />

            <Input
              label="name"
              title="Preço"
              type="text"
              placeholder="R$ 00,00"
              value={price}
              onChange={(e) => setPrice(e.target.value)}
            />

            <Input
              label="name"
              title="Categoria"
              type="text"
              placeholder="Categoria"
              value={category}
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
              value={description}
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
              className="deleteButton"
              title="Excluir Prato"
              onClick={handleDeleteDish}
            />

            <Button
              className="addButton"
              title="Editar prato"
              onClick={handleEditDish}
            />
          </SendFormWithImage>
        </Form>
      </Main>

      <Footer />
    </Container>
  );
}
