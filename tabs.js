console.log("Hello World!");

function openPage() {
    console.log("Hello World!");
    browser.tabs.create({
        url: "google.com"
    });
}

browser.browserAction.onClicked.addListener((tab) => {
    console.log("Hello World!");
});
