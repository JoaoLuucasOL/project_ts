import {Header, Footer} from "components"
import { Link } from "react-router-dom"
import * as S from "./styles"

const Home = () => {
    return <>
        <Header />
        <S.Main>
            <section>
                <br /><br />
                <h2>Junte-se a nós!</h2>
                <p>Cadastre-se agora ou faça login e jogue com pessoas de todo o 
                    mundo a partir do conforto de sua casa!</p>
            </section>
            <nav>
                <ul>
                    <li>
                        <Link to="/Cadastro">Cadastre-se</Link>
                    </li>
                    <li>
                        <Link to="/Login">Login</Link>
                    </li>
                </ul>
            </nav>
        </S.Main>
        
        <Footer />

    </>;
}

export default Home;