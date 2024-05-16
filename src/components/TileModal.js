// src/components/TileModal.js
import React, { useState } from 'react';

function TileModal({ showModal, handleClose, handleSave }) {
  const [formData, setFormData] = useState({
    field1: '',
    field2: '',
    field3: '',
    field4: ''
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = () => {
    handleSave(formData);
    setFormData({ field1: '', field2: '', field3: '', field4: '' });
    handleClose();
  };

  if (!showModal) return null;

  return (
    <div className="modal">
      <div className="modal-content">
        <h2>Fill Data</h2>
        <form>
          <label>
            Field 1:
            <input type="text" name="field1" value={formData.field1} onChange={handleInputChange} />
          </label>
          <label>
            Field 2:
            <input type="text" name="field2" value={formData.field2} onChange={handleInputChange} />
          </label>
          <label>
            Field 3:
            <input type="text" name="field3" value={formData.field3} onChange={handleInputChange} />
          </label>
          <label>
            Field 4:
            <input type="text" name="field4" value={formData.field4} onChange={handleInputChange} />
          </label>
        </form>
        <button className="modal-btn" onClick={handleSubmit}>Add</button>
        <button className="modal-btn" onClick={handleClose}>Cancel</button>
      </div>
    </div>
  );
}

export default TileModal;
