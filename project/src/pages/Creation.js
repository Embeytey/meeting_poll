import news from "../news.json";
import CreateGroupPolly from "../components/CreationMeeting/CreateGroupPolly";

const Creation = () => {
  news.sort(() => Math.random() - 0.5);

  return (
    <div>
      <CreateGroupPolly news={news} />
<<<<<<< HEAD
     
=======
>>>>>>> 6b75ab52178655d3e9629db1be5c85deade41ee3
    </div>
  );
};

export default Creation;
