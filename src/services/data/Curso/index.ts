import { ICursoData } from 'Interface/curso.interface';
import api from 'services/api';

class CursoData {
    index() {
        return api.get<ICursoData[]>('/cursos')
    }
    store(data: ICursoData) {
        return api.post(`/cursos`, data)
      }
    show(id: number) {
        return api.get<ICursoData>(`/cursos/${id}`)
    }
    update(id: number, data: ICursoData) {
        return api.put(`/cursos/${id}`, data)
    }
    destroy(id: number) {
        return api.delete(`/cursos/${id}`)
    }
}

export default new CursoData()

