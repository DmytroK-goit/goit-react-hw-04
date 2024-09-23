const LoadMoreBtn = ({ setCount }) => {
  return (
    <div>
      <button onClick={() => setCount((prevCount) => prevCount + 1)}>
        Завантажити ще
      </button>
    </div>
  );
};
export default LoadMoreBtn;
