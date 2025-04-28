import React from 'react';
import Button from '../components/Button';
import { useNavigate } from 'react-router-dom';

const Welcome = () => {
  const navigate = useNavigate();

  return (
    <div className="flex flex-col justify-between h-full p-6">
      <div className="flex-grow"></div>
      <div>
        <h1 className="text-2xl font-bold mb-2">Welcome to PopX</h1>
        <p className="text-gray-500 mb-6">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        
        <div className="space-y-3">
          <Button 
            text="Create Account" 
            onClick={() => navigate('/register')}
          />
          <Button 
            text="Already Registered? Login" 
            variant="secondary"
            onClick={() => navigate('/login')} 
          />
        </div>
      </div>
    </div>
  );
};

export default Welcome;