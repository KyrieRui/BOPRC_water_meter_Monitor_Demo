// App.js
import React from "react";
import Chatbot from "./Chatbot";
import "./App.css";
import { BarChart, LineChart, PieChart, RadarChart } from "./ChartComponents";

function App() {
    return (
        <div className="app-container">
            <div className="header">
                <img src ="/Users/zwang/Desktop/web_chatbot/ai-chatbot-app/src/site-logo.jpg" alt={"My Logo"} />
                <h1>BOPRC Water Meters Monitor Dashboard</h1>
                <h1>Dashboard</h1>
            </div>
            <div className="charts-grid">
                <div className="chart-item">
                    <BarChart />
                </div>
                <div className="chart-item">
                    <LineChart />
                </div>
                <div className="chart-item">
                    <PieChart />
                </div>
                <div className="chart-item">
                    <RadarChart />
                </div>
            </div>
            <div className="chatbot-container">
                <h1>AI Chatbot</h1>
                <Chatbot />
            </div>
        </div>
    );
}

export default App;
