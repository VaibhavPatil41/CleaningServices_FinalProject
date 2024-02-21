
export default function Home (){
    return (
        <div>
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
          <li class="nav-item"><a class="nav-link" href="/Login" onClick={(e)=>{"/Login"}}>Login</a></li>
          <li class="nav-item"><a class="nav-link" href="#"></a></li>
          <li class="nav-item"><a class="nav-link" href="/regsp">Register as Service Provider</a></li>
          <li class="nav-item"><a class="nav-link" href="/regcus">Register as Customer</a></li>
          <li class="nav-item"><a class="nav-link" href="#"></a></li>
          <li class="nav-item"><a class="nav-link" href="/Contacts">Contact us?</a></li>
          
          <li class="nav-item"><a class="nav-link" href="#">
            <svg class="bi" width="24" height="24"></svg>
          </a></li>
        </ul>
        
      </div>
    </div>
  </div>
</nav>

<div class="pricing-header p-3 pb-md-4 mx-auto text-center">
      <h1 class="display-4 fw-normal">Welcome To Home Glow Services</h1>
    </div>
    <br/>
    <br/>
<div class="row row-cols-1 row-cols-md-3 mb-3 text-center">
      <div class="col">
        <div class="card mb-4 rounded-3 shadow-sm">
          <div class="card-header py-3">
            <h4 class="my-0 fw-normal">Plan</h4>
          </div>
          <div class="card-body">
            <h1 class="card-title pricing-card-title"><small class="text-muted fw-light"></small></h1>
            <ul class="list-unstyled mt-3 mb-4">
              
            </ul>
            <button type="button" class="w-100 btn btn-lg btn-outline-primary">Book Now</button>
          </div>
        </div>
      </div>
      <div class="col">
        <div class="card mb-4 rounded-3 shadow-sm">
          <div class="card-header py-3">
            <h4 class="my-0 fw-normal">Plan</h4>
          </div>
          <div class="card-body">
            <h1 class="card-title pricing-card-title"><small class="text-muted fw-light"></small></h1>
            <ul class="list-unstyled mt-3 mb-4">
              
            </ul>
            <button type="button" class="w-100 btn btn-lg btn-outline-primary">Book Now</button>
          </div>
        </div>
      </div>
      <div class="col">
      <div class="card mb-4 rounded-3 shadow-sm">
          <div class="card-header py-3">
            <h4 class="my-0 fw-normal">Plan</h4>
          </div>
          <div class="card-body">
            <h1 class="card-title pricing-card-title"><small class="text-muted fw-light"></small></h1>
            <ul class="list-unstyled mt-3 mb-4">
              
            </ul>
            <button type="button" class="w-100 btn btn-lg btn-outline-primary">Book Now</button>
          </div>
        </div>
      </div>
  </div>


  <div class="row row-cols-1 row-cols-md-3 mb-3 text-center">
      <div class="col">
        <div class="card mb-4 rounded-3 shadow-sm">
          <div class="card-header py-3">
            <h4 class="my-0 fw-normal">Plan</h4>
          </div>
          <div class="card-body">
            <h1 class="card-title pricing-card-title"><small class="text-muted fw-light"></small></h1>
            <ul class="list-unstyled mt-3 mb-4">
              
            </ul>
            <button type="button" class="w-100 btn btn-lg btn-outline-primary">Book Now</button>
          </div>
        </div>
      </div>
      <div class="col">
        <div class="card mb-4 rounded-3 shadow-sm">
          <div class="card-header py-3">
            <h4 class="my-0 fw-normal">Plan</h4>
          </div>
          <div class="card-body">
            <h1 class="card-title pricing-card-title"><small class="text-muted fw-light"></small></h1>
            <ul class="list-unstyled mt-3 mb-4">
              
            </ul>
            <button type="button" class="w-100 btn btn-lg btn-outline-primary">Book Now</button>
          </div>
        </div>
      </div>
      <div class="col">
      <div class="card mb-4 rounded-3 shadow-sm">
          <div class="card-header py-3">
            <h4 class="my-0 fw-normal">Plan</h4>
          </div>
          <div class="card-body">
            <h1 class="card-title pricing-card-title"><small class="text-muted fw-light"></small></h1>
            <ul class="list-unstyled mt-3 mb-4">
              
            </ul>
            <button type="button" class="w-100 btn btn-lg btn-outline-primary">Book Now</button>
          </div>
        </div>
      </div>
  </div>
            
        </div>
    )
}