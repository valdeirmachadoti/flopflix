import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./pages/home";
import * as serviceWorker from "./serviceWorker";
import { BrowserRouter, Switch, Route } from "react-router-dom";

import CadastroVideo from './pages/cadastro/video'
import CadastroCategoria from "./pages/cadastro/categoria";

const Pagina404 = () => {
  return (
    <div>
      Página 404
    </div>
  )
}

ReactDOM.render(
  <BrowserRouter>
    <Switch>
      <Route path="/" component={App} exact/>
      <Route path="/cadastro/video" component={CadastroVideo} />
      <Route path="/cadastro/categoria" component={CadastroCategoria}/>
      <Route component={Pagina404}/>
      
    </Switch>
  </BrowserRouter>,
  document.getElementById("root")
);
serviceWorker.unregister();
