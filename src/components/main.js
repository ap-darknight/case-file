import React, {useEffect, useState} from 'react';
import {Switch, Route, Redirect} from 'react-router-dom';
import Navbar from './Navbar/Navbar';
import Tab1 from './Tabs/Tab1';
import Tab2 from './Tabs/Tab2';
import Tab3 from './Tabs/Tab3';
import { Document, Page, PDFDownloadLink, StyleSheet } from "@react-pdf/renderer";
  
const MainDoc = () => (
    <Document>
      <Page size="A4">
        <Tab1 />
      </Page>
      <Page size="A4">
        <Tab2 />
      </Page>
      <Page size="A4">
        <Tab3 />
      </Page>
    </Document>
);


const Main = () => {
    const Mainref = React.createRef();
    const [isClient, setIsClient] = useState(false)

    useEffect(() => {
        setIsClient(true)
    }, [])

    return (
        <>  
            <Navbar doc={Mainref} />

            {isClient && (
            <PDFDownloadLink document={<MainDoc />} fileName="work.pdf">
                {({ blob, url, loading, error }) => (loading ? 'Loading document...' : 'Download my resume')}
            </PDFDownloadLink> 
            )}

            <div ref={Mainref} className="container-fluid m-0 p-2 mb-1 min-vh-100 d-flex align-items-center justify-content-center min-vw-100 bg-secondary">
                <Switch>
                    <Route path="/tab1"> <Tab1/> </Route>
                    <Route path="/tab2"> <Tab2/> </Route>
                    <Route path="/tab3"> <Tab3/> </Route>
                    <Redirect from="/" to="/tab1" />
                </Switch>
            </div>
            <MainDoc />
            
        </>
    );
};

export default Main;