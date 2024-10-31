// List of links with title, description, text, and URLs
const links = [
    { title: "Example Link 1", description: "This link takes you to Example 1.", text: "Visit Example 1", url: "https://www.example1.com" },
    { title: "Example Link 2", description: "Explore more on Example 2's page.", text: "Visit Example 2", url: "https://www.example2.com" },
    { title: "Example Link 3", description: "Learn about what Example 3 offers.", text: "Visit Example 3", url: "https://www.example3.com" },
    { title: "Example Link 4", description: "Find out more at Example 4.", text: "Visit Example 4", url: "https://www.example4.com" }
];

// Function to create titles, descriptions, and buttons for each link
const linkContainer = document.getElementById("linkContainer");

links.forEach(link => {
    // Create title element
    const titleElement = document.createElement("h3");
    titleElement.className = "link-title";
    titleElement.textContent = link.title;

    // Create description element
    const descriptionElement = document.createElement("p");
    descriptionElement.className = "link-description";
    descriptionElement.textContent = link.description;

    // Create link element
    const anchor = document.createElement("a");
    anchor.href = link.url;
    anchor.target = "_blank";
    anchor.className = "button";
    anchor.textContent = link.text;

    // Append title, description, and link to the container
    linkContainer.appendChild(titleElement);
    linkContainer.appendChild(descriptionElement);
    linkContainer.appendChild(anchor);
});

console.log("Welcome to the beautiful website with multiple titled links and descriptions!");
