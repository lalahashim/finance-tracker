export default function TotalBalance({ transactions }) {
  const income = transactions
    .filter((t) => t.amount > 0)
    .reduce((acc, t) => acc + t.amount, 0);

  const expenses = transactions
    .filter((t) => t.amount < 0)
    .reduce((acc, t) => acc + Math.abs(t.amount), 0);

  const total = income - expenses;

  return (
    <div className="sm:flex sm:justify-between sm:items-center">
      <h2 className="font-main bg-white rounded-lg p-4 mb-5 text-indigo-950 text-2xl font-bold sm:border-b sm:pb-3 sm:border-b-neutral-200 sm:text-3xl sm:w-[55%]">
        Total Balance: <br /> ₼{total}
      </h2>
      <div className="text-xl font-main rounded-xl bg-white p-4 flex justify-between sm:w-[40%] sm:text-2xl sm:border sm:border-neutral-200">
        <h3 className="text-green-700">
          Income: <br /> ₼{income}
        </h3>
        <h3 className="text-red-700">
          Expenses: <br /> ₼{expenses}
        </h3>
      </div>
    </div>
  );
}
