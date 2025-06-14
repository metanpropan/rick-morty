import { useState, useEffect } from 'react';

function RickMorty() {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('https://rickandmortyapi.com/api/character');
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        const result = await response.json();
        setData(result);
        
      } catch (err) {
        
      } finally {
        setLoading(false);
      }
    };
    fetchData();
    console.log( fetchData())
  }, []); // Пустой массив зависимостей означает, что эффект выполнится один раз при монтировании

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;

  return (
    <div>
      <h1>Все персонажи </h1>
      <pre>{JSON.stringify(data, null, 2)}</pre>
    </div>
  );
}

export default RickMorty;