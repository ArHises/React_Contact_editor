import { useState, useEffect } from "react";

import {
    Button,
    Container,
    Form,
    FormGroup,
    Label,
    Input,
    Alert,
} from "reactstrap";

export default function ContactForm({
    onAdd,
    initialData = { name: "", email: "", message: "" },
    isEdit = false,
    onEdit,
    closeModal,
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
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!formData.name || !formData.email || !formData.message) {
            setError("Please fill in all fields.");
            return;
        }
        if (!emailRegex.test(formData.email)) {
            setError("Please enter a valid email address.");
            return;
        }
        setError("");
        if (isEdit) {
            onEdit(formData);
        } else {
            onAdd(formData);
            setSubmitted(true);
            setTimeout(() => {
                setSubmitted(false);
                setFormData({
                    id: 0,
                    name: "",
                    email: "",
                    message: "",
                });
                if (closeModal) closeModal();
            }, 1000);
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
