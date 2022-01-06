import './App.css';
import { BrowserRouter, Routes } from "react-router-dom";
import Login from './pages/Login';
import Admin from './pages/Admin';
import { createBrowserHistory } from 'history'
import PageNotFound from './pages/PageNotFound';
import { Route, Switch } from "react-router";

export const history = createBrowserHistory();


function App() {
    return (
        <BrowserRouter history={history}>
            <Switch>
                <Route exact path="/" component={Login}></Route>
                <Route exact path="/login" component={Login}></Route>
                <Route exact path="/admin" component={Admin}></Route>
                <Route path="*" element={<PageNotFound />} />
            </Switch>
        </BrowserRouter>
    );
}

export default App;