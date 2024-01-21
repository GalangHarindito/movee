'use client'

import styled from "styled-components";

type Props = {
  placeHolder: string;
  onChange: () => {};
}; 

const SearchInput = ({ placeHolder, onChange }: Props) => {
  return (
    <Wrapper>
      <Search type="search" id="input-search" placeholder={placeHolder} onChange={onChange} />
    </Wrapper>
  );
};

export default SearchInput;

const Wrapper = styled.div``;

const Search = styled.input`
  padding: 1rem;
  height: 2rem;
  border-color: transparent;
  border-radius: 10px;
  font-size: 0.9rem;
  align-self: center;

  &:focus {
    outline: none;
    box-shadow: 0 5px 15px rgba(0, 0, 0, 0.25);
  }
`;
