import React, { useContext, useEffect, useState } from 'react';
import "./Styles/Cards.css";
import axios from 'axios';
import { AppContext } from '../Contexts/AppContext';

const Cards = () => {
  const { globalSearchData, category } = useContext(AppContext);
  const [data, setData] = useState([]);

  useEffect(() => {
    async function fetchData() {
      try {
        let img = `http://localhost:3000/app`;
        if (category && category !== 'All') {
          img += `?category=${category}`;
        }

        const fetchApps = await axios.get(img);
        
          setData(fetchApps.data);
          console.log(fetchApps.data);
          
      
      } catch (error) {
        console.log('Error fetching data:');
      }
    }

    fetchData();

   
  }, [category]);

  const searchdata = data.filter(
    (app) => app.name.toLowerCase().includes(globalSearchData.toLowerCase()));

  return (
    <div className='cards-container'>
      <div className='cards-section'>
        {searchdata.map((app) => (
          <div className="cards" key={app.id}>
            <img src={app.img} alt={app.name} width={180} height={180} />
            <p>{app.name}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Cards;
