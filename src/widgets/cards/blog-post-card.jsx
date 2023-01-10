import PropTypes from "prop-types";
import {
  Card,
  CardBody,
  Typography,
  CardHeader,
} from "@material-tailwind/react";
import { fDate } from '@/utils/formatTime';
import { UsersIcon } from "@heroicons/react/24/solid";

export function BlogPostCard({ post }) {
  return (
    <Card className="shadow-lg shadow-gray-500/10">
        <CardHeader className="relative h-56">
            <img
            alt="Card Image"
            src={post?.cover_image}
            className="h-full w-full"
            />
        </CardHeader>
        <CardBody>
            <Typography
            variant="h5"
            color="blue-gray"
            className="mb-3 font-bold"
            >

                {post?.title}
            </Typography>
            <Typography className="font-normal text-blue-gray-300">
                {fDate(post.createdAt)}
            </Typography>
        </CardBody>
    </Card>
  );
}

BlogPostCard.propTypes = {
  post: PropTypes.object.isRequired,
};

export default BlogPostCard;
