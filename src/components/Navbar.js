import React, {Component} from "react";
const roadMap = () => {
    window.open("https://cryptobroskis.com/about");
  };
  const home = () => {
    window.open("https://cryptobroskis.com/")
  };
  const smartContract = () => {
    window.open(
      "https://snowtrace.io/address/0xEB4F5d458B135A8993239f91ab3f45Ab92CD519e#code.io/token/0xeaa7aa689eec0e3ceb70e288d23e01e874a98e5c"
    );
  };

class Navbar extends Component {
    
   
    render() {
        return (
            <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
            <div class="container-fluid">
              <a class="navbar-brand" href="#"><img src="https://cryptobroskis.com/cbLogo.png" alt="" width="200"  class="d-inline-block align-text-top"></img></a>
              <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
              </button>
              <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
                <div class="navbar-nav">
                  <a class="nav-link active" aria-current="page" onClick={home}>Home</a>
                  <a class="nav-link" onClick={smartContract}>Go View Contract</a>
                  <a class="nav-link" onClick={roadMap}>Whitepaper</a>              
                </div>
              </div>
            </div>
          </nav>
        )
    }
}



export default Navbar;