import React from 'react';

function ProductCard({ product }) {
  return (
    <div className="border rounded p-4">
      <h3 className="text-lg font-semibold mb-2">{product.name}</h3>
      <p className="text-gray-700">Precio: ${product.price}</p>
      {/* Puedes agregar más detalles aquí, como descripción, etc. */}
    </div>
  );
}

export default ProductCard;