function obtenerFecha(){
    let fecha = new Date(),
        horas = fecha.getHours(),
        minutos = fecha.getMinutes(),
        segundos = fecha.getSeconds();

        // console.log(horas +':'+minutos+':'+segundos)


        // traer los elementos p correspondientes
        let pHoras = document.getElementById("hora"),
            pMinutos = document.getElementById("minutos"),
            pSegundos = document.getElementById("segundos"),
            pDiaSemana = document.getElementById("diaSemana"),
            pNumDia = document.getElementById("numDia"),
            pMes = document.getElementById("mes"),
            pAnio = document.getElementById("anio");

            // asignar los valores de la fecha

            let semana = ['Domingo','Lunes','Martes','Miercoles','Jueves','Viernes','Sabado'];
            pDiaSemana.innerHTML = semana[fecha.getDay()];
            pNumDia.innerHTML = fecha.getDate();

            let meses = ['Enero','Febrero','Marzo','Abril','Mayo','Junio','Julio','Agosto','Septiembre','Octubre','Noviembre','Dicimbre'];

            pMes.innerHTML = meses[fecha.getMonth()];
            pAnio.innerHTML = fecha.getFullYear();

            // asignar los valores de la hora
            if(segundos <10){
                segundos = '0'+ segundos
            }

            if(minutos <10){
                minutos = '0'+ minutos
            }
            if(horas <10){
                horas = '0'+horas
            }

            pHoras.innerHTML = horas;
            pMinutos.innerHTML = minutos;
            pSegundos.innerHTML = segundos;

}

window.setInterval(obtenerFecha,1000);

