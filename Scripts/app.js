/* Main JavaScript file */
// global scope


//IIFE - Immediately Invoked Functiona Expression
(function () {
    "use strict";
    var pageBody = document.getElementsByTagName("body")[0];
    console.log(pageBody);
    pageBody.addEventListener("load", function(){
        console.log("Body loaded");
    });
    
    function PageSwitcher() {
        switch (document.title) {
            case "Home":
                Home();
                console.log("Home");
                break;
            case "About Me":
                About();
                break;
            case "Contact Me":
                Contact();
                break;
            case "Projects":
                Projects();
                break;
        }

    }

    function Home() {
        console.log("You are at the Home");
    }
    function About() {
        console.log("You are at the About");
    }
    function Contact() {
        console.log("You are at the Contact");
    }
    function Projects() {
        console.log("You are at the Projects");
    }

    //document.body.addEventListener("load", PageSwitcher);

})();