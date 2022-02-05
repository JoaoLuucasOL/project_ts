import * as S from "./styles"
import {Header, Nav, Footer} from "components"
import torre from "assets/img/torre.svg"
import dama from "assets/img/dama.svg"
import bispo from "assets/img/bispo.svg"
import cavalo from "assets/img/cavalo.svg"

const Previa = () => {
    return (
        <>
        <body id="topo">
        <Header />
        <Nav />
        <S.Main>
            <section>
                <br /><br />
                <h2>Prévia</h2>
                <br /><br />
            </section>
            <nav>
                <ul>
                    <li>
                        <a href="#a1">A Dama</a>
                    </li>
                    <li>
                        <a href="#a2">O Cavalo</a>
                    </li>
                    <li>
                        <a href="#a3">O Bispo</a>
                    </li>
                    <li>
                        <a href="#a4">A Torre</a>
                    </li>
                </ul>
            </nav>
            
            <br /><br />  
            <section>
                <h3 id="a1">A Dama</h3>
                <img src={dama} alt="Dama"/>
                <p>text, text, text, text, text, text, text, text, 
                    text, text, text, text, text, text, text, text, 
                    text, text, text, text, text, text, text, text,  
                    text, text, text, text, text, text, text, text, 
                    text, text, text, text, text, text, text, text.</p>
                <br /><br />
                <a href="#topo">Voltar ao topo</a>
            </section>
            <br /><br /><br />
            <section>
                <h3 id="a2">O Cavalo</h3>
                <img src={cavalo} alt="Cavalo"/>
                <p>text, text, text, text, text, text, text, text, 
                    text, text, text, text, text, text, text, text, 
                    text, text, text, text, text, text, text, text,  
                    text, text, text, text, text, text, text, text, 
                    text, text, text, text, text, text, text, text.</p>
                <br /><br />
                <a href="#topo">Voltar ao topo</a>
            </section>
            <br /><br /><br />
            <section>
                <h3 id="a3">O Bispo</h3>
                <img src={bispo} alt="Bispo"/>
                <p>text, text, text, text, text, text, text, text, 
                    text, text, text, text, text, text, text, text, 
                    text, text, text, text, text, text, text, text,  
                    text, text, text, text, text, text, text, text, 
                    text, text, text, text, text, text, text, text.</p>
                <br /><br />
                <a href="#topo">Voltar ao topo</a>
            </section>
            <br /><br /><br />
            <section>
                <h3 id="a4">A Torre</h3>
                <img src={torre} alt="Torre"/>
                <p>text, text, text, text, text, text, text, text, 
                    text, text, text, text, text, text, text, text, 
                    text, text, text, text, text, text, text, text,  
                    text, text, text, text, text, text, text, text, 
                    text, text, text, text, text, text, text, text.</p>
                <br /><br />
                <a href="#topo">Voltar ao topo</a>
            </section>
            <br /><br /><br />
            
        </S.Main>
        <Footer />
        </body>
        </>
    )
}

export default Previa