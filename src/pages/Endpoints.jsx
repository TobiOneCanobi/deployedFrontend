import styled from "styled-components";
import FormatsTable from "../components/FormatsTable";

function Endpoints() {
  const pageStyle = {
    background: "#f58a00",
    color: "white",
    minHeight: "100vh",
    padding: "20px",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
  };

  const paragraphStyle = {
    marginTop: "1rem",
    fontSize: "1rem",
    textAlign: "center",
    maxWidth: "600px",
  };

  const TableWrapper = styled.div`
    width: 100%;
    overflow-x: auto; /* Ensures that if necessary, horizontal scroll will appear */
    max-width: 100%; /* Adjust based on content width */
  `;

  const Table = styled.table`
    width: 100%;
    table-layout: auto; /* Allows columns to resize based on content */
    border-collapse: collapse;
    margin-top: 20px;
    text-align: left;
    background-color: white;
    color: black;
    font-size: 0.9rem; /* Adjust font size for readability */
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

  const Tr = styled.tr`
    &.method {
      text-align: left;
    }

    &.method.GET {
      color: green;
    }

    &.method.POST {
      color: blue;
    }

    &.method.UPDATE {
      color: orange;
    }

    &.method.DELETE {
      color: red;
    }
  `;

  const Th = styled.th`
    padding: 10px;
    border: 1px solid #ddd;
  `;

  const Td = styled.td`
    padding: 10px;
    border: 1px solid #ddd;
    word-wrap: break-word; /* Prevents long text from overflowing */
  `;

  const endpoints = [
    {
      method: "GET",
      path: "api/ingredients/findrecipefromingredient/{ingredientName}",
      request: "",
      response: `[recipe, recipe, ...](1)`,
      errors: `(e1)`,
    },
    {
      method: "GET",
      path: "api/recipes/",
      request: "",
      response: "[recipe, recipe, ...](1)",
      errors: "",
    },
    {
      method: "GET",
      path: "api/recipes/{id}",
      request: "",
      response: `recipe(1)`,
      errors: "(e1)",
    },
    {
      method: "GET",
      path: "api/recipes/name/{name}",
      request: "",
      response: `recipe(1)`,
      errors: "(e1)",
    },
    {
      method: "GET",
      path: "api/recipes/servings/{servings}",
      request: "",
      response: `recipe(1)`,
      errors: "(e1)",
    },
    {
      method: "POST",
      path: "api/ingredients/",
      request: "ingredient(2) without ID",
      response: "",
      errors: "(e2)",
    },
    {
      method: "POST",
      path: "api/recipes/",
      request: "recipe(1) without ID",
      response: "",
      errors: "(e2)",
    },
    {
      method: "UPDATE",
      path: "api/ingredients/{id}",
      request: `ingredient(2) with ID`,
      response: `ingredient(2)`,
      errors: ``,
    },
    {
      method: "UPDATE",
      path: "api/recipes/{id}",
      request: `recipe(1) with ID`,
      response: `recipe(1)`,
      errors: ``,
    },
    {
      method: "DELETE",
      path: "api/ingredients/{id}",
      request: "ingredient(2) with ID",
      response: '',
      errors: "(e1)",
    },
    {
      method: "DELETE",
      path: "api/recipes/{id}",
      request: "recipe(1) with ID",
      response: '',
      errors: "(e1)",
    },
  ];

  return (
    <div style={pageStyle}>
      <h1>Endpoints</h1>
      <p style={paragraphStyle}>The following endpoints are available:</p>
      <TableWrapper>
        <Table>
          <Thead>
            <Tr className="method">
              <Th>Method</Th>
              <Th>URL</Th>
              <Th>Request Body (JSON)</Th>
              <Th>Response (JSON)</Th>
              <Th>Error (e)</Th>
            </Tr>
          </Thead>
          <Tbody>
            {endpoints.map((endpoint, index) => (
              <Tr key={index} className={`method ${endpoint.method}`}>
                <Td>{endpoint.method}</Td>
                <Td>{endpoint.path}</Td>
                <Td>
                  <pre>{endpoint.request}</pre>
                </Td>
                <Td>
                  <pre>{endpoint.response}</pre>
                </Td>
                <Td>
                  <pre>{endpoint.errors}</pre>
                </Td>
              </Tr>
            ))}
          </Tbody>
        </Table>
      </TableWrapper>
      <FormatsTable />
    </div>
  );
}

export default Endpoints;
