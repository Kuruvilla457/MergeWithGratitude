# Website Project

This project allows users to input a URL and generates a new webpage that redirects to the entered link after a 4-second delay. The project is built using HTML, CSS, and JavaScript, and it utilizes Netlify functions to save the generated links.

## Project Structure

```
website-project
├── src
│   ├── index.html          # Main HTML page for user input
│   ├── styles
│   │   └── main.css       # Styles for the website
│   ├── scripts
│   │   └── main.js        # JavaScript for the main page
│   ├── generate.html      # Page that redirects to the entered link
│   └── scripts
│       └── generate.js    # JavaScript for the generate page
├── netlify
│   └── functions
│       └── saveLink.js    # Serverless function to save links
├── package.json            # npm configuration file
└── README.md               # Project documentation
```

## Setup Instructions

1. Clone the repository to your local machine.
2. Navigate to the project directory.
3. Install the necessary dependencies by running:
   ```
   npm install
   ```
4. Deploy the project to Netlify for serverless function support.

## Usage

1. Open `src/index.html` in your web browser.
2. Enter a URL (e.g., `www.google.com`) in the input field.
3. Click the "Generate" button.
4. You will be redirected to `src/generate.html`, which will wait for 4 seconds before navigating to the entered link.

## Contributing

Feel free to submit issues or pull requests for improvements or bug fixes.