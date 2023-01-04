import PropTypes from 'prop-types';
import css from './TransactionHistory.module.css';

export const TransactionHistory = ({ items }) => (
    <table className={css.transactionHistory}>
        <thead className={css.headTable}>
            <tr>
                <th className={css.columnName}>Type</th>
                <th className={css.columnName}>Amount</th>
                <th className={css.columnName}>Currency</th>
            </tr>
        </thead>

        <tbody>
            {items.map(({ id, type, amount, currency }) => {
                return <tr key={id} className={css.tableContent}>
                    <td className={css.columnItem}>{type}</td>
                    <td className={css.columnItem}>{amount}</td>
                    <td className={css.columnItem}>{currency}</td>
                </tr>
            })}
        </tbody>
    </table>
);

TransactionHistory.propTypes = {
    items: PropTypes.arrayOf(PropTypes.exact({
        id: PropTypes.string.isRequired,
        type: PropTypes.string.isRequired,
        amount: PropTypes.string.isRequired,
        currency: PropTypes.string.isRequired,
    }))
};