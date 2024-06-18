import React, { useState, useEffect } from "react";
import axios from "axios";
import { host as api } from "../services/api";
const Statistics = ({ month }) => {
  const [stats, setStats] = useState({});

  useEffect(() => {
    const fetchStats = async () => {
      const response = await axios.get(`${api}/api/transactions/statistics`, {
        params: { month },
      });
      setStats(response.data);
    };
    fetchStats();
  }, [month]);

  return (
    <div>
      <div>Total Sale Amount: {stats.totalSaleAmount}</div>
      <div>Total Sold Items: {stats.totalSoldItems}</div>
      <div>Total Not Sold Items: {stats.totalNotSoldItems}</div>
    </div>
  );
};

export default Statistics;
