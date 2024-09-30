import { toast } from "react-toastify";
import { commentPostAPI } from "../../Services/CommentService";
import "./StockComment.css";
import StockCommentForm from "./StockCommentForm/StockCommentForm";

type Props = {
  stockSymbol: string;
};

type CommentFormInputs = {
  title: string;
  content: string;
};

const StockComment = ({ stockSymbol }: Props) => {
  const handleComment = (e: CommentFormInputs) => {
    commentPostAPI(e.title, e.content, stockSymbol)
      .then((res) => {
        if (res) {
          toast.success("Comment created successfully!");
        }
      })
      .catch((e) => {
        toast.warning(e);
      });
  };

  return (
    <StockCommentForm symbol={stockSymbol} handleComment={handleComment} />
  );
};

export default StockComment;
