console.log("Personal profile website loaded successfully.");
const links = document.querySelectorAll(".nav-link");
links.forEach((link) => {
    link.addEventListener("click", () => {
        console.log(`Navigating to ${link.textContent}`);
    });
});

// Switch to projects tab when "View Projects" button in home is clicked
const viewProjectsBtn = document.querySelector('a[href="#projects"]');
if (viewProjectsBtn) {
    viewProjectsBtn.addEventListener("click", (e) => {
        e.preventDefault(); // Prevent standard jump link behavior
        const projectsTabButton = document.querySelector('button[data-bs-target="#projects"]');
        if (projectsTabButton) {
            projectsTabButton.click(); // Tell bootstrap to switch tabs
        }
    });
}
