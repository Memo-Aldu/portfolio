'use client';

import React, { useRef, ReactNode } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import Link from 'next/link';

export type CharacterProps = {
  children: ReactNode;
  style?: React.CSSProperties;
  animatedParts?: Array<{ text: string, isLink?: boolean, href?: string }>;
};

export type WordProps = {
  word: string;
  start: number;
  end: number;
  progress: any;
  isLink?: boolean;
  href?: string;
};

export type CharProps = {
  character: string;
  start: number;
  end: number;
  progress: any;
};

export default function Character({ children, style, animatedParts }: CharacterProps) {
  const element = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: element,
    offset: ['start 0.9', 'center center'],
  });

  if (!React.isValidElement(children)) {
    console.error('Children must be a valid React element');
    return null;
  }

  if (!animatedParts || animatedParts.length === 0) {
    console.error('animatedParts are required for the Character component');
    return null;
  }

  return (
    <div ref={element} style={style} className="">
      {React.cloneElement(children as React.ReactElement, {}, 
        animatedParts.map((part, index) => (
          <span key={index}>
            <Word
              key={index}
              progress={scrollYProgress}
              start={index / animatedParts.length}
              end={(index + 1) / animatedParts.length}
              word={part.text}
              isLink={part.isLink}
              href={part.href}
            />
            {" "}
          </span>
        ))
      )}
    </div>
  );
}

const Word = ({ word, start, end, progress, isLink, href }: WordProps) => {
  const characters = Array.from(word);
  const amount = end - start;
  const step = amount / word.length;

  if (isLink) {
    return (
      <Link href={href || "#"}>
        <span className="text-[#F7A650] underline">
          {characters.map((character, index) => {
            const s = start + index * step;
            const e = s + step;
            return <Char key={index} start={s} end={e} progress={progress} character={character} />;
          })}
        </span>
      </Link>
    );
  }

  return (
    <span className="">
      {characters.map((character, index) => {
        const s = start + index * step;
        const e = s + step;
        return <Char key={index} start={s} end={e} progress={progress} character={character} />;
      })}
    </span>
  );
};

const Char = ({ character, start, end, progress }: CharProps) => {
  const opacity = useTransform(progress, [start, end], [0.3, 1]);

  return (
    <motion.span style={{ opacity }}>
      {character}
    </motion.span>
  );
};
