import Link from "next/link";
import { useRouter } from "next/router";
import { PropsWithChildren } from "react";
import { Bounded } from "./Bounded";

export const Navigation = () => {
  return (
    <Bounded
      as="nav"
      size="widest"
      noYPadding
      innerClassName="mx-auto flex justify-between py-4"
    >
      <div className="font-sans text-lg font-semibold tracking-tighter text-slate-800">
        <Link href="/">Christian Lebeck</Link>
      </div>

      <div className="flex gap-10">
        <NavItem href="/">About</NavItem>
        {/* <NavItem href="/articles">Articles</NavItem> */}
        <NavItem href="/contact">Contact</NavItem>
      </div>
    </Bounded>
  );
};

interface NavItemProps extends PropsWithChildren {
  href: string;
}

const NavItem: React.FC<NavItemProps> = ({ href, children }) => {
  const { pathname } = useRouter();
  return (
    <div className={pathname === href ? "underline underline-offset-4" : ""}>
      <Link href={href}>{children}</Link>
    </div>
  );
};
