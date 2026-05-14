// 1. Database Cerita (JSON) - Pastikan 'konten' diisi teks lengkap
const dataCerita = [
    {
        id: 1,
        judul: "Plester cinta",
        kategori: "Romansa",
        thumbnail: "f.jpg",
        deskripsi: "dukungan manis dan kesetiaan di balik perbedaan fisik antara sepasang kekasih.",
        konten: `Bola basket sedang memantul ke sana-kemari mengikuti arahan tangan remaja yang sedang asyik berebut dan berlari. Sorak-sorak gembira dan histeris terdengar dari bangku penonton.

                Walaupun hari ini adalah pertandingan basket remaja putri, tetap saja tidak kalah seru saat remaja putra yang bermain. Semua itu karena memang mereka sudah cukup jago dan mampu membuat siapa pun terkagum-kagum.

                Seorang wanita dengan rambut panjang terikat sedang berusaha membawa bola menuju ring lawan, tapi hadangan terus terjadi. Hingga akhirnya bola mampu masuk ring, tapi membuat wanita bertubuh jangkung tersebut jatuh tersungkur karena melawan arus lawan.

                Priiiit suara wasit meniupkan peluit menggema.

                “Medis! Tania luka tolong,” ucap wasit.

                Seorang pria bertubuh mungil datang berlari dengan membawa kotak P3K. Pertandingan mau tidak mau akhirnya dijeda terlebih dahulu.

                Tania telah dibawa ke pinggir lapangan dan pertandingan mulai berjalan kembali. “Aku enggak kenapa-napa, Do,” ucap Tania pada Rido yang sedang mengobati lukanya.

                “Iya aku tau, hati-hati bisa dong Tan. Kamu cewek masa banyak lecet di mana-mana.”

                Tania cemberut. “Terus kalau aku penuh luka kamu enggak suka aku lagi gitu?” ucap tania.

                Rido menempelkan plester pada dagu dan lutut Tania setelah itu Rido mengacak-acak rambut Tania. “Aku bakal jadi plester kamu,” ucap Rido.

                “Kalau sudah selesai diobatin bisa kalian pacarannya nanti dulu, pertandingan penting ini,” ucap seorang pemain yang melipir sedikit ke pinggir lapangan.

                Tania berlari dan mendekati wasit menandakan dirinya sudah siap bertanding. Rido dan Tania jelas berbeda bahkan banyak yang meledek pasangan ini. Bagaimana tidak, mereka memiliki tinggi badan yang berbeda dan Ridolah yang pendek di sini.

                Namun, Rido sudah bertekad, bahkan saat ia memutuskan untuk masuk ekskul PMR, itu semua untuk Tania agar Rido dapat mendukung Tania selalu.`,
        waktu_baca: "selamat membaca",
        penulis: "Elly Abriyanti Widyaningrum"
    },
    {
        id: 2,
        judul: "Sinyal dari Andromeda",
        kategori: "Sci-Fi",
        thumbnail: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=400",
        deskripsi: "Pesan rahasia yang tersembunyi di balik barisan kode bintang.",
        konten: `Luna menatap layar monitornya dengan cemas. Sinyal yang ia terima bukan berasal dari bumi, melainkan dari galaksi Andromeda. Barisan kode digital itu membentuk pola yang tidak biasa, sebuah pesan terenkripsi yang berisi koordinat rahasia.

"Apakah kita benar-benar sendirian?" bisiknya pelan. Detik berikutnya, seluruh perangkat di laboratorium mati total, menyisakan satu kalimat di layar: 'Kami menunggu kalian di gerbang cahaya'.`,
        waktu_baca: "10 mnt",
        penulis: "Luna C."
    },
    {
        id: 3,
        judul: "Keponakan ku di culik Wewe Gombel",
        kategori: "Horor",
        thumbnail: "wewe.jpg",
        deskripsi: "seorang yang anak berusia 6 tahun di culik Wewe Gombel.",
        konten: `Menjelang Maghrib, suasana kampung biasanya mulai sepi. Warga yang memiliki anak kecil akan segera mengajak anak-anak masuk rumah dan menutup rapat pintu. Di kampung kami, itu sudah seperti aturan tak tertulis. Semua karena cerita menyeramkan tentang hantu wewe gombel yang dipercaya suka menculik anak kecil di waktu senja.

                Tapi keponakanku, Zaki, seolah tak percaya dengan cerita itu. Usianya baru enam tahun, dan hari itu ia pulang dari mengaji agak terlambat karena mengikuti acara ulang tahun temannya. Jalan pulang yang harus dilewati melewati perkebunan aren yang sunyi dan gelap.

                Ibunya, bibiku, menunggu cemas di rumah. Saat malam tiba dan Zaki belum juga pulang, keresahan berubah jadi kepanikan. Bersama suaminya, mereka mulai mencari ke rumah teman-teman Zaki, tapi hasilnya nihil. Ketika jam menunjukkan pukul sepuluh malam, warga pun turun tangan membantu pencarian.

                Isu yang beredar, Zaki diculik wewe gombel. Salah satu tetangga menyarankan untuk memanggil Pak Ijal, sesepuh desa yang dikenal punya mata batin. Menurut Pak Ijal, Zaki tak jauh dari rumah, ia berada di area kebun aren. Warga pun membawa obor dan peralatan dapur, mengetuk-ngetukkannya sambil memanggil nama Zaki.

                Tiba-tiba, paman melihat sepeda Zaki di tanah, dan tak lama kemudian, seseorang melihat ke atas pohon. Zaki ada di sana! Wajahnya pucat, tubuhnya berlumpur, dan bajunya bukan yang dikenakannya pagi tadi. Ia dibawa pulang dengan penuh haru. Setelah tenang dan diruqyah Pak Ijal, Zaki akhirnya bercerita.

                Di kebun, ia mendengar suara cekikikan dan melihat sosok wanita cantik di balik pohon. Wanita itu tersenyum dan tiba-tiba membawanya terbang ke atas pohon tinggi, lalu memeluknya erat sambil menawarkan makanan dan minuman. Untungnya Zaki menolak semua itu.

                Menurut Pak Ijal, jika Zaki sempat menyentuh makanan atau minuman dari makhluk itu, ia bisa menjadi bisu seumur hidup. Konon, makanan itu sebenarnya adalah kotoran manusia, yang disulap agar tampak lezat.

                Sosok hantu itu dipercaya sebagai arwah Omas, wanita mandul yang dulu dibuang suaminya dan akhirnya bunuh diri secara tragis. Karena kerinduan mendalam akan anak, arwahnya terus bergentayangan menculik anak-anak yang dianggapnya bisa menjadi pengganti anak kandung yang tak pernah ia miliki.

                Peristiwa ini membuat warga kampung semakin waspada. Kini semua anak diwajibkan pulang sebelum Maghrib, dan setiap malam Jumat, pengajian rutin digelar untuk mendoakan arwah Omas agar dapat beristirahat dengan tenang.


`,
        waktu_baca: "15 mnt",
        penulis: "Ajen Dianawati"
    },
    {
        id: 4,
        judul: "Kancil dan Buaya",
        kategori: "Fantasi",
        thumbnail: "kanc.jpg",
        deskripsi: "Kancil yang menggunakan kecerdikannya untuk menyeberangi sungai .",
        konten: `Cerita bermula ketika si kancil yang sedang mencari makan di hutan, melihat banyak pohon yang sudah berbuah di area di seberang sungai. Namun karena aliran air sungai yang deras, kancil kesulitan untuk menyeberang.

                    Sungai tersebut juga menjadi tempat tinggal dari para buaya. Lantas ia menemukan ide cemerlang dan memanggil seekor buaya. “Hey, buaya keluarlah! Aku punya kabar gembira!” seru si kancil. Buaya pun datang menghampirinya, kemudian kancil bercerita bahwa ia memiliki daging segar dan hendak membagikannya untuk seluruh buaya di sungai.

                    Kancil kemudian menyuruh buaya tersebut untuk memanggil teman-temannya yang lain, agar mereka juga mendapatkan daging segar tersebut. Mendengar hal itu, si buaya lantas memanggil teman-temannya.

                    Agar bisa membagikan daging dengan adil, si kancil meminta para buaya untuk berjejer rapi. “Berbarislah agar aku bisa menghitung berapa jumlah kalian,” perintahnya. Para buaya yang percaya lantas mulai berbaris membentuk jembatan dari tepi sungai hingga ke tepi wilayah di seberangnya.

                    Kesempatan ini kemudian digunakan oleh si kancil untuk menyeberang sungai sambil berpura-pura menghitung jumlah buaya. Sesampainya di seberang, ia pun tertawa terbahak-bahak.

                    “Sebenarnya aku tidak punya daging, aku hanya membutuhkan bantuan kalian untung menyeberang. Hahaha!” kata kancil. Para buaya pun marah dan mencoba menangkapnya. Sayangnya si kancil sudah terlanjur lari menjauh dari tepian sungai.`,
        waktu_baca: "10 mnt",
        penulis: "Eka PutraRahimidin Zahari & Jaatar Taib"
    },
    {
        id: 5,
        judul: "Rembulan di Balik Kaca",
        kategori: "Romansa",
        thumbnail: "https://images.unsplash.com/photo-1507502707541-f369a3b18502?w=400",
        deskripsi: "Kisah tentang harapan yang terpantul pada dinginnya jendela malam.",
        konten: `Di balik kaca jendela yang berembun, ia menatap rembulan. Harapan yang selama ini ia simpan perlahan mulai memudar seperti cahaya bulan yang tertutup awan. 

        Ia teringat janji yang diucapkan setahun lalu, di bawah langit yang sama. Namun kini, hanya ada sunyi dan pantulan wajahnya sendiri yang tampak lelah di balik beningnya kaca. Apakah rembulan di sana juga merasakan rindu yang sama?`,
        waktu_baca: "8 mnt",
        penulis: "Sastra A."
    },
];

// 2. Fungsi Global untuk Render
function renderStories(items) {
    const storyGrid = document.getElementById('story-grid');
    if (!storyGrid) return; 

    storyGrid.innerHTML = items.map(story => `
        <a href="baca.html?id=${story.id}" style="text-decoration: none; color: inherit;">
            <div class="glass-card">
                <div class="poster">
                    <img src="${story.thumbnail}" alt="${story.judul}">
                    <div class="type-tag">${story.kategori}</div>
                    <div class="ep-tag">${story.waktu_baca} baca</div>
                </div>
                <div class="card-body" style="padding: 15px;">
                    <h4 style="font-size: 0.9rem; margin-bottom: 5px;">${story.judul}</h4>
                    <p style="font-size: 0.75rem; color: #94a3b8; margin-bottom: 10px;">${story.deskripsi}</p>
                    <div style="font-size: 0.7rem; border-top: 1px solid rgba(255,255,255,0.1); padding-top: 8px;">
                        Oleh: <b style="color: var(--accent);">${story.penulis}</b>
                    </div>
                </div>
            </div>
        </a>
    `).join('');
}

// 3. Logika Utama
document.addEventListener('DOMContentLoaded', () => {
    const searchInput = document.getElementById('searchInput');

    // Inisialisasi Pertama
    renderStories(dataCerita);

    // Fitur Cari
    if (searchInput) {
        searchInput.addEventListener('input', (e) => {
            const val = e.target.value.toLowerCase();
            const filtered = dataCerita.filter(s => 
                s.judul.toLowerCase().includes(val) || s.penulis.toLowerCase().includes(val)
            );
            renderStories(filtered);
        });
    }

    // Auto Slider
    const slider = document.getElementById('hero-slider');
    if (slider) {
        setInterval(() => {
            if (slider.scrollLeft + slider.clientWidth >= slider.scrollWidth) {
                slider.scrollTo({ left: 0, behavior: 'smooth' });
            } else {
                slider.scrollBy({ left: slider.clientWidth, behavior: 'smooth' });
            }
        }, 6000);
    }

    // LOGIKA KHUSUS HALAMAN BACA.HTML
    // Mengecek apakah elemen 'judul-cerita' ada di halaman ini
    if (document.getElementById('judul-cerita')) {
        const params = new URLSearchParams(window.location.search);
        const storyId = params.get('id');
        const story = dataCerita.find(s => s.id == storyId);

        if (story) {
            document.getElementById('judul-cerita').innerText = story.judul;
            document.getElementById('info-penulis').innerText = `Oleh: ${story.penulis} | ${story.kategori}`;
            document.getElementById('isi-cerita').innerText = story.konten;
            document.title = `${story.judul} | StoryCenter`;
        } else {
            document.getElementById('judul-cerita').innerText = "Cerita Tidak Ditemukan";
            document.getElementById('isi-cerita').innerText = "Maaf, cerita yang Anda cari tidak tersedia.";
        }
    }
});

// Fungsi Filter Kategori Global
// Fungsi Filter Kategori Global
function filterByCategory(cat) {
    // 1. Ambil data yang sesuai kategori
    // Jika 'Semua', tampilkan semua data, jika tidak, filter berdasarkan kategori
    const filtered = cat === 'Semua' 
        ? dataCerita 
        : dataCerita.filter(s => s.kategori === cat);

    // 2. Render ulang grid dengan data yang sudah difilter
    renderStories(filtered);

    // 3. Scroll otomatis ke bagian grid agar user tahu konten berubah
    const gridSection = document.getElementById('story-grid');
    if (gridSection) {
        gridSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }

    // 4. (Opsional) Menambahkan kelas 'active' pada tombol kategori yang diklik
    const tags = document.querySelectorAll('.genre-wrap span');
    tags.forEach(tag => {
        tag.style.background = "var(--glass)"; // Reset warna semua tag
        tag.style.borderColor = "var(--glass-border)";
        
        if (tag.innerText === cat) {
            tag.style.background = "var(--accent)"; // Highlight yang aktif
            tag.style.color = "#000";
            tag.style.borderColor = "var(--accent)";
        } else {
            tag.style.color = "var(--text)";
        }
    });
}