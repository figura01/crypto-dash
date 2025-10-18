import { Link } from "react-router";
import type { CSSProperties } from "react";

const NotFoundPage = () => {
  return (
    <div style={styles.container}>
      <h1 style={styles.title}>404</h1>
      <p style={styles.message}>
        Ooops! The page you're looking for does not exist
      </p>
      <Link to="/" style={styles.link}></Link>
    </div>
  );
};
const styles: { [key: string]: CSSProperties } = {
  container: {
    textAlign: "center",
    padding: "80px 20px",
    color: "#fff",
  },
  title: {
    fontSize: "72px",
    marginBottom: "20px",
  },
  message: {
    fontSize: "18px",
    marginBottom: "30px",
  },
  link: {
    textDecoration: "none",
    color: "#007bff",
    fontWeight: "bold",
  },
};

export default NotFoundPage;
