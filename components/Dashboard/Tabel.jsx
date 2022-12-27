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
                                        <tr>
                                            <td>1.</td>
                                            <td>United States</td>
                                            <td>3.000.000</td>
                                            <td>1.000.000</td>
                                            <td>250.000</td>
                                        </tr>
                                        :
                                        <tr>
                                            <td>1.</td>
                                            <td>Jawa Timur</td>
                                            <td>10.000</td>
                                            <td>3.000</td>
                                            <td>400</td>
                                        </tr>
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
