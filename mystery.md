---
layout: default
title: Mystery
permalink: /mystery/
---

# Mystery Browser

> A lightweight, safe “popup browser” for school-approved sites.

<script>
(function() {
    const allowedSites = [
        {name: "DuckDuckGo Lite", url: "https://lite.duckduckgo.com"},
        {name: "Mojeek", url: "https://www.mojeek.com"},
        {name: "Wikipedia", url: "https://en.wikipedia.org"},
        {name: "Your School Portal", url: "https://portal.yourschool.edu"}
    ];

    // Open popup window
    let popup = window.open(
        "", 
        'MysteryPopup',
        'width=1000,height=700,menubar=1,toolbar=1,location=1,status=1,scrollbars=1,resizable=1'
    );

    if (!popup) {
        alert('Popup blocked! Please allow popups for this site.');
        return;
    }

    // Create a simple menu in the popup
    popup.document.write('<h2>Mystery Browser</h2>');
    popup.document.write('<p>Select a site to open:</p>');
    allowedSites.forEach(site => {
        popup.document.write(
            `<button onclick="window.location.href='${site.url}'">${site.name}</button><br><br>`
        );
    });

    popup.document.write('<p>Only approved sites will load here.</p>');

})();
</script>
