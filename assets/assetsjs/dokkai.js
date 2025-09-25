// Ambil parameter ?tema=
const params = new URLSearchParams(window.location.search);
const themeKey = params.get('tema') || 'makan';
const quizData = quizThemes[themeKey];

const storyBox   = document.getElementById('story-box');
const questionBox= document.getElementById('question-box');
const playerNameEl = document.getElementById('playerName');
const scoreEl    = document.getElementById('score');
const nextBtn    = document.getElementById('next-btn');

let currentQ = 0;
let score = 0;
let playerName = localStorage.getItem('playerName') || prompt("Nama pemain:");
if (!playerName) playerName = "Pemain";
playerNameEl.textContent = playerName;

// tampilkan cerita
storyBox.innerHTML = quizData.story.map(line => `<p>${line}</p>`).join("");

// tampilkan soal pertama
renderQuestion();

function renderQuestion(){
  const qData = quizData.questions[currentQ];
  questionBox.innerHTML = `
    <p class="q-text">${qData.q}</p>
    <div class="options">
      ${qData.options.map((opt,i)=>
        `<button class="opt-btn" data-idx="${i}">${opt}</button>`).join("")}
    </div>
  `;

  document.querySelectorAll('.opt-btn').forEach(btn=>{
    btn.addEventListener('click', checkAnswer);
  });
}

function checkAnswer(e){
  const idx = Number(e.target.dataset.idx);
  const correct = quizData.questions[currentQ].answer;
  if(idx === correct){
    e.target.classList.add('correct');
    score += 20;
    scoreEl.textContent = score;
  } else {
    e.target.classList.add('wrong');
  }
  // disable semua tombol opsi
  document.querySelectorAll('.opt-btn').forEach(b=>b.disabled = true);
}

nextBtn.addEventListener('click', ()=>{
  currentQ++;
  if(currentQ < quizData.questions.length){
    renderQuestion();
  } else {
    endQuiz();
  }
});

function endQuiz(){
  questionBox.innerHTML = `<h2>Quiz Selesai!</h2><p>Skor Akhir: ${score}</p>`;
  nextBtn.style.display = "none";

  // simpan ke localStorage scoreboard
  const board = JSON.parse(localStorage.getItem('scoreBoard')||"[]");
  board.push({
    name: playerName,
    score,
    date: new Date().toLocaleString(),
    game: "dokkai-quiz"
  });
  localStorage.setItem('scoreBoard', JSON.stringify(board));
}
