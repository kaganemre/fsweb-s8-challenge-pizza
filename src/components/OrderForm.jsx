import React, { useState } from "react";
import { Container, InputGroup, InputGroupText, Input } from "reactstrap";

export default function OrderForm() {
  const [value, setValue] = useState(1);

  const decreaseValue = () => {
    setValue(value > 1 ? value - 1 : 1);
  };

  const increaseValue = () => {
    setValue(value + 1);
  };
  const firstMaterialGroup = [
    "Pepperoni",
    "Tavuk Izgara",
    "Mısır",
    "Sarımsak",
    "Ananas",
  ];
  const secondMaterialGroup = ["Sosis", "Soğan", "Sucuk", "Biber", "Kabak"];
  const thirdMaterialGroup = ["Kanada Jambonu", "Domates", "Jalepeno", "Sucuk"];

  const firstInputGroup = Array.from({ length: 5 });
  const secondInputGroup = Array.from({ length: 5 });
  const thirdInputGroup = Array.from({ length: 4 });
  return (
    <>
      <header className="container-fluid d-flex flex-column align-items-center gap-3 justify-content-center bg-custom-red text-white">
        <a className="nav-link text-white" href="#">
          <h1>Teknolojik Yemekler</h1>
        </a>
        <nav className="d-flex align-items-center gap-1">
          <a className="text-white" href="#">
            Anasayfa
          </a>
          <span>-</span>
          <a className="text-white" href="#">
            Sipariş Oluştur
          </a>
        </nav>
      </header>
      <section className="container d-flex flex-column align-items-center justify-content-center mt-5">
        <h4 style={{ marginLeft: "85px" }}>Position Absolute Acı Pizza</h4>
        <div className="d-flex mt-3 sp" style={{ width: "195px" }}>
          <span>85.50₺</span>
          <div className="d-flex gap-5" style={{ paddingLeft: "370px" }}>
            <span>4.9</span>
            <span>(200)</span>
          </div>
        </div>
        <article className="mt-3" style={{ width: "195px", textAlign: "left" }}>
          <p style={{ width: "530px" }}>
            Frontent Dev olarak hala position:absolute kullanıyorsan bu çok acı
            pizza tam sana göre. Pizza, domates, peynir ve genellikle çeşitli
            diğer malzemelerle kaplanmış, daha sonra geleneksel olarak odun
            ateşinde bir fırında yüksek sıcaklıkta pişirilen, genellikle
            yuvarlak, düzleştirilmiş mayalı buğday bazlı hamurdan oluşan İtalyan
            kökenli lezzetli bir yemektir. . Küçük bir pizzaya bazen pizzetta
            denir.
          </p>
          <form>
            <section className="d-flex">
              <div className="d-flex flex-column mt-3">
                <h6 className="mb-3">
                  Boyut Seç<span className="red-star">*</span>
                </h6>
                <div className="mb-3" style={{ width: "300px" }}>
                  <input type="radio" name="hamur" id="kucuk" value="kucuk" />
                  <label htmlFor="kucuk" className="ps-2">
                    Küçük
                  </label>
                </div>
                <div className="mb-3">
                  <input type="radio" name="hamur" id="orta" value="orta" />
                  <label htmlFor="orta" className="ps-2">
                    Orta
                  </label>
                </div>
                <div className="mb-3">
                  <input type="radio" name="hamur" id="buyuk" value="buyuk" />
                  <label htmlFor="buyuk" className="ps-2">
                    Büyük
                  </label>
                </div>
              </div>
              <div>
                <label
                  htmlFor="hamur"
                  className="mt-2 mb-2"
                  style={{ fontWeight: 700 }}
                >
                  Hamur Seç<span className="red-star">*</span>
                </label>
                <select name="hamur" id="hamur">
                  <option selected>Hamur Kalınlığı</option>
                  <option value="ince">İnce</option>
                  <option value="orta">Orta</option>
                  <option value="kalın">Kalın</option>
                </select>
              </div>
            </section>
            <section className="mt-4">
              <h6 className="pb-2">Ek Malzemeler</h6>
              <p style={{ width: "300px" }}>
                En fazla 10 malzeme seçebilirsiniz. 5&#8378;
              </p>
              <div
                className="d-flex gap-5 mt-5"
                style={{
                  width: "500px",
                  fontWeight: "700",
                  color: "#5F5F5F",
                }}
              >
                <div>
                  {firstInputGroup.map((e, i) => {
                    return (
                      <div className="mb-3">
                        <input
                          type="checkbox"
                          id={firstMaterialGroup[i]}
                          name={firstMaterialGroup[i]}
                          value={firstMaterialGroup[i]}
                        />
                        <label htmlFor={firstMaterialGroup[i]} className="ms-3">
                          {firstMaterialGroup[i]}
                        </label>
                      </div>
                    );
                  })}
                </div>
                <div className="me-5">
                  {secondInputGroup.map((e, i) => {
                    return (
                      <div className="mb-3">
                        <input
                          type="checkbox"
                          id={secondMaterialGroup[i]}
                          name={secondMaterialGroup[i]}
                          value={secondMaterialGroup[i]}
                        />
                        <label
                          htmlFor={secondMaterialGroup[i]}
                          className="ms-3"
                        >
                          {secondMaterialGroup[i]}
                        </label>
                      </div>
                    );
                  })}
                </div>
                <div className="">
                  {thirdInputGroup.map((e, i) => {
                    return (
                      <div className="mb-3">
                        <input
                          type="checkbox"
                          id={thirdMaterialGroup[i]}
                          name={thirdMaterialGroup[i]}
                          value={thirdMaterialGroup[i]}
                        />
                        <label htmlFor={thirdMaterialGroup[i]} className="ms-3">
                          {thirdMaterialGroup[i]}
                        </label>
                      </div>
                    );
                  })}
                </div>
              </div>

              <label className="mb-4 mt-5 f-weight">İsim</label>
              <input type="text" name="" id="" className="form-control" />

              <label className="mb-4 mt-4 f-weight">Sipariş Notu</label>
              <textarea
                name=""
                id=""
                className="form-control"
                placeholder="Siparişine eklemek istediğin bir not var mı?"
              ></textarea>
              <hr className="mt-4" />

              <div
                className="d-flex align-items-start"
                style={{ width: "530px", height: "256px" }}
              >
                <div className="mb-5 me-5 d-flex justify-content-center">
                  <div>
                    <button
                      className="btn btn-warning radius-left f-weight"
                      style={{ width: "50px", height: "50px" }}
                      onClick={decreaseValue}
                    >
                      -
                    </button>
                  </div>
                  <input
                    type="text"
                    value={value}
                    readOnly
                    className="form-control bg-white f-weight"
                    style={{
                      textAlign: "center",
                      width: "50px",
                      height: "50px",
                    }}
                  />
                  <div>
                    <button
                      className="btn btn-warning radius-right f-weight"
                      style={{ width: "50px", height: "50px" }}
                      onClick={increaseValue}
                    >
                      +
                    </button>
                  </div>
                </div>

                <div class="card mb-5" style={{ width: "22rem" }}>
                  <div class=" w-100">
                    <div className="pd-4">
                      <p className="f-weight">Sipariş Toplamı</p>

                      <div className="d-flex mb-2">
                        <span className="me-5 pr-50">Seçimler</span>
                        <span>25.00&#8378;</span>
                      </div>
                      <div className="d-flex f-weight">
                        <span className="me-5 red-special pr-60">Toplam</span>
                        <span className="red-special">110.50&#8378;</span>
                      </div>
                    </div>
                    <button
                      type="submit"
                      className="btn btn-warning rounded w-100 f-weight"
                      style={{ height: "50px" }}
                    >
                      SİPARİŞ VER
                    </button>
                  </div>
                </div>
              </div>
            </section>
          </form>
        </article>
      </section>
    </>
  );
}
