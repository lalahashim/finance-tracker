import ResentTransactions from "./ResentTransactions";
import TotalBalance from "./TotalBalance";

export default function MainContent({ transactions, onEdit }) {
  return (
    <div className="sm:bg-white sm:w-[85%] mx-auto p-8 sm:rounded-xl">
      <TotalBalance transactions={transactions} />
      <ResentTransactions transactions={transactions} onEdit={onEdit} />
    </div>
  );
}
