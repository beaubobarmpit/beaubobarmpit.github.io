---
layout: page
title: Roguelike Browser Game
permalink: /roguelike/
nav_exclude = true
---

<style>
  #game {
    display: grid;
    grid-template-columns: repeat(10, 32px);
    grid-template-rows: repeat(10, 32px);
    gap: 1px;
    margin: 2rem auto;
    max-width: 320px;
  }

  .cell {
    width: 32px;
    height: 32px;
    display: flex;
    justify-content: center;
    align-items: center;
    background: #222;
    color: white;
    font-size: 1rem;
  }

  .player {
    background: #4caf50;
  }

  .wall {
    background: #555;
  }
</style>

<div id="game"></div>

<script>
  const size = 10;
  const game = document.getElementById("game");

  let playerPos = { x: 1, y: 1 };

  const map = Array.from({ length: size }, (_, y) =>
    Array.from({ length: size }, (_, x) =>
      (x === 0 || y === 0 || x === size - 1 || y === size - 1 ? 1 : 0)
    )
  );

  function drawMap() {
    game.innerHTML = '';
    for (let y = 0; y < size; y++) {
      for (let x = 0; x < size; x++) {
        const cell = document.createElement("div");
        cell.className = "cell";
        if (map[y][x] === 1) cell.classList.add("wall");
        if (x === playerPos.x && y === playerPos.y) cell.classList.add("player");
        game.appendChild(cell);
      }
    }
  }

  function movePlayer(dx, dy) {
    const newX = playerPos.x + dx;
    const newY = playerPos.y + dy;
    if (map[newY][newX] === 0) {
      playerPos.x = newX;
      playerPos.y = newY;
      drawMap();
    }
  }

  document.addEventListener("keydown", (e) => {
    if (e.key === "ArrowUp") movePlayer(0, -1);
    if (e.key === "ArrowDown") movePlayer(0, 1);
    if (e.key === "ArrowLeft") movePlayer(-1, 0);
    if (e.key === "ArrowRight") movePlayer(1, 0);
  });

  drawMap();
</script>
