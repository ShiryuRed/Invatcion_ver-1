
const wrapper2 = document.getElementById("tiles");

let columns = Math.floor(document.body.clientWidth / 50),
    rows = Math.floor(document.body.clientHeight / 390);

let toggled = false;

let switchW = true;

if (switchW == true) {
  noScroll();
}

const handleOnClick2 = index => {
    toggled = !toggled;

    anime({
      targets: '.tile2',
      opacity: toggled ? 0 : 1,
      delay: anime.stagger (40, {
        grid: [columns, rows],
        from: index
      }) 
    });
    setTimeout(function(){
    wrapper2.style.display = ("none");
    wrapper2.innerHTML = ' ';
    switchW = false;
    noScroll();
  }, 800);
}

const createTile2 = index => {
  const tile2 = document.createElement("div");

  tile2.classList.add("tile2");

  tile2.onclick = e => handleOnClick2(index);


  return tile2;
};

const createTiles2 = quantity => {
  Array.from(Array(quantity)).map((tile, index) => {
    wrapper2.appendChild(createTile2(index));
  })
};

const createGrid2 = () => {
  wrapper2.innerHTML = "";
  if (switchW == true) { 
    columns = Math.floor(document.body.clientWidth / 50);
    rows = Math.floor(document.body.clientHeight / 390);

    wrapper2.style.setProperty("--columns", columns);
    wrapper2.style.setProperty("--rows", rows);

    createTiles2(columns * rows);
  }
};



if (switchW == true) {
    window.onresize = () => resize();
    const resize = () =>{
    createGrid2();
  }
}

if (screen.width < 1450) {
    createTiles2(columns * rows);
    createGrid2();
} else {

    wrapper2.style.display = ("none");
    wrapper2.innerHTML = ' ';
    switchW = false;
    noScroll();
}

  
