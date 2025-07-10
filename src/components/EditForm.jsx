import { useState } from "react";

export default function EditForm({ transaction, onSave, onDelete }) {
  const [description, setDescription] = useState(transaction.description);
  const [amount, setAmount] = useState(transaction.amount);
  const [date, setDate] = useState(transaction.date);

  const handleSubmit = (e) => {
    e.preventDefault();

    const updated = {
      ...transaction,
      description,
      amount: parseFloat(amount),
      date,
    };

    onSave(updated);
  };

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-4">
      <input
        type="text"
        className="border p-2 rounded focus:outline-indigo-950 border-indigo-950"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
      />
      <input
        type="number"
        className="border border-indigo-950 p-2 rounded focus:outline-indigo-950"
        value={amount}
        onChange={(e) => setAmount(e.target.value)}
      />
      <input
        type="text"
        className="border border-indigo-950 p-2 rounded focus:outline-indigo-950"
        value={date}
        onChange={(e) => setDate(e.target.value)}
      />
      <div className="flex gap-2">
        <button className="bg-green-700 text-white py-2 px-4 rounded hover:bg-white hover:text-green-700 border border-green-700">
          Save
        </button>
        <button
          type="button"
          className="bg-red-700 text-white py-2 px-4 rounded hover:bg-white hover:text-red-700 border border-red-700"
          onClick={() => onDelete(transaction.id)}
        >
          Delete
        </button>
      </div>
    </form>
  );
}
