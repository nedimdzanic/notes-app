export const downloadJsonFile = (object, fileName) => {
  const element = document.createElement("a");
  const file = new Blob([JSON.stringify(object)], {
    type: "text/plain;charset=utf-8",
  });
  element.href = URL.createObjectURL(file);
  element.download = `${fileName}.json`;
  document.body.appendChild(element);
  element.click();
};
