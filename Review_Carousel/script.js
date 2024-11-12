const reviews = [
    {
        name: "John Doe",
        job: "Software Engineer",
        review: "John's work is exemplary. He consistently delivers high-quality code and always meets deadlines."
    },
    {
        name: "Jane Smith",
        job: "Product Manager",
        review: "Jane has an eye for detail and always ensures projects are on track. Her contributions are invaluable."
    },
    {
        name: "Samuel Lee",
        job: "UX Designer",
        review: "Samuel brings creativity and innovation to every project. His designs are always user-friendly and visually appealing."
    }
];

const imagePath = './images/user.png';
let currentIndex = 0;

// Function to display a review based on the current index
function displayReview(index) {
    const review = reviews[index];
    document.getElementById('name').textContent = review.name;
    document.getElementById('job-description').textContent = review.job;
    document.getElementById('review').textContent = review.review;
    document.getElementById('user-image').src = imagePath;
}

displayReview(currentIndex);

document.getElementById('next').addEventListener('click', () => {
    currentIndex = (currentIndex + 1) % reviews.length;
    displayReview(currentIndex);
});

document.getElementById('previous').addEventListener('click', () => {
    currentIndex = (currentIndex - 1 + reviews.length) % reviews.length;
    displayReview(currentIndex);
});

document.getElementById('random').addEventListener('click', () => {
    currentIndex = Math.floor(Math.random() * reviews.length);
    displayReview(currentIndex);
});
