import React, { useState, useEffect } from 'react';
import ProductCard from './ProductCard';
import { supabase } from '../utils/supabaseClient';

function ProductList() {
  const [products, setProducts] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const { data, error } = await supabase
          .from('products')
          .select('*');

        if (error) {
          setError(error);
          return;
        }
        setProducts(data);
      } catch (e) {
        setError(e.message);
      }
    };

    fetchProducts();
  }, []);

  if (error) {
    return <p>Error: {error}</p>
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
      {products.length === 0 ? <p>No hay productos</p> : (
        products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))
      )}
    </div>
  );
}

export default ProductList;