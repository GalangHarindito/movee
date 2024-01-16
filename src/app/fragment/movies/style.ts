"use client";

import styled from "styled-components";
import { devices } from "utils/media";

export const Wrapper = styled.section`
  padding: 5rem 1rem;
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(17rem, 1fr));
  gap: 2rem;

  @media only screen and ${devices.lg && devices.md} {
    padding: 5rem 15rem;
  }

  @media only screen and ${devices.md} {
    padding: 5rem 10rem;
  }

`;

export const CardWarapper = styled.div`
  justify-self: center;
`;


