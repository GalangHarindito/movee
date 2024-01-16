'use client'

import styled from "styled-components";

export const H1 = styled.h1<{ color?: string }>`
  font-size: 2.5rem;
  color: ${(props) => props.color};
`;
export const H2 = styled.h2<{ color?: string }>`
  font-size: 2.2rem;
  color: ${(props) => props.color};
`;
export const H3 = styled.h3<{ color?: string }>`
  font-size: 1.9rem;
  color: ${(props) => props.color};
`;
export const H4 = styled.h4<{ color?: string }>`
  font-size: 1.6rem;
  color: ${(props) => props.color};
`;
export const H5 = styled.h5<{ color?: string }>`
  font-size: 1.1rem;
  color: ${(props) => props.color};
`;
export const H6 = styled.h6<{ color?: string }>`
  font-size: 1rem;
  color: ${(props) => props.color};
`;
export const Typocustome = styled.p<{ size?: string; color?: string }>`
  font-size: ${(props) => (props.size ? props.size : "0rem")};
  color: ${(props) => props.color};
`;

export const MainLayout = styled.section`
  background-color: #141526;
  height: 100%;
`;

export const WrapperYear= styled.div`
  padding: 0.3rem 0.6rem;
  background-color: #DE1F5F;
  border-radius: 10px;
  font-weight: bold;
`

export const WrapperLanguage= styled.div`
  padding: 0.3rem 0.6rem;
  background-color: #E38F16;
  border-radius: 10px;
  font-weight: bold;
`

export const WrapperGenre= styled.div`
  padding: 0.3rem 0.6rem;
  background-color: #1D75ED;
  border-radius: 10px;
  font-weight: bold;
`
