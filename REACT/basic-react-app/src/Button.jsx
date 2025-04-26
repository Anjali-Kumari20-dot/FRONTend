function handleClick() {
  console.log("Hello, World!");
}

function handleMouseOver() {
  console.log("Bye!");
}

function handleDblClick() {
    console.log("You double clicked")
}

export default function Button() {
  return (
    <div>
      <button onClick={handleClick}>Click me!</button>
      <p onMouseOver={handleMouseOver}>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias consectetur, rem debitis ullam, sit corporis esse doloremque corrupti, cumque blanditiis perferendis deleniti error fuga mollitia neque recusandae dolor veniam. Consectetur.
      </p>
        <button onDoubleClick={handleDblClick}>Double Click me!</button>
    </div>
  );
}
