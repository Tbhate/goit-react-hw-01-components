import React from 'react';
import PropTypes from 'prop-types';
import {
  Table,
  TableHead,
  TableBody,
  TableRow,
  TableHeader,
  TableCell,
} from './TransactionHistory.styled.js';

const TransactionHistory = ({ items }) => (
  <Table>
    <TableHead>
      <TableRow>
        <TableHeader>Type</TableHeader>
        <TableHeader>Amount</TableHeader>
        <TableHeader>Currency</TableHeader>
      </TableRow>
    </TableHead>
    <TableBody>
      {items.map(({ id, type, amount, currency }) => (
        <TableRow key={id}>
          <TableCell>{type}</TableCell>
          <TableCell>{amount}</TableCell>
          <TableCell>{currency}</TableCell>
        </TableRow>
      ))}
    </TableBody>
  </Table>
);

TransactionHistory.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      type: PropTypes.string.isRequired,
      amount: PropTypes.string.isRequired,
      currency: PropTypes.string.isRequired,
    })
  ).isRequired,
};

export default TransactionHistory;