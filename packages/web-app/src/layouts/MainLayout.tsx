import { Outlet } from 'react-router-dom';

const MainLayout = () => {
  return (
    <div>
      <header style={{ padding: '10px', backgroundColor: '#333', color: 'white' }}>
        <h1>App Header</h1>
      </header>
      
      <nav>{/* Your <Link> or <NavLink> components go here */}</nav>

      <main style={{ padding: '20px' }}>
        <Outlet />
      </main>

      <footer style={{ padding: '10px', textAlign: 'center' }}>
        &copy; {new Date().getFullYear()} Origin App
      </footer>
    </div>
  );
};

export default MainLayout;