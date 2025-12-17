import ReactDOM from "react-dom";
import "./Backdrop.css";

function Backdrop({ onClose }) {
  return ReactDOM.createPortal(
    <div className="backdrop" onClick={onClose}></div>,
    document.getElementById("modal-root")
  );
}

export default Backdrop;