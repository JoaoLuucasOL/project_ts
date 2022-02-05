import * as S from "./styles"
import { Link, useHistory } from "react-router-dom"
import {Header, Footer} from "components"
import {useForm} from "react-hook-form"
import Button from "styles/Button"
import { useCallback, useEffect, useState } from "react"
import {Loading} from "components"
import { apiUser } from "services/data"
import {toast} from "react-toastify"
import { AxiosError } from "axios"

const Cadastro = () => {
    const [isLoading, setIsLoading] = useState(true)
    const {register, handleSubmit} = useForm()
    const history = useHistory()

    const handleRegister = useCallback(async (data) => {
        try {
            setIsLoading(true)
            await apiUser.register(data)
            toast.success("Cadastro realizado com sucesso!")
            history.push("/Login")
        } catch (error) {
            const err = error as AxiosError
            const msg = err.response?.data.errors.map((i:any)=>i.message)
            toast.error(`Falha ao cadastrar! ${msg.join(" ")}`)
        } finally {
            setIsLoading(false)
        }
    }, [history]);

    useEffect(() => {
        setIsLoading(false);
      }, []);
      
    return (
        <>
        {isLoading ? (
            <Loading />
        ) : (
            <>
                <Header />
                <S.Main>
                    <form method="POST" onSubmit={handleSubmit(handleRegister)}>
                        <fieldset>
                            <legend>Cadastro</legend>

                            <div>
                                <label>Nome: </label>
                                <input type="text" placeholder="Nome" required {...register("nome")}/>
                            </div>
                            <div>
                                <label>Sobrenome: </label>
                                <input type="text" placeholder="Sobrenome" required {...register("sobrenome")}/>
                            </div>
                            <div>
                                <label>Email: </label>
                                <input type="email" placeholder="Email" required {...register("email")}/>
                            </div>
                            <div>
                                <label>Defina uma senha: </label>
                                <input type="password" placeholder="Password"required {...register("password")} />
                            </div>

                            <section>
                                <Button type="submit">
                                     Enviar
                                </Button>

                                <Link to="/">Voltar</Link>
                            </section>

                        </fieldset>
                    </form >
                </S.Main>
                <Footer />
            </>
            )
        }
        
        </>
    )
}

export default Cadastro