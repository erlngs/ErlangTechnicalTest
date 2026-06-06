# BankDash

**Nama:** Erlang Sinatrya Putra Yusya
**NIM:** 362358302083
**Jurusan:** Bisnis dan Informatika
**Program Studi:** Teknologi Rekayasa Perangkat Lunak

---

Dashboard BankDash modern dan responsif yang dibangun menggunakan **React + Vite + Tailwind CSS**.

## Demo

🔗 [Lihat Demo](https://ErlangBankDash.vercel.app/) &nbsp;|&nbsp; 📦 [Repository](https://github.com/erlngs/ErlangTechnicalTest.git)

---

## Fitur

- **Halaman Transaksi**: Filter tab (Semua / Pemasukan / Pengeluaran), ringkasan kartu, grafik pengeluaran, dan pagination
- **Halaman Akun**: Statistik saldo, riwayat transaksi, grafik debit & kredit, dan tagihan terkirim
- **Halaman Pengaturan**: Edit profil, toggle notifikasi, dan toggle keamanan 2FA
- **Responsif**: Dioptimalkan untuk desktop, tablet, dan mobile

---

## Teknologi

| Teknologi | Kegunaan |
|---|---|
| [React](https://reactjs.org/) | Library UI |
| [Vite](https://vitejs.dev/) | Build tool |
| [Tailwind CSS v4](https://tailwindcss.com/) | Styling |
| [React Router DOM](https://reactrouter.com/) | Client-side routing |
| [Recharts](https://recharts.org/) | Library grafik |
| [React Icons](https://react-icons.github.io/react-icons/) | Ikon |

---

## Struktur Proyek

```
src/
├── components/
│   ├── Sidebar.jsx
│   └── Navbar.jsx
├── icons/
├── pages/
│   ├── Transactions.jsx
│   ├── Accounts.jsx
│   └── Setting.jsx
├── App.jsx
└── main.jsx
```

---

## Menjalankan Proyek

**Prasyarat:** Node.js >= 18, npm >= 9

```bash
# Clone repositori
git clone https://github.com/username/nama-repo.git
cd nama-repo

# Install dependensi
npm install

# Jalankan development server
npm run dev
```

Buka browser di `http://localhost:5173`

```bash
# Build untuk produksi
npm run build
```

---

## Desain

UI berdasarkan desain Figma dari **Hub Academy - Inagata**.

| Warna | Hex |
|---|---|
| Primer | `#1814F3` |
| Teks Gelap | `#343C6A` |
| Teks Abu | `#718EBF` |
| Background | `#F5F7FA` |
| Sukses | `#16DBAA` |
| Bahaya | `#FE5C73` |

---

Dibuat oleh **Erlang Sinatrya Putra Yusya** untuk keperluan technical test magang.