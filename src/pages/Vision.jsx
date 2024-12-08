function Vision() {
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

  return (
    <div style={pageStyle}>
      <h1>Vores Vision</h1>
      <p style={paragraphStyle}>
        Our vision for this API is to enable you to retrieve recipes in an easy
        and accessible way. This is achieved by allowing you to fetch recipes
        based on various criteria, such as ingredients, servings, or the name of
        the dish. We hope that you will find our API both useful and
        informative.
      </p>
    </div>
  );
}

export default Vision;
