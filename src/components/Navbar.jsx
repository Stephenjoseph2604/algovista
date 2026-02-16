import { motion } from "framer-motion";
import { Code2 } from "lucide-react";
import { NavLink } from "react-router-dom";

const links = [
  { name: "Home", path: "/" },
  { name: "Topics", path: "/topics" },
  { name: "Roadmap", path: "/roadmap" },
  { name: "About", path: "/about" }
];

export default function Navbar() {
  return (
    <motion.nav
      initial={{ y: -40, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      className="sticky top-0 z-50 bg-primary border-b border-muted"
    >
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        
        {/* Logo */}
        <div className="flex items-center gap-2">
          <Code2 className="text-surface" size={28} />
          <span className="text-xl font-bold tracking-wide">
            AlgoVista
          </span>
        </div>

        {/* Links */}
        <div className="hidden md:flex gap-8">
          {links.map(link => (
            <NavLink
              key={link.name}
              to={link.path}
              className={({ isActive }) =>
                `text-sm tracking-wide transition ${
                  isActive
                    ? "text-surface border-b-2 border-surface"
                    : "text-secondary hover:text-surface"
                }`
              }
            >
              {link.name}
            </NavLink>
          ))}
        </div>
      </div>
    </motion.nav>
  );
}
