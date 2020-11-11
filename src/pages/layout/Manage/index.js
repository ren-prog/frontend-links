const Layout = ({ children }) => {
  return (
    <div className="layout">
      <nav className="navbar navbar-expand-lg bg-primary text-align">
        <div className="container d-flex w-100 justify-content-between ">
          <div>
            <span>Volta</span>
          </div>
          <div className="text-center">
            <strong>Links</strong>
          </div>
          <div>Exit</div>
        </div>
      </nav>
      <div className="container">{children}</div>
    </div>
  );
};

export default Layout;
