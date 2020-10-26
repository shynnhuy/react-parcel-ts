import React from "react";

export interface IHelloProps {
  name: string;
}

const Hello: React.FC<IHelloProps> = ({ name }) => {
  return (
    <div>
      <h1>Oh Wow - {name}</h1>
    </div>
  );
};

export { Hello };
