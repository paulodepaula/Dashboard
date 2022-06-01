const url = "http://colormind.io/api/";
var temp_array = [];
  function colormind(A,B,C,D,E){
    var data = {
             model : "default",
             input : [A,B,C,D,E]
            }

            // console.log(A,B,C,D,E);
    var http = new XMLHttpRequest();
            
     http.open("POST", url, true);
     http.send(JSON.stringify(data)); 
            
     http.onreadystatechange = function() {
    if(http.readyState == 4 && http.status == 200) {
      let palette = JSON.parse(http.responseText).result;
      // console.log(palette);
      temp_array = palette; 
      }
    }
    return temp_array;
} 

function ColorToHex(color) {
  var hexadecimal = color.toString(16);
  return hexadecimal.length == 1 ? "0" + hexadecimal : hexadecimal;
}

function ConvertRGBtoHex(red, green, blue) {
  return "#" + ColorToHex(red) + ColorToHex(green) + ColorToHex(blue);
}
// console.log(ConvertRGBtoHex(255, 100, 200));
// console.log(rgbToHex(255, 5, 255)); // #FF05FF

// colormind([2,2,2,],[2,2,2],[2,2,2],"N","E")


function mudacor() {
    // console.log(colormind("N","N","N","N","N"));
    // let arr0 = JSON.parse(http.responseText).result;
    let arr0 = colormind("N","N","N","N","N");
    
    let arr1 = arr0[0];
    let arr2 = arr0[1];
    let arr3 = arr0[2];
    let arr4 = arr0[3];
    let arr5 = arr0[4];
    //  console.log(rgb1);
    //  console.log(rgb2);
    // console.log(arr0);
    console.log(arr1+'rgb');
    // console.log(arr2);
 
    let rgb1 = "rgb("+arr1[0]+","+arr1[1]+","+arr1[2]+")";

    console.log(rgb1+'rgb');  
    let rgb2 = "rgb("+arr2[0]+","+arr2[1]+","+arr2[2]+")";
    let rgb3 = "rgb("+arr3[0]+","+arr3[1]+","+arr3[2]+")";
    let rgb4 = "rgb("+arr4[0]+","+arr4[1]+","+arr4[2]+")";
    let rgb5 = "rgb("+arr5[0]+","+arr5[1]+","+arr5[2]+")";
    let rgb6 = "rgb("+arr1[0]+","+arr1[1]+","+arr1[2]+")";


    let cor1 = ConvertRGBtoHex(arr1[0],arr1[1],arr1[2]);
    let cor2 = ConvertRGBtoHex(arr2[0],arr2[1],arr2[2]);
    let cor3 = ConvertRGBtoHex(arr3[0],arr3[1],arr3[2]);
    let cor4 = ConvertRGBtoHex(arr4[0],arr4[1],arr4[2]);
    let cor5 = ConvertRGBtoHex(arr5[0],arr5[1],arr5[2]);

    document.getElementById("cor1").innerHTML = cor1;
    document.getElementById('cor1').style.cssText = 'background-color: '+cor1;    
    
    document.getElementById("cor2").innerHTML = cor2;
    document.getElementById('cor2').style.cssText = 'background-color: '+cor2;

    document.getElementById("cor3").innerHTML = cor3;
    document.getElementById('cor3').style.cssText = 'background-color: '+cor3;

    document.getElementById("cor4").innerHTML = cor4;
    document.getElementById('cor4').style.cssText = 'background-color: '+cor4;
    
    document.getElementById("cor5").innerHTML = cor5;
    document.getElementById('cor5').style.cssText = 'background-color: '+cor5;

;


// console.log(document.getElementById("cor1").innerHTML);
// console.log(document.getElementById("cor2").innerHTML);
// console.log(document.getElementById("cor3").innerHTML);
// console.log(document.getElementById("cor4").innerHTML);


    let el = document.getElementById('recebimentos');
    el.style.cssText = 'background-image: linear-gradient(195deg, ' + rgb1 + ' 0%,'+ rgb2+' 100%);';
  
    el = document.getElementById('person');
    el.style.cssText = 'background-image: linear-gradient(195deg, ' + rgb3 + ' 0%,'+ rgb4+' 100%);';

    el = document.getElementById('new_client');
    el.style.cssText = 'background-image: linear-gradient(195deg, ' + rgb5 + ' 0%,'+ rgb1+' 100%);';
   
    el = document.getElementById('venda');
    el.style.cssText = 'background-image: linear-gradient(195deg, ' + rgb2 + ' 0%,'+ rgb3+' 100%);';
    
    el = document.getElementById('ultima_campanha');
    el.style.cssText = 'background-image: linear-gradient(195deg, ' + rgb3 + ' 0%,'+ rgb4+' 100%);';
   
    el = document.getElementById('venda_diaria');
    el.style.cssText = 'background-image: linear-gradient(195deg, ' + rgb5 + ' 0%,'+ rgb6+' 100%);';

    el = document.getElementById('tarefa_concluida');
    el.style.cssText = 'background-image: linear-gradient(195deg, ' + rgb1 + ' 0%,'+ rgb3+' 100%);';
      
    // console.log(temp_array);
    colormind(arr0);





    
}

