document.querySelector('#guardar').addEventListener('click',guardarDirec);



function guardarDirec(){
  var names = document.querySelector('#input1').value,
    ctal = document.querySelector('#input2').value,
    edo = document.querySelector('#input3').value,
    colo = document.querySelector('#input4').value,
    cale= document.querySelector('#input5').value,
    nui = document.querySelector('#input6').value,
    nue = document.querySelector('#input7').value,
    uhh = document.querySelector('#input8').value,
    telf = document.querySelector('#input9').value


    addDireccion(names,ctal,edo,colo,cale,nui,nue,uhh,telf);
   

}
function drawDirection(){
 
    var list = getDirect();
    tbody = document.querySelector('#NuevaDireccion tbody');
       
    tbody.innerHTML='';


 for (var i=0 ; i < list.length; i++){
   var row = tbody.insertRow(i);
   var nombreCell = row.insertCell(0);
       cCell = row.insertCell(1);
       estadoCell = row.insertCell(2);
       coloniaCell = row.insertCell(3);
       calleCell = row.insertCell(4);
       nuiiCell = row.insertCell(5);
       nueeCell = row.insertCell(6);
       refCell = row.insertCell(7);
       telefonoCell = row.insertCell(8); 



     nombreCell.innerHTML = list[i].nombre;
     cpCell.innerHTML = list[i].cp;
     estadoCell.innerHTML = list[i].estado;
     coloniaCell.innerHTML = list[i].colonia;
     calleCell.innerHTML = list[i].calle;
     nuiCell.innerHTML = list[i].nui;
     nueCell.innerHTML = list[i].nue;
     refCell.innerHTML = list[i].ref;
     telefono.innerHTML = list[i].telefono;
 

 
   tbody.appendChild(row);
   renderElement()

 }
}

