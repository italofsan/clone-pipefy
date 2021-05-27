export type Cards = {
  id: number;
  content: string;
  labels: string[] | never[];
  user?: string;
};

export type BoardCards = {
  title: string;
  creatable: boolean;
  cards: Cards[];
  done: boolean;
};
