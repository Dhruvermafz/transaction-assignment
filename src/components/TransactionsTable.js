import React, { useState, useEffect } from "react";
import axios from "axios";
import { host as api } from "../services/api";
const TransactionsTable = ({ month }) => {
  const [transactions, setTransactions] = useState([]);
  const [search, setSearch] = useState("");
  const [page, setPage] = useState(1);
  const [total, setTotal] = useState(0);
  const perPage = 10;

  const fetchTransactions = async () => {
    const response = await axios.get(`${api}/api/transactions`, {
      params: { month, search, page, perPage },
    });
    setTransactions(response.data.transactions);
    setTotal(response.data.total);
  };

  useEffect(() => {
    fetchTransactions();
  }, [month, search, page]);

  return (
    <div>
      <input
        type="text"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        placeholder="Search transactions"
      />
      <table>
        <thead>
          <tr>
            <th>Title</th>
            <th>Description</th>
            <th>Price</th>
            <th>Date Of Sale</th>
            <th>Sold</th>
            <th>Category</th>
          </tr>
        </thead>
        <tbody>
          {transactions.map((transaction) => (
            <tr key={transaction._id}>
              <td>{transaction.title}</td>
              <td>{transaction.description}</td>
              <td>{transaction.price}</td>
              <td>{new Date(transaction.dateOfSale).toLocaleDateString()}</td>
              <td>{transaction.sold ? "Yes" : "No"}</td>
              <td>{transaction.category}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <div>
        <button onClick={() => setPage(page - 1)} disabled={page === 1}>
          Previous
        </button>
        <button
          onClick={() => setPage(page + 1)}
          disabled={page * perPage >= total}
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default TransactionsTable;
