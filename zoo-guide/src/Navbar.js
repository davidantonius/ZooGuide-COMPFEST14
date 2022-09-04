import React from "react";

export default function Navbar({ propName }) {
  return (
    <nav className="nav">
      <h1>Selamat Datang, {propName}</h1>
    </nav>
  );
}
