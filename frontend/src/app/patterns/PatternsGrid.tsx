import { getPatterns } from "../services/v1/patterns";
import { Pattern } from "../types/Pattern";
import PatternCard from "./PatternCard";
import "./PatternsGrid.css";

const PatternsGrid = async () => {
  let patterns: Pattern[] = [];

  try {
    patterns = await getPatterns();
  } catch (error) {
    return <p>Error loading patterns.</p>;
  }

  return (
    <div className="pattern-grid">
      {patterns.map((pattern: Pattern) => (
        <PatternCard key={pattern.id} pattern={pattern} />
      ))}
    </div>
  );
};

export default PatternsGrid;
