export default function updateStudentGradeByCity(arr, city, newGrade) {
  if (Array.isArray(arr)) {
    return arr
      .filter((student) => student.location === city)
      .map((student) => {
        const newGrades = newGrade.find((grade) => grade.studentId === student.id);
        if (newGrades) {
          return { ...student, grade: newGrades.grade };
        }
        return { ...student, grade: 'N/A' };
      });
  }
  return [];
}
