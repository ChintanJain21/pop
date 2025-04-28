import React, { useState } from 'react';
import Button from '../components/Button';
import Input from '../components/Input';
import { useNavigate } from 'react-router-dom';

const Register = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    fullName: '',
    phone: '',
    email: '',
    password: '',
    company: '',
    isAgency: true
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    navigate('/login');
  };
  

  const handleRadioChange = (value) => {
    setFormData(prev => ({ ...prev, isAgency: value }));
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 px-4">
      <div className="max-w-md w-full bg-white p-8 rounded-xl shadow-md">
        <h1 className="text-3xl font-extrabold text-gray-800 mb-6 text-center">Create your PopX account</h1>

        <form onSubmit={handleSubmit} className="space-y-5">
          <Input
            label="Full Name"
            placeholder="Enter your full name"
            name="fullName"
            value={formData.fullName}
            onChange={handleChange}
            required
          />
          <Input
            label="Phone Number"
            type="tel"
            placeholder="Enter your phone number"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            required
          />
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
            placeholder="Create a password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            required
          />
          <Input
            label="Company Name (optional)"
            placeholder="Enter your company name"
            name="company"
            value={formData.company}
            onChange={handleChange}
          />

          <div className="mb-6">
            <p className="text-purple-600 text-sm mb-2">
              Are you an Agency?<span className="text-red-500 ml-1">*</span>
            </p>
            <div className="flex space-x-6">
              <label className="flex items-center space-x-2 cursor-pointer">
                <div className={`w-5 h-5 rounded-full border flex items-center justify-center ${formData.isAgency ? 'border-purple-600' : 'border-gray-300'}`}>
                  {formData.isAgency && <div className="w-3 h-3 rounded-full bg-purple-600"></div>}
                </div>
                <input
                  type="radio"
                  name="isAgency"
                  checked={formData.isAgency}
                  onChange={() => handleRadioChange(true)}
                  className="hidden"
                />
                <span>Yes</span>
              </label>
              <label className="flex items-center space-x-2 cursor-pointer">
                <div className={`w-5 h-5 rounded-full border flex items-center justify-center ${!formData.isAgency ? 'border-purple-600' : 'border-gray-300'}`}>
                  {!formData.isAgency && <div className="w-3 h-3 rounded-full bg-purple-600"></div>}
                </div>
                <input
                  type="radio"
                  name="isAgency"
                  checked={!formData.isAgency}
                  onChange={() => handleRadioChange(false)}
                  className="hidden"
                />
                <span>No</span>
              </label>
            </div>
          </div>

          <Button
            text="Create Account"
            type="submit"
            variant={formData.fullName && formData.phone && formData.email && formData.password ? 'primary' : 'secondary'}
            disabled={!formData.fullName || !formData.phone || !formData.email || !formData.password}
          />
        </form>
      </div>
    </div>
  );
};

export default Register;
