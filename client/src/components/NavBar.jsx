import React from "react";

export default function NavBar() {
  return (
    <nav className="nav">
      <a href="/" className="site-title">Site Title</a>
      <ul>
        <li className="active">
          <a href="/pricing">Pricing</a>
        </li>

        <li>
          <a href="/about">About</a>
        </li>
      </ul>
    </nav>
  );
}