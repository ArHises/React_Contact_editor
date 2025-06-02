// import { Counter } from './Components/Counter.jsx';
// import { InputText } from './Components/InputText.jsx';
// import { SignUp } from './Components/SighnUp.jsx';

import Contact from "./Components/Contacts/Contacts";
import 'bootstrap/dist/css/bootstrap.min.css';


// function App() {

//   return (
//     <>
//       {/* <Counter />
//       <InputText initialText='start typing...'/> */}
//       <SignUp />
//     </>
//   )
// }

// import { BrowserRouter, Routes, Route } from "react-router-dom";
// import Layout from "./pages/Layout";
// import Home from "./pages/Home";
// import Blogs from "./pages/Blogs";
// import Contact from "./pages/Contacts.jsx";
// import NoPage from "./pages/NoPage";

// export default function App() {
//   return (
//     <BrowserRouter>
//       <Routes>
//         <Route path="/" element={<Layout />}>
//           <Route index element={<Home />} />
//           <Route path="blogs" element={<Blogs />} />
//           <Route path="contact" element={<Contact />} />
//           <Route path="*" element={<NoPage />} />
//         </Route>
//       </Routes>
//     </BrowserRouter>
//   );
// }

// import 'bootstrap/dist/css/bootstrap.min.css';
// import { useState } from 'react';

// import {
//   Container,
//   Form,
//   FormGroup,
//   Label,
//   Input,
//   Button,
//   Alert,
// } from 'reactstrap';

// export function ReactStrapForm() {
//   const [formData, setFormData] = useState({ name: '', email: '' });
//   const [submitted, setSubmitted] = useState(false);

//   const handleChange = (e) => {
//     setFormData({ ...formData, [e.target.name]: e.target.value });
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     setSubmitted(true);
//   };

//   return (
//     <Container className="mt-5">
//       <h2 className="mb-4">ReactStrap Styled Form</h2>
//       {submitted && (
//         <Alert color="success">
//           Submitted! Name: {formData.name}, Email: {formData.email}
//         </Alert>
//       )}
//       <Form onSubmit={handleSubmit}>
//         <FormGroup>
//           <Label for="name">Name</Label>
//           <Input
//             id="name"
//             name="name"
//             type="text"
//             placeholder="Enter your name"
//             value={formData.name}
//             onChange={handleChange}
//           />
//         </FormGroup>
//         <FormGroup>
//           <Label for="email">Email</Label>
//           <Input
//             id="email"
//             name="email"
//             type="email"
//             placeholder="Enter your email"
//             value={formData.email}
//             onChange={handleChange}
//           />
//         </FormGroup>
//         <Button color="primary">Submit</Button>
//       </Form>
//     </Container>
//   );
// }

// import { Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';

// function Example() {
//   const [modal, setModal] = useState(false);
//   const toggle = () => setModal(!modal);

//   return (
//     <>
//       <Button color="danger" onClick={toggle}>Open Modal</Button>
//       <Modal isOpen={modal} toggle={toggle}>
//         <ModalHeader toggle={toggle}>My Form</ModalHeader>
//         <ModalBody>
//           Put your form or message here.
//         </ModalBody>
//         <ModalFooter>
//           <Button color="primary" onClick={toggle}>Submit</Button>{' '}
//           <Button color="secondary" onClick={toggle}>Cancel</Button>
//         </ModalFooter>
//       </Modal>
//     </>
//   );
// }

// import { Card, CardBody, CardTitle, CardText } from 'reactstrap';

// function InfoCard() {
//   return (
//     <Card>
//       <CardBody>
//         <CardTitle tag="h5">User Info</CardTitle>
//         <CardText>This is where user data goes.</CardText>
//       </CardBody>
//     </Card>
//   );
// }

// function InfoAlert() {
//   const [visible, setVisible] = useState(true);
//   const onDismiss = () => setVisible(false);

//   return (
//     <Alert color="success" isOpen={visible} toggle={onDismiss}>
//       You submitted the form successfully!
//     </Alert>
//   );
// }

// export default function App() {
//   return (
//     <div>
//       <h1>Welcome to My App</h1>
//       <p>This is a simple React application.</p>
//       <ReactStrapForm />
//       <Example />
//       <InfoCard />
//       <InfoAlert />
//     </div>
//   );
// };

export default function App() {
  return (
    <div className="App">
      <Contact />
    </div>
  );
};