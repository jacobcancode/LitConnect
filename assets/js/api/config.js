export var pythonURI;
if (location.hostname === "localhost") {
        pythonURI = "http://localhost:8103";
} else if (location.hostname === "127.0.0.1") {
        pythonURI = "http://127.0.0.1:8103";
} else {
        pythonURI = "https://litconnect.stu.nighthawkcodingsociety.com";
}
export var javaURI;
if (location.hostname === "localhost") {
        javaURI = "http://localhost:8103";
} else if (location.hostname === "127.0.0.1") {
        javaURI = "http://127.0.0.1:8103"; //rey
} else {
        javaURI = "https://flocker-j.nighthawkcodingsociety.com";
}

// API configuration
export const API_CONFIG = {
    TIMEOUT: 30000, // 30 seconds timeout
    RETRY_ATTEMPTS: 3,
    RETRY_DELAY: 1000, // 1 second
    CACHE_DURATION: 15 * 60 * 1000, // 15 minutes in milliseconds
};

// Enhanced fetch options with better defaults
export const fetchOptions = {
    method: 'GET', // *GET, POST, PUT, DELETE, etc.
    mode: 'cors', // no-cors, *cors, same-origin
    cache: 'default', // *default, no-cache, reload, force-cache, only-if-cached
    credentials: 'include', // include, same-origin, omit
    headers: {
        'Content-Type': 'application/json',
        'X-Origin': 'client', // New custom header to identify source
        'X-Requested-With': 'XMLHttpRequest', // Helps identify AJAX requests
    },
    // Adding timeout to avoid hanging requests
    signal: AbortSignal.timeout(API_CONFIG.TIMEOUT),
};

// Simple in-memory cache
const apiCache = new Map();

// Enhanced fetch with caching, retries, and error handling
export async function fetchWithRetry(url, options, enableCache = false) {
    // Check cache if enabled and method is GET
    const isCacheable = enableCache && (!options.method || options.method === 'GET');
    if (isCacheable) {
        const cacheKey = `${url}-${JSON.stringify(options)}`;
        const cachedResponse = apiCache.get(cacheKey);
        
        if (cachedResponse && Date.now() - cachedResponse.timestamp < API_CONFIG.CACHE_DURATION) {
            return Promise.resolve(cachedResponse.data);
        }
    }
    
    // Setup retry logic
    let attempts = 0;
    
    const executeRequest = async () => {
        try {
            const controller = new AbortController();
            const timeoutId = setTimeout(() => controller.abort(), API_CONFIG.TIMEOUT);
            
            const fetchOptions = {
                ...options,
                signal: controller.signal,
            };
            
            const response = await fetch(url, fetchOptions);
            clearTimeout(timeoutId);
            
            // Non-2xx responses still need to be handled as errors
            if (!response.ok) {
                const errorBody = await response.text();
                throw new Error(`HTTP Error ${response.status}: ${errorBody}`);
            }
            
            const data = await response.json();
            
            // Cache the successful response if cacheable
            if (isCacheable) {
                const cacheKey = `${url}-${JSON.stringify(options)}`;
                apiCache.set(cacheKey, {
                    data,
                    timestamp: Date.now(),
                });
            }
            
            return data;
        } catch (error) {
            attempts++;
            
            // Retry logic - we retry on network errors and 5xx server errors
            if (attempts < API_CONFIG.RETRY_ATTEMPTS && 
                (error.name === 'AbortError' || 
                 error.message.includes('HTTP Error 5'))) {
                
                // Exponential backoff for retries
                const delay = API_CONFIG.RETRY_DELAY * Math.pow(2, attempts - 1);
                await new Promise(resolve => setTimeout(resolve, delay));
                return executeRequest();
            }
            
            // If we've exhausted retries or it's a client error, throw the error
            throw error;
        }
    };
    
    return executeRequest();
}

// User Login Function with improved error handling
export function login(options) {
    // Show loading state
    const messageEl = document.getElementById(options.message);
    if (messageEl) {
        messageEl.innerHTML = '<span class="loading"></span> Logging in...';
    }
    
    // Modify the options to use the POST method and include the request body.
    const requestOptions = {
        ...fetchOptions, // This will copy all properties from options
        method: options.method, // Override the method property
        cache: options.cache, // Set the cache property
        body: JSON.stringify(options.body)
    };

    // Fetch JWT
    fetch(options.URL, requestOptions)
    .then(response => {
        // Trap error response from Web API
        if (!response.ok) {
            return response.text().then(errorText => {
                throw new Error(`Login error: ${response.status} - ${errorText || 'Unknown error'}`);
            });
        }
        return response.json();
    })
    .then(data => {
        // Success!!!
        if (messageEl) {
            messageEl.textContent = "Login successful!";
            // Add fade effect
            messageEl.classList.add('fade-in');
            setTimeout(() => {
                messageEl.textContent = "";
            }, 2000);
        }
        
        // Store token if provided
        if (data.token) {
            localStorage.setItem('authToken', data.token);
        }
        
        // Redirect to the Dashboard or callback function
        options.callback();
    })
    .catch(error => {
        // Handle network or other errors
        console.error('Login error:', error);
        if (messageEl) {
            messageEl.textContent = error.message || 'An error occurred during login. Please try again.';
            messageEl.style.color = 'red';
        }
    });
}

// Add a function to clear cache if needed
export function clearApiCache() {
    apiCache.clear();
}
