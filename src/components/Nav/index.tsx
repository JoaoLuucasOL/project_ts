import * as S from "./styles"
import { Link } from "react-router-dom"

const Nav = () => {
    return (
        <S.Nav>
            <ul>
            <li>
                <Link to="/Login/Inicio">Início</Link>
            </li>
            <li>
                <Link to="/Login/Inicio/Perfil">Perfil</Link>
            </li>
            <li>
                <Link to="/">Sair</Link>
            </li>
        </ul>
        </S.Nav>
    )
}

export default Nav