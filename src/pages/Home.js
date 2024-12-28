import React, { useEffect, useState } from 'react';
import { Circles } from 'react-loader-spinner';
import ProductTitle from '../components/product-file';

const Home = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(false);

  async function fetchListOfProducts() {
    setLoading(true);
    try {
      const res = await fetch('https://fakestoreapi.com/products');
      const data = await res.json();

      if (data) {
        setProducts(data);
      }
    } catch (error) {
      console.error("Failed to fetch products:", error);
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    fetchListOfProducts();
  }, []);

  return (
    <div>
      {loading ? (
        <div className="min-h-screen w-full flex justify-center items-center">
          <Circles
            height={'120'}
            width={'120'}
            color="rgb(127,29,29)"
            visible={true}
          />
        </div>
      ) : (
        <div className='min-h-[80vh] grid sm:grid-cols-2 md:grid-cols-3 space-x-5 space-y-10 lg:grid-cols-4 max-w-6xl mx-auto p-3'>
            {
                products && products.length ? 
                products.map(productItem => <ProductTitle product= {productItem}/>)
                :null
            }  
        </div>
      )}
    </div>
  );
};

export default Home;
