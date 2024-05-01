import { Link } from "react-router-dom";
import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addToCart } from "../redux/productSlice";
import { useNavigate } from "react-router-dom";
import { Trash2, Plus } from "lucide-react";
export default function AddProduct() {
  const dispatch = useDispatch();
  const [productDetails, setProductDetails] = useState({
    brandName: "",
    modelName: "",
    catalogName: "",
    subCatalogName: "",
    modelVariants: [{ variantName: "", productReference: "" }],
  });
  const handleChange = (index, e) => {
    const { name, value } = e.target;
    const updatedVariants = [...productDetails.modelVariants];
    updatedVariants[index][name] = value;
    setProductDetails({ ...productDetails, modelVariants: updatedVariants });
  };
  const handleAddField = () => {
    setProductDetails({
      ...productDetails,
      modelVariants: [
        ...productDetails.modelVariants,
        { variantName: "", productReference: "" },
      ],
    });
  };

  const handleRemoveField = (index) => {
    const updatedVariants = [...productDetails.modelVariants];
    updatedVariants.splice(index, 1);
    setProductDetails({ ...productDetails, modelVariants: updatedVariants });
  };

  const navigate = useNavigate();
  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(addToCart(productDetails));
    navigate("/");
  };

  return ( 
    <div className="scrollbar-nav">
    <div className=" bg-neutral-900 rounded-lg  pt-2  max-w-7xl  mr-5 ml-5 overflow-y-auto ">
      <form
        onSubmit={handleSubmit}
        className=" scrollbar-nav flex flex-col text-neutral-300  gap-4 p-3 m-3 pl-5 ml-5"
      >
        <div className="flex flex-col gap-3">
          <label for="Brand Name" className=" font-normal ">
            Brand Name
          </label>
          <input
            name="brandName"
            value={productDetails.brandName}
            onChange={(e) =>
              setProductDetails({
                ...productDetails,
                brandName: e.target.value,
              })
            }
            type="text"
            placeholder="Describe Brand Name"
            className="bg-neutral-700 h-8 rounded-sm placeholder-neutral-500 pl-5 max-w-5xl  "
          />
        </div>
        <div className="flex flex-col gap-3">
          <label for="Brand Name" className="font-normal ">
            Model Name
          </label>
          <input
            name="modelName"
            value={productDetails.modelName}
            onChange={(e) =>
              setProductDetails({
                ...productDetails,
                modelName: e.target.value,
              })
            }
            type="text"
            placeholder="Describe Model Name"
            className="bg-neutral-700 h-8 rounded-sm placeholder-neutral-500 pl-5 max-w-5xl  "
          />
        </div>

        <div className="flex flex-col gap-3">
          <label for="Catalog Name" className="font-normal ">
            Catalog Name
          </label>
          <input
            name="catalogName"
            value={productDetails.catalogName}
            onChange={(e) =>
              setProductDetails({
                ...productDetails,
                catalogName: e.target.value,
              })
            }
            type="text"
            placeholder="Describe Catalog Name"
            className="bg-neutral-700 h-8 rounded-sm placeholder-neutral-500 pl-5 max-w-5xl  "
          />
        </div>
        <div className="flex flex-col gap-3">
          <label for="sub catalog name" className="font-normal ">
            Sub Catalog Name
          </label>
          <input
            name="subCatalogName"
            value={productDetails.subCatalogName}
            onChange={(e) =>
              setProductDetails({
                ...productDetails,
                subCatalogName: e.target.value,
              })
            }
            type="text"
            placeholder="Describe Sub Catalog Name"
            className="bg-neutral-700 h-8 rounded-sm placeholder-neutral-500 pl-5 max-w-5xl  "
          />
        </div>
        <div className="flex flex-col gap-3">
          {productDetails.modelVariants.map((variant, index) => (
            <>
              <div key={index} className="flex flex-col gap-3">
                <label for="sub catalog name" className="font-normal ">
                  Model Variant Name
                </label>
                <input
                  name="variantName"
                  value={variant.variantName}
                  onChange={(e) => handleChange(index, e)}
                  type="text"
                  placeholder="Describe Model Variant Name"
                  className="bg-neutral-700 h-8 rounded-sm placeholder-neutral-500 pl-5 max-w-5xl"
                />
                <div className="flex gap-3">
                  <label for="Reference Link" className="font-normal ">
                    Product Reference Link
                  </label>
                  {productDetails.modelVariants.length > 1 && (
                    <Trash2
                      onClick={() => handleRemoveField(index)}
                      className="hover:cursor-pointer hover:text-orange-400"
                    />
                  )}
                </div>
                <input
                  name="productReference"
                  value={variant.productReference}
                  onChange={(e) => handleChange(index, e)}
                  type="text"
                  placeholder="Describe Product Reference Link"
                  className="bg-neutral-700 h-8 rounded-sm placeholder-neutral-500 pl-5 max-w-5xl"
                />
              </div>
            </>
          ))}
          <Plus
            onClick={handleAddField}
            className="hover:cursor-pointer hover:text-orange-400"
          />
        </div>
        <div className="flex justify-between max-w-5xl pt-3">
          <Link to="/">
            <button className="bg-orange-500 text-neutral-300 font-semibold py-2 px-6 rounded-sm  ">
              Cancel
            </button>
          </Link>

          <button
            type="submit"
            className="bg-orange-500 text-neutral-300 font-semibold py-2 px-6 rounded-sm  "
          >
            Add Product
          </button>
        </div>
      </form>
    </div>
    </div>
  );
}
