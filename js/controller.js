function handleAddStudent(student) {
  const isStudentAdd = studentsModel.addStudent(student)

  if (!isStudentAdd) {
    const message = studentsModel.messages[studentsModel.messages.length - 1]
    renderSpanSystemMessage(message)
  } else {
    renderSpanSystemMessage()
  }

  renderStudent(studentsModel.students)
}

function handleDeleteStudent(studentId) {
  studentsModel.removeStudentById(studentId)
  renderStudent(studentsModel.students)
}
