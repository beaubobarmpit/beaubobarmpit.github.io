---
layout: default
title: Mystery
permalink: /mystery/
---

# Mystery

> Your “popup browser” launcher — opens a separate window when the page loads.

<script>
(function(){
    // URL to open automatically in the popup
    const defaultURL = "https://www.google.com";

    // Open popup window when page loads
    window.addEventListener('load', () => {
        const popup = window.open(
            defaultURL,
            'MysteryPopup',
            'width=1000,height=700,menubar=0,toolbar=1,location=1,status=1,scrollbars=1,resizable=1'
        );

        if (!popup) {
            alert('Popup blocked! Please allow popups for this site.');
        }
    });
})();
</script>
