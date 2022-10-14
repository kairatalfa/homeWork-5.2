import "./block.css";
import BlockItem from "./BlockItem";

function Block({ border }) {
  console.log(Math.random());
  return (
    <div className="border">
      {border.map((item) => (
        <BlockItem {...item} key={item.id} />
      ))}
    </div>
  );
}

export default Block;
