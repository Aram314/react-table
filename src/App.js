import React from 'react';
import Users from "./Users";

function App() {
  return (
    <div>
      <table>
        <thead>
        <tr>
          <th>Index</th>
          <th>Name</th>
          <th>Date</th>
          <th>Status</th>
        </tr>
        </thead>

      </table>
      <Users />
    </div>
  );
}

export default App;
