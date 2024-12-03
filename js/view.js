const listInputs = document.querySelectorAll('tfoot input')
const elButton = document.querySelector('tfoot button')

elButton.addEventListener('click', onButtonClickAddStudent)

function onButtonClickAddStudent() {
  const student = parseInputs(listInputs)

  handleAddStudent(student)
}

function parseInputs(listInputs) {
  const entries = Array.from(listInputs).map((elInput) => {
    if (elInput.type === 'checkbox') {
      return [elInput.name, elInput.checked]
    }

    if (elInput.type === 'number') {
      return [
        elInput.name,
        elInput.value.trim() === '' ? null : Number(elInput.value),
      ]
    }

    return [elInput.name, elInput.value.trim()]
  })

  console.log(entries)

  return Object.fromEntries(entries)
}

function renderStudent(students) {
  const elTbody = document.querySelector('tbody')

  elTbody.innerHTML = ''

  students.forEach((student) => {
    const elTr = generateStudent(student)
    elTbody.appendChild(elTr)
  })
}

function generateStudent(student) {
  const elTr = document.createElement('tr')

  const th = document.createElement('th')
  th.textContent = student.id

  const tdFirstName = createElInput('text', 'firstName', student.firstName)
  const tdLastName = createElInput('text', 'lastName', student.lastName)
  const tdAge = createElInput('number', 'age', student.age, 16)
  const tdFaculty = createElInput('text', 'faculty', student.faculty)
  const tdIsBudget = createElInput('checkbox', 'isBudget', '', null)
  tdIsBudget.querySelector('input').checked = student.isBudget

  const tdButton = document.createElement('td')
  const button = document.createElement('button')
  button.textContent = 'Отчислить'
  button.dataset.id = student.id

  button.addEventListener('click', () => {
    handleDeleteStudent(student.id)
  })

  tdButton.appendChild(button)

  elTr.appendChild(th)
  elTr.appendChild(tdFirstName)
  elTr.appendChild(tdLastName)
  elTr.appendChild(tdAge)
  elTr.appendChild(tdFaculty)
  elTr.appendChild(tdIsBudget)
  elTr.appendChild(tdButton)

  return elTr
}

function createElInput(type, name, value, min) {
  const elTd = document.createElement('td')
  const elInput = document.createElement('input')

  elInput.type = type
  elInput.name = name
  elInput.value = value || ''
  if (min) elInput.min = min

  elTd.appendChild(elInput)
  return elTd
}
