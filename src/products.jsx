import React from "react";

export default function Products({ plist }) {
  let a = plist.map((v, i) => {
    return (
      <div className="item" key={i}>
        <img src={`${v.thumbnail}`} alt="product" />
        <h3>{v.title}</h3>
        <h3>{v.price}$</h3>
        <p>{v.descripction}</p>
        <button>buy now</button>
      </div>
    );
  });
  return <>{a}</>;
}
