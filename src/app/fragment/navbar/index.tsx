"use client"

import { Wrapper, ImageLogo, Navlist, NavLink } from "./style";
import Image from "next/image";
import SearchInput from "components/input/search";
import { navbarRoutes } from "helpers/routes/navbarRoutes";

export default function Navbar () {
  return (
    <Wrapper>
      <ImageLogo>
        <Image
          src="/logo.png"
          alt="Picture of the author"
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          priority={true}
        />
      </ImageLogo>

      <Navlist>
        <SearchInput placeHolder="Search your movie" />
        {navbarRoutes &&
          navbarRoutes.map((route) => {
            return <NavLink key={route.id} href={route.url}>{route.title}</NavLink>;
          })}
      </Navlist>
    </Wrapper>
  );
};

