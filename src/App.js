import './App.css';
import { BrowserRouter } from "react-router-dom";
import Login from './pages/Login';
import { createBrowserHistory } from 'history'
import PageNotFound from './pages/PageNotFound';
import { Route, Switch } from "react-router";
import { AdminTemplate } from './templates/AdminTemplate';
import AdminAdxPC from './pages/AdminAdxPC';
import AdminAdxMobile from './pages/AdminAdxMobile';
import AdminAdxEcom from './pages/AdminAdxEcom';

export const history = createBrowserHistory();


function App() {
    return (
        <BrowserRouter>
            <Switch  history = {history}>
                <Route exact path="/login" component={Login}></Route>
                <AdminTemplate exact path="/admin" Component = {AdminAdxPC} />
                <AdminTemplate exact path="/admin/adxPC/:id" Component = {AdminAdxPC} />
                <AdminTemplate exact path="/admin/adxMobile/:id" Component = {AdminAdxMobile} />
                <AdminTemplate exact path="/admin/adxTemplate/:id" Component = {AdminTemplate} />
                <AdminTemplate exact path="/admin/adxEcom/:id" Component = {AdminAdxEcom} />
                <Route path="*" component={PageNotFound} />
            </Switch>
        </BrowserRouter>
    );
}

export default App;