import React from 'react';

const Navbar: React.FC = () => {
  return (
    <nav>
      <a href="/">Fintech Frontier</a>
      <ul>
        <li><a href="/dashboard">Dashboard</a></li>
        <li><a href="/profile">Profile</a></li>
        <li><a href="/payments">Payments</a></li>
      </ul>
    </nav>
  );
};

export default Navbar;
