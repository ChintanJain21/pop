import React, { useState } from 'react';
import Button from '../components/Button';
import Input from '../components/Input';
import { useNavigate } from 'react-router-dom';

const Login = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    email: '',
    password: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    navigate('/account');
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 px-4">
      <div className="max-w-md w-full bg-white p-8 rounded-xl shadow-md">
        <h1 className="text-3xl font-extrabold text-gray-800 mb-2 text-center">Sign in to PopX</h1>
        <p className="text-sm text-gray-500 mb-6 text-center">Welcome back! Please enter your credentials.</p>

        <form onSubmit={handleSubmit} className="space-y-5">
          <Input
            label="Email Address"
            type="email"
            placeholder="Enter your email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
          />
          <Input
            label="Password"
            type="password"
            placeholder="Enter your password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            required
          />

          <Button
            text="Login"
            type="submit"
            variant={formData.email && formData.password ? 'primary' : 'secondary'}
            disabled={!formData.email || !formData.password}
          />
        </form>

        <p className="text-xs text-gray-400 mt-6 text-center">
          Forgot your password? <span className="text-blue-500 hover:underline cursor-pointer">Reset here</span>
        </p>
      </div>
    </div>
  );
};

export default Login;
