import React from 'react';
import { Link, Outlet, useLocation } from 'react-router-dom';

const MainLayout: React.FC = () => {
  const location = useLocation();

  return (
    <div className="flex h-screen w-full">
      {/* Sidebar */}
      <aside className="w-64 bg-base-200 p-4">
        <nav className="flex flex-col space-y-2">
          <Link
            to="/"
            className={`btn btn-ghost justify-start ${
              location.pathname === '/' ? 'btn-active' : ''
            }`}
          >
            Events
          </Link>
          <Link
            to="/create"
            className={`btn btn-ghost justify-start ${
              location.pathname === '/create' ? 'btn-active' : ''
            }`}
          >
            Create Event
          </Link>
          <Link
            to="/profile"
            className={`btn btn-ghost justify-start ${
              location.pathname === '/profile' ? 'btn-active' : ''
            }`}
          >
            My Profile
          </Link>
        </nav>
      </aside>

      {/* Main Content */}
      <main className="flex-1 p-4 overflow-y-auto">
        <Outlet />
      </main>
    </div>
  );
};

export default MainLayout;
