function generateLink() {
    const urlParams = new URLSearchParams(window.location.search);
    const link = urlParams.get('link');

    if (link) {
        // Delay for 4 seconds before navigating to the link
        setTimeout(() => {
            window.location.href = `https://${link}`;
        }, 4000);
    } else {
        document.body.innerHTML = '<h1>No link provided!</h1>';
    }
}

// Call the function to execute on page load
generateLink();