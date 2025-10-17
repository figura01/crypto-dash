const LimitSelector = ({
  limit,
  setLimit,
}: {
  limit: number;
  setLimit: (value: number) => void;
}) => {
  return (
    <div className="controls">
      <label htmlFor="limit">Show: </label>
      <select
        value={limit}
        id="limit"
        onChange={(e: React.ChangeEvent<HTMLSelectElement>) =>
          setLimit(Number(e.target.value))
        }
      >
        {[5, 10, 20, 50, 100].map((x: number) => (
          <option key={x} value={x.toString()}>
            {x}
          </option>
        ))}
      </select>
    </div>
  );
};

export default LimitSelector;
