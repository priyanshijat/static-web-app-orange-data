function App() {
  return (
    <div style={{ fontFamily: "Arial, sans-serif" }}>
      {/* Navbar */}
      <header
        style={{
          background: "linear-gradient(90deg, #4facfe, #00f2fe)",
          color: "black",
          padding: "1rem 2rem",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          boxShadow: "0 4px 10px rgba(0,0,0,0.2)",
        }}
      >
        <h1 style={{ margin: 0 }}>🚀 Orange Data Tech Pvt Ltd</h1>
        <nav>
          <a href="#home" style={{ margin: "0 15px", color: "white", fontWeight: "bold" }}>
            Home
          </a>
          <a href="#about" style={{ margin: "0 15px", color: "white", fontWeight: "bold" }}>
            About
          </a>
          <a href="#services" style={{ margin: "0 15px", color: "white", fontWeight: "bold" }}>
            Services
          </a>
          <a href="#contact" style={{ margin: "0 15px", color: "white", fontWeight: "bold" }}>
            Contact
          </a>
        </nav>
      </header>

      {/* Hero Section */}
      <section
        id="home"
        style={{
          padding: "5rem 2rem",
          textAlign: "center",
          background: "linear-gradient(to right, #ff9a9e, #fad0c4)",
        }}
      >
        <h2 style={{ fontSize: "3rem", marginBottom: "1rem", color: "#333" }}>
          Build Modern Websites with React 🌐
        </h2>
        <p style={{ fontSize: "1.3rem", color: "#444", marginBottom: "2rem" }}>
          Fast, beautiful, and easy-to-use landing pages designed for startups and businesses.
        </p>
        <button
          style={{
            padding: "12px 30px",
            fontSize: "1rem",
            background: "#4facfe",
            color: "white",
            border: "none",
            borderRadius: "25px",
            cursor: "pointer",
            boxShadow: "0 4px 12px rgba(0,0,0,0.3)",
          }}
        >
          Get Started
        </button>
      </section>

      {/* About Section */}
      <section
        id="about"
        style={{
          padding: "4rem 2rem",
          background: "#f8f9fa",
          textAlign: "center",
        }}
      >
        <h2 style={{ fontSize: "2.5rem", marginBottom: "1rem", color: "#333" }}>About Us</h2>
        <p style={{ maxWidth: "700px", margin: "10px auto", fontSize: "1.1rem", color: "#555" }}>
          We are a passionate team of developers and designers building professional websites and
          web apps. Our goal is to create user-friendly, modern, and responsive web solutions for
          individuals and businesses.
        </p>
      </section>

      {/* Services Section */}
      <section
        id="services"
        style={{
          padding: "4rem 2rem",
          textAlign: "center",
          background: "linear-gradient(to right, #89f7fe, #66a6ff)",
        }}
      >
        <h2 style={{ fontSize: "2.5rem", marginBottom: "2rem", color: "#222" }}>Our Services</h2>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
            gap: "25px",
          }}
        >
          {/* Service Cards */}
          <div
            style={{
              background: "white",
              padding: "25px",
              borderRadius: "15px",
              boxShadow: "0 6px 15px rgba(0,0,0,0.15)",
            }}
          >
            <h3>⚡ Web Development</h3>
            <p>Modern and fast React-based websites and applications.</p>
          </div>
          <div
            style={{
              background: "white",
              padding: "25px",
              borderRadius: "15px",
              boxShadow: "0 6px 15px rgba(0,0,0,0.15)",
            }}
          >
            <h3>🎨 UI/UX Design</h3>
            <p>Beautiful, responsive, and user-friendly web design.</p>
          </div>
          <div
            style={{
              background: "white",
              padding: "25px",
              borderRadius: "15px",
              boxShadow: "0 6px 15px rgba(0,0,0,0.15)",
            }}
          >
            <h3>📱 Mobile Apps</h3>
            <p>Cross-platform apps using React Native & hybrid frameworks.</p>
          </div>
          <div
            style={{
              background: "white",
              padding: "25px",
              borderRadius: "15px",
              boxShadow: "0 6px 15px rgba(0,0,0,0.15)",
            }}
          >
            <h3>☁️ Cloud Deployment</h3>
            <p>Deploy your applications on AWS, Netlify, or Vercel.</p>
          </div>
          <div
            style={{
              background: "white",
              padding: "25px",
              borderRadius: "15px",
              boxShadow: "0 6px 15px rgba(0,0,0,0.15)",
            }}
          >
            <h3>🔒 Security</h3>
            <p>Best practices to keep your applications safe & secure.</p>
          </div>
          <div
            style={{
              background: "white",
              padding: "25px",
              borderRadius: "15px",
              boxShadow: "0 6px 15px rgba(0,0,0,0.15)",
            }}
          >
            <h3>🚀 SEO Optimization</h3>
            <p>Improve visibility and rank higher on search engines.</p>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section
        id="contact"
        style={{
          padding: "4rem 2rem",
          textAlign: "center",
          background: "#f8f9fa",
        }}
      >
        <h2 style={{ fontSize: "2.5rem", marginBottom: "1rem", color: "#333" }}>Contact Us</h2>
        <p>Email: contact@mywebsite.com</p>
        <p>Phone: +91-9876543210</p>
        <p>Address: 123 Tech Street, Indore, India</p>
      </section>

      {/* Footer */}
      <footer
        style={{
          background: "#333",
          color: "white",
          padding: "1rem",
          textAlign: "center",
        }}
      >
        <p>&copy; 2025 MyWebsite | Built with ❤️ in React</p>
      </footer>
    </div>
  );
}

export default App;
