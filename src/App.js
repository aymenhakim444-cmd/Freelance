  import React from "react";
  import { Routes, Route, Link } from "react-router-dom";
  import Landing from "./pages/Landing";
  import Dashboard from "./pages/Dashboard";
  import ProjectsList from "./pages/ProjectsList";
  import AddProject from "./pages/AddProject";
  import EditProject from "./pages/EditProject";
  import Header from "./components/Header";


  export default function App() {
    return (
      
      <div  className="app" style={{
    margin: "0",
    backgroundColor:"#003049",

    
  }}>
    <style>{`
.la-button:hover {
            transform: translateY(-3px);
            box-shadow: 0 10px 24px rgba(0,0,0,0.25);
                }
                `}
    </style>
      

        <Header />
        <main className="container" >
          <Routes>
            <Route path="/" element={<Landing />} />
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/projets" element={<ProjectsList />} />
            <Route path="/projets/ajouter" element={<AddProject />} />
            <Route path="/projets/modifier/:id" element={<EditProject />} />
            <Route path="*" element={
 <div
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        fontFamily: "Inter, sans-serif",
      }}
    >
      <div
        style={{
          background: "#ffffff",
          padding: "70px 10px",
          borderRadius: "16px",
          textAlign: "center",
          boxShadow: "0 10px 30px rgba(0,0,0,0.1)",
          maxWidth: "700px",
          width: "100%",
        }}
      >
        <h1 style={{ marginBottom: "15px", color: "#222" }}>
          Bonjour 👋
        </h1>

        <p style={{ color: "#555", marginBottom: "30px", lineHeight: "1.6" }}>
           Ravi de vous voir ici, 
          Soyez la bienvenue.
        </p>


      <Link style={{
        display: 'inline-block',
        cursor: "pointer",
        textDecoration:"none",
        marginTop: "20px",
        padding: "14px 34px",
        borderRadius:" 8px",
        background: "#eef4ed",
        color: "#2c5282",
        fontWeight: "600",
        textDecoration: "none",
        transition: "transform 0.2s ease, box-shadow 0.25s ease",

      }}
       to="/"
       className="la-button"
       >Accedez a l'accueil</Link>

      </div>
    </div>
            } />
            <Route path="/" element={<Landing />} />
          </Routes>
        </main>
      <footer
      style={{
        backgroundColor: "black",
        color: "white",
        padding: "40px 20px",
        marginTop: "60px",
        marginLeft:"0"
      }}
    >
      <div
        style={{
          maxWidth: "1200px",
          margin: "0 auto",
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "space-between",
          gap: "30px",
        }}
      >
        <div style={{ maxWidth: "300px" }}>
          <h3 style={{ marginBottom: "10px" }}>Freelance Manager</h3>
          <p style={{ fontSize: "14px", lineHeight: "1.6" }}>
            Plateforme moderne pour gérer vos projets, suivre vos budgets
            et améliorer votre productivité.
          </p>
        </div>

        <div>
          <h4 style={{ marginBottom: "10px" }}>Navigation</h4>
          <ul style={{ listStyle: "none", padding: 0, fontSize: "14px" }}>
            
            <li>Accueil</li>
            <li>Projets</li>
            <li>Dashboard</li>
            <li>Contact</li>
          </ul>
        </div>

        <div>
          <h4 style={{ marginBottom: "10px" }}>Contact</h4>
          <p style={{ fontSize: "14px" }}>📧 aymenhakim444@gamil.com</p>
          <p style={{ fontSize: "14px" }}>📍 Casablanca, Maroc</p>
        </div>
      </div>

      <div
        style={{
          textAlign: "center",
          marginTop: "30px",
          fontSize: "13px",
          opacity: 0.8,
        }}
      >
        © {new Date().getFullYear()} Aymen — Tous droits réservés.
      </div>
    </footer>
    </div>
    
  );
}

