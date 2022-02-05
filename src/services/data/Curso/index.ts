import { ICursoData } from 'Interface/curso.interface';
import api from 'services/api';

class CursoData {
    index() {
        return api.get<ICursoData[]>('/cursos')
    }
}

export default new CursoData()