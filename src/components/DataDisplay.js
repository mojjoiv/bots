import React, { useState, useEffect } from 'react';
import axios from 'axios';
import BotProfile from './BotProfile';
import Bot from './Bot';


const DataDisplay = ({ enlistBot }) => {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('/db.json');
        console.log('Response:', response);
        setData(response.data.bots);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);

  return (
    <div>
      <h2>Data from db.json:</h2>
       <div className="bot-collection">
        {data.map((bot) => (
          <BotProfile key={bot.id} bot={bot} enlistBot={enlistBot} />
        ))}
      </div>
    </div>
  );
};

export default DataDisplay;
