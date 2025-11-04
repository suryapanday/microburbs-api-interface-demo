"use client";
import { useState } from "react";
import { IoBedOutline } from "react-icons/io5";
import { LuBath } from "react-icons/lu";
import { IoCarSportOutline } from "react-icons/io5";
import Modal from "./modal";

type Property = {
  address: { sa1: string; sal: string; state: string; street: string };
  area_level: string;
  area_name: string;
  attributes: {
    bathrooms: number | null;
    bedrooms: number | null;
    building_size: string | null;
    description: string;
    garage_spaces: number | null;
    land_size: string | null;
  };
  coordinates: { latitude: number; longitude: number };
  gnaf_pid: string;
  listing_date: string;
  price: number;
  property_type: string;
};

type CardProps = { property: Property };

export default function Card({ property }: CardProps) {
  const [isModalOpen, setIsModalOpen] = useState(false);
  if (!property) return null;
  const { attributes, area_name, price, property_type, listing_date } = property;

  return (
    <>
      {/* Card */}
      <div className="flex flex-col gap-4 border-[0.5px] border-gray-400 p-4 rounded-md  hover:shadow-lg transition cursor-pointer hover:bg-gray-100 " onClick={() => setIsModalOpen(true)}>
        <div className="font-medium text-2xl">{area_name}</div>
        <div className="flex justify-between items-center">
          <button
            className="border-[0.5px] border-gray-400 p-1 rounded-sm text-sm font-semibold text-red-500 
             transition transform duration-200 ease-in-out
             hover:bg-red-500 hover:text-white hover:scale-105"
          >
            For Sale
          </button>{" "}
          <p className="text-xl font-semibold">${price.toLocaleString()}</p>
        </div>

        {/* Attributes */}
        <div className="flex gap-5 mt-2 text-gray-500">
          <div className="flex items-center gap-2">
            <IoBedOutline size={20} />
            <p>{attributes?.bedrooms ?? "-"}</p>
          </div>
          <div className="flex items-center gap-2">
            <LuBath size={20} />
            <p>{attributes?.bathrooms ?? "-"}</p>
          </div>
          <div className="flex items-center gap-2">
            <IoCarSportOutline size={20} />
            <p>{attributes?.garage_spaces ?? "-"}</p>
          </div>
        </div>
      </div>

      {/* Modal */}
      <Modal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} title={area_name}>
        {attributes?.description ? <div dangerouslySetInnerHTML={{ __html: attributes.description.replace(/\n/g, "<br/>") }} /> : <p>No description available</p>}

        <div className="mt-4 text-sm text-gray-500">
          <p>Property type: {property_type}</p>
          <p>Listed on: {listing_date}</p>
          <p>Land size: {attributes?.land_size ?? "-"}</p>
          <p>Building size: {attributes?.building_size ?? "-"}</p>
        </div>
      </Modal>
    </>
  );
}
