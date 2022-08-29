import React from "react";
import { AiFillGithub } from 'react-icons/ai';


export const Footer = () => (
    <div className="container-fluid ">
        <footer className="footer ">
            <div className="" style={{ background: "#080808", color: "#f4f3f5" }}>
                © 2022 Copyright <br />

                <a style={{ fontFamily: "sans-serif", color: "#f4f3f5" }} className="us">Vanessa Pinchetti</a> <br></br>
                <a className="icongithub fs-3 px-1" href="https://github.com/VanessaPinchetti" target="_blank"
                    rel="noopener noreferrer">
                    <AiFillGithub style={{ color: "#f4f3f5" }} />
                </a>



            </div>
        </footer>
    </div>


);
export default Footer;

