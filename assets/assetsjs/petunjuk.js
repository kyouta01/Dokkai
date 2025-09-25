// Isi daftar petunjuk Dokkai Quiz
document.addEventListener("DOMContentLoaded", () => {
  const guideList = document.getElementById("guideList");
  const guides = [
    "Pilih tema cerita (misal: Makan, Belanja, Hokkaido, Gedung Seni, Olahraga).",
    "Bacalah teks cerita pendek yang muncul di bagian atas halaman.",
    "Jawablah 5 pertanyaan pilihan ganda terkait isi teks tersebut.",
    "Setiap jawaban langsung menampilkan benar (✅) atau salah (❌).",
    "Gunakan tombol ‘Soal Berikutnya’ untuk melanjutkan ke pertanyaan selanjutnya.",
    "Skor akan dihitung otomatis dan ditampilkan di papan skor setelah semua soal selesai.",
    "Klik tombol ‘Menu Utama’ kapan saja untuk kembali ke halaman awal Dokkai."
  ];

  guides.forEach(text => {
    const li = document.createElement("li");
    li.textContent = text;
    guideList.appendChild(li);
  });
});
