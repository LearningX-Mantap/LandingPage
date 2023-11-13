export default function Footer(){
    return(
        <>
        <div className="bg-[#F2F6FF] flex justify-center items-center">

        <footer className="footer p-10 max-w-7xl text-base-content">
  <aside>
  <img
                    className="h-30 w-auto"
                    src="public/img/logo_smk.png"
                    alt="Your Company"
                  />
    <p>SMK LearningX<br/>Dikembangkan oleh Tim LearningX<br/><small>Untuk bahan ajar LearningX</small></p>
  </aside> 
  <nav>
    <header className="footer-title">Bantuan</header> 
    <a className="link link-hover">Laporakan Masalah</a>
    <a className="link link-hover">FAQ</a>
    <a className="link link-hover">Syarat dan Ketentuan</a>
    <a className="link link-hover">Kebijakan Privasi</a>
  </nav> 
  <nav>
    <header className="footer-title">Sekolah</header> 
    <a className="link link-hover">Tentang Kami</a>
    <a className="link link-hover">Struktur Organisasi</a>

  </nav> 
  <nav>
    <header className="footer-title">Layangan Pengaduan konsumen</header> 
    <a className="link link-hover">Direktorat Jenderal Perlindungan Konsumen dan Tertib Niaga</a>
    <a className="link link-hover">Kementerian Perdagangan Republik Indonesia</a>
    <a className="link link-hover">Whatsapp: 085311111010 (WA Only)</a>
  </nav>
</footer>
        </div>
</>
    )
}