import { useEffect, useState } from "react";
import Header from "./components/Header";
import MainContent from "./components/MainContent";
import Modal from "./components/Modal";
import EditForm from "./components/EditForm";

function App() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [transactions, setTransactions] = useState(() => {
    const saved = localStorage.getItem("transactions");
    return saved ? JSON.parse(saved) : [];
  });
  const [editingTransaction, setEditingTransaction] = useState(null);

  useEffect(() => {
    localStorage.setItem("transactions", JSON.stringify(transactions));
  }, [transactions]);

  const handleAddSubmit = (e) => {
    e.preventDefault();
    const description = e.target.elements.description.value.trim();
    const amount = parseFloat(e.target.elements.amount.value);

    if (!description || isNaN(amount)) return;

    const newTransaction = {
      id: Date.now(),
      date: new Date().toLocaleDateString("en-GB", {
        day: "2-digit",
        month: "long",
        year: "numeric",
      }),
      description,
      amount,
    };

    setTransactions((prev) => [newTransaction, ...prev]);
    setIsModalOpen(false);
    e.target.reset();
  };

  const handleDelete = (id) => {
    setTransactions((prev) => prev.filter((t) => t.id !== id));
    setEditingTransaction(null);
  };

  const handleUpdate = (updated) => {
    setTransactions((prev) =>
      prev.map((t) => (t.id === updated.id ? updated : t))
    );
    setEditingTransaction(null);
  };

  return (
    <div className="bg-gray-50 min-h-screen">
      <Header onAddClick={() => setIsModalOpen(true)} />
      <MainContent
        transactions={transactions}
        onEdit={setEditingTransaction}
      />

      <Modal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)}>
        <h2 className="text-2xl font-bold text-indigo-950 mb-4">Add Transaction</h2>
        <form className="flex flex-col gap-4" onSubmit={handleAddSubmit}>
          <input
            type="text"
            name="description"
            placeholder="Description"
            className="border border-indigo-950 p-2 rounded focus:outline-indigo-950"
          />
          <input
            type="number"
            name="amount"
            placeholder="Amount"
            className="border border-indigo-950 p-2 rounded focus:outline-indigo-950"
          />
          <button className="bg-indigo-950 text-white py-2 rounded hover:bg-white hover:text-indigo-950 border border-indigo-950">
            Save
          </button>
        </form>
      </Modal>

      <Modal isOpen={!!editingTransaction} onClose={() => setEditingTransaction(null)}>
        <h2 className="text-2xl font-bold text-indigo-950 mb-4">Edit Transaction</h2>
        {editingTransaction && (
          <EditForm
            transaction={editingTransaction}
            onSave={handleUpdate}
            onDelete={handleDelete}
          />
        )}
      </Modal>
    </div>
  );
}

export default App;
