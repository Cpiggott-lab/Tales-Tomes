//https://www.npmjs.com/package/react-loading-skeleton
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

function SkeletonBookCard() {
  return (
    <div className="book-item">
      <div className="book-info-block">
        <div className="book-image-container">
          <Skeleton height={230} width={140} borderRadius={4} />
        </div>
        <h2 className="book-title">
          <Skeleton width={`100%`} height={30} />
        </h2>
        <p className="book-author">
          <Skeleton width={`100%`} height={30} />
        </p>
      </div>
    </div>
  );
}

export default SkeletonBookCard;
