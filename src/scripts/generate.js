function generateLink() {
    const urlParams = new URLSearchParams(window.location.search);
    const link = urlParams.get('link');
    let timeoutId;

    function navigate() {
        let url = link;
        if (!/^https?:\/\//i.test(link)) {
            url = `https://${link}`;
        }
        window.location.href = url;
    }

    if (link) {
        // Delay for 6 seconds before navigating to the link
        timeoutId = setTimeout(navigate, 6000);

        // Add event listener for the Skip button
        const skipBtn = document.getElementById('skipBtn');
        if (skipBtn) {
            skipBtn.addEventListener('click', function() {
                clearTimeout(timeoutId);
                navigate();
            });
        }
    } else {
        document.body.innerHTML = '<h1>No link provided!</h1>';
    }
}

// Call the function to execute on page load
generateLink();