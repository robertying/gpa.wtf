import { letter_grade_enum } from "apis/types";

export const getSemesterTextFromId = (
  semesterId: string,
  compact?: boolean
) => {
  const texts = semesterId.split("-");
  return compact
    ? `${texts?.[0]}-${texts?.[1]}\n${
        texts?.[2] === "1"
          ? "秋季学期"
          : texts?.[2] === "2"
          ? "冬季学期"
          : "夏季学期"
      }`
    : `${texts?.[0]}-${texts?.[1]} 学年${
        texts?.[2] === "1"
          ? "秋季学期"
          : texts?.[2] === "2"
          ? "冬季学期"
          : "夏季学期"
      }`;
};

export const getGradeTextFromGrade = (grade: letter_grade_enum) => {
  return grade === letter_grade_enum.A_plus
    ? "A+"
    : grade === letter_grade_enum.A
    ? "A"
    : grade === letter_grade_enum.A_minus
    ? "A-"
    : grade === letter_grade_enum.B_plus
    ? "B+"
    : grade === letter_grade_enum.B
    ? "B"
    : grade === letter_grade_enum.B_minus
    ? "B-"
    : grade === letter_grade_enum.C_plus
    ? "C+"
    : grade === letter_grade_enum.C
    ? "C"
    : grade === letter_grade_enum.C_minus
    ? "C-"
    : grade === letter_grade_enum.D_plus
    ? "D+"
    : grade === letter_grade_enum.D
    ? "D"
    : grade === letter_grade_enum.P
    ? "P"
    : "F";
};

export const getGradePointFromGrade = (grade: letter_grade_enum) => {
  return grade === letter_grade_enum.A_plus
    ? 4.0
    : grade === letter_grade_enum.A
    ? 4.0
    : grade === letter_grade_enum.A_minus
    ? 4.0
    : grade === letter_grade_enum.B_plus
    ? 3.6
    : grade === letter_grade_enum.B
    ? 3.3
    : grade === letter_grade_enum.B_minus
    ? 3.0
    : grade === letter_grade_enum.C_plus
    ? 2.6
    : grade === letter_grade_enum.C
    ? 2.3
    : grade === letter_grade_enum.C_minus
    ? 2.0
    : grade === letter_grade_enum.D_plus
    ? 1.6
    : grade === letter_grade_enum.D
    ? 1.3
    : 0;
};
