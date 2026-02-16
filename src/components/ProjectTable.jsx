import React from "react";
import { Link } from "react-router-dom";
import Badge from "./Badge";

 export default function ProjectTable({ projects, onQuickStatus, onDelete }){
   return (
     <table className="table card">
       <thead>
         <tr>
           <th>Client</th>
           <th>Titre</th>
           <th>Budget</th>
           <th>Deadline</th>
           <th>Statut</th>
           <th>Priorité</th>
           <th>Actions</th>
         </tr>
       </thead>
       <tbody>
         {projects.length === 0 && (
           <tr><td colSpan="7" className="small">Aucun projet.</td></tr>
         )}


         {projects.map(p => (
           <tr key={p.id}>
             <td>{p.client}</td>
             <td><strong>{p.title}</strong><div className="small">{p.description}</div></td>
             <td>{new Intl.NumberFormat({style:"currency",currency:"EUR", maximumFractionDigits:0}).format(p.budget)}</td>
             <td>{p.deadline}</td>
             <td>
               <div className="badges">
                 <Badge status={p.status} />
                 <div className="quick-status">
                   <select value={p.status} onChange={(e)=>onQuickStatus(p.id, e.target.value)} className="small">
                     <option value="">Changer...</option>
                     <option>Devis</option>
                     <option>En cours</option>
                     <option>En attente</option>
                     <option>Terminé</option>
                     <option>Annulé</option>
                   </select>
                 </div>
               </div>
             </td>
             <td>{p.priority}</td>
             <td className="actions">
              <Link className="link" to={`/projets/modifier/${p.id}`}><button className="btn btn-ghost" type="button">Éditer</button></Link>
              <button className="btn btn-ghost" onClick={()=>onDelete(p.id)}>Supprimer</button>
             </td>
           </tr>
         ))}

       </tbody>
     </table>
   );
 }
