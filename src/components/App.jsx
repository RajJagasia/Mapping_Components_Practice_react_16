import React from "react";
import Entry from "./Entry";
import Emojipedia from "../emojipedia";

function allInfo(info) {
  return (
    <Entry
      key={info.id}
      emoji={info.emoji}
      name={info.name}
      meaning={info.meaning}
    />
  );
}

function App() {
  return (
    <div>
      <h1>
        <span>emojipedia</span>
      </h1>
      <dl className="dictionary">{Emojipedia.map(allInfo)}</dl>
    </div>
  );
}

export default App;
