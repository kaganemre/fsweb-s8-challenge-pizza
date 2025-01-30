import React, { useState, useEffect } from "react";
import { Input, FormFeedback } from "reactstrap";

const malzemeListe = [
  { name: "Pepperoni", malzeme: "Pepperoni", isChecked: true },
  { name: "Tavuk Izgara", malzeme: "Tavuk Izgara", isChecked: false },
  { name: "Mısır", malzeme: "Mısır", isChecked: true },
  { name: "Sarımsak", malzeme: "Sarımsak", isChecked: false },
  { name: "Ananas", malzeme: "Ananas", isChecked: true },
  { name: "Sosis", malzeme: "Sosis", isChecked: true },
  { name: "Soğan", malzeme: "Soğan", isChecked: false },
  { name: "Brokoli", malzeme: "Brokoli", isChecked: false },
  { name: "Biber", malzeme: "Biber", isChecked: false },
  { name: "Kabak", malzeme: "Kabak", isChecked: false },
  { name: "Kanada Jambonu", malzeme: "Kanada Jambonu", isChecked: false },
  { name: "Domates", malzeme: "Domates", isChecked: false },
  { name: "Jalepeno", malzeme: "Jalepeno", isChecked: true },
  { name: "Sucuk", malzeme: "Sucuk", isChecked: false },
];

const formData = {
  boyut: "Orta",
  kalinlik: "Orta",
  malzeme: malzemeListe.filter((m) => m.isChecked),
  isim: "",
  not: "",
  adet: 1,
  secimler: 0,
  toplam: 0,
};
const errorMessages = {
  isim: "En az 3 karakter içermelidir.",
  malzeme: "Malzeme en az 4 en fazla da 10 adet seçilebilir.",
};

const boyut = ["Küçük", "Orta", "Büyük"];

export default function OrderForm({ onSubmit }) {
  const [form, setForm] = useState(formData);
  const [malzemeler, setMalzemeler] = useState(malzemeListe);
  const [isValid, setIsValid] = useState(false);
  const [errors, setErrors] = useState({
    isim: null,
    malzeme: true,
  });
  const handleChange = (event) => {
    let { id, name, value, type, checked } = event.target;

    if (id === "increase") {
      value = form.adet + 1;
    }

    if (id === "decrease") {
      value = form.adet > 1 ? form.adet - 1 : 1;
    }

    if (type === "checkbox") {
      const mListe = [...malzemeler];
      const mIndex = mListe.findIndex((m) => m.malzeme === value);

      mListe[mIndex] = {
        ...mListe[mIndex],
        isChecked: checked,
      };
      setMalzemeler([...mListe]);
      value = mListe.filter((m) => m.isChecked === true);
    }

    setForm({ ...form, [name]: value });
    validateField(name, value);
  };

  const validateField = (name, value) => {
    let isValid;
    if (name === "isim") {
      isValid = value.trim().length >= 3;
    } else if (name === "malzeme") {
      isValid = value.length >= 4 && value.length <= 10;
    } else {
      isValid = true;
    }

    setErrors((prevErrors) => ({ ...prevErrors, [name]: isValid }));
  };

  useEffect(() => {
    const validation = Object.values(errors).every((err) => err === true);
    setIsValid(validation);
  }, [form]);

  useEffect(() => {
    const secimler = malzemeler.filter((m) => m.isChecked).length * 5;
    const toplam = secimler + 85.5 * form.adet;
    setForm((prevForm) => ({
      ...prevForm,
      secimler: secimler,
      toplam: toplam,
    }));
  }, [form.malzeme, form.adet]);

  const handleSubmit = (event) => {
    event.preventDefault();
    onSubmit(form, isValid);
  };

  return (
    <>
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
          <form onSubmit={handleSubmit}>
            <section
              className="d-flex justify-content-between"
              style={{ width: "424px" }}
            >
              <div className="d-flex flex-column mt-3">
                <h6 className="mb-3">
                  Boyut Seç<span className="red-star">*</span>
                </h6>
                {boyut.map((b, i) => (
                  <div key={i} className="mb-3">
                    <input
                      type="radio"
                      name="boyut"
                      id={b}
                      value={b}
                      checked={form.boyut === b}
                      onChange={handleChange}
                    />
                    <label htmlFor={b} className="ps-2">
                      {b}
                    </label>
                  </div>
                ))}
              </div>
              <div className="d-flex flex-column">
                <label
                  htmlFor="kalinlik"
                  className="mb-3"
                  style={{ fontWeight: 700, marginTop: ".85rem" }}
                >
                  Hamur Seç<span className="red-star">*</span>
                </label>
                <select
                  name="kalinlik"
                  id="kalinlik"
                  value={form.kalinlik}
                  onChange={handleChange}
                >
                  <option value="">Hamur Kalınlığı</option>
                  <option value="İnce">İnce</option>
                  <option value="Orta">Orta</option>
                  <option value="Kalın">Kalın</option>
                </select>
              </div>
            </section>
            <section className="mt-4">
              <h6 className="pb-2">
                Ek Malzemeler <span className="red-star">*</span>
              </h6>
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
                  {malzemeler.slice(0, 5).map((m, i) => {
                    return (
                      <div key={i} className="mb-3">
                        <input
                          key={m}
                          type="checkbox"
                          id={`checkbox-${m.malzeme}`}
                          name="malzeme"
                          value={m.malzeme}
                          onChange={handleChange}
                          checked={m.isChecked}
                        />
                        <label
                          htmlFor={`checkbox-${m.malzeme}`}
                          className="ms-3"
                        >
                          {m.name}
                        </label>
                      </div>
                    );
                  })}
                </div>
                <div className="me-5">
                  {malzemeler.slice(5, 10).map((m, i) => {
                    return (
                      <div key={i} className="mb-3">
                        <input
                          key={m}
                          type="checkbox"
                          id={`checkbox-${m.malzeme}`}
                          name="malzeme"
                          value={m.malzeme}
                          onChange={handleChange}
                          checked={m.isChecked}
                        />
                        <label
                          htmlFor={`checkbox-${m.malzeme}`}
                          className="ms-3"
                        >
                          {m.name}
                        </label>
                      </div>
                    );
                  })}
                </div>
                <div className="">
                  {malzemeler.slice(10, 14).map((m, i) => {
                    return (
                      <div key={i} className="mb-3">
                        <input
                          key={m}
                          type="checkbox"
                          id={`checkbox-${m.malzeme}`}
                          name="malzeme"
                          value={m.malzeme}
                          onChange={handleChange}
                          checked={m.isChecked}
                        />
                        <label
                          htmlFor={`checkbox-${m.malzeme}`}
                          className="ms-3"
                        >
                          {m.name}
                        </label>
                      </div>
                    );
                  })}
                </div>
              </div>

              {errors.malzeme === false && (
                <div
                  className="alert alert-danger"
                  role="alert"
                  style={{ width: "32rem", marginTop: "2rem" }}
                >
                  {errorMessages.malzeme}
                </div>
              )}

              <label className="mb-4 mt-5 f-weight" htmlFor="isim">
                İsim
              </label>
              <Input
                type="text"
                name="isim"
                id="isim"
                value={form.isim}
                onChange={handleChange}
                valid={errors.isim === true}
                invalid={errors.isim === false}
              />
              {!errors.isim && (
                <FormFeedback>{errorMessages.isim}</FormFeedback>
              )}
              <label className="mb-4 mt-4 f-weight">Sipariş Notu</label>
              <textarea
                name="not"
                value={form.not}
                onChange={handleChange}
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
                      type="button"
                      id="decrease"
                      name="adet"
                      className="btn btn-warning radius-left f-weight"
                      style={{ width: "50px", height: "50px" }}
                      value={form.adet}
                      onClick={handleChange}
                    >
                      -
                    </button>
                  </div>
                  <input
                    type="text"
                    value={form.adet}
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
                      type="button"
                      id="increase"
                      name="adet"
                      className="btn btn-warning radius-right f-weight"
                      style={{ width: "50px", height: "50px" }}
                      value={form.adet}
                      onClick={handleChange}
                    >
                      +
                    </button>
                  </div>
                </div>

                <div className="card mb-5" style={{ width: "22rem" }}>
                  <div className=" w-100">
                    <div className="pd-4">
                      <p className="f-weight">Sipariş Toplamı</p>

                      <div className="d-flex mb-2">
                        <span className="me-5 pr-50">Seçimler</span>
                        <span>
                          {form.secimler}
                          &#8378;
                        </span>
                      </div>
                      <div className="d-flex f-weight">
                        <span className="me-5 red-special pr-60">Toplam</span>
                        <span className="red-special">
                          {form.toplam}
                          &#8378;
                        </span>
                      </div>
                    </div>
                    <button
                      type="submit"
                      className="btn btn-warning rounded w-100 f-weight"
                      style={{ height: "50px" }}
                      disabled={!isValid}
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
