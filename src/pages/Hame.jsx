import "./Hame.css";
import { Container } from "reactstrap";

export default function Home() {
    return (
        <Container className="home-container">
            <div className="home-title">Welcome to the SimpleCounter App!</div>
            <div className="home-message">
                This is a modern React app with routing, context, and beautiful
                styling using ReactStrap.
            </div>
        </Container>
    );
}
