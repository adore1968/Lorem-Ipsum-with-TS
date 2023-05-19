import { useState } from "react";
import { AppContext } from "../hooks/AppContext";
import data from "../data/data";
import { HandleChangeProps, HandleSubmitProps } from "../shared/interfaces";

type Props = { children: JSX.Element };

export function AppProvider({ children }: Props) {
  const [index, setIndex] = useState<number>(0);
  const [paragraphs, setParagraphs] = useState<string[]>([]);

  const handleChange = ({ target }: HandleChangeProps) => {
    setIndex(parseInt(target.value));
  };

  const handleSubmit = (e: HandleSubmitProps) => {
    e.preventDefault();
    if (index >= data.length) {
      const newParagraphs = data.slice(0, data.length);
      setParagraphs(newParagraphs);
    } else if (index <= 0) {
      const newParagraphs = data.slice(0, 1);
      setParagraphs(newParagraphs);
    } else {
      const newParagraphs = data.slice(0, index);
      setParagraphs(newParagraphs);
    }
  };

  return (
    <AppContext.Provider
      value={{ index, paragraphs, handleChange, handleSubmit }}
    >
      {children}
    </AppContext.Provider>
  );
}
