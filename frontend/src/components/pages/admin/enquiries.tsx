import React, { useState } from "react";

interface Inquiry {
  id: number;
  name: string;
  subject: string;
  daysAgo: string;
  avatar: string;
  phone: string;
  land: string;
  message: string;
}

const inquiriesData: Inquiry[] = [
  {
    id: 1,
    name: "Ajay",
    subject: "Inquiry about land",
    daysAgo: "2d",
    avatar: "/new_user.webp",
    phone: "+1-555-123-4567",
    land: "Lot 12, Block 3",
    message:
      "Hello, I am interested in the land listed on your platform. Could you provide more details about the property?",
  },
  {
    id: 2,
    name: "Jasmin",
    subject: "Land purchase",
    daysAgo: "3d",
    avatar: "/new_user.webp",
    phone: "+1-555-653-3422",
    land: "Plot 22, Anna Nagar",
    message: "Is this land still available? Please confirm.",
  },
  {
    id: 3,
    name: "Rama",
    subject: "Land details",
    daysAgo: "4d",
    avatar: "/new_user.webp",
    phone: "+1-555-907-1111",
    land: "Survey No 14/7",
    message: "Can you share the exact survey boundaries?",
  },
  {
    id: 4,
    name: "Nila",
    subject: "Land availability",
    daysAgo: "5d",
    avatar: "/new_user.webp",
    phone: "+1-555-778-0981",
    land: "Near SIPCOT",
    message: "Is this land available for commercial use?",
  },
  {
    id: 5,
    name: "Lucas Foster",
    subject: "Land visit",
    daysAgo: "6d",
    avatar: "/new_user.webp",
    phone: "+1-555-998-2123",
    land: "Plot near Airport Road",
    message: "When can I schedule a land visit?",
  },
];

const Inquiries: React.FC = () => {
  const [selected, setSelected] = useState<Inquiry>(inquiriesData[0]);

  return (
    <div className="min-h-screen bg-[#f3f8f7] flex">
      {/* LEFT PANEL — Messages List */}
      <div className="w-[28%] border-r bg-white shadow-sm h-screen p-6">
        {/* Back button */}
        <button className="flex items-center gap-2 text-gray-600 mb-4">
          <span className="text-xl">←</span> Back
        </button>

        {/* Search */}
        <div className="flex items-center gap-2 bg-[#f1f7f6] rounded-full px-4 py-2 mb-6">
          <svg
            className="w-5 h-5 text-gray-500"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M21 21l-4.35-4.35M11 19a8 8 0 100-16 8 8 0 000 16z"
            />
          </svg>
          <input
            type="text"
            placeholder="Search messages"
            className="bg-transparent flex-1 outline-none text-gray-700"
          />
        </div>

        {/* Tabs */}
        <div className="flex gap-3 mb-4">
          <button className="px-4 py-1 bg-black text-white rounded-full">
            Unread
          </button>
          <button className="px-4 py-1 bg-gray-100 text-gray-700 rounded-full">
            All
          </button>
        </div>

        {/* User List */}
        <div className="space-y-4">
          {inquiriesData.map((item) => (
            <div
              key={item.id}
              onClick={() => setSelected(item)}
              className={`flex items-center gap-3 p-3 rounded-xl cursor-pointer transition 
              ${
                selected.id === item.id
                  ? "bg-[#e0f5f1]"
                  : "hover:bg-gray-100"
              }`}
            >
              <img
                src={item.avatar}
                className="w-12 h-12 rounded-full object-cover"
              />
              <div className="flex-1">
                <p className="font-semibold">{item.name}</p>
                <p className="text-sm text-gray-600">{item.subject}</p>
              </div>
              <p className="text-xs text-gray-500">{item.daysAgo}</p>
            </div>
          ))}
        </div>
      </div>

      {/* RIGHT PANEL — Chat View */}
      <div className="flex-1 p-12">
        <h1 className="text-3xl font-bold mb-8">
          Message from {selected.name}
        </h1>

        <div className="grid grid-cols-2 gap-8 border-b pb-6">
          <div>
            <h3 className="text-gray-600">Name</h3>
            <p className="font-semibold">{selected.name}</p>
          </div>
          <div>
            <h3 className="text-gray-600">Phone Number</h3>
            <p className="font-semibold">{selected.phone}</p>
          </div>
          <div>
            <h3 className="text-gray-600">Interested Land</h3>
            <p className="font-semibold">{selected.land}</p>
          </div>
        </div>

        {/* MESSAGE BOX */}
        <div className="mt-8 flex gap-4 items-start">
          <img
            src={selected.avatar}
            className="w-12 h-12 rounded-full object-cover"
          />

          <div className="bg-white border rounded-xl p-5 shadow-sm max-w-2xl">
            <p className="text-gray-800 leading-relaxed">{selected.message}</p>
          </div>
        </div>

        {/* ACTION BUTTONS */}
        <div className="mt-8 flex gap-4">
          <button className="px-6 py-2 bg-red-100 text-red-500 rounded-full hover:bg-red-200">
            Delete
          </button>
          <button className="px-6 py-2 bg-emerald-100 text-emerald-700 rounded-full hover:bg-emerald-200">
            Mark as Read
          </button>
        </div>
      </div>
    </div>
  );
};

export default Inquiries;
