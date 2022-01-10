import './App.css';
import { BrowserRouter } from "react-router-dom";
import Login from './pages/Login';
import { createBrowserHistory } from 'history'
import PageNotFound from './pages/PageNotFound';
import { Route, Switch } from "react-router";
import { AdminTemplate } from './templates/AdminTemplate';
import AdminPage from './pages/AdminPage';
import AdminAdxType from './pages/AdminAdxType';
import AdminEditAdx from './pages/AdminEditAdx';


export const history = createBrowserHistory();


function App() {
    return (
        <BrowserRouter>
            <Switch  history = {history}>
                <Route exact path="/login" component={Login}></Route>
                <AdminTemplate exact path="/admin" Component = {AdminPage} />
                <AdminTemplate exact path="/admin/:ADXType" Component = {AdminAdxType} />
                <AdminTemplate exact path="/admin/edit/:idADX" Component = {AdminEditAdx} />
                <Route path="*" component={PageNotFound} />
            </Switch>
        </BrowserRouter>
    );
}

export default App;