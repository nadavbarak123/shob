import axios from "axios";

export async function validateClass(classId, maxSeats, className) {
  const numericClassId = parseInt(classId);
  const numericMaxSeats = parseInt(maxSeats);
  if (!numericClassId > 0) {
    return "יש להזין מספר כיתה תקין";
  } else {
    const data = await axios.get(`http://localhost:3000/class/${classId}`);
    if (data.data.length > 0) {
      return "מספר כיתה שהוזן כבר קיים";
    }
  }
  if (!numericMaxSeats > 0) {
    return "יש להזין מספר מקומות מקסימלי";
  }
  if (className === "") {
    return "יש להזין שם כיתה";
  }
  return "";
}

export async function validateStudent(
  studentId,
  age,
  fname,
  lname,
  profession
) {
  const numericStudentId = parseInt(studentId);
  const numericAge = parseInt(age);

  if (!numericStudentId > 0) {
    return 'יש להזין ת"ז';
  } else {
    const data = await axios.get(
      `http://localhost:3000/student/${numericStudentId}`
    );
    if (data.data.length > 0) {
      return 'מספר ת"ז שהוזן כבר קיים';
    }
  }
  if (!numericAge > 0) {
    return "יש להזין גיל";
  }
  if (fname === "") {
    return "יש להזין שם פרטי";
  }
  if (lname === "") {
    return "יש להזים שם משפחה";
  }
  if (profession === "") {
    return "יש להזים תיאור מקצוע";
  }
  return "";
}
