exports.handler = async (event) => {
    const { link } = JSON.parse(event.body);

    // Here you would typically save the link to a database
    // For demonstration purposes, we'll just log it
    console.log(`Link to save: ${link}`);

    return {
        statusCode: 200,
        body: JSON.stringify({ message: 'Link saved successfully!', link }),
    };
};