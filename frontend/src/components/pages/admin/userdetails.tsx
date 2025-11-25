import React from "react";
import { Link } from "react-router-dom";

const UserDetails: React.FC = () => {
  return (
    <div className="px-10 py-0 text-[#0b2e24]">
              {/* Breadcrumb */}
      <div className="mb-6">
        <Link
          to="/admin/users"
          className="inline-flex items-center text-emerald-600 hover:underline"
        >
          <svg className="h-4 w-4 mr-2" viewBox="0 0 24 24" fill="none" stroke="currentColor">
            <path strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
          </svg>
          Back to Users
        </Link>
      </div>


      {/* Title */}
      <h1 className="text-4xl font-semibold mb-10">
        User Details: Sophia Clark
      </h1>

      {/* Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-y-10 gap-x-16 w-full max-w-5xl">

        {/* Left Column */}
        <div className="space-y-10">
          <div>
            <p className="text-sm text-[#2e8a7a] mb-1">User ID</p>
            <p className="text-lg font-medium">#12345</p>
          </div>

          <div>
            <p className="text-sm text-[#2e8a7a] mb-1">Email</p>
            <p className="text-lg font-medium">sophia.clark@email.com</p>
          </div>

          <div>
            <p className="text-sm text-[#2e8a7a] mb-1">Date Joined</p>
            <p className="text-lg font-medium">	2023-01-15</p>
          </div>
        </div>

        {/* Right Column */}
        <div className="space-y-10">
          <div>
            <p className="text-sm text-[#2e8a7a] mb-1">Full Name</p>
            <p className="text-lg font-medium">Alex Bennett</p>
          </div>

          <div>
            <p className="text-sm text-[#2e8a7a] mb-1">Phone Number</p>
            <p className="text-lg font-medium">+1 (555) 123-4567</p>
          </div>

          <div>
            <p className="text-sm text-[#2e8a7a] mb-1">Last Login</p>
            <p className="text-lg font-medium">2024-02-29</p>
          </div>
        </div>
        {/* Delete Button */}
          <button className="w-40 py-3 rounded-full bg-[#00e0d3] text-[#063a33] font-semibold hover:bg-[#0ad6c9] transition-all">
            Delete User
          </button>

      </div>
    </div>
  );
};

export default UserDetails;
