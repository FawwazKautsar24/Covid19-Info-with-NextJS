import React from "react";
import { Line, Pie } from "react-chartjs-2";

const Grafik = (props) => {
    let dataCovid = null;
    let data = null;

    if(!props.isGlobal){
        dataCovid = [2, 2, 2, 2, 4, 4, 6, 19, 27, 34];
        data = {
            labels: ["2 Des", "3 Des", "4 Des", "5 Des", "6 Des", "7 Des", "8 Des", "9 Des", "10 Des", "11 Des", "12 Des"],
            datasets: [
                {
                    label: "Jumlah Positif",
                    fill: false,
                    lineTension: 0.1,
                    backgroundColor: "rgba(229, 56, 50, 0.4)",
                    borderColor: "rgba(229, 56, 56, 1)",
                    borderCapStyle: "butt",
                    borderDash: [],
                    borderDashOffset: 0.0,
                    borderJoinStyle: "miter",
                    pointBorderColor: "rgba(229, 56, 56, 1)",
                    pointBackgroundColor: "#fff",
                    pointBorderWidth: 1,
                    pointHoverWidth: 1,
                    pointHoverRadius: 10,
                    pointHoverBackgroundColor: "rgba(229, 56, 56, 1)",
                    pointHoverBorderColor: "rgba(220, 220, 220, 1)",
                    pointBorderWidth: 2,
                    pointRadius: 1,
                    pointHitRadius: 10,
                    data: dataCovid,
                }
            ]
        }
    }
    const dataPie = {
        labels: [
            'Positif',
            'Sembuh',
            'Meninggal'
        ],
        datasets: [
            {
                data: [20000, 12000, 300],
                backgroundColor: ['#FF6384', '#36A2EB', '#FFCE56'],
                hoverBackgroundColor: ['#FF6384', '#36A2EB', '#FFCE56'],
            }
        ]
    }

    return (
        <div className="row mb-5">
            <div className="col-lg-12 col-md-12 col-sm-12 col-xl-12">
                <div className="card overflow-hidden bg-white">
                    <div className="card-header">
                        <h3 className="card-title">Statistik Virus Corona di {props.isGlobal ? "Dunia" : "Indonesia"}</h3>
                    </div>
                    <div className="card-body">
                        <div className="chart-wrapper">
                            {props.isGlobal ?
                                <Pie data={dataPie} /> : 
                                <Line data={data} width={100} height={50} />
                            }
                        </div>
                        <div className="row mt-6">
                            <div className="col text-center">
                                <h5 className="font-weight-normal mt-2">POSITIF</h5>
                                <h3 className="mb-1">20.000</h3>
                                <p className="mb-0 text-muted"><span className="text-lg font-weight-700"></span> ORANG</p>
                            </div>
                            <div className="col text-center">
                                <h5 className="font-weight-normal mt-2">SEMBUH</h5>
                                <h3 className="mb-1">12.000</h3>
                                <p className="mb-0 text-muted"><span className="text-lg font-weight-700"></span> ORANG</p>
                            </div>
                            <div className="col text-center">
                                <h5 className="font-weight-normal mt-2">MENINGGAL</h5>
                                <h3 className="mb-1">300</h3>
                                <p className="mb-0 text-muted"><span className="text-lg font-weight-700"></span> ORANG</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Grafik;
