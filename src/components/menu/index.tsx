import * as React from "react";
import { Link } from "react-router-dom";
const menus = [
    {
        path:'/home',
        value:'home'
    },
    {
        path:'/login',
        value:'login'
    },
    {
        path:'/demo',
        value:'demo'
    },
]
const menu = () => {
    return (
        <ul>
            {
                menus.map((r,i)=>{
                    return <li key={i} ><Link to={r.path} >{r.value}</Link></li>
                })
            }
        </ul>
    )
}

export default menu;