import { gql } from "@apollo/client";

export const GET_COURSE_REVIEWS = gql`
  query GetCourseReviews($user_id: uuid!) {
    my_course_review: course_review(
      order_by: { user_id: desc, updated_at: desc }
      distinct_on: user_id
      where: { user_id: { _eq: $user_id } }
    ) {
      user {
        id
        username
        avatar_url
      }
      course_id
      user_id
      rating
      content
      created_at
      updated_at
    }
    course_review(
      order_by: { user_id: desc, updated_at: desc }
      distinct_on: user_id
      where: { user_id: { _neq: $user_id } }
    ) {
      user {
        id
        username
        avatar_url
      }
      course_id
      user_id
      rating
      content
      created_at
      updated_at
    }
  }
`;

export const ADD_COURSE_REVIEW = gql`
  mutation AddCourseReview(
    $user_id: uuid!
    $course_id: String!
    $rating: Float!
    $content: String!
  ) {
    insert_course_review_one(
      object: {
        user_id: $user_id
        course_id: $course_id
        rating: $rating
        content: $content
      }
    ) {
      user_id
      course_id
    }
  }
`;

export const UPDATE_COURSE_REVIEW = gql`
  mutation UpdateCourseReview(
    $user_id: uuid!
    $course_id: String!
    $rating: Float!
    $content: String!
  ) {
    update_course_review_by_pk(
      pk_columns: { course_id: $course_id, user_id: $user_id }
      _set: { rating: $rating, content: $content }
    ) {
      course_id
      user_id
    }
  }
`;

export const DELETE_COURSE_REVIEW = gql`
  mutation DeleteCourseReview($user_id: uuid!, $course_id: String!) {
    delete_course_review_by_pk(course_id: $course_id, user_id: $user_id) {
      course_id
      user_id
    }
  }
`;
