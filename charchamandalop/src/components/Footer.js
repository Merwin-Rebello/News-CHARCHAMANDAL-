import React, { Component } from "react";

export class Footer extends Component {
  render() {
    return (
      <div>
        <footer className="bg-light text-center text-lg-start">
          <div className="text-center p-3 dark" style={{ bgcolor : " rgba(0, 0, 0, 0.2)"}}>
            © 2020 Copyright:
            <a className="text-dark" href="/">
              CHAARCHAMANDAL OVERPOWERED
            </a>
          </div>
        </footer>
      </div>
    );
  }
}

export default Footer;
