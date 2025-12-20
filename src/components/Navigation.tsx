import { Link, useLocation } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { Leaf, Menu, X, Sun, Moon } from "lucide-react";
import { useEffect, useState } from "react";

const Navigation = () => {
  const location = useLocation();
  const [isOpen, setIsOpen] = useState(false);
  const [hidden, setHidden] = useState(false);
  const [dark, setDark] = useState(
    document.documentElement.classList.contains("dark")
  );

  const links = [
    { path: "/", label: "Home" },
    { path: "/about", label: "About" },
    { path: "/predict", label: "Predict" },
  ];

  /* ---------------- Auto close on route change ---------------- */
  useEffect(() => {
    setIsOpen(false);
  }, [location.pathname]);

  /* ---------------- ESC key support ---------------- */
  useEffect(() => {
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setIsOpen(false);
    };
    window.addEventListener("keydown", handleKey);
    return () => window.removeEventListener("keydown", handleKey);
  }, []);

  /* ---------------- Hide / show on scroll ---------------- */
  useEffect(() => {
    let lastScroll = window.scrollY;
    const onScroll = () => {
      const current = window.scrollY;
      setHidden(current > lastScroll && current > 80);
      lastScroll = current;
    };
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  /* ---------------- Dark mode toggle ---------------- */
  const toggleTheme = () => {
    document.documentElement.classList.toggle("dark");
    setDark(!dark);
  };

  return (
    <>
      {/* Backdrop overlay */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setIsOpen(false)}
            className="fixed inset-0 z-40 bg-black/40 backdrop-blur-sm md:hidden"
          />
        )}
      </AnimatePresence>

      <motion.nav
        initial={{ y: -20, opacity: 0 }}
        animate={{
          y: hidden ? -100 : 0,
          opacity: hidden ? 0 : 1,
        }}
        transition={{ duration: 0.3 }}
        className="fixed top-0 left-0 right-0 z-50 glass"
      >
        <div className="container mx-auto px-6 py-4 flex items-center justify-between">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2 group">
            <div className="w-10 h-10 rounded-xl bg-primary flex items-center justify-center shadow-soft group-hover:shadow-glow transition">
              <Leaf className="w-5 h-5 text-primary-foreground" />
            </div>
            <span className="font-bold text-xl">
              Fresh<span className="text-gradient">Sense</span>
            </span>
          </Link>

          {/* Desktop links */}
          <div className="hidden md:flex items-center gap-1">
            {links.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className="relative px-4 py-2 rounded-lg text-sm font-medium"
              >
                {location.pathname === link.path && (
                  <motion.div
                    layoutId="activeTab"
                    className="absolute inset-0 bg-secondary rounded-lg"
                    transition={{ type: "spring", bounce: 0.2 }}
                  />
                )}
                <span
                  className={`relative z-10 ${
                    location.pathname === link.path
                      ? "text-primary"
                      : "text-muted-foreground hover:text-foreground"
                  }`}
                >
                  {link.label}
                </span>
              </Link>
            ))}

            {/* Dark mode toggle */}
            <button
              onClick={toggleTheme}
              className="ml-3 p-2 rounded-lg hover:bg-secondary"
              aria-label="Toggle Theme"
            >
              {dark ? <Sun size={18} /> : <Moon size={18} />}
            </button>
          </div>

          {/* Mobile button */}
          <button
            onClick={() => setIsOpen(true)}
            className="md:hidden p-2 rounded-lg hover:bg-secondary"
            aria-label="Open Menu"
          >
            <Menu size={22} />
          </button>
        </div>
      </motion.nav>

      {/* Mobile slide-in menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.aside
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ type: "spring", stiffness: 260, damping: 25 }}
            className="fixed top-0 right-0 z-50 h-full w-72 bg-background shadow-xl p-6 md:hidden"
          >
            <div className="flex items-center justify-between mb-8">
              <span className="font-bold text-lg">Menu</span>
              <button
                onClick={() => setIsOpen(false)}
                aria-label="Close Menu"
              >
                <X />
              </button>
            </div>

            <nav className="flex flex-col gap-4">
              {links.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  className={`px-4 py-2 rounded-lg ${
                    location.pathname === link.path
                      ? "bg-secondary text-primary"
                      : "hover:bg-secondary/60"
                  }`}
                >
                  {link.label}
                </Link>
              ))}
            </nav>

            {/* Mobile dark toggle */}
            <button
              onClick={toggleTheme}
              className="mt-8 flex items-center gap-2 px-4 py-2 rounded-lg hover:bg-secondary"
            >
              {dark ? <Sun size={18} /> : <Moon size={18} />}
              <span>{dark ? "Light Mode" : "Dark Mode"}</span>
            </button>
          </motion.aside>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navigation;
