import React from "react";
import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { useParams } from "react-router-dom";

// const URI = 'http://localhost:3000/items/'

export default function AddItem() {
  const [plato, setPlato] = useState("");
  const [cantidad, setCantidad] = useState("");
  const navigate = useNavigate();
  const { email } = useParams();

  const postItem = async (e) => {
    e.preventDefault();
    await axios.post(URI + email, { plato, cantidad });
    navigate(`/home/${email}`);
  };

  return (
    <div>
      <form onSubmit={postItem}>
        <div>
          <label>Plato</label>
          <input value={plato} onChange={(e) => setPlato(e.target.value)} />
        </div>
        <div>
          <label>Cantidad</label>
          <input
            value={cantidad}
            onChange={(e) => setCantidad(e.target.value)}
          />
        </div>
        <button>Add item</button>
      </form>
    </div>
  );
}
