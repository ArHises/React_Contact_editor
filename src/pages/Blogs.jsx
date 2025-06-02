import "./Blogs.css";
import { Container } from "reactstrap";

export default function Blogs() {
    return (
        <Container className="blogs-container">
            <div className="blog-title">Blogs</div>

            <a href="#" className="blog-link">
                <h5>Lorem ipsum dolor sit amet.</h5>
            </a>
            <p>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                Nesciunt doloremque dolore perferendis, optio blanditiis
                deleniti eveniet, ea voluptatum aliquid repellat minima illo
                corrupti, unde natus neque ducimus ipsam ad! Error.
            </p>
        </Container>
    );
}
