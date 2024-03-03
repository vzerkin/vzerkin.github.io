/*	Program:	json2tree1subr.js
	Author:		Viktor Zerkin, V.Zerkin@gmail.com
	Last modified:	2024-02-07
	Distribution:	2024-02-09
	Property of:	Viktor Zerkin
	Project:	Multi-Platform Nuclear Reaction Databases           
	Usage:		with proper acknolegement to the author
	Distribution:	restricted while the project has not been finished  
	Modifications:	can be done with permission of the author           
	Note:		this is non-commercial software and it comes with   
			NO WARRANTY                                         
*/
function getArr0(a){return"";var b,d="",c;d+=" //";for(b=0;b<a.length;b++){c=a[b];if(b%2!=0){d+=" "+((b-1)/2)+":"+c}}return d}function strilevel(b){var a,c="";c+=b+":";for(a=0;a<b;a++){c+="-"}return c}function get1typ(b){var a;a=typeof b;if(Object.prototype.toString.call(b)==="[object Array]"){a="array"}if(b===null){a="null"}return a}function get1typArray1(d){var b,a,c,a;if(get1typ(d)!="array"){return"object"}b="array1";for(a=0;a<d.length;a++){c=d[a];if(c==null){continue}if(typeof c=="object"){return"object"}if(typeof c=="string"){return"string"}}return b}function get1typArray1s(d){var b,a,c,a;if(get1typ(d)!="array"){return"object"}b="array1";for(a=0;a<d.length;a++){c=d[a];if(c==null){continue}if(typeof c=="object"){return"object"}if(typeof c=="string"){return"string"}}return b}function get1typArray(d){var b,a,c,a;if(get1typArray1(d)=="array1"){return"array1"}b="array2";for(a=0;a<d.length;a++){c=d[a];if(get1typArray1s(c)!="array1"){return"object"}}return b};