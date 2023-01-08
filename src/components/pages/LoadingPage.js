import { Triangle } from "react-loader-spinner";

const LoadingPage = () => {
  return (
    <>
      <div className="loading_spinner">
        <Triangle
          height="80"
          width="80"
          color="#171717"
          ariaLabel="triangle-loading"
          wrapperStyle={{}}
          wrapperClassName=""
          visible={true}
        />
      </div>
    </>
  );
};
export default LoadingPage;
