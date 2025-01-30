export default function Success({ apiResponse }) {
  const response = apiResponse[0];
  console.log(response);
  return (
    <div className="bg-custom-red" style={{ height: "100vh" }}>
      <div className="container d-flex flex-column justify-content-center align-items-center">
        <h1 className="text-white mt-5">Teknolojik Yemekler</h1>
        <h6 className="lezzet-yolda mt-5">lezzetin yolda</h6>
        <h1 className="text-white siparis-alindi">SİPARİŞ ALINDI</h1>
        <hr style={{ width: "478px", height: "1.5px", color: "#FAF7F2" }} />
        <div className="d-flex flex-column align-items-center">
          <h4 className="text-white fw-normal mt-3">
            Position Absolute Acı Pizza
          </h4>
          <div className="d-flex flex-column align-items-center text-white pt-4 f-barlow">
            <div className="" style={{ paddingLeft: "1rem" }}>
              <p>Boyut: {response.boyut} </p>
              <p>Hamur: {response.kalinlik} </p>
              Ek Malzemeler:{" "}
              <span style={{ whiteSpace: "pre-wrap" }}>
                {response.malzeme
                  .map((res, index) =>
                    (index + 1) % 2 === 0
                      ? res.malzeme + ",\n"
                      : res.malzeme + ", "
                  )
                  .join("")
                  .slice(0, -2)}
              </span>
            </div>

            <div
              className="card mt-5 border border-light"
              style={{ width: "22rem", backgroundColor: "#CE2829" }}
            >
              <div className=" w-100">
                <div className="pd-4">
                  <p className="f-weight">Sipariş Toplamı</p>
                  <div className="d-flex mb-2">
                    <span className="me-5 pr-7rem">Seçimler</span>
                    <span>{response.secimler}&#8378;</span>
                  </div>
                  <div className="d-flex f-weight">
                    <span className="me-5 text-white pr-7rem">Toplam</span>
                    <span className="text-white">{response.toplam}&#8378;</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
