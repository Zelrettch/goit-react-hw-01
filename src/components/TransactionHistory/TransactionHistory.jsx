import css from './TransactionHistory.module.css';

export default function TransactionHistory({ items }) {
  return (
    <table className={css.trTable}>
      <thead className={css.trHeader}>
        <tr>
          <th>Type</th>
          <th>Amount</th>
          <th>Currency</th>
        </tr>
      </thead>
      <tbody>
        {items.map(t => {
          return <Transaction transaction={t} key={t.id} />;
        })}
      </tbody>
    </table>
  );
}

function Transaction({ transaction }) {
  const { type, amount, currency } = transaction;
  return (
    <tr className={css.trRow}>
      <td>{type}</td>
      <td>{amount}</td>
      <td>{currency}</td>
    </tr>
  );
}
