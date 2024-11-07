import React from "react";
import { Table } from "@chakra-ui/react";

function MyApp27(props) {
  return (
    <div>
      <h3>chakra ui 테이블</h3>
      <h3>기본 테이블</h3>
      <Table.Root striped>
        <Table.Header>
          <Table.Row bg="green.500" color="white">
            <Table.ColumnHeader>번호</Table.ColumnHeader>
            <Table.ColumnHeader>작성자</Table.ColumnHeader>
            <Table.ColumnHeader>제목</Table.ColumnHeader>
            <Table.ColumnHeader>읽ㄱ</Table.ColumnHeader>
            <Table.ColumnHeader>날짜</Table.ColumnHeader>
          </Table.Row>
        </Table.Header>
        <Table.Body>
          <Table.Row>
            <Table.Cell>1</Table.Cell>
            <Table.Cell>나야나</Table.Cell>
            <Table.Cell>기묭수</Table.Cell>
            <Table.Cell>싫다</Table.Cell>
            <Table.Cell>비밀임</Table.Cell>
          </Table.Row>
          <Table.Row>
            <Table.Cell>1</Table.Cell>
            <Table.Cell>나야나</Table.Cell>
            <Table.Cell>기묭수</Table.Cell>
            <Table.Cell>싫다</Table.Cell>
            <Table.Cell>비밀임</Table.Cell>
          </Table.Row>
          <Table.Row>
            <Table.Cell>1</Table.Cell>
            <Table.Cell>나야나</Table.Cell>
            <Table.Cell>기묭수</Table.Cell>
            <Table.Cell>싫다</Table.Cell>
            <Table.Cell>비밀임</Table.Cell>
          </Table.Row>
          <Table.Row>
            <Table.Cell>1</Table.Cell>
            <Table.Cell>나야나</Table.Cell>
            <Table.Cell>기묭수</Table.Cell>
            <Table.Cell>싫다</Table.Cell>
            <Table.Cell>비밀임</Table.Cell>
          </Table.Row>
          <Table.Row></Table.Row>
        </Table.Body>
      </Table.Root>
      <table>
        <thead>
          <tr>
            <th>Lorem.</th>
            <th>Deserunt.</th>
            <th>Maxime!</th>
            <th>Reiciendis.</th>
            <th>Error?</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Lorem.</td>
            <td>Cum.</td>
            <td>Adipisci?</td>
            <td>Vitae!</td>
            <td>Aliquid.</td>
          </tr>
          <tr>
            <td>Lorem.</td>
            <td>Ab?</td>
            <td>Nemo.</td>
            <td>Vitae!</td>
            <td>Minima!</td>
          </tr>
          <tr>
            <td>Lorem.</td>
            <td>Praesentium?</td>
            <td>Voluptatum.</td>
            <td>Doloribus.</td>
            <td>Ea!</td>
          </tr>
          <tr>
            <td>Lorem.</td>
            <td>Cumque?</td>
            <td>Placeat.</td>
            <td>Sit?</td>
            <td>Quae.</td>
          </tr>
          <tr>
            <td>Lorem.</td>
            <td>Sunt.</td>
            <td>Nisi.</td>
            <td>Accusantium.</td>
            <td>Molestiae?</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

export default MyApp27;
