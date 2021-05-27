import { useDrag } from "react-dnd";

import { Cards } from "../../types";
import { Container, Label } from "./styles";

interface CardProps {
  data: Cards;
}

function Card({ data }: CardProps) {
  const [{ isDragging }, dragRef] = useDrag({
    type: "CARD",
    collect: (monitor: any) => ({
      isDragging: monitor.isDragging(),
    }),
  });

  return (
    <Container ref={dragRef} isDragging={isDragging}>
      <header>
        {data.labels.map((label: string) => (
          <Label key={label} color={label} />
        ))}
      </header>
      <p>{data.content}</p>
      {data.user && <img src={data.user} alt="" />}
    </Container>
  );
}

export default Card;
