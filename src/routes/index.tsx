import {Switch, Route} from "react-router-dom"
import {Home, Inicio, Perfil, Cadastro, Login, Previa, Foruns, Cursos_Disp, Cursos_Adq} from "pages"

const Routes = () => {
    return (
        <Switch>

            <Route path="/Login/Inicio/Cursos_Disp" exact component={Cursos_Disp}/>
            <Route path="/Login/Inicio/Cursos_Adq" exact component={Cursos_Adq}/>
            <Route path="/Login/Inicio/Foruns" exact component={Foruns}/>
            <Route path="/Login/Inicio/Previa" exact component={Previa}/>
            <Route path="/Login/Inicio/Perfil" exact component={Perfil}/>
            <Route path="/Login/Inicio" exact component={Inicio}/>
            <Route path="/Login" exact component={Login}/>
            <Route path="/Cadastro" exact component={Cadastro}/>
            <Route path="/" exact component={Home}/> 
        </Switch>
    )
}

export default Routes 