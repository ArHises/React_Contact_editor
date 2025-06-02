import "./NoPage.css";
import { Link } from "react-router-dom";
import { Container, Button } from "reactstrap";

export default function NoPage() {
    return (
        <Container className="no-page-container">
            <div className="no-page-title">404</div>
            <div className="no-page-message">
                Sorry, the page you are looking for does not exist.
            </div>
            <Link to="/" className="no-page-link">
                <Button color="primary">Go Home</Button>
            </Link>
        </Container>
    );
}
