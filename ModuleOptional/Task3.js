function delay(ms) {
    return new Promise((resolve) => {
        setTimeout(resolve, ms);
    })
};

async function processing(){
    console.log("Start processing...");
    await delay(2000);

    console.log("Hello");
    await delay(1000);

    console.log("How you doing");
    console.log("Processing complete!");
}

processing();

function fetchData() {
    return new Promise((resolve, reject) => {
        const success = Math.random() > 0.5;

        setTimeout(() => {
            if (success) {
                resolve("Fetch data successful!");
            } else {
                reject("Error: Unable to fetch data...");
            }
        }, 1000);
    });
}

fetchData()
.then((result) => {
    console.log(result);
})
.catch((error) => {
    console.log(error);
});

