import React from 'react'

const TestiData = ({ number, text }) => {
  return (
    <div className="flex shrink-0 flex-col items-center gap-3.5 text-center">
      <div className="font-sans text-8xl font-light">{number}</div>
      <div className="h-px w-full bg-[linear-gradient(90deg,rgba(0,0,0,0)_2%,#D9D9D9_50.55%,rgba(0,0,0,0)_100%)]" />
      <h4 className="whitespace-pre text-center font-outfit text-xl font-light">
        {text}
      </h4>
    </div>
  );
};

export default TestiData;

