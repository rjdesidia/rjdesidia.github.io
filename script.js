let buttonCountW = document.getElementById("buttonCountW");
let buttonCountWm = document.getElementById("buttonCountWm");
let countW = document.getElementById("buttonCountNumberW");
let numberW = 0;



buttonCountW.onclick = function() {
    if (numberW <= 100) {
        numberW++;
        countW.innerHTML = numberW;
    }
};

buttonCountWm.onclick = function() {
   if (numberW >= 1) {
       numberW--;
       countW.innerHTML = numberW;
    }
};

let buttonCountL = document.getElementById("buttonCountL");
let buttonCountLm = document.getElementById("buttonCountLm");
let countL = document.getElementById("buttonCountNumberL");
let numberL = 0;

buttonCountL.onclick = function() {
    if (numberL <= 100) {
        numberL++;
        countL.innerHTML = numberL;
    }
};

buttonCountLm.onclick = function() {
   if (numberL >= 1) {
       numberL--;
       countL.innerHTML = numberL;
    }
};


var counter1 = document.getElementById("counter1");
var counter1Value = counter1.value;
var Ri = 2500;
counter1.addEventListener('change', function() { 	
  var amountOfChange = diff(this.value,counter1Value); 
  RatingCount.innerHTML = amountOfChange;

  if ( amountOfChange < 1499) {
    Ri = "img/overwatch-bronze-rank-badge.png";
  } else if (amountOfChange < 1999) {
    Ri = "img/overwatch-silver-rank-badge.png";
    } else if (amountOfChange < 2499) {
     Ri = "img/overwatch-gold-rank-badge.png";
    } else if (amountOfChange < 2999) {
     Ri = "img/overwatch-platinum-rank-badge.png";
    } else if (amountOfChange < 3499) {
     Ri = "img/overwatch-diamond-rank-badge.png";
    } else if (amountOfChange < 3999) {
     Ri = "img/overwatch-master-rank-badge.png";
    } else if (amountOfChange < 5000) {
     Ri = "img/overwatch-grandmaster-rank-badge.png";
  } else  {
    Ri = "";
  }

  document.getElementById("Ril").src=  Ri;

}, false);

function diff (a) { return a }

let bg = document.getElementById("bg");
let font = document.getElementById("font");
let apply =  document.getElementById("applyColor");
let tr = document.getElementById("trn");

var colorPicker = new iro.ColorPicker('#picker', {
    width: 100,
    margin: 1,
    padding: 0,
    handleRadius: 3,
    layout: [
      { 
        component: iro.ui.Slider,
        options: {
          // can also be 'saturation', 'value', 'red', 'green', 'blue', 'alpha' or 'kelvin'
          sliderType: 'hue'
        }
      },
      { 
        component: iro.ui.Slider,
        options: {
          // can also be 'saturation', 'value', 'red', 'green', 'blue', 'alpha' or 'kelvin'
          sliderType: 'saturation'
        }
      },
      { 
        component: iro.ui.Slider,
        options: {
          // can also be 'saturation', 'value', 'red', 'green', 'blue', 'alpha' or 'kelvin'
          sliderType: 'value'
        }
      },
    ]
  });

  colorPicker.on('color:change', function(color) {
    // if the first color changed
    if (color.index === 0) {
      console.log('color 0 changed!');
      // log the color index and hex value
      console.log(color.index, color.hexString);
      document.getElementById("ov").style.backgroundColor = color.hexString;
    }
  });


var colorPicker = new iro.ColorPicker('#picker2', {
    width: 100,
    margin: 1,
    padding: 0,
    handleRadius: 3,
    layout: [
      { 
        component: iro.ui.Slider,
        options: {
          // can also be 'saturation', 'value', 'red', 'green', 'blue', 'alpha' or 'kelvin'
          sliderType: 'hue'
        }
      },
      { 
        component: iro.ui.Slider,
        options: {
          // can also be 'saturation', 'value', 'red', 'green', 'blue', 'alpha' or 'kelvin'
          sliderType: 'saturation'
        }
      },
      { 
        component: iro.ui.Slider,
        options: {
          // can also be 'saturation', 'value', 'red', 'green', 'blue', 'alpha' or 'kelvin'
          sliderType: 'value'
        }
      },
    ]
  });


  colorPicker.on('color:change', function(color) {
    // if the first color changed
    if (color.index === 0) {
      console.log('color 0 changed!');
      // log the color index and hex value
      console.log(color.index, color.hexString);
      document.getElementById("ov").style.color = color.hexString;
    }
  });

  let tavc = document.getElementById("tanc");
  let dd = document.getElementById("dd");
  let sup = document.getElementById("sup");
  
  tanc.onclick = function() { 
        document.getElementById("tanc").style.backgroundColor = "#888888";
        document.getElementById("dd").style.backgroundColor = "#2f2f2f";
        document.getElementById("sup").style.backgroundColor = "#2f2f2f";
        document.getElementById("rolei").src = "img/icon-tanc.png";
      };
   dd.onclick = function() { 
        document.getElementById("tanc").style.backgroundColor = "#2f2f2f";
        document.getElementById("dd").style.backgroundColor = "#888888";
        document.getElementById("sup").style.backgroundColor = "#2f2f2f";
        document.getElementById("rolei").src = "img/icon-dd.png";
      };
   sup.onclick = function() { 
        document.getElementById("tanc").style.backgroundColor = "#2f2f2f";
        document.getElementById("dd").style.backgroundColor = "#2f2f2f";
        document.getElementById("sup").style.backgroundColor = "#888888";
        document.getElementById("rolei").src = "img/icon-sup.png";
      };

let scin = document.getElementById("scins");
scin.onclick = function() {
  console.log(scin.value);
  document.getElementById("scin").href = "scins/"+scin.value+".css";
}
console.log(scin);

