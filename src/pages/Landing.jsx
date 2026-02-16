  import React from "react";
  import { Link } from "react-router-dom";
  import "./Landing.css"

  export default function Landing(){
    return (
      <div >
 
    <div style={{ fontFamily: "Inter, sans-serif" }}>
         
         <section style={{
           padding: "80px 20px",
           textAlign: "center",
           background: "#669bbc"  ,
           color: "#eef4ed",
           borderRadius:"20px 2px 20px 2px"
          }}>
           <h1 style={{ fontSize: "48px", marginBottom: "30px" }}>
             Gérez vos projets simplement.
           </h1>
           <p style={{ fontSize: "18px", maxWidth: "600px", margin: "0 auto" }}>
             Une plateforme moderne pour suivre vos projets, vos budgets et votre productivité.
             Conçue pour les freelances, les équipes et les créateurs.
           </p>
   
           <div style={{ marginTop: "30px" }}>

   
             <Link
               to="/projets"
               
               className="ma-button"
             >
               Voir les projets
             </Link>
           </div>
         </section>
   
         <section style={{ padding: "60px 20px", color:"#eef4ed"}}>
           <h2 style={{ textAlign: "center", fontSize: "32px" ,color:"#eef4ed"}}>Développeur</h2>
   
           <p style={{ textAlign: "center", maxWidth: "600px", margin: "20px auto", fontSize: "18px", color:"#eef4ed" }}>
             Cette plateforme est développée avec passion par <strong>Aymen</strong> ,
             créateur motivé par l'efficacité, la simplicité et la qualité.
           </p>
   
           <div style={{
             marginTop: "30px",
             display: "flex",
             justifyContent: "center",
             gap: "30px",
             flexWrap: "wrap",
             
           }}>
             <div className="card" style={{ width: "260px", textAlign: "center", backgroundColor:"#669bbc" }}>
               <h3>Aymen</h3>
               <p className="small" style={{color:"#fdf0d5b3"}}>Développeur Full-Stack</p>
             </div>
   
           </div>
         </section>
   
         <section style={{ padding: "60px 20px" }}>
           <h2 style={{ textAlign: "center", fontSize: "32px", color:"#eef4ed" }}>Fonctionnalités principales</h2>
   
           <div style={{
             marginTop: "40px",
             display: "grid",
             textAlign:"center",
             gap: "20px",
             color:"#eef4ed"
           }}
           
           >
             <div className="card" style={{backgroundColor:"#8da9c4" ,boxShadow:"8px 8px 8px 5px black"}}>
               <h3>Gestion complète des projets</h3>
               <p>Ajoutez, modifiez ou supprimez vos projets en toute simplicité.</p>
             </div>
   
             <div className="card" style={{backgroundColor:"#8da9c4" ,boxShadow:"-8px 8px 8px 5px black"}}>
               <h3>Suivi en temps réel</h3>
               <p>Mettez à jour votre statut, priorité et avancement d'un clic.</p>
             </div>
   
             <div className="card" style={{backgroundColor:"#8da9c4" ,boxShadow:"8px 8px 8px 5px black"}}>
               <h3>Statistiques automatiques</h3>
               <p>Revenu total, budget en cours et taux de réussite instantanés.</p>
             </div>
   
             <div className="card" style={{backgroundColor:"#8da9c4" ,boxShadow:"-8px 8px 8px 5px black"}}>
               <h3>Filtres avancés</h3>
               <p>Filtrez par statut, priorité ou mot-clé pour une recherche rapide.</p>
             </div>
           </div>
         </section>
   
   

         <section style={{
           padding: "80px 20px",
           textAlign: "center",
           background:"#669bbc",
           color:"#eef4ed", 
           borderRadius:"2px 20px 2px 20px"
         }}>
           <h2 style={{ fontSize: "36px", marginBottom: "10px",  }}>
             Lancez-vous dès maintenant.
           </h2>
           <p style={{ fontSize: "18px" }}>
             Avec Aymen ,gérez vos projets comme un pro.
           </p>
   
           <Link
             to="/dashboard"
             
              className="btn-primary"
           >
             Accéder à l'application
           </Link>
           
         </section>
       </div>
              </div>

     );

   }
   