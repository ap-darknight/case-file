import React from 'react';
import Pdf from 'react-to-pdf';


const Navbar = ({doc}) => {
    const onPrint = () =>{
        console.log(doc.current);
    }
    return (
        <nav class="navbar navbar-expand-lg fixed-top navbar-light bg-light">
            <div class="container-fluid">
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarNav">
                <ul class="navbar-nav text-center">
                    <li class="nav-item">
                        <a class="nav-link" href="/tab1">Tab1</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="/tab2">Tab2</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="/tab3">Tab3</a>
                    </li>
                </ul>
                <ul className="navbar-nav ms-auto text-center">
                    <li class="nav-item">
                        <Pdf targetRef={doc} filename="work.pdf">
                            {({toPdf}) => <button onClick={toPdf} className="btn p-2 m-2 btn-outline-primary">Download PDF</button> }
                        </Pdf>
                    </li>
                    <li class="nav-item">
                        <button onClick={onPrint} className="btn p-2 m-2 btn-outline-success">Share</button>
                    </li>
                </ul>
            </div>
            </div>
        </nav>
    );
}

export default Navbar;
