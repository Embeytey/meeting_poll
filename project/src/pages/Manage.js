import ManageMeetingContainer from "../components/ManageMeeting/ManageMeetingContainer";
import news from "../news.json";

const Manage = () => {
  news.sort(() => Math.random() - 0.5);

  return (
    <div>
      <ManageMeetingContainer />
    </div>
  );
};

export default Manage;
