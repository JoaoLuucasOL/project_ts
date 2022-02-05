import * as S from "./styles"
import {Header, Nav, Footer} from "components"
import user from "assets/img/user.svg"

const Perfil = () => {
    return (
        <>
        <Header />
        <Nav />
        <S.Main>
            
            <h2>Perfil</h2> 
            <section>    
                <section>
                    <h4>Seu nome: </h4>
                    <p>Fulano</p> <br />
                </section>
                <section>
                    <h4>Email: </h4>
                    <p>fulano@yahoo.com.br</p>
                </section>
                <section>
                    <h4>Cursos adquiridos: </h4>
                    <p>xxx</p> <br />
                </section>
            </section>
            
            <picture>
                <img src={user} alt="foto do usuário"/>
            </picture>

            <div>
                <p>Modificar dados</p>
            </div>
            
        </S.Main>
        <Footer />
        </>
    )
}

export default Perfil