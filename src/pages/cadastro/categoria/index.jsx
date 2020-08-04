import React, { useState, useEffect } from 'react';
import PageDefault from '../../../components/pagesDefault';
import { Link } from 'react-router-dom';
import FormField from '../../../components/FormField';
import Button from '../../../components/Button/button'

function CadastroCategoria() {
  const valoresIniciais = {
    nome: '',
    descricao: '',
    cor: ''
  };

  const [categorias, setCategorias] = useState([]);
  const [values, setValues] = useState(valoresIniciais);

  //Função para setar os valores de forma dinâmica
  function setValue(chave, valor) {
    setValues({
      ...values,
      [chave]: valor, // nome: 'valor'
    });
  }

  //Função para alterar os valores de forma dinâmica
  function handleChange(e) {
    setValue(e.target.getAttribute('name'), 
    e.target.value);
  }

  //Função para submeter o Form
  function handleSubmit(e) {
    e.preventDefault();
    setCategorias([...categorias, values]);
    setValues(valoresIniciais);
  }

  useEffect(() => {

    const URL = 'http://localhost:3000/categorias'

    fetch(URL)
      .then( async (dadosServidor) => {
        const dadosRetornados = await dadosServidor.json();
        setCategorias([
          ...dadosRetornados
        ])
      })


    /*setTimeout(() => {
       setCategorias([
        ...categorias,
        {
          "id": 1,
          "nome": "Front End",
          "descrcao": "Bacana",
          "cor": "#cbd1ff"
        },
        {
          "id": 2,
          "nome": "Back End",
          "descrcao": "Top demais",
          "cor": "#cbd1cc"
        }
      ]);
    }, 3 * 1000) */
  }, [])

  return (
    <PageDefault>
      <h1>Cadastro de Categoria {values.nome}</h1>
      <form onSubmit={handleSubmit}>
        <FormField
          label='Nome da Categoria'
          type='text'
          name='nome'
          value={values.nome}
          onChange={handleChange}
        />

        <FormField
          label='Descrição'
          type='textarea'
          name='descricao'
          value={values.descricao}
          onChange={handleChange}
        />

        <FormField
          label='Cor'
          name='cor'
          value={values.cor}
          type='color'
          onChange={handleChange} />

        <Button className="ButtonLink">
          Cadastrar
      </Button>

      </form>

      {categorias.length === 0 && (
        <div>
          Carregando...
          {/* <Spinner animation="grow" /> */}
        </div>

      )}

      <ul>
        {categorias.map((categoria, index) => {
          return <li key={`${categoria}${index}`}>{categoria.nome}</li>;
        })}
      </ul>

      <Link to='/'>Voltar para Home</Link>
    </PageDefault>
  );
}

export default CadastroCategoria;
