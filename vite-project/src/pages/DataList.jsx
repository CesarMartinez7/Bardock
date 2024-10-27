import { DataTableQuery } from "../components/DataListTable/DataListTable";


const DataTablePage = () => {

  return (
    <section className="hero">
        <form action="datos/post" method="POST" className="container mb-3">
        <div class="field container">
        <label class="label">Nombre table Query</label>
        <div class="control">
          <input class="input" type="text" placeholder="Ej: Activo"/>
        </div>
        <div className="buttons mt-3">
            <button type="submit" className="is-link is-light button">Enviar</button>
        </div>
      </div>
        </form>
      <DataTableQuery></DataTableQuery>
    </section>
  );
};

export default DataTablePage;
