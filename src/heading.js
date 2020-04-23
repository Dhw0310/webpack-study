export default () => {
  const element = document.createElement("h2");
  element.textContent = "Hello";
  element.addEventListener("click", () => {
    alert("hello");
  });
  return element;
};
