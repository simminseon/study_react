import React, { useState } from 'react';

function Form() {
    const [textName, setTextName] = useState('');

    

    const handleChange = (e) => {
        setTextName(e.target.value);
    }

    const handleSubmit = (e) => {
        alert('A name was submitted: ' + textName);
        e.preventDefault();
    }

    return (
        <form onSubmit={handleSubmit}>
            <label>
                Name:
                <input value={textName} onChange={handleChange} />
            </label>
            <input type="submit" value="Submit" />
        </form>
    );
}

export default Form;