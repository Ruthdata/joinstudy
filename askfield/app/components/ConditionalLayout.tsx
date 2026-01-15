'use client';

import { usePathname } from 'next/navigation';
import NavbarHome from './Navbar/NavbarHome';
import FooterHome from './Footer/FooterHome';

export default function ConditionalLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();
  
  // Routes where we don't want to show navbar/footer
  const hiddenLayoutRoutes = [
    '/dashboard/participant',
    '/dashboard/contributor',
    '/dashboard', // if you have a base dashboard route
  ];
  
  // Check if current path starts with any of the hidden routes
  const shouldHideLayout = hiddenLayoutRoutes.some(route => 
    pathname.startsWith(route)
  );

  if (shouldHideLayout) {
    return <>{children}</>;
  }

  return (
    <>
      <NavbarHome />
      {children}
      <FooterHome />
    </>
  );
}