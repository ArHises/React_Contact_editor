import "./Blogs.css";
import { Container } from "reactstrap";

export default function Blogs() {
    return (
        <Container className="blogs-container">
            <div className="blog-title">Blogs</div>
            <ul className="blog-list">
                <li>
                    <a href="#" className="blog-link">
                        How to use React Context
                    </a>
                </li>
                <li>
                    <a href="#" className="blog-link">
                        Styling in React: Best Practices
                    </a>
                </li>
                <li>
                    <a href="#" className="blog-link">
                        React Router Tips and Tricks
                    </a>
                </li>
            </ul>
        </Container>
    );
}
