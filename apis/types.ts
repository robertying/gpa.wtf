/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: GetCourseGrades
// ====================================================

export interface GetCourseGrades_my_course_grade {
  __typename: "course_grade";
  user_id: uuid;
  course_id: string;
  grade: letter_grade_enum;
  grade_point: number | null;
  p_f: boolean;
  remark: string | null;
}

export interface GetCourseGrades_A_plus_course_grades_public_aggregate_aggregate {
  __typename: "course_grade_public_aggregate_fields";
  count: number | null;
}

export interface GetCourseGrades_A_plus_course_grades_public_aggregate {
  __typename: "course_grade_public_aggregate";
  aggregate: GetCourseGrades_A_plus_course_grades_public_aggregate_aggregate | null;
}

export interface GetCourseGrades_A_plus {
  __typename: "course";
  id: string;
  /**
   * An aggregated array relationship
   */
  course_grades_public_aggregate: GetCourseGrades_A_plus_course_grades_public_aggregate;
}

export interface GetCourseGrades_A_course_grades_public_aggregate_aggregate {
  __typename: "course_grade_public_aggregate_fields";
  count: number | null;
}

export interface GetCourseGrades_A_course_grades_public_aggregate {
  __typename: "course_grade_public_aggregate";
  aggregate: GetCourseGrades_A_course_grades_public_aggregate_aggregate | null;
}

export interface GetCourseGrades_A {
  __typename: "course";
  id: string;
  /**
   * An aggregated array relationship
   */
  course_grades_public_aggregate: GetCourseGrades_A_course_grades_public_aggregate;
}

export interface GetCourseGrades_A_minus_course_grades_public_aggregate_aggregate {
  __typename: "course_grade_public_aggregate_fields";
  count: number | null;
}

export interface GetCourseGrades_A_minus_course_grades_public_aggregate {
  __typename: "course_grade_public_aggregate";
  aggregate: GetCourseGrades_A_minus_course_grades_public_aggregate_aggregate | null;
}

export interface GetCourseGrades_A_minus {
  __typename: "course";
  id: string;
  /**
   * An aggregated array relationship
   */
  course_grades_public_aggregate: GetCourseGrades_A_minus_course_grades_public_aggregate;
}

export interface GetCourseGrades_B_plus_course_grades_public_aggregate_aggregate {
  __typename: "course_grade_public_aggregate_fields";
  count: number | null;
}

export interface GetCourseGrades_B_plus_course_grades_public_aggregate {
  __typename: "course_grade_public_aggregate";
  aggregate: GetCourseGrades_B_plus_course_grades_public_aggregate_aggregate | null;
}

export interface GetCourseGrades_B_plus {
  __typename: "course";
  id: string;
  /**
   * An aggregated array relationship
   */
  course_grades_public_aggregate: GetCourseGrades_B_plus_course_grades_public_aggregate;
}

export interface GetCourseGrades_B_course_grades_public_aggregate_aggregate {
  __typename: "course_grade_public_aggregate_fields";
  count: number | null;
}

export interface GetCourseGrades_B_course_grades_public_aggregate {
  __typename: "course_grade_public_aggregate";
  aggregate: GetCourseGrades_B_course_grades_public_aggregate_aggregate | null;
}

export interface GetCourseGrades_B {
  __typename: "course";
  id: string;
  /**
   * An aggregated array relationship
   */
  course_grades_public_aggregate: GetCourseGrades_B_course_grades_public_aggregate;
}

export interface GetCourseGrades_B_minus_course_grades_public_aggregate_aggregate {
  __typename: "course_grade_public_aggregate_fields";
  count: number | null;
}

export interface GetCourseGrades_B_minus_course_grades_public_aggregate {
  __typename: "course_grade_public_aggregate";
  aggregate: GetCourseGrades_B_minus_course_grades_public_aggregate_aggregate | null;
}

export interface GetCourseGrades_B_minus {
  __typename: "course";
  id: string;
  /**
   * An aggregated array relationship
   */
  course_grades_public_aggregate: GetCourseGrades_B_minus_course_grades_public_aggregate;
}

export interface GetCourseGrades_C_plus_course_grades_public_aggregate_aggregate {
  __typename: "course_grade_public_aggregate_fields";
  count: number | null;
}

export interface GetCourseGrades_C_plus_course_grades_public_aggregate {
  __typename: "course_grade_public_aggregate";
  aggregate: GetCourseGrades_C_plus_course_grades_public_aggregate_aggregate | null;
}

export interface GetCourseGrades_C_plus {
  __typename: "course";
  id: string;
  /**
   * An aggregated array relationship
   */
  course_grades_public_aggregate: GetCourseGrades_C_plus_course_grades_public_aggregate;
}

export interface GetCourseGrades_C_course_grades_public_aggregate_aggregate {
  __typename: "course_grade_public_aggregate_fields";
  count: number | null;
}

export interface GetCourseGrades_C_course_grades_public_aggregate {
  __typename: "course_grade_public_aggregate";
  aggregate: GetCourseGrades_C_course_grades_public_aggregate_aggregate | null;
}

export interface GetCourseGrades_C {
  __typename: "course";
  id: string;
  /**
   * An aggregated array relationship
   */
  course_grades_public_aggregate: GetCourseGrades_C_course_grades_public_aggregate;
}

export interface GetCourseGrades_C_minus_course_grades_public_aggregate_aggregate {
  __typename: "course_grade_public_aggregate_fields";
  count: number | null;
}

export interface GetCourseGrades_C_minus_course_grades_public_aggregate {
  __typename: "course_grade_public_aggregate";
  aggregate: GetCourseGrades_C_minus_course_grades_public_aggregate_aggregate | null;
}

export interface GetCourseGrades_C_minus {
  __typename: "course";
  id: string;
  /**
   * An aggregated array relationship
   */
  course_grades_public_aggregate: GetCourseGrades_C_minus_course_grades_public_aggregate;
}

export interface GetCourseGrades_D_plus_course_grades_public_aggregate_aggregate {
  __typename: "course_grade_public_aggregate_fields";
  count: number | null;
}

export interface GetCourseGrades_D_plus_course_grades_public_aggregate {
  __typename: "course_grade_public_aggregate";
  aggregate: GetCourseGrades_D_plus_course_grades_public_aggregate_aggregate | null;
}

export interface GetCourseGrades_D_plus {
  __typename: "course";
  id: string;
  /**
   * An aggregated array relationship
   */
  course_grades_public_aggregate: GetCourseGrades_D_plus_course_grades_public_aggregate;
}

export interface GetCourseGrades_D_course_grades_public_aggregate_aggregate {
  __typename: "course_grade_public_aggregate_fields";
  count: number | null;
}

export interface GetCourseGrades_D_course_grades_public_aggregate {
  __typename: "course_grade_public_aggregate";
  aggregate: GetCourseGrades_D_course_grades_public_aggregate_aggregate | null;
}

export interface GetCourseGrades_D {
  __typename: "course";
  id: string;
  /**
   * An aggregated array relationship
   */
  course_grades_public_aggregate: GetCourseGrades_D_course_grades_public_aggregate;
}

export interface GetCourseGrades_F_course_grades_public_aggregate_aggregate {
  __typename: "course_grade_public_aggregate_fields";
  count: number | null;
}

export interface GetCourseGrades_F_course_grades_public_aggregate {
  __typename: "course_grade_public_aggregate";
  aggregate: GetCourseGrades_F_course_grades_public_aggregate_aggregate | null;
}

export interface GetCourseGrades_F {
  __typename: "course";
  id: string;
  /**
   * An aggregated array relationship
   */
  course_grades_public_aggregate: GetCourseGrades_F_course_grades_public_aggregate;
}

export interface GetCourseGrades_pf_P_course_grades_public_aggregate_aggregate {
  __typename: "course_grade_public_aggregate_fields";
  count: number | null;
}

export interface GetCourseGrades_pf_P_course_grades_public_aggregate {
  __typename: "course_grade_public_aggregate";
  aggregate: GetCourseGrades_pf_P_course_grades_public_aggregate_aggregate | null;
}

export interface GetCourseGrades_pf_P {
  __typename: "course";
  id: string;
  /**
   * An aggregated array relationship
   */
  course_grades_public_aggregate: GetCourseGrades_pf_P_course_grades_public_aggregate;
}

export interface GetCourseGrades_pf_F_course_grades_public_aggregate_aggregate {
  __typename: "course_grade_public_aggregate_fields";
  count: number | null;
}

export interface GetCourseGrades_pf_F_course_grades_public_aggregate {
  __typename: "course_grade_public_aggregate";
  aggregate: GetCourseGrades_pf_F_course_grades_public_aggregate_aggregate | null;
}

export interface GetCourseGrades_pf_F {
  __typename: "course";
  id: string;
  /**
   * An aggregated array relationship
   */
  course_grades_public_aggregate: GetCourseGrades_pf_F_course_grades_public_aggregate;
}

export interface GetCourseGrades {
  /**
   * fetch data from the table: "course_grade" using primary key columns
   */
  my_course_grade: GetCourseGrades_my_course_grade | null;
  /**
   * fetch data from the table: "course" using primary key columns
   */
  A_plus: GetCourseGrades_A_plus | null;
  /**
   * fetch data from the table: "course" using primary key columns
   */
  A: GetCourseGrades_A | null;
  /**
   * fetch data from the table: "course" using primary key columns
   */
  A_minus: GetCourseGrades_A_minus | null;
  /**
   * fetch data from the table: "course" using primary key columns
   */
  B_plus: GetCourseGrades_B_plus | null;
  /**
   * fetch data from the table: "course" using primary key columns
   */
  B: GetCourseGrades_B | null;
  /**
   * fetch data from the table: "course" using primary key columns
   */
  B_minus: GetCourseGrades_B_minus | null;
  /**
   * fetch data from the table: "course" using primary key columns
   */
  C_plus: GetCourseGrades_C_plus | null;
  /**
   * fetch data from the table: "course" using primary key columns
   */
  C: GetCourseGrades_C | null;
  /**
   * fetch data from the table: "course" using primary key columns
   */
  C_minus: GetCourseGrades_C_minus | null;
  /**
   * fetch data from the table: "course" using primary key columns
   */
  D_plus: GetCourseGrades_D_plus | null;
  /**
   * fetch data from the table: "course" using primary key columns
   */
  D: GetCourseGrades_D | null;
  /**
   * fetch data from the table: "course" using primary key columns
   */
  F: GetCourseGrades_F | null;
  /**
   * fetch data from the table: "course" using primary key columns
   */
  pf_P: GetCourseGrades_pf_P | null;
  /**
   * fetch data from the table: "course" using primary key columns
   */
  pf_F: GetCourseGrades_pf_F | null;
}

export interface GetCourseGradesVariables {
  course_id: string;
  user_id: uuid;
}

/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL mutation operation: AddCourseGrade
// ====================================================

export interface AddCourseGrade_insert_course_grade_one {
  __typename: "course_grade";
  user_id: uuid;
  course_id: string;
}

export interface AddCourseGrade {
  /**
   * insert a single row into the table: "course_grade"
   */
  insert_course_grade_one: AddCourseGrade_insert_course_grade_one | null;
}

export interface AddCourseGradeVariables {
  user_id: uuid;
  course_id: string;
  grade: letter_grade_enum;
  grade_point?: number | null;
  p_f: boolean;
  remark?: string | null;
}

/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL mutation operation: UpdateCourseGrade
// ====================================================

export interface UpdateCourseGrade_update_course_grade_by_pk {
  __typename: "course_grade";
  course_id: string;
  user_id: uuid;
}

export interface UpdateCourseGrade {
  /**
   * update single row of the table: "course_grade"
   */
  update_course_grade_by_pk: UpdateCourseGrade_update_course_grade_by_pk | null;
}

export interface UpdateCourseGradeVariables {
  user_id: uuid;
  course_id: string;
  grade: letter_grade_enum;
  grade_point?: number | null;
  p_f: boolean;
  remark?: string | null;
}

/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL mutation operation: DeleteCourseGrade
// ====================================================

export interface DeleteCourseGrade_delete_course_grade_by_pk {
  __typename: "course_grade";
  course_id: string;
  user_id: uuid;
}

export interface DeleteCourseGrade {
  /**
   * delete single row from the table: "course_grade"
   */
  delete_course_grade_by_pk: DeleteCourseGrade_delete_course_grade_by_pk | null;
}

export interface DeleteCourseGradeVariables {
  user_id: uuid;
  course_id: string;
}

/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: GetCourseReviews
// ====================================================

export interface GetCourseReviews_my_course_review_user {
  __typename: "user";
  id: uuid;
  username: string;
  avatar_url: string | null;
}

export interface GetCourseReviews_my_course_review {
  __typename: "course_review";
  /**
   * An object relationship
   */
  user: GetCourseReviews_my_course_review_user;
  course_id: string;
  user_id: uuid;
  rating: number;
  content: string;
  created_at: timestamptz;
  updated_at: timestamptz;
}

export interface GetCourseReviews_course_review_user {
  __typename: "user";
  id: uuid;
  username: string;
  avatar_url: string | null;
}

export interface GetCourseReviews_course_review {
  __typename: "course_review";
  /**
   * An object relationship
   */
  user: GetCourseReviews_course_review_user;
  course_id: string;
  user_id: uuid;
  rating: number;
  content: string;
  created_at: timestamptz;
  updated_at: timestamptz;
}

export interface GetCourseReviews {
  /**
   * fetch data from the table: "course_review"
   */
  my_course_review: GetCourseReviews_my_course_review[];
  /**
   * fetch data from the table: "course_review"
   */
  course_review: GetCourseReviews_course_review[];
}

export interface GetCourseReviewsVariables {
  user_id: uuid;
}

/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL mutation operation: AddCourseReview
// ====================================================

export interface AddCourseReview_insert_course_review_one {
  __typename: "course_review";
  user_id: uuid;
  course_id: string;
}

export interface AddCourseReview {
  /**
   * insert a single row into the table: "course_review"
   */
  insert_course_review_one: AddCourseReview_insert_course_review_one | null;
}

export interface AddCourseReviewVariables {
  user_id: uuid;
  course_id: string;
  rating: number;
  content: string;
}

/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL mutation operation: UpdateCourseReview
// ====================================================

export interface UpdateCourseReview_update_course_review_by_pk {
  __typename: "course_review";
  course_id: string;
  user_id: uuid;
}

export interface UpdateCourseReview {
  /**
   * update single row of the table: "course_review"
   */
  update_course_review_by_pk: UpdateCourseReview_update_course_review_by_pk | null;
}

export interface UpdateCourseReviewVariables {
  user_id: uuid;
  course_id: string;
  rating: number;
  content: string;
}

/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL mutation operation: DeleteCourseReview
// ====================================================

export interface DeleteCourseReview_delete_course_review_by_pk {
  __typename: "course_review";
  course_id: string;
  user_id: uuid;
}

export interface DeleteCourseReview {
  /**
   * delete single row from the table: "course_review"
   */
  delete_course_review_by_pk: DeleteCourseReview_delete_course_review_by_pk | null;
}

export interface DeleteCourseReviewVariables {
  user_id: uuid;
  course_id: string;
}

/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: GetCourseById
// ====================================================

export interface GetCourseById_course_by_pk_teacher {
  __typename: "teacher";
  id: bigint;
  name: string;
}

export interface GetCourseById_course_by_pk_course_grades_public_aggregate_aggregate_avg {
  __typename: "course_grade_public_avg_fields";
  grade_point: number | null;
}

export interface GetCourseById_course_by_pk_course_grades_public_aggregate_aggregate {
  __typename: "course_grade_public_aggregate_fields";
  count: number | null;
  avg: GetCourseById_course_by_pk_course_grades_public_aggregate_aggregate_avg | null;
}

export interface GetCourseById_course_by_pk_course_grades_public_aggregate {
  __typename: "course_grade_public_aggregate";
  aggregate: GetCourseById_course_by_pk_course_grades_public_aggregate_aggregate | null;
}

export interface GetCourseById_course_by_pk_course_reviews_aggregate_aggregate_avg {
  __typename: "course_review_avg_fields";
  rating: number | null;
}

export interface GetCourseById_course_by_pk_course_reviews_aggregate_aggregate {
  __typename: "course_review_aggregate_fields";
  count: number | null;
  avg: GetCourseById_course_by_pk_course_reviews_aggregate_aggregate_avg | null;
}

export interface GetCourseById_course_by_pk_course_reviews_aggregate {
  __typename: "course_review_aggregate";
  aggregate: GetCourseById_course_by_pk_course_reviews_aggregate_aggregate | null;
}

export interface GetCourseById_course_by_pk {
  __typename: "course";
  id: string;
  name: string;
  /**
   * An object relationship
   */
  teacher: GetCourseById_course_by_pk_teacher;
  time_location: string;
  semester_id: string;
  number: string;
  index: number;
  /**
   * An aggregated array relationship
   */
  course_grades_public_aggregate: GetCourseById_course_by_pk_course_grades_public_aggregate;
  /**
   * An aggregated array relationship
   */
  course_reviews_aggregate: GetCourseById_course_by_pk_course_reviews_aggregate;
}

export interface GetCourseById {
  /**
   * fetch data from the table: "course" using primary key columns
   */
  course_by_pk: GetCourseById_course_by_pk | null;
}

export interface GetCourseByIdVariables {
  id: string;
}

/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: GetCourses
// ====================================================

export interface GetCourses_course_teacher {
  __typename: "teacher";
  id: bigint;
  name: string;
}

export interface GetCourses_course {
  __typename: "course";
  id: string;
  name: string;
  /**
   * An object relationship
   */
  teacher: GetCourses_course_teacher;
  semester_id: string;
}

export interface GetCourses {
  /**
   * fetch data from the table: "course"
   */
  course: GetCourses_course[];
}

export interface GetCoursesVariables {
  query: string;
}

/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

//==============================================================
// START Enums and Input Objects
//==============================================================

export enum letter_grade_enum {
  A = "A",
  A_minus = "A_minus",
  A_plus = "A_plus",
  B = "B",
  B_minus = "B_minus",
  B_plus = "B_plus",
  C = "C",
  C_minus = "C_minus",
  C_plus = "C_plus",
  D = "D",
  D_plus = "D_plus",
  F = "F",
  P = "P",
}

//==============================================================
// END Enums and Input Objects
//==============================================================
