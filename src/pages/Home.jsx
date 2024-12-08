function Home() {
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

  const imageStyle = {
    height: "auto",
    display: "block",
  };

  return (
    <div style={pageStyle}>
      <img src="/recipelogo1.png" alt="Recipe logo" style={imageStyle} />
      <p style={paragraphStyle}>
        Welcome to our Recipe API. This application is designed to show
        you a few recipes.
      </p>
    </div>
  );
}

export default Home;
