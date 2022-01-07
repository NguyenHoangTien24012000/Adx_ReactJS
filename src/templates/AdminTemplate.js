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



    const getITemTypeAdx = (id) => {

    }

    return (<Route {...resProps} render={(propsRoute) => {
        return <Fragment>
            <div className="container-fluid">
                <div className="row">
                    <div className="col-md-3 col-lg-2 px-0 position-fixed h-100 bg-white shadow-sm sidebar" id="sidebar">
                        <h2 className='text-primary text-center'>Admin</h2>
                        <div className="list-group rounded-0">
                            <a href="#" className="list-group-item list-group-item-action active border-0 d-flex align-items-center">
                                <span className="bi bi-border-all"></span>
                                <span className="ml-2">Dashboard</span>
                            </a>
                            


                            <TabAdminAdxPC />



                            {/* <button className="list-group-item list-group-item-action border-0 d-flex justify-content-between align-items-center" data-toggle="collapse" data-target="#adx-mobile">
                                <div>
                                    <span className="bi bi-cart-dash"></span>
                                    <span className="ml-2">ADX Mobile</span>
                                </div>
                                <span className="bi bi-chevron-down small"></span>
                            </button>
                            <div className="collapse" id="adx-mobile" data-parent="#sidebar">
                                <div className="list-group">
                                    <NavLink className='list-group-item list-group-item-action border-0 pl-5' to="/admin/adxPC">About</NavLink>
                                    <a href="#" className="list-group-item list-group-item-action border-0 pl-5">Sale Orders</a>
                                </div>
                            </div>

                            <button className="list-group-item list-group-item-action border-0 d-flex justify-content-between align-items-center" data-toggle="collapse" data-target="#adx-sponsor">
                                <div>
                                    <span className="bi bi-cart-plus"></span>
                                    <span className="ml-2">ADX SPONSOR</span>
                                </div>
                                <span className="bi bi-chevron-down small"></span>
                            </button>
                            <div className="collapse" id="adx-sponsor" data-parent="#sidebar">
                                <div className="list-group">
                                    <a href="#" className="list-group-item list-group-item-action border-0 pl-5">Sellers</a>
                                    <a href="#" className="list-group-item list-group-item-action border-0 pl-5">Purchase Orders</a>
                                </div>
                            </div>
                            <button className="list-group-item list-group-item-action border-0 d-flex justify-content-between align-items-center" data-toggle="collapse" data-target="#adx-ecom">
                                <div>
                                    <span className="bi bi-cart-plus"></span>
                                    <span className="ml-2">ADX ECOM</span>
                                </div>
                                <span className="bi bi-chevron-down small"></span>
                            </button>
                            <div className="collapse" id="adx-ecom" data-parent="#sidebar">
                                <div className="list-group">
                                    <a href="#" className="list-group-item list-group-item-action border-0 pl-5">Sellers</a>
                                    <a href="#" className="list-group-item list-group-item-action border-0 pl-5">Purchase Orders</a>
                                </div>
                            </div> */}
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
