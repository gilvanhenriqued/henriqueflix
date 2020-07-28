import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

function CadastroVideo() {
  return (
    <div>
      Página de Cadastro de Video
    </div>
  );
}

const Page404 = () => (
  <div>Página não encontrada - Erro 404</div>
)

ReactDOM.render(
  <BrowserRouter>
    <Switch>
      <Route path="/" component={App} exact />
      <Route path="/cadastro/video" component={CadastroVideo}/>
      <Route component={Page404} />

    </Switch>
  </BrowserRouter>,
  document.getElementById('root')
);
