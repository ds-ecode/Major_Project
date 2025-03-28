import React, { createContext, useContext, useState } from 'react';

interface BacktestParameters {
  startDate: string;
  endDate: string;
  stockType: string;
  timeFrame: string;
  strategyName: string;
}

interface Trade {
  date: string;
  type: 'BUY' | 'SELL';
  price: number;
  quantity: number;
  profitLoss: number;
}

interface BacktestResults {
  dates: string[];
  portfolioValues: number[];
  benchmarkValues: number[];
  totalReturn: number;
  sharpeRatio: number;
  maxDrawdown: number;
  trades: Trade[];
}

interface BacktestContextType {
  backtestResults: BacktestResults;
  runBacktest: (parameters: BacktestParameters) => void;
}

const defaultResults: BacktestResults = {
  dates: [],
  portfolioValues: [],
  benchmarkValues: [],
  totalReturn: 0,
  sharpeRatio: 0,
  maxDrawdown: 0,
  trades: []
};

const BacktestContext = createContext<BacktestContextType | undefined>(undefined);

export const BacktestProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [backtestResults, setBacktestResults] = useState<BacktestResults>(defaultResults);

  const runBacktest = (parameters: BacktestParameters) => {
    // Simulate backtest results
    const simulatedResults: BacktestResults = {
      dates: generateDates(parameters.startDate, parameters.endDate),
      portfolioValues: generateRandomValues(100),
      benchmarkValues: generateRandomValues(100),
      totalReturn: Math.random() * 100 - 20,
      sharpeRatio: Math.random() * 3,
      maxDrawdown: -(Math.random() * 30),
      trades: generateTrades()
    };

    setBacktestResults(simulatedResults);
  };

  return (
    <BacktestContext.Provider value={{ backtestResults, runBacktest }}>
      {children}
    </BacktestContext.Provider>
  );
};

export const useBacktest = () => {
  const context = useContext(BacktestContext);
  if (context === undefined) {
    throw new Error('useBacktest must be used within a BacktestProvider');
  }
  return context;
};

// Helper functions to generate mock data
function generateDates(start: string, end: string): string[] {
  const dates: string[] = [];
  const startDate = new Date(start);
  const endDate = new Date(end);
  
  while (startDate <= endDate) {
    dates.push(startDate.toISOString().split('T')[0]);
    startDate.setDate(startDate.getDate() + 1);
  }
  
  return dates;
}

function generateRandomValues(count: number): number[] {
  const values: number[] = [];
  let currentValue = 10000;
  
  for (let i = 0; i < count; i++) {
    currentValue = currentValue * (1 + (Math.random() * 0.02 - 0.01));
    values.push(currentValue);
  }
  
  return values;
}

function generateTrades(): Trade[] {
  const trades: Trade[] = [];
  const numTrades = 10;
  
  for (let i = 0; i < numTrades; i++) {
    trades.push({
      date: new Date(2024, 0, i + 1).toISOString().split('T')[0],
      type: Math.random() > 0.5 ? 'BUY' : 'SELL',
      price: Math.round(Math.random() * 1000 * 100) / 100,
      quantity: Math.floor(Math.random() * 100),
      profitLoss: Math.round((Math.random() * 2000 - 1000) * 100) / 100
    });
  }
  
  return trades;
}