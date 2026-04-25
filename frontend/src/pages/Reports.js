import { useEffect, useState } from "react";
import axios from "axios";

function Reports() {
  const [leads, setLeads] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:5000/leads").then(res => setLeads(res.data));
  }, []);

  return (
    <div>
      <h2>Reports</h2>
      <p>Total Leads: {leads.length}</p>
    </div>
  );
}

export default Reports;
