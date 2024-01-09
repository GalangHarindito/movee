'use client'

import Link from "next/link";
import styled from "styled-components";

export const Wrapper = styled.section`
  height: 5rem;
  background-color: whitesmoke;
  width: 100%;
  position: relative;
  display: grid;
  grid-template-columns: 0.7fr 1fr;
  grid-template-rows: 1fr;
  margin: 0 auto;
`;

export const ImageLogo = styled.div`
  position: relative;
  width: 10rem;
  height: 5rem;
  justify-self: center;
  align-self: center;
`;

export const Navlist = styled.div`
  display: flex;
  gap: 3rem;
  justify-self: left;
  align-self: center;
`;

export const NavLink = styled(Link)`
  font-weight: 500;
  font-size: 1.1rem;
  display: flex;
  align-items: center;
`;
