"use client";

import styled from "styled-components";

export const Card = styled.section`
  height: 25rem;
  width: calc(25rem / 1.5);
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;
  perspective: 2500px;
  background-color: #1e1b1b;
  justify-self: center;
  cursor: pointer;
  overflow: hidden;
`;

export const ImagePoster = styled.div`
  position: relative;
  height: 25rem;
  width: 100%;
`;

export const WrapperDescription = styled.div`
  position: absolute;
  inset: auto auto -90% auto;
  transition: inset 0.3s ease-out;
  background-color: #302d2d;
  height: 100%;
  width: calc(25rem / 1.5);
  opacity: 0.9;
`;

export const Rating = styled.div``;
export const Title = styled.div`
  padding: 0.5rem;
  display: flex;
  gap: 0.5rem;
`;
export const WrapperTitleHide = styled.div`
  display: none;
  padding: 1rem;
  opacity: 1;
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: auto auto 1fr 1fr;
  grid-row-gap: 1.5rem;
}
`;

export const TitleHide = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 2rem;
`;
export const DescriptionYear = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
`;

export const WrapperCategory = styled.div`
  display: flex;
  gap: 0.7rem;
  flex-wrap: wrap;
`;

export const WrapperContent = styled.div`
  &:hover ${WrapperDescription} {
    inset: auto auto 0% auto;
    opacity: 0.9;
    transition: inset 0.3s ease-out;
  }
  &:hover ${Title} {
    display: none;
    transition: display 0.3s ease-out;
  }
  &:hover ${WrapperTitleHide} {
    display: ;
    transition: display 0.3s ease-out;
  }
`;
