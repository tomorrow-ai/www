"use client";

import React, { useState, useEffect } from "react";
import { fetchAllStockData, fallbackStockData } from "./lib/stockApi";
import useSWR from "swr";
import {
  leadStory,
  leadStoryContent,
  rightColumnStories,
  lowerStories,
  CaseType,
} from "./lib/types";
import { transformText, getFontSizeClass } from "./lib/utils";

// Components
import MarketTicker from "./components/MarketTicker";
import Header from "./components/Header";
import Navigation from "./components/Navigation";
import Settings from "./components/Settings";
import LeadStory from "./components/LeadStory";
import RightColumnStories from "./components/RightColumnStories";
import LowerStories from "./components/LowerStories";

export default function Home() {
  // Settings dropdown state
  const [showSettings, setShowSettings] = useState(false);

  // Case transformation state with localStorage persistence
  const [caseType, setCaseType] = useState<CaseType>("normal");

  // Font size state with localStorage persistence
  const [fontSize, setFontSize] = useState("medium");

  // Load settings from localStorage on component mount
  useEffect(() => {
    // Get case type from localStorage
    const savedCaseType = localStorage.getItem("caseType");
    if (savedCaseType) {
      setCaseType(savedCaseType as CaseType);
    }

    // Get font size from localStorage
    const savedFontSize = localStorage.getItem("fontSize");
    if (savedFontSize) {
      setFontSize(savedFontSize);
    }
  }, []);

  // Save settings to localStorage when they change
  useEffect(() => {
    localStorage.setItem("caseType", caseType);
  }, [caseType]);

  useEffect(() => {
    localStorage.setItem("fontSize", fontSize);
  }, [fontSize]);

  // Current date formatting
  const today = new Date();
  const options: Intl.DateTimeFormatOptions = {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric",
  };
  const formattedDate = today.toLocaleDateString("en-US", options);

  // Current time formatting
  const currentTime = today.toLocaleTimeString("en-US", {
    hour: "numeric",
    minute: "2-digit",
    hour12: true,
  });

  // Fetch stock data using SWR
  const fetcher = async () => {
    try {
      const apiKey = process.env.NEXT_PUBLIC_ALPHA_VANTAGE_API_KEY;
      if (!apiKey || apiKey === "YOUR_API_KEY_HERE") {
        console.warn(
          "Using fallback stock data. Set NEXT_PUBLIC_ALPHA_VANTAGE_API_KEY in .env.local"
        );
        return fallbackStockData;
      }

      try {
        const data = await fetchAllStockData(apiKey);
        return data.length > 0 ? data : fallbackStockData;
      } catch (error) {
        console.warn("Error fetching stock data:", error);
        return fallbackStockData;
      }
    } catch (error) {
      console.warn("Unexpected error in stock fetcher:", error);
      return fallbackStockData;
    }
  };

  // Use SWR for data fetching with revalidation every 1 hour (3600000ms)
  const { data: stockData } = useSWR("stocks", fetcher, {
    refreshInterval: 3600000,
    fallbackData: fallbackStockData,
    revalidateOnFocus: false,
    suspense: false,
    errorRetryCount: 0,
    onError: (err) => {
      console.warn("SWR error handling stock data:", err);
      // Just log the error, don't throw it up to the client
    },
  });

  // Toggle settings dropdown
  const toggleSettings = () => {
    setShowSettings(!showSettings);
  };

  // Text transformer function with bound caseType
  const textTransformer = (text: string) => transformText(text, caseType);

  return (
    <div
      className={`${getFontSizeClass(fontSize)} transition-colors duration-300`}
    >
      <div className="max-w-6xl mx-auto px-4">
        {/* Market Ticker */}
        <MarketTicker stockData={stockData} transformText={textTransformer} />

        <div className="py-2">
          {/* Settings */}
          <Settings
            showSettings={showSettings}
            toggleSettings={toggleSettings}
            caseType={caseType}
            setCaseType={setCaseType}
            fontSize={fontSize}
            setFontSize={setFontSize}
          />

          {/* Header */}
          <Header
            currentTime={currentTime}
            formattedDate={formattedDate}
            transformText={textTransformer}
          />

          {/* Main Navigation */}
          <Navigation transformText={textTransformer} />

          {/* Main Content Grid */}
          <div className="grid grid-cols-12 gap-6 mt-6">
            {/* Lead Story */}
            <LeadStory
              story={leadStory}
              content={leadStoryContent}
              transformText={textTransformer}
            />

            {/* Right Column */}
            <RightColumnStories
              stories={rightColumnStories}
              transformText={textTransformer}
            />
          </div>

          {/* Lower Stories Grid */}
          <LowerStories
            stories={lowerStories}
            transformText={textTransformer}
          />

          {/* Bottom spacing for better scrolling experience */}
          <div className="pb-24"></div>
        </div>
      </div>
    </div>
  );
}
