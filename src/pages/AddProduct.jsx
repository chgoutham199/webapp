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
    modelVariantsName: [''],
    catalogName: '',
    subCatalogName: '',
    productReferenceLink: ['']
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
    <div className=" bg-neutral-900 rounded-lg  p-3  max-w-7xl  mr-5 ml-5">
      <form
        onSubmit={handleSubmit}
        className="flex flex-col text-neutral-300  gap-4 p-3 m-3 pl-5 ml-5"
      >
        <div className="flex flex-col gap-3">
          <label for="Brand Name" className=" font-normal ">
            Brand Name
          </label>
          <input
            name="brandName"
            value={productDetails.brandName}
            onChange={handleChange}
            type="text"
            placeholder="Describe Brand Name"
            className="bg-neutral-700 h-9 rounded-sm placeholder-neutral-500 pl-5 max-w-5xl  "
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
            className="bg-neutral-700 h-9 rounded-sm placeholder-neutral-500 pl-5 max-w-5xl  "
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
            className="bg-neutral-700 h-9 rounded-sm placeholder-neutral-500 pl-5 max-w-5xl  "
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
            className="bg-neutral-700 h-9 rounded-sm placeholder-neutral-500 pl-5 max-w-5xl  "
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
            className="bg-neutral-700 h-9 rounded-sm placeholder-neutral-500 pl-5 max-w-5xl  "
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
            className="bg-neutral-700 h-9 rounded-sm placeholder-neutral-500 pl-5 max-w-5xl  "
          />
            <div className="flex justify-between max-w-5xl pt-3">
              <Link to="/">
                <button className="bg-orange-500 text-neutral-300 font-semibold py-2 px-6 rounded-sm  ">
                 Cancel
                </button>
                </Link>

                <button type ="submit" className="bg-orange-500 text-neutral-300 font-semibold py-2 px-6 rounded-sm  ">
                Add Product
                </button>
            </div>
        </div>
      </form>
    </div>
  );
}
