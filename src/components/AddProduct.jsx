import { useState } from "react";

const AddProduct = () => {
  const [image, setImage] = useState(null);
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState("");
  const [discount, setDiscount] = useState("");
  const [category, setCategory] = useState("men");

  // Handle image upload
  const handleImageUpload = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setImage(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log({ title, description, price, image, discount, category });
  };

  return (
    <div className=" max-w-[1400px] w-[100%] flex justify-center items-center  p-2">
      <form
        onSubmit={handleSubmit}
        className="bg-[#e8d5f8] shadow-md  max-w-[1400px] w-[100%]  flex flex-col gap-10 items-center p-6 rounded-3xl h-[100%] text-2xl"
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
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-green-500"
            />
          </label>

          <label className="block font-medium text-gray-700 mb-2 max-w-[600px] w-[100%]  ">
            Description
            <input
              placeholder="Enter Description"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
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
              value={price}
              onChange={(e) => setPrice(e.target.value)}
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
            {image && (
              <img
                src={image}
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
              value={discount}
              onChange={(e) => setDiscount(e.target.value)}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-green-500"
            />
          </label>

          <label className="block font-medium text-gray-700 mb-2 max-w-[600px] w-[100%]  ">
            Category
            <select
              value={category}
              onChange={(e) => setCategory(e.target.value)}
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
          className=" bg-green-500 text-white py-2 px-4 rounded-lg hover:bg-green-600 transition duration-300 max-w-[600px] w-[100%]  "
        >
          Add Product
        </button>
      </form>
    </div>
  );
};

export default AddProduct;
