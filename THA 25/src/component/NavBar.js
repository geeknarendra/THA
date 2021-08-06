export default function NavBar() {
    return (
        <nav class="navbar navbar-expand-lg navbar-dark bg-dark">

            <div class="container-fluid">
                <a class="navbar-brand fs-1 fw-bolder" href="#">Tycoon</a>
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse mx-5" id="navbarSupportedContent">
                    <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                        <li class="nav-item mx-4 fs-4" >
                            <a class="nav-link active" aria-current="page" href="#">Home</a>
                        </li>
                        <li class="nav-item mx-4 fs-4">
                            <a class="nav-link active" aria-current="page" href="#">About</a>
                        </li>
                        <li class="nav-item mx-4 fs-4">
                            <a class="nav-link active" aria-current="page" href="#">Contact</a>
                        </li>



                    </ul>
                    <form class="d-flex ">
                        <input class="form-control me-2 " type="search" placeholder="Search" aria-label="Search" />
                        <button class="btn btn-outline-success " type="submit">Search</button>
                    </form>
                </div>
            </div>
        </nav>
    )
}