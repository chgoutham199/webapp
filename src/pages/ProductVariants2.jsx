import React from 'react';
import { useState } from 'react';
export default function ProductVariants2() {
  const [selectedVariant, setSelectedVariant] = useState('i3-12700HX');

  const variants = [
    { id: 'i3-12700HX', label: 'i3-12700HX' },
    { id: 'i5-12800HX', label: 'i5-12800HX' },
    { id: 'i7-12700HX', label: 'i7-12700HX' }
  ];

  return (
    <div className="bg-black text-white min-h-screen flex justify-center items-center">
      <div className='flex'>
        <aside className="w-[336px] h-[872px] bg-gray-900 p-4 space-y-4 overflow-y-auto">
          <div className="flex justify-between">
            <div>
              <h2 className="text-sm text-gray-400 mb-1">Catalog</h2>
              <p className="font-semibold text-lg text-orange-500">Laptop</p>
            </div>
            <div>
              <h2 className="text-sm text-gray-400 mb-1">Sub-Catalog</h2>
              <p className="font-bold text-lg text-orange-500">Gaming</p>
            </div>
          </div>
          <div>
            <h2 className="text-sm text-gray-400 mt-6">Product data capability 80%</h2>
            <div className="w-full bg-gray-700 rounded-full h-2.5 mb-4">
              <div className="bg-orange-500 h-2.5 rounded-full" style={{ width: "80%" }}></div>
            </div>
          </div>
          <div className="grid grid-cols-2 gap-4">
            <h2 className="text-sm text-gray-400 col-span-2">MSI Titan GT76</h2>
            <div className="col-span-1">
              <p className="text-sm">Device category:</p>
              <p className="text-sm font-semibold">Gaming Laptop</p>
            </div>
            <div className="col-span-1">
              <p className="text-sm">Form factor:</p>
              <p className="text-sm font-semibold">Notebook</p>
            </div>
            <div className="col-span-1">
              <p className="text-sm">Manufacturer:</p>
              <p className="text-sm font-semibold">Micro-star International</p>
            </div>
            <div className="col-span-1">
              <p className="text-sm">Manufactured:</p>
              <p className="text-sm font-semibold">China</p>
            </div>
          </div>
          {/* Adding Variant Selection */}
          <div className="my-4">
            <h2 className="text-sm text-gray-400">Variants</h2>
            {variants.map((variant) => (
              <button
                key={variant.id}
                onClick={() => setSelectedVariant(variant.id)}
                className={`w-full text-left p-2 my-1 ${selectedVariant === variant.id ? 'bg-orange-500' : 'bg-gray-800'} rounded-md`}
              >
                {variant.label}
              </button>
            ))}
          </div>
          {/* Adding Product URL paste button */}
          <div className="my-4">
            <button className="bg-orange-500 w-full py-2 rounded-md text-sm">
              Paste URL
            </button>
          </div>
        </aside>
      </div>
    </div>
  );
}