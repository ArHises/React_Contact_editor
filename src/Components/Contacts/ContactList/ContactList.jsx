import { useContext } from "react";
import { useContacts } from "../ContactsContext/ContactsContext";
import { Button, Card, CardBody, CardTitle, CardText } from "reactstrap";
import { ThemeContext } from "../ThemeContext/ThemeContext";

export default function ContactList({ onEdit }) {
    const { contacts, deleteContact } = useContacts();
    const { theme } = useContext(ThemeContext);
    return (
        <Card
            className={`contact-list ${
                theme === "dark" ? " dark-theme" : " light-theme"
            }`}>
            {contacts.map((contact) => (
                <CardBody
                    key={contact.id}
                    className={`contact-item${
                        theme === "dark" ? " dark-theme" : " light-theme"
                    }`}>
                    <CardTitle tag="h3">{contact.name}</CardTitle>
                    <CardText>Email: {contact.email}</CardText>
                    <CardText>Message: {contact.message}</CardText>
                    <div className="contact-actions">
                        <Button
                            color="secondary"
                            size="sm"
                            onClick={() => onEdit(contact)}>
                            Edit
                        </Button>
                        <Button
                            color="danger"
                            size="sm"
                            className="delete-button"
                            onClick={() => deleteContact(contact.id)}>
                            Delete
                        </Button>
                    </div>
                </CardBody>
            ))}
        </Card>
    );
}
