// Constructor Function for Students
function Student(name, roll, cgpa) {
    this.name = name;
    this.roll = roll;
    this.cgpa = cgpa;
}

let students = [];

// ADD student
function addStudent() {
    let name = document.getElementById("name").value;
    let roll = document.getElementById("roll").value;
    let cgpa = document.getElementById("cgpa").value;

    if (name === "" || roll === "" || cgpa === "") {
        alert("Please fill all fields");
        return;
    }

    let s = new Student(name, roll, cgpa);
    students.push(s);

    displayStudents();

    document.getElementById("name").value = "";
    document.getElementById("roll").value = "";
    document.getElementById("cgpa").value = "";
}

// DELETE student
function deleteStudent(index) {
    students.splice(index, 1);
    displayStudents();
}

// UPDATE student
function updateStudent(index) {
    let newName = prompt("Enter new name:", students[index].name);
    let newCGPA = prompt("Enter new CGPA:", students[index].cgpa);

    if (newName !== null && newCGPA !== null) {
        students[index].name = newName;
        students[index].cgpa = newCGPA;
        displayStudents();
    }
}

// DISPLAY students
function displayStudents() {
    let tbody = document.querySelector("#studentTable tbody");
    tbody.innerHTML = "";

    students.forEach((s, index) => {
        let row = `<tr class="${s.cgpa >= 3.5 ? 'highlight' : ''}">
            <td>${s.name}</td>
            <td>${s.roll}</td>
            <td>${s.cgpa}</td>
            <td>
                <button onclick="updateStudent(${index})">Update</button>
                <button onclick="deleteStudent(${index})">Delete</button>
            </td>
        </tr>`;

        tbody.innerHTML += row;
    });
}
