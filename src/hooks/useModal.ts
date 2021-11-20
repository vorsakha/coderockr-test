import { useHistory } from "react-router-dom";
import { useLocation } from "react-router-dom";
import { useEffect, useRef } from "react";
import handleBlockScroll from "../utils/blockScroll";
import useClickOutside from "./useClickOutside";

const useModal = () => {
  const location: any = useLocation();

  const history = useHistory();

  // Handle close modal
  const ref = useRef(null);
  const handleCloseButton = () => {
    handleBlockScroll(false);

    // If user came from within the website goBack
    // If user came from URL push page 1
    location.state ? history.goBack() : history.push(`/`);
  };

  useClickOutside(ref, handleCloseButton);

  useEffect(() => {
    handleBlockScroll(true);
  }, []);

  return { handleCloseButton, ref };
};

export default useModal;
