import axios from "axios";
import { useState } from "react";

function Leads() {
  const [form, setForm] = useState({});

  const submit = async () => {
    await axios.post("http://localhost:5000/leads", form);
    alert("Lead added");
  };

  return (
    <div>
      <h2>Leads</h2>
      <input placeholder="Name" onChange={e=>setForm({...form,name:e.target.value})}/>
      <input placeholder="Phone" onChange={e=>setForm({...form,phone:e.target.value})}/>
      <input placeholder="Email" onChange={e=>setForm({...form,email:e.target.value})}/>
      <input placeholder="Budget" onChange={e=>setForm({...form,budget:e.target.value})}/>
      <button onClick={submit}>Add</button>
    </div>
  );
}

export default Leads;
