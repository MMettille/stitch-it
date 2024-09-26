"use client"

import { useRouter } from 'next/navigation'

import { Pattern } from "../types/Pattern";
import "./PatternCard.css";

const PatternCard = ({ pattern }: { pattern: Pattern }) => {
    const router = useRouter()

    return (
        <div className="pattern-card" onClick={() => router.push(`/patterns/${pattern.id}`)}>
            <h3>Title: {pattern.title}</h3>
            <p>Author: {pattern.author}</p>
        </div>
    );
};

export default PatternCard