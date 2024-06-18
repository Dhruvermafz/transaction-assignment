import React, { useState, useEffect } from "react";
import { Bar, Pie } from "react-chartjs-2";
import {
  Chart,
  CategoryScale,
  LinearScale,
  BarElement,
  ArcElement,
} from "chart.js";
import axios from "axios";
import { host as api } from "../services/api";
// Register the required components
Chart.register(CategoryScale, LinearScale, BarElement, ArcElement);

const BarChart = ({ month }) => {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const response = await axios.get(`${api}/api/transactions/barchart`, {
        params: { month },
      });
      setData(response.data);
    };
    fetchData();
  }, [month]);

  const chartData = {
    labels: data.map((d) => d.range),
    datasets: [
      {
        label: "Number of Items",
        data: data.map((d) => d.count),
        backgroundColor: "rgba(75, 192, 192, 0.2)",
        borderColor: "rgba(75, 192, 192, 1)",
        borderWidth: 1,
      },
    ],
  };

  return <Bar data={chartData} />;
};

const PieChart = ({ month }) => {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const response = await axios.get(`${api}/api/transactions/piechart`, {
        params: { month },
      });
      setData(response.data);
    };
    fetchData();
  }, [month]);

  const chartData = {
    labels: data.map((d) => d._id),
    datasets: [
      {
        label: "Number of Items",
        data: data.map((d) => d.count),
        backgroundColor: [
          "#FF6384",
          "#36A2EB",
          "#FFCE56",
          "#FF6384",
          "#36A2EB",
          "#FFCE56",
        ],
        hoverBackgroundColor: [
          "#FF6384",
          "#36A2EB",
          "#FFCE56",
          "#FF6384",
          "#36A2EB",
          "#FFCE56",
        ],
      },
    ],
  };

  return <Pie data={chartData} />;
};

export { BarChart, PieChart };
