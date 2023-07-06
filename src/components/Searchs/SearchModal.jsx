import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Offcanvas from 'react-bootstrap/Offcanvas';

function SearchModal() {
  const [show, setShow] = useState(false);

  const handleCloseTop = () => setShow(false);
  const handleShowTop = () => setShow(true);

  return (
    <>
      <Button variant="white" onClick={handleShowTop} >
        <div id="search-btn" className="fas fa-search"></div>
      </Button>
      <Offcanvas show={show} onHide={handleCloseTop} placement="top">
        <Offcanvas.Header closeButton>
          <Offcanvas.Title>
            <div className="input-group">
              <input
                type="search"
                className="form-control rounded"
                placeholder="Search"
                aria-label="Search"
                aria-describedby="search-addon"
              />
              <button type="button" className="btn btn-outline-primary">
                search
              </button>
            </div>
          </Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
          Some text as placeholder. In real life you can have the elements you
          have chosen. Like, text, images, lists, etc.
        </Offcanvas.Body>
      </Offcanvas>
    </>
  );
}

export default SearchModal;