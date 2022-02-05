import { useEffect, useState } from "react"
import * as S from "./styles"
import {Header, Nav, Footer, Project} from "components"
import {apiCurso} from "services/data"
import { ICursoData } from "Interface/curso.interface"
import { Loading } from "components"


const Cursos_Disp = () => {
    const [cursos, setCursos] = useState<ICursoData[]>()
    const [isLoading, setIsLoading] = useState(true)

    useEffect (() => {
        async function fetchData() {
            const response = await apiCurso.index()
            setCursos(response.data)
            setIsLoading(false)
        }
        fetchData()
    }, [])

    return (
        <>
        {
            isLoading ? (<Loading />) : (
                <>
                    <Header />
                    <Nav />
                    <S.Main>
                        <h2>Cursos Disponíveis</h2>
                        {cursos && cursos.map((item) => (
                            <Project key={item.id}>
                                <img alt="foto curso"/>
                                <h3>Curso: {item.titulo}</h3>
                                <h4>Avaliação (0/5): </h4>
                                <div>
                                    <p>Adquirir Curso R${item.preco}</p>
                                </div>
                            </Project>
                        ))}
                    </S.Main>
                    <Footer />
                </>
            )
        }
        
        </>
    )
}

export default Cursos_Disp