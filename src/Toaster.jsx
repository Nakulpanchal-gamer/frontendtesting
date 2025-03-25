import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

// Initialize Toast
export const Toaster = (message, type = "success") => {
  toast[type](message, {
    position: "top-center",
    autoClose: 3000, // Auto close after 3 seconds
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
  });
};
