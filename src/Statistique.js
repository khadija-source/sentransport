import './Statistique.css';

// Première version : 10 Lignes
export function StatistiqueLignes() {
  return (
    <div className="statistique">
      <h2 className="statistique-chiffre">10</h2>
      <p className="statistique-libelle">Lignes</p>
    </div>
  );
}

// Deuxième version : 150 Arrêts
export function StatistiqueArrets() {
  return (
    <div className="statistique">
      <h2 className="statistique-chiffre">150</h2>
      <p className="statistique-libelle">Arrêts</p>
    </div>
  );
}

// Troisième version : 5 Communes
export function StatistiqueCommunes() {
  return (
    <div className="statistique">
      <h2 className="statistique-chiffre">5</h2>
      <p className="statistique-libelle">Communes</p>
    </div>
  );
}