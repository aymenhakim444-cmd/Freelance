export const STATUSES = ["Devis", "En cours", "En attente", "Terminé", "Annulé"];
export const PRIORITIES = ["Basse", "Moyenne", "Haute", "Urgente"];

export function formatCurrency(n){
  if (isNaN(n)) return "0";
  return new Intl.NumberFormat("fr-FR", { style: "currency", currency: "EUR", maximumFractionDigits:0 }).format(n);
}

export function uid(){
  return Date.now().toString(36) + Math.random().toString(36).slice(2,7);
}
