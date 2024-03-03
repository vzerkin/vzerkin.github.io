/*	Program:	json2tree2.js
	Author:		Viktor Zerkin, V.Zerkin@gmail.com
	Last modified:	2024-02-05
	Distribution:	2024-02-09
	Property of:	Viktor Zerkin
	Project:	Multi-Platform Nuclear Reaction Databases           
	Usage:		with proper acknolegement to the author
	Distribution:	restricted while the project has not been finished  
	Modifications:	can be done with permission of the author           
	Note:		this is non-commercial software and it comes with   
			NO WARRANTY                                         
*/
var hrefimg="../x4js/x4ppimg/";function begFolder(i,e,h,b){var g="";var d="";var c;var f="ExpandOpen";if(!e){f="ExpandClosed"}var a="###";var j="";if(h){j="IsLast"}if(b){if(b!=""){d=' id="'+b+'"'}}g+='      <li class="Node '+f+" "+j+'"'+d+">";g+='        <div class="Expand"></div>';g+='        <div class="Content"> ';g+=str4cmd0(2);g+=""+i;g+='<div class="cmd1" style="display:none;">Operations</div>';g+="        </div>";g+='        <ul class="Container">';return g}function endFolder(){var a="";a+="        </ul>";a+="      </li>";return a}function begItem(c,b){var a="";var d="";if(c){d="IsLast"}a+='      <li class="Node ExpandLeaf '+d+'">';a+='            <div class="Expand"></div>';a+='        <div class="Content"> ';a+=str4cmd0(1,b);return a}function endItemKey(){var a="";a+='<div class="cmd1" style="display:none;">Operations</div>';return a}function endItem(){var a="";a+="        </div>";a+="          </li>";return a}function begX4TREE(b){var a="";a+='<div onclick="tree_toggle(arguments[0])" class=x4tree>';a+='<ul class="Container">';a+='  <li class="Node IsRoot IsLast ExpandOpen" style="background-image:none;">';a+='    <div class="Expand ExpandRoot"></div>';a+='    <div class="Content">';a+=str4cmd0(0);a+=b;a+='<div class="cmd1" style="display:none;">Operations</div>';a+="</div>";a+='    <ul class="Container">';return a}function endX4TREE(){var a="";a+="    </ul>";a+="  </li>";a+="</ul>";a+="</div>";return a}var showPullButton=true;function str4cmd0(a,c){var b="";if(showPullButton){if(a!=1){b+='<span class="PullNext"><img src="'+hrefimg+'/minus4.gif"></span>'}else{b+='<span class="PullNext"></span>'}}else{b+='<span class="PullNext"></span>'}if(typeof c=="undefined"){b+='<span class="x4cmd0"></span>'}else{b+='<span class="x4xx"></span>'}iicmd0=1;iicmd1=6;iikey1=2;iinfo1=4;ijson1=5;return b};