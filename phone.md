---
layout: default
title: Google Popup
permalink: /mirror/
---

<h1>Google Popup</h1>
<p>Click the button below to open Google in a new window:</p>
<button id="openBtn">Open Google</button>

<script>
document.getElementById("openBtn").onclick = () => {
  const popup = window.open(
    "https://www.google.com",
    "_blank",
    "width=1000,height=700,resizable=yes,scrollbars=yes"
  );
  // Focus the popup window
  if (popup) popup.focus();
};
</script>
