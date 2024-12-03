const listInputs = document.querySelectorAll('tfoot input')
const elButton = document.querySelector('tfoot button')

elButton.addEventListener('click', onButtonClickAddStudent)

function onButtonClickAddStudent() {
  const student = parseInputs(listInputs)

  handleAddStudent(student)
  renderTfoot()
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

  return Object.fromEntries(entries)
}

function renderStudent(students) {
  const elTbody = document.querySelector('tbody')

  elTbody.innerHTML = ''

  students.forEach((student) => {
    const elTr = generateTrStudent(student)
    elTbody.appendChild(elTr)
  })
}

function generateTrStudent(student) {
  const elTr = document.createElement('tr')

  const elTh = document.createElement('th')
  elTh.textContent = student.id

  const elTdFirstName = generateTdInput('text', 'firstName', student.firstName)
  const elTdLastName = generateTdInput('text', 'lastName', student.lastName)
  const elTdAge = generateTdInput('number', 'age', student.age, 16)
  const elTdFaculty = generateTdInput('text', 'faculty', student.faculty)
  const elTdIsBudget = generateTdInput('checkbox', 'isBudget', '', null)
  elTdIsBudget.querySelector('input').checked = student.isBudget

  const elTdButton = document.createElement('td')
  const elButton = document.createElement('button')
  elButton.textContent = 'Отчислить'
  elButton.dataset.id = student.id

  elButton.addEventListener('click', () => {
    onClickButtonDeleteStudent(student.id)
  })

  elTdButton.appendChild(elButton)

  elTr.appendChild(elTh)
  elTr.appendChild(elTdFirstName)
  elTr.appendChild(elTdLastName)
  elTr.appendChild(elTdAge)
  elTr.appendChild(elTdFaculty)
  elTr.appendChild(elTdIsBudget)
  elTr.appendChild(elTdButton)

  return elTr
}

function generateTdInput(type, name, value, min) {
  const elTd = document.createElement('td')
  const elInput = document.createElement('input')

  elInput.type = type
  elInput.name = name
  elInput.value = value || ''
  if (min) elInput.min = min

  elTd.appendChild(elInput)
  return elTd
}

function renderTfoot() {
  const listInputs = document.querySelectorAll('tfoot input')

  for (const elInput of listInputs) {
    elInput.value = ''
  }
}
