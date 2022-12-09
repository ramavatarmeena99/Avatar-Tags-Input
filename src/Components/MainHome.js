import React, { useState } from 'react'
import { MdClose } from "react-icons/md"

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
    <div>
              <div className="tagInput">
          {tags.map((item, index) => {
            return (
              <button key={index}>
                {item}
                <span onClick={() => deletTag(item)}>X</span>
              </button>
            );
          })}

          <input
            type="text"
            placeholder="type and enter"
            value={tagValue}
            onChange={(e) => onChange(e)}
            onKeyDown={addTags}
          />
        </div>
        
    </div>
  )
}
