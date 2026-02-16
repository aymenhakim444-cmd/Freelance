import React from "react";
import { useParams, useNavigate } from "react-router-dom";
import ProjectForm from "../components/ProjectForm";
import { useProjects } from "../context/ProjectsContext";

export default function EditProject(){
  const { id } = useParams();
  const { projects, updateProject } = useProjects();
  const nav = useNavigate();

  const project = projects.find(p => p.id === id);
  if (!project) return <div className="card"><h3>Projet introuvable</h3></div>;

  function handleSave(changes){
    updateProject(id, changes);
    nav("/projets");
  }

  return (
    <div>
      <h2 style={{color:"#ade8f4"}}>Modifier le projet</h2>
      <ProjectForm initial={project} onSubmit={handleSave} submitLabel="Enregistrer" />
    </div>
  );
}
