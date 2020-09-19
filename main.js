
function loadData() {
   var strHtml = '', dohar ='gsx$ઝોહર';
  
    $.getJSON('https://spreadsheets.google.com/feeds/list/1uzSDODaAGm56D9Cdw2Skmz8JvEldec1oFjQkLVGZnxw/od6/public/values?alt=json', function (data) {
	var num = $('#divNum').text();      


      var sheetData = data.feed.entry;
	    console.log(sheetData);
        var i, strHtml = '';

      for (i = 0; i < sheetData.length-4; i++) {
       
        var ashar = sheetData[i]['gsx$અસર']['$t'];
		var doharName = $('#divdohar').text();
          var dohar = sheetData[i][doharName]['$t'];
        var fazar = sheetData[i]['gsx$ફજર']['$t'];

		var isshaName = $('#divisha').text();        
        var isha = sheetData[i][isshaName]['$t'];

		var jummaName = $('#divjumma').text();        
        var jumma = sheetData[i][jummaName]['$t'];

  
        var number = sheetData[i][num]['$t'];

		var divMasjidName = $('#divMasjidName').text();                


        var masjidname = sheetData[i][divMasjidName]['$t'];      
		
        strHtml = strHtml + '<tr><td class="column1">'+number+'<div></div></td><td class="column2">'+masjidname+'</td><td class="column3">'+fazar+'</td><td class="column4">'+dohar+'</td><td class="column5">'+ashar+'</td><td class="column6">'+isha+'</td><td class="column7">'+jumma+'</td><td class="column8"><i= class="fa fa-thumb-tack" style="font-Size:30px" aria-hidden="true"</i></td></tr>';

      }    
      

/**/
   
     
        document.getElementById('tbData').innerHTML += strHtml;
      


 var chand = sheetData[sheetData.length-2][num]['$t']; 
var mobileNumber  = sheetData[sheetData.length-1][num]['$t']; 



      var strOtherDetail ='<table border=0  class="table-fill"><thead><th style="text-align:center;">'+chand +'</th></thead></table>';
      var strMobile ='<table border=0  class="table-fill"><thead><th style="text-align:center;"><b>'+mobileNumber  +'</b></th></thead></table>';

const months = ["JAN", "FEB", "MAR","APR", "MAY", "JUN", "JUL", "AUG", "SEP", "OCT", "NOV", "DEC"];
let current_datetime = new Date()
let formatted_date = current_datetime.getDate() + "-" + months[current_datetime.getMonth()] + "-" + current_datetime.getFullYear()

      var strCurrentDates ='<table border=0  class="table-fill"><thead><th style="text-align:center;"><b>'+formatted_date +'</b></th></thead></table>';

     // document.getElementById('demo').innerHTML +=  strOtherDetail ;
     // document.getElementById('demo').innerHTML +=  strMobile;
     // document.getElementById('demo').innerHTML +=  strCurrentDates ;


$('html, body').animate({
    scrollTop:$("#demo").offset().top},1000);

 
      
   });
   
   
      
}