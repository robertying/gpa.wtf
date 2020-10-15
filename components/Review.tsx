import { Rating } from "@material-ui/lab";
import dayjs from "dayjs";
import { GetCourseReviews_course_review } from "apis/types";
import Avatar from "./Avatar";

export interface ReviewProps extends GetCourseReviews_course_review {
  className?: string;
}

const Review: React.FC<ReviewProps> = ({ className, ...review }) => (
  <div className={`flex flex-col ${className}`}>
    <div className="flex flex-row items-center">
      <Avatar
        alt={review.user.username}
        src={review.user.avatar_url!}
        srcSize="small"
      />
      <span className="mx-2">{review.user.username}</span>
      <Rating className="ml-auto" value={review.rating} readOnly />
    </div>
    <p className="whitespace-pre-wrap break-words my-2 p-2">
      {review.content || "无评价内容"}
    </p>
    <span className="text-sm text-gray-600">
      {dayjs(review.updated_at).isSame(review.created_at)
        ? dayjs(review.created_at).fromNow()
        : "编辑于 " + dayjs(review.updated_at).fromNow()}
    </span>
  </div>
);

export default Review;
