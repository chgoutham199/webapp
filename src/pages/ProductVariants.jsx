import { Bold } from 'lucide-react';
import React, { useState } from 'react';
const initialVariants = [
  { id: 1, description: 'i3-12700HX (RTX 3050)', capabilities: 'Product Data Capability: Add Asset, Validate, Go Live', next: true },
  { id: 2, description: 'i5-12800HX (RTX 3060)', capabilities: 'Product Data Capability: Add Asset, Validate, Go Live', next: true },
  { id: 3, description: 'i7-12700HX (RTX 3060)', capabilities: 'Product Data Capability: Add Asset, Validate, Go Live', next: true },
  { id: 4, description: 'i7-12900HX (RTX 3070ti)', capabilities: 'Product Data Capability: Add Asset, Validate, Go Live', next: true },
  { id: 5, description: 'i9-12800HX (RTX 3080ti)', capabilities: 'Product Data Capability: Add Asset, Validate, Go Live', next: true }
];
const ProductVariants = () => {
  const [variants, setVariants] = useState(initialVariants);
  const addVariant = () => {
    const newVariant = { id: variants.length + 1, description: 'New Variant', capabilities: 'Custom', next: false };
    setVariants([...variants, newVariant]);
  };
  const rows = Math.ceil((variants.length + 1) / 3);
return (
    <div className="bg-black text-white min-h-screen flex">
      <div className="flex">
        <aside className="w-[336px] h-[872px] bg-gray-800 p-4 space-y-4 overflow-y-auto">
        <div className="flex justify-between gap-20">
        <div>
          <h2 className="text-sm text-gray-400 mb-1">Catalog</h2>
          <p className="font-semibold text-4x1 text-orange-500">Laptop</p>
        </div>
        <div>
          <h2 className="text-sm text-gray-400 mb-1">Sub-Catalog</h2>
          <p className="font-bold text-4x1 text-orange-500">Gaming</p>
        </div>
      </div>
          <div>
            <h2 className="text-sm text-gray-400 mt-64">Product data capability 80%</h2>
            <div className="w-full bg-gray-700 rounded-full h-2.5">
              <div className="bg-orange-500 h-2.5 rounded-full mb-12" style={{ width: "80%" }}></div>
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
        </aside>
        <main className="flex-1 p-4">
        <div className="grid grid-cols-3 gap-4">
          {variants.map(variant => (
            <div key={variant.id} className="bg-gray-900 p-4 rounded space-y-2" style={{ width: '321px', height: '274px' }}>
              <div className="bg-gray-800 p-2 rounded">
                <h3 className="text-lg font-semibold">{variant.description}</h3>
              </div>
              <p className="text-xs font-semibold uppercase tracking-wide mb-4 text-gray-400">Product Data Capability</p>
              <div className="flex justify-between items-center mt-5">
                {['Add Asset', 'Validate', 'Go Live'].map((action, index) => (
                  <div key={index} className="text-center space-y-1 mt-2">
                    <button className="bg-gray-700 text-orange-500 px-4 py-2 rounded text-xs font-medium">{action}</button>
                    <div className="w-full h-0.5 bg-orange-500 rounded mt-5"></div>
                  </div>
                ))}
              </div>
              <button className="w-full bg-orange-500 text-white py-2 rounded text-sm mt-100">Next</button>
            </div>
          ))}
          <button onClick={addVariant} style={{
              width: '321px',
              height: '274px',
              backgroundColor: '#251B16',
              color: 'white',
              borderRadius: '4px',
              border: '3.5px dashed #F37413',
              cursor: 'pointer',
              fontSize: '26px',
              fontStyle:'Bold',
            }}
            className="flex justify-center items-center"
          >
            + Add More Variants
          </button>
          <button style={{
              gridColumn: '3 / -1', // Span across all columns
              gridRowStart: rows + 2, // Start on the calculated row
              backgroundColor: '#F37413',
              color: 'white',
              borderRadius: '4px',
              border: 'none',
              cursor: 'pointer',
              fontSize: '16px',
              fontWeight: 'bold',
              height: '48px', // Adjusted height based on typical UI button sizes
              width: '163px'
            }}
            className="w-full text-center"
          >
            Confirm
          </button>
        </div>
      </main>
    </div>
    </div>
  );
};

export default ProductVariants;