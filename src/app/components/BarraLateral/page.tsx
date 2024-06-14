
import { Nav } from 'react-bootstrap';

function BarraLateral() {
  return (
    <Nav defaultActiveKey="/home" className="flex-column bg-light vh-100 p-3">
      <Nav.Link></Nav.Link>
      <Nav.Link eventKey="link-1">Link</Nav.Link>
      <Nav.Link eventKey="link-2">Another Link</Nav.Link>
    </Nav>
  );
}

export default BarraLateral;
