import { useContext, useEffect, useState } from "react";
import PasswordContext from "../context/password-context";
import Modal from "./UI/Modal";
import Backdrop from "./UI/Backdrop";
import "./AddPasswordModal.css";

function AddPasswordModal({ onClose, editingData }) {
  const { addPassword, editPassword } = useContext(PasswordContext);
  const [title, setTitle] = useState("");
  const [password, setPassword] = useState("");

  const isEdit = !!editingData;

  useEffect(() => {
    if (editingData) {
      setTitle(editingData.title);
      setPassword(editingData.password);
    }
  }, [editingData]);

  function submit() {
    if (!title.trim() || !password.trim()) {
      alert("Please fill in both fields");
      return;
    }

    if (isEdit) {
      editPassword(editingData.id, { title, password });
    } else {
      addPassword({ title, password });
    }
    onClose();
  }

  return (
    <>
      <Backdrop onClose={onClose} />
      <Modal>
        <h2 className="modal-title">
          {isEdit ? "Update Password" : "Add New Password"}
        </h2>
        <div className="form-group">
          <label>Title</label>
          <input 
            className="modal-input"
            placeholder="e.g., Gmail, Facebook"
            value={title} 
            onChange={e => setTitle(e.target.value)} 
          />
        </div>
        <div className="form-group">
          <label>Password</label>
          <input 
            className="modal-input"
            type="password"
            placeholder="Enter password"
            value={password} 
            onChange={e => setPassword(e.target.value)} 
          />
        </div>
        <div className="modal-actions">
          <button className="modal-btn modal-btn-primary" onClick={submit}>
            {isEdit ? "Update" : "Add"}
          </button>
          <button className="modal-btn modal-btn-secondary" onClick={onClose}>
            Cancel
          </button>
        </div>
      </Modal>
    </>
  );
}

export default AddPasswordModal;