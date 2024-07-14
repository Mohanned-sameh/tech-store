import { useEffect, useState } from 'react';
import ProductCard from '../components/ProductCard';
import api from '../utils/api';

const Home = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      const response = await api.get('/products');
      setProducts(response.data);
    };

    fetchProducts();
  }, []);

  return (
    <div className='container mx-auto mt-8 grid grid-cols-4 gap-4'>
      {products.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
  );
};

export default Home;
