// =============================
// 🚀 SITE COMPLET COMPARATEUR PRIX (MVP)
// =============================
// Stack: Next.js + API mock (facile à déployer sur Vercel)

import { useState } from "react";

export default function Home() {
  const [query, setQuery] = useState("");
  const [results, setResults] = useState([]);
  const [loading, setLoading] = useState(false);

  const search = async () => {
    setLoading(true);

    // Simulation API (à remplacer plus tard)
    const fakeResults = [
      { name: "iPhone 15", price: 899, site: "Amazon", link: "#" },
      { name: "iPhone 15", price: 870, site: "eBay", link: "#" },
      { name: "iPhone 15", price: 910, site: "Fnac", link: "#" }
    ];

    // Tri automatique (moins cher en premier)
    fakeResults.sort((a, b) => a.price - b.price);

    setTimeout(() => {
      setResults(fakeResults);
      setLoading(false);
    }, 800);
  };

  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <div className="max-w-4xl mx-auto">

        <h1 className="text-3xl font-bold mb-6 text-center">
          🔎 Comparateur de Prix Intelligent
        </h1>

        <div className="flex gap-2 mb-6">
          <input
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Rechercher un produit..."
            className="flex-1 p-3 rounded-xl border"
          />
          <button
            onClick={search}
            className="bg-black text-white px-6 rounded-xl"
          >
            Rechercher
          </button>
        </div>

        {loading && <p>Chargement...</p>}

        <div className="space-y-4">
          {results.map((item, i) => (
            <div
              key={i}
              className="bg-white p-4 rounded-xl shadow flex justify-between items-center"
            >
              <div>
                <h2 className="font-semibold">{item.name}</h2>
                <p className="text-sm text-gray-500">{item.site}</p>
              </div>

              <div className="text-right">
                <p className="text-lg font-bold">{item.price}€</p>
                <a
                  href={item.link}
                  className="text-blue-500 text-sm"
                >
                  Voir l'offre
                </a>
              </div>
            </div>
          ))}
        </div>

      </div>
    </div>
  );
}

// =============================
// 🧠 PROCHAINES AMÉLIORATIONS
// =============================
// - connecter API Amazon / eBay
// - ajouter filtres
// - ajouter comptes utilisateurs
// - ajouter base de données
// - SEO + monetisation affiliation

// =============================
// 🌍 DÉPLOIEMENT (TRÈS SIMPLE)
// =============================
// 1. Va sur https://vercel.com
// 2. Crée un compte
// 3. Clique "New Project"
// 4. Upload ce fichier
// 5. Clique Deploy
// 6. Tu obtiens un lien public

// =============================
// 💰 MONETISATION
// =============================
// - Amazon Affiliate
// - eBay Partner Network
// - publicité

// =============================
// 🔐 SÉCURITÉ
// =============================
// - HTTPS automatique via Vercel
// - Ajouter Stripe si paiement futur

