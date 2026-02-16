import { STATUSES, PRIORITIES } from "../utils";
import React, { useState } from "react";

  export default function ProjectForm({ onSubmit, initial = {}, submitLabel = "Créer" }){
    const [client, setClient] = useState(initial.client || "");
    const [title, setTitle] = useState(initial.title || "");
    const [budget, setBudget] = useState(initial.budget || "");
    const [deadline, setDeadline] = useState(initial.deadline || "");
    const [status, setStatus] = useState(initial.status || "Devis");
    const [priority, setPriority] = useState(initial.priority || "Moyenne");
    const [description, setDescription] = useState(initial.description || "");

    function handleSubmit(e){
      e.preventDefault();
      const b = Number(budget) || 0;
      onSubmit({ client, title, budget: b, deadline, status, priority, description });
    }

    return (
      <form onSubmit={handleSubmit} className="card">
        <div className="form-row">
          <input placeholder="Nom client" value={client} onChange={e=>setClient(e.target.value)} required />
          <input placeholder="Titre projet" value={title} onChange={e=>setTitle(e.target.value)} required />
        </div>
        <div className="form-row">
          <input placeholder="Budget (EUR)" type="number" value={budget} onChange={e=>setBudget(e.target.value)} />
          <input type="date" value={deadline} onChange={e=>setDeadline(e.target.value)} />
        </div>
        <div className="form-row">
          <select value={status} onChange={e=>setStatus(e.target.value)}>
            {STATUSES.map(s => <option key={s} value={s}>{s}</option>)}
          </select>
          <select value={priority} onChange={e=>setPriority(e.target.value)}>
            {PRIORITIES.map(p => <option key={p} value={p}>{p}</option>)}
          </select>
        </div>
        <div className="form-row">
          <textarea placeholder="Description" value={description} onChange={e=>setDescription(e.target.value)} rows={4}></textarea>
        </div>
        <div style={{display:"flex", gap:8, justifyContent:"flex-end"}}>
          <button type="submit" className="btn btn-primary">{submitLabel}</button>
        </div>
      </form>
    );
  }
