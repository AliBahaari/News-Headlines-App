import '../styles/Navbar.css';
import { Link } from 'react-router-dom';

export default function Navbar() {
  return (
    <div>
      <nav>
        <ul className="Navbar">
          <li><Link to="/">News</Link></li>
          <li><a href="https://alibahaari.github.io" target="blank">Contact</a></li>
          <li><a href="https://github.com/AliBahaari/News-Headlines-App" target="blank">Repository</a></li>
        </ul>
      </nav>
    </div>
  );
}