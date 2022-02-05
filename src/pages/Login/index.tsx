import * as S from "./styles"
import { Link, useHistory } from "react-router-dom" 
import {Header, Footer} from "components"
import Button from "styles/Button"
import { useCallback, useEffect, useState } from "react"
import {useForm} from "react-hook-form"
import {toast} from "react-toastify"
import { AxiosError } from "axios"
import {useAuth} from "hooks/auth"
import {Loading} from "components"

const Login = () => {
    const [isLoading, setIsLoading] = useState(true)
    const {register, handleSubmit} = useForm()
    const {signIn} = useAuth()
    const history = useHistory()

    const handleLogin = useCallback(async (data) => {
        try {
            setIsLoading(true)
            console.log(data)
            await signIn(data)
            toast.success("Login realizado com sucesso!")
            history.push("/Login/Inicio")
        } catch (error) {
            console.log(error)
            const err = error as AxiosError
            const msg = err.response?.data
            toast.error(`Falha ao fazer o login! ${msg}`)
        } finally {
            setIsLoading(false)
        }
    }, [signIn, history]);

    useEffect(() => {
        setIsLoading(false);
      }, []);
      
    return (
        <>
        {
            isLoading ? (<Loading />) : (
                <>
                            <Header />
                            <S.Main>
                                <form method="POST" onSubmit={handleSubmit(handleLogin)}>
                                    <fieldset>
                                        <legend>Login</legend>

                                        <div>
                                            <label>Email: </label>
                                            <input type="email" placeholder="Email" required {...register("email")}/> 
                                        </div>
                                        <div>
                                            <label>Senha: </label>
                                            <input type="password" placeholder="Password" required {...register("password")}/>
                                        </div>

                                        <section>
                                            <Button type="submit">
                                                Entrar
                                            </Button>
                                            <Link to="/">Voltar</Link>
                                        </section>
                                    
                                    </fieldset>
                                </form>
                            </S.Main>
                            <Footer />
                </>
            )
        }
        </>
    )
}

export default Login