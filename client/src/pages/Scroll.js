import styled from "styled-components";
import { useEffect, useRef } from "react";
import TypeIt from "typeit-react";

const options = {
  speed: 5,
  waitUntilVisible: true,
};

const style = {
  fontSize: "48px",
};

export function ScrollPrac() {
  return (
    <div>
      <TypeIt
        getBeforeInit={(instance) => {
          instance.type("hello, this is emily").pause(750).delete(5);
          return instance;
        }}
      />
    </div>
  );
}

const One = styled.div`
  width: 100%;
  height: 1000px;
  background-color: pink;
`;

const Two = styled(One)`
  background-color: yellow;
`;

const Three = styled(One)`
  background-color: blue;
`;
