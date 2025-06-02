import ContactForm from "../ContactForm/ContactForm.jsx";
import { Modal, ModalHeader, ModalBody } from "reactstrap";

export default function ContactModal({
    isOpen,
    toggle,
    onAdd,
    initialData,
    isEdit,
    onEdit,
    closeModal,
}) {
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
                    closeModal={closeModal}
                />
            </ModalBody>
        </Modal>
    );
}
