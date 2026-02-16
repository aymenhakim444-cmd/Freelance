import React, { useMemo } from "react";
import { formatCurrency } from "../utils";
  import "./Stats.css"

  export default function Stats({ projects }){
    const stats = useMemo(()=> {
      const totalRevenu = projects.filter(p=>p.status === "Terminé").reduce((s,p)=>s + Number(p.budget || 0), 0);
      const budgetEnCours = projects.filter(p=>p.status === "En cours" || p.status === "En attente").reduce((s,p)=>s + Number(p.budget || 0), 0);
      const actifs = projects.filter(p=>p.status === "En cours" || p.status === "En attente").length;
      const termines = projects.filter(p=>p.status === "Terminé").length;
      const annules = projects.filter(p=>p.status === "Annulé").length;
      const taux = (termines + annules) === 0 ? 0 : Math.round((termines / (termines + annules)) * 100);
      return { totalRevenu, budgetEnCours, actifs, taux, termines, annules };
    }, [projects]);
  

    return (
      <div>
       
      <div className="kpi-grid">
        <div className="kpi card">
          <div className="small">Revenu total (Terminés)</div>
          <h3>{formatCurrency(stats.totalRevenu)}</h3>
          <div className="small">{stats.termines} projet(s) terminé(s)</div>
        </div>
        <div className="kpi card">
          <div className="small">Budget en cours</div>
          <h3>{formatCurrency(stats.budgetEnCours)}</h3>
          <div className="small">{stats.actifs} projet(s) actif(s)</div>
        </div>
        <div className="kpi card">
          <div className="small">Nombre de projets actifs</div>
          <h3>{stats.actifs}</h3>
        </div>
        <div className="kpi card">
          <div className="small">Taux de réussite</div>
          <h3>{stats.taux}%</h3>

        </div>
      </div>
      </div>
    );
  }
