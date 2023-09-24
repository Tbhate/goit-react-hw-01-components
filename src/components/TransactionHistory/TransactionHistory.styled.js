import styled from 'styled-components';

// export const Table = styled.table`
//   width: 60%;
//   border-collapse: collapse;
//   margin-top: 20px;
//   margin-bottom: 20px;
//   text-align: left;
//   margin-left: auto;
//   margin-right: auto;
//   box-shadow: 0px 0px 12px 1px rgba(0, 0, 0, 0.2);
// `;

// export const TableHead = styled.thead`
//   background-color: #2c3e50;
//   color: #ecf0f1;
// `;

// export const TableBody = styled.tbody`
//   tr:nth-child(even) {
//     background-color: #dadad8;
//   }
// `;

// export const TableRow = styled.tr`
//   &:hover {
//     background-color: grey;
//   }
// `;

// export const TableHeader = styled.th`
//   border: 1px solid #ddd;
//   padding: 12px 15px;
//   text-transform: uppercase;
// `;

// export const TableCell = styled.td`
//   border: 1px solid #ddd;
//   padding: 12px 15px;
//   font-size: 0.9em;
// `;
export const Table = styled('table')(() => ({
  width: '50%',
  borderCollapse: 'collapse',
  marginTop: '20px',
  marginBottom: '20px',
  textAlign: 'left',
  marginLeft: 'auto',
  marginRight: 'auto',
  boxShadow: '0px 0px 12px 1px rgba(0, 0, 0, 0.2)',
}));

export const TableHead = styled('thead')(() => ({
  backgroundColor: '#2c3e50',
  color: '#ecf0f1',
}));

export const TableBody = styled('tbody')(() => ({
  'tr:nth-child(even)': {
    backgroundColor: '#dadad8',
  },
}));

export const TableRow = styled('tr')(() => ({
  '&:hover': {
    backgroundColor: 'grey',
  },
}));

export const TableHeader = styled('th')(() => ({
  border: '1px solid #ddd',
  padding: '12px 15px',
  textTransform: 'uppercase',
}));

export const TableCell = styled('td')(() => ({
  border: '1px solid #ddd',
  padding: '12px 15px',
  fontSize: '0.9em',
}));