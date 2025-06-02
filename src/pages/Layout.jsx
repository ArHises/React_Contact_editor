import { Outlet, Link } from "react-router-dom";
import { Breadcrumb, BreadcrumbItem, Container } from "reactstrap";
import "./Layout.css";

export default function Layout() {
    return (
        <Container fluid>
            <nav>
                <Breadcrumb className="breadcrumb">
                    <BreadcrumbItem>
                        <Link to="/">Home</Link>
                    </BreadcrumbItem>
                    <BreadcrumbItem>
                        <Link to="/blogs">Blogs</Link>
                    </BreadcrumbItem>
                    <BreadcrumbItem>
                        <Link to="/contact-mngr">Contacts</Link>
                    </BreadcrumbItem>
                    <BreadcrumbItem>
                        <Link to="/contact">Contacts</Link>
                    </BreadcrumbItem>
                </Breadcrumb>
            </nav>
            <Outlet />
        </Container>
    );
}
