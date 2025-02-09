export default function Footer() {
  return (
    <footer className="container-fluid mt-5 footer">
      <section className="container-fluid d-flex footer-content">
        <div style={{ width: "315px" }}>
          <h1>
            Teknolojik <br /> Yemekler
          </h1>
          <ul className="mt-4">
            <li className="d-flex">
              <img
                src="images\iteration-2-images\footer\icons\icon-1.png"
                alt=""
                className=" pe-2"
                style={{ width: "32px", height: "25px" }}
              />
              <span>
                341 Londonderry Road,
                <br /> Istanbul Türkiye
              </span>
            </li>
            <li className="mt-4">
              <img
                src="images\iteration-2-images\footer\icons\icon-2.png"
                alt=""
                className="pe-2"
              />
              <span>aciktim@teknolojikyemekler.com</span>
            </li>
            <li className="mt-4">
              <img
                src="images\iteration-2-images\footer\icons\icon-3.png"
                alt=""
                className="pe-2"
              />
              <span>+90 216 123 45 67</span>
            </li>
          </ul>
        </div>
        <div style={{ width: "306px", marginTop: "70px" }}>
          <h5 className="mb-4">Hot Menu</h5>
          <ul
            className="d-flex flex-column gap-2"
            style={{ fontSize: "1.125rem", lineHeight: 1.85 }}
          >
            <li>Terminal Pizza</li>
            <li>5 Kişilik Hackathlon Pizza</li>
            <li>useEffect Tavuklu Pizza</li>
            <li>Beyaz Console Frosty</li>
            <li>Testler Geçti Mutlu Burger</li>
            <li>Position Absolute Acı Burger</li>
          </ul>
        </div>
        <div className="instagram-section">
          <h5 className="mb-5">Instagram</h5>
          <div className="row row-cols-3" style={{ rowGap: "1.1rem" }}>
            {Array.from({ length: 6 }).map((_, index) => (
              <img
                key={index}
                src={`images/iteration-2-images/footer/insta/li-${index}.png`}
                alt=""
              />
            ))}
          </div>
        </div>
      </section>
      <hr className="footer-divider" />
      <div className="d-flex justify-content-between my-4 footer-bottom">
        <span>&copy;&nbsp;2025 Teknolojik Yemekler.</span>
        <span>
          <svg
            width="18"
            height="15"
            viewBox="0 0 18 15"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M16.1497 3.81038C16.1612 3.97027 16.1612 4.13019 16.1612 4.29008C16.1612 9.16696 12.4493 14.7863 5.66497 14.7863C3.57486 14.7863 1.63325 14.1809 0 13.1302C0.296965 13.1644 0.582469 13.1759 0.890859 13.1759C2.61545 13.1759 4.20303 12.5934 5.4708 11.5997C3.84898 11.5655 2.48984 10.5033 2.02155 9.04134C2.25 9.07559 2.47841 9.09844 2.71828 9.09844C3.04949 9.09844 3.38073 9.05273 3.68909 8.97282C1.99874 8.63016 0.730934 7.1454 0.730934 5.35226V5.30659C1.22203 5.5807 1.79314 5.75202 2.39843 5.77484C1.40477 5.11239 0.753785 3.98169 0.753785 2.7025C0.753785 2.01723 0.936492 1.38906 1.25631 0.840832C3.0723 3.07941 5.80201 4.54131 8.86289 4.70123C8.8058 4.42712 8.77152 4.14162 8.77152 3.85608C8.77152 1.82306 10.4162 0.166992 12.4606 0.166992C13.5228 0.166992 14.4822 0.612422 15.156 1.33196C15.9898 1.17207 16.7893 0.863684 17.4974 0.441105C17.2233 1.29772 16.6408 2.01727 15.8756 2.47409C16.618 2.39418 17.3375 2.18855 17.9999 1.90304C17.4975 2.63398 16.8693 3.28497 16.1497 3.81038Z"
              fill="white"
            />
          </svg>
        </span>
      </div>
    </footer>
  );
}
