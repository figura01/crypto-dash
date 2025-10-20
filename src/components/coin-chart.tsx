import { useEffect, useState } from "react";

import { Line } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Tooltip,
  Legend,
  TimeScale,
} from "chart.js";
import "chartjs-adapter-date-fns";

import type { ChartDataProps } from "../../types";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Tooltip,
  Legend,
  TimeScale
);

const API_URL = import.meta.env.VITE_COIN_API_URL;

const CoinChart = ({ coinId }: { coinId: string }) => {
  const [chartData, setChartData] = useState<ChartDataProps | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<Error | null>(null);

  useEffect(() => {
    const fetchChartData = async () => {
      try {
        const fetchPrices = await fetch(
          `${API_URL}/${coinId}/market_chart?vs_currency=usd&days=7`
        );
        if (!fetchPrices.ok) {
          throw new Error("Failed to fetch chart data");
        }
        const data = await fetchPrices.json();
        console.log("data:", data);

        const prices = data.prices.map((price: number[]) => ({
          x: price[0],
          y: price[1],
        }));

        setChartData({
          datasets: [
            {
              label: "Price in USD",
              data: prices,
              fill: true,
              borderColor: "#007bff",
              backgroundColor: "rgba(0, 123, 255, 0.1)",
              pointRadius: 0,
              tension: 0.3,
            },
          ],
        });
      } catch (err) {
        setError(
          err instanceof Error ? err : new Error("An unknown error occurred")
        );
      } finally {
        setLoading(false);
      }
    };

    fetchChartData();
  }, [coinId]);

  if (loading) {
    return <p>Loading chart...</p>;
  }

  if (error) {
    return <div className="error">{error.message}</div>;
  }

  return (
    <div style={{ marginTop: "30px" }}>
      <Line
        data={chartData!}
        options={{
          responsive: true,
          plugins: {
            legend: {
              display: false,
              position: "top" as const,
            },
            tooltip: { mode: "index", intersect: false },
          },
          scales: {
            x: {
              type: "time",
              time: {
                unit: "day",
              },
              ticks: {
                autoSkip: true,
                maxTicksLimit: 7,
              },
            },
            y: {
              ticks: {
                callback: (value) => `$${value.toLocaleString()}`,
              },
            },
          },
        }}
      />
    </div>
  );
};

export default CoinChart;
