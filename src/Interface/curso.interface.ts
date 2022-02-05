export interface ICursoData {
    id?: number;
    titulo?: string;
    preco?: number;
    descricao?: string;
    user?: {
        nome: string;
        email: string;
    }
}