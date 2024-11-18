document.addEventListener("DOMContentLoaded", () => {
    const colors = [
        { name: "Forest Shadow", color: "rgba(37,43,29,255)" },
        { name: "Earth Bark", color: "rgba(46,39,29,255)" },
        { name: "Soft Sand", color: "rgba(224,219,215,255)" },
        { name: "Rustic Taupe", color: "rgba(130,101,83,255)" },
        { name: "Burnt Clay", color: "rgba(150,99,65,255)" },
        { name: "Evergreen Depth", color: "rgba(32,45,38,255)" },
        { name: "Pale Almond", color: "rgba(210,184,165,255)" },
        { name: "Terracotta Blush", color: "rgba(154,86,67,255)" },
        { name: "Slate Moss", color: "rgba(72,78,74,255)" }
    ];

    const colorButton = document.getElementById("color-button");
    const currentColor = document.getElementById("current-color");

    colorButton.addEventListener("click", () => {
        const randomIndex = Math.floor(Math.random() * colors.length);
        const selectedColor = colors[randomIndex];

        document.body.style.backgroundColor = selectedColor.color;
        currentColor.style.color = selectedColor.color; // Set the text color to the selected color
        currentColor.textContent = selectedColor.name; // Display the name of the color
    });
});
