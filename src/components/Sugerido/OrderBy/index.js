import { ContainOrderBy } from "./styles";
export default function OrdeBy({setOrderBy}) {
  
  return (
    <ContainOrderBy>
      <a className="OrderBy__button" onClick={() => setOrderBy("title")}>Titulo</a>
      <a className="OrderBy__button" onClick={() => setOrderBy("visualizacoes")}>Visualizações</a>
      <a className="OrderBy__button" onClick={() => setOrderBy("created_at")}>Data</a>
    </ContainOrderBy>
  );
}
