import React, { useState } from 'react';

function PaintTool() {
  const [form, setForm] = useState({ room: '', mood: '', lighting: '' });
  const [color, setColor] = useState('');

  const handleChange = (e) => {
    setForm({...form, [e.target.name]: e.target.value});
  };

  const getColor = () => {
    if (form.room === 'Living Room' && form.mood === 'Calm') setColor('Beige');
    else if (form.mood === 'Energizing') setColor('Sunset Orange');
    else if (form.lighting === 'Low-Light') setColor('Soft Yellow');
    else setColor('White');
  };

  return (
    <section className="page">
      <h2>🎨 Paint Color Recommender</h2>
      <select name="room" onChange={handleChange} defaultValue="">
        <option value="" disabled>Select Room</option>
        <option>Living Room</option>
        <option>Bedroom</option>
        <option>Kitchen</option>
      </select>
      <select name="mood" onChange={handleChange} defaultValue="">
        <option value="" disabled>Select Mood</option>
        <option>Calm</option>
        <option>Energizing</option>
        <option>Modern</option>
      </select>
      <select name="lighting" onChange={handleChange} defaultValue="">
        <option value="" disabled>Select Lighting</option>
        <option>Natural</option>
        <option>Low-Light</option>
      </select>
      <button onClick={getColor}>Get Suggestion</button>
      {color && <p><strong>Suggested Color:</strong> {color}</p>}
    </section>
  );
}

export default PaintTool;
