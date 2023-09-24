import styled from 'styled-components';

export const ListItem = styled('li')(() => ({
  listStyle: 'none',
  display: 'flex',
  alignItems: 'center',
  border: '2px solid #ccc',
  borderRadius: '8px',
  boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
  padding: '10px',
  margin: '10px',
  width: '50%',
  transition: 'all 0.3s ease',
  '&:hover': {
    borderColor: 'blue',
  },
}));

export const Status = styled('span')(props => ({
  display: 'inline-block',
  width: '20px',
  height: '20px',
  backgroundColor: props.$isOnline ? 'green' : 'red',
  borderRadius: '50%',
  marginRight: '10px',
}));

export const Avatar = styled('img')(() => ({
  width: '48px',
  height: '48px',
  borderRadius: '50%',
  marginRight: '10px',
}));

export const Name = styled('p')(() => ({
  fontSize: '16px',
  margin: '0',
}));