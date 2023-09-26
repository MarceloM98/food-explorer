import { Container, Main } from "./styles";

import { Header } from "../../components/Header/";
import { Footer } from "../../components/Footer/";
import { Card } from "../../components/Card/";
import { Section } from "../../components/Section/";

import { useState, useEffect } from "react";
import { api } from "../../services/api";

import bannerIMG from "../../assets/main_image.png";

export function Home() {
  const [dishes, setDishes] = useState([]);
  const [search, setSearch] = useState("");

  useEffect(() => {
    async function fetchDishes() {
      const response = await api.get(`/dishes?userQuery=${search}`);
      setDishes(response.data);
    }

    fetchDishes();
  }, [search]);

  return (
    <Container>
      <Header search={setSearch} />

      <Main>
        <section className="Banner">
          <img src={bannerIMG} alt="Macarrons" />

          <div className="Banner-background">
            <div>
              <h2>Sabores inigualáveis</h2>
              <span>
                Sinta o cuidado do preparo com ingredientes selecionados
              </span>
            </div>
          </div>
        </section>

        {dishes.filter((dish) => dish.category == "Refeicao").length > 0 && (
          <Section type="Refeições">
            {dishes
              .filter((dish) => dish.category == "Refeicao")
              .map((dish) => (
                <Card key={String(dish.id)} data={dish} />
              ))}
          </Section>
        )}

        {dishes.filter((dish) => dish.category == "Sobremesa").length > 0 && (
          <Section type="Sobremesa">
            {dishes
              .filter((dish) => dish.category == "Sobremesa")
              .map((dish) => (
                <Card key={String(dish.id)} data={dish} />
              ))}
          </Section>
        )}

        {dishes.filter((dish) => dish.category == "Bebida").length > 0 && (
          <Section type="Bebidas">
            {dishes
              .filter((dish) => dish.category == "Bebida")
              .map((dish) => (
                <Card key={String(dish.id)} data={dish} />
              ))}
          </Section>
        )}
      </Main>

      <Footer />
    </Container>
  );
}
