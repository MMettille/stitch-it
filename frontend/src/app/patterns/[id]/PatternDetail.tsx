import { Pattern } from "../types/Pattern";
import { Loading } from "dopamine-design";

const PatternDetail = ({ pattern }: Pattern) => {
  return (
    <div className="pattern-detail-view">
      <h3>{pattern.name}</h3>
      <p>Craft: {pattern.craft_name}</p>
      <p>{pattern.author}</p>
      <p>{pattern.description}</p>
    </div>
  );
};

export default PatternDetail;
