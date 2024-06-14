
import { Table } from 'react-bootstrap';

function Tabela() {
  return (
    <Table striped bordered hover>
      <thead>
        <tr>
          <th>#</th>
          <th>Nome da empresa:</th>
          <th>Quantidade de outdoors:</th>
          <th>CNPJ da empresa:</th>
          <th>Número de acessos no QRCODE: </th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>1</td>
          <td>McDonalds</td>
          <td>4</td>
          <td>2.591.651/0001-43</td>
          <td>210</td>
        </tr>
        <tr>
          <td>2</td>
          <td>GGE</td>
          <td>2</td>
          <td>01.934.404/0002-04</td>
          <td>130</td>
        </tr>
        <tr>
          <td>3</td>
          <td>Carajás</td>
          <td>1</td>
          <td>03.656.804/0024-28</td>
          <td>150</td>
        </tr>
      </tbody>
    </Table>
  );
}

export default Tabela;
