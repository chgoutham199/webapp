import { Link } from "react-router-dom";
import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addToCart } from '../redux/productSlice';
import { useNavigate } from "react-router-dom";
export default function AddProduct() {
  const dispatch = useDispatch();
  const [productDetails, setProductDetails] = useState({
    brandName: '',
    modelName: '',
    modelVariantsName: '',
    catalogName: '',
    subCatalogName: '',
    productReferenceLink: ''
  });
   const navigate=useNavigate();
  const handleChange = (e) => {
    const { name, value } = e.target;
    setProductDetails({ ...productDetails, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(addToCart(productDetails));
    navigate('/')
   
  };

  return (
    <div className=" bg-neutral-900 bg-cover mr-6 ml-3 rounded-lg  max-w-6xl  mx-auto">
      <form
        onSubmit={handleSubmit}
        className=" ml-4 px-9 pt-7  flex flex-col  text-neutral-300  gap-3"
      >
        <div className="flex flex-col gap-3">
          <label for="Brand Name" className=" font-normal">
            Brand Name
          </label>
          <input
            name="brandName"
            value={productDetails.brandName}
            onChange={handleChange}
            type="text"
            placeholder="Describe Brand Name"
            className="bg-neutral-700 h-8 rounded-sm placeholder-neutral-500 pl-5 max-w-4xl  "
          />
        </div>
        <div className="flex flex-col gap-3">
          <label for="Brand Name" className="font-normal ">
            Model Name
          </label>
          <input
            name="modelName"
            value={productDetails.modelName}
            onChange={handleChange}
            type="text"
            placeholder="Describe Model Name"
            className="bg-neutral-700 h-8 rounded-sm placeholder-neutral-500 pl-5 max-w-4xl  "
          />
        </div>
        <div className="flex flex-col gap-3">
          <label for="Modal variants Name" className="font-normal ">
            Model Variants Name
          </label>
          <input
            name="modelVariantsName"
            value={productDetails.modelVariantsName}
            onChange={handleChange}
            type="text"
            placeholder="Describe Model Variants Name"
            className="bg-neutral-700 h-8 rounded-sm placeholder-neutral-500 pl-5 max-w-4xl  "
          />
        </div>
        <div className="flex flex-col gap-3">
          <label for="Catalog Name" className="font-normal ">
            Catalog Name
          </label>
          <input
            name="catalogName"
            value={productDetails.catalogName}
            onChange={handleChange}
            type="text"
            placeholder="Describe Catalog Name"
            className="bg-neutral-700 h-8 rounded-sm placeholder-neutral-500 pl-5 max-w-4xl  "
          />
        </div>
        <div className="flex flex-col gap-3">
          <label for="sub catalog name" className="font-normal ">
            Sub Catalog Name
          </label>
          <input
            name="subCatalogName"
            value={productDetails.subCatalogName}
            onChange={handleChange}
            type="text"
            placeholder="Describe Sub Catalog Name"
            className="bg-neutral-700 h-8 rounded-sm placeholder-neutral-500 pl-5 max-w-4xl  "
          />
        </div>
        <div className="flex flex-col gap-3">
          <label for="Url" className="font-normal w-full ">
            Product Reference Link
          </label>
          <input
            name="productReferenceLink"
            value={productDetails.productReferenceLink}
            onChange={handleChange}
            type="text"
            placeholder="Describe URL Link"
            className="bg-neutral-700 h-8 rounded-sm placeholder-neutral-500 pl-5 max-w-4xl  "
          />
            <div className="flex justify-end lg:mr-20 pr-20 mt-10 mb-6 sm:float-right ">
              <button type ="submit" className="bg-orange-500 text-neutral-300 font-semibold py-2 px-6 rounded-sm  ">
                Add Product
                </button>
            </div>
        </div>
      </form>
    </div>
  );
}
