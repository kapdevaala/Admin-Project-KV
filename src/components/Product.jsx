import { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { addProduct } from "../store/slices/productSlice";
import { useDispatch } from "react-redux";
import toast from "react-hot-toast";

const Product = () => {
  const dispatch = useDispatch();
  const value = useSelector((state) => state.product.value);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    async function fetchProducts() {
      try {
        const response = await fetch(
          "https://backend-project-kv.onrender.com/api/v1/product/all"
        );
        const data = await response.json();
        if (data.success) {
          dispatch(addProduct(data.data));
        } else {
          // console.error("Failed to fetch products");
          toast.error("Failed to fetch products");
        }
        // console.log("Fetching products...", value.length);
      } catch (error) {
        toast.error("Error fetching products");
        // console.error("Error fetching products:", error);
      }
    }

    fetchProducts();
    setLoading(false);
  }, []);

  return (
    <div className=" max-w-[1400px] w-[100%] flex justify-center items-center mb-8  p-2">
      {loading ? (
        <div className="spinner"></div>
      ) : (
        <div className="bg-[#e8d5f8] shadow-md  max-w-[1400px] w-[100%]  flex flex-col gap-10 items-center p-6 rounded-3xl h-[100%] text-2xl">
          {value.length == 0 ? (
            <div>
              <h1>No Products Avialable </h1>
            </div>
          ) : (
            <div className="flex p-8 flex-col justify-center items-center gap-8 w-[100%]">
              <div className=" flex justify-center items-center text-6xl">
                <h1 className="">Products</h1>
              </div>
              <div className="max-w-[98%] w-[100%] flex flex-wrap justify-center items-center gap-3 ">
                {value.map((product) => (
                  <div
                    key={product._id}
                    className=" border-2  p-4 rounded-lg shadow-md max-w-[300px] w-[100%] "
                  >
                    <img
                      src={product.image}
                      alt={product.title}
                      className="w-full h-48 object-cover rounded-lg mb-4"
                    />
                    <h3 className="text-xl font-bold">{product.title}</h3>
                    <p className="text-gray-600">{product.description}</p>
                    <p className="text-lg font-semibold mt-2">
                      Price: ${product.price}
                    </p>
                    <p className="text-sm text-gray-500">
                      Category: {product.category}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default Product;
