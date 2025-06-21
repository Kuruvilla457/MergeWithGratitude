function handleGenerateLink() {
    const linkInput = document.getElementById('linkInput').value;
    if (linkInput) {
        // Save the link to the Netlify database
        fetch('/.netlify/functions/saveLink', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ link: linkInput })
        })
        .then(response => {
            if (response.ok) {
                // Redirect to generate.html with the link as a query parameter
                window.location.href = `generate.html?link=${encodeURIComponent(linkInput)}`;
            } else {
                alert('Failed to save the link. Please try again.');
            }
        })
        .catch(error => {
            console.error('Error:', error);
            alert('An error occurred. Please try again.');
        });
    } else {
        alert('Please enter a valid link.');
    }
}

document.getElementById('generateButton').addEventListener('click', handleGenerateLink);