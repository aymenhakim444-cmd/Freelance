import { createContext, useContext, useEffect, useState } from "react";
import { uid } from "../utils";

const STORAGE_KEY = "projets_v1";

const ProjectsContext = createContext();

export function ProjectsProvider({ children }){
  const [projects, setProjects] = useState(() => {
    try {
      const raw = localStorage.getItem(STORAGE_KEY);
      return raw ? JSON.parse(raw) : sampleData();
    } catch {
      return sampleData();
    }
  });

  useEffect(() => {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(projects));
  }, [projects]);

  function addProject(data){
    setProjects(prev => [{ id: uid(), createdAt: Date.now(), ...data }, ...prev]);
  }

  function updateProject(id, changes){
    setProjects(prev => prev.map(p => p.id === id ? { ...p, ...changes } : p));
  }

  function removeProject(id){
    setProjects(prev => prev.filter(p => p.id !== id));
  }

  return (
    <ProjectsContext.Provider value={{ projects, addProject, updateProject, removeProject }}>
      {children}
    </ProjectsContext.Provider>
  );
}

export function useProjects(){
  return useContext(ProjectsContext);
}

function sampleData(){
  return [
    { id: uid(), client: "Houssam", title: "Site Vitrine", budget: 2000, deadline: "2025-01-15", status: "En cours", priority: "Haute", description: "Site pour ACME", createdAt: Date.now() - 86400000 * 10 },
    { id: uid(), client: "Aymen", title: "API interne", budget: 5000, deadline: "2025-02-10", status: "Devis", priority: "Moyenne", description: "API REST pour gestion", createdAt: Date.now() - 86400000 * 25 },
    { id: uid(), client: "Daif", title: "Maintenance", budget: 800, deadline: "2024-12-31", status: "Terminé", priority: "Basse", description: "Taches de maintenance", createdAt: Date.now() - 86400000 * 60 },
  ];
}
