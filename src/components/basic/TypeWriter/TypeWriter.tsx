import React from 'react'
import { useTypewriter, Cursor } from 'react-simple-typewriter';


interface PropType{
  Sentences: string[];
  typeSpeed?: number;
  deleteSpeed?: number;
  delay?: number;
  color?: string

}
const TypeWriter:React.FC<PropType> = ({Sentences, typeSpeed, deleteSpeed, delay, color}) => {
  
  const [ text ] = useTypewriter({
    words: Sentences,
    loop: true,
    typeSpeed: typeSpeed, //90
    deleteSpeed: deleteSpeed, //90
    delaySpeed: delay, // 2000
  });
  const textColor = color;
  return (
    <div>
      <p className="tracking-tight drop-shadow-lg bg-transparent text-sm" style={{color: textColor}}>
        {text}
        <Cursor cursorStyle="|" />
      </p>
    </div>
  )
}

export default TypeWriter