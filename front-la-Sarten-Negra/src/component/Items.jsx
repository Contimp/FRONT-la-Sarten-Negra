import React from "react";
import menu from "../menu";

export default function Items() {
  return (
    <div>
      {menu.map((b) => (
        <div key={b.nombre}>
          <h3>{b.nombre}</h3>
          <p>{b.precio}</p>
        </div>
      ))}
    </div>
  );
}
