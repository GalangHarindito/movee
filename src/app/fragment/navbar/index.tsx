"use client"

import { Wrapper, ImageLogo, Navlist, NavLink, NavbarMenu, NavbarButton, SearchBox } from "./style";
import Image from "next/image";
import SearchInput from "components/input/search";
import { navbarRoutes } from "helpers/routes/navbarRoutes";
import { useState } from "react";
import { Squash as Hamburger } from "hamburger-react";
import { useRouter } from 'next/navigation'

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const router = useRouter();

  return (
    <Wrapper>
      <ImageLogo>
        <Image
          src="/logo.png"
          alt="Picture of the author"
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          priority={true}
          onClick={() => router.push('/')}
        />
      </ImageLogo>

      <Navlist>
        {/* <SearchBox>
          <SearchInput placeHolder="Search your movie" />
        </SearchBox> */}

        <NavbarButton>
          <Hamburger toggled={open} size={20} toggle={setOpen} />
        </NavbarButton>
        <NavbarMenu onToggle={open} className={open ? 'mobile' : ''} >
          {navbarRoutes &&
            navbarRoutes.map((route) => {
              return <NavLink key={route.id} href={route.url} className={open ? 'mobileList' : ''}>{route.title}</NavLink>;
            })}
        </NavbarMenu>

      </Navlist>
    </Wrapper>
  );
};

