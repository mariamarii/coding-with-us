"use client";
import React, { forwardRef } from 'react';
import Link from 'next/link';

const ListItem = forwardRef<
  HTMLAnchorElement,
  { href: string; title: string; children: React.ReactNode }
>(({ href, title, children }, ref) => (
  <li>
    <Link
      href={href}
      ref={ref}
      className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
    >
      <div className="text-sm font-medium leading-none">{title}</div>
      <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
        {children}
      </p>
    </Link>
  </li>
));
ListItem.displayName = 'ListItem';

export default ListItem;