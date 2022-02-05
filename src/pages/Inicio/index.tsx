import * as S from "./styles"
import { Link } from "react-router-dom"
import {Header, Nav, Footer} from "components"

const Inicio = () => {
    return (
        <>
        <Header />
        <Nav />
        <S.Main>
            <section>
                <br /><br />
                <h2>Início</h2>
                <br /><br />
            </section>
            <section>
                <Link to="/Login/Inicio/Perfil">Perfil</Link>
            </section>

            <section>
                <Link to="/Login/Inicio/Previa">Prévia</Link>
            </section>

            <section>
                <Link to="/Login/Inicio/Cursos_Disp">Cursos Disponíveis</Link>
            </section>

            <section>
                <Link to="/Login/Inicio/Cursos_Adq">Cursos Adquiridos</Link>
            </section>

            <section>
                <Link to="/Login/Inicio/Foruns">Fóruns dos Cursos</Link>
            </section>
        </S.Main>
        <Footer />
        </>
    )
}

export default Inicio