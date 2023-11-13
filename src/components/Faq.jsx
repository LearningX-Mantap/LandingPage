export default function Faq(){
return (
<>
    <div className="flex justify-center items-center h-screen mx-auto max-w-7xl  sm:px-6 sm:py-32 lg:px-8">
        <div className="title text-center">
            <h1 className="text-4xl font-semibold text-gray-800">Aktifitas Sekolah</h1>
            <hr className="border-t-7 border-hijau my-2 w-64 mx-auto">
            </hr>
                <h5 className="font-normal text-gray-800 mt-5">Berdayakan Masa Depan, Wujudkan Prestasi: Aktifitas Sekolah Menginspirasi, Membentuk, dan Membawa Kreativitas Menuju Puncak Keberhasilan!</h5>
            <div className=" flex items-center gap-3 mt-[45px]">
                <div className="item-1">
                    <div className="card w-80 h-90 bg-base-100 shadow-xl">
                        <figure><img src="src/assets/img/activity/sport.jpg" alt="Shoes" /></figure>
                        <div className="card-body">
                            <h2 className="card-title">Kejurnas Basket!</h2>
                            <p className="text-justify">Siswa SMK LearningX meraih prestasi gemilang dalam Kejurnas Basket, menunjukkan dedikasi ...</p>
                            <div className="card-actions justify-end">
                      
                            </div>
                        </div>
                    </div>
                </div>
                <div className="item-2">
                    <div className="card w-96  bg-base-100 shadow-xl">
                        <figure><img src="src/assets/img/activity/graduation.jpg" alt="Shoes" /></figure>
                        <div className="card-body">
                            <h2 className="card-title">Melangkah ke Dunia Profesional</h2>
                            <p className="text-justify">Dengan kelulusan ini, siswa-siswa SMK LearningX Angkatan 2023 siap melangkah ke dunia profesional, membawa bersama pengetahuan, keterampilan, dan semangat untuk mencapai kesuksesan di masa depan.</p>
                            <div className="card-actions justify-end">
                      
                            </div>
                        </div>
                    </div>
                </div>
                <div className="item-3">
                    <div className="card w-80 h-90 bg-base-100 shadow-xl">
                        <figure><img src="src/assets/img/activity/teamwork.jpg" alt="Shoes" /></figure>
                        <div className="card-body">
                            <h2 className="card-title">Prestasi Masa Depan</h2>
                            <p className="text-justify">Melalui presentasi proyek, siswa SMK LearningX membuktikan bahwa mereka adalah pemimpin ...</p>
                            <div className="card-actions justify-end">
                      
                            </div>
                        </div>
                    </div>
                </div>
                
            </div>

        </div>



    </div>
</>
)
}