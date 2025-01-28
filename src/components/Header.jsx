export default function Header() {
  return (
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
  );
}
