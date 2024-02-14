// Bot.js
import React from 'react';

const Bot = ({ bot, enlistBot }) => {
  const handleEnlistClick = () => {
    enlistBot(bot);
  };

  return (
    <li>
      {bot.name}{' '}
      <button onClick={handleEnlistClick}>Enlist</button>
    </li>
  );
};

export default Bot;
