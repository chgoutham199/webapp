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
    navigate("/home");
  };

  return (
      <div className=" bg-neutral-900 rounded-lg  pt-4  max-w-7xl  mr-7  ml-5 mx-auto  pb-3">
        <form
          onSubmit={handleSubmit}
          className="flex flex-col text-neutral-300  gap-2   p-3 m-3  pl-10 ml-12 "
        >  
          <div className="flex flex-col gap-3 scrollbar-nav overflow-y-auto max-h-screen mr-10">
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
              <div className="flex flex-col gap-3 transition-all">
                <div key={index} className="flex  gap-3 items-center">
                  <label for="sub catalog name" className="font-normal ">
                    Model Variant Name
                  </label>
                  {productDetails.modelVariants.length > 1 && (
                    <Trash2
                      onClick={() => handleRemoveField(index)}
                      size={15}
                      className="hover:cursor-pointer hover:text-orange-400"
                    />
                  )}
                </div>
                <input
                  name="variantName"
                  value={variant.variantName}
                  onChange={(e) => handleChange(index, e)}
                  type="text"
                  placeholder="Describe Model Variant Name"
                  className="bg-neutral-700 h-8 rounded-sm placeholder-neutral-500 pl-5 max-w-5xl"
                />
                {/* </div> */}
                <div className="flex flex-col gap-3">
                  <label for="Reference Link" className="font-normal ">
                    Product Reference Link
                  </label>

                  <input
                    name="productReference"
                    value={variant.productReference}
                    onChange={(e) => handleChange(index, e)}
                    type="text"
                    placeholder="Describe Product Reference Link"
                    className="bg-neutral-700 h-8 rounded-sm placeholder-neutral-500 pl-5 max-w-5xl"
                  />
                </div>
              </div>
            ))}
            <div className="flex  hover:cursor-pointer items-center justify-center max-w-5xl gap-2 border border-dashed border-spacing-10 p-1 border-orange-400 rounded-sm hover:text-orange-500 hover:opacity-65"
                onClick={handleAddField}
            >
              <Plus
                size={15}
              />
              Add more
            </div>
          </div>
          <div className="flex justify-between max-w-5xl pt-5">
            <Link to="/">
              <button className="bg-orange-500 text-neutral-300 font-semibold py-2 px-6 rounded-sm hover:opacity-50 ">
                Cancel
              </button>
            </Link>

            <button
              type="submit"
              className="bg-orange-500 text-neutral-300 font-semibold py-2 px-6 rounded-sm hover:opacity-50 "
            >
              Add Product
            </button>
          </div>
        </form>
      </div>

  );
}
