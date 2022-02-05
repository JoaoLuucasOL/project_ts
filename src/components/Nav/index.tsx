import * as S from "./styles"
import { Link, useHistory } from "react-router-dom"
import {toast} from "react-toastify"
import { useCallback } from "react"
import { useAuth } from "hooks/auth"


const Nav = () => {

    const { signOut } = useAuth();
    const history = useHistory();

    const sair = useCallback(async () => {
        try {
        await signOut();
        toast.success("Até a próxima!!!");
        history.push("/");
        } catch (error) {
        toast.error("Falha ao sair!");
        }
    }, [history, signOut]);

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
                <button type="button" onClick={sair}>
                    Sair
                </button>
            </li>
        </ul>
        </S.Nav>
    )
}

export default Nav