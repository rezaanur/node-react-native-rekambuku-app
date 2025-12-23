📚 RekamBuku API - BackendRepositori ini berisi kode sumber untuk backend aplikasi RekamBuku, sebuah platform manajemen catatan buku digital. Proyek ini dibangun menggunakan Node.js dan Express.js, serta dideploy secara otomatis menggunakan Vercel.🚀 Fitur UtamaAutentikasi Pengguna: Registrasi dan Login menggunakan JWT (JSON Web Token).Manajemen Buku: Membuat, membaca, dan menghapus catatan buku.Upload Gambar: Integrasi dengan Cloudinary untuk penyimpanan gambar sampul buku secara cloud.Database NoSQL: Menggunakan MongoDB Atlas untuk penyimpanan data yang fleksibel.Keep-Alive System: Menggunakan Vercel Cron Jobs untuk memastikan server tetap aktif (mencegah cold start).Pagination: Mendukung pemuatan data buku secara bertahap (infinite scroll).🛠️ Stack TeknologiRuntime: Node.js.Framework: Express.js (v5.1.0).Database: MongoDB melalui Mongoose.Storage: Cloudinary.Deployment: Vercel.📂 Struktur ProyekPlaintextbackend/
├── src/
│   ├── lib/              # Konfigurasi database, Cloudinary, dan Cron
│   ├── middleware/       # Middleware autentikasi JWT
│   ├── models/           # Skema database (User & Book)
│   ├── routes/           # Endpoint API (Auth & Books)
│   └── index.js          # Entry point aplikasi utama
├── vercel.json           # Konfigurasi deployment & cron Vercel
└── package.json          # Dependensi proyek
⚙️ Persiapan LokalClone repositori:Bashgit clone https://github.com/rezaanur/node-react-native-rekambuku-app.git
cd backend
Instal dependensi:Bashnpm install
Konfigurasi Environment Variable:Buat file .env di root folder dan isi dengan kredensial berikut:Cuplikan kodePORT=3000
MONGO_URI=your_mongodb_atlas_uri
JWT_SECRET=your_jwt_random_string
CLOUDINARY_CLOUD_NAME=your_name
CLOUDINARY_API_KEY=your_key
CLOUDINARY_API_SECRET=your_secret
CRON_SECRET=your_cron_random_string
Jalankan aplikasi:Bashnpm run dev
🌐 Endpoint API UtamaMethodEndpointFungsiPOST/api/auth/registerDaftar akun baru.POST/api/auth/loginLogin pengguna.GET/api/booksAmbil semua buku (Pagination).POST/api/booksTambah buku baru (Protected).DELETE/api/books/:idHapus catatan buku (Protected).GET/api/cronEndpoint keep-alive Vercel.⏰ Cron Jobs (Keep-Alive)Aplikasi ini menggunakan fitur Vercel Cron Jobs yang dijadwalkan setiap hari pada pukul 10:00 UTC. Fitur ini memicu endpoint /api/cron untuk mengirim sinyal aktivitas ke server guna meminimalisir delay saat aplikasi mobile digunakan setelah lama tidak aktif.Author: Reza Nur Diyanto
