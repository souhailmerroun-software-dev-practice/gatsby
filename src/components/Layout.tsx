import React, { ReactNode } from "react";
import Nav from "./Nav";
import "bootstrap/dist/css/bootstrap.min.css"

interface LayoutProps {
    children: ReactNode;
}

export default function Layout(props: LayoutProps) {
    return (
        <>
            <Nav />

            {props.children}
        </>
    );
}