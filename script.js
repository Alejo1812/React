document.getElementById("navbar-container").innerHTML = `
  <nav class="navbar navbar-expand-lg navbar-light bg-light">
    <a class="navbar-brand" href="#">Tu E-Commerce</a>
    <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarNav">
      <ul class="navbar-nav">
        <li class="nav-item active">
          <a class="nav-link" href="#">Inicio</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#">Categoría 1</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#">Categoría 2</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#">Categoría 3</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#">Categoría 4</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#">Categoría 5</a>
        </li>
      </ul>
    </div>
  </nav>
`;

document.getElementById("cart-widget-container").innerHTML = `
  <button class="btn btn-primary">
    Carrito <span class="badge badge-light">5</span>
  </button>
`;
