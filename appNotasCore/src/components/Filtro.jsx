const Filtro = ({ setFilter, filter }) => {
  return (
    <select
      className="form-select mb-3"
      name="priority"
      id="priority"
      value={filter}
      onChange={(e) => setFilter(e.target.value)}
    >
      <option value="---">---</option>
      <option value="Alta">Alta</option>
      <option value="Baja">Baja</option>
      <option value="Media">Media</option>
    </select>
  );
};

export default Filtro;
