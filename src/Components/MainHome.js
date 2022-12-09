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
    <div
    style={{width:"100%",height:"93vh",display:"flex", alignItems:"flex-start", justifyContent:"center", paddingTop:"100px"}}
    
    >

          {tags.map((item, index) => {
            return (
              <button key={index}
              style={{width:"auto",height:"35px",padding:" 0px 10px"}}
              >
                {item}
                <span 
              style={{color:"red",cursor:"pointer"}}
                
                onClick={() => deletTag(item)}>{<MdClose/>}</span>
              </button>
            );
          })}

          <input
              style={{width:"30%",height:"35px"}}

            type="text"
            placeholder="type and enter"
            value={tagValue}
            onChange={(e) => onChange(e)}
            onKeyDown={addTags}
          />

        
    </div>
  )
}
