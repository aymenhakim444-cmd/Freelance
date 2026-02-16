    import React from "react";
    import { useProjects } from "../context/ProjectsContext";
    import Stats from "../components/Stats";
    import { Link } from "react-router-dom";
    import "./Dashboard.css"

    export default function Dashboard(){
    const { projects } = useProjects();
    const derniers = projects.slice(0,5);
    return (
        
        <div>

        <h2 style={{color:"#ade8f4"}}>Tableau de bord</h2>
        <Stats projects={projects} />
        <div className="card" style={{
            color:"#22333bd4"
        }}>
            <h3>Les Projets Ajouter</h3>
            <ul style={{padding:"10px", marginLeft:"10px"}}>
            {derniers.length === 0 && <li className="small">Aucun projet</li>}
            {derniers.map(p => (
                <li key={p.id} style={{marginBottom:8}}>
                <strong>{p.title}</strong> / <span className="small">{p.client}</span>
                <div style={{padding:8}} className="small">Statut: {p.status} — Budget: {new Intl.NumberFormat("fr-FR",{style:"currency",currency:"EUR",maximumFractionDigits:0}).format(p.budget)}</div>
                <Link to={`/projets/modifier/${p.id}`} className="btn-outline">Ouvrir</Link>
                </li>
            ))}
            </ul>
        </div>
        </div>
    );
    }