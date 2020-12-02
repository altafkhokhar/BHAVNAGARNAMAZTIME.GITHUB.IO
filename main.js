
function loadData() {
	document.getElementById('divLoader').style.display = "block";
	document.getElementById('divContent').style.display = "none";
	
	
	
   var strHtml = '', dohar ='gsx$ઝોહર';
  
    $.getJSON('https://spreadsheets.google.com/feeds/list/1uzSDODaAGm56D9Cdw2Skmz8JvEldec1oFjQkLVGZnxw/od6/public/values?alt=json', function (data) {
		var num = $('#divNum').text();      


      var sheetData = data.feed.entry;
	   
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

		var resultPinned = isPinned(number);	
		var pinColor ='';
		if(resultPinned)	
			pinColor ="color:green;";
		
        strHtml = strHtml + '<tr><td class="column1">'+number+'<div></div></td><td class="column2">'+masjidname+'</td><td class="column3">'+fazar+'</td><td class="column4">'+dohar+'</td><td class="column5">'+ashar+'</td><td class="column6">'+isha+'</td><td class="column7">'+jumma+'</td><td class="column8"><span id="spn'+number+'" onclick="pinIt('+number+')"><i id=iPin'+number+' class="fa fa-thumb-tack" style="font-Size:30px;'+pinColor+'" aria-hidden="true"</i></span></td></tr>';

      }
/**/
        document.getElementById('tbData').innerHTML += strHtml;
   
	    //if (typeof(Storage) !== "undefined") {
		//  document.getElementById("result").innerHTML = localStorage.getItem("pinned");
		//} else {
		  // Sorry! No Web Storage support..
		//}
		
      
	   document.getElementById('divLoader').style.display = "none";
	   document.getElementById('divContent').style.display = "block";
	});
}

var pinnedColor = "green";
var unPinnedColor = '';

function pinIt(number)
{
	
	if (typeof(Storage) !== "undefined") {
		  // Code for localStorage/sessionStorage.

		var pinnedItems = localStorage.getItem("pinned");


		localStorage.setItem("pinned", pinnedItems + ","+ number);
		//document.getElementById('result').innerHTML = localStorage.getItem("pinned");

		var currentColor = document.getElementById('iPin'+number).style.color;
		if(currentColor ==pinnedColor)
			document.getElementById('iPin'+number).style.color = unPinnedColor;
		else
			document.getElementById('iPin'+number).style.color = pinnedColor;

	} else {
	  // Sorry! No Web Storage support..
	}
	
}

function isPinned(number)
{
	
	if (typeof(Storage) !== "undefined") {
	
		var pinnedItems = localStorage.getItem("pinned");

		if(pinnedItems != null && pinnedItems != '')
		{
			var index = pinnedItems.indexOf(number);
			if(index >0)
				return true;
			else
				false;
		}
	}
	else	
		return false;
	
}
