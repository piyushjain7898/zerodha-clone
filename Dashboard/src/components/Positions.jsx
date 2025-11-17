import React, { useEffect, useState } from "react";
import axios from "axios";

const Positions = () => {
  const [positions, setPositions] = useState([]);

  useEffect(() => {
    let cancelled = false;
    axios
      .get("http://localhost:3002/allPositions")
      .then((res) => {
        if (!cancelled) setPositions(res.data || []);
      })
      .catch((err) => {
        console.error("Failed to load positions:", err);
      });
    return () => {
      cancelled = true;
    };
  }, []);

  return (
    <>
      <h3 className="title">Positions ({positions.length})</h3>

      <div className="order-table">
        <table>
          <thead>
            <tr>
              <th>Product</th>
              <th>Instrument</th>
              <th>Qty.</th>
              <th>Avg.</th>
              <th>LTP</th>
              <th>P&L</th>
              <th>Chg.</th>
            </tr>
          </thead>
          <tbody>
            {positions.map((stock) => {
              // Defensive: ensure numeric values
              const qty = Number(stock.qty) || 0;
              const avg = Number(stock.avg) || 0;
              const price = Number(stock.price) || 0;

              const curValue = price * qty;
              const pnl = curValue - avg * qty;
              const isProfit = pnl >= 0;
              const profClass = isProfit ? "profit" : "loss";
              const dayClass = stock.isLoss ? "loss" : "profit";
              const key = stock._id || `${stock.name}-${qty}-${avg}`;

              return (
                <tr key={key}>
                  <td>{stock.product}</td>
                  <td>{stock.name}</td>
                  <td>{qty}</td>
                  <td>{avg ? avg.toFixed(2) : "-"}</td>
                  <td>{price ? price.toFixed(2) : "-"}</td>
                  <td className={profClass}>{pnl ? pnl.toFixed(2) : "0.00"}</td>
                  <td className={dayClass}>{stock.day ?? "-"}</td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </>
  );
};

export default Positions;
