import { useState, useEffect } from 'react';
import { RickMortyServices } from '../services/rickmorty.service.js'
import RickMortyCard from './RickMortyCard'

function RickMorty() {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const fetchData = async () => {
      const data = await RickMortyServices.getAll()
      setData(data)
    };

    
  useEffect(() => {
    fetchData();
  }, []);




  return (
    <div>
      <h1>Все персонажи </h1>
      <RickMortyCard data={data}/>
    </div>
  );
}

export default RickMorty;