import React, { useState, useEffect } from 'react';
import { baseurl2 } from '../../utils/baseurl';
import { getWarehouses } from '../../api/warehouse'; // Asegúrate de que esta importación sea correcta

const Libromain = ({ libro }) => {
  const [randomWarehouse, setRandomWarehouse] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchRandomWarehouse = async () => {
      if (!libro) {
        setLoading(true);
        try {
          const response = await getWarehouses();
          const warehouses = response.data; // Accedemos al array de bodegas
          
          if (warehouses && warehouses.length > 0) {
            const randomIndex = Math.floor(Math.random() * warehouses.length);
            setRandomWarehouse(warehouses[randomIndex]);
          }
        } catch (err) {
          console.error("Error fetching warehouses:", err);
          setError(err);
        } finally {
          setLoading(false);
        }
      }
    };

    fetchRandomWarehouse();
  }, [libro]);

  if (loading) return <div>Cargando imagen aleatoria...</div>;
  if (error) return <div>Error al cargar imagen aleatoria</div>;

  return (
    <div className="w-[99%] h-[50%] relative flex items-center bg-[url('/images/fondolibromain.png')] bg-center mt-[20%]">
      <div className="w-full h-full flex justify-right items-center">
        {libro ? (
          null
        ) : randomWarehouse ? (
          <img 
            src={baseurl2 + randomWarehouse.file} // Asegúrate que las bodegas tengan propiedad 'file'
            alt={randomWarehouse.name} 
            className='absolute ml-[15%] w-[63%]' 
          />
        ) : null}
      </div>
    </div>
  );
};

export default Libromain;