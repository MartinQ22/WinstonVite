import { ThreeDots } from "react-loader-spinner";

export const Loader = () => {
  return (
    <div className="loader">
      <ThreeDots
        visible={true}
        height="80"
        width="80"
        color="#612bbe"
        radius="9"
        ariaLabel="three-dots-loading"
        wrapperStyle={{}}
        wrapperClass=""
      />
    </div>
  );
};
