import * as S from "./styles"
import { IProject } from "../../Interface/project.interface"

const Project = ({children}: IProject) => {
    return <S.Section>{children}</S.Section>
       
};

export default Project;