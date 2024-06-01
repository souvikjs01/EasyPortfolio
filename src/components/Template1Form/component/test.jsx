import React, { useState } from 'react';

const DynamicInputForm = () => {
  const [inputs, setInputs] = useState(['']); // Initialize with one input field

  const handleInputChange = (index, event) => {
    const newInputs = [...inputs];
    newInputs[index] = event.target.value;
    setInputs(newInputs);
  };

  const handleAddInput = () => {
    setInputs([...inputs, '']);
  };

  const handleRemoveInput = (index) => {
    const newInputs = [...inputs];
    newInputs.splice(index, 1);
    setInputs(newInputs);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log('Submitted values:', inputs);
    // Here you can handle the submission, e.g., send the data to an API or update state elsewhere
  };

  return (
    <form onSubmit={handleSubmit}>
      {inputs.map((input, index) => (
        <div key={index}>
          <input
            type="text"
            value={input}
            onChange={(event) => handleInputChange(index, event)}
          />
          <button type="button" onClick={() => handleRemoveInput(index)}>
            Remove
          </button>
        </div>
      ))}
      <button type="button" onClick={handleAddInput}>
        Add Input
      </button>
      <button type="submit">Submit</button>
    </form>
  );
};

export default DynamicInputForm;
