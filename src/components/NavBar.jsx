import React, { Component } from 'react';

class NavBar extends Component {
    render() {
        return (
            <div className="NavBar">
                <h1> NavBar </h1>
                <nav id="nav">
                    <ul>
                        <li><a href="#top" id="top-link" class="skel-layers-ignoreHref"><span class="icon fa-home">Intro</span></a></li>
                        <li><a href="#portfolio" id="portfolio-link" class="skel-layers-ignoreHref"><span class="icon fa-th">Portfolio</span></a></li>
                        <li><a href="#about" id="about-link" class="skel-layers-ignoreHref"><span class="icon fa-user">About Me</span></a></li>
                        <li><a href="#interests" id="interests-link" class="skel-layers-ignoreHref"><span class="icon fa-dribbble">More Interests</span></a></li>
                        <li><a href="#contact" id="contact-link" class="skel-layers-ignoreHref"><span class="icon fa-envelope">Contact</span></a></li>
                    </ul>
                </nav>
                <hr />
            </div>
        )
    }
}

export default NavBar;