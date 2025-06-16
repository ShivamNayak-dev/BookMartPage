import React from "react";
import "../styles/Navbar.css";
import UserProfile from '../components/UserProfile';

interface Props {
  toggleSidebar: () => void;
  user: {
    name?: string;
    email?: string;
  };
  
}

export default function Navbar({ toggleSidebar, user }: Props) {
  return (
    
    <nav className="navbar">
      <div className="hamburger" onClick={toggleSidebar}>
        ☰
      </div>
      <div className="brand">BookMart</div>
      <input type="text" className="search-bar" placeholder="Search books..." />
      <div className="user">
        Welcome {user.name || 'User'}
      </div>
      <div className="navbar-right">
        <UserProfile name={user.name || 'User'} email={user.email || ''} />
      </div>
    </nav>
  );
}
