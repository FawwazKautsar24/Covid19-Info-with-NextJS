export const sum = function(key, props){
    if(props.isGlobal === true){
        switch(key){
            case 'Confirmed':
                return props.data.Global.TotalConfirmed;
            case 'Recovered':
                if(props.data.Global.TotalRecovered === 0){
                    return props.data.Global.TotalConfirmed - props.data.Global.TotalDeaths - props.data.Global.NewConfirmed;
                }
                return props.data.Global.TotalRecovered;
            case 'Deaths':
                return props.data.Global.TotalDeaths;
            case 'Active':
                return props.data.Global.NewConfirmed;
            default:
                return 0;
        }
    }else{
        switch(key){
            case 'Confirmed':
                return props.data.Countries[78].TotalConfirmed;
            case 'Recovered':
                if(props.data.Countries[78].TotalRecovered === 0){
                    return props.data.Countries[78].TotalConfirmed - props.data.Countries[78].TotalDeaths - props.data.Countries[78].NewConfirmed;
                }
                return props.data.Countries[78].TotalRecovered;
            case 'Deaths':
                return props.data.Countries[78].TotalDeaths;
            case 'Active':
                return props.data.Countries[78].NewConfirmed;
            default:
                return 0;
        }
    }
}
