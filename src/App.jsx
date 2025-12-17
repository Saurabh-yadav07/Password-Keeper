import { useContext, useState } from "react";
import PasswordContext from "./context/password-context";
import Header from "./components/Header";
import SearchBar from "./components/SearchBar";
import PasswordList from "./components/PasswordList";
import AddPasswordModal from "./components/AddPasswordModal";
import "./App.css";

function App() {
  const { passwords } = useContext(PasswordContext);
  const [showModal, setShowModal] = useState(false);
  const [editing, setEditing] = useState(null);
  const [search, setSearch] = useState("");

  const filtered = passwords.filter(p =>
    p.title.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="app">
      <Header count={passwords.length} />
      <SearchBar onSearch={setSearch} />

      <button className="add-btn" onClick={() => setShowModal(true)}>
        + Add New Password
      </button>

      <PasswordList
        passwords={filtered}
        onEdit={p => {
          setEditing(p);
          setShowModal(true);
        }}
      />

      {showModal && (
        <AddPasswordModal
          editingData={editing}
          onClose={() => {
            setEditing(null);
            setShowModal(false);
          }}
        />
      )}
    </div>
  );
}

export default App;