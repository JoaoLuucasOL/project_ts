import * as S from "./styles"
import main_logo_footer from "assets/img/main_logo_footer.svg"

const Footer = () => {
    return (
        <>
            <S.Footer>
                <picture>
                    <img src={main_logo_footer} alt="Logo do site" />
                </picture>
                <section>
                    <h4>Sobre</h4>
                    <p>Esta é uma página exemplo feita em função da disciplina 
                        Laboratório de Aplicações WEB, ministrada pelo professor 
                        Lázaro (Cefet-MG).</p>
                </section>
                <section>
                    <h4>Informações</h4>
                    <p>Deseja jogar xadrez bem? Saiba que o esporte exige muita 
                        dedicação e estudo. Junte-se a nós! </p>
                </section> 
            </S.Footer>
            <S.FooterBottom>
                <div>&copy; All rights preserved - CEFET-MG</div>
            </S.FooterBottom>
        </>
    )
}

export default Footer

