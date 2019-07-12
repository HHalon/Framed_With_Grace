import React, { Component } from "react";
import ScrollspyNav from "react-scrollspy-nav";
import { StickyContainer, Sticky } from 'react-sticky';
import "./navbar.css";
import Contact from "./Contact/Contact";
import Gallery from "./Gallery/Gallery";
import AboutMe from "./AboutMe/AboutMe"

class App extends Component {
    render() {
        return (
            <div>
                <div><StickyContainer>
        {/* Other elements can be in between `StickyContainer` and `Sticky`,
        but certain styles can break the positioning logic used. */}
        <Sticky>
          {({
            style,
 
            // the following are also available but unused in this example
            isSticky,
            wasSticky,
            distanceFromTop,
            distanceFromBottom,
            calculatedHeight
          }) => (
            <header style={style}>
              {/* ... */}
            </header>
          )}
        </Sticky>
        {/* ... */}
      </StickyContainer>
                <div>
                    <ScrollspyNav
                        scrollTargetIds={["contact", "gallery", "about"]}
                        activeNavClass="is-active"
                        scrollDuration="1000"
                        headerBackground="true"
                    >
                        
                        <ul>
                            <div className="navbar">
                        	<div className="home"><li><a href="/"><span>Home</span></a></li></div>
                        	<div className = "contact"><li><a href="#contact"><span>Contact</span></a></li></div>
                        	<div className= "about"><li><a href="#about"><span>About Me</span></a></li></div>
                            <div className = "gallery"><li><a href="#gallery"><span>Gallery</span></a></li></div>
                    	</div>
                        </ul>
                        
                    </ScrollspyNav>
                    </div>
                </div>
                
                <div>
                    <div style={{"height": "400px"}}><span>Welcome!</span></div>
                    <div id="gallery" style={{"height": "500px"}}><span><Gallery/></span></div>
                    <div id="about" style={{"height": "500px"}}><span><AboutMe/></span></div>
                    <div id="contact" style={{"height": "500px"}}><span><Contact/></span></div>
                </div>
            </div>
        );
    }
}

export default App;	