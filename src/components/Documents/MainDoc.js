import React from "react";
import { Document, Page, Text, View, StyleSheet } from "@react-pdf/renderer";
import Tab1 from "../Tabs/Tab1";
import Tab2 from "../Tabs/Tab2";
import Tab3 from "../Tabs/Tab3";

const styles = StyleSheet.create({
    text: {
      width: "100%",
      backgroundColor: "#f0f0f0",
      color: "#212121"
    }
  });
  
  const MainDoc = (
    <Document>
      <Page style={styles.page} size="A4">
        <Tab1 />
      </Page>
      <Page style={styles.page} size="A4">
        <Tab2 />
      </Page>
      <Page style={styles.page} size="A4">
        <Tab3 />
      </Page>
    </Document>
  );

export default MainDoc;
  