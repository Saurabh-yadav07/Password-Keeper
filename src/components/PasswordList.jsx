import PasswordItem from "./PasswordItem";
import "./PasswordList.css";

function PasswordList({ passwords, onEdit }) {
  if (passwords.length === 0) {
    return (
      <div className="empty-state">
        <div className="empty-icon">📝</div>
        <p className="empty-title">No passwords saved yet</p>
        <p className="empty-subtitle">Click "Add New Password" to get started!</p>
      </div>
    );
  }

  return (
    <ul className="list">
      {passwords.map(p => (
        <PasswordItem key={p.id} data={p} onEdit={onEdit} />
      ))}
    </ul>
  );
}

export default PasswordList;