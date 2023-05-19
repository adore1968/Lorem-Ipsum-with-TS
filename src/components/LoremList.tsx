import { useAppContext } from "../hooks/AppContext";
import LoremItem from "./LoremItem";

function LoremList() {
  const { paragraphs } = useAppContext();
  return (
    <div className="container mx-auto mt-10">
      {paragraphs.map((value, index) => (
        <LoremItem key={index} value={value} />
      ))}
    </div>
  );
}

export default LoremList;
