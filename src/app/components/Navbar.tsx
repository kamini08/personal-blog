import "../styles/navbar.css";

export default function Navbar() {
  return (
    <nav>
      <div className="nav-bg"></div>
      <ul>
        <li>
          <a href="/">Blog</a>
        </li>
        <li>
          <a href="/about">About</a>
        </li>
        <li>
          <a href="/contact">Contact</a>
        </li>
      </ul>
    </nav>
  );
}
