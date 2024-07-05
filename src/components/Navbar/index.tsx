import './styles.css';
import logo  from '../../assets/render.png';
import { ButtonSignIn } from '../ButtonSignIn';

export function Navbar() {
  return (
    <>
      <nav>
        <div className="logo">
          <a href="/">
            <img src={logo} />
          </a>
        </div>
        
        <ul>
          <li>
              <a className="NavItens" href="/">INÍCIO</a>
          </li>
          <li>
              <a className="NavItens" href="/galeria">GALERIA</a>
          </li>
          <li>
              <a className="NavItens" href="/planos">PLANOS</a>
          </li>
          <li>
              <a className="NavItens" href="/artistas">ARTISTAS</a>
          </li>
          <li>
              <a className="NavItens" href="/about">SOBRE NÓS</a>
          </li>
        </ul>

        <ButtonSignIn />
      </nav>
    </>
  );
}