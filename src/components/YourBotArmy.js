// YourBotArmy.js
import React from 'react';

const YourBotArmy = ({ enlistedBots, releaseBot, dischargeBot }) => {
    const handleReleaseClick = (bot) => {
        releaseBot(bot);
      };
    
      const handleDischargeClick = (bot) => {
        dischargeBot(bot);
      };
    
    return (
      <div>
        <h2>Your Bot Army</h2>
        <ul>
          {enlistedBots.map((bot) => (
            <li key={bot.id}>
                <img src={bot.avatar_url} alt={bot.name} />
              {bot.name}{' '}
              <button onClick={() => handleReleaseClick(bot.id)}>Release</button>{' '}
              <button onClick={() => handleDischargeClick(bot.id)}>Discharge</button>
            </li>
          ))}
        </ul>
      </div>
    );
  };

export default YourBotArmy;
