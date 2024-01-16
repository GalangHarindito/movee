"use client";

import Link from "next/link";
import styled from "styled-components";
import { devices } from "utils/media";

export const Wrapper = styled.section`
  height: 5rem;
  background-color: whitesmoke;
  width: 100%;
  position: relative;
  display: grid;
  grid-template-columns: 0.7fr 1fr;
  grid-template-rows: 1fr;
  margin: 0 auto;
  padding: 0rem 2rem;
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
  justify-self: end;
  align-self: center;

  @media only screen and ${devices.xl} {
    justify-self: center;
  }
`;

export const NavLink = styled(Link)`
  font-weight: 500;
  font-size: 1.1rem;
  display: flex;
  align-items: center;
  padding: 1rem 2rem;
`;

export const SearchBox = styled.div`
  align-self: center;
`;

export const NavbarMenu = styled.div<{ onToggle?: boolean }>`
  display: ${(props) => (props.onToggle ? "block" : "none")};

  &.mobile {
    background-color: whitesmoke;
    position: absolute;
    top: 5rem;
    right: 0rem;
    inset: 5rem 0 auto auto;
    transition: inset 1s ease-out;
    z-index: 2;
  }

  @media only screen and ${devices.xl} {
    display: flex;
    gap: 2rem;
  }
`;

export const NavbarButton = styled.div`
  @media only screen and ${devices.xl} {
    display: none;
  }
`;
