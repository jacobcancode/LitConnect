export var pythonURI;
if (location.hostname === "localhost") {
        pythonURI = "http://localhost:8887";
} else if (location.hostname === "127.0.0.1") {
        pythonURI = "http://127.0.0.1:8887";
} else {
        pythonURI = "http://127.0.0.1:8887";
}
export var javaURI;
if (location.hostname === "localhost") {
        javaURI = "http://localhost:8887";
} else if (location.hostname === "127.0.0.1") {
        javaURI = "http://127.0.0.1:8887"; //rey
} else {
        javaURI = "http://127.0.0.1:8887";
}
export var pythonURI;
if (location.hostname === "localhost" || location.hostname === "127.0.0.1") {
    pythonURI = "http://localhost:8005";  // Same URI for localhost or 127.0.0.1
} else {
    pythonURI = "https://flask2025.nighthawkcodingsociety.com";
}

export const fetchOptions = {
    method: 'GET', // *GET, POST, PUT, DELETE, etc.
    mode: 'cors', // no-cors, *cors, same-origin
    cache: 'default', // *default, no-cache, reload, force-cache, only-if-cached
    credentials: 'include', // include, same-origin, omit
    headers: {
        'Content-Type': 'application/json',
        //'X-Origin': 'client' // New custom header to identify source
        //'X-API-Key': 'YOUR_API_KEY'
    },
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

