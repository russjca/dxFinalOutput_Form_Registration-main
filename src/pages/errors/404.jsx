import { Button, Result } from "antd";
import { Link } from "react-router-dom";

const Error404Page = () => {
  return (
    <div className="flex items-center justify-center h-screen">
      {/* Result component for displaying the 404 error */}
      <Result
        status="404"
        title="404"
        subTitle="Sorry, the page you visited does not exist."
      />
      <Link to={"/"}>
        <Button type="primary"> Back Home</Button>
      </Link>
    </div>
  );
};

export default Error404Page;
