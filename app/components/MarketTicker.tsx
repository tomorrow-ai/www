import React from "react";
import { StockData } from "../lib/stockApi";

interface MarketTickerProps {
  stockData: StockData[];
  transformText: (text: string) => string;
}

const MarketTicker: React.FC<MarketTickerProps> = ({
  stockData,
  transformText,
}) => {
  return (
    <div className="border-b border-gray-300 dark:border-gray-700">
      <div className="flex justify-between items-center flex-wrap">
        {stockData.map((stock: StockData) => (
          <div key={stock.symbol} className="flex items-center px-2 py-1">
            <span className="font-bold">{transformText(stock.symbol)}</span>
            <span className="ml-1">${stock.price.toFixed(2)}</span>
            <span
              className={`ml-1 text-xs ${
                stock.change > 0
                  ? "text-green-600 dark:text-green-500"
                  : "text-red-600 dark:text-red-500"
              }`}
            >
              {stock.change > 0 ? "+" : ""}
              {stock.change.toFixed(2)}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MarketTicker;
