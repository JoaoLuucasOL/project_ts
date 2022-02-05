import { useEffect, useState } from "react"
import * as S from "./styles"
import {Header, Nav, Footer, Project} from "components"
import {apiCurso} from "services/data"
import { ICursoData } from "Interface/curso.interface"

const Foruns = () => {
    const [cursos, setCursos] = useState<ICursoData[]>()

    useEffect (() => {
        async function fetchData() {
            const response = await apiCurso.index()
            setCursos(response.data)
        }
        fetchData()
    }, [])

    return (
        <>
        <Header />
        <Nav />
        <S.Main>
            <h2>Fóruns dos Cursos</h2>
            {cursos && cursos.map((item) => (
                <Project key={item.id}>
                    <img alt="foto curso"/>
                    <h3>Curso: {item.titulo}</h3>
                    <div>
                        <p>Acessar Fórum</p>
                    </div>
                </Project>
            ))}
        </S.Main>
        <Footer />
        </>
    )
}

export default Foruns