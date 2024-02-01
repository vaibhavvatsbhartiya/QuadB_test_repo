import React, { useState } from 'react';
import { useParams } from 'react-router-dom';

const ReservationForm = (props) => {
  const { name } = useParams();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    numberOfTickets: 0
  });

  const handleChange = e => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // const handleSubmit = e => {
  //   e.preventDefault();
  //   alert(`Your tickets for ${decodeURIComponent(name)} are successfully reserved!`);
  // };

  const handleSubmit = e => {
    e.preventDefault();
    // Validate form data
    if (formData.name && formData.email && formData.numberOfTickets >= 1 && (formData.name || formData.email)) {
      // Perform submit action
      alert(`Your tickets for ${decodeURIComponent(name)} are successfully reserved!\n\nDetails:\nName: ${formData.name}\nEmail: ${formData.email}\nNumber of Tickets: ${formData.numberOfTickets}\nRating: ${formData.rating}\nReview: ${formData.review}`);
    } else {
      alert('Please fill in all required fields and ensure at least one of the name or email or Tickets > 0 fields is filled in.');
    }
  };
  
  return (
    <div className="container mx-auto py-8">
      <h2 className="text-2xl font-semibold text-gray-800 mb-4">Reservation Form for ${decodeURIComponent(name)}  </h2>
      {/* {decodeURIComponent(name)} */}
      <form onSubmit={handleSubmit} className="max-w-md mx-auto">
        <div className="mb-4">
          <label htmlFor="name" className="block text-gray-700 text-sm font-bold mb-2">Name:</label>
          <input type="text" name="name" id="name" value={formData.name} onChange={handleChange} className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:border-blue-500" />
        </div>
        <div className="mb-4">
          <label htmlFor="email" className="block text-gray-700 text-sm font-bold mb-2">Email:</label>
          <input type="email" name="email" id="email" value={formData.email} onChange={handleChange} className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:border-blue-500" />
        </div>
        <div className="mb-4">
          <label htmlFor="numberOfTickets" className="block text-gray-700 text-sm font-bold mb-2">Number of Tickets:</label>
          <input type="number" name="numberOfTickets" id="numberOfTickets" value={formData.numberOfTickets} onChange={handleChange} className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:border-blue-500" />
        </div>
        <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">Submit</button>
      </form>
    </div>
  );
};

export default ReservationForm;
