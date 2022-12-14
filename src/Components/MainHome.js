import React, { useState } from "react";
import { MdClose } from "react-icons/md";
import styled from "styled-components";

export default function MainHome() {
  const [tagValue, setTagValue] = useState("");
  const [tags, setTags] = useState([]);

  const addTags = (e) => {
    if (e.keyCode === 13 && tagValue) {
      if (isSimilarTag(tagValue)) {
        alert("exist");
        return;
      }
      setTags([...tags, tagValue]);
      setTagValue("");
    }
  };
  const isSimilarTag = (val) => {
    if (tags.includes(val)) {
      return true;
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
      <DivMain>
        {tags.map((item, index) => {
          return (
            <Button key={index}>
              {item}
              <Span onClick={() => deletTag(item)}>{<MdClose />}</Span>
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
      </DivMain>
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
const DivMain = styled.div`
  width: 50%;
  height: auto;
  padding: 10px;
  display: flex;
  flex-wrap: wrap;
  border: 2px solid black;
  border-radius: 5px;
  @media (max-width: 768px) {
    width: 90%;
    padding: 10px;
  }
`;

const Button = styled.button`
  width: auto;
  height: 35px;
  margin: 1px;
  padding: 0px 10px;
  font-size: 18px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Input = styled.input`
  width: 30%;
  height: 35px;
  border: 1px solid black;
  font-size: 18px;
  padding-left: 5px;
  border-radius: 5px;
  @media (max-width: 768px) {
    width: 40%;
  }
`;

const Span = styled.span`
  color: red;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  padding-left: 5px;
`;
