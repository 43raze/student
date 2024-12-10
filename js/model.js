const studentsModel = {
  students: [],
  messages: [],
  nextId: 1,

  getLastMessage() {
    return this.messages[this.messages.length - 1]
  },

  addStudent(student) {
    if (!this.validateStudent(student)) {
      return false
    }
    student.id = this.nextId++
    this.students.push(student)
    return true
  },

  removeStudentById(id) {
    this.students = this.students.filter((student) => student.id !== id)
  },

  editStudentById(id, updatedFields) {
    const studentIndex = this.students.findIndex((student) => student.id === id)

    if (studentIndex === -1) {
      this.addSystemMessage(`Студент с ID ${id} не найден.`)
      return false
    }

    const student = this.students[studentIndex]

    const updatedStudent = Object.assign({}, student, updatedFields)

    if (!this.validateStudent(updatedStudent)) {
      return false
    }

    this.students[studentIndex] = updatedStudent
    return true
  },

  addSystemMessage(message) {
    this.messages.push(message)
  },

  validateStudent(student) {
    if (Object.values(student).includes('')) {
      this.addSystemMessage('Все поля обязательны для заполнения.')
      return false
    }

    if (student.age < 16) {
      this.addSystemMessage('Возраст должен быть не менее 16.')
      return false
    }

    return true
  },
}
