import {Switch, Route} from "react-router-dom"
import {Home, Inicio, Perfil, Cadastro, Login, Previa, Foruns, Cursos_Disp, Cursos_Adq, StoreCurso, AdmCurso} from "pages"
import { PrivateRoute } from "./PrivateRoute"

const Routes = () => {
    return (
        <Switch>

            <PrivateRoute path="/adm/Inicio" exact component={Inicio}/>
            <PrivateRoute path="/adm/Inicio/Foruns" exact component={Foruns}/>
            <PrivateRoute path="/adm/Inicio/Cursos_Disp" exact component={Cursos_Disp}/>
            <PrivateRoute path="/adm/Inicio/Cursos_Adq" exact component={Cursos_Adq}/>
            <PrivateRoute path="/adm/Inicio/StoreCurso" exact component={StoreCurso}/>
            <PrivateRoute path="/adm/Inicio/AdmCurso" exact component={AdmCurso}/>

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