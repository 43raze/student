function handleAddStudent(student) {
  const isStudentAdded = studentsModel.addStudent(student)

  renderStudent(studentsModel.students)

  if (!isStudentAdded) {
    const lastMessage = studentsModel.getLastMessage()
    renderSpanSystemMessage(lastMessage)
  }
}

function handleDeleteStudent(studentId) {
  studentsModel.removeStudentById(studentId)
  renderStudent(studentsModel.students)
}
