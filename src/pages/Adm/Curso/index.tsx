import { useCallback, useEffect, useState } from "react";
import { Header, Footer, Nav} from "components";
import * as S from "./styles";
import { apiCurso } from "services/data";
import { ICursoData } from "Interface/curso.interface";
import { Loading } from "components";
import Button from "styles/Button";
import { BsPencilSquare, BsTrash2 } from "react-icons/bs";
import { useHistory } from "react-router-dom";
import { confirmAlert } from "react-confirm-alert";
import { toast } from "react-toastify";

const AdmCurso = () => {
  const [projects, setProjects] = useState<ICursoData[]>();
  const [isLoading, setIsLoading] = useState(true);
  const history = useHistory();

  const fetchData = useCallback(async () => {
    const response = await apiCurso.index();
    setProjects(response.data);
    setIsLoading(false);
  }, []);

  useEffect(() => {
    fetchData();
  }, [fetchData]);

  const handleDelete = useCallback(
    async (id: number) => {
      confirmAlert({
        title: "Atenção",
        message: "Tem certeza que deseja apagar o item selecionado?",
        buttons: [
          {
            label: "SIM",
            onClick: async () => {
              setIsLoading(true);
              await apiCurso.destroy(id);
              toast.success("Curso removido!");
              fetchData();
            },
          },
          {
            label: "Não",
            onClick: () => console.log("não"),
          },
        ],
      });
    },
    [fetchData]
  );

  return (
    <>
      {isLoading ? (
        <Loading />
      ) : (
        <>
          <Header />
          <Nav />
          <S.Main>
            
            <table>
              <thead>
                <tr>
                  <th>E-mail</th>
                  <th>Projeto</th>
                  <th>Editar</th>
                  <th>Remover</th>
                </tr>
              </thead>
              <tbody>
                {projects &&
                  projects.map((item) => (
                    <tr key={item.id}>
                      <td>{item.user?.email}</td>
                      <td>{item.titulo}</td>
                      <td>
                        <Button
                          type="button"
                          //bgColor="edit"
                          onClick={() =>
                            history.push(`/adm/Inicio/StoreCurso/${item.id}`)
                          }
                        >
                          <BsPencilSquare />
                        </Button>
                      </td>
                      <td>
                        <Button
                          type="button"
                          //bgColor="remove"
                          onClick={() => item.id && handleDelete(item.id)}
                        >
                          <BsTrash2 />
                        </Button>
                      </td>
                    </tr>
                  ))}
              </tbody>
            </table>
          </S.Main>
          <Footer />
        </>
      )}
    </>
  );
};

export default AdmCurso;