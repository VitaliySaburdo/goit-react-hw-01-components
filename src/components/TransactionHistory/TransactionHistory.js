import PropTypes from 'prop-types';
import { Table, Head, ColumsHead, Colums } from './TransactionHistory.styled';
export const TransactionHistory = ({ items }) => {
  return (
    <Table>
      <Head>
        <tr>
          <ColumsHead>Type</ColumsHead>
          <ColumsHead>Amount</ColumsHead>
          <ColumsHead>Currency</ColumsHead>
        </tr>
      </Head>
      <tbody>
        {items.map(({ id, type, amount, currency }) => (
          <tr key={id}>
            <Colums>{type}</Colums>
            <Colums>{amount}</Colums>
            <Colums>{currency}</Colums>
          </tr>
        ))}
      </tbody>
    </Table>
  );
};

TransactionHistory.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      type: PropTypes.string.isRequired,
      amount: PropTypes.string.isRequired,
      currency: PropTypes.string.isRequired,
    })
  ),
};
