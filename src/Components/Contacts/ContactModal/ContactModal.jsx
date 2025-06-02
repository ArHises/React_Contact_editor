import { useContext } from "react";
import ContactForm from "../ContactForm/ContactForm.jsx";
import { Modal, ModalHeader, ModalBody } from "reactstrap";
import { ThemeContext } from "../ThemeContext/ThemeContext.jsx";

export default function ContactModal({
    isOpen,
    toggle,
    initialData,
    isEdit,
    closeModal,
}) {
    const { theme } = useContext(ThemeContext);
    return (
        <Modal isOpen={isOpen} toggle={toggle}>
            <ModalHeader
                toggle={toggle}
                className={`${theme === "dark" ? " dark-theme" : ""}`}>
                {isEdit ? "Edit contact" : "Add contact"}
            </ModalHeader>
            <ModalBody className={`${theme === "dark" ? " dark-theme" : ""}`}>
                <ContactForm
                    initialData={initialData}
                    isEdit={isEdit}
                    closeModal={closeModal}
                />
            </ModalBody>
        </Modal>
    );
}
