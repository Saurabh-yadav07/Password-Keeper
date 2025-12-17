import { useContext, useState } from "react";
import PasswordContext from "../context/password-context";
import "./PasswordItem.css";

function PasswordItem({ data, onEdit }) {
  const { deletePassword } = useContext(PasswordContext);
  const [showPassword, setShowPassword] = useState(false);

  const handleDelete = () => {
    if (window.confirm(`Are you sure you want to delete "${data.title}"?`)) {
      deletePassword(data.id);
    }
  };

  return (
    <li className="item">
      <div className="item-content">
        <strong className="item-title">{data.title}</strong>
        <div className="item-password">
          {showPassword ? data.password : "••••••••"}
        </div>
      </div>
      <div className="item-actions">
        <button 
          className="btn btn-show" 
          onClick={() => setShowPassword(!showPassword)}
        >
          {showPassword ? "Hide" : "Show"}
        </button>
        <button 
          className="btn btn-edit" 
          onClick={() => onEdit(data)}
        >
          Edit
        </button>
        <button 
          className="btn btn-delete" 
          onClick={handleDelete}
        >
          Delete
        </button>
      </div>
    </li>
  );
}

export default PasswordItem;