function handleAddStudent(student) {
  studentsModel.addStudent(student)
  renderStudent(studentsModel.students)
}

function handleDeleteStudent(studentId) {
  studentsModel.removeStudentById(studentId)
  renderStudent(studentsModel.students)
}
