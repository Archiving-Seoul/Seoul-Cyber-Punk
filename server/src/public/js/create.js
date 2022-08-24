const button = document.querySelector("button");
const id = document.querySelector("#id");

button.addEventListener("click", create);

async function create() {
  const req = { id: id.value };
  const res = await fetch("/", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(req),
  });
  const data = await res.json();
  console.log(data);
}
