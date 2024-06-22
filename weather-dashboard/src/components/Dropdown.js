import React from 'react';

const Dropdown = ({ options, selectedOption, onChange }) => (
    <select value={selectedOption} onChange={e => onChange(e.target.value)}>
        {options.map(option => (
            <option key={option} value={option}>{option}</option>
        ))}
    </select>
);

export default Dropdown;
