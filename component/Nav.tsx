"use client";

import { useState } from "react";
import Modal from "./modal";

import { IoChevronBackOutline } from "react-icons/io5";

export default function Nav() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  return (
    <nav className="flex flex-row justify-between px-10 py-2 border-b-[0.5px] border-gray-400 ">
      <div className="flex gap-2 justify-between items-center">
        <div className="p-2 border-gray-100 border-[0.5px] rounded-full bg-gray-100 hover:bg-gray-200 cursor-pointer">
          <IoChevronBackOutline size={20} />
        </div>

        <p className="text-blue-700 ">Belmont North, NSW 2280</p>
      </div>
      <div className="animate-pulse  cursor-pointer" onClick={() => setIsModalOpen(true)}>
        Demo Explanation
      </div>
      <Modal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} title="Demo Explanation">
        <div className="flex flex-col gap-4">
          <p>API Interface Project</p>
          <div>
            <h2 className="font-semibold">Objective:</h2>
            <p>To create an interactive web dashboard that fetches, displays, and visualizes API data in a user-friendly and meaningful way. The goal is to transform complex data into an accessible and self-explanatory interface.</p>
          </div>
          <div>
            <h2 className="font-semibold">Technologies Used:</h2>
            Framework: React.js (functional components, hooks) Styling: Tailwind CSS for responsive, modern UI State Management: React useState and useEffect API Integration: Fetch API to consume REST endpoints from the provided sandbox Deployment: Prepared for deployment (e.g., Vercel)
          </div>

          <div>
            <h2 className="font-semibold">Key Features Implemented:</h2>
            Data Fetching: Fetches live data from the API sandbox and handles loading and error states. Responsive UI: Cards display data in a clean, organized grid layout that works across desktop and mobile. User Interaction: Includes a reload button to refresh data, demonstrating dynamic updates. Clarity & UX: Prioritised readability and simplicity, turning complex API responses into digestible information. Scalability: Component-based design enables easy expansion with charts, filters, or additional endpoints.{" "}
          </div>

          <div>
            <div>
              <h2 className="font-semibold">Optional Enhancements (Future Work):</h2>
              <p>Add search/filtering and pagination for larger datasets. Integrate charts/graphs for visual analysis. Implement dark mode toggle for accessibility. Deploy the dashboard and connect it directly to your sandbox environment.</p>
            </div>
          </div>
        </div>
      </Modal>
    </nav>
  );
}
