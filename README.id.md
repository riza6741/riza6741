# Contoh Bot WhatsApp

Repositori ini berisi contoh sederhana bot WhatsApp yang dibuat dengan [whatsapp-web.js](https://github.com/pedroslopez/whatsapp-web.js). Bot ini akan mengulang kembali setiap pesan yang diterima.

## Langkah-langkah Menjalankan
1. Pasang Node.js (disarankan versi 16 atau lebih baru).
2. Instal dependensi:
   ```bash
   npm install
   ```
3. Jalankan bot:
   ```bash
   npm start
   ```
4. Pindai kode QR yang muncul menggunakan aplikasi WhatsApp di ponsel Anda untuk melakukan autentikasi.

Setelah berhasil autentikasi, setiap pesan teks yang Anda kirimkan ke bot akan dibalas dengan isi pesan yang sama.
Anda juga bisa mengirim `!ping` untuk mendapatkan balasan "pong" sebagai perintah sederhana.

