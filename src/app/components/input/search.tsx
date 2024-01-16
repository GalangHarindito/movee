import styled from "styled-components";

type Props = {
  placeHolder: string;
};

const SearchInput = ({ placeHolder }: Props) => {
  return (
    <Wrapper>
      <Search type="search" placeholder={placeHolder} />
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
