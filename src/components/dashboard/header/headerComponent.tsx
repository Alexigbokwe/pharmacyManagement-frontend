import React from "react";

const HeaderComponent = ({ router }: any) => {
  const handleNavigation = () => {
    localStorage.removeItem("userToken");
    router.push("/");
  };
  return (
    <header className="navbar navbar-dark sticky-top bg-dark flex-md-nowrap p-0 shadow">
      <a className="navbar-brand col-md-3 col-lg-2 me-0 px-3" href="#">
        Group 12A
      </a>
      <button className="navbar-toggler position-absolute d-md-none collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#sidebarMenu" aria-controls="sidebarMenu" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
      <input className="form-control form-control-dark w-100" type="text" placeholder="Search" aria-label="Search" />
      <div className="navbar-nav">
        <div className="nav-item text-nowrap">
          <a className="nav-link px-3" type="button" onClick={handleNavigation}>
            Sign out
          </a>
        </div>
      </div>
    </header>
  );
};

export default HeaderComponent;
