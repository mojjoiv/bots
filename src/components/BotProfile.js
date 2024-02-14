// BotProfile.js
import React from 'react';

const BotProfile = ({ bot, onClick, enlistBot }) => {
    const handleEnlistClick = () => {
        enlistBot(bot);
      };
      
  return (
    <div key={bot.id} className="bot-profile" onClick={onClick}>
      <img src={bot.avatar_url} alt={bot.name} />
      <h3>{bot.name}</h3>
      <p>Health: {bot.health}</p>
      <p>Damage: {bot.damage}</p>
      <p>Armor: {bot.armor}</p>
      <p>Class: {bot.bot_class}</p>
      <p>Catchphrase: {bot.catchphrase}</p>
      <button onClick={handleEnlistClick}>Enlist</button>
    </div>
  );
};

export default BotProfile;
