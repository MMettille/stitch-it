import getPatterns from "../services/v1/patterns"

import PatternsGrid from "./PatternsGrid";
import PatternCard from "./PatternCard";

const Patterns = () => {
  return (
    <>
      <p>What will you start next?</p>
      <PatternsGrid />
    </>
  );
};

export default Patterns
