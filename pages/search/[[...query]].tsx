import { useEffect } from "react";
import { GetStaticPaths, GetStaticProps } from "next";
import { useRouter } from "next/router";
import Link from "next/link";
import { NextSeo } from "next-seo";
import { useQuery } from "@apollo/client";
import {
  CircularProgress,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
} from "@material-ui/core";
import { GET_COURSES } from "apis/course";
import { GetCourses, GetCoursesVariables } from "apis/types";
import { initializeApollo } from "lib/client";
import { getSemesterTextFromId } from "lib/parse";
import useToast from "lib/useToast";
import Home from "pages";

const Search: React.FC = () => {
  const toast = useToast();

  const router = useRouter();
  const query = router.query.query?.[0] as string;
  const { data: courseData, error: courseError } = useQuery<
    GetCourses,
    GetCoursesVariables
  >(GET_COURSES, {
    variables: {
      query: `%${query}%`,
    },
    skip: !query,
  });

  useEffect(() => {
    if (courseError) {
      toast("课程加载失败");
    }
  }, [courseError, toast]);

  return (
    <>
      <NextSeo title={query ? `搜索 - ${query}` : "搜索"} />
      <Home>
        {!query ? null : router.isFallback ? (
          <div className="text-center my-8 w-full">
            <CircularProgress size="1.5rem" />
          </div>
        ) : courseData?.course.length === 0 ? (
          <div className="text-center my-8 w-full text-gray-700 dark:text-gray-500">
            未找到相关课程
          </div>
        ) : (
          <Table className="table-fixed my-8 px-2">
            <TableHead>
              <TableRow>
                <TableCell>课程</TableCell>
                <TableCell className="w-20" align="center">
                  教师
                </TableCell>
                <TableCell className="w-32" align="center">
                  学期
                </TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {courseData?.course.map((course) => (
                <TableRow key={course.id}>
                  <TableCell className="whitespace-pre-wrap break-words">
                    <Link href={`/courses/${course.id}`}>
                      <a>{course.name}</a>
                    </Link>
                  </TableCell>
                  <TableCell align="center">{course.teacher.name}</TableCell>
                  <TableCell className="whitespace-pre-wrap" align="center">
                    {getSemesterTextFromId(course.semester_id, true)}
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        )}
      </Home>
    </>
  );
};

export default Search;

export const getStaticPaths: GetStaticPaths = async () => {
  return { paths: [], fallback: true };
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const client = initializeApollo();

  if (params?.query?.[0]) {
    await client.query<GetCourses, GetCoursesVariables>({
      query: GET_COURSES,
      variables: {
        query: `%${params?.query?.[0] as string}%`,
      },
    });
  }

  return {
    props: {
      initialApolloState: client.cache.extract(),
    },
    revalidate: 1,
  };
};
