import { useState, useEffect } from "react";
import { Button } from "reactstrap";

import ContactList from "./ContactList/ContactList.jsx";
import ContactModal from "./ContactModal/ContactModal.jsx";

export default function Contact() {
    const [contacts, setContacts] = useState(() => {
        const saved = localStorage.getItem("contacts");
        return !saved || saved === "[]"
            ? [
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
                      message:
                          "Hi, I would like to know more about your services.",
                  },
                  {
                      id: 3,
                      name: "Alice Johnson",
                      email: "alice@ex.mple",
                      message:
                          "Greetings! I have a question regarding your products.",
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
                      message:
                          "Hi! I have some feedback on your recent updates.",
                  },
                  {
                      id: 8,
                      name: "Fiona Black",
                      email: "jone@ex.mple",
                      message:
                          "Hello! I am looking for assistance with my account.",
                  },
              ]
            : JSON.parse(saved);
    });

    useEffect(() => {
        localStorage.setItem("contacts", JSON.stringify(contacts));
    }, [contacts]);

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
    };

    const editContact = (index) => {
        setIsEdit(true);
        setInitialData(contacts[index]);
        setModalOpen(true);
    };

    const deleteContact = (id) => {
        setContacts(contacts.filter((contact) => contact.id !== id));
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
            <ContactList
                contacts={contacts}
                onEdit={editContact}
                onDelete={deleteContact}
            />
            <Button
                className="add-contact-button"
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
                closeModal={() => setModalOpen(false)}
            />
        </div>
    );
}
