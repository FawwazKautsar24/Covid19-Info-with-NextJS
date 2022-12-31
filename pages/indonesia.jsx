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
        const dataIndo = await fetch(`${config["local-api"].base_url}/prov.json`);
        const itemsIndo = await dataIndo.json();
        
        return { items, statData, itemsIndo };
    }
    
    render(){
        const { items, statData, itemsIndo } = this.props;

        return (
            <IndexPage isGlobal={false} data={items} statistik={statData} dataIndo={itemsIndo} />
        );
    }
}

export default Indonesia;
