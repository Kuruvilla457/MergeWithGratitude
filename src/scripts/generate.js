function generateLink() {
    const urlParams = new URLSearchParams(window.location.search);
    const link = urlParams.get('link');
    alert(`Link: ${link}`);

    if (link) {
        // Delay for 4 seconds before navigating to the link
        setTimeout(() => {
            let url = link;
            if (!/^https?:\/\//i.test(link)) {
                url = `https://${link}`;
            }
            window.location.href = url;
        }, 5000);
    } else {
        document.body.innerHTML = '<h1>No link provided!</h1>';
    }
}

// Call the function to execute on page load
generateLink();