import { Link } from "@remix-run/react";

export function NoPosts() {
  return (
    <div className="text-center">
      <h2>Aun no tenemos posts en esta categoría, seleciona otra</h2>
      <Link to="/" className="text-cyan-600 hover:opacity-60">
        Ver otras categorías
      </Link>
    </div>
  );
}