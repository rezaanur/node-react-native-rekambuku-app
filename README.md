# 📚 RekamBuku API - Backend

Repositori ini berisi kode sumber untuk backend aplikasi **RekamBuku**, sebuah platform manajemen catatan buku digital. Proyek ini dibangun menggunakan **Node.js** dan **Express.js**, serta dideploy secara otomatis menggunakan **Vercel**.

## 🚀 Fitur Utama

* **Autentikasi Pengguna**: Registrasi dan Login menggunakan JWT (JSON Web Token).
* **Manajemen Buku**: Membuat, membaca, dan menghapus catatan buku.
* **Upload Gambar**: Integrasi dengan Cloudinary untuk penyimpanan gambar sampul buku secara cloud.
* **Database NoSQL**: Menggunakan MongoDB Atlas untuk penyimpanan data yang fleksibel.
* **Keep-Alive System**: Menggunakan Vercel Cron Jobs untuk memastikan server tetap aktif (mencegah *cold start*).
* **Pagination**: Mendukung pemuatan data buku secara bertahap (infinite scroll).

## 🛠️ Stack Teknologi

* **Runtime**: Node.js.
* **Framework**: Express.js (v5.1.0).
* **Database**: MongoDB melalui Mongoose.
* **Storage**: Cloudinary.
* **Deployment**: Vercel.

## 📂 Struktur Proyek

```text
backend/
├── src/
│   ├── lib/              # Konfigurasi database, Cloudinary, dan Cron
│   ├── middleware/       # Middleware autentikasi JWT
│   ├── models/           # Skema database (User & Book)
│   ├── routes/           # Endpoint API (Auth & Books)
│   └── index.js          # Entry point aplikasi utama
├── vercel.json           # Konfigurasi deployment & cron Vercel
└── package.json          # Dependensi proyek

```

## ⚙️ Persiapan Lokal

1. **Clone repositori**:
```bash
git clone [https://github.com/rezaanur/node-react-native-rekambuku-app.git](https://github.com/rezaanur/node-react-native-rekambuku-app.git)
cd backend

```


2. **Instal dependensi**:
```bash
npm install

```


3. **Konfigurasi Environment Variable**:
Buat file `.env` di root folder dan isi dengan kredensial berikut:
```env
PORT=3000
MONGO_URI=your_mongodb_atlas_uri
JWT_SECRET=your_jwt_random_string
CLOUDINARY_CLOUD_NAME=your_name
CLOUDINARY_API_KEY=your_key
CLOUDINARY_API_SECRET=your_secret
CRON_SECRET=your_cron_random_string

```


4. **Jalankan aplikasi**:
```bash
npm run dev

```



## 🌐 Endpoint API Utama

| Method | Endpoint | Fungsi |
| --- | --- | --- |
| `POST` | `/api/auth/register` | Daftar akun baru. |
| `POST` | `/api/auth/login` | Login pengguna. |
| `GET` | `/api/books` | Ambil semua buku (Pagination). |
| `POST` | `/api/books` | Tambah buku baru (Protected). |
| `DELETE` | `/api/books/:id` | Hapus catatan buku (Protected). |
| `GET` | `/api/cron` | Endpoint keep-alive Vercel. |

## ⏰ Cron Jobs (Keep-Alive)

Aplikasi ini menggunakan fitur **Vercel Cron Jobs** yang dijadwalkan setiap hari pada pukul 10:00 UTC. Fitur ini memicu endpoint `/api/cron` untuk mengirim sinyal aktivitas ke server guna meminimalisir delay saat aplikasi mobile digunakan setelah lama tidak aktif.


**Author:** [Reza Nur Diyanto](https://www.instagram.com/rzaanur)
