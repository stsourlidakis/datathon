var current = 1;
var max = 4 ;
$(document).ready(function (){
	Morris.Area({
	  element: 'line-example',
	  data: [
	{day: "1", Clicks:220578,},
	{day:"2", Clicks:296642},
	{day:"3", Clicks:302777},
	{day:"4", Clicks:298011},
	{day:"5", Clicks:297617},
	{day:"6", Clicks:278556},
	{day:"7", Clicks:239067},
	{day:"8", Clicks:237675},
	{day:"9", Clicks:311935},
	{day:"10", Clicks:299735},
	{day:"11", Clicks:296187},
	{day:"12", Clicks:284947},
	{day:"13", Clicks:269150},
	{day:"14", Clicks:239025},
	{day:"15", Clicks:252768},
	{day:"16", Clicks:324483},
	{day:"17", Clicks:296931},
	{day:"18", Clicks:293830},
	{day:"19", Clicks:291343},
	{day:"20", Clicks:282766},
	{day:"21", Clicks:253028},
	{day:"22", Clicks:266352},
	{day:"23", Clicks:333088},
	{day:"24", Clicks:328795},
	{day:"25", Clicks:310974},
	{day:"26", Clicks:314372},
	{day:"27", Clicks:289352},
	{day:"28", Clicks:244532},
	{day:"29", Clicks:252334},
	{day:"30", Clicks:323225}],
	xkey: 'day',
	// A list of names of data record attributes that contain y-values.
	ykeys: ['Clicks'],
	// Labels for the ykeys -- will be displayed when you hover over the
	// chart.
	labels: ['Clicks'],
	ymin: "210000",barGap:3,
  barSizeRatio:2,
	});
	
	Morris.Donut({
	  element: 'donut-example',
	  data: [
		{label: "Registered", value: 288354},
		{label: "Unregistered", value: 8241721}
	  ]
	});
	Morris.Bar({
	  element: 'bar-example',
	  data: [
			{product_category:40, freq:153394}
			,{product_category:379, freq:39744}
			,{product_category:12, freq:35685}
			,{product_category:25, freq:32776}
			,{product_category:1105, freq:28797}
			],
	  xkey: 'product_category',
	  ykeys: ['freq'],
	  labels: ['Number of occurencies']
	});
	
	$('#2').hide();	
	$('#3').hide();	
	$('#4').hide();	
	$(document).keyup(function(e) 
	{
        if (e.keyCode == 39) 
        {
			if(current==max)return;console.log(current);
			$("#"+current).hide();
			$("#"+(current+1)).show();
			current++;
        }
        if(e.keyCode == 37)
        {
			if(current==1)return;console.log(current);
			$("#"+current).hide();
			$("#"+(current-1)).show();
			current--;
        }

	});
	for (var i; i<document.getElementsByTagName("tspan").length;i++){
		if(document.getElementsByTagName("tspan")[i].innerHTML.indexOf("1903")> -1)document.getElementsByTagName("tspan")[i].innerHTML = '';
		if(document.getElementsByTagName("tspan")[i].innerHTML.indexOf("1906")> -1)document.getElementsByTagName("tspan")[i].innerHTML = '';
		if(document.getElementsByTagName("tspan")[i].innerHTML.indexOf("1909")> -1)document.getElementsByTagName("tspan")[i].innerHTML = '';
	}
});