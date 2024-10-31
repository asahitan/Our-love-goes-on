// List of links with text and URLs
const links = [
    { text: "Visit Example 1", url: "https://www.example1.com" },
    { text: "Visit Example 2", url: "https://www.example2.com" },
    { text: "Visit Example 3", url: "https://www.example3.com" },
    { text: "Visit Example 4", url: "https://www.example4.com" }
];

// Function to create buttons for each link
const linkContainer = document.getElementById("linkContainer");

links.forEach(link => {
    const anchor = document.createElement("a");
    anchor.href = link.url;
    anchor.target = "_blank";
    anchor.className = "button";
    anchor.textContent = link.text;
    linkContainer.appendChild(anchor);
});

console.log("Welcome to the beautiful website with multiple links!");
