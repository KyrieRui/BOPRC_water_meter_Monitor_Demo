// App.js
import React from "react";
import Chatbot from "./Chatbot";
import "./App.css";
import { BarChart, LineChart, PieChart, RadarChart } from "./ChartComponents";
import logo from "./site-logo.jpg";
import meter from "./water_01.png";

function App() {
    return (
        <div className="app-container">
            <div className="header">
                <img src ={logo} alt={"My Logo"} />
                <h1>BOPRC Water Meters Monitor Dashboard</h1>
            </div>
            <div className="charts-grid">
                <div className="chart-item">
                    <BarChart />
                </div>
                <div className="chart-item">
                    <img src={meter} alt={"water_meter"}/>
                    {/*<LineChart />*/}
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
