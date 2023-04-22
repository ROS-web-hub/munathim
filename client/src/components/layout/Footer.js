import React from 'react';
import Fade from "react-reveal/Fade";
import { Link } from 'react-router-dom';

const Footer = () => {

    return (
        <footer>
            <div className="d-flex justify-content-around py-5" style={{ height: 100, backgroundColor: '#080202' }} >
                <Fade bottom>
                    <div className="">
                        <ul className="list-unstyled copyright text-white text-center">
                            <li>&copy; Copyright 2021 Munathim</li>
                        </ul>
                    </div>
                </Fade>
            </div>
        </footer>
    );
};

export default Footer;
