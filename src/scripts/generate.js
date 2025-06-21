function generateLink() {
    const urlParams = new URLSearchParams(window.location.search);

    if (link) {
        // Delay for 4 seconds before navigating to the link
        setTimeout(() => {
            window.location.href = `https://${link}`;
        }, 6000);
    } else {
        document.body.innerHTML = '<h1>No link provided!</h1>';
    }
}

// Call the function to execute on page load
generateLink();