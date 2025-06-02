import { Card, CardBody, CardTitle, CardText, Button } from "reactstrap";

export default function ContactList({ contacts, onEdit, onDelete }) {
    return (
        <Card className="contact-list">
            {contacts.map((contact, index) => (
                <CardBody key={contact.id} className="contact-item">
                    <CardTitle tag="h3">{contact.name}</CardTitle>
                    <CardText>Email: {contact.email}</CardText>
                    <CardText>Message: {contact.message}</CardText>
                    <Button
                        color="secondary"
                        size="sm"
                        onClick={() => onEdit(index)}>
                        Edit
                    </Button>
                    <Button
                        className="delete-button"
                        color="danger"
                        size="sm"
                        onClick={() => onDelete(contact.id)}>
                        Delete
                    </Button>
                </CardBody>
            ))}
        </Card>
    );
}
