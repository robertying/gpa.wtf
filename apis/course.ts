import { gql } from "@apollo/client";

export const GET_COURSE_BY_ID = gql`
  query GetCourseById($id: String!) {
    course_by_pk(id: $id) {
      id
      name
      teacher {
        id
        name
      }
      time_location
      semester_id
      number
      index
      course_grades_public_aggregate {
        aggregate {
          count
          avg {
            grade_point
          }
        }
      }
      course_reviews_aggregate {
        aggregate {
          count
          avg {
            rating
          }
        }
      }
    }
  }
`;

export const GET_COURSES = gql`
  query GetCourses($query: String!) {
    course(
      where: { name: { _ilike: $query } }
      order_by: { semester_id: desc, updated_at: desc }
    ) {
      id
      name
      teacher {
        id
        name
      }
      semester_id
    }
  }
`;
