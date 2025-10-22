let alumnos = [
    {
        id: 1,
        name: "Carlos Gonzalez",
        bachelor: "LCC",
        semester: 7
    },
    {
        id: 2,
        name: "Alain Lobato",
        bachelor: "LCC",
        semester: 6
    },
    {
        id: 3,
        name: "Mayte Abigail",
        bachelor: "LCC",
        semester: 7
    },
    {
        id: 4,
        name: "Karla Sarahi",
        bachelor: "LCC",
        semester: 8
    },
    {
        id: 5,
        name: "Andrea Carolina",
        bachelor: "LCC",
        semester: 5
    },
    {
        id: 6,
        name: "Mayela Alejandra",
        bachelor: "LCC",
        semester: 4
    },
    {
        id: 7,
        name: "Barbara Silva",
        bachelor: "LCC",
        semester: 3
    },
    {
        id: 8,
        name: "Valeria Lopez",
        bachelor: "LCC",
        semester: 2
    },
    {
        id: 9,
        name: "Naomi Michelle",
        bachelor: "LCC",
        semester: 1
    },
    {
        id: 10,
        name: "Eder Abisai",
        bachelor: "LCC",
        semester: 5
    },
    {
        id: 11,
        name: "Regina Martinez",
        bachelor: "LCC",
        semester: 7
    }
];

const peopleDiv = document.getElementById('people')

function displayPeople() {
    alumnos.forEach(alumno => {
        const card = createCard(alumno)
        peopleDiv.appendChild(card)
    })
}

function filterPeople() {
    const name = document.getElementById('filterInput').value
    document.getElementById('filterInput').value = ''
    const filtered = alumnos.filter(alumno => alumno.name.toLowerCase().includes(name.toLowerCase()))

    peopleDiv.innerHTML = ''
    filtered.forEach(alumno => {
        const card = createCard(alumno)
        peopleDiv.appendChild(card)
    })
}

function createCard(alumno) {
    const card = document.createElement('div')
    card.classList.add('card')
    card.innerHTML = `
        <h2>${alumno.name}</h2>
        <p>Carrera: ${alumno.bachelor}</p>
        <p>Semestre: ${alumno.semester}</p>
    `
    return card
}

function addStudent() {
    const name = document.getElementById('nameInput').value
    const bachelor = document.getElementById('bachelorInput').value
    const semester = parseInt(document.getElementById('semesterInput').value)

    const newStudent = {
        id: alumnos.length + 1,
        name: name,
        bachelor: bachelor,
        semester: semester
    }

    alumnos.push(newStudent)

    const card = createCard(newStudent)
    peopleDiv.appendChild(card)

    document.getElementById('nameInput').value = ''
    document.getElementById('bachelorInput').value = ''
    document.getElementById('semesterInput').value = ''
}

displayPeople()
