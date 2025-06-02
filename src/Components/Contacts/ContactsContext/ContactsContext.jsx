import { createContext, useContext, useState, useEffect } from "react";

const ContactsContext = createContext();

export function ContactsProvider({ children }) {
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

    // Actions
    const addContact = (contact) =>
        setContacts([...contacts, { ...contact, id: Date.now() }]);

    const deleteContact = (id) =>
        setContacts(contacts.filter((c) => c.id !== id));

    const updateContact = (updatedContact) =>
        setContacts(
            contacts.map((c) =>
                c.id === updatedContact.id ? updatedContact : c
            )
        );

    return (
        <ContactsContext.Provider
            value={{ contacts, addContact, deleteContact, updateContact }}>
            {children}
        </ContactsContext.Provider>
    );
}

export function useContacts() {
    return useContext(ContactsContext);
}
