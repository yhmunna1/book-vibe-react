import { useNavigate } from "react-router-dom";

const ErrorPage = () => {
  const navigate = useNavigate();
  return (
    <div className="text-center mt-32">
      <span className="loading loading-infinity loading-lg"></span>
      <h3 className="text-xl font-bold">Oops!</h3>
      <button
        onClick={() => {
          navigate(-1);
        }}
        className="btn bg-blue-400 text-white font-bold mt-3"
      >
        Go Back
      </button>
    </div>
  );
};

export default ErrorPage;
