import { gql } from "@apollo/client";

export const GET_COURSE_GRADES = gql`
  query GetCourseGrades($course_id: String!, $user_id: uuid!) {
    my_course_grade: course_grade_by_pk(
      course_id: $course_id
      user_id: $user_id
    ) {
      user_id
      course_id
      grade
      grade_point
      p_f
      remark
    }
    A_plus: course_by_pk(id: $course_id) {
      id
      course_grades_public_aggregate(
        where: { grade: { _eq: "A_plus" }, p_f: { _eq: false } }
      ) {
        aggregate {
          count
        }
      }
    }
    A: course_by_pk(id: $course_id) {
      id
      course_grades_public_aggregate(
        where: { grade: { _eq: "A" }, p_f: { _eq: false } }
      ) {
        aggregate {
          count
        }
      }
    }
    A_minus: course_by_pk(id: $course_id) {
      id
      course_grades_public_aggregate(
        where: { grade: { _eq: "A_minus" }, p_f: { _eq: false } }
      ) {
        aggregate {
          count
        }
      }
    }
    B_plus: course_by_pk(id: $course_id) {
      id
      course_grades_public_aggregate(
        where: { grade: { _eq: "B_plus" }, p_f: { _eq: false } }
      ) {
        aggregate {
          count
        }
      }
    }
    B: course_by_pk(id: $course_id) {
      id
      course_grades_public_aggregate(
        where: { grade: { _eq: "B" }, p_f: { _eq: false } }
      ) {
        aggregate {
          count
        }
      }
    }
    B_minus: course_by_pk(id: $course_id) {
      id
      course_grades_public_aggregate(
        where: { grade: { _eq: "B_minus" }, p_f: { _eq: false } }
      ) {
        aggregate {
          count
        }
      }
    }
    C_plus: course_by_pk(id: $course_id) {
      id
      course_grades_public_aggregate(
        where: { grade: { _eq: "C_plus" }, p_f: { _eq: false } }
      ) {
        aggregate {
          count
        }
      }
    }
    C: course_by_pk(id: $course_id) {
      id
      course_grades_public_aggregate(
        where: { grade: { _eq: "C" }, p_f: { _eq: false } }
      ) {
        aggregate {
          count
        }
      }
    }
    C_minus: course_by_pk(id: $course_id) {
      id
      course_grades_public_aggregate(
        where: { grade: { _eq: "C_minus" }, p_f: { _eq: false } }
      ) {
        aggregate {
          count
        }
      }
    }
    D_plus: course_by_pk(id: $course_id) {
      id
      course_grades_public_aggregate(
        where: { grade: { _eq: "D_plus" }, p_f: { _eq: false } }
      ) {
        aggregate {
          count
        }
      }
    }
    D: course_by_pk(id: $course_id) {
      id
      course_grades_public_aggregate(
        where: { grade: { _eq: "D" }, p_f: { _eq: false } }
      ) {
        aggregate {
          count
        }
      }
    }
    F: course_by_pk(id: $course_id) {
      id
      course_grades_public_aggregate(
        where: { grade: { _eq: "F" }, p_f: { _eq: false } }
      ) {
        aggregate {
          count
        }
      }
    }
    pf_P: course_by_pk(id: $course_id) {
      id
      course_grades_public_aggregate(
        where: { grade: { _eq: "P" }, p_f: { _eq: true } }
      ) {
        aggregate {
          count
        }
      }
    }
    pf_F: course_by_pk(id: $course_id) {
      id
      course_grades_public_aggregate(
        where: { grade: { _eq: "F" }, p_f: { _eq: true } }
      ) {
        aggregate {
          count
        }
      }
    }
  }
`;

export const ADD_COURSE_GRADE = gql`
  mutation AddCourseGrade(
    $user_id: uuid!
    $course_id: String!
    $grade: letter_grade_enum!
    $grade_point: Float
    $p_f: Boolean!
    $remark: String
  ) {
    insert_course_grade_one(
      object: {
        user_id: $user_id
        course_id: $course_id
        grade: $grade
        grade_point: $grade_point
        p_f: $p_f
        remark: $remark
      }
    ) {
      user_id
      course_id
    }
  }
`;

export const UPDATE_COURSE_GRADE = gql`
  mutation UpdateCourseGrade(
    $user_id: uuid!
    $course_id: String!
    $grade: letter_grade_enum!
    $grade_point: Float
    $p_f: Boolean!
    $remark: String
  ) {
    update_course_grade_by_pk(
      pk_columns: { course_id: $course_id, user_id: $user_id }
      _set: {
        grade: $grade
        grade_point: $grade_point
        p_f: $p_f
        remark: $remark
      }
    ) {
      course_id
      user_id
    }
  }
`;

export const DELETE_COURSE_GRADE = gql`
  mutation DeleteCourseGrade($user_id: uuid!, $course_id: String!) {
    delete_course_grade_by_pk(course_id: $course_id, user_id: $user_id) {
      course_id
      user_id
    }
  }
`;
