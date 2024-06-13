document.addEventListener("DOMContentLoaded", function () {
    var elems = document.querySelectorAll(".sidenav");
    var instances = M.Sidenav.init(elems);
    
    let calculate = document.getElementById("calculate")
    let calculate1 = document.getElementById("calculate1")
    calculate.addEventListener('click', function(){
        calculate1.style.display = "block";
    })
    



  });

  var elems = document.querySelectorAll(".parallax");
  var instances = M.Parallax.init(elems);

  ////***********.main calculator java script */

  function appendNumber(number){
  let first = document.getElementById("inp1");
  first.value += number;
  }

  function appendOprator(a){
    let first = document.getElementById("inp1");
    first.value += a;
    }

function cal(){
    let first = document.getElementById("inp1");
    first.value = eval(first.value);
    }

 function clear1(){
    let first = document.getElementById("inp1");
    first.value = "";
    }

 function day1(){
    let first = document.getElementById("inp1");
    first.value = first.value.slice(0,-1)
    }