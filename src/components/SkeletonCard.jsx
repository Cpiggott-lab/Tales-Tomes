import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

function SkeletonBookCard() {
  const isDarkMode = document.body.classList.contains("dark-mode");

  const baseColor = isDarkMode ? "#2a2a2a" : "#e0e0e0";
  const highlightColor = isDarkMode ? "#3a3a3a" : "#f5f5f5";

  return (
    <div className="book-item">
      <div className="book-info-block">
        <div className="book-image-container">
          <Skeleton
            height={230}
            width={140}
            borderRadius={4}
            baseColor={baseColor}
            highlightColor={highlightColor}
          />
        </div>
        <h2 className="book-title">
          <Skeleton
            width="100%"
            height={30}
            baseColor={baseColor}
            highlightColor={highlightColor}
          />
        </h2>
        <p className="book-author">
          <Skeleton
            width="100%"
            height={30}
            baseColor={baseColor}
            highlightColor={highlightColor}
          />
        </p>
      </div>
    </div>
  );
}

export default SkeletonBookCard;
