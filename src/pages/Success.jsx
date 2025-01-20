import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { PropagateLoader } from "react-spinners";

const Success = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 1500);
  }, []);

  const navigate = useNavigate();

  return (
    <div className="flex flex-col items-center justify-center h-screen">
      {loading ? (
        <PropagateLoader color="#f97316" />
      ) : (
        <>
          <h2 className="text-3xl font-semibold mb-4 text-center">Order Successful!</h2>
          <p>Your order has been sucessfully placed</p>
          <button className="bg-orange-500 text-white px-3 py-2 rounded-md font-semibold mt-4 hover:bg-orange-600" onClick={() => navigate("/")}>Go to Home</button>
        </>
      )}
    </div>
  );
};

export default Success;