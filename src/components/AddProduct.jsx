import { useState } from "react";
import toast from "react-hot-toast";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { addtoProduct } from "../store/slices/productSlice";

export default function AddProduct() {
  const dispatch = useDispatch();
  const token = useSelector((state) => state.auth.token);
  // console.log("Token:", token);
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({
    title: "",
    description: "",
    image: null,
    price: "",
    discount: "",
    category: "men",
  });
  const [imagePreview, setImagePreview] = useState(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleImageUpload = (e) => {
    const file = e.target.files[0];
    if (file) {
      setFormData({ ...formData, image: file });
      const reader = new FileReader();
      reader.onload = () => setImagePreview(reader.result);
      reader.readAsDataURL(file);
    }
  };

  async function handleSubmit(e) {
    setLoading(true);
    e.preventDefault();
    const form = new FormData();
    form.append("title", formData.title);
    form.append("description", formData.description);
    form.append("price", formData.price);
    form.append("discount", formData.discount);
    form.append("category", formData.category);
    if (formData.image) {
      // console.log("Image:", formData.image);
      form.append("image", formData.image);
    } else {
      // console.log("Image not found");
    }
    try {
      const response = await fetch(
        "https://backend-project-kv.onrender.com/api/v1/product/create",
        {
          method: "POST",
          headers: {
            authorization: `Bearer ${token}`,
          },
          body: form,
        }
      );

      if (!response.ok) {
        throw new Error("Failed to create product");
      }

      const data = await response.json();
      // console.log("Data for hook:", data.data);
      dispatch(addtoProduct(data.data));

      // console.log("Product created successfully:", data);
      setFormData({
        title: "",
        description: "",
        image: null,
        price: "",
        discount: "",
        category: "men",
      });
      imagePreview && setImagePreview(null);
      toast.success("Product created successfully");
    } catch (error) {
      // console.error("Error creating product:", error);
      toast.error("Failed to create product");
    }
    setLoading(false);
  }

  return (
    <div className=" max-w-[1400px] w-[100%] flex justify-center items-center  p-2">
      {loading ? (
        <div className="spinner"></div>
      ) : (
        <form
          onSubmit={handleSubmit}
          className="bg-[#e8d5f8] shadow-md  max-w-[1400px] w-[100%]  flex flex-col gap-10 items-center p-6 rounded-3xl  h-[100%] text-2xl"
        >
          <h2 className="text-4xl text-gray-800 mt-10 text-center font-bold">
            Please Add The Product{" "}
          </h2>

          <div className="w-full flex flex-wrap  justify-evenly items-center gap-2 ">
            <label className="block font-medium text-gray-700 mb-2  max-w-[600px] w-[100%] ">
              Title
              <input
                type="text"
                placeholder="Enter Title"
                name="title"
                value={formData.title}
                onChange={handleChange}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-green-500"
              />
            </label>

            <label className="block font-medium text-gray-700 mb-2 max-w-[600px] w-[100%]  ">
              Description
              <input
                placeholder="Enter Description"
                name="description"
                value={formData.description}
                onChange={handleChange}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-green-500"
              />
            </label>
          </div>

          <div className="w-full flex flex-wrap  justify-evenly items-center gap-2 ">
            <label className="block font-medium text-gray-700 mb-2 max-w-[600px] w-[100%]  ">
              Price
              <input
                type="number"
                placeholder="Enter Price"
                name="price"
                value={formData.price}
                onChange={handleChange}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-green-500"
              />
            </label>

            <label className="block font-medium text-gray-700 mb-2 max-w-[600px] w-[100%]  ">
              Image
              <input
                type="file"
                onChange={handleImageUpload}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-green-500"
              />
              {imagePreview && (
                <img
                  src={imagePreview}
                  alt="Preview"
                  className="mt-4 max-w-[300px] h-auto"
                />
              )}
            </label>
          </div>

          <div className="w-full flex flex-wrap  justify-evenly items-center gap-2 ">
            <label className="block font-medium text-gray-700 mb-2 max-w-[600px] w-[100%]  ">
              Discount (%)
              <input
                type="number"
                placeholder="Enter Discount"
                name="discount"
                value={formData.discount}
                onChange={handleChange}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-green-500"
              />
            </label>

            <label className="block font-medium text-gray-700 mb-2 max-w-[600px] w-[100%]  ">
              Category
              <select
                name="category"
                value={formData.category}
                onChange={handleChange}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-green-500"
              >
                <option value="men">Men</option>
                <option value="women">Women</option>
                <option value="teen">Teen</option>
              </select>
            </label>
          </div>

          <button
            type="submit"
            className=" bg-green-500 text-white py-2 px-4 rounded-lg hover:bg-green-600 transition duration-300 max-w-[600px] w-[100%] mb-6  "
          >
            Add Product
          </button>
        </form>
      )}
    </div>
  );
}
