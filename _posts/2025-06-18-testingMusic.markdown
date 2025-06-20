---
layout: post
title:  "Music Test"
date:   2025-06-18 22:32:17 -0500
categories: test
---

This post tests out music playing in the background.


<div id="music-control" style="text-align: left; padding: 10px 20px 0 0;">
  <img id="mute-btn" src="/assets/img/sound-on.png" alt="Toggle sound" style="width: 128px; cursor: pointer;">
</div>


<audio id="bg-music" autoplay loop>
  <source src="/assets/audio/Tyler.mp3" type="audio/mpeg">
  Your browser does not support the audio element.
</audio>

<script>
  document.addEventListener('DOMContentLoaded', () => {
    const audio = document.getElementById('bg-music');
    const muteBtn = document.getElementById('mute-btn');

    if (audio && muteBtn) {
      let isMuted = false;

      // Sync initial button image
      muteBtn.src = isMuted ? '/assets/img/sound-off.png' : '/assets/img/sound-on.png';

      muteBtn.addEventListener('click', () => {
        isMuted = !isMuted;
        audio.muted = isMuted;
        muteBtn.src = isMuted ? '/assets/img/sound-off.png' : '/assets/img/sound-on.png';
      });
    }
  });
</script>
