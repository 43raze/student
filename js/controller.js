function handleAddStudent(student) {
  const isStudentAdded = studentsModel.addStudent(student)

  renderStudent(studentsModel.students)

  if (!isStudentAdded) {
    const lastMessage = studentsModel.getLastMessage()
    renderSpanSystemMessage(lastMessage)
    setTimeout(renderSpanSystemMessage, 1500)
  }
}

function handleDeleteStudent(studentId) {
  studentsModel.removeStudentById(studentId)
  renderStudent(studentsModel.students)
}
