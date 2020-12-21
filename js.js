
document.getElementById("line-chart").style.display=""

function chartCasos(){
    var ctx = document.getElementsByClassName("line-chart");
// type, data option
var cor = "#e51c23";
var chartGraph = new Chart(ctx,{
    
    type: 'line',
    data:{
        labels: ["04/12","05/12","06/12","07/12","08/12","09/12","10/12","11/12","12/12","13/12","14/12","15/12","16/12","17/12","18/12"],
        datasets:[{
            label:"COVID-19 MARABA-PA - NUMERO DE CASOS",
            data: [174,19,36,17,44,54,73,83,40,38,85,84,88,97,75],
            borderWidth:6,
            
        }
    
    ]
    },
    borderColor: [
        'rgba(255, 99, 132, 1)',
    ],
    options: {  
        responsive: true,
        maintainAspectRatio: false
    },

    
})
}

function chartRecuperados(){
    var ctx = document.getElementsByClassName("line-chart");
// type, data option
var chartGraph = new Chart(ctx,{
    type: 'line',
    data:{
        labels: ["04/12","05/12","06/12","07/12","08/12","09/12","10/12","11/12","12/12","13/12","14/12","15/12","16/12","17/12","18/12"],
        datasets:[{
            label:"COVID-19 MARABA-PA - RECUPERADOS ",
            data: [137,28,21,0,63,40,34,12,127,29,123,90,41,145,91],
            borderWidth:6,
            
        }]
    }
})
}

function chartObitos(){
    var ctx = document.getElementsByClassName("line-chart");
// type, data option
var chartGraph = new Chart(ctx,{
    type: 'line',
    data:{
        labels: ["04/12","05/12","06/12","07/12","08/12","09/12","10/12","11/12","12/12","13/12","14/12","15/12","16/12","17/12","18/12"],
        datasets:[{
            label:"COVID-19 MARABA-PA - OBITOS ",
            data: [3,3,0,0,1,1,0,0,1,0,1,1,2,1,0],
            borderWidth:6,
            
        }]
    }
})
}

function chartInternados(){
    var ctx = document.getElementsByClassName("line-chart");
// type, data option
var chartGraph = new Chart(ctx,{
    type: 'line',
    data:{
        labels: ["04/12","05/12","06/12","07/12","08/12","09/12","10/12","11/12","12/12","13/12","14/12","15/12","16/12","17/12","18/12"],
        datasets:[{
            label:"COVID-19 MARABA-PA - INTERNADOS ",
            data: [0,19,21,23,20,30,31,37,37,46,33,33,35,32,27],
            borderWidth:6,
            
        }]
    }
})
}

function chartIsolados(){
    var ctx = document.getElementsByClassName("line-chart");
// type, data option
var chartGraph = new Chart(ctx,{
    type: 'line',
    data:{
        labels: ["04/12","05/12","06/12","07/12","08/12","09/12","10/12","11/12","12/12","13/12","14/12","15/12","16/12","17/12","18/12"],
        datasets:[{
            label:"COVID-19 MARABA-PA - ISOLADOS ",
            data: [87,81,94,76,92,95,133,98,110,125,84,77,120,74,63],
            borderWidth:6,
            
        }]
    }
})
}