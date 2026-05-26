import './Nav.css'
import { Link } from 'react-router-dom'
export default function Nav() {
    return(
        <nav>
            <ul>
                 <li>
                    <Link to="/">Início</Link>
                 </li>
                 <li>
                    <Link to="/locaisafetados">Locais Afetados</Link>
                 </li>
                  <li>
                    <Link to="/fazerdoacao">Fazer Doação</Link>
                 </li>
                  <li>
                    <Link to="/sobre">Sobre</Link>
                 </li>
                  <li>
                    <Link to="/login">Login</Link>
                 </li>
                  <li>
                    <Link to="/cadastro">Cadastro</Link>
                 </li>
                   <li>
                    <Link to="/tipodoacao">Tipos de Doação</Link>
                 </li>
                 
                  <li>
                    <Link to="/categoria">Categorias</Link>
                 </li>
              
            </ul>
        </nav>
    )
}