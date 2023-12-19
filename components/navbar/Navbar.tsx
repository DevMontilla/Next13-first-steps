// const temporalAsync = () => {
//   return new Promise((resolve) => {
//     setTimeout(() => {
//       resolve(true);
//     }, 2000);
//   });
// };

import { HomeIcon } from "@primer/octicons-react";
import Link from "next/link";
import { ActiveLink } from "..";


const navItems = [
    { text: 'About', path: '/about' },
    { text: 'Pricing', path: '/pricing' },
    { text: 'Contact', path: '/contact' },
]

export const Navbar = () => {
  //   await temporalAsync();

  return (
    <nav className="flex bg-blue-800 bg-opacity-30 p-2 m-2 rounded">
      <Link href="/" className="flex items-center">
        <HomeIcon className="mr-2"/>
        <span>Home</span>
      </Link>

      <div className="flex flex-1"></div>

{
    navItems.map(item=>(
      <ActiveLink key={item.text} {...item} />
    ))
}
      
    </nav>
  );
};
