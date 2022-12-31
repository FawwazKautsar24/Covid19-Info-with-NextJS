import NumberFormat from "react-number-format";

const Tabel = (props) => {
    return (
        <div className="row mb-5">
            <div className="col-sm-12 col-md-12 col-lg-12 col-xl-14">
                <div className="card">
                    <div className="card-header">
                        <h3 className="card-title">Data Kasus Virus Corona di {props.isGlobal ? "Dunia" : "Indonesia"}</h3>
                    </div>
                    <div className="cardd-body">
                        <div className="table-responsive">
                            <table className="table table-bordered table-hover mb-0 text-nowrap">
                                <thead>
                                    <tr>
                                        <th>No.</th>
                                        <th>{props.isGlobal ? "Negara" : "Provinsi"}</th>
                                        <th>Positif</th>
                                        <th>Sembuh</th>
                                        <th>Meninggal</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {props.isGlobal ?
                                        (props.data && props.data.Countries.map((val, index) => {
                                            return (
                                                <tr key={index}>
                                                    <td>{++index}.</td>
                                                    <td>{val.Country}</td>
                                                    <td><NumberFormat value={val.TotalConfirmed} displayType={'text'} thousandSeparator={","} decimalSeparator={"."} defaultValue={"-"} /></td>
                                                    <td><NumberFormat value={val.TotalConfirmed - val.TotalDeaths - val.NewConfirmed} displayType={'text'} thousandSeparator={","} decimalSeparator={"."} defaultValue={"-"} /></td>
                                                    <td><NumberFormat value={val.TotalDeaths} displayType={'text'} thousandSeparator={","} decimalSeparator={"."} defaultValue={"-"} /></td>
                                                </tr>
                                            );
                                        }))
                                        :
                                        (props.dataIndo && props.dataIndo.list_data.map((val, index) => {
                                            return (
                                                <tr key={index}>
                                                    <td>{++index}.</td>
                                                    <td>{val.key}</td>
                                                    <td><NumberFormat value={val.jumlah_kasus} displayType={'text'} thousandSeparator={","} decimalSeparator={"."} defaultValue={"-"} /></td>
                                                    <td><NumberFormat value={val.jumlah_sembuh} displayType={'text'} thousandSeparator={","} decimalSeparator={"."} defaultValue={"-"} /></td>
                                                    <td><NumberFormat value={val.jumlah_meninggal} displayType={'text'} thousandSeparator={","} decimalSeparator={"."} defaultValue={"-"} /></td>
                                                </tr>
                                            );
                                        }))
                                    }
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Tabel;
