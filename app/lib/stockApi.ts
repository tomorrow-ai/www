import axios from 'axios';

// Types
export interface StockData {
  symbol: string;
  price: number;
  change: number;
  changePercent: number;
}

// Interface for Top Movers data
interface TopMover {
  ticker: string;
  price: string;
  change_amount: string;
  change_percentage: string;
  volume: string;
}

// We'll fetch these 5 data points instead of individual stocks
const MARKET_INDICES = {
  SP500: '^GSPC',    // S&P 500 Index
  NASDAQ: '^IXIC',   // NASDAQ Composite Index
};

// Just return fallback data without making any API calls
// Prevents any errors from happening in development
export async function fetchAllStockData(apiKey: string): Promise<StockData[]> {
  // For now, just return fallback data to prevent any API errors
  // You can uncomment the real implementation when you're ready to test with the API
  return fallbackStockData;

  /*
  if (!apiKey) {
    console.warn('No API key provided for Alpha Vantage');
    return fallbackStockData;
  }

  // Alpha Vantage free tier limits to 5 API calls per minute
  try {
    const results: StockData[] = [];

    // 1. Fetch S&P 500 index
    const sp500Data = await fetchIndexData(MARKET_INDICES.SP500, apiKey);
    if (sp500Data) results.push(sp500Data);
    await new Promise(resolve => setTimeout(resolve, 1500)); // Delay between calls

    // 2. Fetch NASDAQ index
    const nasdaqData = await fetchIndexData(MARKET_INDICES.NASDAQ, apiKey);
    if (nasdaqData) results.push(nasdaqData);
    await new Promise(resolve => setTimeout(resolve, 1500)); // Delay between calls

    // 3. Fetch Bitcoin data
    const btcData = await fetchBitcoinData(apiKey);
    if (btcData) results.push(btcData);
    await new Promise(resolve => setTimeout(resolve, 1500)); // Delay between calls

    // 4 & 5. Fetch top gainer and loser (counts as 1 API call)
    const topMovers = await fetchTopMovers(apiKey);
    if (topMovers.gainer) results.push(topMovers.gainer);
    if (topMovers.loser) results.push(topMovers.loser);

    return results.length > 0 ? results : fallbackStockData;
  } catch (error) {
    console.warn('Error fetching market data:', error);
    return fallbackStockData;
  }
  */
}

// These functions are kept but won't be called in dev mode now

// Function to fetch data for a market index
export async function fetchIndexData(symbol: string, apiKey: string): Promise<StockData | null> {
  try {
    // Alpha Vantage API endpoint for global quotes
    const response = await axios.get(
      `https://www.alphavantage.co/query?function=GLOBAL_QUOTE&symbol=${symbol}&apikey=${apiKey}`
    );

    const data = response.data['Global Quote'];
    if (!data || !data['05. price']) {
      console.warn(`Invalid data received for ${symbol}:`, data);
      return null;
    }

    // Extract and format the data
    const price = parseFloat(data['05. price']);
    const change = parseFloat(data['09. change']);
    const changePercent = parseFloat(data['10. change percent'].replace('%', ''));

    // Format nice display name
    let displaySymbol = symbol;
    if (symbol === '^GSPC') displaySymbol = 'S&P 500';
    if (symbol === '^IXIC') displaySymbol = 'NASDAQ';

    return {
      symbol: displaySymbol,
      price,
      change,
      changePercent
    };
  } catch (error) {
    console.warn(`Error fetching data for ${symbol}:`, error);
    return null;
  }
}

// Function to fetch Bitcoin data
export async function fetchBitcoinData(apiKey: string): Promise<StockData | null> {
  try {
    // Alpha Vantage API endpoint for crypto
    const response = await axios.get(
      `https://www.alphavantage.co/query?function=CURRENCY_EXCHANGE_RATE&from_currency=BTC&to_currency=USD&apikey=${apiKey}`
    );

    const data = response.data['Realtime Currency Exchange Rate'];
    if (!data || !data['5. Exchange Rate']) {
      console.warn('Invalid data received for Bitcoin:', data);
      return null;
    }

    // For Bitcoin we only get current price, not change
    const price = parseFloat(data['5. Exchange Rate']);

    // Use placeholder for change data since it's not provided in this endpoint
    // In a real app, you would fetch historical data to calculate this
    return {
      symbol: 'BTC',
      price,
      change: 0,  // Placeholder
      changePercent: 0  // Placeholder
    };
  } catch (error) {
    console.warn('Error fetching data for Bitcoin:', error);
    return null;
  }
}

// Function to fetch top gainers and losers
export async function fetchTopMovers(apiKey: string): Promise<{ gainer: StockData | null, loser: StockData | null }> {
  try {
    // Alpha Vantage API endpoint for top gainers and losers
    const response = await axios.get(
      `https://www.alphavantage.co/query?function=TOP_GAINERS_LOSERS&apikey=${apiKey}`
    );

    const data = response.data;
    if (!data || !data.top_gainers || !data.top_losers || data.top_gainers.length === 0 || data.top_losers.length === 0) {
      console.warn('Invalid data received for top movers:', data);
      return { gainer: null, loser: null };
    }

    // Get first gainer and loser from the response
    const topGainer = data.top_gainers[0] as TopMover;
    const topLoser = data.top_losers[0] as TopMover;

    // Format them as StockData
    const gainerData: StockData = {
      symbol: topGainer.ticker,
      price: parseFloat(topGainer.price),
      change: parseFloat(topGainer.change_amount),
      changePercent: parseFloat(topGainer.change_percentage.replace('%', ''))
    };

    const loserData: StockData = {
      symbol: topLoser.ticker,
      price: parseFloat(topLoser.price),
      change: parseFloat(topLoser.change_amount),
      changePercent: parseFloat(topLoser.change_percentage.replace('%', ''))
    };

    return { gainer: gainerData, loser: loserData };
  } catch (error) {
    console.warn('Error fetching top movers:', error);
    return { gainer: null, loser: null };
  }
}

// Fallback data in case the API fails or for development
export const fallbackStockData: StockData[] = [
  { symbol: "S&P 500", price: 5584.16, change: 12.37, changePercent: 0.22 },
  { symbol: "NASDAQ", price: 18362.41, change: -38.95, changePercent: -0.21 },
  { symbol: "BTC", price: 68412.50, change: 1250.25, changePercent: 1.86 },
  { symbol: "AAPL", price: 142.35, change: 8.76, changePercent: 6.56 },
  { symbol: "TSLA", price: 78.21, change: -12.43, changePercent: -13.71 }
]; 