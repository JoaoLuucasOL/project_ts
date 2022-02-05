import { useEffect, useState } from "react"
import * as S from "./styles"
import {Header, Nav, Footer, Project} from "components"
import {apiCurso} from "services/data"
import { ICursoData } from "Interface/curso.interface"

const Cursos_Adq = () => {
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
            <h2>Cursos Adquiridos</h2>
            {cursos && cursos.map((item) => (
                <Project key={item.id}>
                    <img alt="foto curso"/>
                    <h3>Curso {item.id}: {item.titulo}</h3>
                    <h4>Concluído (%): </h4>
                    <div>
                        <p>Acessar Curso</p>
                    </div>
                </Project>
            ))}
        </S.Main>
        <Footer />
        </>
    )
}

export default Cursos_Adq