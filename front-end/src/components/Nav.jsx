// Nav.jsx
import React from 'react';
import { Link } from 'react-router-dom';

function Nav({ user, setUser }) {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <div className="container-fluid">
        <Link className="navbar-brand" to="/">Home</Link>
        <div className="collapse navbar-collapse">
          <ul className="navbar-nav ms-auto"> {/* Changed ml-auto to ms-auto for right alignment */}
            {user ? (
              <>
                {user.role === 'admin' && (
                  <li className="nav-item">
                    <Link className="nav-link" to="/admin">Admin Dashboard</Link>
                  </li>
                )}
                {user.role === 'user' && (
                  <li className="nav-item">
                    <Link className="nav-link" to="/user">User Dashboard</Link>
                  </li>
                )}
                <li className="nav-item">
                  <button className="btn btn-danger" onClick={() => setUser(null)}>
                    Logout
                  </button>
                </li>
              </>
            ) : (
              <li className="nav-item">
                <Link className="nav-link" to="/login">Login</Link>
              </li>
            )}
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Nav;
