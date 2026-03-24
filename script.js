// Student data
let students = [
    { name: "Gauri", marks: 85, class: "10th", address: "Pune" },
    { name: "Rahul", marks: 72, class: "9th", address: "Mumbai" },
    { name: "Sneha", marks: 90, class: "10th", address: "Delhi" },
    { name: "Amit", marks: 65, class: "8th", address: "Nagpur" }
];

let container = document.getElementById("container");
let searchBox = document.getElementById("search");

// Function to display students using map()
function displayStudents(data) {
    let cards = data.map(function(student) {
        return `
            <div class="card">
                <h3>${student.name}</h3>
                <p>Marks: ${student.marks}</p>
                <p>Class: ${student.class}</p>
                <p>Address: ${student.address}</p>
            </div>
        `;
    });

    container.innerHTML = cards.join(""); // convert array to string
}

// Initial display
displayStudents(students);

// Search filter
searchBox.addEventListener("input", function() {
    let value = searchBox.value.toLowerCase();

    let filtered = students.filter(function(student) {
        return student.name.toLowerCase().includes(value);
    });

    displayStudents(filtered);
});
