import React from 'react'
import { Route } from 'react-router-dom'
import FooterAdxHomePage from '../components/FooterAdxHomePage'
import HeaderAdxHomePage from '../components/HeaderAdxHomePage'

export default function AdxHomePageTamplate(props) {

    const {Component, ...resProps} = props

    return ( <Route {...resProps}  render={(propsRoute) => {
        return <>
            <HeaderAdxHomePage />
                <Component {...propsRoute} />
            <FooterAdxHomePage />
        </>
    }} />
    )
}
