export default function ResentTransactions({ transactions, onEdit }) {
  return (
    <div className="mt-5 bg-white p-4 rounded-lg sm:mt-10 sm:p-0 sm:bg-none sm:rounded-none">
      <h2 className="text-xl font-bold font-main sm:text-2xl">Recent Transactions</h2>
      <table className="font-main w-full mx-auto table-auto my-2">
        <thead>
          <tr className="text-normal border-b border-b-neutral-200 sm:text-xl">
            <th className="text-left py-1">Date</th>
            <th className="text-center py-1">Description</th>
            <th className="text-right py-1">Amount</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {transactions.map((t) => (
            <tr key={t.id} className="border-b border-b-neutral-200 text-xs sm:text-bigger">
              <td className="text-left py-1">{t.date}</td>
              <td className="text-center py-1">{t.description}</td>
              <td
                className={`text-right py-1 ${
                  t.amount < 0 ? "text-red-700" : "text-green-700"
                }`}
              >
                {t.amount > 0 ? "+" : ""}
                {t.amount}₼
              </td>
              <td className="text-right py-1">
                <button
                  className="text-indigo-950 cursor-pointer hover:underline text-small sm:text-sm"
                  onClick={() => onEdit(t)}
                >
                  Edit
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
