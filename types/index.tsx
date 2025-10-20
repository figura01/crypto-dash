export type FetchedCoin = {
  id: string;
  name: string;
  symbol: string;
  image: string;
  current_price: number;
  price_change_percentage_24h: number;
  price_percentage_24h: number;
  market_cap: number;
};

export type CoinDetailProps = {
  id: string;
  symbol: string;
  name: string;
  description: {
    en: string;
  };
  categories: string[];
  image: {
    large: string;
    small: string;
    thumb: string;
  };
  market_data: {
    current_price: {
      usd: number;
    };
    market_cap: {
      usd: number;
    };
    high_24h: {
      usd: number;
    };
    low_24h: {
      usd: number;
    };
    price_change_24h: number;
    price_change_percentage_24h: number;
    circulating_supply: number;
    total_supply: number | null;
  };
  market_cap_rank: number;
  links: {
    homepage: string[];
    blockchain_site: string[];
  };
};

export type ChartDataProps = {
  datasets: {
    label: string;
    data: {
      x: number;
      y: number;
    }[];
    fill: boolean;
    borderColor: string;
    backgroundColor: string;
    pointRadius: number;
    tension: number;
  }[];
};
