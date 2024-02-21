import { useSelector } from "react-redux"

export default function SPWelcome (){
  const mystate = useSelector((state) => state.logged)
  
    return (
        <div>
          {/* <p> Logged in : {mystate.loggedIn.toString()} </p> */}
            <nav class="navbar navbar-expand-md bg-dark sticky-top border-bottom" data-bs-theme="dark">
  <div class="container">
    <a class="navbar-brand d-md-none" href="#">
      <svg class="bi" width="24" height="24"></svg>
      Aperture
    </a>
    <button class="navbar-toggler" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvas" aria-controls="#offcanvas" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="offcanvas offcanvas-end" tabindex="-1" id="#offcanvas" aria-labelledby="#offcanvasLabel">
      <div class="offcanvas-header">
        <h5 class="offcanvas-title" id="#offcanvasLabel">Aperture</h5>
        <button type="button" class="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
      </div>
      <div class="offcanvas-body">
        <ul class="navbar-nav flex-grow-1 justify-content-between">
          <li class="nav-item"><a class="nav-link" href="#">
            <svg class="bi" width="24" height="24"></svg>
          </a></li>
          <li class="nav-item"><a class="nav-link" href="/addservice">Add Services</a></li>
          <li class="nav-item"><a class="nav-link" href="#">Order Status</a></li>
          <li class="nav-item"><a class="nav-link" href="/addlabour">Add Labour</a></li>
          <li class="nav-item"><a class="nav-link" href="#">Edit Profile</a></li>
          <li class="nav-item"><a class="nav-link" href="/logout">Logout</a></li>
          <li class="nav-item"><a class="nav-link" href="#">Contact us?</a></li>
          <li class="nav-item"><a class="nav-link" href="#">
            <svg class="bi" width="24" height="24"></svg>
          </a></li>
        </ul>
      </div>
    </div>
  </div>
</nav>

<div class="position-relative overflow-hidden p-3 p-md-5 m-md-3 text-center bg-body-tertiary">
    <div class="col-md-6 p-lg-5 mx-auto my-5">
      <h1 class="display-5 fw-bold">Welcome To Home Glow Services</h1>
      <h3 class="fw-normal text-muted mb-3">Thank you for Approching us</h3>
      <div class="d-flex gap-3 justify-content-center lead fw-normal">
        <a class="icon-link" href="#">
          Learn more
          <svg class="bi"><use ></use></svg>
        </a>
        <a class="icon-link" href="#">

          <svg class="bi"><use ></use></svg>
        </a>
      </div>
    </div>
    <div class="product-device shadow-sm d-none d-md-block"></div>
    <div class="product-device product-device-2 shadow-sm d-none d-md-block"></div>
  </div>
            
        </div>
    )
}