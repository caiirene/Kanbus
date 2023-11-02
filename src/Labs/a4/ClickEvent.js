function ClickEvent() {
  const hello = (message) => {
    alert(`Message: ${message}`);
  };
  const helloOriginal = () => {
    alert("Hello World!");
  };

  const good = () => {
    alert("Life is Good!");
  };
  return (
    <div>
      <h2>Click Event</h2>
      <button onClick={helloOriginal}>
        Click Hello original </button>
      
      <button onClick={() => hello("Hello World,这里不能直接用hello函数传参，需要把已经包含参数的hello函数作为一个对象整体传进onClick中")}>Click Hello 1 </button>
      <button onClick={() => hello("Hello World")}>Click Hello 2 </button>
      <button
        onClick={() => {
          hello();
          console.log("Hello World!");
          good();
        }}
      >
        Click Hello 3
      </button>
    </div>
  );
}
export default ClickEvent;
