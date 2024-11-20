document.addEventListener("DOMContentLoaded", () => {
    const tabButtons = document.querySelectorAll(".tab-button");
    const tabs = document.querySelectorAll(".tab");
  
    tabButtons.forEach(button => {
      button.addEventListener("click", () => {
        // Remove active class from all buttons and hide all tabs
        tabButtons.forEach(btn => btn.classList.remove("active"));
        tabs.forEach(tab => tab.classList.add("hidden"));
  
        // Add active class to the clicked button and show the corresponding tab
        button.classList.add("active");
        const tabId = button.getAttribute("data-tab");
        document.getElementById(tabId).classList.remove("hidden");
      });
    });
  });
  