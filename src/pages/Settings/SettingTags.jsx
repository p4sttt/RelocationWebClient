import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import axios from "../../axios";
import { useSettings } from "../../hooks/useSettings";

export default function SettingTags() {
  const { setTags_, returnSettings } = useSettings();
  const [tags, setTags] = useState(null);

  const selectedTags = returnSettings().tags;

  useEffect(() => {
    axios({
      method: "GET",
      url: "/tags",
    }).then((tags) => setTags(tags.data));
  }, []);

  const handleClick = (tag) => {
    const element = document.getElementById(tag._id)
    if (selectedTags.includes(tag.tag)) {
      selectedTags.splice(selectedTags.indexOf(tag.tag), 1)
      setTags_(selectedTags)
      element.classList.toggle("tag-active")
    } else {
      selectedTags.push(tag.tag)
      setTags_(selectedTags)
      element.classList.toggle("tag-active")
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
              className={selectedTags.includes(tag.tag) ? "tag tag-active" : "tag"}
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
