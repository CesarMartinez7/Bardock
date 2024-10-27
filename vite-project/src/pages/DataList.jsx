import { DataTableQuery } from "../components/DataListTable/DataListTable";


const DataTablePage = () => {

  return (
    <section className="hero">
      <div class="field container">
        <label class="label">Nombre table Query</label>
        <div class="control">
          <input
            class="input"
            type="text"
            placeholder="Ej: Activo"
          />
        </div>
      </div>
      <DataTableQuery></DataTableQuery>
    </section>
  );
};

export default DataTablePage;
