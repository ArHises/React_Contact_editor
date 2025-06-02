import { ContactsProvider } from "./ContactsContext/ContactsContext.jsx";
import ContactList from "./ContactList/ContactList.jsx";
import ContactModal from "./ContactModal/ContactModal.jsx";
import { useState, useContext } from "react";
import { Button } from "reactstrap";

import "./ContactManager.css";

import { ThemeProvider, ThemeContext } from "./ThemeContext/ThemeContext.jsx";

export default function ContactManeger() {
    const [modalOpen, setModalOpen] = useState(false);
    const [isEdit, setIsEdit] = useState(false);
    const [initialData, setInitialData] = useState({
        id: 0,
        name: "",
        email: "",
        message: "",
    });

    return (
        <ThemeProvider>
            <ContactsProvider>
                <ThemeConsumerContent
                    modalOpen={modalOpen}
                    setModalOpen={setModalOpen}
                    isEdit={isEdit}
                    setIsEdit={setIsEdit}
                    initialData={initialData}
                    setInitialData={setInitialData}
                />
            </ContactsProvider>
        </ThemeProvider>
    );
}

// Move the context usage here:
function ThemeConsumerContent({
    modalOpen,
    setModalOpen,
    isEdit,
    setIsEdit,
    initialData,
    setInitialData,
}) {
    const { theme, toggleTheme } = useContext(ThemeContext);

    const handleEdit = (contact) => {
        setIsEdit(true);
        setInitialData(contact);
        setModalOpen(true);
    };

    const handleAdd = () => {
        setIsEdit(false);
        setInitialData({
            id: 0,
            name: "",
            email: "",
            message: "",
        });
        setModalOpen(true);
    };

    return (
        <div className="contacts">
            <Button className="theme-toggle-button" onClick={toggleTheme}>
                theme: {theme}
            </Button>
            <ContactList onEdit={handleEdit} />
            <Button
                className="add-contact-button"
                color="primary"
                onClick={handleAdd}>
                Add Contact
            </Button>
            <ContactModal
                isOpen={modalOpen}
                toggle={() => setModalOpen(!modalOpen)}
                initialData={initialData}
                isEdit={isEdit}
                closeModal={() => setModalOpen(false)}
            />
        </div>
    );
}
