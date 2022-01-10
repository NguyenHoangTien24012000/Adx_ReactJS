import { Fragment } from 'react';

import { NavLink, Redirect, Route } from 'react-router-dom';
import TabAdminAdxPC from '../components/TabAdminAdxPC';

import { ACCESS_TOKEN } from '../util/config';

export const AdminTemplate = (props) => {
    const { Component, ...resProps } = props;


    const accessLogin = localStorage.getItem(ACCESS_TOKEN);
    if (!accessLogin) {
        alert("Bạn không có quyền vào trang này!!!");
        return <Redirect to="/login" />
    }

    return (<Route {...resProps} render={(propsRoute) => {
        return <Fragment>
            <div className="container-fluid">
                <div className="row">
                    <div className="col-md-3 col-lg-2 px-0 position-fixed h-100 bg-dark shadow-sm sidebar" id="sidebar">
                        <h2 className='text-primary text-center'>Admin</h2>
                        <div className="list-group rounded-0">
                            <a href="#" className="list-group-item list-group-item-action active border-0 d-flex align-items-center">
                                <span className="bi bi-border-all"></span>
                                <span className="ml-2">Dashboard</span>
                            </a>
                            <TabAdminAdxPC />
                        </div>
                    </div>
                    <div className="col-md-9 col-lg-10 ml-md-auto px-0">
                        <Component {...propsRoute} />
                    </div>
                </div>
            </div>
        </Fragment>
    }} />

    )
}
