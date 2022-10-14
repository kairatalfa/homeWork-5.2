function BlockItem(props) {
    
  function getColor() {
    if (Number(props.block)) {
      return "yellow";
    } else {
      return props.block;
    }
  }

  return <div className="border" style={{backgroundColor: getColor()}}>BLOCKITEM</div>;
}

export default BlockItem;
