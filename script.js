var request = new XMLHttpRequest();
request.open('GET','https://restcountries.eu/rest/v2/all',true);
request.send();
request.onload=function(){
    var data=JSON.parse(this.response);
    console.log(data);

    //display all the country flags in console & print all countries name, region, sub region and population
    for(i=0;i<250;i++) {
        console.log(data[i].name+"("+data[i].flag+") ("+data[i].region+") ("+data[i].subregion+") "+data[i].population);
    }

    
    
}  