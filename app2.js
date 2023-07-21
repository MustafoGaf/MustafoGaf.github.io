const segodnya = document.querySelector(".segodnya");
const Form = document.querySelector(".input_group");
const data = localStorage.getItem("todos")
  ? JSON.parse(localStorage.getItem("todos"))
  : [];

// functions
const getDate = () => {
  let d = new Date();
  let day = d.getDate();
  let month = d.getMonth() + 1;
  let year = d.getFullYear();
  return `${day}.${month > 9 ? month : "0" + month}.${year}`;
};
// visov
segodnya.innerHTML = getDate();
Form.onsubmit = (e) => {
  e.preventDefault();
};

const TODO = {
  day: getDate(),
  utro: false,
  izuchat: false,
  sport: false,
  tishine: false,
  sna: false,
  progulka: false,
  koran: false,
  kniga: false,
  misl: false,
};
const addTOlocal = (obj) => {
    if (localStorage.getItem("todos") === null) {
        let data = [];
        data.push(TODO);
        localStorage.setItem("todos", JSON.stringify(data));
    } else {
        return "";
    }
};
addTOlocal();

function EditTodo(name) {
  let data = JSON.parse(localStorage.getItem("todos"));
  data[name] = !data[name];
  console.log(data);
  localStorage.clear();
  localStorage.setItem("todos", JSON.stringify(data));
}
function inputGroup() {
  let utro = document.createElement("input");
  utro.type = "checkbox";
  utro.onclick = (e) => {
    EditTodo("utro");
  };
  utro.checked = TODO.utro;
  let izuchat = document.createElement("input");
  izuchat.type = "checkbox";
  izuchat.onclick = (e) => {
    EditTodo("izuchat");
  };
  izuchat.checked = TODO.izuchat;
  let sport = document.createElement("input");
  sport.type = "checkbox";
  sport.onclick = (e) => {
    EditTodo("sport");
  };
  sport.checked = TODO.sport;
  let tishine = document.createElement("input");
  tishine.type = "checkbox";
  tishine.onclick = (e) => {
    EditTodo("tishine");
  };
  tishine.checked = TODO.tishine;
  let sna = document.createElement("input");
  sna.type = "checkbox";
  sna.onclick = (e) => {
    EditTodo("sna");
  };
  sna.checked = TODO.sna;
  let progulka = document.createElement("input");
  progulka.type = "checkbox";
  progulka.onclick = (e) => {
    EditTodo("progulka");
  };
  progulka.checked = TODO.progulka;
  let koran = document.createElement("input");
  koran.type = "checkbox";
  koran.onclick = (e) => {
    EditTodo("koran");
  };
  koran.checked = TODO.koran;
  let kniga = document.createElement("input");
  kniga.type = "checkbox";
  kniga.onclick = (e) => {
    EditTodo("kniga");
  };
  kniga.checked = TODO.kniga;
  let misl = document.createElement("input");
  misl.type = "checkbox";
  misl.onclick = (e) => {
    EditTodo("misl");
  };
  misl.checked = TODO.misl;

  Form.append(utro, izuchat, sport, tishine, sna, progulka, koran, kniga, misl);
}
inputGroup();
