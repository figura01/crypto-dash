import LimitSelector from "../components/limit-selector";
import FilterInput from "../components/filter-input";
import SortSelector from "../components/sort-selector";
import CoinCard from "../components/coin-card";

import type { FetchedCoin } from "../../types";
import Spinner from "../components/spinner";

const HomePage = ({
  coins,
  filter,
  setFilter,
  limit,
  setLimit,
  sortBy,
  setSortBy,
  loading,
  error,
}: {
  coins: FetchedCoin[];
  filter: string;
  setFilter: (value: string) => void;
  limit: number;
  setLimit: (value: number) => void;
  sortBy: string;
  setSortBy: (value: string) => void;
  loading: boolean;
  error: Error | null;
}) => {
  const filteredCoins = coins
    .filter((coin) => {
      return (
        coin.name.toLowerCase().includes(filter.toLowerCase()) ||
        coin.symbol.toLowerCase().includes(filter.toLowerCase())
      );
    })
    .slice()
    .sort((a: FetchedCoin, b: FetchedCoin) => {
      switch (sortBy) {
        case "market_cap_desc":
          return b.market_cap - a.market_cap;
        case "market_cap_asc":
          return a.market_cap - b.market_cap;
        case "price_desc":
          return b.current_price - a.current_price;
        case "price_asc":
          return a.current_price - b.current_price;
        case "change_desc":
          return b.price_change_percentage_24h - a.price_change_percentage_24h;
        case "change_asc":
          return a.price_change_percentage_24h - b.price_change_percentage_24h;

        default:
          return 0;
      }
    });

  return (
    <div>
      <h1>🚀 Crypto dash</h1>
      {loading && <Spinner color={"white"} />}
      {error && <div className="error">{error.message}</div>}

      <div className="top-controls">
        <FilterInput filter={filter} onFilterChange={setFilter} />
        <LimitSelector limit={limit} setLimit={setLimit} />
        <SortSelector sortBy={sortBy} onSortChange={setSortBy} />
      </div>

      {!loading && !error && (
        <main className="grid">
          {filteredCoins.length > 0 ? (
            filteredCoins.map((coin: FetchedCoin) => (
              <CoinCard key={coin.id} coin={coin} />
            ))
          ) : (
            <p>No matching coins</p>
          )}
        </main>
      )}
    </div>
  );
};

export default HomePage;
