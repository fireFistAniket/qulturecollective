import CommentCard from "./CommentCard";

export default function CommentList({ comments }: { comments: any }) {
  console.log(comments);

  return (
    <div className="flex flex-col gap-4 xl:gap-16 px-4 xl:px-28 py-6">
      {comments.data.map((comnt: any, index: number) => (
        <CommentCard key={index} comment={comnt} />
      ))}
    </div>
  );
}
