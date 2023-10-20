import 'bootstrap/dist/css/bootstrap.min.css';


function Button() {
    return (
      <div>
        {/* Button Group */}
        <div>
          <div className="row justify-content-end pt-3">
            <div className="col-auto pe-0" data-bs-toggle="collapse" data-bs-target="#weekOne, #weekTwo, #weekThree">
              <button type="button" className="btn btn-secondary btn-opacity-25">Collapse All</button>
            </div>
            <div className="col-auto pe-0">
              <button type="button" className="btn btn-secondary">View program</button>
            </div>
            <div className="col-auto pe-0 dropdown">
              <button className="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton" data-bs-toggle="dropdown" aria-expanded="false">
                <i className="fa-regular fa-circle-check me-1 text-success"></i>Publish All
              </button>
              <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton">
                <li><a className="dropdown-item" href="#">Publish All modules and items</a></li>
                <li><a className="dropdown-item" href="#">Publish modules only</a></li>
                <li><a className="dropdown-item" href="#">UnPublish All</a></li>
              </ul>
            </div>
            <div className="col-auto pe-0">
              <button type="button" className="btn btn-danger"><i className="fa-solid fa-plus me-1"></i>Module</button>
            </div>
            <div className="col-auto pe-2">
              <button type="button" className="btn btn-light border border-secondary-subtle"><i className="fa-solid fa-ellipsis-vertical"></i></button>
            </div>
          </div>
        </div>
        <hr />
      </div>
    );
  }

    export default Button;
  