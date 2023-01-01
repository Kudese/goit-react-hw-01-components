import s from '../TransactionHistory/TransactionHistory.module.css'
import PropTypes from 'prop-types'
export default function TransactionHistory({items}) {
  
  return (
    <table className={s.table}>
      <thead className={s.thead}>
        <tr>
          <th>Type</th>
          <th>Amount</th>
          <th>Currency</th>
        </tr>
      </thead>
      <tbody className={s.tb}>
      {items.map(({id, type, amount, currency})=>{
      return(<tr  key={id}>
      <td>{type[0].toUpperCase() + type.slice(1)}</td>
      <td>{amount}</td>
      <td>{currency}</td>
    </tr>)})}
          
      </tbody>
    </table>
  );
}

TransactionHistory.propTypes = {
    items: PropTypes.arrayOf(PropTypes.shape({
      id: PropTypes.string.isRequired,
      type: PropTypes.string.isRequired,
      amount: PropTypes.string.isRequired,
      currency: PropTypes.string.isRequired
    }))
  
}