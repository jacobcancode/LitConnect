export const pythonURI = 'http://127.0.0.1:8887'; // Update this to your actual backend URL

export var javaURI;
if (location.hostname === "localhost") {
        javaURI = "http://localhost:8887";
} else if (location.hostname === "127.0.0.1") {
        javaURI = "http://127.0.0.1:8887"; //rey
} else {
        javaURI = "http://127.0.0.1:8887";
}

export const fetchOptions = {
    method: 'GET', // Default method
    headers: {
        'Content-Type': 'application/json'
    },
    credentials: 'include' // Include credentials
};
// User Login Function 
export function login(options) {
        // Modify the options to use the POST method and include the request body.
        const requestOptions  = {
                ...options, // This will copy all properties from options
                method: options.method, // Override the method property
                cache: options.cache, // Set the cache property
                body: JSON.stringify(options.body)
        };

        // Clear the message area
        document.getElementById(options.message).textContent = "";

        // Define the URL
        //const URL = 'https://ahaanv19.github.io/api/id'; // Corrected URL

        // Fetch JWT
        fetch(URL, requestOptions)
        .then(response => {
                // Trap error response from Web API
                if (!response.ok) {
                        const errorMsg = 'Login error: ' + response.status;
                        console.log(errorMsg);
                        document.getElementById(options.message).textContent = errorMsg;
                        return;
                }
                // Success!!!
                // Redirect to the Database location
                options.callback();
        })
        .catch(error => {
                console.error('There has been a problem with your fetch operation:', error);
        });
}

