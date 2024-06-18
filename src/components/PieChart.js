import React, { useState, useEffect } from "react";
import { Pie } from "react-chartjs-2";
import axios from "axios";
import { host as api } from "../services/api";
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

export default PieChart;
