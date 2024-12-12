function saveStudents(students) {
  const stringifiedStudents = JSON.stringify(students)
  localStorage.setItem('students', stringifiedStudents)
}

function restoreStudents() {
  const stringifiedStudents = localStorage.getItem('students')
  return JSON.parse(stringifiedStudents)
}
