import React from "react";
import HeaderNav from "../../Component/Header/HeaderNav";
import "./ProductionPage.css";

export default class ProductionPage extends React.Component {
    render() {
        return(
            <div id='Production-container'>
                <HeaderNav hrId="homehr" />
                <p>productionpage</p>
            </div>
        );
    }
}