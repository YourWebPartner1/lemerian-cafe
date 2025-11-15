import { NavLink as RouterNavLink, NavLinkProps } from "react-router-dom";
import { forwardRef } from "react";
import { cn } from "@/lib/utils";
<<<<<<< HEAD
=======
import { gtagEvent } from "@/main"; // ⭐ Google event tracker added
>>>>>>> 67fe7313bdaee1a1ebb4fdc684c358f504de906a

interface NavLinkCompatProps extends Omit<NavLinkProps, "className"> {
  className?: string;
  activeClassName?: string;
  pendingClassName?: string;
}

const NavLink = forwardRef<HTMLAnchorElement, NavLinkCompatProps>(
  ({ className, activeClassName, pendingClassName, to, ...props }, ref) => {
    return (
      <RouterNavLink
        ref={ref}
        to={to}
<<<<<<< HEAD
=======
        onClick={() => {
          // ⭐ Track NavLink Click
          gtagEvent("navlink_click", {
            to: typeof to === "string" ? to : "dynamic_route",
            location: "NavLinkComponent",
          });
        }}
>>>>>>> 67fe7313bdaee1a1ebb4fdc684c358f504de906a
        className={({ isActive, isPending }) =>
          cn(className, isActive && activeClassName, isPending && pendingClassName)
        }
        {...props}
      />
    );
<<<<<<< HEAD
  },
=======
  }
>>>>>>> 67fe7313bdaee1a1ebb4fdc684c358f504de906a
);

NavLink.displayName = "NavLink";

export { NavLink };
