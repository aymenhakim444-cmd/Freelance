import React from "react";
import { useNavigate } from "react-router-dom";
import ProjectForm from "../components/ProjectForm";
import { useProjects } from "../context/ProjectsContext";

export default function AddProject(){
  const { addProject } = useProjects();
  const nav = useNavigate();

  function handleCreate(data){
    addProject(data);
    nav("/projets");
  }

  return (
    <div>
      <h2 style={{color:"#ade8f4"}}>Ajouter un projet</h2>
      <ProjectForm onSubmit={handleCreate} submitLabel="Créer le projet" />
    </div>
  );
}
