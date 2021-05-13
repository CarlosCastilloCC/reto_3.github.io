const rango = document.querySelector(".rango");
const cienk = document.querySelector("#cienk");
const precio = document.querySelector("#precio");
let switche = document.querySelector("#switch");


    function printPageViews(){
        if(rango.value == "0"){
            cienk.textContent = "10k";
            precio.textContent = "8";
        }else if(rango.value == "25"){
            cienk.textContent = "50k";
            precio.textContent = "12";
        }else if(rango.value == "50"){
            cienk.textContent = "100k";
            precio.textContent = "16";
        }else if(rango.value == "75"){
            cienk.textContent = "500k";
            precio.textContent = "24";
        }else if(rango.value == "100"){
            cienk.textContent = "1M";
            precio.textContent = "36";
        }
    }

    rango.addEventListener("input",function (){
        let x = rango.value;
        let color = `linear-gradient(90deg, rgb(165, 243, 235) ${x}% ,hsl(0, 3%, 85%) ${x}% )`;
        rango.style.background = color;

        printPageViews()
    });

    switche.addEventListener("input",function(){

        if(switche.checked == true){
            let x = precio.textContent*0.25;
            precio.textContent = precio.textContent - x;
        }else{
            printPageViews() 
        }
    })

    