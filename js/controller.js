function handleAddStudent(student) {
  const isStudentAdded = studentsModel.addStudent(student)

  saveStudents(studentsModel.students)
  renderStudent(studentsModel.students)

  if (!isStudentAdded) {
    renderSpanSystemMessage(studentsModel.getLastMessage())
  }
}

function handleDeleteStudent(studentId) {
  studentsModel.removeStudentById(studentId)

  saveStudents(studentsModel.students)
  renderStudent(studentsModel.students)
}
