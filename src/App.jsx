// src/App.jsx

import React, { useState } from 'react';
import './App.css'; // Include your CSS file for styling

const initialZombieFighters = [
  {
    id: 1,
    name: 'Survivor',
    price: 12,
    strength: 6,
    agility: 4,
    img: 'https://pages.git.generalassemb.ly/modular-curriculum-all-courses/react-state-management-lab/assets/0c2d6b.png',
  },
  {
    id: 2,
    name: 'Scavenger',
    price: 10,
    strength: 5,
    agility: 5,
    img: 'https://pages.git.generalassemb.ly/modular-curriculum-all-courses/react-state-management-lab/assets/033a16.png',
  },
  {
    id: 3,
    name: 'Shadow',
    price: 18,
    strength: 7,
    agility: 8,
    img: 'https://pages.git.generalassemb.ly/modular-curriculum-all-courses/react-state-management-lab/assets/262c36.png',
  },
  {
    id: 4,
    name: 'Tracker',
    price: 14,
    strength: 7,
    agility: 6,
    img: 'https://pages.git.generalassemb.ly/modular-curriculum-all-courses/react-state-management-lab/assets/3c1e70.png',
  },
  {
    id: 5,
    name: 'Sharpshooter',
    price: 20,
    strength: 6,
    agility: 8,
    img: 'https://pages.git.generalassemb.ly/modular-curriculum-all-courses/react-state-management-lab/assets/4b2900.png',
  },
  {
    id: 6,
    name: 'Medic',
    price: 15,
    strength: 5,
    agility: 7,
    img: 'https://pages.git.generalassemb.ly/modular-curriculum-all-courses/react-state-management-lab/assets/5a1e02.png',
  },
  {
    id: 7,
    name: 'Engineer',
    price: 16,
    strength: 6,
    agility: 5,
    img: 'https://pages.git.generalassemb.ly/modular-curriculum-all-courses/react-state-management-lab/assets/5e103e.png',
  },
  {
    id: 8,
    name: 'Brawler',
    price: 11,
    strength: 8,
    agility: 3,
    img: 'https://pages.git.generalassemb.ly/modular-curriculum-all-courses/react-state-management-lab/assets/67060c.png',
  },
  {
    id: 9,
    name: 'Infiltrator',
    price: 17,
    strength: 5,
    agility: 9,
    img: 'https://pages.git.generalassemb.ly/modular-curriculum-all-courses/react-state-management-lab/assets/ac3220.png',
  },
  {
    id: 10,
    name: 'Leader',
    price: 22,
    strength: 7,
    agility: 6,
    img: 'https://pages.git.generalassemb.ly/modular-curriculum-all-courses/react-state-management-lab/assets/e41f26.png',
  },
];

const App = () => {
  const [team, setTeam] = useState([]);
  const [money, setMoney] = useState(100);
  const [zombieFighters, setZombieFighters] = useState(initialZombieFighters);

  const handleAddFighter = (fighter) => {
    if (money >= fighter.price) {
      setTeam([...team, fighter]);
      setMoney(money - fighter.price);
      const updatedFighters = zombieFighters.filter((f) => f.id !== fighter.id);
      setZombieFighters(updatedFighters);
    } else {
      console.log("Not enough money");
    }
  };

  const handleRemoveFighter = (fighter) => {
    // Remove the fighter from the team
    const updatedTeam = team.filter((member) => member.id !== fighter.id);
    // Add the removed fighter back to zombieFighters
    setZombieFighters([...zombieFighters, fighter]);
    // Refund the price to the money state
    setMoney(money + fighter.price);
    // Update the team state
    setTeam(updatedTeam);
  };

  // Calculate total strength and agility
  const totalStrength = team.reduce((acc, member) => acc + member.strength, 0);
  const totalAgility = team.reduce((acc, member) => acc + member.agility, 0);

  return (
    <div>
      <h1>Zombies Apocalypse Team Builder</h1>
      <h2>Available Money: ${money}</h2>

      <h3>Your Team</h3>
      {team.length === 0 ? (
        <p>Pick some team members!</p>
      ) : (
        <ul>
          {team.map(member => (
            <li key={member.id}>
              <img src={member.img} alt={member.name} width="50" />
              <span>{member.name} - Cost: ${member.price}</span>
              <button onClick={() => handleRemoveFighter(member)}>Remove</button>
            </li>
          ))}
        </ul>
      )}
      <h3>Total Strength: {totalStrength}</h3>
      <h3>Total Agility: {totalAgility}</h3>

      <h3>Available Zombie Fighters</h3>
      <ul>
        {zombieFighters.map(fighter => (
          <li key={fighter.id}>
            <img src={fighter.img} alt={fighter.name} width="50" />
            <span>{fighter.name} - Cost: ${fighter.price} | Strength: {fighter.strength} | Agility: {fighter.agility}</span>
            <button onClick={() => handleAddFighter(fighter)}>Add to Team</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default App;