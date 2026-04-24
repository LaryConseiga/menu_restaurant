import React from "react";

export default function TableRow({ etudiant, index }) {
  return (
    <tr>
      <td>{index + 1}</td>
      <td>{etudiant?.numero_inscription ?? "-"}</td>
      <td>{etudiant?.nom ?? "-"}</td>
      <td>{etudiant?.prenoms ?? "-"}</td>
      <td>{etudiant?.genre ?? "-"}</td>
      <td>{etudiant?.moyenne ?? "-"}</td>
      <td>{etudiant?.decision ?? "-"}</td>
    </tr>
  );
}