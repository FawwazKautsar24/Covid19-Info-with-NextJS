import React from "react";
import IndexPage from "../components/Dashboard/IndexPage";
import _fetch from "isomorphic-fetch";
const config = require("../config.json");

class Indonesia extends React.Component{
    static async getInitialProps(){
        const data = await fetch(`${config["global-api"].base_url}/summary`);
        const items = await data.json();
        const stat = await fetch(`${config["global-api"].base_url}${config["global-api"].total_live}/indonesia`);
        const statData = await stat.json();
        
        return { items, statData };
    }
    
    render(){
        const { items, statData } = this.props;

        return (
            <IndexPage isGlobal={false} data={items} statistik={statData} />
        );
    }
}

export default Indonesia;
