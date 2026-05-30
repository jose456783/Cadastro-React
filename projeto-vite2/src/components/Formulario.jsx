import React, { useState } from 'react';

import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import ModalUsuario from './ModalUsuario';

function Formulario() {

  const [nome, setNome] = useState('');
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');
  const [showModal, setShowModal] = useState(false);

  function cadastrar(e){
    e.preventDefault();

    const usuario ={
      nome: nome,
      email: email,
      senha: senha
    }
    console.log(usuario);
    setShowModal(true);

  }
  
  // console.log(nome);
  // console.log(email);
  // console.log(senha);

  return (
    <div className="d-flex justify-content-center mt-5">
      <Form style={{ maxHeight: '500px' }} onSubmit={cadastrar}>
        <Form.Group className="mb-3" controlId="formBasicNome">
          <Form.Label>Nome</Form.Label>
          <Form.Control
            type="text"
            placeholder="Escreva seu nome"
            onChange={(value) => setNome(value.target.value)}
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Email</Form.Label>
          <Form.Control 
          type="email" 
          placeholder="Entre com seu email" 
          onChange={(value) => setEmail(value.target.value)}
          />
          <Form.Text className="text-muted">
            Não iremos o seu email com ninguém.
          </Form.Text>
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Senha</Form.Label>
          <Form.Control 
          type="password" 
          placeholder="Password" 
          onChange={(value) => setSenha(value.target.value)}
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPasswordConfirm">
          <Form.Label>Confirme a Senha</Form.Label>
          <Form.Control type="password" placeholder="Confirme a sua senha" />
        </Form.Group>

        <Button variant="primary" type="submit">
          Cadastrar
        </Button>
        <ModalUsuario mostrar={showModal} esconder={() => setShowModal(false)} />
      </Form>
    </div>
  );
}

export default Formulario;
