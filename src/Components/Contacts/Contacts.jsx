import { useState, useEffect } from "react";
import {
    Card,
    CardBody,
    CardTitle,
    CardText,
    Button,
    Container,
    Form,
    FormGroup,
    Label,
    Input,
    Alert,
    Modal,
    ModalHeader,
    ModalBody,
} from "reactstrap";

function ContactList({ contacts, onEdit }) {
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
                </CardBody>
            ))}
        </Card>
    );
}

function ContactForm({
    onAdd,
    initialData = {
        name: "",
        email: "",
        message: "",
    },
    isEdit = false,
    onEdit,
}) {
    const [formData, setFormData] = useState(initialData);
    const [submitted, setSubmitted] = useState(false);
    const [error, setError] = useState("");

    useEffect(() => {
        setFormData(initialData);
    }, [initialData]);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!formData.name || !formData.email || !formData.message) {
            setError("Please fill in all fields.");
            return;
        }
        setError("");
        if (isEdit) {
            onEdit(formData); // formData includes id
        } else {
            onAdd(formData); // id will be assigned in addContact
            setSubmitted(true);
            setFormData({
                id: 0,
                name: "",
                email: "",
                message: "",
            });
        }
    };

    return (
        <Container className="mt-0">
            <p>
                {isEdit
                    ? "Edit contact information:"
                    : "Fill the information below to add a contact :)"}
            </p>
            {submitted && !isEdit && (
                <Alert color="success">
                    Submitted! Name: {formData.name}, Email: {formData.email}
                </Alert>
            )}
            {error && <Alert color="danger">{error}</Alert>}
            <Form onSubmit={handleSubmit}>
                <FormGroup>
                    <Label for="name">Name: </Label>
                    <Input
                        id="name"
                        name="name"
                        type="text"
                        placeholder="Enter your name"
                        value={formData.name}
                        onChange={handleChange}
                    />
                </FormGroup>
                <FormGroup>
                    <Label for="email">Email: </Label>
                    <Input
                        id="email"
                        name="email"
                        type="email"
                        placeholder="Enter your email"
                        value={formData.email}
                        onChange={handleChange}
                    />
                </FormGroup>
                <FormGroup>
                    <Label for="message">Message: </Label>
                    <Input
                        id="message"
                        name="message"
                        type="text"
                        placeholder="Enter your text message"
                        value={formData.message}
                        onChange={handleChange}
                    />
                </FormGroup>
                <Button color="primary">
                    {isEdit ? "Save changes" : "Add contact"}
                </Button>
            </Form>
        </Container>
    );
}

function ContactModal({ isOpen, toggle, onAdd, initialData, isEdit, onEdit }) {
    return (
        <Modal isOpen={isOpen} toggle={toggle}>
            <ModalHeader toggle={toggle}>
                {isEdit ? "Edit contact" : "Add contact"}
            </ModalHeader>
            <ModalBody>
                <ContactForm
                    onAdd={onAdd}
                    initialData={initialData}
                    isEdit={isEdit}
                    onEdit={onEdit}
                />
            </ModalBody>
        </Modal>
    );
}

export default function Contact() {
    const [contacts, setContacts] = useState([
        {
            id: 1,
            name: "John Doe",
            email: "john@ex.mple",
            message: "Hello, this is a test message.",
        },
        {
            id: 2,
            name: "Jane Smith",
            email: "jone@ex.mple",
            message: "Hi, I would like to know more about your services.",
        },
        {
            id: 3,
            name: "Alice Johnson",
            email: "alice@ex.mple",
            message: "Greetings! I have a question regarding your products.",
        },
        {
            id: 4,
            name: "Bob Brown",
            email: "jone@ex.mple",
            message: "Hey, can you provide me with more information?",
        },
        {
            id: 5,
            name: "Charlie White",
            email: "jone@ex.mple",
            message: "Hi there! I am interested in your offerings.",
        },
        {
            id: 6,
            name: "Diana Green",
            email: "jone@ex.mple",
            message:
                "Hello! I would like to discuss a potential collaboration.",
        },
        {
            id: 7,
            name: "Ethan Blue",
            email: "jone@ex.mple",
            message: "Hi! I have some feedback on your recent updates.",
        },
        {
            id: 8,
            name: "Fiona Black",
            email: "jone@ex.mple",
            message: "Hello! I am looking for assistance with my account.",
        },
    ]);

    const [modalOpen, setModalOpen] = useState(false);
    const [isEdit, setIsEdit] = useState(false);
    const [initialData, setInitialData] = useState({
        id: 0,
        name: "",
        email: "",
        message: "",
    });

    const addContact = (contact) => {
        const newContact = {
            ...contact,
            id: Date.now(),
        };
        setContacts([...contacts, newContact]);
        setModalOpen(false);
    };

    const editContact = (index) => {
        setIsEdit(true);
        setInitialData(contacts[index]);
        setModalOpen(true);
    };

    const updateContact = (updatedContact) => {
        setContacts(
            contacts.map((contact) =>
                contact.id === updatedContact.id ? updatedContact : contact
            )
        );
        setModalOpen(false);
        setIsEdit(false);
    };

    return (
        <div className="contacts">
            <ContactList contacts={contacts} onEdit={editContact} />
            <Button
                color="primary"
                onClick={() => {
                    setIsEdit(false);
                    setInitialData({
                        id: 0,
                        name: "",
                        email: "",
                        message: "",
                    }); // reset id
                    setModalOpen(true);
                }}>
                Add Contact
            </Button>
            <ContactModal
                isOpen={modalOpen}
                toggle={() => setModalOpen(!modalOpen)}
                onAdd={addContact}
                initialData={initialData}
                isEdit={isEdit}
                onEdit={updateContact}
            />
        </div>
    );
}
