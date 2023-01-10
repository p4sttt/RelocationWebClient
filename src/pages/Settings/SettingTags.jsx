import React from "react";
import { useEffect } from "react";
import axios from "../../axios";
import { useSettings } from "../../store";
import shallow from "zustand/shallow";

export default function SettingTags() {
  const { tags, setTags } = useSettings(
    (state) => ({ tags: state.settings.tags, setTags: state.setTags }),
    shallow
  );
  const [allTags, setAllTags] = React.useState();

  useEffect(() => {
    axios({
      method: "GET",
      url: "/tags",
    }).then((tags) => setAllTags(tags.data));
  }, []);

  const handleClick = (tag) => {
    if (tags.includes(tag)) {
      setTags([...tags.filter((e) => e !== tag)]);
    } else {
      setTags([...tags, tag]);
    }
  };

  return (
    <div
      className="wrapper"
      style={{ width: 600, paddingBottom: 240 }}
    >
      <h1>
        Choose interesting
        <br />
        things
      </h1>
      <div className="tags">
        {allTags ? (
          allTags.map((tag) => (
            <div
              className={tags.includes(tag.tag) ? "tag tag-active" : "tag"}
              key={tag._id}
              onClick={() => handleClick(tag.tag)}
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
