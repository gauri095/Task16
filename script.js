 const students = [
            { name: "Gauri", marks: 85, class: "10th", address: "Pune" },
            { name: "Rahul", marks: 72, class: "9th", address: "Mumbai" },
            { name: "Sneha", marks: 90, class: "10th", address: "Delhi" },
            { name: "Amit", marks: 65, class: "8th", address: "Nagpur" }
        ];

        const container = document.getElementById("cardContainer");
        const searchInput = document.getElementById("search");

        // Function to render cards
        function renderCards(data) {
            container.innerHTML = "";

            data.forEach(student => {
                const card = document.createElement("div");
                card.classList.add("card");

                card.innerHTML = `
                    <h3>${student.name}</h3>
                    <p><strong>Marks:</strong> ${student.marks}</p>
                    <p><strong>Class:</strong> ${student.class}</p>
                    <p><strong>Address:</strong> ${student.address}</p>
                `;

                container.appendChild(card);
            });
        }

        // Initial render
        renderCards(students);

        // Search functionality
        searchInput.addEventListener("input", () => {
            const value = searchInput.value.toLowerCase();

            const filtered = students.filter(student =>
                student.name.toLowerCase().includes(value)
            );

            renderCards(filtered);
        });