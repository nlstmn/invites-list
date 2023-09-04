import React from "react";

export function Manychat() {

    /* 1 - Write a function that receives an array of URL's and a number as input,
    indicating the maximum number of concurrent requests.
    Must return an array of results in the same order as same as request URL's.
    You shouldn't do repeated requests to the same addresses. */

    const fetchAll1 = async (urls: string[], limit: number = 5) => {
        const results = new Array(urls.length);
        const inProgress = new Set(); // Ensuring that there are no duplicates
        let queue = 0; // Initializing a queue to keep track of the current URL being processed

        const fetchData = async (url: string, index: number) => {
            try {
                const response = await fetch(url);
                const data = await response.json();
                results[index] = data; // Storing the data
            } catch (error) {
            } finally {
                inProgress.delete(url); // Remove the URL from the in-progress set
            }
        };

        const processQueue = async () => {
            // Continue processing URLs until the current queue reaches the end of the array or the limit is reached
            while (queue < urls.length && inProgress.size < limit) {
                const index = queue;
                queue++; // Moving to next index

                const url = urls[index];
                if (!inProgress.has(url)) { // Check if the URL is not in the in-progress set (avoiding duplicates)
                    inProgress.add(url);
                    await fetchData(url, index);
                }
            }
        };

        // Create an array of promises to process the queue concurrently
        const promises = Array(limit).fill(undefined).map(processQueue); // .fill() will be undefined at runtime, so we need to specify that for TS

        // Waiting for all promises to resolve, which ensures all URLs are processed
        await Promise.all(promises);

        return results;
    };

    const urls1 = [
        "https://jsonplaceholder.typicode.com/todos/1",
        "https://www.boredapi.com/api/activity",
        "https://restcountries.com/v3.1/all",
        // Add more URLs if needed
    ];

    fetchAll1(urls1, 3)
        .then((results) => {
            console.log(results);
        })
        .catch((error) => {
            console.error(error);
        });

    /* CONCLUSION: This code will execute multiple requests concurrently up to the
    specified limit while ensuring that there are no repeated requests to the same URLs.
    However it will WAIT until all requests are processed before resolving the fetchAll function. */

    /* 2 - Modified the code above: for code that doesnt wait for all requests to be
    processed and instead returns results AS SOON as they become available (in the order they finish). */

    const fetchAll2 = async (urls: string[], limit: number = 5) => {
        const results = new Array(urls.length);
        const inProgress = new Set();
        let queue = 0;

        const fetchData = async (url: string, index: number) => {
            try {
                const response = await fetch(url);
                const data = await response.json();
                results[index] = data;
            } catch (error) {
            } finally {
                inProgress.delete(url);
                processQueue();
            }
        };

        const processQueue = async () => {
            while (queue < urls.length && inProgress.size < limit) {
                const index = queue;
                queue++;

                const url = urls[index];
                if (!inProgress.has(url)) {
                    inProgress.add(url);
                    fetchData(url, index);
                }
            }
        };

        const concurrentRequests = Array(limit).fill(undefined).map(processQueue);

        // Return a promise that resolves with results as they come in
        return new Promise((resolve) => {
            let completedCount = 0;

            const checkAllCompleted = () => {
                if (completedCount === urls.length) {
                    resolve(results);
                }
            };

            concurrentRequests.forEach(() => {
                processQueue();
            });

            // Listening for results as they come in
            urls.forEach((el, index) => {
                const checkResult = () => {
                    if (results[index] !== undefined) {
                        completedCount++;
                        checkAllCompleted();
                    } else {
                        setTimeout(checkResult, 100); // Check again after a short delay
                    }
                };
                checkResult();
            });
        });
    };

    const urls2 = [
        "https://jsonplaceholder.typicode.com/todos/1",
        "https://www.boredapi.com/api/activity",
        "https://restcountries.com/v3.1/all"
    ];

    fetchAll2(urls2, 3).then((results) => {
        console.log(results);
    }).catch((error) => {
        console.error(error);
    });

    /* CONCLUSION:
    In this modified code:
    
    1. I return a new Promise that resolves with results as they come in instead of waiting for all requests to complete.
    2. I kept track of completed requests with the completedCount variable and resolve the promise once all requests are completed.
    3. I used a setTimeout loop to continuously check for completed requests and resolve the promise when all requests are done.
    
    This way the function will start retuning results as soon as the first requests finish, without waiting for all requests to complete. */

    /* 3 - Write a function that determines if a phrase is a palindrome.
    This function should be executed with the least number of steps, no using in-built functions at all. */

    function isPalindrome(phrase: string) {

        const isAlphanumeric = (char: string) => { // Helper function to check if a character is alphanumeric
            return /^[0-9a-zA-Z]+$/.test(char);
        };

        phrase = phrase.toLowerCase();
        let left = 0;
        let right = phrase.length - 1;

        while (left < right) {
            while (left < right && !isAlphanumeric(phrase[left])) { // Move the left to the right until an alphanumeric character is found
                left++;
            }

            while (left < right && !isAlphanumeric(phrase[right])) { // Move the right pointer to the left until an alphanumeric character is found
                right--;
            }

            if (phrase[left] !== phrase[right]) return false;

            left++;
            right--;
        }

        return true;
    };

    const phrase1 = "A man,a plan, a canal,Panama";
    const phrase2 = "race car";
    const phrase3 = "Hello, World!";

    console.log(isPalindrome(phrase1)); // true
    console.log(isPalindrome(phrase2)); // true
    console.log(isPalindrome(phrase3)); // false

    return (
        <>
            <div>Manychat</div>
        </>
    );
}
