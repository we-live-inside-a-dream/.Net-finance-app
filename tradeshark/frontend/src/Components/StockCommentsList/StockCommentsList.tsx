import { CommentGet } from "../../Models/Comment";
import StockCommentsListItem from "../StockCommentsListItem/StockCommentsListItem";
import "./StockCommentsList.css";

type Props = {
  comments: CommentGet[];
};

const StockCommentsList = ({ comments }: Props) => {
  return (
    <>
      {comments
        ? comments.map((comment) => {
            return <StockCommentsListItem comment={comment} />;
          })
        : ""}
    </>
  );
};

export default StockCommentsList;
