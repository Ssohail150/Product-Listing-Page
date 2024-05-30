// pages/index.js
import { useState } from 'react';
import Modal from '../components/Modal';

export async function getStaticProps() {
  const res = await fetch('https://fakestoreapi.com/products');
  const products = await res.json();
  return {
    props: {
      products,
    },
  };
}

export default function Home({ products }) {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedProduct, setSelectedProduct] = useState(null);

  const filteredProducts = products.filter(product =>
    product.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold mb-8 text-center">Product Listing</h1>
      <input
        type="text"
        placeholder="Search products..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        className="border p-2 mb-4 w-full text-black"
      />
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {filteredProducts.map(product => (
          <div
            key={product.id}
            className="border p-4 rounded-lg cursor-pointer"
            onClick={() => setSelectedProduct(product)}
          >
            <img src={product.image} alt={product.title} className="w-full h-48 object-cover mb-4" />
            <h2 className="text-lg font-bold">{product.title}</h2>
            <p className="text-gray-700">${product.price}</p>
          </div>
        ))}
      </div>
      {selectedProduct && (
        <Modal product={selectedProduct} onClose={() => setSelectedProduct(null)} />
      )}
    </div>
  );
}
