import ContactForm from "../ContactForm/ContactForm.jsx";
import { Modal, ModalHeader, ModalBody } from "reactstrap";

export default function ContactModal({
    isOpen,
    toggle,
    initialData,
    isEdit,
    closeModal,
}) {
    return (
        <Modal isOpen={isOpen} toggle={toggle}>
            <ModalHeader toggle={toggle}>
                {isEdit ? "Edit contact" : "Add contact"}
            </ModalHeader>
            <ModalBody>
                <ContactForm
                    initialData={initialData}
                    isEdit={isEdit}
                    closeModal={closeModal}
                />
            </ModalBody>
        </Modal>
    );
}
