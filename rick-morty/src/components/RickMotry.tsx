import { useState, useEffect } from 'react';
import { RickMortyServices } from '../services/rickmorty.service.js'
import RickMortyCard from './RickMortyCard'
import './RickMortyStyle.css'
import RickMortyFavor from './RickMortyFavor.js';

function RickMorty() {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [test , xx] = useState(null)

  const fetchData = async () => {
      const data = await RickMortyServices.getAll()
      setData(data)
    };
    const setDatas1 = (x) => {
      xx(x)
    }
    
  useEffect(() => {
    fetchData();
  }, []);




  return (
    <div >
      <h1>Избранные персонажи</h1>
      <RickMortyFavor getDataFavor={test}/>
      <h1>Все персонажи </h1>
      <RickMortyCard  data={data} setDatas={setDatas1}/>
    </div>
  );
}

export default RickMorty;