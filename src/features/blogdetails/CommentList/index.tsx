import CommentCard from "./CommentCard";

export default function CommentList() {
  return (
    <div className="flex flex-col gap-4 xl:gap-16 px-4 xl:px-28 py-6">
      {Array.from({ length: 5 }).map((_, index) => (
        <CommentCard key={index} />
      ))}
    </div>
  );
}
