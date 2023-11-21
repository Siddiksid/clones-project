let clones = [
  {
    id: 1,
    name: "Victor",
    src: "https://i.ibb.co/rpmwD8W/victor.png",
  },
];
let id = 0;

const dogContainer = document.getElementById("dog-container");
const select = document.querySelector("select");
function render() {
  dogContainer.replaceChildren();
  select.replaceChildren();
  for (let clone of clones) {
    const div = document.createElement("div");
    div.className = "dogStyle";

    const h2 = document.createElement("h2");
    h2.textContent = clone.name;
    div.appendChild(h2);
    const pId = document.createElement("p");
    pId.textContent = `Id:${clone.id}`;
    div.appendChild(pId);
    const image = document.createElement("img");
    image.src = clone.src;
    div.appendChild(image);
    const button = document.createElement("button");
    button.textContent = "Clone";
    button.id = "btn";
    div.appendChild(button);
    dogContainer.appendChild(div);
    button.addEventListener("click", function () {
      let newClone = { ...clone, id: clones.length + 1 };

      clones.push(newClone);

      render();
    });
    const option = document.createElement("option");
    option.textContent = clone.id;
    option.value = clone.id;
    select.appendChild(option);
  }
}
render();
select.addEventListener("change", function (e) {
  const selectedItem = Number(e.target.value);
  clones = clones.filter((e) => e.id != selectedItem);
  render();
});
