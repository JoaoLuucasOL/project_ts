import { useCallback, useEffect, useState } from "react";
import { Header, Footer} from "components";
import * as S from "./styles";
import { Loading } from "components";
import Button from "styles/Button";
import { useForm } from "react-hook-form";
import { Link, useHistory, useParams } from "react-router-dom";
import { apiCurso } from "services/data";
import { toast } from "react-toastify";
import { AxiosError } from "axios";
import { ICursoData } from "Interface/curso.interface";

const CursoStore = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [cursos, setCursos] = useState<ICursoData>();
  const { handleSubmit, register } = useForm();
  const history = useHistory();
  const { id } = useParams<{ id: string }>();

  const handleStore = useCallback(
    async (data) => {
      try {
        setIsLoading(true);
        if (Number(id) > 0) {
          await apiCurso.update(Number(id), data);
          toast.warning("Curso atualizado com sucesso!");
        } else {
          await apiCurso.store(data);
          toast.success("Cadastro de curso realizado!");
        }
        history.push("/adm/Inicio");
      } catch (error) {
        console.log(error);
        const err = error as AxiosError;
        const msg = err.response?.data.errors.map((i: any) => i.message);
        toast.error(`Falha ao cadastrar o curso! ${msg.join(" ")}`);
      } finally {
        setIsLoading(false);
      }
    },
    [history, id]
  );

  const handleChange = useCallback(
    (e) => {
      setCursos({ ...cursos, [e.target.name]: e.target.value });
    },
    [cursos]
  );

  useEffect(() => {
    if (Number(id) > 0) {
      const fetchData = async (id: number) => {
        try {
          const response = await apiCurso.show(id);
          setCursos(response.data);
        } catch (error) {
          console.log(error);
        }
      };
      fetchData(Number(id));
    }
    setIsLoading(false);
  }, [id]);

  return (
    <>
      {isLoading ? (
        <Loading />
      ) : (
        <>
          <Header />
          <S.Main>
            <form method="POST" onSubmit={handleSubmit(handleStore)}>
              <Link to="/adm/Inicio">
                Voltar
              </Link>
              <div>
                <label htmlFor="curso">Título: </label>
                <textarea
                  id="curso"
                  placeholder="Título: "
                  required
                  {...register("titulo")}
                  value={cursos?.titulo}
                  onChange={handleChange}
                />
              </div>

              <div>
                <label htmlFor="curso">Descrição: </label>
                <textarea
                  id="curso"
                  placeholder="Descrição do curso: "
                  required
                  {...register("descricao")}
                  value={cursos?.descricao}
                  onChange={handleChange}
                />
              </div>

              <div>
                <label htmlFor="curso">Preço: </label>
                <textarea
                  id="curso"
                  placeholder="Preço: "
                  required
                  {...register("preco")}
                  value={cursos?.preco}
                  onChange={handleChange}
                />
              </div>
             

              <Button type="submit">
                Enviar 
              </Button>
            </form>
          </S.Main>
          <Footer />
        </>
      )}
    </>
  );
};

export default CursoStore;