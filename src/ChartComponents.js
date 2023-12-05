// ChartComponents.js
import React, { useEffect } from "react";
import Chart from "chart.js/auto";

export function BarChart() {
    useEffect(() => {
        const ctx = document.getElementById("myChart");
        let barChart = null;

        if (barChart) barChart.destroy();

        barChart = new Chart(ctx, {
            type: "bar",
            data: {
                labels: ["Red", "Blue", "Yellow", "Green", "Purple", "Orange"],
                datasets: [
                    {
                        label: "# of Votes",
                        data: [12, 19, 3, 5, 2, 3],
                        backgroundColor: [
                            "rgba(255, 99, 132, 0.2)",
                            "rgba(54, 162, 235, 0.2)",
                            "rgba(255, 206, 86, 0.2)",
                            "rgba(75, 192, 192, 0.2)",
                            "rgba(153, 102, 255, 0.2)",
                            "rgba(255, 159, 64, 0.2)",
                        ],
                        borderColor: [
                            "rgba(255, 99, 132, 1)",
                            "rgba(54, 162, 235, 1)",
                            "rgba(255, 206, 86, 1)",
                            "rgba(75, 192, 192, 1)",
                            "rgba(153, 102, 255, 1)",
                            "rgba(255, 159, 64, 1)",
                        ],
                        borderWidth: 1,
                    },
                ],
            },
            options: {
                scales: {
                    y: {
                        beginAtZero: true,
                    },
                },
            },
        });

        return () => {
            if (barChart) barChart.destroy();
        };
    }, []);

    return <canvas id="myChart" width="400" height="400"></canvas>;
}

export function LineChart() {
    useEffect(() => {
        const ctx = document.getElementById("lineChart");
        let lineChart = null;

        if (lineChart) lineChart.destroy();

        lineChart = new Chart(ctx, {
            type: "line",
            data: {
                labels: ["January", "February", "March", "April", "May", "June", "July"],
                datasets: [
                    {
                        label: "My First Dataset",
                        data: [65, 59, 80, 81, 56, 55, 40],
                        fill: false,
                        borderColor: "rgb(75, 192, 192)",
                        tension: 0.1,
                    },
                ],
            },
        });

        return () => {
            if (lineChart) lineChart.destroy();
        };
    }, []);

    return <canvas id="lineChart" width="400" height="400"></canvas>;
}

export function PieChart() {
    useEffect(() => {
        const ctx = document.getElementById("pieChart");
        let pieChart = null;

        if (pieChart) pieChart.destroy();

        pieChart = new Chart(ctx, {
            type: "pie",
            data: {
                labels: ["Red", "Blue", "Yellow"],
                datasets: [
                    {
                        label: "My First Dataset",
                        data: [300, 50, 100],
                        backgroundColor: ["rgb(255, 99, 132)", "rgb(54, 162, 235)", "rgb(255, 205, 86)"],
                    },
                ],
            },
        });

        return () => {
            if (pieChart) pieChart.destroy();
        };
    }, []);

    return <canvas id="pieChart" width="400" height="400"></canvas>;
}

export function RadarChart() {
    useEffect(() => {
        const ctx = document.getElementById("radarChart");
        let radarChart = null;

        if (radarChart) radarChart.destroy();

        radarChart = new Chart(ctx, {
            type: "radar",
            data: {
                labels: ["Eating", "Drinking", "Sleeping", "Designing", "Coding", "Cycling", "Running"],
                datasets: [
                    {
                        label: "My First Dataset",
                        data: [65, 59, 90, 81, 56, 55, 40],
                        backgroundColor: "rgba(255, 99, 132, 0.2)",
                        borderColor: "rgb(255, 99, 132)",
                        pointBackgroundColor: "rgb(255, 99, 132)",
                        pointBorderColor: "#fff",
                        pointHoverBackgroundColor: "#fff",
                        pointHoverBorderColor: "rgb(255, 99, 132)",
                    },
                ],
            },
        });

        return () => {
            if (radarChart) radarChart.destroy();
        };
    }, []);

    return <canvas id="radarChart" width="400" height="400"></canvas>;
}
