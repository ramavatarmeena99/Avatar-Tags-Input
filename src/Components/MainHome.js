import React, { useState } from "react";
import { MdClose } from "react-icons/md";
import styled from "styled-components";

export default function MainHome() {
  const [tagValue, setTagValue] = useState("");
  const [tags, setTags] = useState([]);

  const addTags = (e) => {
    if (e.keyCode === 13 && tagValue) {
      setTags([...tags, tagValue]);
      setTagValue("");
    }
  };

  const deletTag = (val) => {
    let reaminTags = tags.filter((t) => t !== val);
    setTags(reaminTags);
  };
  const onChange = (e) => {
    let value = e.target.value;
    setTagValue(value);
  };
  return (
    <Main>
      {tags.map((item, index) => {
        return (
          <Button
            key={index}
          >
            {item}
            <Span
              onClick={() => deletTag(item)}
            >
              {<MdClose />}
            </Span>
          </Button>
        );
      })}

      <Input
        type="text"
        placeholder="type and enter"
        value={tagValue}
        onChange={(e) => onChange(e)}
        onKeyDown={addTags}
      />
    </Main>
  );
}

const Main = styled.div`
  width: 100%;
  height: 93vh;
  display: flex;
  align-items: flex-start;
  justify-content: center;
  padding-top: 100px;
`;

const Button = styled.button`
width: auto; 
height:35px;
padding: 0px 10px;
font-size:18px;
`;

const Input = styled.input`
width:30%;
height:35px;
border:1px solid black;
font-size:18px;
padding-left:5px;
`;

const Span = styled.span`
color: red; 
cursor:pointer;
`;
