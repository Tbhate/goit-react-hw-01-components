import styled from 'styled-components';

export const ProfileSection = styled('div')(() => ({
  width: '300px',
  margin: '40px auto',
  border: '1px solid #ccc',
  borderRadius: '12px',
  boxShadow: '0 0 15px rgba(0, 0, 0, 0.1)',
  textAlign: 'center',
  backgroundColor: '#ffffff',
  transition: 'boxShadow 0.3s ease',
  '&:hover': {
    boxShadow: '0 0 20px rgba(0, 0, 0, 0.2)',
  },
}));

export const Description = styled('div')(() => ({
  padding: '30px',
}));

export const Avatar = styled('img')(() => ({
  width: '100px',
  height: '100px',
  borderRadius: '50%',
  marginBottom: '15px',
}));

export const UserName = styled('p')(() => ({
  fontSize: '24px',
  fontWeight: 700,
  marginTop: '10px',
  marginBottom: '5px',
  color: '#333333',
}));

export const Tag = styled('p')(() => ({
  fontSize: '16px',
  color: '#777777',
  marginBottom: '10px',
}));

export const Location = styled('p')(() => ({
  fontSize: '16px',
  color: '#777777',
  marginBottom: '10px',
}));

export const Stats = styled('ul')(() => ({
  display: 'flex',
  justifyContent: 'space-around',
  backgroundColor: '#f9f9f9',
  padding: '15px 0',
  borderTop: '1px solid #ccc',
  listStyleType: 'none',
}));
export const StatsItem = styled('li')(() => ({
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',
  padding: '15px',
  margin: '10px',
  width: '15%',
  backgroundColor: '#f9f9f9',
  color: '#555555',
  borderRadius: '10px',
  boxShadow: '0 2px 4px rgba(0, 0, 0, 0.2)',
}));

export const Label = styled('span')(() => ({
  fontSize: '14px',
  color: '#555555',
  '&:hover, &:focus': {
    color: '#f81010',
    textDecoration: 'underline',
    cursor: 'pointer',
  },
}));

export const Quantity = styled('span')(() => ({
  fontSize: '14px',
  color: '#555555',
  '&:hover, &:focus': {
    color: '#f81010',
    textDecoration: 'underline',
    cursor: 'pointer',
  },
}));