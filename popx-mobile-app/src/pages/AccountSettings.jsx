import React from 'react';
import userImage  from '../assets/user.webp'; 
const AccountSettings = () => {
  return (
    <div className="p-6">
      <h1 className="text-xl font-semibold mb-4">Account Settings</h1>
      
      <div className="flex items-center mb-4">
        <div className="relative mr-4">
          <div className="w-16 h-16 rounded-full overflow-hidden bg-gray-200">
            <img 
              src={userImage}
              alt="Profile" 
              className="w-full h-full object-cover"
            />
          </div>
          <div className="absolute -bottom-1 -right-1 bg-purple-600 text-white rounded-full w-6 h-6 flex items-center justify-center text-xs">
            <span>+</span>
          </div>
        </div>
        <div>
          <h2 className="font-medium">Marry Doe</h2>
          <p className="text-sm text-gray-600">Marrys@Gmail.Com</p>
        </div>
      </div>
      
      <p className="text-gray-500 text-sm">
        Lorem Ipsum Dolor Sit Amet, Constetuer Sadipscing Elitr, Sed Diam Nonumy Eirmod Tempor Invidunt Ut Labore Et Dolore Magna Aliquyam Erat, Sed Diam
      </p>
    </div>
  );
};

export default AccountSettings;