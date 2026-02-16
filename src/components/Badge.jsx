  import React from "react";

  const colorMap = {
    "Devis":"#F6E05E",
    "En cours":"#63B3ED",
    "En attente":"#F6AD55",
    "Terminé":"#68D391",
    "Annulé":"#FC8181"
  };

  export default function Badge({ status }){
    const color = colorMap[status] || "#E2E8F0";
    return (
      <span style={{
        display:"inline-block",
        padding:"6px 8px",
        borderRadius:999,
        background: color,
        fontWeight:600,
        fontSize:12
      }}>
        {status}
      </span>
    );
  }
