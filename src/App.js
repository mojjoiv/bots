import React, { useState } from 'react';
import axios from 'axios';
import DataDisplay from './components/DataDisplay';
import YourBotArmy from './components/YourBotArmy';

function App() {

  const [enlistedBots, setEnlistedBots] = useState([]);

  const enlistBot = (bot) => {
    if (!enlistedBots.find((enlistedBot) => enlistedBot.id === bot.id)) {
      setEnlistedBots((prevEnlistedBots) => [...prevEnlistedBots, bot]);
    }
  };

  const releaseBot = (botId) => {
    setEnlistedBots((prevEnlistedBots) =>
      prevEnlistedBots.filter((bot) => bot.id !== botId)
    );
  };

  const dischargeBot = async (botId) => {
    try {
      // Send a DELETE request to the backend to remove the bot permanently
      await axios.delete(`/api/bots/${botId}`);
      // Release the bot from the frontend
      releaseBot(botId);
    } catch (error) {
      console.error('Error discharging bot:', error);
    }
  };
  return (
    <div className="App">
     <DataDisplay enlistBot={enlistBot}/>
     <YourBotArmy 
     enlistedBots={enlistedBots} 
     releaseBot={releaseBot} 
     dischargeBot={dischargeBot}
     />
    </div>
  );
}

export default App;
