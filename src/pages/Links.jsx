function Links() {
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

      const linkStyle = {
        color: "white",
        textDecoration: "none",
        fontWeight: "bold",
        fontSize: "1.2rem",
        margin: "10px 10px",
        padding: "10px 20px",
        backgroundColor: "#6ab158", // Button-like style
        borderRadius: "5px",
    };
    
    return ( 
        <div style={pageStyle}>
            <h1>Links to repo & API</h1>
            <p style={paragraphStyle}>
                <a 
                    href="https://gigarecipe.biswebsite.dk/api/recipes"
                    style={linkStyle} 
                    target="_blank" 
                    rel="noopener noreferrer"
                >
                    Deployed API
                </a>
                <a 
                    href="https://github.com/peterjanas/sp2-recipe-api"
                    style={linkStyle} 
                    target="_blank" 
                    rel="noopener noreferrer"
                >
                    GitHub Repository
                </a>
            </p>
        </div>
    );
}

export default Links;