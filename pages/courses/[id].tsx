import { forwardRef, useEffect, useState } from "react";
import {
  Button,
  Checkbox,
  CircularProgress,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  IconButton,
  MenuItem,
  Select,
  Slide,
} from "@material-ui/core";
import { Rating } from "@material-ui/lab";
import { Close, Home } from "@material-ui/icons";
import { useTheme } from "@material-ui/core/styles";
import { TransitionProps } from "@material-ui/core/transitions";
import { GetStaticPaths, GetStaticProps } from "next";
import Link from "next/link";
import { useRouter } from "next/router";
import dynamic from "next/dynamic";
import { NextSeo } from "next-seo";
import { useMutation, useQuery } from "@apollo/client";
import { GET_COURSE_BY_ID } from "apis/course";
import {
  ADD_COURSE_REVIEW,
  DELETE_COURSE_REVIEW,
  GET_COURSE_REVIEWS,
  UPDATE_COURSE_REVIEW,
} from "apis/course_review";
import {
  ADD_COURSE_GRADE,
  DELETE_COURSE_GRADE,
  GET_COURSE_GRADES,
  UPDATE_COURSE_GRADE,
} from "apis/course_grade";
import {
  GetCourseById,
  GetCourseByIdVariables,
  AddCourseReview,
  AddCourseReviewVariables,
  GetCourseReviewsVariables,
  GetCourseReviews,
  UpdateCourseReview,
  UpdateCourseReviewVariables,
  DeleteCourseReview,
  DeleteCourseReviewVariables,
  GetCourseGrades,
  GetCourseGradesVariables,
  AddCourseGrade,
  AddCourseGradeVariables,
  UpdateCourseGrade,
  UpdateCourseGradeVariables,
  DeleteCourseGrade,
  DeleteCourseGradeVariables,
  GetCourseGrades_my_course_grade,
  letter_grade_enum,
} from "apis/types";
import Review from "components/Review";
import Splash from "components/Splash";
import Footer from "components/Footer";
import { initializeApollo } from "lib/client";
import {
  getGradePointFromGrade,
  getGradeTextFromGrade,
  getSemesterTextFromId,
} from "lib/parse";
import useUserId from "lib/useUserId";
import useToast from "lib/useToast";
import NotFound from "pages/404";
import type { LinearComponentProps } from "react-chartjs-2";

const Bar = dynamic<LinearComponentProps>(
  () => import("react-chartjs-2").then((m) => m.Bar),
  {
    loading: () => <CircularProgress size="1.5rem" />,
  }
);

const DialogTransition = forwardRef(function DialogTransition(
  props: TransitionProps & { children?: React.ReactElement },
  ref: React.Ref<unknown>
) {
  return <Slide direction="up" ref={ref} {...props} />;
});

const Course: React.FC = () => {
  const theme = useTheme();

  const toast = useToast();

  const router = useRouter();
  const { data: courseData, refetch: refetchCourse } = useQuery<
    GetCourseById,
    GetCourseByIdVariables
  >(GET_COURSE_BY_ID, {
    variables: {
      id: router.query.id as string,
    },
    skip: !router.query.id,
  });
  const course = courseData?.course_by_pk!;

  const userId = useUserId();

  const [gradeDialogOpen, setGradeDialogOpen] = useState(false);
  const [deleteGradeDialogOpen, setDeleteGradeDialogOpen] = useState(false);
  const [grade, setGrade] = useState<Partial<GetCourseGrades_my_course_grade>>({
    grade: "" as any,
    grade_point: undefined,
    p_f: false,
    remark: "",
  });

  const [reviewDialogOpen, setReviewDialogOpen] = useState(false);
  const [deleteReviewDialogOpen, setDeleteReviewDialogOpen] = useState(false);
  const [rating, setRating] = useState<number | null>(null);
  const [content, setContent] = useState("");

  const {
    data: courseGradeData,
    error: courseGradeError,
    loading: courseGradeLoading,
    refetch: refetchCourseGrades,
  } = useQuery<GetCourseGrades, GetCourseGradesVariables>(GET_COURSE_GRADES, {
    variables: {
      course_id: course?.id,
      user_id: userId!,
    },
    skip: !course?.id || !userId,
  });
  const {
    data: courseReviewData,
    error: courseReviewError,
    loading: courseReviewLoading,
    refetch: refetchCourseReviews,
  } = useQuery<GetCourseReviews, GetCourseReviewsVariables>(
    GET_COURSE_REVIEWS,
    {
      variables: {
        user_id: userId!,
      },
      skip: !course?.id || !userId,
    }
  );

  const [
    addCourseGrade,
    { data: addCourseGradeData, error: addCourseGradeError },
  ] = useMutation<AddCourseGrade, AddCourseGradeVariables>(ADD_COURSE_GRADE);
  const [
    updateCourseGrade,
    { data: updateCourseGradeData, error: updateCourseGradeError },
  ] = useMutation<UpdateCourseGrade, UpdateCourseGradeVariables>(
    UPDATE_COURSE_GRADE
  );
  const [
    deleteCourseGrade,
    { data: deleteCourseGradeData, error: deleteCourseGradeError },
  ] = useMutation<DeleteCourseGrade, DeleteCourseGradeVariables>(
    DELETE_COURSE_GRADE
  );
  const [
    addCourseReview,
    { data: addCourseReviewData, error: addCourseReviewError },
  ] = useMutation<AddCourseReview, AddCourseReviewVariables>(ADD_COURSE_REVIEW);
  const [
    updateCourseReview,
    { data: updateCourseReviewData, error: updateCourseReviewError },
  ] = useMutation<UpdateCourseReview, UpdateCourseReviewVariables>(
    UPDATE_COURSE_REVIEW
  );
  const [
    deleteCourseReview,
    { data: deleteCourseReviewData, error: deleteCourseReviewError },
  ] = useMutation<DeleteCourseReview, DeleteCourseReviewVariables>(
    DELETE_COURSE_REVIEW
  );
  const noGrade = !courseGradeData?.my_course_grade;
  const noReview = courseReviewData?.my_course_review.length === 0;

  const handleGradeDialogOpen = () => {
    if (!noGrade) {
      setGrade(courseGradeData?.my_course_grade!);
    }
    setGradeDialogOpen(true);
  };

  const handleGradeDialogClose = () => {
    setGradeDialogOpen(false);
    setGrade({
      grade: "" as any,
      grade_point: undefined,
      p_f: false,
      remark: "",
    });
  };

  const handleDeleteGradeDialogOpen = () => {
    setDeleteGradeDialogOpen(true);
  };

  const handleDeleteGradeDialogClose = () => {
    setDeleteGradeDialogOpen(false);
    setGrade({
      grade: "" as any,
      grade_point: undefined,
      p_f: false,
      remark: "",
    });
  };

  const handleDeleteGrade = () => {
    deleteCourseGrade({
      variables: {
        course_id: course.id,
        user_id: userId!,
      },
    });
  };

  const handleSubmitGrade = () => {
    if (!grade.grade) {
      toast("请填写等级制成绩");
      return;
    }

    if (noGrade) {
      addCourseGrade({
        variables: {
          course_id: course.id,
          user_id: userId!,
          grade: grade.grade,
          grade_point: grade.grade_point,
          p_f: grade.p_f ?? false,
          remark: grade.remark?.trim(),
        },
      });
    } else {
      updateCourseGrade({
        variables: {
          course_id: course.id,
          user_id: userId!,
          grade: grade.grade,
          grade_point: grade.grade_point,
          p_f: grade.p_f ?? false,
          remark: grade.remark?.trim(),
        },
      });
    }
  };

  const handleReviewDialogOpen = () => {
    if (!noReview) {
      setRating(courseReviewData?.my_course_review?.[0].rating!);
      setContent(courseReviewData?.my_course_review?.[0].content!);
    }
    setReviewDialogOpen(true);
  };

  const handleReviewDialogClose = () => {
    setReviewDialogOpen(false);
    setRating(null);
    setContent("");
  };

  const handleDeleteReviewDialogOpen = () => {
    setDeleteReviewDialogOpen(true);
  };

  const handleDeleteReviewDialogClose = () => {
    setDeleteReviewDialogOpen(false);
    setRating(null);
    setContent("");
  };

  const handleDeleteReview = () => {
    deleteCourseReview({
      variables: {
        course_id: course.id,
        user_id: userId!,
      },
    });
  };

  const handleSubmitReview = () => {
    if (!rating) {
      toast("请先打分");
      return;
    }

    if (noReview) {
      addCourseReview({
        variables: {
          course_id: course.id,
          user_id: userId!,
          rating: rating!,
          content: content.trim(),
        },
      });
    } else {
      updateCourseReview({
        variables: {
          course_id: course.id,
          user_id: userId!,
          rating: rating!,
          content: content.trim(),
        },
      });
    }
  };

  useEffect(() => {
    if (addCourseGradeData) {
      handleGradeDialogClose();
      toast("成绩已上传");
      refetchCourse();
      refetchCourseGrades();
    }
  }, [addCourseGradeData, refetchCourse, refetchCourseGrades, toast]);

  useEffect(() => {
    if (updateCourseGradeData) {
      handleGradeDialogClose();
      toast("成绩已更新");
      refetchCourse();
      refetchCourseGrades();
    }
  }, [updateCourseGradeData, refetchCourse, refetchCourseGrades, toast]);

  useEffect(() => {
    if (deleteCourseGradeData) {
      handleDeleteGradeDialogClose();
      toast("成绩已删除");
      refetchCourse();
      refetchCourseGrades();
    }
  }, [deleteCourseGradeData, refetchCourse, refetchCourseGrades, toast]);

  useEffect(() => {
    if (addCourseGradeError) {
      toast("成绩上传失败");
    }
  }, [addCourseGradeError, toast]);

  useEffect(() => {
    if (updateCourseGradeError) {
      toast("成绩更新失败");
    }
  }, [updateCourseGradeError, toast]);

  useEffect(() => {
    if (deleteCourseGradeError) {
      toast("成绩删除失败");
    }
  }, [deleteCourseGradeError, toast]);

  useEffect(() => {
    if (courseGradeError) {
      toast("成绩获取失败");
    }
  }, [courseGradeError, toast]);

  useEffect(() => {
    if (addCourseReviewData) {
      handleReviewDialogClose();
      toast("评价已发布");
      refetchCourse();
      refetchCourseReviews();
    }
  }, [addCourseReviewData, refetchCourse, refetchCourseReviews, toast]);

  useEffect(() => {
    if (updateCourseReviewData) {
      handleReviewDialogClose();
      toast("评价已更新");
      refetchCourse();
      refetchCourseReviews();
    }
  }, [updateCourseReviewData, refetchCourse, refetchCourseReviews, toast]);

  useEffect(() => {
    if (deleteCourseReviewData) {
      handleDeleteReviewDialogClose();
      toast("评价已删除");
      refetchCourse();
      refetchCourseReviews();
    }
  }, [deleteCourseReviewData, refetchCourse, refetchCourseReviews, toast]);

  useEffect(() => {
    if (addCourseReviewError) {
      toast("评价发布失败");
    }
  }, [addCourseReviewError, toast]);

  useEffect(() => {
    if (updateCourseReviewError) {
      toast("评价更新失败");
    }
  }, [updateCourseReviewError, toast]);

  useEffect(() => {
    if (deleteCourseReviewError) {
      toast("评价删除失败");
    }
  }, [deleteCourseReviewError, toast]);

  useEffect(() => {
    if (courseReviewError) {
      toast("评价获取失败");
    }
  }, [courseReviewError, toast]);

  if (router.isFallback) {
    return <Splash />;
  }

  if (!course) {
    return <NotFound />;
  }

  const chartData = {
    labels: [
      "A+",
      "A",
      "A-",
      "B+",
      "B",
      "B-",
      "C+",
      "C",
      "C-",
      "D+",
      "D",
      "F",
      "P/F P",
      "P/F F",
    ],
    datasets: [
      {
        data: [
          courseGradeData?.A_plus?.course_grades_public_aggregate.aggregate
            ?.count,
          courseGradeData?.A?.course_grades_public_aggregate.aggregate?.count,
          courseGradeData?.A_minus?.course_grades_public_aggregate.aggregate
            ?.count,
          courseGradeData?.B_plus?.course_grades_public_aggregate.aggregate
            ?.count,
          courseGradeData?.B?.course_grades_public_aggregate.aggregate?.count,
          courseGradeData?.B_minus?.course_grades_public_aggregate.aggregate
            ?.count,
          courseGradeData?.C_plus?.course_grades_public_aggregate.aggregate
            ?.count,
          courseGradeData?.C?.course_grades_public_aggregate.aggregate?.count,
          courseGradeData?.C_minus?.course_grades_public_aggregate.aggregate
            ?.count,
          courseGradeData?.D_plus?.course_grades_public_aggregate.aggregate
            ?.count,
          courseGradeData?.D?.course_grades_public_aggregate.aggregate?.count,
          courseGradeData?.F?.course_grades_public_aggregate.aggregate?.count,
          courseGradeData?.pf_P?.course_grades_public_aggregate.aggregate
            ?.count,
          courseGradeData?.pf_F?.course_grades_public_aggregate.aggregate
            ?.count,
        ],
        backgroundColor: theme.palette.primary.main,
      },
    ],
  };
  const chartOptions = {
    legend: {
      display: false,
    },
    scales: {
      yAxes: [
        {
          ticks: {
            fontColor: theme.palette.text.primary,
            stepSize: 1,
          },
          gridLines: {
            color: theme.palette.divider,
          },
        },
      ],
      xAxes: [
        {
          ticks: {
            fontColor: theme.palette.text.primary,
          },
          gridLines: {
            color: theme.palette.divider,
          },
        },
      ],
    },
  };

  return (
    <>
      <NextSeo title={`${course.name} - ${course.teacher.name}`} />
      <div className="container mx-auto flex flex-col py-8 px-6">
        <nav className="flex flex-row items-center space-x-4">
          <Link href="/">
            <a>
              <IconButton>
                <Home />
              </IconButton>
            </a>
          </Link>
          <div>
            <h1 className="text-lg text-accent dark:text-purple-500">
              courseX
            </h1>
            <h2 className="text-xl">课程信息共享计划</h2>
          </div>
        </nav>
        <main>
          <div className="font-light text-sm mt-8">
            {getSemesterTextFromId(course.semester_id)}
          </div>
          <h3 className="font-bold text-4xl mt-2">{course.name}</h3>
          <h4 className="font-medium text-2xl mt-2">{course.teacher.name}</h4>
          <h5 className="font-medium text-lg mt-10">时间 / 地点</h5>
          <ul className="list-disc list-inside mt-2">
            {(JSON.parse(course.time_location) as string[]).map((i) => (
              <li key={i}>{i}</li>
            ))}
          </ul>
          <div className="flex flex-row items-center justify-between space-x-4 mt-10">
            <h5 className="font-medium text-lg">成绩分布</h5>
            {userId && (
              <div className="flex flex-row items-center space-x-2">
                {!noGrade && (
                  <>
                    <Button
                      variant="outlined"
                      size="small"
                      onClick={handleDeleteGradeDialogOpen}
                    >
                      删除成绩
                    </Button>
                    <Dialog
                      open={deleteGradeDialogOpen}
                      onClose={handleDeleteGradeDialogClose}
                    >
                      <DialogTitle>删除已上传的个人成绩？</DialogTitle>
                      <DialogContent>
                        <DialogContentText>此操作不可撤销。</DialogContentText>
                      </DialogContent>
                      <DialogActions>
                        <Button
                          onClick={handleDeleteGradeDialogClose}
                          color="primary"
                        >
                          取消
                        </Button>
                        <Button onClick={handleDeleteGrade} color="primary">
                          确定
                        </Button>
                      </DialogActions>
                    </Dialog>
                  </>
                )}
                <Button
                  variant="outlined"
                  size="small"
                  onClick={handleGradeDialogOpen}
                >
                  {noGrade ? "上传个人成绩" : "更新成绩"}
                </Button>
              </div>
            )}
          </div>
          <div className="mt-2">
            {(
              course.course_grades_public_aggregate.aggregate?.avg
                ?.grade_point ?? 0
            ).toFixed(2)}{" "}
            / 4.00
          </div>
          <div className="text-sm text-gray-700 dark:text-gray-500 mt-2">
            基于 {course.course_grades_public_aggregate.aggregate?.count}{" "}
            条已上传成绩计算，仅供参考
          </div>
          {userId ? (
            courseGradeLoading ? (
              <div className="text-center my-8 w-full">
                <CircularProgress size="1.5rem" />
              </div>
            ) : (
              <div className="text-center my-8 w-full">
                <Bar data={chartData} options={chartOptions} />
              </div>
            )
          ) : (
            <div className="w-full text-center my-8 space-y-2">
              <div className="text-gray-700 dark:text-gray-500">
                请在登录后查看成绩分布
              </div>
              <Button
                variant="contained"
                color="primary"
                href={`https://thu.community/login?redirect_url=${
                  typeof window === "undefined"
                    ? "https://course.thu.community"
                    : window.location.href
                }`}
              >
                登录
              </Button>
            </div>
          )}
          <div className="flex flex-row items-center justify-between space-x-4 mt-10">
            <h5 className="font-medium text-lg">打分评价</h5>
            {userId && (
              <div className="flex flex-row items-center space-x-2">
                {!noReview && (
                  <>
                    <Button
                      variant="outlined"
                      size="small"
                      onClick={handleDeleteReviewDialogOpen}
                    >
                      删除评价
                    </Button>
                    <Dialog
                      open={deleteReviewDialogOpen}
                      onClose={handleDeleteReviewDialogClose}
                    >
                      <DialogTitle>删除此条评价？</DialogTitle>
                      <DialogContent>
                        <DialogContentText>此操作不可撤销。</DialogContentText>
                      </DialogContent>
                      <DialogActions>
                        <Button
                          onClick={handleDeleteReviewDialogClose}
                          color="primary"
                        >
                          取消
                        </Button>
                        <Button onClick={handleDeleteReview} color="primary">
                          确定
                        </Button>
                      </DialogActions>
                    </Dialog>
                  </>
                )}
                <Button
                  variant="outlined"
                  size="small"
                  onClick={handleReviewDialogOpen}
                >
                  {noReview ? "撰写评价" : "更新评价"}
                </Button>
              </div>
            )}
          </div>
          <div className="flex flex-row items-center space-x-2 mt-2">
            <Rating
              value={course.course_reviews_aggregate.aggregate?.avg?.rating}
              precision={0.1}
              readOnly
            />
            <span>
              {course.course_reviews_aggregate.aggregate?.avg?.rating?.toFixed(
                1
              )}
            </span>
          </div>
          {userId ? (
            courseReviewLoading ? (
              <div className="text-center my-8 w-full">
                <CircularProgress size="1.5rem" />
              </div>
            ) : (
              <>
                {courseReviewData?.my_course_review.map((review) => (
                  <Review
                    key={review.user_id}
                    className="w-full my-8"
                    {...review}
                  />
                ))}
                {courseReviewData?.course_review.length === 0 ? (
                  <div className="w-full text-center text-gray-700 dark:text-gray-500 my-8">
                    无更多评价
                  </div>
                ) : (
                  courseReviewData?.course_review.map((review) => (
                    <Review
                      key={review.user_id}
                      className="w-full my-8"
                      {...review}
                    />
                  ))
                )}
              </>
            )
          ) : (
            <div className="w-full text-center my-8 space-y-2">
              <div className="text-gray-700 dark:text-gray-500">
                请在登录后查看打分评价
              </div>
              <Button
                variant="contained"
                color="primary"
                href={`https://thu.community/login?redirect_url=${
                  typeof window === "undefined"
                    ? "https://course.thu.community"
                    : window.location.href
                }`}
              >
                登录
              </Button>
            </div>
          )}
        </main>
        <Footer />
        <Dialog
          classes={{
            paper: "p-2",
          }}
          fullScreen
          open={gradeDialogOpen}
          onClose={handleGradeDialogClose}
          TransitionComponent={DialogTransition}
        >
          <nav className="flex flex-row justify-between items-center">
            <IconButton onClick={handleGradeDialogClose}>
              <Close />
            </IconButton>
            <Button onClick={handleSubmitGrade}>
              {noGrade ? "上传" : "更新"}
            </Button>
          </nav>
          <main className="flex-1 flex flex-col px-4 pt-2 pb-6">
            <div className="font-light text-sm">
              {getSemesterTextFromId(course.semester_id)}
            </div>
            <h1 className="font-bold text-4xl mt-2">{course.name}</h1>
            <h2 className="font-medium text-2xl mt-2">{course.teacher.name}</h2>
            <span className="font-medium text-lg mt-8 mb-2">是否 P / F</span>
            <Checkbox
              className="self-start"
              color="primary"
              checked={grade.p_f}
              onChange={(e) =>
                setGrade({ ...grade, p_f: e.target.checked, grade: "" as any })
              }
            />
            <span className="font-medium text-lg mt-8 mb-2">等级制成绩</span>
            <Select
              value={grade.grade}
              onChange={(e) =>
                setGrade({
                  ...grade,
                  grade: e.target.value as letter_grade_enum,
                  grade_point: getGradePointFromGrade(
                    e.target.value as letter_grade_enum
                  ),
                })
              }
            >
              {(grade.p_f
                ? ["", letter_grade_enum.P, letter_grade_enum.F]
                : [
                    "",
                    letter_grade_enum.A_plus,
                    letter_grade_enum.A,
                    letter_grade_enum.A_minus,
                    letter_grade_enum.B_plus,
                    letter_grade_enum.B,
                    letter_grade_enum.B_minus,
                    letter_grade_enum.C_plus,
                    letter_grade_enum.C,
                    letter_grade_enum.C_minus,
                    letter_grade_enum.D_plus,
                    letter_grade_enum.D,
                    letter_grade_enum.F,
                  ]
              ).map((i) => (
                <MenuItem key={i} value={i}>
                  {i && getGradeTextFromGrade(i as letter_grade_enum)}
                </MenuItem>
              ))}
            </Select>
            {!grade.p_f && (
              <>
                <span className="font-medium text-lg mt-8 mb-2">绩点</span>
                <span>{grade.grade_point?.toFixed(1)}</span>
              </>
            )}
            <span className="font-medium text-lg mt-8 mb-2">备注</span>
            <textarea
              className="flex-1 bg-purple-100 focus:outline-none resize-none p-2 dark:bg-gray-900"
              value={grade.remark ?? ""}
              onChange={(e) => setGrade({ ...grade, remark: e.target.value })}
              placeholder="可选"
            />
          </main>
        </Dialog>
        <Dialog
          classes={{
            paper: "p-2",
          }}
          fullScreen
          open={reviewDialogOpen}
          onClose={handleReviewDialogClose}
          TransitionComponent={DialogTransition}
        >
          <nav className="flex flex-row justify-between items-center">
            <IconButton onClick={handleReviewDialogClose}>
              <Close />
            </IconButton>
            <Button onClick={handleSubmitReview}>
              {noReview ? "发布" : "更新"}
            </Button>
          </nav>
          <main className="flex-1 flex flex-col px-4 pt-2 pb-6">
            <div className="font-light text-sm">
              {getSemesterTextFromId(course.semester_id)}
            </div>
            <h1 className="font-bold text-4xl mt-2">{course.name}</h1>
            <h2 className="font-medium text-2xl mt-2">{course.teacher.name}</h2>
            <span className="font-medium text-lg mt-8 mb-2">打分</span>
            <Rating
              name="rating"
              value={rating}
              onChange={(e, r) => {
                setRating(r);
              }}
            />
            <span className="font-medium text-lg mt-8 mb-2">评价</span>
            <textarea
              className="flex-1 bg-purple-100 focus:outline-none resize-none p-2 dark:bg-gray-900"
              value={content}
              onChange={(e) => setContent(e.target.value)}
              placeholder="可选"
            />
          </main>
        </Dialog>
      </div>
    </>
  );
};

export default Course;

export const getStaticPaths: GetStaticPaths = async () => {
  return { paths: [], fallback: true };
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const client = initializeApollo();

  await client.query<GetCourseById, GetCourseByIdVariables>({
    query: GET_COURSE_BY_ID,
    variables: {
      id: params?.id as string,
    },
  });

  return {
    props: {
      initialApolloState: client.cache.extract(),
    },
    revalidate: 1,
  };
};
