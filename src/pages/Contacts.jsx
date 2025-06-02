import { InputText } from "../Components/InputText";
import "./Contacts.css";
import { Container } from "reactstrap";

export default function Contact() {
    return (
        <Container className="contacts-container">
            <div className="contacts-title">Contact Us</div>
            <div className="contacts-form">
                <InputText />
            </div>
            <div className="contacts-list">[Contact list goes here]</div>
        </Container>
    );
}
