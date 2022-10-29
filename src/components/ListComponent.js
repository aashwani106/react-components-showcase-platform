import React from 'react'

const ListComponent = () => {
  return (
    <div>

      {/*Main layout*/}
      <main className="my-5">
        <div className="container">
          {/*Section: Content*/}
          <section className="text-center">
            <h4 className="mb-5"><strong>Latest React Components</strong></h4>
            <div className="row">
              <div className="col-lg-6 mb-4">
                <div className="card">
                  <div className="bg-image hover-overlay ripple" data-mdb-ripple-color="light">
                    <img src="https://mdbootstrap.com/img/new/standard/nature/184.jpg" className="img-fluid" />
                    <a href="#!">
                      <div className="mask" style={{ backgroundColor: 'rgba(251, 251, 251, 0.15)' }} />
                    </a>
                  </div>
                  <div className="card-body">
                    <h5 className="card-title">Component title</h5>
                    <p className="card-text">
                      Some quick example text to build on the card title and make up the bulk of the
                      card's content.
                    </p>
                    <a href="#!" className="btn btn-primary">Download</a>
                  </div>
                </div>
              </div>
              <div className="col-lg-6 mb-4">
                <div className="card">
                  <div className="bg-image hover-overlay ripple" data-mdb-ripple-color="light">
                    <img src="https://mdbootstrap.com/img/new/standard/nature/023.jpg" className="img-fluid" />
                    <a href="#!">
                      <div className="mask" style={{ backgroundColor: 'rgba(251, 251, 251, 0.15)' }} />
                    </a>
                  </div>
                  <div className="card-body">
                    <h5 className="card-title">Component title</h5>
                    <p className="card-text">
                      Some quick example text to build on the card title and make up the bulk of the
                      card's content.
                    </p>
                    <a href="#!" className="btn btn-primary">Download</a>
                  </div>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-lg-6 mb-4">
                <div className="card">
                  <div className="bg-image hover-overlay ripple" data-mdb-ripple-color="light">
                    <img src="https://mdbootstrap.com/img/new/standard/nature/002.jpg" className="img-fluid" />
                    <a href="#!">
                      <div className="mask" style={{ backgroundColor: 'rgba(251, 251, 251, 0.15)' }} />
                    </a>
                  </div>
                  <div className="card-body">
                    <h5 className="card-title">Component title</h5>
                    <p className="card-text">
                      Some quick example text to build on the card title and make up the bulk of the
                      card's content.
                    </p>
                    <a href="#!" className="btn btn-primary">Download</a>
                  </div>
                </div>
              </div>
              <div className="col-lg-6 mb-4">
                <div className="card">
                  <div className="bg-image hover-overlay ripple" data-mdb-ripple-color="light">
                    <img src="https://mdbootstrap.com/img/new/standard/nature/022.jpg" className="img-fluid" />
                    <a href="#!">
                      <div className="mask" style={{ backgroundColor: 'rgba(251, 251, 251, 0.15)' }} />
                    </a>
                  </div>
                  <div className="card-body">
                    <h5 className="card-title">Component title</h5>
                    <p className="card-text">
                      Some quick example text to build on the card title and make up the bulk of the
                      card's content.
                    </p>
                    <a href="#!" className="btn btn-primary">Download</a>
                  </div>
                </div>
              </div>
            </div>
          </section>
          {/*Section: Content*/}
          {/* Pagination */}
          <nav className="my-4" aria-label="...">
            <ul className="pagination pagination-circle justify-content-center">
              <li className="page-item">
                <a className="page-link" href="#" tabIndex={-1} aria-disabled="true">Previous</a>
              </li>
              <li className="page-item"><a className="page-link" href="#">1</a></li>
              <li className="page-item active" aria-current="page">
                <a className="page-link" href="#">2 <span className="sr-only">(current)</span></a>
              </li>
              <li className="page-item"><a className="page-link" href="#">3</a></li>
              <li className="page-item">
                <a className="page-link" href="#">Next</a>
              </li>
            </ul>
          </nav>
        </div>
      </main>
      {/*Main layout*/}
      {/*Footer*/}
      <footer className="bg-light text-lg-start">

        <hr className="m-0" />
        <div className="text-center py-4 align-items-center">
          <p>Follow Us on social media</p>
          <a href="" className="btn btn-primary m-1" role="button" rel="nofollow" target="_blank">
            <i className="fab fa-youtube" />
          </a>
          <a href="" className="btn btn-primary m-1" role="button" rel="nofollow" target="_blank">
            <i className="fab fa-facebook-f" />
          </a>
          <a href="" className="btn btn-primary m-1" role="button" rel="nofollow" target="_blank">
            <i className="fab fa-twitter" />
          </a>
          <a href="" className="btn btn-primary m-1" role="button" rel="nofollow" target="_blank">
            <i className="fab fa-github" />
          </a>
        </div>
        {/* Copyright */}
        <div className="text-center p-3" style={{ backgroundColor: 'rgba(0, 0, 0, 0.2)' }}>
          © 2020 Copyright:
          <a className="text-dark" href="">thekalyugh.com</a>
        </div>
        {/* Copyright */}
      </footer>
      {/*Footer*/}
    </div>
  )
}

export default ListComponent