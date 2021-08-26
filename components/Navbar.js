import Image from 'next/image'

const bigSquare = {
    height: "30px",
    minWidth: "30px",
    width: "30px"
}

const smallSquare = {
    height: "15px",
    minWidth: "15px",
    width: "15px"
}

export default function Home() {
  return (
    <nav className="nav navbar navbar-expand-xl navbar-light iq-navbar">
        <div className="container-fluid navbar-inner">
          <button data-trigger="navbar_main" className="d-xl-none btn btn-primary rounded-pill p-1 pt-0" type="button">
            <svg width="20px" height="20px" viewBox="0 0 24 24">
              <path fill="currentColor" d="M4,11V13H16L10.5,18.5L11.92,19.92L19.84,12L11.92,4.08L10.5,5.5L16,11H4Z"></path>
          </svg>
          </button>
          <div className="col-lg-2 col-lg-3 navbar-brand">
            <a href="../dashboard/index.html" className="d-flex">
                <svg width="30" className="" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <rect x="-0.757324" y="19.2427" width="28" height="4" rx="2" transform="rotate(-45 -0.757324 19.2427)" fill="currentColor"></rect>
                    <rect x="7.72803" y="27.728" width="28" height="4" rx="2" transform="rotate(-45 7.72803 27.728)" fill="currentColor"></rect>
                    <rect x="10.5366" y="16.3945" width="16" height="4" rx="2" transform="rotate(45 10.5366 16.3945)" fill="currentColor"></rect>
                    <rect x="10.5562" y="-0.556152" width="28" height="4" rx="2" transform="rotate(45 10.5562 -0.556152)" fill="currentColor"></rect>
                </svg>
                <h4 className="logo-title">Videothek</h4>
            </a>
          </div>
          <nav id="navbar_main" className="mobile-offcanvas nav navbar navbar-expand-xl hover-nav horizontal-nav mx-md-auto">
          <div className="container-fluid">
             <div className="offcanvas-header px-0">
                <div className="navbar-brand ms-0">
                   <svg width="30" className="" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
                       <rect x="-0.757324" y="19.2427" width="28" height="4" rx="2" transform="rotate(-45 -0.757324 19.2427)" fill="currentColor"></rect>
                       <rect x="7.72803" y="27.728" width="28" height="4" rx="2" transform="rotate(-45 7.72803 27.728)" fill="currentColor"></rect>
                       <rect x="10.5366" y="16.3945" width="16" height="4" rx="2" transform="rotate(45 10.5366 16.3945)" fill="currentColor"></rect>
                       <rect x="10.5562" y="-0.556152" width="28" height="4" rx="2" transform="rotate(45 10.5562 -0.556152)" fill="currentColor"></rect>
                   </svg>
                   <h4 className="logo-title">Videothek</h4>
                </div>
                <button className="btn-close float-end"></button>
             </div>
             <ul className="navbar-nav">
                <li className="nav-item"><a className="nav-link active" href="../dashboard/index-horizontal.html"> Home </a></li>
                <li className="nav-item"><a className="nav-link " href="../dashboard/index-dual-horizontal.html"> Meine Liste </a></li>
             </ul>
          </div>
          </nav>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
             <span className="navbar-toggler-icon">
                <span className="navbar-toggler-bar bar1 mt-2"></span>
                <span className="navbar-toggler-bar bar2"></span>
                <span className="navbar-toggler-bar bar3"></span>
              </span>    
          </button>
          <div className="collapse navbar-collapse col-md-2" id="navbarSupportedContent">
            <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
              <li className="nav-item dropdown">
                <a className="nav-link py-0 d-flex align-items-center" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                  <img src="images/avatars/01.png" alt="User-Profile" className="img-fluid avatar avatar-50 avatar-rounded" />
                  <div className="caption ms-3 ">
                      <h6 className="mb-0 caption-title">Björn Ebbrecht</h6>
                      <p className="mb-0 caption-sub-title">Basic</p>
                  </div>
                </a>
                <ul className="dropdown-menu dropdown-menu-end" aria-labelledby="navbarDropdown">
                  <li><a className="dropdown-item" href="../dashboard/app/user-profile.html">Profile</a></li>
                  <li><a className="dropdown-item" href="../dashboard/app/user-privacy-setting.html">Privacy Setting</a></li>
                  <li><hr className="dropdown-divider" /></li>
                  <li><a className="dropdown-item" href="../dashboard/auth/sign-in.html">Logout</a></li>
                </ul>
              </li>
            </ul>
          </div>
        </div>
      </nav>
  )
}
