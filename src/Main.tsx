import * as React from "react";
import { Hello } from "./components/Hello";

interface Props {}

export const Main = (props: Props) => {
  return (
    <>
      <Hello name="Hello World" />
    </>
  );
};
