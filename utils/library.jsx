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

export const getAllMonth = (props) => {
    const monthEng = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Des'];    
    let nowDate = new Date();
    let day = null;
    let month = null;
    let year = null;
    let label = [];
    let positif = [];
    let sembuh = [];
    let meninggal = [];
    let active = [];
    let data = [];

    for (let value of props.statistik) {
        nowDate = new Date(value.Date);
        day = nowDate.getDate();
        month = nowDate.getMonth();
        year = nowDate.getFullYear();
        label.push(`${day} ${monthEng[Math.abs(month)]}`);
        active.push(value.Active);
        sembuh.push(value.Recovered);
        meninggal.push(value.Deaths);
        positif.push(value.Confirmed);
    }
    data = {
        label: label,
        active: active,
        sembuh: sembuh,
        meninggal: meninggal,
        positif: positif,
    }
    return data;
}
