import { Link } from "react-router-dom";

export default function Header() {
  return (
    <div className="container">
      <nav className="navbar navbar-expand-lg navbar-light bg-light ">
        <div class="container-fluid">
          <Link class="navbar-brand" to='#'>Navbar</Link>
          <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav me-auto mb-2 mb-lg-0">
              <li class="nav-item">
                <Link class="nav-link active" aria-current="page" to="login">Login</Link>
              </li>
              <li class="nav-item">
                <Link class="nav-link active" aria-current="page" to="about">About</Link>
              </li>
              <li class="nav-item">
                <Link class="nav-link active" aria-current="page" to="category"> Category</Link>
              </li>
              <li class="nav-item">
                <Link class="nav-link active" aria-current="page" to="contact"> Contact</Link>
              </li>
              <li class="nav-item">
                <Link class="nav-link active" aria-current="page" to="Api">Api Example</Link>
              </li>
              <li class="nav-item">
                <Link class="nav-link active" aria-current="page" to="userapi">User Api</Link>
              </li>
              <li class="nav-item">
                <Link class="nav-link active" aria-current="page" to="userpost">User Posts</Link>
              </li>
              {/* <li class="nav-item">
                <Link class="nav-link active" aria-current="page" to="about">Categories</Link>
              </li> */}


              <li class="nav-item">
                <a class="nav-link disabled" href="#" tabindex="-1" aria-disabled="true">Disabled</a>
              </li>
            </ul>
            <form class="d-flex">
              <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
              <button class="btn btn-outline-success" type="submit">Search</button>
            </form>
          </div>
        </div>
      </nav>
    </div>

  )
}