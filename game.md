<h1 id="score-display">Score: 0</h1>
<h2 id="timer-display" style="display:none;">Time left: 10</h2>

<div id="start-screen">
  <input id="username" placeholder="Your name">
  <button id="start-button">Start</button>
</div>

<div id="game-screen" style="display:none;">
  <button id="score-button">+1 Point</button>
</div>

<h2>Leaderboard</h2>
<ul id="leaderboard"></ul>

<!-- 🎨 Styling -->
<style>
  #score-button {
    padding: 1em 2em;
    font-size: clamp(16px, 5vw, 32px);
    max-width: 300px;
    width: 80vw;
    min-width: 120px;
    border-radius: 10px;
    cursor: pointer;
    text-align: center;
    white-space: nowrap;
  }

  #start-screen {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 1em;
    padding: 1em;
  }

  #start-button {
    padding: 0.75em 1.5em;
    font-size: 1rem;
    border-radius: 6px;
    cursor: pointer;
  }

  input#username {
    position: relative;
    z-index: 10;
    background: white;
    color: black;
    font-size: 1.2rem;
    padding: 0.5em;
    border-radius: 6px;
    border: 1px solid #ccc;
    width: 80%;
    max-width: 300px;
    box-sizing: border-box;
  }
</style>

<!-- 🔥 Firebase SDKs -->
<script src="https://www.gstatic.com/firebasejs/8.10.1/firebase-app.js"></script>
<script src="https://www.gstatic.com/firebasejs/8.10.1/firebase-firestore.js"></script>
<script src="https://www.gstatic.com/firebasejs/8.10.1/firebase-analytics.js"></script>

<!-- 🚀 Script Logic -->
<script>
  const firebaseConfig = {
    apiKey: "AIzaSyDFzMkGPgI3uKyKJF8Y0LptHenEvBC2v94",
    authDomain: "leaderboard-b642f.firebaseapp.com",
    projectId: "leaderboard-b642f",
    storageBucket: "leaderboard-b642f.appspot.com",
    messagingSenderId: "649441482251",
    appId: "1:649441482251:web:67c614a2e0a1f53ea6590e",
    measurementId: "G-87WGE5E96V"
  };

  firebase.initializeApp(firebaseConfig);
  firebase.analytics();
  const db = firebase.firestore();

  let score = 0;
  let timer = 10;
  let countdownInterval;

  const scoreDisplay = document.getElementById('score-display');
  const timerDisplay = document.getElementById('timer-display');
  const startScreen = document.getElementById('start-screen');
  const gameScreen = document.getElementById('game-screen');
  const usernameInput = document.getElementById('username');
  const startButton = document.getElementById('start-button');
  const scoreButton = document.getElementById('score-button');

  // Load leaderboard on page load
  window.addEventListener('DOMContentLoaded', loadLeaderboard);

  startButton.onclick = () => {
    const name = usernameInput.value.trim();
    if (!name) {
      alert("Please enter your name.");
      return;
    }
    startGame(name);
  };

  scoreButton.onclick = () => {
    score++;
    scoreDisplay.textContent = `Score: ${score}`;
  };

  function startGame(playerName) {
    score = 0;
    timer = 10;
    scoreDisplay.textContent = `Score: ${score}`;
    timerDisplay.textContent = `Time left: ${timer}`;
    timerDisplay.style.display = 'block';
    startScreen.style.display = 'none';
    gameScreen.style.display = 'block';

    countdownInterval = setInterval(() => {
      timer--;
      timerDisplay.textContent = `Time left: ${timer}`;
      if (timer <= 0) {
        clearInterval(countdownInterval);
        submitScore(playerName, score);
      }
    }, 1000);
  }

  function submitScore(name, score) {
    db.collection("leaderboard").add({ name, score })
      .then(() => {
        alert(`Time's up! Score submitted: ${score}`);
        resetToStart();
        loadLeaderboard();
      })
      .catch(err => {
        console.error("Error submitting score:", err);
        alert("Failed to submit score.");
        resetToStart();
      });
  }

  function resetToStart() {
    timerDisplay.style.display = 'none';
    gameScreen.style.display = 'none';
    startScreen.style.display = 'flex';
    usernameInput.value = '';
    scoreDisplay.textContent = 'Score: 0';
  }

  function loadLeaderboard() {
    db.collection("leaderboard")
      .orderBy("score", "desc")
      .limit(10)
      .get()
      .then(snapshot => {
        const list = document.getElementById("leaderboard");
        list.innerHTML = '';
        snapshot.forEach(doc => {
          const data = doc.data();
          const item = document.createElement("li");
          item.textContent = `${data.name}: ${data.score}`;
          list.appendChild(item);
        });
      })
      .catch(err => {
        console.error("Error loading leaderboard:", err);
      });
  }
</script>
