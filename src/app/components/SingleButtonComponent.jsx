const ColorButton = ({ color, image, setSelectedWatch, isActive, onClick }) => {
  return (
    <div
      className={`color-button ${color} ${isActive ? "active-button" : ""}`}
      onClick={() => {
        setSelectedWatch(image);
        onClick(color);
      }}
    ></div>
  );
};

export default ColorButton;

//color-button
