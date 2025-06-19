---
layout: post
title:  "Music Test"
date:   2025-06-18 22:32:17 -0500
categories: test
---


This post tests out music playing in the background

<div id="music-control" style="position: fixed; bottom: 20px; right: 20px; z-index: 1000;">
  <img id="mute-btn" src="/assets/img/sound-on.png" alt="Toggle sound" style="width: 40px; cursor: pointer;">
</div>

<audio id="bg-music" autoplay loop muted>
  <source src="/assets/audio/Tyler.mp3" type="audio/mpeg">
  Your browser does not support the audio element.
</audio>

<script>
  const audio = document.getElementById('bg-music');
  const muteBtn = document.getElementById('mute-btn');
  let isMuted = true;

  // Unmute when user clicks
  muteBtn.addEventListener('click', () => {
    isMuted = !isMuted;
    audio.muted = isMuted;
    muteBtn.src = isMuted ? '/assets/img/Sign.png' : '/assets/img/Franklin.png';
  });
</script>
