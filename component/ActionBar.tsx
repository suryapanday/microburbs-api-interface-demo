"use client";
import { useState } from "react";
import { CiFilter } from "react-icons/ci";
import Modal from "./modal";

export default function ActionBar() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <>
      <div className="w-full flex justify-between  my-5">
        <div></div>
        <div>
          <CiFilter size={24} className="cursor-pointer" onClick={() => setIsModalOpen(true)} />
        </div>
      </div>

      {/* Filter Modal */}
      <Modal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} title="Filter Properties">
        <div className="flex flex-col gap-4">
          <div>
            <label className="block text-sm font-medium text-gray-700">Property Type</label>
            <select className="mt-1 block w-full  border-[0.5px] border-gray-400 rounded-sm p-2">
              <option>All</option>
              <option>House</option>
              <option>Unit</option>
              <option>Apartment</option>
            </select>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700">Bedrooms</label>
            <select className="mt-1 block w-full  border-[0.5px] border-gray-400 rounded-sm p-2">
              <option>Any</option>
              <option>1+</option>
              <option>2+</option>
              <option>3+</option>
              <option>4+</option>
            </select>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700">Bathrooms</label>
            <select className="mt-1 block w-full  border-[0.5px] border-gray-400 rounded-sm p-2">
              <option>Any</option>
              <option>1+</option>
              <option>2+</option>
              <option>3+</option>
            </select>
          </div>

          <button className="mt-4 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition" onClick={() => setIsModalOpen(false)}>
            Apply Filters
          </button>
        </div>
      </Modal>
    </>
  );
}
