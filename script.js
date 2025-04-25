document.addEventListener("DOMContentLoaded", function () {
  const tabs = document.querySelectorAll(".nb-tab");

  tabs.forEach((tab) => {
    tab.addEventListener("click", () => {
      // Remove active class from all tabs and content
      document
        .querySelectorAll(".nb-tab")
        .forEach((t) => t.classList.remove("nb-tab-active"));
      document
        .querySelectorAll(".nb-tab-content")
        .forEach((c) => c.classList.remove("active"));

      // Add active class to clicked tab
      tab.classList.add("nb-tab-active");

      // Show corresponding content
      const tabId = tab.getAttribute("data-tab");
      document.getElementById(tabId).classList.add("active");
    });
  });

  // Accordion functionality
  document.querySelectorAll(".accordion-trigger").forEach((trigger) => {
    trigger.addEventListener("click", () => {
      trigger.classList.toggle("active");
      const content = trigger.nextElementSibling;
      content.classList.toggle("show");
    });
  });

// Theme Toggle Functionality
const themeToggle = document.getElementById('theme-toggle');
const icon = themeToggle.querySelector('i');
const marqueeContainer = document.querySelector('.marquee-container');

// Check saved theme or system preference
const savedTheme = localStorage.getItem('theme') || 
                  (window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light');

if (savedTheme === 'dark') {
    document.body.classList.add('dark-mode');
    icon.classList.remove('lucide-moon');
    icon.classList.add('lucide-sun');
    marqueeContainer.classList.add('visible');
}

// Toggle theme on button click
themeToggle.addEventListener('click', () => {
    document.body.classList.toggle('dark-mode');
    
    if (document.body.classList.contains('dark-mode')) {
        localStorage.setItem('theme', 'dark');
        icon.classList.remove('lucide-moon');
        icon.classList.add('lucide-sun');
        marqueeContainer.classList.add('visible'); // Show marquee in dark mode
    } else {
        localStorage.setItem('theme', 'light');
        icon.classList.remove('lucide-sun');
        icon.classList.add('lucide-moon');
        marqueeContainer.classList.remove('visible'); // Hide marquee in light mode
    }
});

// Marquee animation (double content for seamless loop)
const marquee = document.querySelector('.marquee');
marquee.innerHTML = marquee.innerHTML + marquee.innerHTML;
});
