import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axios from "../../axios";

export default function SettingTags() {
  const navigate = useNavigate();
  const [tags, setTags] = useState(null);
  const selectedTags = [];

  useEffect(() => {
    axios({
      method: "GET",
      url: "/tags",
    }).then((tags) => setTags(tags.data));
  }, []);

  const handleClick = (tag) => {
    const element = document.getElementById(tag._id);
    if (selectedTags.includes(tag.tag)) {
      selectedTags.splice(selectedTags.indexOf(tag.tag), 1);
      element.classList.toggle("tag-active");
    } else {
      selectedTags.push(tag.tag);
      element.classList.toggle("tag-active");
    }
  };

  return (
    <div className="wrapper" style={{ width: 600, paddingBottom: 240 }}>
      <h1>
        Choose interesting
        <br />
        things
      </h1>
      <div className="tags">
        {tags ? (
          tags.map((tag) => (
            <div
              onClick={() => handleClick(tag)}
              className="tag"
              key={tag._id}
              id={tag._id}
            >
              {tag.tag}
            </div>
          ))
        ) : (
          <p>loading...</p>
        )}
      </div>
    </div>
  );
}
