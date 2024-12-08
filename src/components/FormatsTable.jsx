import styled from "styled-components";

function FormatsTable() {
  const TableWrapper = styled.div`
    width: 100%;
    max-width: 100%; /* Matches the width of the endpoints table */
    overflow-x: auto;
    margin-top: 20px; /* Matches the margin used in Endpoints */
  `;

  const Table = styled.table`
    width: 100%;
    border-collapse: collapse;
    text-align: left;
    background-color: white;
    color: black;
    font-size: 0.9rem; /* Matches font size in Endpoints */
    table-layout: auto; /* Consistent with Endpoints */
  `;

  const Thead = styled.thead`
    background-color: #6ab158;
    color: white;
  `;

  const Tbody = styled.tbody`
    & tr:nth-child(even) {
      background-color: #f9f9f9;
    }
    & tr:nth-child(odd) {
      background-color: #fff;
    }
  `;

  const Th = styled.th`
    padding: 10px;
    border: 1px solid #ddd;
  `;

  const Td = styled.td`
    padding: 10px;
    border: 1px solid #ddd;
    word-wrap: break-word;
    white-space: pre-wrap;
  `;

  const formats = [
    {
      title: "(1)",
      json: `{
    "id": Number,
    "recipeName": String,
    "servings": String,
    "instructions": String,
    "recipeIngredients": Array [
      {
        "id": Number,
        "ingredient": {
          "id": Number,
          "ingredientName": String
        },
        "amount": String
      }
    ]
  }`,
    },
    {
      title: "(2)",
      json: `{
    "id": Number,
    "ingredient": {
      "id": Number,
      "ingredientName": String
    },
    "amount": String
  }`,
    },
    {
      title: "(e1)",
      json: `{
  "status": 404,
  "msg": "No content found for this request"
}`,
    },
    {
      title: "(e2)",
      json: `{
  "status": 400,
  "msg": "Field 'xxx' is required"
}`,
    },
  ];

  return (
    <TableWrapper>
      <Table>
        <Thead>
          <tr>
            <Th>Title</Th>
            <Th>Format</Th>
          </tr>
        </Thead>
        <Tbody>
          {formats.map((format, index) => (
            <tr key={index}>
              <Td>{format.title}</Td>
              <Td>
                <pre>{format.json}</pre>
              </Td>
            </tr>
          ))}
        </Tbody>
      </Table>
    </TableWrapper>
  );
}

export default FormatsTable;
