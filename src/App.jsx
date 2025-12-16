import { useContext, useState } from "react";
import PasswordContext from "./context/password-context";
import Header from "./components/Header";
import SearchBar from "./components/SearchBar";
import PasswordList from "./components/PasswordList";
import AddPasswordModal from "./components/AddPasswordModal";

function App() {
  const { passwords } = useContext(PasswordContext);

  const [showModal, setShowModal] = useState(false);
  const [search, setSearch] = useState("");
  const [editingPassword, setEditingPassword] = useState(null);

  const filteredPasswords = passwords.filter(p =>
    p.title.toLowerCase().includes(search.toLowerCase())
  );

  function openAddModal() {
    setEditingPassword(null);
    setShowModal(true);
  }

  function openEditModal(password) {
    setEditingPassword(password);
    setShowModal(true);
  }

  function closeModal() {
    setShowModal(false);
    setEditingPassword(null);
  }

  return (
    <div className="container">
      <Header count={passwords.length} />
      <SearchBar onSearch={setSearch} />

      <button onClick={openAddModal}>
        Add New Password
      </button>

      {showModal && (
        <AddPasswordModal
          onClose={closeModal}
          editingData={editingPassword}
        />
      )}

      <PasswordList
        passwords={filteredPasswords}
        onEdit={openEditModal}
      />
    </div>
  );
}

export default App;
