import React from "react"
import { NavLink, Outlet } from "react-router-dom"

export default function HostLayout() {
    const activeStyles = {
        fontWeight: "bold",
        textDecoration: "3px underline",
        color: "#161616"
    }

    return (
        <>
            <nav className="host-nav">
                <NavLink
                    to="."
                    end
                    className="fast-food"
                    style={({ isActive }) => isActive ? activeStyles : null}
                >
                    Fast Food App
                </NavLink>

                <NavLink
                    to="meesho"
                    className="meesho-nav"
                    style={({ isActive }) => isActive ? activeStyles : null}
                >
                   Meesho Clone
                </NavLink>
                
                <NavLink
                    to="spacesite"
                    className="electric-nav"
                    style={({ isActive }) => isActive ? activeStyles : null}
                >
                   Space site
                </NavLink>

            </nav>
            <Outlet/>
        </>
    )
}