var filterLabel = document.getElementById('filters');
var gridElem = document.getElementsByClassName('img__wrap');
var arrGrid = Array.from(gridElem);
console.log()
console.log(filterLabel);

//Фильтр портфолио
filters.addEventListener('click', function (e) {
    var id = e.target.id;
    for (var i = 0; i < arrGrid.length; i++) {
        if (arrGrid[i].classList.contains(id)) {
            //e.target.classList.add("label__bottom"); доработать
            arrGrid[i].style.display = "block";
        } else {
            arrGrid[i].style.display = "none";
        }
    }
})