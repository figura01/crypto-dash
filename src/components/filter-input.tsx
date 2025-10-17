const FilterInput = ({
  filter,
  onFilterChange,
}: {
  filter: string;
  onFilterChange: (value: string) => void;
}) => {
  return (
    <div className="filter">
      <input
        placeholder="Filter coins by name or symbol"
        type="text"
        value={filter}
        onChange={(e) => onFilterChange(e.target.value)}
      />
    </div>
  );
};

export default FilterInput;
