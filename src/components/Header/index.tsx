import * as S from "./styles"
import main_logo from "assets/img/main_logo.svg"

const Header = () => {
    return (
        <S.Header>
            <picture>
                <img src={main_logo} alt="Logo do site" />
            </picture>
            <h1>Chess Academy</h1>
        </S.Header>
    )
}

export default Header