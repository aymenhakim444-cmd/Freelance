import React, { useMemo, useState } from "react";
import { useProjects } from "../context/ProjectsContext";
import ProjectTable from "../components/ProjectTable";
import { STATUSES, PRIORITIES } from "../utils";


export default function ProjectsList(){
  const { projects, updateProject, removeProject } = useProjects();
  const [qStatus, setQStatus] = useState("");
  const [qPriority, setQPriority] = useState("");
  const [search, setSearch] = useState("");

  const filtered = useMemo(()=> {
    return projects.filter(p => {
      if (qStatus && p.status !== qStatus) return false;
      if (qPriority && p.priority !== qPriority) return false;
      if (search) {
        const s = search.toLowerCase();
        if (!(`${p.client} ${p.title} ${p.description}`.toLowerCase().includes(s))) return false;
      }
      return true;
    });
  }, [projects, qStatus, qPriority, search]);

  function quickStatus(id, newStatus){
    if (!newStatus) return;
    updateProject(id, { status: newStatus });
  }

  return (
    <div>
      <h2 style={{color:"#ade8f4"}}>Projets</h2>
      <div className="card controls">
        <select value={qStatus} onChange={e=>setQStatus(e.target.value)}>
          <option value="">Tous statuts</option>
          {STATUSES.map(s => <option key={s} value={s}>{s}</option>)}
        </select>
        <select value={qPriority} onChange={e=>setQPriority(e.target.value)}>
          <option value="">Toutes priorités</option>
          {PRIORITIES.map(p => <option key={p} value={p}>{p}</option>)}
        </select>
        <input placeholder="Recherche client / titre" value={search} onChange={e=>setSearch(e.target.value)} />
        <button className="btn btn-ghost" onClick={()=>{ setQStatus(""); setQPriority(""); setSearch(""); }}>Réinitialiser</button>
      </div>

      <ProjectTable projects={filtered} onQuickStatus={quickStatus} onDelete={removeProject} />
    </div>
  );
}
