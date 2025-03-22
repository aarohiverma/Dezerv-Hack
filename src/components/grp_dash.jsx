import React, { useState } from "react";
import { PieChart, Pie, Cell, Tooltip, Legend, LineChart, Line, XAxis, YAxis, ResponsiveContainer } from "recharts";
import "./grp_dash.css";

const Dashboard = () => {
  // Dummy data for pie charts
  const [data] = useState({
    profit: [
      { name: "Profit", value: 4000 },
      { name: "Remaining", value: 6000 },
    ],
    investment: [
      { name: "Investment", value: 7000 },
      { name: "Remaining", value: 3000 },
    ],
    loss: [
      { name: "Loss", value: 2000 },
      { name: "Remaining", value: 8000 },
    ],
  });

  // Leaderboard Data (Sorted by Profit)
  const leaderboardData = [
    { name: "Alice", lastTrade: "2025-03-20", profit: 4500 },
    { name: "Bob", lastTrade: "2025-03-18", profit: 3200 },
    { name: "Charlie", lastTrade: "2025-03-19", profit: 2800 },
    { name: "David", lastTrade: "2025-03-21", profit: 2200 },
    { name: "Eve", lastTrade: "2025-03-15", profit: 1500 },
  ].sort((a, b) => b.profit - a.profit);

  const COLORS = ["#0088FE", "#FFBB28"]; // Blue for main, yellow for remaining

  // Dummy investment data (Last 5 Trades)
  const investmentData = [
    { date: "Mar 16", Alice: 10000, Bob: 8000, Charlie: 8500, David: 7000, Eve: 6000 },
    { date: "Mar 17", Alice: 10500, Bob: 8200, Charlie: 8700, David: 7200, Eve: 6200 },
    { date: "Mar 18", Alice: 9800, Bob: 8100, Charlie: 8400, David: 7100, Eve: 6100 },
    { date: "Mar 19", Alice: 11000, Bob: 8500, Charlie: 9000, David: 7500, Eve: 6500 },
    { date: "Mar 20", Alice: 11500, Bob: 8700, Charlie: 9300, David: 7700, Eve: 6700 },
  ];

  // Colors for investment graph
  const userColors = {
    Alice: "#0088FE",
    Bob: "#00C49F",
    Charlie: "#FFBB28",
    David: "#FF8042",
    Eve: "#A020F0",
  };

  // Chatroom State
  const [messages, setMessages] = useState([]);
  const [newMessage, setNewMessage] = useState("");

  const sendMessage = () => {
    if (newMessage.trim()) {
      setMessages([...messages, { text: newMessage, id: messages.length }]);
      setNewMessage("");
    }
  };

  return (
    <div className="dashboard">
      {/* Sidebar */}
      <div className="sidebar">
        <h2>Dashboard</h2>
        <ul>
          <li>Home</li>
          <li>Analytics</li>
          <li>Settings</li>
        </ul>
      </div>

      {/* Main Content */}
      <div className="main-content">
        <h1 className="welcome-message">Welcome to the Group Dashboard</h1>

        {/* Charts Container */}
        <div className="charts-container">
          {/* Total Profit Chart */}
          <div className="chart">
            <h3>Total Profit</h3>
            <PieChart width={200} height={200}>
              <Pie data={data.profit} cx="50%" cy="50%" innerRadius={40} outerRadius={60} dataKey="value">
                {data.profit.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                ))}
              </Pie>
              <Tooltip />
              <Legend />
            </PieChart>
          </div>

          {/* Total Investment Chart */}
          <div className="chart">
            <h3>Total Investment</h3>
            <PieChart width={200} height={200}>
              <Pie data={data.investment} cx="50%" cy="50%" innerRadius={40} outerRadius={60} dataKey="value">
                {data.investment.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                ))}
              </Pie>
              <Tooltip />
              <Legend />
            </PieChart>
          </div>

          {/* Total Loss Chart */}
          <div className="chart">
            <h3>Total Loss</h3>
            <PieChart width={200} height={200}>
              <Pie data={data.loss} cx="50%" cy="50%" innerRadius={40} outerRadius={60} fill="#FF4D4D" dataKey="value">
                {data.loss.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                ))}
              </Pie>
              <Tooltip />
              <Legend />
            </PieChart>
          </div>
        </div>

        {/* Investment Movement Graph (Below Pie Charts) */}
        <div className="graph-container">
          <h3>Investment Movement (Last 5 Trades)</h3>
          <ResponsiveContainer width="100%" height={300}>
            <LineChart data={investmentData} margin={{ top: 10, right: 30, left: 0, bottom: 10 }}>
              <XAxis dataKey="date" />
              <YAxis />
              <Tooltip />
              <Legend />
              {Object.keys(userColors).map((user) => (
                <Line key={user} type="monotone" dataKey={user} stroke={userColors[user]} strokeWidth={2} dot={{ r: 5 }} />
              ))}
            </LineChart>
          </ResponsiveContainer>
        </div>
      </div>

      {/* Right Section (Leaderboard + Chat) */}
      <div className="right-section">
        {/* Leaderboard */}
        <div className="leaderboard-container">
          <h3>Leaderboard</h3>
          <ul className="leaderboard-list">
            {leaderboardData.map((entry, index) => (
              <li key={index} className="leaderboard-item">
                <div className="leaderboard-rank">#{index + 1}</div>
                <div className="leaderboard-info">
                  <span className="leaderboard-name">{entry.name}</span>
                  <span className="leaderboard-trade">Last Trade: {entry.lastTrade}</span>
                </div>
                <span className="profit-badge">${entry.profit}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Chatroom (Below Leaderboard) */}
        <div className="chatroom-container">
          <h3>Chatroom</h3>
          <div className="chat-messages">
            {messages.map((msg) => (
              <div key={msg.id} className="chat-message">{msg.text}</div>
            ))}
          </div>
          <div className="chat-input-container">
            <input
              type="text"
              className="chat-input"
              value={newMessage}
              onChange={(e) => setNewMessage(e.target.value)}
              placeholder="Type a message..."
            />
            <button className="chat-send" onClick={sendMessage} >Send</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
