import {Document, Page, View,Text } from "@react-pdf/renderer";
import React from "react";

const ReunionsPDF = ({reunion}) =>{
    return(
        <Document>
            <Page size ="A4"
            style={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center",
                backgroundColor: "white",
              }}>
            <View
            style={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center",
                backgroundColor: "white",
                padding: 10,
              }}
            >
                <Text style={{ color: "#3388af", fontSize: "42px" }}>Fecha de la reunion: {reunion.fecha}, organizada por:{reunion.responsablereunion} </Text>
            </View>      
            </Page>
        </Document>
    )
}
export default ReunionsPDF;