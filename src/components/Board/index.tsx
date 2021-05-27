import List from "../List";

import { loadLists } from "../../services/api";
import { BoardCards } from "../../types";
import { Container } from "./styles";

const lists: BoardCards[] = loadLists();

function Board() {
  return (
    <Container>
      {lists.map((list) => (
        <List key={list.title} data={list} />
      ))}
    </Container>
  );
}

export default Board;
