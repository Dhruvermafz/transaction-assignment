import React, { useState } from "react";
import TransactionsTable from "./components/TransactionsTable";
import Statistics from "./components/Statistics";
import { BarChart, PieChart } from "./components/BarChart";
import "./App.css";
import Dashboard from "./components/Dashboard/Dashboard";

const App = () => {
  const [month, setMonth] = useState(3);

  return (
    // <div>
    //   <h1>Transactions Dashboard</h1>
    //   <label>
    //     Select Month:
    //     <select value={month} onChange={(e) => setMonth(e.target.value)}>
    //       {Array.from({ length: 12 }, (_, i) => (
    //         <option key={i + 1} value={i + 1}>
    //           {new Date(0, i).toLocaleString("default", { month: "long" })}
    //         </option>
    //       ))}
    //     </select>
    //   </label>
    //   <TransactionsTable month={month} />
    //   <Statistics month={month} />
    //   <BarChart month={month} />
    //   <PieChart month={month} />
    // </div>
    <Dashboard />
  );
};

export default App;
