import React, { useState } from 'react';

interface FormData {
  location: string;
  category: string;
  gender: string;
  musicType: string;
}

const AIQuestionsPage: React.FC = () => {
  const [formData, setFormData] = useState<FormData>({
    location: '',
    category: '',
    gender: '',
    musicType: '',
  });
  const [isLoading, setIsLoading] = useState(false);

  const handleInputChange = (
    event: React.ChangeEvent<HTMLInputElement>
  ): void => {
    const { name, value } = event.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>): void => {
    event.preventDefault();
    setIsLoading(true);

    // Simulate loading process
    setTimeout(() => {
      setIsLoading(false);
      console.log('Form data:', formData);
    }, 2000);
  };

  return (
    <div className="flex h-screen bg-[#1e1e2c] p-4">
      <div className="m-auto w-full max-w-md p-6 bg-[#2c2c3d] rounded-lg shadow-md">
        <h1 className="text-2xl font-bold mb-6 text-white">AfroCoach Personalization AI</h1>
        <p className="mb-6 text-white">
          Personalized feed for user experience. Answer the questions and the AI
          will recommend you coaches with your refence.
        </p>
        {isLoading ? (
          <div className="flex justify-center items-center h-48">
            <div className="animate-spin rounded-full h-10 w-10 border-b-2 border-white"></div>
          </div>
        ) : (
          <form onSubmit={handleSubmit}>
            <div className="mb-4">
              <label
                htmlFor="location"
                className="block mb-2 text-sm font-medium text-white"
              >
                Where do you reside?
              </label>
              <input
                type="text"
                id="location"
                name="location"
                value={formData.location}
                onChange={handleInputChange}
                className="bg-[#3d3d4e] border border-[#3d3d4e] text-white text-sm rounded-lg focus:ring-purple-500 focus:border-purple-500 block w-full p-2.5"
                required
              />
            </div>
            <div className="mb-4">
              <label
                htmlFor="category"
                className="block mb-2 text-sm font-medium text-white"
              >
                What is your category or genre of music?
              </label>
              <input
                type="text"
                id="category"
                name="category"
                value={formData.category}
                onChange={handleInputChange}
                className="bg-[#3d3d4e] border border-[#3d3d4e] text-white text-sm rounded-lg focus:ring-purple-500 focus:border-purple-500 block w-full p-2.5"
                required
              />
            </div>
            <div className="mb-4">
              <label
                htmlFor="gender"
                className="block mb-2 text-sm font-medium text-white"
              >
                What is your preferred coach gender?
              </label>
              <input
                type="text"
                id="gender"
                name="gender"
                value={formData.gender}
                onChange={handleInputChange}
                className="bg-[#3d3d4e] border border-[#3d3d4e] text-white text-sm rounded-lg focus:ring-purple-500 focus:border-purple-500 block w-full p-2.5"
                required
              />
            </div>
            <button
              type="submit"
              className="text-white bg-purple-700 hover:bg-purple-800 focus:ring-4 focus:ring-purple-300 font-medium rounded-lg text-sm px-5 py-2.5 mb-2 focus:outline-none"
            >
              Submit
            </button>
          </form>
        )}
      </div>
    </div>
  );
};

export default AIQuestionsPage;