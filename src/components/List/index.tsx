import { MdAdd } from "react-icons/md";

import { Cards, BoardCards } from "../../types";
import Card from "../Card";

import { Container } from "./styles";

interface ListProps {
  data: BoardCards;
}

function List({ data }: ListProps) {
  return (
    <Container done={data.done}>
      <header>
        <h2>{data.title}</h2>
        {data.creatable && (
          <button type="button">
            <MdAdd size={24} color="#FFF" />
          </button>
        )}
      </header>

      <ul>
        {data.cards.map((card: Cards) => (
          <Card key={card.id} data={card} />
        ))}
      </ul>
    </Container>
  );
}

export default List;
