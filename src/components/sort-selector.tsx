const SortSelector = ({
  sortBy,
  onSortChange,
}: {
  sortBy: string;
  onSortChange: (value: string) => void;
}) => {
  return (
    <div className="controls">
      <label htmlFor="sort">Sort By:</label>
      <select
        id="sort"
        value={sortBy}
        onChange={(e) => onSortChange(e.target.value)}
      >
        <option value="market_cap_desc">Price (High To Low)</option>
        <option value="market_cap_asc">Price (Low To High)</option>
        <option value="price_desc">Price (High To Low)</option>
        <option value="price_asc">Price (Low To High)</option>
        <option value="change_desc">24h Change (Hight To Low)</option>
        <option value="change_asc">24h Change (Low To Hight)</option>
      </select>
    </div>
  );
};

export default SortSelector;
