import styled from "styled-components";

export const Wrapper = styled.nav`
 margin-top: 28px;
    margin-bottom: 50px;`
   
  
  
  export const List = styled.ul`
  display: flex;
    justify-content: center;
    align-items: center;
    gap: 10px;
    list-style: none;
    padding: 0;
    margin: 0;
  `
    
  
  export const Button = styled.button`
  cursor: pointer;
    width: 32px;
    height: 32px;
    border-radius: 8px;
    background-color: transparent;
    color: var(--primary-color-black);
    border: 1px solid var(--primary-color-fon);
    &:hoveer,
    &:focus {
        background-color: ${(p)=> p.theme.colors.green};
        color: ${(p)=> p.theme.colors.white} ;   
    }
    `
    
  
  export const Activ = styled.button`
  cursor: pointer;
    width: 32px;
    height: 32px;
    border-radius: 8px;
    background-color: ${({ active }) => (active ? '#007bff' : '#fff')};
  color: ${({ active }) => (active ? '#fff' : '#007bff')};
    border: 1px solid #007bff;
    &:hover {
        background-color: ${({ active }) => (active ? '#0056b3' : '#e7e7e7')};
      }
    
  `
    