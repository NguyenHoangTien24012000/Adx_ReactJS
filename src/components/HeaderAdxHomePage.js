import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { getADXGroupTypeAction, getAllTypeAdxAction } from '../redux/actions/AdxTypeAction';
import '../style/App.scss'
export default function HeaderAdxHomePage() {

    const { allTypeAdx,navBarActive } = useSelector(state => state.AdxTypeReducer);

    let ADXPC, ADXMOBILE, ADXSPONSOR, ADXECOM, newAllTypeAdx;

    if (allTypeAdx) {
        for (let item of allTypeAdx) {
            switch (item.type_adx) {
                case 'ADX PC':
                    ADXPC = item
                    break;
                case 'ADX MOBILE':
                    ADXMOBILE = item
                    break;
                case 'ADX SPONSOR':
                    ADXSPONSOR = item
                    break;
                case 'ADX ECOM':
                    ADXECOM = item
                    break;
                default:
                    break;
            }
        }
        newAllTypeAdx = [ADXPC, ADXMOBILE, ADXSPONSOR, ADXECOM]
    }
    // console.log(newAllTypeAdx)

    const renderNavbar = () => {
        return newAllTypeAdx?.map((item, index) => {
            let active = item?.type_adx === navBarActive ? 'active' : ''
            return <li key={index}>
                <NavLink className={`${active} navbar-item`} to={`/${item?.type_adx}`}>{item?.type_adx}</NavLink>
            </li>
        })
    }


    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(getAllTypeAdxAction());
        dispatch(getADXGroupTypeAction('ADX PC'));
    }, [])

    return (
        <header className="header">
            <div className="header-content">
                <div className="logo">
                    <img className="logo-img" src={require('../assets/images/Group 3.png')} alt="adx" />
                </div>
                <div className="navbar">
                    <ul className="navbar-list">
                        {renderNavbar()}
                    </ul>
                </div>

                <div className="navbar_mobile">
                    <div className="button-close-sidebar">
                        <svg xmlns="http://www.w3.org/2000/svg" aria-hidden="true" focusable="false" data-prefix="fas"
                            data-icon="times" className="svg-inline--fa fa-times fa-w-11" role="img" viewBox="0 0 352 512">
                            <path fill="currentColor"
                                d="M242.72 256l100.07-100.07c12.28-12.28 12.28-32.19 0-44.48l-22.24-22.24c-12.28-12.28-32.19-12.28-44.48 0L176 189.28 75.93 89.21c-12.28-12.28-32.19-12.28-44.48 0L9.21 111.45c-12.28 12.28-12.28 32.19 0 44.48L109.28 256 9.21 356.07c-12.28 12.28-12.28 32.19 0 44.48l22.24 22.24c12.28 12.28 32.2 12.28 44.48 0L176 322.72l100.07 100.07c12.28 12.28 32.2 12.28 44.48 0l22.24-22.24c12.28-12.28 12.28-32.19 0-44.48L242.72 256z" />
                        </svg>
                    </div>
                </div>
                <div className="search">
                    <div className="group-button">
                        <button className="button-link sigin">Đăng kí</button>
                        <button className="button-link login">Đăng nhập</button>
                    </div>
                </div>
                <div className="sidebar" id="sidebarScreenSmall">
                    <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="bars"
                        className="svg-inline--fa fa-bars fa-w-14" role="img" xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 448 512">
                        <path fill="currentColor"
                            d="M16 132h416c8.837 0 16-7.163 16-16V76c0-8.837-7.163-16-16-16H16C7.163 60 0 67.163 0 76v40c0 8.837 7.163 16 16 16zm0 160h416c8.837 0 16-7.163 16-16v-40c0-8.837-7.163-16-16-16H16c-8.837 0-16 7.163-16 16v40c0 8.837 7.163 16 16 16zm0 160h416c8.837 0 16-7.163 16-16v-40c0-8.837-7.163-16-16-16H16c-8.837 0-16 7.163-16 16v40c0 8.837 7.163 16 16 16z">
                        </path>
                    </svg>
                </div>
                <div className="nav__overlay"></div>
            </div>
        </header>

    )
}
