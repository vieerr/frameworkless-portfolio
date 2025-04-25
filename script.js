document.addEventListener("DOMContentLoaded", function () {
    const tabs = document.querySelectorAll(".nb-tab");

    tabs.forEach((tab) => {
        tab.addEventListener("click", () => {
            // Remove active class from all tabs and content
            document.querySelectorAll(".nb-tab").forEach((t) => t.classList.remove("nb-tab-active"));
            document.querySelectorAll(".nb-tab-content").forEach((c) => c.classList.remove("active"));

            // Add active class to clicked tab
            tab.classList.add("nb-tab-active");

            // Show corresponding content
            const tabId = tab.getAttribute("data-tab");
            document.getElementById(tabId).classList.add("active");
        });
    });

    // Accordion functionality
    document.querySelectorAll('.accordion-trigger').forEach(trigger => {
        trigger.addEventListener('click', () => {
            trigger.classList.toggle('active');
            const content = trigger.nextElementSibling;
            content.classList.toggle('show');
        });
    });
});
