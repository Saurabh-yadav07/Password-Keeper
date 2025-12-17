import "./Header.css";

function Header({ count }) {
  return (
    <header className="header">
      <h1> Password Keeper</h1>
      <p>Total passwords saved: <strong>{count}</strong></p>
    </header>
  );
}

export default Header;
