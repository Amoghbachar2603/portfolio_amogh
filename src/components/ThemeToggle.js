import React from 'react';
import { useTheme } from '../theme';

const ThemeToggle = () => {
  const { dark, toggleTheme } = useTheme();

  return (
    <button
      className="btn btn-outline-light"
      onClick={toggleTheme}
      aria-label="Toggle theme"
      type="button"
    >
      {dark ? <i className="bi bi-sun"></i> : <i className="bi bi-moon"></i>}
    </button>
  );
};

export default ThemeToggle;