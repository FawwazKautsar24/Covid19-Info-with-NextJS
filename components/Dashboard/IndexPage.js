import Header from "../Layout/Header";

function IndexPage(){
    const contentStyle = {
        minHeight: "90vh",
        top: "56px",
        backgroundColor: "#f1f1f9",
        overflowX: "hidden"
    }

    return (
        <div style={{backgroundColor: "#f1f1f9"}}>
            <Header />
            <div className="container content position-relative" style={contentStyle}>
                <div className="row">
                    <div className="col-12 d-flex justify-content-center text-center">
                        <p className="mt-5 h2">Covid19 Info</p>
                    </div>
                    <div className="col-12 d-flex justify-content-center text-center">
                        <p className="mt-3 f18">Website Pemantauan Terkini Kasus Kasus Virus Covid19</p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default IndexPage;
