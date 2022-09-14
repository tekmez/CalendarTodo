import React, { useState } from 'react';
import { Modal, Button, Form } from 'react-bootstrap';

const AddTodo = ({ show, onHide, addTodo }) => {
  const [todoName, setTodoName] = useState('');
  const [todoDate, setTodoDate] = useState('');
  return (
    <Modal
      show={show}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header>
        <Modal.Title id="contained-modal-title-vcenter">Add Todo</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <span>Todo Name</span>
        <Form.Control
          type="text"
          placeholder="Enter a todo name"
          value={todoName}
          onChange={(e) => setTodoName(e.target.value)}
        />
        <span>Date</span>
        <Form.Control
          type="date"
          value={todoDate}
          onChange={(e) => setTodoDate(e.target.value)}
        />
      </Modal.Body>
      <Modal.Footer>
        <Button style={{ color: 'white' }} variant="warning" onClick={onHide}>
          Close
        </Button>
        <Button variant="success" onClick={addTodo}>
          Add Todo
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export default AddTodo;
