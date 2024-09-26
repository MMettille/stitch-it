"use client";

import { useParams } from 'next/navigation';
import { useEffect, useState } from 'react';
import { getPattern } from "../../services/v1/patterns";
import PatternDetail from "./PatternDetail";
import { Pattern } from "../types/Pattern";
import LoadingPage from "./loading"

const PatternDetailPage = () => {
  const { id } = useParams();
  const [pattern, setPattern] = useState<Pattern | null>(null);

  useEffect(() => {
    if(!id){
        return
    }
    const fetchPattern = async () => {
        const fetchedPattern = await getPattern({ id: Number(id) });
        setPattern(fetchedPattern);
    };

    fetchPattern();
  }, [id]);

  if(!pattern){
    return <LoadingPage />
  }
  return (
    <PatternDetail pattern={pattern} />
  );
}

export default PatternDetailPage;
