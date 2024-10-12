const search = document.getElementById('search');
const inputSearch = document.getElementById('input-search');
const list = document.getElementById('list');
const btnDelete = document.getElementsByClassName('btn-delete')[0];
const message = document.getElementById('message');

const items = [
  "Pão de forma",
  "Café preto",
  "Suco de laranja",
  "Bolacha"
];

search.onsubmit = (e) => {
  e.preventDefault();
  
  if (inputSearch.value == "") {
    return
  }

  const data = new Date();
  const timestamp = data.getTime();

  const item = `
    <div class="item" id="item-id-${timestamp}">
      <input type="checkbox" id="item-${timestamp}">
      <label for="item-${timestamp}">${inputSearch.value}</label>
      <a href="#" onClick="deleteItem(${timestamp}, '${inputSearch.value}')"><img src="./assets/icons/delete.svg" alt=""></a>
    </div>
  `;

  list.innerHTML = list.innerHTML + item;  
  items.push(inputSearch.value)
  inputSearch.value = "";
};

btnDelete.addEventListener('click', () => {
  message.className = "";
});

function deleteItem(id, item) {
  const index = items.indexOf(item);
  document.getElementById(`item-id-${id}`).remove();
  items.splice(index, 1);

  message.className = "active";
  setTimeout(() => {
    message.className = "";
  }, 3000);
}