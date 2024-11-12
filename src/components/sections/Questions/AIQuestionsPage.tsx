import React, { useState } from 'react';
import AuthLogo from '../AuthLogo/AuthLogo';

const AIQuestionsPage: React.FC = () => {
  const [formData, setFormData] = useState({
    residence: '',
    genre: '',
    coachGender: '',
    musicType: '',
  });
  const [loading, setLoading] = useState(false);

  const isFormComplete = Object.values(formData).every((value) => value.trim() !== '');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!isFormComplete) return;

    setLoading(true);
    // Simulate API call
    setTimeout(() => {
      setLoading(false);
      alert('Form submitted successfully!');
    }, 2000);
  };

  return (
    <div className="flex flex-col md:flex-row items-center justify-center bg-gray-900 text-white">
      <div className="w-full lg:h-screen md:w-1/3 flex flex-col items-center justify-center text-center bg-[#37345C] p-8">
        <div className="text-3xl font-bold mb-4"><AuthLogo /></div>
        <h2 className="text-xl font-semibold">Personalized feed for user experience</h2>
        <p className="mt-4">Answer the questions and our AI will recommend you coaches according to your preference.</p>
      </div>
      <form
        onSubmit={handleSubmit}
        className="w-full lg:h-screen bg-[#23213A] p-8 flex flex-col justify-center space-y-6"
      >
        <label className="block">
          <span>1. Where do you reside?</span>
          <input
            type="text"
            name="residence"
            value={formData.residence}
            onChange={handleChange}
            className="mt-1 block w-full bg-gray-100 border border-gray-600 rounded-md p-2 text-black"
            required
          />
        </label>

        <label className="block">
          <span>2. What is your category or genre of music?</span>
          <input
            type="text"
            name="genre"
            value={formData.genre}
            onChange={handleChange}
            className="mt-1 block w-full bg-gray-100 border border-gray-600 rounded-md p-2 text-black"
            required
          />
        </label>

        <label className="block">
          <span>3. What gender of coach do you prefer?</span>
          <input
            type="text"
            name="coachGender"
            value={formData.coachGender}
            onChange={handleChange}
            className="mt-1 block w-full bg-gray-100 border border-gray-600 rounded-md p-2 text-black"
            required
          />
        </label>
        <button
          type="submit"
          className={`w-full py-3 rounded-md text-white font-semibold ${isFormComplete ? 'bg-[#37345C]' : 'bg-gray-500'} hover:bg-[#C4A2FF] transition-colors`}
          disabled={!isFormComplete}
        >
          {loading ? (
            <svg
              className="animate-spin h-5 w-5 mx-auto text-white"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
            >
              <circle
                className="opacity-25"
                cx="12"
                cy="12"
                r="10"
                stroke="currentColor"
                strokeWidth="4"
              ></circle>
              <path
                className="opacity-75"
                fill="currentColor"
                d="M4 12a8 8 0 018-8v4l2-2-2-2a8 8 0 100 16l-2-2 2-2v4a8 8 0 01-8-8z"
              ></path>
            </svg>
          ) : (
            'Submit'
          )}
        </button>
      </form>
    </div>
  );
};

export default AIQuestionsPage;
