import React from "react";

export default function Catogrey({ catlist, setfinalcat }) {
  let cat = catlist.map((v, i) => {
    return (
      <li key={i} className="catlist" onClick={() => setfinalcat(v)}>
        {v}
      </li>
    );
  });
  return (
    <div>
      <ul>{cat}</ul>
    </div>
  );
}
