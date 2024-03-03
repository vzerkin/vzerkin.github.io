x5x=
{"format":"x5json.0.1.4" 
 ,"now":"2024-01-25T10:15:10.919Z" 
 ,"program":"exfor2x5z, by V.Zerkin, IAEA-NDS, 2019-2023, ver.2023-08-28"
 ,"input": {"files":[ {"exfor-file":"X4R56734_x4.txt", "format":"EXFOR", "created":"2024-01-25T10:15:08.000Z" }
		     ,{"exfor-dictionaries":"x4dict/", "format":"DICT_ARC_NEW", "modified":"2023-06-28T00:00:00.000Z" } ] }
 ,"output":{"files":[ {"x4c5.json":"X4R56734_x4.txt.x5z", "created":"2024-01-25T10:15:10.919Z" } ] }
 ,"x4dbVersion":"2023-12-19"
 ,"x4entries": [
  {"ENTRY":"10828", "updated":20171126, "x4dbVersion":"2023-12-19", "TransID":"1437", "TransDate":20180207
   ,"y1":1978,"a1":"T.C.Chapman+","r1":"J,PR/C,17,1089,1978"
   ,"ref":"Jour: Physical Review, Part C, Nuclear Physics, Vol.17, p.1089 (1978)"
   ,"title":"Fission product yields from 6-9 MeV neutron-induced fission of 235U and 238U"
   ,"x4subents":[
   {"SUBENT":"10828001", "isub":1, "compiled":20171126, "TransID":"1437", "TransDate":20180207, "x4dbVersion":"2023-12-19"
    ,"BIB":{
      "INSTITUTE":[
	{"x4pointer":" "
	,"x4codes":[{"code":"1USALRL", "dict":"INSTITUTE", "idict":3,"hlp":"Lawrence Livermore National Laboratory, Livermore, CA, United States of America"}]
	,"x4freetext":[" Mc Clellan Central Lab, USAF"]
	}
      ]
     ,"REFERENCE":[
	{"x4pointer":" "
	,"x4codes":[{"code":"J,PR/C,17,1089,1978","stdFileName":"J,PR_C,17,1089,1978"
		,"year":1978,"typ":"J","ref":"J,PR/C","vol":"17","p":"1089"
		,"shortRef":"Jour: Physical Review, Part C, Nuclear Physics, Vol.17, p.1089 (1978)"
,"URL":"http://journals.aps.org/prc/abstract/10.1103/PhysRevC.17.1089"}]
	}
      ]
     ,"AUTHOR":[
	{"x4pointer":" "
	,"x4codes":[{"i":1,"ini":"T.C.","nam":"Chapman"}
	    ,{"i":2,"ini":"G.A.","nam":"Anzelon"}
	    ,{"i":3,"ini":"G.C.","nam":"Spitale"}
	    ,{"i":4,"ini":"D.R.","nam":"Nethaway"}]
	}
      ]
     ,"TITLE":[
	{"x4pointer":" "
	,"x4code":null
	,"x4freetext":["Fission product yields from 6-9 MeV neutron-induced"
		," fission of 235U and 238U"]
	}
      ]
     ,"FACILITY":[
	{"x4pointer":" "
	,"x4codes":[{"code":"ACCEL", "dict":"FACILITY", "idict":18,"hlp":"Accelerator"}
	    ,{"code":"1USALRL", "dict":"INSTITUTE", "idict":3,"hlp":"Lawrence Livermore National Laboratory, Livermore, CA, United States of America"}]
	,"x4freetext":[" Insulated core transformer accelerator"]
	}
	,{"x4pointer":" "
	,"x4codes":[{"code":"CYGFF", "dict":"FACILITY", "idict":18,"hlp":"Cyclograaff"}
	    ,{"code":"1USALRL", "dict":"INSTITUTE", "idict":3,"hlp":"Lawrence Livermore National Laboratory, Livermore, CA, United States of America"}]
	,"x4freetext":[" Cyclograaff accelerator"]
	}
      ]
     ,"INC-SOURCE":[
	{"x4pointer":" "
	,"x4codes":[{"code":"D-D", "dict":"INC-SOURCE", "idict":19,"hlp":"2H(d,n)"}]
	,"x4freetext":[" Deuterons on deuterium for neutron energies of"
		," 6,7,8, and 9-MeV."]
	}
      ]
     ,"SAMPLE":[
	{"x4pointer":" "
	,"x4code":null
	,"x4freetext":["Disk foils, 9.52-mm diameter, 1.27-mm thick, mass of"
		," 1.7-gms"]
	}
      ]
     ,"DETECTOR":[
	{"x4pointer":" "
	,"x4codes":[{"code":"GELI", "dict":"DETECTOR", "idict":22,"hlp":"Germanium-Lithium detector"}]
	,"x4freetext":[" GeLi detectors used for measuring gammas"]
	}
	,{"x4pointer":" "
	,"x4codes":[{"code":"PROPC", "dict":"DETECTOR", "idict":22,"hlp":"Proportional counter"}]
	,"x4freetext":[" Gas flow proportional counters used for beta"
		," detection"]
	}
      ]
     ,"MONITOR":[
	{"x4pointer":" "
	,"x4code":{"code":""}
	,"x4freetext":["Both detector efficiencies determined using 14.8-MeV"
		," neutron induced fission of U-235 and U-238."
		,"Number of fissions based on weighted average of"
		," results calculated from Zr-97, Mo-99 and Ba-140."
		,"Linear interpolations between published yields for"
		," fission spectrum and 14 MeV neutrons."]
	}
      ]
     ,"METHOD":[
	{"x4pointer":" "
	,"x4codes":[{"code":"CHSEP", "dict":"METHOD", "idict":21,"hlp":"Chemical separation of products"}]
	,"x4freetext":[" Sample foils wrapped in al to catch recoil"
		," fission products. Cadmium used to minimize thermal"
		," neutron effects."
		,"Gold monitor foils used to verify negligible thermal"
		," neutron effects."
		,"For half-lives greater than 9-hrs, irradiation time was"
		," 10-hrs. For  shorter half-lives, irradiation time was"
		," 50-min."
		,"Chemical analysis used on 10-hr irradiated foils."]
	}
	,{"x4pointer":" "
	,"x4codes":[{"code":"GSPEC", "dict":"METHOD", "idict":21,"hlp":"Gamma ray spectrometry"}]
	,"x4freetext":[" Gamma spectroscopy analysis used on others."]
	}
      ]
     ,"CORRECTION":[
	{"x4pointer":" "
	,"x4code":null
	,"x4freetext":["Number of fissions corrected for non-primary-energy"
		," induced fission. Corrected for fission product decay"
		," during irradiation."]
	}
      ]
     ,"ERR-ANALYS":[
	{"x4pointer":" "
	,"x4code":{}
	,"x4freetext":["Less than 5% uncertainty for weighted average of"
		," number of fissions."
		,"Number of atoms of each isotope taken to be the larger"
		," of 2% or the statistical estimate from the computer"
		," programs used in the calculation."]
	}
	,{"x4pointer":" "
	,"x4code":{"header":"DATA-ERR1"
	     ,"headerHelp":"1st data uncertainty, defined under ERR-ANALYS"}
	,"x4freetext":[" Total error with respect to `true` value"
		,"Errors caused by uncertainties in-"
		," -Nuclide measurement efficiency"
		," -Radiochemical procedure"
		," -Number of fissions by primary energy neutrons"
		," -Uncertainty in fission yields and cross sections used"
		,"  in calculations"
		," -Neutron spectra"
		," -Measurement efficiency"]
	}
	,{"x4pointer":" "
	,"x4code":{"header":"DATA-ERR2"
	     ,"headerHelp":"2nd data uncertainty, defined under ERR-ANALYS"}
	,"x4freetext":[" Error relative to same nuclei at other"
		," energies"]
	}
      ]
     ,"DECAY-DATA":[
	{"x4pointer":" "
	,"x4codes":[{"Flag":"1", "Nucl":"35-BR-84-G", "t12":31.8, "t12units":"MIN", "t12sec":1908.0
	, "Radiations":[ {"Type":"DG", "Energy":[881.5], "Intensity":0.42}]}]
	}
	,{"x4pointer":" "
	,"x4codes":[{"Flag":"2", "Nucl":"36-KR-87", "t12":1.267, "t12units":"HR", "t12sec":4561.2
	, "Radiations":[ {"Type":"DG", "Energy":[402.47], "Intensity":0.473}
			,{"Type":"DG", "Energy":[2554.92], "Intensity":0.0847}]}]
	}
	,{"x4pointer":" "
	,"x4codes":[{"Flag":"3", "Nucl":"38-SR-89", "t12":50.55, "t12units":"D", "t12sec":4367520.0
	, "Radiations":[ {"Type":"B"}]}]
	}
	,{"x4pointer":" "
	,"x4codes":[{"Flag":"4", "Nucl":"38-SR-91", "t12":9.48, "t12units":"HR", "t12sec":34128.0
	, "Radiations":[ {"Type":"DG", "Energy":[555.63], "Intensity":0.58}
			,{"Type":"DG", "Energy":[749.77], "Intensity":0.24}
			,{"Type":"DG", "Energy":[1024.25], "Intensity":0.33}]}]
	}
	,{"x4pointer":" "
	,"x4codes":[{"Flag":"5", "Nucl":"40-ZR-95", "t12":65.0, "t12units":"D", "t12sec":5616000.0
	, "Radiations":[ {"Type":"B"}
			,{"Type":"DG", "Energy":[756.72], "Intensity":0.546}
			,{"Type":"DG", "Energy":[765.8], "Intensity":0.99}]}]
	}
	,{"x4pointer":" "
	,"x4codes":[{"Flag":"6", "Nucl":"40-ZR-97", "t12":16.82, "t12units":"HR", "t12sec":60552.0
	, "Radiations":[ {"Type":"B"}
			,{"Type":"DG", "Energy":[658.18], "Intensity":0.99}
			,{"Type":"DG", "Energy":[743.37], "Intensity":0.94}]}]
	}
	,{"x4pointer":" "
	,"x4codes":[{"Flag":"7", "Nucl":"42-MO-99", "t12":2.752, "t12units":"D", "t12sec":237772.8
	, "Radiations":[ {"Type":"B"}
			,{"Type":"DG", "Energy":[140.514], "Intensity":0.805}
			,{"Type":"DG", "Energy":[181.092], "Intensity":0.0604}
			,{"Type":"DG", "Energy":[739.481], "Intensity":0.12}
			,{"Type":"DG", "Energy":[777.9], "Intensity":0.0424}]}]
	}
	,{"x4pointer":" "
	,"x4codes":[{"Flag":"8", "Nucl":"44-RU-103", "t12":39.6, "t12units":"D", "t12sec":3421440.0
	, "Radiations":[ {"Type":"DG", "Energy":[497.09], "Intensity":0.9}]}]
	}
	,{"x4pointer":" "
	,"x4codes":[{"Flag":"9", "Nucl":"43-TC-104", "t12":18.2, "t12units":"MIN", "t12sec":1092.0
	, "Radiations":[ {"Type":"DG", "Energy":[358.0], "Intensity":0.9}
			,{"Type":"DG", "Energy":[530.5], "Intensity":0.15}
			,{"Type":"DG", "Energy":[535.1], "Intensity":0.14}]}]
	}
	,{"x4pointer":" "
	,"x4codes":[{"Flag":"10", "Nucl":"45-RH-105-G", "t12":1.476, "t12units":"D", "t12sec":127526.4
	, "Radiations":[ {"Type":"DG", "Energy":[319.24], "Intensity":0.196}]}]
	}
	,{"x4pointer":" "
	,"x4codes":[{"Flag":"11", "Nucl":"47-AG-111-G", "t12":7.431, "t12units":"D", "t12sec":642038.4
	, "Radiations":[ {"Type":"B"}
			,{"Type":"DG", "Energy":[342.14], "Intensity":0.0668}]}]
	}
	,{"x4pointer":" "
	,"x4codes":[{"Flag":"12", "Nucl":"46-PD-112", "t12":21.12, "t12units":"HR", "t12sec":76032.0
	, "Radiations":[ {"Type":"DG", "Energy":[617.4], "Intensity":0.435}]}]
	}
	,{"x4pointer":" "
	,"x4codes":[{"Flag":"13", "Nucl":"48-CD-115-G", "t12":2.208, "t12units":"D", "t12sec":190771.2
	, "Radiations":[ {"Type":"B"}
			,{"Type":"DG", "Energy":[336.25], "Intensity":0.465}
			,{"Type":"DG", "Energy":[492.29], "Intensity":0.0826}
			,{"Type":"DG", "Energy":[527.86], "Intensity":0.28}]}]
	}
	,{"x4pointer":" "
	,"x4codes":[{"Flag":"14", "Nucl":"48-CD-115-M", "t12":44.6, "t12units":"D", "t12sec":3853440.0
	, "Radiations":[ {"Type":"B"}]}]
	}
	,{"x4pointer":" "
	,"x4codes":[{"Flag":"15", "Nucl":"51-SB-127", "t12":3.87, "t12units":"D", "t12sec":334368.0
	, "Radiations":[ {"Type":"DG", "Energy":[473.2], "Intensity":0.248}
			,{"Type":"DG", "Energy":[684.9], "Intensity":0.368}]}]
	}
	,{"x4pointer":" "
	,"x4codes":[{"Flag":"16", "Nucl":"50-SN-128-G", "t12":1.0, "t12units":"HR", "t12sec":3600.0
	, "Radiations":[ {"Type":"DG", "Energy":[482.0], "Intensity":0.66}]}]
	}
	,{"x4pointer":" "
	,"x4codes":[{"Flag":"17", "Nucl":"51-SB-130-G", "t12":0.667, "t12units":"HR", "t12sec":2401.2
	, "Radiations":[ {"Type":"DG", "Energy":[330.9], "Intensity":0.78}
			,{"Type":"DG", "Energy":[839.4], "Intensity":1.0}]}]
	}
	,{"x4pointer":" "
	,"x4codes":[{"Flag":"18", "Nucl":"52-TE-132", "t12":3.24, "t12units":"D", "t12sec":279936.0
	, "Radiations":[ {"Type":"DG", "Energy":[228.2], "Intensity":0.88}
			,{"Type":"DG", "Energy":[522.6], "Intensity":0.156}
			,{"Type":"DG", "Energy":[630.2], "Intensity":0.135}]}]
	}
	,{"x4pointer":" "
	,"x4codes":[{"Flag":"19", "Nucl":"53-I-133-G", "t12":21.0, "t12units":"HR", "t12sec":75600.0
	, "Radiations":[ {"Type":"DG", "Energy":[529.91], "Intensity":0.83}]}]
	}
	,{"x4pointer":" "
	,"x4codes":[{"Flag":"20", "Nucl":"55-CS-136-G", "t12":12.98, "t12units":"D", "t12sec":1121472.0
	, "Radiations":[ {"Type":"B"}]}]
	}
	,{"x4pointer":" "
	,"x4codes":[{"Flag":"21", "Nucl":"55-CS-137", "t12":30.174, "t12units":"YR", "t12sec":9.5219878E8
	, "Radiations":[ {"Type":"B"}]}]
	}
	,{"x4pointer":" "
	,"x4codes":[{"Flag":"22", "Nucl":"56-BA-140", "t12":12.8, "t12units":"D", "t12sec":1105920.0
	, "Radiations":[ {"Type":"B"}
			,{"Type":"DG", "Energy":[537.261], "Intensity":0.2446}
			,{"Type":"DG", "Energy":[1596.2], "Intensity":0.9552}]}]
	}
	,{"x4pointer":" "
	,"x4codes":[{"Flag":"23", "Nucl":"58-CE-141", "t12":32.38, "t12units":"D", "t12sec":2797632.0
	, "Radiations":[ {"Type":"B"}
			,{"Type":"DG", "Energy":[145.44], "Intensity":0.493}]}]
	}
	,{"x4pointer":" "
	,"x4codes":[{"Flag":"24", "Nucl":"57-LA-142", "t12":1.545, "t12units":"HR", "t12sec":5562.0
	, "Radiations":[ {"Type":"DG", "Energy":[641.21], "Intensity":0.465}
			,{"Type":"DG", "Energy":[2398.0], "Intensity":0.117}
			,{"Type":"DG", "Energy":[2542.9], "Intensity":0.088}]}]
	}
	,{"x4pointer":" "
	,"x4codes":[{"Flag":"25", "Nucl":"58-CE-143", "t12":1.379, "t12units":"D", "t12sec":119145.6
	, "Radiations":[ {"Type":"DG", "Energy":[293.2], "Intensity":0.435}]}]
	}
	,{"x4pointer":" "
	,"x4codes":[{"Flag":"26", "Nucl":"58-CE-144", "t12":284.6, "t12units":"D", "t12sec":2.458944E7
	, "Radiations":[ {"Type":"B"}
			,{"Type":"DG", "Energy":[133.5], "Intensity":0.11}]}]
	}
	,{"x4pointer":" "
	,"x4codes":[{"Flag":"27", "Nucl":"60-ND-147", "t12":11.04, "t12units":"D", "t12sec":953856.0
	, "Radiations":[ {"Type":"B"}
			,{"Type":"DG", "Energy":[531.0], "Intensity":0.1295}]}]
	}
	,{"x4pointer":" "
	,"x4codes":[{"Flag":"28", "Nucl":"61-PM-151", "t12":1.183, "t12units":"D", "t12sec":102211.2
	, "Radiations":[ {"Type":"DG", "Energy":[167.73,168.38], "Intensity":0.092}
			,{"Type":"DG", "Energy":[240.08], "Intensity":0.036}
			,{"Type":"DG", "Energy":[340.08], "Intensity":0.224}]}]
	}
	,{"x4pointer":" "
	,"x4codes":[{"Flag":"29", "Nucl":"63-EU-156", "t12":15.19, "t12units":"D", "t12sec":1312416.0
	, "Radiations":[ {"Type":"B"}]}]
	}
      ]
     ,"STATUS":[
	{"x4pointer":" "
	,"x4codes":[{"code":"APRVD", "dict":"STATUS", "idict":16,"hlp":"Approved by author"}]
	,"x4freetext":[" Approved by D.R.Nethaway, 80/10/10."]
	}
	,{"x4pointer":" "
	,"x4codes":[{"code":"TABLE", "dict":"STATUS", "idict":16,"hlp":"Data presented by authors"}]
	,"x4freetext":[" Table I, Phys.Rev.C17,1089,1978"]
	}
      ]
     ,"HISTORY":[
	{"x4pointer":" "
	,"x4code":{"code":"19791214C", "date":"19791214", "act":"C", "dict":"HISTORY", "idict":15
	     ,"actHelp":"Compiled at the data center"}
	}
	,{"x4pointer":" "
	,"x4code":{"code":"19811218A", "date":"19811218", "act":"A", "dict":"HISTORY", "idict":15
	     ,"actHelp":"Important alterations"}
	,"x4freetext":[" Decay-data corrections."]
	}
	,{"x4pointer":" "
	,"x4code":{"code":"19880914A", "date":"19880914", "act":"A", "dict":"HISTORY", "idict":15
	     ,"actHelp":"Important alterations"}
	,"x4freetext":[" Isomer field added. BIB corrections."]
	}
	,{"x4pointer":" "
	,"x4code":{"code":"19900404A", "date":"19900404", "act":"A", "dict":"HISTORY", "idict":15
	     ,"actHelp":"Important alterations"}
	,"x4freetext":[" BIB update. data heading update."]
	}
	,{"x4pointer":" "
	,"x4code":{"code":"20171115A", "date":"20171115", "act":"A", "dict":"HISTORY", "idict":15
	     ,"actHelp":"Important alterations"}
	,"x4freetext":[" OS. Correction in DECAY-DATA (Cs137)."
		," Converted to lower case, several BIB changes."]
	}
      ]
    }
   }
  ,{"SUBENT":"10828002", "isub":2, "compiled":20171126, "TransID":"1437", "TransDate":20180207, "x4dbVersion":"2023-12-19"
    ,"BIB":{
      "REACTION":[
	{"x4pointer":" "
	,"x4code":{"code":"92-U-235(N,F)ELEM/MASS,CUM,FY"
	    ,"c4reac":"(N,F)ELEM/MASS,CUM,FY"
	    ,"combi":"a"
	    ,"MF":801
	    ,"MT":18
	    ,"Units":"PART/FIS"
	    ,"reacs": [
	    {"code":"92-U-235(N,F)ELEM/MASS,CUM,FY"
		,"Reac":"N,F"
		,"SF1":"92-U-235","Targ":{"code":"92-U-235","nam":"U-235","ZA":92235}
		,"SF2":"N","Proj":{"code":"N","nam":"n","ZA":1}
		,"SF3":"F","procHlp":"Fission"
		,"SF4":"ELEM/MASS","Prod":{"code":"ELEM/MASS","nam":"elem/mass"}
		,"SF5":"CUM"
		,"SF6":"FY"
		,"SF58":"CUM,FY","Quant":"FY","BasicUnits":"PART/FIS","QuantHlp":"Cumulative fission-product yield"
	    }]}
	}
      ]
     ,"SAMPLE":[
	{"x4pointer":" "
	,"x4code":{"code":"orig::92-U-235,ENR=0.9764"}
	}
	,{"x4pointer":" "
	,"x4code":{"code":"orig::92-U-238,ENR=0.0236"}
	}
      ]
    }
    ,"DATA":{"ncols":9, "nrows":116
      ,"x4headers":[
       {"icol":0, "header":"EN", "units":"MEV", "pointer":" "
	,"headerHelp":"Energy of incident projectile, laboratory system", "pFlag":"1000000"
	,"unitsHelp":"MeV","familyCode":"E","convFc":1000000.0,"basicUnits":"EV"}
      ,{"icol":1, "header":"EN-RSL-FW", "units":"MEV", "pointer":" "
	,"headerHelp":"Incident projectile energy resolution (Full width)", "pFlag":"9220000"
	,"unitsHelp":"MeV","familyCode":"E","convFc":1000000.0,"basicUnits":"EV"}
      ,{"icol":2, "header":"ELEMENT", "units":"NO-DIM", "pointer":" "
	,"headerHelp":"Atomic number of element", "pFlag":"1000000"
	,"unitsHelp":"no Dimensions","familyCode":"NO","convFc":1.0,"basicUnits":"NO-DIM"}
      ,{"icol":3, "header":"MASS", "units":"NO-DIM", "pointer":" "
	,"headerHelp":"Atomic mass of nuclide", "pFlag":"1000000"
	,"unitsHelp":"no Dimensions","familyCode":"NO","convFc":1.0,"basicUnits":"NO-DIM"}
      ,{"icol":4, "header":"ISOMER", "units":"NO-DIM", "pointer":" "
	,"headerHelp":"Isomer for nuclide given", "pFlag":"1000000"
	,"unitsHelp":"no Dimensions","familyCode":"NO","convFc":1.0,"basicUnits":"NO-DIM"}
      ,{"icol":5, "header":"DATA", "units":"PC/FIS", "pointer":" "
	,"headerHelp":"Value of quantity specified under REACTION", "pFlag":"0001000"
	,"unitsHelp":"particles per 100 fissions","familyCode":"FY","convFc":0.01,"basicUnits":"PART/FIS"}
      ,{"icol":6, "header":"DATA-ERR1", "units":"PER-CENT", "pointer":" "
	,"headerHelp":"1st data uncertainty, defined under ERR-ANALYS", "pFlag":"0009550"
	,"unitsHelp":"per-cent","familyCode":"PC","convFc":1.0,"basicUnits":"PER-CENT"}
      ,{"icol":7, "header":"DATA-ERR2", "units":"PER-CENT", "pointer":" "
	,"headerHelp":"2nd data uncertainty, defined under ERR-ANALYS", "pFlag":"0009550"
	,"unitsHelp":"per-cent","familyCode":"PC","convFc":1.0,"basicUnits":"PER-CENT"}
      ,{"icol":8, "header":"DECAY-FLAG", "units":"NO-DIM", "pointer":" "
	,"headerHelp":"Decay flag. See corresponding flag in BIB section", "pFlag":"0000000"
	,"unitsHelp":"no Dimensions","familyCode":"NO","convFc":1.0,"basicUnits":"NO-DIM"}
      ]
      ,"datacols":[
	 ["EN"        ,"EN-RSL-FW" ,"ELEMENT"   ,"MASS"      ,"ISOMER"    ,"DATA"      ,"DATA-ERR1" ,"DATA-ERR2" ,"DECAY-FLAG"]
	,["MEV"       ,"MEV"       ,"NO-DIM"    ,"NO-DIM"    ,"NO-DIM"    ,"PC/FIS"    ,"PER-CENT"  ,"PER-CENT"  ,"NO-DIM"    ]
	,[" "         ," "         ," "         ," "         ," "         ," "         ," "         ," "         ," "         ]]
      ,"data":[
	 [6           ,0.5         ,35          ,84          ,0           ,1.1566      ,38.4        ,44          ,1           ]
	,[6           ,0.5         ,36          ,87          ,null        ,2.9404      ,12.4        ,16          ,2           ]
	,[6           ,0.5         ,38          ,89          ,null        ,3.8215      ,5.5         ,7.5         ,3           ]
	,[6           ,0.5         ,38          ,91          ,null        ,5.3087      ,5.9         ,9.2         ,4           ]
	,[6           ,0.5         ,40          ,95          ,null        ,5.8519      ,5.5         ,7.5         ,5           ]
	,[6           ,0.5         ,40          ,97          ,null        ,5.7187      ,5.5         ,9.4         ,6           ]
	,[6           ,0.5         ,42          ,99          ,null        ,6.167       ,5.5         ,7.5         ,7           ]
	,[6           ,0.5         ,43          ,103         ,null        ,2.8137      ,41.4        ,46.1        ,9           ]
	,[6           ,0.5         ,44          ,103         ,null        ,3.1085      ,8.3         ,9.7         ,8           ]
	,[6           ,0.5         ,45          ,105         ,null        ,1.7182      ,7.1         ,10.4        ,10          ]
	,[6           ,0.5         ,46          ,112         ,null        ,0.2199      ,5.4         ,7.4         ,12          ]
	,[6           ,0.5         ,47          ,111         ,null        ,0.2407      ,5.4         ,7.4         ,11          ]
	,[6           ,0.5         ,48          ,115         ,0           ,0.1841      ,5.4         ,7.4         ,13          ]
	,[6           ,0.5         ,48          ,115         ,1           ,0.0143      ,43.2        ,43.8        ,14          ]
	,[6           ,0.5         ,50          ,128         ,null        ,0.804       ,10.9        ,18.7        ,16          ]
	,[6           ,0.5         ,51          ,127         ,null        ,0.8206      ,20.5        ,21.7        ,15          ]
	,[6           ,0.5         ,51          ,130         ,0           ,1.0171      ,11.6        ,19.1        ,17          ]
	,[6           ,0.5         ,52          ,132         ,null        ,4.583       ,5.6         ,7.6         ,18          ]
	,[6           ,0.5         ,53          ,133         ,null        ,6.1357      ,8           ,12.9        ,19          ]
	,[6           ,0.5         ,55          ,136         ,null        ,0.0489      ,7.8         ,10.5        ,20          ]
	,[6           ,0.5         ,55          ,137         ,null        ,6.0934      ,11.1        ,13.4        ,21          ]
	,[6           ,0.5         ,56          ,140         ,null        ,5.0263      ,5.5         ,7.5         ,22          ]
	,[6           ,0.5         ,57          ,142         ,null        ,5.0254      ,11.2        ,19          ,24          ]
	,[6           ,0.5         ,58          ,141         ,null        ,4.933       ,5.5         ,9           ,23          ]
	,[6           ,0.5         ,58          ,143         ,null        ,4.6887      ,6.4         ,10          ,25          ]
	,[6           ,0.5         ,58          ,144         ,null        ,2.1597      ,5.8         ,9.3         ,26          ]
	,[6           ,0.5         ,60          ,147         ,null        ,2.0934      ,5.5         ,9           ,27          ]
	,[6           ,0.5         ,61          ,151         ,null        ,0.5336      ,101.5       ,102         ,28          ]
	,[6           ,0.5         ,63          ,156         ,null        ,0.0464      ,6           ,9.7         ,29          ]
	,[7.1         ,0.3         ,35          ,84          ,null        ,1.2171      ,34.1        ,40.3        ,1           ]
	,[7.1         ,0.3         ,36          ,87          ,null        ,2.9155      ,10          ,14.3        ,2           ]
	,[7.1         ,0.3         ,38          ,89          ,null        ,4.1348      ,5.7         ,7.7         ,3           ]
	,[7.1         ,0.3         ,38          ,91          ,null        ,5.1876      ,7.5         ,10.4        ,4           ]
	,[7.1         ,0.3         ,40          ,95          ,null        ,6.1109      ,5.7         ,7.7         ,5           ]
	,[7.1         ,0.3         ,40          ,97          ,null        ,5.7689      ,5.7         ,9.6         ,6           ]
	,[7.1         ,0.3         ,42          ,99          ,null        ,5.4048      ,5.7         ,7.7         ,7           ]
	,[7.1         ,0.3         ,43          ,103         ,null        ,2.7391      ,27.4        ,34.2        ,9           ]
	,[7.1         ,0.3         ,44          ,103         ,null        ,3.1418      ,6.4         ,8.2         ,8           ]
	,[7.1         ,0.3         ,45          ,105         ,null        ,1.3704      ,6           ,9.7         ,10          ]
	,[7.1         ,0.3         ,46          ,112         ,null        ,0.2017      ,5.5         ,7.4         ,12          ]
	,[7.1         ,0.3         ,47          ,111         ,null        ,0.2179      ,5.5         ,7.5         ,11          ]
	,[7.1         ,0.3         ,48          ,115         ,null        ,0.179       ,5.5         ,7.5         ,13          ]
	,[7.1         ,0.3         ,48          ,115         ,null        ,0.0196      ,12.9        ,14.7        ,14          ]
	,[7.1         ,0.3         ,50          ,128         ,null        ,0.708       ,13.6        ,20.5        ,16          ]
	,[7.1         ,0.3         ,51          ,127         ,null        ,0.8323      ,20.9        ,22          ,15          ]
	,[7.1         ,0.3         ,51          ,130         ,null        ,0.9554      ,11.7        ,19.1        ,17          ]
	,[7.1         ,0.3         ,52          ,132         ,null        ,4.8712      ,6.1         ,8           ,18          ]
	,[7.1         ,0.3         ,53          ,133         ,null        ,6.1933      ,7.4         ,12.7        ,19          ]
	,[7.1         ,0.3         ,55          ,136         ,null        ,0.0457      ,8.2         ,10.8        ,20          ]
	,[7.1         ,0.3         ,55          ,137         ,null        ,7.2382      ,10.2        ,12.8        ,21          ]
	,[7.1         ,0.3         ,56          ,140         ,null        ,5.2981      ,5.7         ,7.7         ,22          ]
	,[7.1         ,0.3         ,57          ,142         ,null        ,5.134       ,8.6         ,17.6        ,24          ]
	,[7.1         ,0.3         ,58          ,141         ,null        ,5.0148      ,5.7         ,9.2         ,23          ]
	,[7.1         ,0.3         ,58          ,143         ,null        ,4.6359      ,5.8         ,9.6         ,25          ]
	,[7.1         ,0.3         ,58          ,144         ,null        ,4.3081      ,5.8         ,9.2         ,26          ]
	,[7.1         ,0.3         ,60          ,147         ,null        ,2.2044      ,5.7         ,9.2         ,27          ]
	,[7.1         ,0.3         ,61          ,151         ,null        ,0.3594      ,13.4        ,16.9        ,28          ]
	,[7.1         ,0.3         ,63          ,156         ,null        ,0.0388      ,6.4         ,9.9         ,29          ]
	,[8.1         ,0.4         ,35          ,84          ,null        ,1.5766      ,26.1        ,34.6        ,1           ]
	,[8.1         ,0.4         ,36          ,87          ,null        ,3.1106      ,11.6        ,16          ,2           ]
	,[8.1         ,0.4         ,38          ,89          ,null        ,3.8468      ,7.9         ,9.8         ,3           ]
	,[8.1         ,0.4         ,38          ,91          ,null        ,5.1757      ,9.2         ,12.2        ,4           ]
	,[8.1         ,0.4         ,40          ,95          ,null        ,5.8996      ,6.6         ,8.7         ,5           ]
	,[8.1         ,0.4         ,40          ,97          ,null        ,5.521       ,6.5         ,10.8        ,6           ]
	,[8.1         ,0.4         ,42          ,99          ,null        ,5.3888      ,6.6         ,8.8         ,7           ]
	,[8.1         ,0.4         ,43          ,103         ,null        ,2.4217      ,21.5        ,31.2        ,9           ]
	,[8.1         ,0.4         ,44          ,103         ,null        ,2.9589      ,8           ,9.8         ,8           ]
	,[8.1         ,0.4         ,45          ,105         ,null        ,1.3872      ,7.5         ,11.3        ,10          ]
	,[8.1         ,0.4         ,46          ,112         ,null        ,0.2172      ,6           ,7.9         ,12          ]
	,[8.1         ,0.4         ,47          ,111         ,null        ,0.2266      ,6.3         ,8.1         ,11          ]
	,[8.1         ,0.4         ,48          ,115         ,null        ,0.1818      ,6.1         ,8           ,13          ]
	,[8.1         ,0.4         ,48          ,115         ,null        ,0.0154      ,20.1        ,21.3        ,14          ]
	,[8.1         ,0.4         ,50          ,128         ,null        ,0.7529      ,11.2        ,19.9        ,16          ]
	,[8.1         ,0.4         ,51          ,127         ,null        ,0.6423      ,11.6        ,13.9        ,15          ]
	,[8.1         ,0.4         ,51          ,130         ,null        ,0.8884      ,12.2        ,20.1        ,17          ]
	,[8.1         ,0.4         ,52          ,132         ,null        ,4.4454      ,6.6         ,8.7         ,18          ]
	,[8.1         ,0.4         ,53          ,133         ,null        ,5.8901      ,9.6         ,14.9        ,19          ]
	,[8.1         ,0.4         ,55          ,136         ,null        ,0.0567      ,6.9         ,10          ,20          ]
	,[8.1         ,0.4         ,55          ,137         ,null        ,4.184       ,12.9        ,15.7        ,21          ]
	,[8.1         ,0.4         ,56          ,140         ,null        ,5.1026      ,6.7         ,8.8         ,22          ]
	,[8.1         ,0.4         ,57          ,142         ,null        ,5.3388      ,10.7        ,20.1        ,24          ]
	,[8.1         ,0.4         ,58          ,141         ,null        ,4.9753      ,6.6         ,10.4        ,23          ]
	,[8.1         ,0.4         ,58          ,143         ,null        ,4.7734      ,6.7         ,11          ,25          ]
	,[8.1         ,0.4         ,58          ,144         ,null        ,4.0963      ,6.7         ,10.5        ,26          ]
	,[8.1         ,0.4         ,60          ,147         ,null        ,2.0308      ,7.7         ,11.1        ,27          ]
	,[8.1         ,0.4         ,61          ,151         ,null        ,0.4757      ,11.6        ,16.1        ,28          ]
	,[8.1         ,0.4         ,63          ,156         ,null        ,0.0342      ,9           ,12.1        ,29          ]
	,[9.1         ,0.3         ,35          ,84          ,null        ,1.1444      ,28.4        ,38.1        ,1           ]
	,[9.1         ,0.3         ,36          ,87          ,null        ,2.9108      ,15.4        ,19.6        ,2           ]
	,[9.1         ,0.3         ,38          ,89          ,null        ,3.2539      ,13.3        ,14.9        ,3           ]
	,[9.1         ,0.3         ,38          ,91          ,null        ,4.8785      ,9.3         ,12.9        ,4           ]
	,[9.1         ,0.3         ,40          ,95          ,null        ,6.0543      ,8.4         ,10.5        ,5           ]
	,[9.1         ,0.3         ,40          ,97          ,null        ,5.3544      ,8.5         ,12.8        ,6           ]
	,[9.1         ,0.3         ,42          ,99          ,null        ,5.3552      ,8.7         ,10.8        ,7           ]
	,[9.1         ,0.3         ,43          ,103         ,null        ,2.6665      ,19.5        ,31.5        ,9           ]
	,[9.1         ,0.3         ,44          ,103         ,null        ,2.7014      ,12.6        ,14.2        ,8           ]
	,[9.1         ,0.3         ,45          ,105         ,null        ,1.0165      ,13.7        ,17          ,10          ]
	,[9.1         ,0.3         ,46          ,112         ,null        ,0.2917      ,6.8         ,8.5         ,12          ]
	,[9.1         ,0.3         ,47          ,111         ,null        ,0.3064      ,7.1         ,8.8         ,11          ]
	,[9.1         ,0.3         ,48          ,115         ,null        ,0.2422      ,7           ,8.7         ,13          ]
	,[9.1         ,0.3         ,48          ,115         ,null        ,0.0153      ,32.3        ,33.1        ,14          ]
	,[9.1         ,0.3         ,50          ,128         ,null        ,0.8278      ,13.3        ,22          ,16          ]
	,[9.1         ,0.3         ,51          ,127         ,null        ,0.8083      ,9.3         ,12.2        ,15          ]
	,[9.1         ,0.3         ,51          ,130         ,null        ,1.0443      ,12.3        ,20.7        ,17          ]
	,[9.1         ,0.3         ,52          ,132         ,null        ,3.9648      ,8.9         ,11.1        ,18          ]
	,[9.1         ,0.3         ,53          ,133         ,null        ,5.6398      ,12.7        ,18.1        ,19          ]
	,[9.1         ,0.3         ,55          ,136         ,null        ,0.0623      ,7.4         ,10.4        ,20          ]
	,[9.1         ,0.3         ,55          ,137         ,null        ,5.3987      ,11.6        ,15.1        ,21          ]
	,[9.1         ,0.3         ,56          ,140         ,null        ,4.709       ,9.2         ,11.3        ,22          ]
	,[9.1         ,0.3         ,57          ,142         ,null        ,5.5038      ,13.3        ,22.9        ,24          ]
	,[9.1         ,0.3         ,58          ,141         ,null        ,4.575       ,9           ,12.9        ,23          ]
	,[9.1         ,0.3         ,58          ,143         ,null        ,4.3895      ,9.2         ,13.5        ,25          ]
	,[9.1         ,0.3         ,58          ,144         ,null        ,3.6156      ,9.5         ,13.3        ,26          ]
	,[9.1         ,0.3         ,60          ,147         ,null        ,1.8721      ,11.9        ,14.9        ,27          ]
	,[9.1         ,0.3         ,61          ,151         ,null        ,0.3704      ,45.8        ,47.5        ,28          ]
	,[9.1         ,0.3         ,63          ,156         ,null        ,0.0381      ,13.1        ,15.6        ,29          ]]}
   }
  ,{"SUBENT":"10828003", "isub":3, "compiled":20171126, "TransID":"1437", "TransDate":20180207, "x4dbVersion":"2023-12-19"
    ,"BIB":{
      "REACTION":[
	{"x4pointer":" "
	,"x4code":{"code":"92-U-238(N,F)ELEM/MASS,CUM,FY"
	    ,"c4reac":"(N,F)ELEM/MASS,CUM,FY"
	    ,"combi":"a"
	    ,"MF":801
	    ,"MT":18
	    ,"Units":"PART/FIS"
	    ,"reacs": [
	    {"code":"92-U-238(N,F)ELEM/MASS,CUM,FY"
		,"Reac":"N,F"
		,"SF1":"92-U-238","Targ":{"code":"92-U-238","nam":"U-238","ZA":92238}
		,"SF2":"N","Proj":{"code":"N","nam":"n","ZA":1}
		,"SF3":"F","procHlp":"Fission"
		,"SF4":"ELEM/MASS","Prod":{"code":"ELEM/MASS","nam":"elem/mass"}
		,"SF5":"CUM"
		,"SF6":"FY"
		,"SF58":"CUM,FY","Quant":"FY","BasicUnits":"PART/FIS","QuantHlp":"Cumulative fission-product yield"
	    }]}
	}
      ]
     ,"SAMPLE":[
	{"x4pointer":" "
	,"x4code":{"code":"orig::92-U-238,ENR=0.9980"}
	}
	,{"x4pointer":" "
	,"x4code":{"code":"orig::92-U-235,ENR=0.0020"}
	}
      ]
    }
    ,"DATA":{"ncols":9, "nrows":116
      ,"x4headers":[
       {"icol":0, "header":"EN", "units":"MEV", "pointer":" "
	,"headerHelp":"Energy of incident projectile, laboratory system", "pFlag":"1000000"
	,"unitsHelp":"MeV","familyCode":"E","convFc":1000000.0,"basicUnits":"EV"}
      ,{"icol":1, "header":"EN-RSL-FW", "units":"MEV", "pointer":" "
	,"headerHelp":"Incident projectile energy resolution (Full width)", "pFlag":"9220000"
	,"unitsHelp":"MeV","familyCode":"E","convFc":1000000.0,"basicUnits":"EV"}
      ,{"icol":2, "header":"ELEMENT", "units":"NO-DIM", "pointer":" "
	,"headerHelp":"Atomic number of element", "pFlag":"1000000"
	,"unitsHelp":"no Dimensions","familyCode":"NO","convFc":1.0,"basicUnits":"NO-DIM"}
      ,{"icol":3, "header":"MASS", "units":"NO-DIM", "pointer":" "
	,"headerHelp":"Atomic mass of nuclide", "pFlag":"1000000"
	,"unitsHelp":"no Dimensions","familyCode":"NO","convFc":1.0,"basicUnits":"NO-DIM"}
      ,{"icol":4, "header":"ISOMER", "units":"NO-DIM", "pointer":" "
	,"headerHelp":"Isomer for nuclide given", "pFlag":"1000000"
	,"unitsHelp":"no Dimensions","familyCode":"NO","convFc":1.0,"basicUnits":"NO-DIM"}
      ,{"icol":5, "header":"DATA", "units":"PC/FIS", "pointer":" "
	,"headerHelp":"Value of quantity specified under REACTION", "pFlag":"0001000"
	,"unitsHelp":"particles per 100 fissions","familyCode":"FY","convFc":0.01,"basicUnits":"PART/FIS"}
      ,{"icol":6, "header":"DATA-ERR1", "units":"PER-CENT", "pointer":" "
	,"headerHelp":"1st data uncertainty, defined under ERR-ANALYS", "pFlag":"0009550"
	,"unitsHelp":"per-cent","familyCode":"PC","convFc":1.0,"basicUnits":"PER-CENT"}
      ,{"icol":7, "header":"DATA-ERR2", "units":"PER-CENT", "pointer":" "
	,"headerHelp":"2nd data uncertainty, defined under ERR-ANALYS", "pFlag":"0009550"
	,"unitsHelp":"per-cent","familyCode":"PC","convFc":1.0,"basicUnits":"PER-CENT"}
      ,{"icol":8, "header":"DECAY-FLAG", "units":"NO-DIM", "pointer":" "
	,"headerHelp":"Decay flag. See corresponding flag in BIB section", "pFlag":"0000000"
	,"unitsHelp":"no Dimensions","familyCode":"NO","convFc":1.0,"basicUnits":"NO-DIM"}
      ]
      ,"datacols":[
	 ["EN"        ,"EN-RSL-FW" ,"ELEMENT"   ,"MASS"      ,"ISOMER"    ,"DATA"      ,"DATA-ERR1" ,"DATA-ERR2" ,"DECAY-FLAG"]
	,["MEV"       ,"MEV"       ,"NO-DIM"    ,"NO-DIM"    ,"NO-DIM"    ,"PC/FIS"    ,"PER-CENT"  ,"PER-CENT"  ,"NO-DIM"    ]
	,[" "         ," "         ," "         ," "         ," "         ," "         ," "         ," "         ," "         ]]
      ,"data":[
	 [6           ,0.5         ,35          ,84          ,0           ,0.7671      ,51.2        ,55.5        ,1           ]
	,[6           ,0.5         ,36          ,87          ,null        ,1.5447      ,21.1        ,23.4        ,2           ]
	,[6           ,0.5         ,38          ,89          ,null        ,2.6825      ,5.4         ,7.4         ,3           ]
	,[6           ,0.5         ,38          ,91          ,null        ,3.9198      ,5.9         ,9.2         ,4           ]
	,[6           ,0.5         ,40          ,95          ,null        ,5.1949      ,5.4         ,7.4         ,5           ]
	,[6           ,0.5         ,40          ,97          ,null        ,5.6423      ,5.4         ,9.3         ,6           ]
	,[6           ,0.5         ,42          ,99          ,null        ,6.2551      ,5.4         ,7.4         ,7           ]
	,[6           ,0.5         ,43          ,104         ,null        ,4.4748      ,28          ,34.5        ,9           ]
	,[6           ,0.5         ,44          ,103         ,null        ,5.2271      ,5.9         ,7.8         ,8           ]
	,[6           ,0.5         ,45          ,105         ,null        ,3.9812      ,6.8         ,10.2        ,10          ]
	,[6           ,0.5         ,46          ,112         ,null        ,0.1526      ,6.1         ,7.9         ,12          ]
	,[6           ,0.5         ,47          ,111         ,null        ,0.1933      ,5.4         ,7.4         ,11          ]
	,[6           ,0.5         ,48          ,115         ,0           ,0.1026      ,5.4         ,7.4         ,13          ]
	,[6           ,0.5         ,48          ,115         ,1           ,0.0216      ,39          ,39.6        ,14          ]
	,[6           ,0.5         ,50          ,128         ,null        ,0.4745      ,26.1        ,30.2        ,16          ]
	,[6           ,0.5         ,51          ,127         ,null        ,0.5787      ,50.3        ,50.8        ,15          ]
	,[6           ,0.5         ,51          ,130         ,0           ,0.5961      ,21.7        ,26.4        ,17          ]
	,[6           ,0.5         ,52          ,132         ,null        ,4.1981      ,5.7         ,7.6         ,18          ]
	,[6           ,0.5         ,53          ,133         ,null        ,6.1323      ,11.4        ,15.2        ,19          ]
	,[6           ,0.5         ,55          ,136         ,null        ,0.022       ,60.9        ,61.3        ,20          ]
	,[6           ,0.5         ,55          ,137         ,null        ,5.3644      ,15.1        ,16.9        ,21          ]
	,[6           ,0.5         ,56          ,140         ,null        ,5.3836      ,5.4         ,7.4         ,22          ]
	,[6           ,0.5         ,57          ,142         ,null        ,4.4261      ,12.1        ,19.4        ,24          ]
	,[6           ,0.5         ,58          ,141         ,null        ,4.7188      ,5.4         ,8.9         ,23          ]
	,[6           ,0.5         ,58          ,143         ,null        ,4.3329      ,8.7         ,11.6        ,25          ]
	,[6           ,0.5         ,58          ,144         ,null        ,4.3256      ,5.6         ,9           ,26          ]
	,[6           ,0.5         ,60          ,147         ,null        ,2.549       ,5.4         ,8.9         ,27          ]
	,[6           ,0.5         ,61          ,151         ,null        ,1.6858      ,45          ,46.1        ,28          ]
	,[6           ,0.5         ,63          ,156         ,null        ,0.1047      ,5.6         ,9.4         ,29          ]
	,[7.1         ,0.3         ,35          ,84          ,null        ,1.07        ,34.3        ,40.3        ,1           ]
	,[7.1         ,0.3         ,36          ,87          ,null        ,1.8406      ,12          ,15.7        ,2           ]
	,[7.1         ,0.3         ,38          ,89          ,null        ,2.57        ,5.5         ,7.5         ,3           ]
	,[7.1         ,0.3         ,38          ,91          ,null        ,4.1402      ,6           ,9.3         ,4           ]
	,[7.1         ,0.3         ,40          ,95          ,null        ,5.1907      ,5.5         ,7.5         ,5           ]
	,[7.1         ,0.3         ,40          ,97          ,null        ,5.5406      ,5.5         ,9.4         ,6           ]
	,[7.1         ,0.3         ,42          ,99          ,null        ,6.0815      ,5.5         ,7.5         ,7           ]
	,[7.1         ,0.3         ,43          ,104         ,null        ,4.5112      ,15.9        ,25.9        ,9           ]
	,[7.1         ,0.3         ,44          ,103         ,null        ,5.9156      ,6.8         ,8.5         ,8           ]
	,[7.1         ,0.3         ,45          ,105         ,null        ,3.4919      ,6.8         ,10.2        ,10          ]
	,[7.1         ,0.3         ,46          ,112         ,null        ,0.1393      ,5.7         ,7.6         ,12          ]
	,[7.1         ,0.3         ,47          ,111         ,null        ,0.1731      ,5.5         ,7.4         ,11          ]
	,[7.1         ,0.3         ,48          ,115         ,null        ,0.0981      ,5.8         ,7.7         ,13          ]
	,[7.1         ,0.3         ,48          ,115         ,null        ,0.0226      ,31.4        ,32.1        ,14          ]
	,[7.1         ,0.3         ,50          ,128         ,null        ,0.4416      ,12.1        ,19.5        ,16          ]
	,[7.1         ,0.3         ,51          ,127         ,null        ,1.0065      ,50.3        ,50.8        ,15          ]
	,[7.1         ,0.3         ,51          ,130         ,null        ,0.6161      ,14.4        ,20.8        ,17          ]
	,[7.1         ,0.3         ,52          ,132         ,null        ,4.4889      ,5.7         ,7.6         ,18          ]
	,[7.1         ,0.3         ,53          ,133         ,null        ,6.8391      ,8.7         ,13.4        ,19          ]
	,[7.1         ,0.3         ,55          ,136         ,null        ,0.0166      ,32.2        ,33          ,20          ]
	,[7.1         ,0.3         ,55          ,137         ,null        ,2.6593      ,44.5        ,45.2        ,21          ]
	,[7.1         ,0.3         ,56          ,140         ,null        ,5.3458      ,5.5         ,7.5         ,22          ]
	,[7.1         ,0.3         ,57          ,142         ,null        ,4.7617      ,9.6         ,18          ,24          ]
	,[7.1         ,0.3         ,58          ,141         ,null        ,4.7372      ,5.5         ,9           ,23          ]
	,[7.1         ,0.3         ,58          ,143         ,null        ,4.6913      ,6           ,9.7         ,25          ]
	,[7.1         ,0.3         ,58          ,144         ,null        ,5.0795      ,5.8         ,9.1         ,26          ]
	,[7.1         ,0.3         ,60          ,147         ,null        ,2.5756      ,5.5         ,9           ,27          ]
	,[7.1         ,0.3         ,61          ,151         ,null        ,0.7015      ,27.9        ,29.7        ,28          ]
	,[7.1         ,0.3         ,63          ,156         ,null        ,0.0773      ,6.2         ,9.8         ,29          ]
	,[8.1         ,0.4         ,35          ,84          ,null        ,1.1102      ,33          ,39.8        ,1           ]
	,[8.1         ,0.4         ,36          ,87          ,null        ,1.7395      ,15          ,18.5        ,2           ]
	,[8.1         ,0.4         ,38          ,89          ,null        ,2.6125      ,6.4         ,8.4         ,3           ]
	,[8.1         ,0.4         ,38          ,91          ,null        ,3.7717      ,6.6         ,10          ,4           ]
	,[8.1         ,0.4         ,40          ,95          ,null        ,4.981       ,6           ,8.1         ,5           ]
	,[8.1         ,0.4         ,40          ,97          ,null        ,5.3968      ,5.9         ,10.1        ,6           ]
	,[8.1         ,0.4         ,42          ,99          ,null        ,6.0623      ,5.9         ,8           ,7           ]
	,[8.1         ,0.4         ,43          ,104         ,null        ,4.5611      ,16.3        ,27.4        ,9           ]
	,[8.1         ,0.4         ,44          ,103         ,null        ,5.2195      ,7.3         ,9.2         ,8           ]
	,[8.1         ,0.4         ,45          ,105         ,null        ,3.5643      ,7.4         ,10.9        ,10          ]
	,[8.1         ,0.4         ,46          ,112         ,null        ,0.1688      ,6.9         ,8.6         ,12          ]
	,[8.1         ,0.4         ,47          ,111         ,null        ,0.1945      ,6.9         ,8.6         ,11          ]
	,[8.1         ,0.4         ,48          ,115         ,null        ,0.1229      ,6           ,7.9         ,13          ]
	,[8.1         ,0.4         ,48          ,115         ,null        ,0.0123      ,32.3        ,33.1        ,14          ]
	,[8.1         ,0.4         ,50          ,128         ,null        ,0.4604      ,12.9        ,20.9        ,16          ]
	,[8.1         ,0.4         ,51          ,127         ,null        ,0.539       ,51.1        ,51.6        ,15          ]
	,[8.1         ,0.4         ,51          ,130         ,null        ,0.7326      ,11.6        ,19.3        ,17          ]
	,[8.1         ,0.4         ,52          ,132         ,null        ,4.6621      ,5.9         ,8.1         ,18          ]
	,[8.1         ,0.4         ,53          ,133         ,null        ,6.7132      ,9.9         ,14.6        ,19          ]
	,[8.1         ,0.4         ,55          ,136         ,null        ,0.0105      ,27.8        ,28.7        ,20          ]
	,[8.1         ,0.4         ,55          ,137         ,null        ,3.8148      ,18.4        ,20.2        ,21          ]
	,[8.1         ,0.4         ,56          ,140         ,null        ,5.1455      ,6           ,8.2         ,22          ]
	,[8.1         ,0.4         ,57          ,142         ,null        ,4.6722      ,33.9        ,37.6        ,24          ]
	,[8.1         ,0.4         ,58          ,141         ,null        ,4.6197      ,5.9         ,9.7         ,23          ]
	,[8.1         ,0.4         ,58          ,143         ,null        ,4.7749      ,5.9         ,10.1        ,25          ]
	,[8.1         ,0.4         ,58          ,144         ,null        ,4.3396      ,6           ,9.7         ,26          ]
	,[8.1         ,0.4         ,60          ,147         ,null        ,2.6285      ,6.4         ,9.9         ,27          ]
	,[8.1         ,0.4         ,61          ,151         ,null        ,0.8208      ,13.5        ,17.3        ,28          ]
	,[8.1         ,0.4         ,63          ,156         ,null        ,0.077       ,11.8        ,14.3        ,29          ]
	,[9.1         ,0.3         ,35          ,84          ,null        ,0.8941      ,31.8        ,39.9        ,1           ]
	,[9.1         ,0.3         ,36          ,87          ,null        ,1.909       ,18.3        ,21.7        ,2           ]
	,[9.1         ,0.3         ,38          ,89          ,null        ,2.4176      ,9.1         ,10.9        ,3           ]
	,[9.1         ,0.3         ,38          ,91          ,null        ,4.02        ,7.8         ,11.2        ,4           ]
	,[9.1         ,0.3         ,40          ,95          ,null        ,4.9878      ,7.3         ,9.4         ,5           ]
	,[9.1         ,0.3         ,40          ,97          ,null        ,5.282       ,7.3         ,11.5        ,6           ]
	,[9.1         ,0.3         ,42          ,99          ,null        ,5.9758      ,7.2         ,9.3         ,7           ]
	,[9.1         ,0.3         ,43          ,104         ,null        ,4.5104      ,12.6        ,27.3        ,9           ]
	,[9.1         ,0.3         ,44          ,103         ,null        ,4.8741      ,10.5        ,12.1        ,8           ]
	,[9.1         ,0.3         ,45          ,105         ,null        ,2.6564      ,11.9        ,14.9        ,10          ]
	,[9.1         ,0.3         ,46          ,112         ,null        ,0.2225      ,8.5         ,10          ,12          ]
	,[9.1         ,0.3         ,47          ,111         ,null        ,0.2687      ,8.3         ,9.9         ,11          ]
	,[9.1         ,0.3         ,48          ,115         ,null        ,0.1687      ,6.8         ,8.5         ,13          ]
	,[9.1         ,0.3         ,48          ,115         ,null        ,0.0221      ,32.4        ,33.1        ,14          ]
	,[9.1         ,0.3         ,50          ,128         ,null        ,0.5671      ,15.2        ,23          ,16          ]
	,[9.1         ,0.3         ,51          ,127         ,null        ,0.5113      ,17.1        ,18.5        ,15          ]
	,[9.1         ,0.3         ,51          ,130         ,null        ,0.7524      ,15.7        ,22.2        ,17          ]
	,[9.1         ,0.3         ,52          ,132         ,null        ,4.301       ,7.3         ,9.5         ,18          ]
	,[9.1         ,0.3         ,53          ,133         ,null        ,6.3075      ,10.9        ,16          ,19          ]
	,[9.1         ,0.3         ,55          ,136         ,null        ,0.0172      ,97.2        ,97.5        ,20          ]
	,[9.1         ,0.3         ,55          ,137         ,null        ,5.3348      ,16.7        ,18.9        ,21          ]
	,[9.1         ,0.3         ,56          ,140         ,null        ,4.9824      ,7.6         ,9.7         ,22          ]
	,[9.1         ,0.3         ,57          ,142         ,null        ,4.706       ,11.6        ,21.2        ,24          ]
	,[9.1         ,0.3         ,58          ,141         ,null        ,4.405       ,7.3         ,11.2        ,23          ]
	,[9.1         ,0.3         ,58          ,143         ,null        ,4.3702      ,7.4         ,11.6        ,25          ]
	,[9.1         ,0.3         ,58          ,144         ,null        ,4.2717      ,7.3         ,11.1        ,26          ]
	,[9.1         ,0.3         ,60          ,147         ,null        ,2.4378      ,8.9         ,12.2        ,27          ]
	,[9.1         ,0.3         ,61          ,151         ,null        ,1.0407      ,55          ,56.2        ,28          ]
	,[9.1         ,0.3         ,63          ,156         ,null        ,0.0834      ,14.1        ,16.5        ,29          ]]}
   }
  ]
 }
, {"ENTRY":"13597", "updated":20140415, "x4dbVersion":"2023-12-19", "TransID":"1401", "TransDate":20141111
   ,"y1":1995,"a1":"S.K.Ghorai+","r1":"J,ANE,22,11,1995"
   ,"ref":"Jour: Annals of Nuclear Energy, Vol.22, p.11 (1995)"
   ,"title":"Partial neutron cross sections for 64Zn, 66Zn, 67Zn and 68Zn between 14.2 and 18.2 MeV"
   ,"x4subents":[
   {"SUBENT":"13597001", "isub":1, "compiled":20140415, "TransID":"1401", "TransDate":20141111, "x4dbVersion":"2023-12-19"
    ,"BIB":{
      "INSTITUTE":[
	{"x4pointer":" "
	,"x4codes":[{"code":"1USAAUB", "dict":"INSTITUTE", "idict":3,"hlp":"Auburn University, Auburn, AL, United States of America"}
	    ,{"code":"1USAALS", "dict":"INSTITUTE", "idict":3,"hlp":"Alabama State University, Montgomery, AL, United States of America"}]
	}
      ]
     ,"REFERENCE":[
	{"x4pointer":" "
	,"x4codes":[{"code":"J,ANE,22,11,199501","stdFileName":"J,ANE,22,11,1995"
		,"year":1995,"typ":"J","ref":"J,ANE","vol":"22","p":"11"
		,"shortRef":"Jour: Annals of Nuclear Energy, Vol.22, p.11 (1995)"}]
	,"x4freetext":[" - final publ., full data set"]
	}
	,{"x4pointer":" "
	,"x4codes":[{"code":"J,BAP,39,1250(R9.2),199404","stdFileName":"J,BAP,39,1250(R9.2),1994"
		,"year":1994,"typ":"J","ref":"J,BAP","vol":"39","p":"1250(R9.2)"
		,"shortRef":"Jour: Bulletin of the American Physical Society Ser.II, Vol.39, p.1250(R9.2) (1994)"}]
	,"x4freetext":["  - short abstract"]
	}
      ]
     ,"AUTHOR":[
	{"x4pointer":" "
	,"x4codes":[{"i":1,"ini":"S.K.","nam":"Ghorai"}
	    ,{"i":2,"ini":"P.M.","nam":"Sylva"}
	    ,{"i":3,"ini":"J.R.","nam":"Williams"}
	    ,{"i":4,"ini":"W.L.","nam":"Alford"}]
	}
      ]
     ,"TITLE":[
	{"x4pointer":" "
	,"x4code":null
	,"x4freetext":["Partial neutron cross sections for 64Zn, 66Zn, 67Zn"
		," and 68Zn between 14.2 and 18.2 MeV"]
	}
      ]
     ,"FACILITY":[
	{"x4pointer":" "
	,"x4codes":[{"code":"DYNAM", "dict":"FACILITY", "idict":18,"hlp":"Dynamitron"}
	    ,{"code":"1USAAUB", "dict":"INSTITUTE", "idict":3,"hlp":"Auburn University, Auburn, AL, United States of America"}]
	}
      ]
     ,"INC-SOURCE":[
	{"x4pointer":" "
	,"x4codes":[{"code":"D-T", "dict":"INC-SOURCE", "idict":19,"hlp":"3H(d,n)"}]
	,"x4freetext":[" deuterons on titanium tritide. The titanium"
		,"thickness was 0.62 mg/cm2 with a tritium concentration"
		,"of 0.42 Ci/cm2. The neutron fluxes varied from"
		,"about 1.4 x 10**7 n/cm2/s at 14.2MeV to about"
		,"3.8 x 10**5 n/cm2/s at 18.2 MeV"]
	}
      ]
     ,"SAMPLE":[
	{"x4pointer":" "
	,"x4code":null
	,"x4freetext":["Natural zinc sample."]
	}
      ]
     ,"METHOD":[
	{"x4pointer":" "
	,"x4codes":[{"code":"ACTIV", "dict":"METHOD", "idict":21,"hlp":"Activation"}
	    ,{"code":"MOMIX", "dict":"METHOD", "idict":21,"hlp":"Mixed monitor"}]
	}
      ]
     ,"DETECTOR":[
	{"x4pointer":" "
	,"x4codes":[{"code":"GELI", "dict":"DETECTOR", "idict":22,"hlp":"Germanium-Lithium detector"}]
	}
      ]
     ,"MONITOR":[
	{"x4pointer":" "
	,"x4code":{"code":"13-AL-27(N,A)11-NA-24,,SIG"
		,"reaction":"13-AL-27(N,A)11-NA-24,,SIG"}
	}
      ]
     ,"DECAY-MON":[
	{"x4pointer":" "
	,"x4codes":[{"Nucl":"11-NA-24", "t12":15.02, "t12units":"HR", "t12sec":54072.0
	, "Radiations":[ {"Type":"DG", "Energy":[1369.0], "Intensity":1.0}]}]
	}
      ]
     ,"CORRECTION":[
	{"x4pointer":" "
	,"x4code":null
	,"x4freetext":["Corrected for:"
		,".self-absorption of gamma-rays in sample"
		,".gamma-gamma coincidence summing effect"]
	}
      ]
     ,"ERR-ANALYS":[
	{"x4pointer":" "
	,"x4code":{"header":"DATA-ERR"
	     ,"headerHelp":"Error in value of quantity, defined under ERR-ANALYS"}
	,"x4freetext":[" Standard uncertainties include uncertainty"
		," in:"
		," .detector counting efficiency"
		," .monitor reaction cross section"
		," .decay parameters, except gamma intensities"
		," .self-absorption correction"
		," .coincidence summing effect"
		," .counting statistics"]
	}
      ]
     ,"STATUS":[
	{"x4pointer":" "
	,"x4codes":[{"code":"APRVD", "dict":"STATUS", "idict":16,"hlp":"Approved by author"}]
	,"x4freetext":[" Approved by S.K. Ghorai, 6/23/1995"]
	}
	,{"x4pointer":" "
	,"x4codes":[{"code":"TABLE", "dict":"STATUS", "idict":16,"hlp":"Data presented by authors"}]
	,"x4freetext":[" Data taken from ANE,22,11,1995 (the same data"
		,"are given in BAP,39,1250(R9.2) but without decay-data"
		,"and monitor reaction)"]
	}
      ]
     ,"HISTORY":[
	{"x4pointer":" "
	,"x4code":{"code":"19950215C", "date":"19950215", "act":"C", "dict":"HISTORY", "idict":15
	     ,"actHelp":"Compiled at the data center"}
	}
	,{"x4pointer":" "
	,"x4code":{"code":"20140415A", "date":"20140415", "act":"A", "dict":"HISTORY", "idict":15
	     ,"actHelp":"Important alterations"}
	,"x4freetext":[" SD: REACTION code corrected in Subent 5."
		," Minor corrections."]
	}
      ]
    }
    ,"COMMON":{"ncols":1, "nrows":1
      ,"x4headers":[
       {"icol":0, "header":"EN-RSL", "units":"MEV", "pointer":" "
	,"headerHelp":"Incident projectile energy resolution (Unspecified)", "pFlag":"9220000"
	,"unitsHelp":"MeV","familyCode":"E","convFc":1000000.0,"basicUnits":"EV"}
      ]
      ,"datacols":[
	 ["EN-RSL"    ]
	,["MEV"       ]
	,[" "         ]]
      ,"data":[
	 [0.2         ]]}
   }
  ,{"SUBENT":"13597002", "isub":2, "compiled":19950217, "TransID":"0000", "TransDate":20050926, "x4dbVersion":"2023-12-19"
    ,"BIB":{
      "REACTION":[
	{"x4pointer":" "
	,"x4code":{"code":"30-ZN-64(N,P)29-CU-64,,SIG"
	    ,"c4reac":"(N,P),SIG"
	    ,"combi":"a"
	    ,"MF":3
	    ,"MT":103
	    ,"Units":"B"
	    ,"reacs": [
	    {"code":"30-ZN-64(N,P)29-CU-64,,SIG"
		,"Reac":"N,P"
		,"SF1":"30-ZN-64","Targ":{"code":"30-ZN-64","nam":"Zn-64","ZA":30064}
		,"SF2":"N","Proj":{"code":"N","nam":"n","ZA":1}
		,"SF3":"P"
		,"SF4":"29-CU-64","Prod":{"code":"29-CU-64","nam":"Cu-64","ZA":29064}
		,"SF6":"SIG"
		,"SF58":",SIG","Quant":"CS","BasicUnits":"B","QuantHlp":"Cross section"
	    }]}
	}
      ]
     ,"DECAY-DATA":[
	{"x4pointer":" "
	,"x4codes":[{"Nucl":"29-CU-64", "t12":12.7, "t12units":"HR", "t12sec":45720.0
	, "Radiations":[ {"Type":"AR", "Energy":[511.0], "Intensity":0.386}]}]
	}
      ]
    }
    ,"DATA":{"ncols":5, "nrows":4
      ,"x4headers":[
       {"icol":0, "header":"EN", "units":"MEV", "pointer":" "
	,"headerHelp":"Energy of incident projectile, laboratory system", "pFlag":"1000000"
	,"unitsHelp":"MeV","familyCode":"E","convFc":1000000.0,"basicUnits":"EV"}
      ,{"icol":1, "header":"DATA", "units":"MB", "pointer":" "
	,"headerHelp":"Value of quantity specified under REACTION", "pFlag":"0001000"
	,"unitsHelp":"millibarns","familyCode":"B","convFc":0.001,"basicUnits":"B"}
      ,{"icol":2, "header":"DATA-ERR", "units":"MB", "pointer":" "
	,"headerHelp":"Error in value of quantity, defined under ERR-ANALYS", "pFlag":"0009110"
	,"unitsHelp":"millibarns","familyCode":"B","convFc":0.001,"basicUnits":"B"}
      ,{"icol":3, "header":"MONIT", "units":"MB", "pointer":" "
	,"headerHelp":"Normalization value for reaction given under MONITOR", "pFlag":"0000000"
	,"unitsHelp":"millibarns","familyCode":"B","convFc":0.001,"basicUnits":"B"}
      ,{"icol":4, "header":"MONIT-ERR", "units":"MB", "pointer":" "
	,"headerHelp":"Error in normalization value", "pFlag":"0009550"
	,"unitsHelp":"millibarns","familyCode":"B","convFc":0.001,"basicUnits":"B"}
      ]
      ,"datacols":[
	 ["EN"        ,"DATA"      ,"DATA-ERR"  ,"MONIT"     ,"MONIT-ERR" ]
	,["MEV"       ,"MB"        ,"MB"        ,"MB"        ,"MB"        ]
	,[" "         ," "         ," "         ," "         ," "         ]]
      ,"data":[
	 [14.2        ,180         ,10          ,122         ,0.65        ]
	,[15.2        ,152         ,9           ,108         ,1.96        ]
	,[16.2        ,116         ,6           ,90          ,1.75        ]
	,[17.2        ,122         ,8           ,72          ,1.41        ]]}
   }
  ,{"SUBENT":"13597003", "isub":3, "compiled":19950217, "TransID":"0000", "TransDate":20050926, "x4dbVersion":"2023-12-19"
    ,"BIB":{
      "REACTION":[
	{"x4pointer":" "
	,"x4code":{"code":"30-ZN-64(N,2N)30-ZN-63,,SIG"
	    ,"c4reac":"(N,2N),SIG"
	    ,"combi":"a"
	    ,"MF":3
	    ,"MT":16
	    ,"Units":"B"
	    ,"reacs": [
	    {"code":"30-ZN-64(N,2N)30-ZN-63,,SIG"
		,"Reac":"N,2N"
		,"SF1":"30-ZN-64","Targ":{"code":"30-ZN-64","nam":"Zn-64","ZA":30064}
		,"SF2":"N","Proj":{"code":"N","nam":"n","ZA":1}
		,"SF3":"2N"
		,"SF4":"30-ZN-63","Prod":{"code":"30-ZN-63","nam":"Zn-63","ZA":30063}
		,"SF6":"SIG"
		,"SF58":",SIG","Quant":"CS","BasicUnits":"B","QuantHlp":"Cross section"
	    }]}
	}
      ]
     ,"DECAY-DATA":[
	{"x4pointer":" "
	,"x4codes":[{"Nucl":"30-ZN-63", "t12":38.0, "t12units":"MIN", "t12sec":2280.0
	, "Radiations":[ {"Type":"AR", "Energy":[511.0], "Intensity":1.86}
			,{"Type":"DG", "Energy":[670.0], "Intensity":0.084}
			,{"Type":"DG", "Energy":[962.0], "Intensity":0.0661}]}]
	}
      ]
    }
    ,"DATA":{"ncols":5, "nrows":5
      ,"x4headers":[
       {"icol":0, "header":"EN", "units":"MEV", "pointer":" "
	,"headerHelp":"Energy of incident projectile, laboratory system", "pFlag":"1000000"
	,"unitsHelp":"MeV","familyCode":"E","convFc":1000000.0,"basicUnits":"EV"}
      ,{"icol":1, "header":"DATA", "units":"MB", "pointer":" "
	,"headerHelp":"Value of quantity specified under REACTION", "pFlag":"0001000"
	,"unitsHelp":"millibarns","familyCode":"B","convFc":0.001,"basicUnits":"B"}
      ,{"icol":2, "header":"DATA-ERR", "units":"MB", "pointer":" "
	,"headerHelp":"Error in value of quantity, defined under ERR-ANALYS", "pFlag":"0009110"
	,"unitsHelp":"millibarns","familyCode":"B","convFc":0.001,"basicUnits":"B"}
      ,{"icol":3, "header":"MONIT", "units":"MB", "pointer":" "
	,"headerHelp":"Normalization value for reaction given under MONITOR", "pFlag":"0000000"
	,"unitsHelp":"millibarns","familyCode":"B","convFc":0.001,"basicUnits":"B"}
      ,{"icol":4, "header":"MONIT-ERR", "units":"MB", "pointer":" "
	,"headerHelp":"Error in normalization value", "pFlag":"0009550"
	,"unitsHelp":"millibarns","familyCode":"B","convFc":0.001,"basicUnits":"B"}
      ]
      ,"datacols":[
	 ["EN"        ,"DATA"      ,"DATA-ERR"  ,"MONIT"     ,"MONIT-ERR" ]
	,["MEV"       ,"MB"        ,"MB"        ,"MB"        ,"MB"        ]
	,[" "         ," "         ," "         ," "         ," "         ]]
      ,"data":[
	 [14.2        ,121         ,6           ,122         ,0.65        ]
	,[15.2        ,176         ,10          ,108         ,1.96        ]
	,[16.2        ,222         ,13          ,90          ,1.75        ]
	,[17.2        ,267         ,17          ,72          ,1.41        ]
	,[18.2        ,327         ,27          ,59.5        ,1.26        ]]}
   }
  ,{"SUBENT":"13597004", "isub":4, "compiled":19950217, "TransID":"0000", "TransDate":20050926, "x4dbVersion":"2023-12-19"
    ,"BIB":{
      "REACTION":[
	{"x4pointer":" "
	,"x4code":{"code":"30-ZN-66(N,P)29-CU-66,,SIG"
	    ,"c4reac":"(N,P),SIG"
	    ,"combi":"a"
	    ,"MF":3
	    ,"MT":103
	    ,"Units":"B"
	    ,"reacs": [
	    {"code":"30-ZN-66(N,P)29-CU-66,,SIG"
		,"Reac":"N,P"
		,"SF1":"30-ZN-66","Targ":{"code":"30-ZN-66","nam":"Zn-66","ZA":30066}
		,"SF2":"N","Proj":{"code":"N","nam":"n","ZA":1}
		,"SF3":"P"
		,"SF4":"29-CU-66","Prod":{"code":"29-CU-66","nam":"Cu-66","ZA":29066}
		,"SF6":"SIG"
		,"SF58":",SIG","Quant":"CS","BasicUnits":"B","QuantHlp":"Cross section"
	    }]}
	}
      ]
     ,"DECAY-DATA":[
	{"x4pointer":" "
	,"x4codes":[{"Nucl":"29-CU-66", "t12":5.1, "t12units":"MIN", "t12sec":306.0
	, "Radiations":[ {"Type":"DG", "Energy":[1039.0], "Intensity":0.08}]}]
	}
      ]
    }
    ,"DATA":{"ncols":5, "nrows":5
      ,"x4headers":[
       {"icol":0, "header":"EN", "units":"MEV", "pointer":" "
	,"headerHelp":"Energy of incident projectile, laboratory system", "pFlag":"1000000"
	,"unitsHelp":"MeV","familyCode":"E","convFc":1000000.0,"basicUnits":"EV"}
      ,{"icol":1, "header":"DATA", "units":"MB", "pointer":" "
	,"headerHelp":"Value of quantity specified under REACTION", "pFlag":"0001000"
	,"unitsHelp":"millibarns","familyCode":"B","convFc":0.001,"basicUnits":"B"}
      ,{"icol":2, "header":"DATA-ERR", "units":"MB", "pointer":" "
	,"headerHelp":"Error in value of quantity, defined under ERR-ANALYS", "pFlag":"0009110"
	,"unitsHelp":"millibarns","familyCode":"B","convFc":0.001,"basicUnits":"B"}
      ,{"icol":3, "header":"MONIT", "units":"MB", "pointer":" "
	,"headerHelp":"Normalization value for reaction given under MONITOR", "pFlag":"0000000"
	,"unitsHelp":"millibarns","familyCode":"B","convFc":0.001,"basicUnits":"B"}
      ,{"icol":4, "header":"MONIT-ERR", "units":"MB", "pointer":" "
	,"headerHelp":"Error in normalization value", "pFlag":"0009550"
	,"unitsHelp":"millibarns","familyCode":"B","convFc":0.001,"basicUnits":"B"}
      ]
      ,"datacols":[
	 ["EN"        ,"DATA"      ,"DATA-ERR"  ,"MONIT"     ,"MONIT-ERR" ]
	,["MEV"       ,"MB"        ,"MB"        ,"MB"        ,"MB"        ]
	,[" "         ," "         ," "         ," "         ," "         ]]
      ,"data":[
	 [14.2        ,76          ,5           ,122         ,0.65        ]
	,[15.2        ,72          ,6           ,108         ,1.96        ]
	,[16.2        ,71          ,8           ,90          ,1.75        ]
	,[17.2        ,62          ,7           ,72          ,1.41        ]
	,[18.2        ,57          ,7           ,59.5        ,1.26        ]]}
   }
  ,{"SUBENT":"13597005", "isub":5, "compiled":20140415, "TransID":"1401", "TransDate":20141111, "x4dbVersion":"2023-12-19"
    ,"BIB":{
      "REACTION":[
	{"x4pointer":" "
	,"x4code":{"code":"(30-ZN-67(N,P)29-CU-67,,SIG)+\n(30-ZN-68(N,X)29-CU-67,,SIG,,RAB)"
	    ,"c4reac":"((N,P),SIG)+((N,X),SIG,,RAB)"
	    ,"combi":"a","combiQuant":"Cross section"
	    ,"MF":503
	    ,"Units":"B"
	    ,"reacs": [
	    {"code":"30-ZN-67(N,P)29-CU-67,,SIG"
		,"Reac":"N,P"
		,"SF1":"30-ZN-67","Targ":{"code":"30-ZN-67","nam":"Zn-67","ZA":30067}
		,"SF2":"N","Proj":{"code":"N","nam":"n","ZA":1}
		,"SF3":"P"
		,"SF4":"29-CU-67","Prod":{"code":"29-CU-67","nam":"Cu-67","ZA":29067}
		,"SF6":"SIG"
		,"SF58":",SIG","Quant":"CS","BasicUnits":"B","QuantHlp":"Cross section"
	    }
	    ,{"code":"30-ZN-68(N,X)29-CU-67,,SIG,,RAB"
		,"Reac":"N,X"
		,"SF1":"30-ZN-68","Targ":{"code":"30-ZN-68","nam":"Zn-68","ZA":30068}
		,"SF2":"N","Proj":{"code":"N","nam":"n","ZA":1}
		,"SF3":"X","procHlp":"Process unspecified"
		,"SF4":"29-CU-67","Prod":{"code":"29-CU-67","nam":"Cu-67","ZA":29067}
		,"SF6":"SIG"
		,"SF8":"RAB"
		,"SF58":",SIG,,RAB","Quant":"CS","BasicUnits":"B","QuantHlp":"Cs * abund.(nat)/abund.(nuclide of 1st term)"
	    }]}
	}
      ]
     ,"DECAY-DATA":[
	{"x4pointer":" "
	,"x4codes":[{"Nucl":"29-CU-67", "t12":62.01, "t12units":"HR", "t12sec":223236.0
	, "Radiations":[ {"Type":"DG", "Energy":[185.0], "Intensity":0.47}]}]
	}
      ]
     ,"HISTORY":[
	{"x4pointer":" "
	,"x4code":{"code":"20140415A", "date":"20140415", "act":"A", "dict":"HISTORY", "idict":15
	     ,"actHelp":"Important alterations"}
	,"x4freetext":[" SD: (30-ZN-67(N,P)29-CU-67,,SIG) changed"
		," on sum of reactions in REACTION code."]
	}
      ]
    }
    ,"DATA":{"ncols":5, "nrows":5
      ,"x4headers":[
       {"icol":0, "header":"EN", "units":"MEV", "pointer":" "
	,"headerHelp":"Energy of incident projectile, laboratory system", "pFlag":"1000000"
	,"unitsHelp":"MeV","familyCode":"E","convFc":1000000.0,"basicUnits":"EV"}
      ,{"icol":1, "header":"DATA", "units":"MB", "pointer":" "
	,"headerHelp":"Value of quantity specified under REACTION", "pFlag":"0001000"
	,"unitsHelp":"millibarns","familyCode":"B","convFc":0.001,"basicUnits":"B"}
      ,{"icol":2, "header":"DATA-ERR", "units":"MB", "pointer":" "
	,"headerHelp":"Error in value of quantity, defined under ERR-ANALYS", "pFlag":"0009110"
	,"unitsHelp":"millibarns","familyCode":"B","convFc":0.001,"basicUnits":"B"}
      ,{"icol":3, "header":"MONIT", "units":"MB", "pointer":" "
	,"headerHelp":"Normalization value for reaction given under MONITOR", "pFlag":"0000000"
	,"unitsHelp":"millibarns","familyCode":"B","convFc":0.001,"basicUnits":"B"}
      ,{"icol":4, "header":"MONIT-ERR", "units":"MB", "pointer":" "
	,"headerHelp":"Error in normalization value", "pFlag":"0009550"
	,"unitsHelp":"millibarns","familyCode":"B","convFc":0.001,"basicUnits":"B"}
      ]
      ,"datacols":[
	 ["EN"        ,"DATA"      ,"DATA-ERR"  ,"MONIT"     ,"MONIT-ERR" ]
	,["MEV"       ,"MB"        ,"MB"        ,"MB"        ,"MB"        ]
	,[" "         ," "         ," "         ," "         ," "         ]]
      ,"data":[
	 [14.2        ,82          ,5           ,122         ,0.65        ]
	,[15.2        ,106         ,6           ,108         ,1.96        ]
	,[16.2        ,125         ,8           ,90          ,1.75        ]
	,[17.2        ,141         ,21          ,72          ,1.41        ]
	,[18.2        ,230         ,30          ,59.5        ,1.26        ]]}
   }
  ,{"SUBENT":"13597006", "isub":6, "compiled":19950822, "TransID":"0000", "TransDate":20050926, "x4dbVersion":"2023-12-19"
    ,"BIB":{
      "REACTION":[
	{"x4pointer":" "
	,"x4code":{"code":"30-ZN-68(N,P)29-CU-68-M,,SIG"
	    ,"c4reac":"(N,P),SIG"
	    ,"combi":"a"
	    ,"MF":3
	    ,"MT":103
	    ,"Units":"B"
	    ,"reacs": [
	    {"code":"30-ZN-68(N,P)29-CU-68-M,,SIG"
		,"Reac":"N,P"
		,"SF1":"30-ZN-68","Targ":{"code":"30-ZN-68","nam":"Zn-68","ZA":30068}
		,"SF2":"N","Proj":{"code":"N","nam":"n","ZA":1}
		,"SF3":"P"
		,"SF4":"29-CU-68-M","Prod":{"code":"29-CU-68-M","nam":"Cu-68-m","ZA":29068,"ProdM":"M"}
		,"SF6":"SIG"
		,"SF58":",SIG","Quant":"CS","BasicUnits":"B","QuantHlp":"Cross section"
	    }]}
	}
      ]
     ,"DECAY-DATA":[
	{"x4pointer":" "
	,"x4codes":[{"Nucl":"29-CU-68-M", "t12":3.8, "t12units":"MIN", "t12sec":228.0
	, "Radiations":[ {"Type":"DG", "Energy":[526.0], "Intensity":0.74}]}]
	}
      ]
    }
    ,"DATA":{"ncols":5, "nrows":3
      ,"x4headers":[
       {"icol":0, "header":"EN", "units":"MEV", "pointer":" "
	,"headerHelp":"Energy of incident projectile, laboratory system", "pFlag":"1000000"
	,"unitsHelp":"MeV","familyCode":"E","convFc":1000000.0,"basicUnits":"EV"}
      ,{"icol":1, "header":"DATA", "units":"MB", "pointer":" "
	,"headerHelp":"Value of quantity specified under REACTION", "pFlag":"0001000"
	,"unitsHelp":"millibarns","familyCode":"B","convFc":0.001,"basicUnits":"B"}
      ,{"icol":2, "header":"DATA-ERR", "units":"MB", "pointer":" "
	,"headerHelp":"Error in value of quantity, defined under ERR-ANALYS", "pFlag":"0009110"
	,"unitsHelp":"millibarns","familyCode":"B","convFc":0.001,"basicUnits":"B"}
      ,{"icol":3, "header":"MONIT", "units":"MB", "pointer":" "
	,"headerHelp":"Normalization value for reaction given under MONITOR", "pFlag":"0000000"
	,"unitsHelp":"millibarns","familyCode":"B","convFc":0.001,"basicUnits":"B"}
      ,{"icol":4, "header":"MONIT-ERR", "units":"MB", "pointer":" "
	,"headerHelp":"Error in normalization value", "pFlag":"0009550"
	,"unitsHelp":"millibarns","familyCode":"B","convFc":0.001,"basicUnits":"B"}
      ]
      ,"datacols":[
	 ["EN"        ,"DATA"      ,"DATA-ERR"  ,"MONIT"     ,"MONIT-ERR" ]
	,["MEV"       ,"MB"        ,"MB"        ,"MB"        ,"MB"        ]
	,[" "         ," "         ," "         ," "         ," "         ]]
      ,"data":[
	 [14.2        ,5           ,0.6         ,122         ,0.65        ]
	,[15.2        ,6           ,1           ,108         ,1.96        ]
	,[16.2        ,2           ,1           ,90          ,1.75        ]]}
   }
  ,{"SUBENT":"13597007", "isub":7, "compiled":19950217, "TransID":"0000", "TransDate":20050926, "x4dbVersion":"2023-12-19"
    ,"BIB":{
      "REACTION":[
	{"x4pointer":" "
	,"x4code":{"code":"30-ZN-68(N,A)28-NI-65,,SIG"
	    ,"c4reac":"(N,A),SIG"
	    ,"combi":"a"
	    ,"MF":3
	    ,"MT":107
	    ,"Units":"B"
	    ,"reacs": [
	    {"code":"30-ZN-68(N,A)28-NI-65,,SIG"
		,"Reac":"N,A"
		,"SF1":"30-ZN-68","Targ":{"code":"30-ZN-68","nam":"Zn-68","ZA":30068}
		,"SF2":"N","Proj":{"code":"N","nam":"n","ZA":1}
		,"SF3":"A"
		,"SF4":"28-NI-65","Prod":{"code":"28-NI-65","nam":"Ni-65","ZA":28065}
		,"SF6":"SIG"
		,"SF58":",SIG","Quant":"CS","BasicUnits":"B","QuantHlp":"Cross section"
	    }]}
	}
      ]
     ,"DECAY-DATA":[
	{"x4pointer":" "
	,"x4codes":[{"Nucl":"28-NI-65", "t12":2.52, "t12units":"HR", "t12sec":9072.0
	, "Radiations":[ {"Type":"DG", "Energy":[1482.0], "Intensity":0.235}]}]
	}
      ]
    }
    ,"DATA":{"ncols":5, "nrows":3
      ,"x4headers":[
       {"icol":0, "header":"EN", "units":"MEV", "pointer":" "
	,"headerHelp":"Energy of incident projectile, laboratory system", "pFlag":"1000000"
	,"unitsHelp":"MeV","familyCode":"E","convFc":1000000.0,"basicUnits":"EV"}
      ,{"icol":1, "header":"DATA", "units":"MB", "pointer":" "
	,"headerHelp":"Value of quantity specified under REACTION", "pFlag":"0001000"
	,"unitsHelp":"millibarns","familyCode":"B","convFc":0.001,"basicUnits":"B"}
      ,{"icol":2, "header":"DATA-ERR", "units":"MB", "pointer":" "
	,"headerHelp":"Error in value of quantity, defined under ERR-ANALYS", "pFlag":"0009110"
	,"unitsHelp":"millibarns","familyCode":"B","convFc":0.001,"basicUnits":"B"}
      ,{"icol":3, "header":"MONIT", "units":"MB", "pointer":" "
	,"headerHelp":"Normalization value for reaction given under MONITOR", "pFlag":"0000000"
	,"unitsHelp":"millibarns","familyCode":"B","convFc":0.001,"basicUnits":"B"}
      ,{"icol":4, "header":"MONIT-ERR", "units":"MB", "pointer":" "
	,"headerHelp":"Error in normalization value", "pFlag":"0009550"
	,"unitsHelp":"millibarns","familyCode":"B","convFc":0.001,"basicUnits":"B"}
      ]
      ,"datacols":[
	 ["EN"        ,"DATA"      ,"DATA-ERR"  ,"MONIT"     ,"MONIT-ERR" ]
	,["MEV"       ,"MB"        ,"MB"        ,"MB"        ,"MB"        ]
	,[" "         ," "         ," "         ," "         ," "         ]]
      ,"data":[
	 [14.2        ,10          ,0.7         ,122         ,0.65        ]
	,[15.2        ,9           ,0.7         ,108         ,1.96        ]
	,[16.2        ,7           ,1           ,90          ,1.75        ]]}
   }
  ]
 }
, {"ENTRY":"23114", "updated":20170322, "x4dbVersion":"2023-12-19", "TransID":"2258", "TransDate":20170512
   ,"y1":2010,"a1":"C.Sage+","r1":"J,PR/C,81,064604,2010","doi1":"10.1103/PhysRevC.81.064604"
   ,"ref":"Jour: Physical Review, Part C, Nuclear Physics, Vol.81, p.064604 (2010)"
   ,"title":"High resolution measurements of the 241Am(n,2n) reaction cross section"
   ,"x4subents":[
   {"SUBENT":"23114001", "isub":1, "compiled":20170322, "TransID":"2258", "TransDate":20170512, "x4dbVersion":"2023-12-19"
    ,"BIB":{
      "TITLE":[
	{"x4pointer":" "
	,"x4code":null
	,"x4freetext":["High resolution measurements of the 241Am(n,2n)"
		," reaction cross section"]
	}
      ]
     ,"AUTHOR":[
	{"x4pointer":" "
	,"x4codes":[{"i":1,"ini":"C.","nam":"Sage"}
	    ,{"i":2,"ini":"V.","nam":"Semkova"}
	    ,{"i":3,"ini":"O.","nam":"Bouland"}
	    ,{"i":4,"ini":"P.","nam":"Dessagne"}
	    ,{"i":5,"ini":"A.","nam":"Fernandez"}
	    ,{"i":6,"ini":"F.","nam":"Gunsing"}
	    ,{"i":7,"ini":"C.","nam":"Naestren"}
	    ,{"i":8,"ini":"G.","nam":"Noguere"}
	    ,{"i":9,"ini":"H.","nam":"Ottmar"}
	    ,{"i":10,"ini":"A.J.M.","nam":"Plompen"}
	    ,{"i":11,"ini":"P.","nam":"Romain"}
	    ,{"i":12,"ini":"G.","nam":"Rudolf"}
	    ,{"i":13,"ini":"J.","nam":"Somers"}
	    ,{"i":14,"ini":"F.","nam":"Wastin"}]
	}
      ]
     ,"INSTITUTE":[
	{"x4pointer":" "
	,"x4codes":[{"code":"2FR SAC", "dict":"INSTITUTE", "idict":3,"hlp":"CEA/Saclay, France"}
	    ,{"code":"2ZZZGEL", "dict":"INSTITUTE", "idict":3,"hlp":"EC Joint Research Centre (EC-JRC), Geel"}
	    ,{"code":"2FR CAD", "dict":"INSTITUTE", "idict":3,"hlp":"CEA/Cadarache, France"}
	    ,{"code":"2FR STR", "dict":"INSTITUTE", "idict":3,"hlp":"IPHC, Strasbourg, France"}
	    ,{"code":"3BULBLA", "dict":"INSTITUTE", "idict":3,"hlp":"Sofia, Inst. of Nuclear Res. and Nuclear Energy, Bulgaria"}
	    ,{"code":"1USALAS", "dict":"INSTITUTE", "idict":3,"hlp":"Los Alamos National Laboratory, NM, United States of America"}
	    ,{"code":"2ZZZITU", "dict":"INSTITUTE", "idict":3,"hlp":"EC Joint Research Centre (EC-JRC), Karlsruhe"}
	    ,{"code":"2FR BRC", "dict":"INSTITUTE", "idict":3,"hlp":"CEA/DAM Ile-de-France, Bruyeres-le-Chatel, Arpajon, France"}]
	}
      ]
     ,"REFERENCE":[
	{"x4pointer":" "
	,"x4codes":[{"code":"J,PR/C,81,064604,2010","stdFileName":"J,PR_C,81,064604,2010"
		,"year":2010,"typ":"J","ref":"J,PR/C","vol":"81","p":"064604"
		,"DOI":"10.1103/PhysRevC.81.064604"
		,"shortRef":"Jour: Physical Review, Part C, Nuclear Physics, Vol.81, p.064604 (2010)"}]
	,"x4freetext":["#doi:10.1103/PhysRevC.81.064604"]
	}
	,{"x4pointer":" "
	,"x4codes":[{"code":"R,INDC(FR)-73,2017","stdFileName":"R,INDC(FR)-73,2017"
		,"year":2017,"typ":"R","ref":"R,INDC(FR)-","no":"73"
		,"shortRef":"Rept: French report to the I.N.D.C., No.73 (2017)"}]
	,"x4freetext":["Derivation of full covariance matrix,"
		,"Sage`s thesis submitted to Univ. Strasbourg. (Nov.2009)"]
	}
      ]
     ,"REL-REF":[
	{"x4pointer":" "
	,"x4codes":[{"code":"R,A1007001,H.Liskien+,J,ND/A,11,569,1973","stdFileName":"J,ND_A,11,569,1973"
		,"flag":{"code":"R", "help":" Reference to related data compiled in another entry"}
		,"subent":"A1007001","author1":"H.Liskien+"
		,"year":1973,"typ":"J","ref":"J,ND/A","vol":"11","p":"569"
		,"shortRef":"Jour: Nuclear Data Tables (Nuclear Data Sect.A), Vol.11, p.569 (1973)"}]
	,"x4freetext":[" c.s. used for neutron spectra"]
	}
	,{"x4pointer":" "
	,"x4codes":[{"code":"R,,A.B.Smith+,R,ANL-NDM-115,1990","stdFileName":"R,ANL-NDM-115,1990"
		,"flag":{"code":"R", "help":" Reference to related data compiled in another entry"}
		,"author1":"A.B.Smith+"
		,"year":1990,"typ":"R","ref":"R,ANL-NDM-","no":"115"
		,"shortRef":"Rept: Argonne National Laboratory Reports, No.115 (1990)"}]
	,"x4freetext":[" c.s. for unfolding with 115In(n,n`)115In"]
	}
	,{"x4pointer":" "
	,"x4codes":[{"code":"R,,M.Wagner+,B,PH-DAT,13-5,1990","stdFileName":"C,PH-DAT,,13-5,1990"
		,"flag":{"code":"R", "help":" Reference to related data compiled in another entry"}
		,"author1":"M.Wagner+"
		,"year":1990,"typ":"B","ref":"C,PH-DAT"
		,"shortRef":"Book: Physik Daten/Physics Data,Series,Karlsruhe, p.13-5 (1990)"}]
	,"x4freetext":[" c.s. for unfolding with 27Al(n,a) and 93Nb(n,2n)"]
	}
      ]
     ,"FACILITY":[
	{"x4pointer":" "
	,"x4codes":[{"code":"VDGT", "dict":"FACILITY", "idict":18,"hlp":"Tandem van de Graaff"}
	    ,{"code":"2ZZZGEL", "dict":"INSTITUTE", "idict":3,"hlp":"EC Joint Research Centre (EC-JRC), Geel"}]
	,"x4freetext":[" 7-MV Van de Graaff accelerator"]
	}
      ]
     ,"INC-SOURCE":[
	{"x4pointer":" "
	,"x4code":null
	,"x4freetext":["Typical beam current on the target 10 uA."]
	}
	,{"x4pointer":" "
	,"x4codes":[{"code":"D-D", "dict":"INC-SOURCE", "idict":19,"hlp":"2H(d,n)"}]
	,"x4freetext":[" 8.34 and 9.15 MeV neutrons by 5.5, 6.3 MeV"
		," deuterons using D2 gas target cell of 4 cm length,"
		," 4 cm diameter, with Mo entrance window at 120 kPa."
		," Samples were placed 1.5 cm from neutron production"
		," target."]
	}
	,{"x4pointer":" "
	,"x4codes":[{"code":"D-T", "dict":"INC-SOURCE", "idict":19,"hlp":"3H(d,n)"}]
	,"x4freetext":[" 16.1 to 20.6 MeV neutrons from solid-state"
		," Ti/H-3 target of 2 mg/cm2 thickness on Ag backing of"
		," 0.4 mm thickness."
		," Samples were placed at 0 deg at 2 cm distance from"
		," neutron production target."
		,"13.3 MeV neutrons by 1 MeV deuterons."
		," Sample were placed at 125 deg at 3.9 cm distance from"
		," neutron production target."]
	}
      ]
     ,"INC-SPECT":[
	{"x4pointer":" "
	,"x4code":null
	,"x4freetext":["Quasi-mono-energetic neutron flux 5.E+7 n/sec/cm2."
		,"Mean neutron energy and yield distributions were"
		," calculated by code ENERGYSET based on"
		," - cross section evaluations of H.Liskien+ (1973);"
		," - energy-loss estimates with stopping powers of"
		,"   H.H.Andersen et al., \"Hydrogen stopping powers and"
		,"   ranges in all elements\", Pergamon, New York, 1977."
		,"To account for contribution of low threshold energies"
		," reaction, neutron flux density distributions were"
		," determined using previously measured TOF spectra"
		," combined with the spectral index method involving"
		," various reactions used for unfolding:"
		,"  115In(n,n`)115mIn (A.B.Smith+, 1990),"
		,"  27Al(n,a)24Na (M.Wagner+, 1990),"
		,"  93Nb(n,2n)92mNb (M.Wagner+, 1990),"
		,"  27Al(n,p)27Mg (ENDF/B-VI),"
		,"  56Fe(n,p)56Mn (ENDF/B-VI),"
		,"  58Ni(n,p)58Co (ENDF/B-VI) ."]
	}
      ]
     ,"DETECTOR":[
	{"x4pointer":" "
	,"x4codes":[{"code":"HPGE", "dict":"DETECTOR", "idict":22,"hlp":"Hyperpure Germanium detector"}]
	,"x4freetext":[" Pb/Sn/Cu shielding of 5/3/3 mm thickness,"
		," respectively, to reduce 241Am natural activity to"
		," limit the dead time of the system to <15% (between"
		," 7% and 15%, typically)."
		,"Co-60 standard source was used to check correctness of"
		," dead time given by acquisition system Maestro (Ortec)."
		,"Additional shielding of 10-mm-thick Cu cylinder to"
		," avoid detection of scattered gamma-rays."
		,"Gamma-ray spectra were analyzed using the software"
		," package Genie2000 of Canberra."
		,"Energy calibration was made by standard sources:"
		," 241Am(59.5 keV), 109Cd(88 keV), 57Co(122.1,136.5 keV),"
		," 137Cs(661.66 keV), 54Mn(834.8 keV), 65Zn(1115.5 keV)"
		," for different radial positions and detector-source"
		," distance."
		,"The efficiency was determined by MCNP5 taking into"
		," account the entire detection geometry."
		,"Results of simulation were compared with measured"
		," values and efficiency curves by fitting experimental"
		," points with polynomial logarithmic functions."
		,"Detector geometry parameters have been optimized to"
		," obtain agreement between measurements and simulations"
		," within the uncertainty limits."]
	}
	,{"x4pointer":" "
	,"x4codes":[{"code":"BF3", "dict":"DETECTOR", "idict":22,"hlp":"Boron Trifluoride neutron detector"}]
	,"x4freetext":[" BF3-counter operated in multichannel-scaling"
		," acquisition mode - to record the time profile on"
		," neutron flux."]
	}
      ]
     ,"METHOD":[
	{"x4pointer":" "
	,"x4codes":[{"code":"ACTIV", "dict":"METHOD", "idict":21,"hlp":"Activation"}
	    ,{"code":"GSPEC", "dict":"METHOD", "idict":21,"hlp":"Gamma ray spectrometry"}]
	,"x4freetext":["The intensities of the two main gamma-rays emitted in"
		," the decay of 240Am were measured as a function of"
		," cooling time after irradiation."]
	}
      ]
     ,"SAMPLE":[
	{"x4pointer":" "
	,"x4code":null
	,"x4freetext":["The Am samples were prepared at JRC, ITU, Karlsruhe,"
		," by method based on production of porous alumina"
		," granules by powder metallurgy."
		,"Resulting powder was pressed into pellets of 12 mm"
		," diameter, 2mm thickness."
		,"Sample weight was on average 400 mg, average Am"
		," content was 40 mg. Encapsulated in Al containers."
		,"--------------------------------------------------"
		," Total mass   241Am content  Al2O3    241Am Calc`d"
		,"  g             mg            g        wt%"
		,"--------------------------------------------------"
		," 0.342        32.2+/-0.1     0.305    9.43"
		," 0.442        42.2+/-0.1     0.394    9.51"
		," 0.428        40.3+/-0.1     0.382    9.42"
		," 0.435        41.0+/-0.1     0.388    9.42"
		," 0.448        41.2+/-0.1     0.401    9.20"
		," 0.447        42.1+/-0.1     0.399    9.42 ."
		,"--------------------------------------------------"
		,"Distance between monitor foils and sample was 3 mm in"
		," front, 10 mm at back."]
	}
      ]
     ,"MONITOR":[
	{"x4pointer":" "
	,"x4code":{"code":"13-AL-27(N,A)11-NA-24,,SIG"
		,"reaction":"13-AL-27(N,A)11-NA-24,,SIG"}
	}
      ]
     ,"DECAY-MON":[
	{"x4pointer":" "
	,"x4codes":[{"Nucl":"11-NA-24", "t12":14.997, "t12units":"HR", "t12sec":53989.2
	, "Radiations":[ {"Type":"DG", "Energy":[1368.6], "Intensity":0.999936}]}]
	,"x4freetext":[" 14.997+/-0.012 hr, 99.9936+/-0.0015%"]
	}
      ]
     ,"MONIT-REF":[
	{"x4pointer":" "
	,"x4codes":[{"code":",M.Wagner+,B,PH-DAT,13-5,1990","stdFileName":"C,PH-DAT,,13-5,1990"
		,"author1":"M.Wagner+"
		,"year":1990,"typ":"B","ref":"C,PH-DAT"
		,"shortRef":"Book: Physik Daten/Physics Data,Series,Karlsruhe, p.13-5 (1990)"}]
	}
	,{"x4pointer":" "
	,"x4codes":[{"code":",H.Vonach,R,INDC(SEC)-101,75,1992","stdFileName":"R,INDC(SEC)-101,75,1992"
		,"author1":"H.Vonach"
		,"year":1992,"typ":"R","ref":"R,INDC(SEC)-","no":"101","p":"75"
		,"shortRef":"Rept: I.N.D.C. Secretariat Report Series, No.101, p.75 (1992)"}]
	}
      ]
     ,"DECAY-DATA":[
	{"x4pointer":" "
	,"x4code":null
	,"x4freetext":["Decay data used for neutron flux unfolding"]
	}
	,{"x4pointer":" "
	,"x4codes":[{"Nucl":"12-MG-27", "t12":9.458, "t12units":"MIN", "t12sec":567.48
	, "Radiations":[ {"Type":"DG", "Energy":[843.8], "Intensity":0.718}]}]
	,"x4freetext":[" 9.458+/-0.012 min, 71.8+/-0.4%"]
	}
	,{"x4pointer":" "
	,"x4codes":[{"Nucl":"25-MN-56", "t12":2.5789, "t12units":"HR", "t12sec":9284.04
	, "Radiations":[ {"Type":"DG", "Energy":[846.8], "Intensity":0.989}]}]
	,"x4freetext":[" 2.5789+/-0.0001 hr, 98.9+/-0.3%"]
	}
	,{"x4pointer":" "
	,"x4codes":[{"Nucl":"49-IN-115-M", "t12":4.486, "t12units":"HR", "t12sec":16149.6
	, "Radiations":[ {"Type":"DG", "Energy":[336.2], "Intensity":0.46}]}]
	,"x4freetext":[" 4.486+/-0.004 hr, 46+/-2%"]
	}
	,{"x4pointer":" "
	,"x4codes":[{"Nucl":"41-NB-92-M", "t12":10.15, "t12units":"D", "t12sec":876960.0
	, "Radiations":[ {"Type":"DG", "Energy":[934.4], "Intensity":0.9907}]}]
	,"x4freetext":[" 10.15+/-0.02 d, 99.07+/-0.04%"]
	}
	,{"x4pointer":" "
	,"x4codes":[{"Nucl":"27-CO-58-G", "t12":70.86, "t12units":"D", "t12sec":6122304.0
	, "Radiations":[ {"Type":"DG", "Energy":[810.8], "Intensity":0.9945}]}]
	,"x4freetext":[" 70.86+/-0.07 d, 99.45+/-0.01%"]
	}
      ]
     ,"STATUS":[
	{"x4pointer":" "
	,"x4codes":[{"code":"APRVD", "dict":"STATUS", "idict":16,"hlp":"Approved by author"}]
	,"x4freetext":[" V.Semkova (2010-10-19)"]
	}
      ]
     ,"HISTORY":[
	{"x4pointer":" "
	,"x4code":{"code":"20100924C", "date":"20100924", "act":"C", "dict":"HISTORY", "idict":15
	     ,"actHelp":"Compiled at the data center"}
	,"x4freetext":[" M.M."]
	}
	,{"x4pointer":" "
	,"x4code":{"code":"20120120A", "date":"20120120", "act":"A", "dict":"HISTORY", "idict":15
	     ,"actHelp":"Important alterations"}
	,"x4freetext":[" NDS(VZ): REL-REF: ND/B->NDS"]
	}
	,{"x4pointer":" "
	,"x4code":{"code":"20130924U", "date":"20130924", "act":"U", "dict":"HISTORY", "idict":15
	     ,"actHelp":"Unimportant alterations"}
	,"x4freetext":[" On. BIB updated."]
	}
	,{"x4pointer":" "
	,"x4code":{"code":"20170322U", "date":"20170322", "act":"U", "dict":"HISTORY", "idict":15
	     ,"actHelp":"Unimportant alterations"}
	,"x4freetext":[" On. REFERENCE and REL-REF updated."]
	}
      ]
    }
   }
  ,{"SUBENT":"23114002", "isub":2, "compiled":20130924, "TransID":"2236", "TransDate":20140110, "x4dbVersion":"2023-12-19"
    ,"BIB":{
      "REACTION":[
	{"x4pointer":" "
	,"x4code":{"code":"95-AM-241(N,2N)95-AM-240,,SIG"
	    ,"c4reac":"(N,2N),SIG"
	    ,"combi":"a"
	    ,"MF":3
	    ,"MT":16
	    ,"Units":"B"
	    ,"reacs": [
	    {"code":"95-AM-241(N,2N)95-AM-240,,SIG"
		,"Reac":"N,2N"
		,"SF1":"95-AM-241","Targ":{"code":"95-AM-241","nam":"Am-241","ZA":95241}
		,"SF2":"N","Proj":{"code":"N","nam":"n","ZA":1}
		,"SF3":"2N"
		,"SF4":"95-AM-240","Prod":{"code":"95-AM-240","nam":"Am-240","ZA":95240}
		,"SF6":"SIG"
		,"SF58":",SIG","Quant":"CS","BasicUnits":"B","QuantHlp":"Cross section"
	    }]}
	}
      ]
     ,"DECAY-DATA":[
	{"x4pointer":" "
	,"x4codes":[{"Nucl":"95-AM-240", "t12":50.8, "t12units":"HR", "t12sec":182880.0
	, "Radiations":[ {"Type":"DG", "Energy":[987.79], "Intensity":0.722}]}]
	,"x4freetext":[" 50.8+/-0.3 hr, 987.79+/-0.06 keV, 72.2+/-0.9%"
		,"The 987.79-keV line is free of interference, while the"
		," 888.85 keV gamma line is contaminated by the natural"
		," activity of the sample itself."
		,"Only 987.79 keV gamma line was used for cross section"
		," determination."]
	}
      ]
     ,"REL-REF":[
	{"x4pointer":" "
	,"x4codes":[{"code":"R,,B.Singh+,J,NDS,109,2439,2008","stdFileName":"J,NDS,109,2439,2008"
		,"flag":{"code":"R", "help":" Reference to related data compiled in another entry"}
		,"author1":"B.Singh+"
		,"year":2008,"typ":"J","ref":"J,NDS","vol":"109","p":"2439"
		,"shortRef":"Jour: Nuclear Data Sheets, Vol.109, p.2439 (2008)"}]
	,"x4freetext":[" Decay data for A=240"]
	}
	,{"x4pointer":" "
	,"x4codes":[{"code":"R,,M.S.Basunia,J,NDS,107,2323,2006","stdFileName":"J,NDS,107,2323,2006"
		,"flag":{"code":"R", "help":" Reference to related data compiled in another entry"}
		,"author1":"M.S.Basunia"
		,"year":2006,"typ":"J","ref":"J,NDS","vol":"107","p":"2323"
		,"shortRef":"Jour: Nuclear Data Sheets, Vol.107, p.2323 (2006)"}]
	,"x4freetext":[" Decay data for A=237"]
	}
	,{"x4pointer":" "
	,"x4codes":[{"code":"A,14172003,A.P.Tonchev+,J,PR/C,77,054610,2008","stdFileName":"J,PR_C,77,054610,2008"
		,"flag":{"code":"A", "help":" Reference to related data compiled in another entry"}
		,"subent":"14172003","author1":"A.P.Tonchev+"
		,"year":2008,"typ":"J","ref":"J,PR/C","vol":"77","p":"054610"
		,"shortRef":"Jour: Physical Review, Part C, Nuclear Physics, Vol.77, p.054610 (2008)"}]
	}
	,{"x4pointer":" "
	,"x4codes":[{"code":"A,22936002,G.Perdikakis+,J,PR/C,73,067601,2006","stdFileName":"J,PR_C,73,067601,2006"
		,"flag":{"code":"A", "help":" Reference to related data compiled in another entry"}
		,"subent":"22936002","author1":"G.Perdikakis+"
		,"year":2006,"typ":"J","ref":"J,PR/C","vol":"73","p":"067601"
		,"shortRef":"Jour: Physical Review, Part C, Nuclear Physics, Vol.73, p.067601 (2006)"}]
	}
	,{"x4pointer":" "
	,"x4codes":[{"code":"A,41240071,A.A.Filatenkov+,J,PAN,63,1504,2000","stdFileName":"J,PAN,63,1504,2000"
		,"flag":{"code":"A", "help":" Reference to related data compiled in another entry"}
		,"subent":"41240071","author1":"A.A.Filatenkov+"
		,"year":2000,"typ":"J","ref":"J,PAN","vol":"63","p":"1504"
		,"shortRef":"Jour: Physics of Atomic Nuclei, Vol.63, p.1504 (2000)"}]
	}
	,{"x4pointer":" "
	,"x4codes":[{"code":"D,13883003,R.W.Lougheed+,J,RCA,90,833,2002","stdFileName":"J,RCA,90,833,2002"
		,"flag":{"code":"D", "help":" Reference to related data compiled in another entry"}
		,"subent":"13883003","author1":"R.W.Lougheed+"
		,"year":2002,"typ":"J","ref":"J,RCA","vol":"90","p":"833"
		,"shortRef":"Jour: Radiochimica Acta, Vol.90, p.833 (2002)"}]
	}
      ]
     ,"CORRECTION":[
	{"x4pointer":" "
	,"x4code":null
	,"x4freetext":["Corrections were done for"
		,"- photon absorption, including the disk shape of the"
		,"  samples and monitor foils, were calculated using"
		,"  MCNP5 simulation of the detection geometry, have"
		,"  been incorporated in the efficiency and were"
		,"  estimated to 0.2% and 1.3%, respectively."
		,"- coincidence summings of gamma-rays:"
		,"   25.4% for 27Al(n,a)  1368.6 keV"
		,"    0.3% for 27Al(n,p)   843.8 keV"
		,"   13.5% for 58Ni(n,p)   810.8 keV"
		,"    0.4% for 93Nb(n,2n)  934.4 keV"
		,"    9.9% for 56Fe(n,p)   846.8 keV"
		,"- neutron flux fluctuations (MISC1,MISC2)"
		,"- low-energy breakup neutrons (MISC3,MISC4)"]
	}
      ]
     ,"MISC-COL":[
	{"x4pointer":" "
	,"x4codes":[{"code":"MISC1"}]
	,"x4freetext":[" Flux fluctuation correction factor for Am"]
	}
	,{"x4pointer":" "
	,"x4codes":[{"code":"MISC2"}]
	,"x4freetext":[" Flux fluctuation correction factor for Al"]
	}
	,{"x4pointer":" "
	,"x4codes":[{"code":"MISC3"}]
	,"x4freetext":[" Low energy correction factor for Am"]
	}
	,{"x4pointer":" "
	,"x4codes":[{"code":"MISC4"}]
	,"x4freetext":[" Low energy correction factor for Al"]
	}
      ]
     ,"ADD-RES":[
	{"x4pointer":" "
	,"x4code":null
	,"x4freetext":["TALYS, ENDF/B-VII, JENDL-3.3 agree each other;"
		,"BROND-2.2 close to exp. data only above 18 MeV."]
	}
      ]
     ,"ERR-ANALYS":[
	{"x4pointer":" "
	,"x4code":{"header":"ERR-T", "typ":"P", "type":"partially correlated"
	     ,"headerHelp":"Total uncertainty (1-Sigma)"}
	,"x4freetext":[" Total uncertainty"]
	}
	,{"x4pointer":" "
	,"x4code":{"header":"MONIT-ERR", "typ":"P", "type":"partially correlated"
	     ,"headerHelp":"Error in normalization value"}
	,"x4freetext":[" 27Al(n,a) standard x-section (1.6-5.4%)"]
	}
	,{"x4pointer":" "
	,"x4code":{"header":"ERR-1", "typ":"U", "type":"uncorrelated"
	     ,"headerHelp":"1st partial uncertainty, defined under ERR-ANALYS"}
	,"x4freetext":[" Counting of 240Am activity       (1.4-6.3%)"]
	}
	,{"x4pointer":" "
	,"x4code":{"header":"ERR-2", "typ":"U", "type":"uncorrelated"
	     ,"headerHelp":"2nd partial uncertainty, defined under ERR-ANALYS"}
	,"x4freetext":[" Counting of 24Na activity        (0.7-2.0%)"]
	}
	,{"x4pointer":" "
	,"x4code":{"header":"ERR-3", "typ":"F", "type":"fully correlated"
	     ,"headerHelp":"3rd partial uncertainty, defined under ERR-ANALYS"}
	,"x4freetext":[" Intensity of 240Am gamma line        (1.2%)"]
	}
	,{"x4pointer":" "
	,"x4code":{"header":"ERR-4", "typ":"U", "type":"uncorrelated"
	     ,"headerHelp":"4th partial uncertainty, defined under ERR-ANALYS"}
	,"x4freetext":[" Number of 27Al in sample             (0.1%)"]
	}
	,{"x4pointer":" "
	,"x4code":{"header":"ERR-5", "typ":"P", "type":"partially correlated"
	     ,"headerHelp":"5th partial uncertainty, defined under ERR-ANALYS"}
	,"x4freetext":[" Number of 241Am in sample            (0.3%)"]
	}
	,{"x4pointer":" "
	,"x4code":{"header":"ERR-6", "typ":"F", "type":"fully correlated"
	     ,"headerHelp":"6th partial uncertainty, defined under ERR-ANALYS"}
	,"x4freetext":[" 24Na/240Am efficiency ratio          (3.0%)"]
	}
	,{"x4pointer":" "
	,"x4code":{"header":"ERR-7", "typ":"F", "type":"fully correlated"
	     ,"headerHelp":"7th partial uncertainty, defined under ERR-ANALYS"}
	,"x4freetext":[" Correction for decay of 240Am    (0.4-0.9%)"]
	}
	,{"x4pointer":" "
	,"x4code":{"header":"ERR-8", "typ":"U", "type":"uncorrelated"
	     ,"headerHelp":"8th partial uncertainty, defined under ERR-ANALYS"}
	,"x4freetext":[" Correction for secondary neutron    (<1.4%)"]
	}
      ]
     ,"COVARIANCE":[
	{"x4pointer":" "
	,"x4code":null
	,"x4freedata":[{"name": "23114002.COR:ERR-T (PER-CENT)"
	, "lx":9, "ly":9, "lz":81, "xm":1000000.0, "ym":1000000.0, "zm":0.01
	, "xunit":"MEV", "yunit":"MEV", "zunit":"PER-CENT"
	, "xname":"EN", "yname":"EN", "zname":"COR:ERR-T", "comment":"macro-correlation"
	, "xarr":[ 8.34, 9.15, 13.33, 16.1, 17.16, 17.9, 19.36, 19.95, 20.61]
	, "yarr":[ 8.34, 9.15, 13.33, 16.1, 17.16, 17.9, 19.36, 19.95, 20.61]
	, "zarr":[
	   [100.0, 35.0, 37.0, 38.0, 40.0, 41.0, 21.0, 30.0, 20.0]
	  ,[ 35.0,100.0, 42.0, 43.0, 45.0, 45.0, 24.0, 34.0, 22.0]
	  ,[ 37.0, 42.0,100.0, 53.0, 57.0, 57.0, 30.0, 44.0, 29.0]
	  ,[ 38.0, 43.0, 53.0,100.0, 58.0, 59.0, 31.0, 45.0, 30.0]
	  ,[ 40.0, 45.0, 57.0, 58.0,100.0, 84.0, 39.0, 58.0, 40.0]
	  ,[ 41.0, 45.0, 57.0, 59.0, 84.0,100.0, 39.0, 59.0, 42.0]
	  ,[ 21.0, 24.0, 30.0, 31.0, 39.0, 39.0,100.0, 51.0, 39.0]
	  ,[ 30.0, 34.0, 44.0, 45.0, 58.0, 59.0, 51.0,100.0, 65.0]
	  ,[ 20.0, 22.0, 29.0, 30.0, 40.0, 42.0, 39.0, 65.0,100.0]]}
      ,{"name": "23114002.COR:MONIT-ERR (PER-CENT)"
	, "lx":9, "ly":9, "lz":81, "xm":1000000.0, "ym":1000000.0, "zm":0.01
	, "xunit":"MEV", "yunit":"MEV", "zunit":"PER-CENT"
	, "xname":"EN", "yname":"EN", "zname":"COR:MONIT-ERR", "comment":"micro-corr.(standard)"
	, "xarr":[ 8.34, 9.15, 13.33, 16.1, 17.16, 17.9, 19.36, 19.95, 20.61]
	, "yarr":[ 8.34, 9.15, 13.33, 16.1, 17.16, 17.9, 19.36, 19.95, 20.61]
	, "zarr":[
	   [100.0, 43.0,  0.0,  0.0,  0.0,  0.0,  0.0,  0.0,  0.0]
	  ,[ 43.0,100.0,  0.0,  0.0,  0.0,  0.0,  0.0,  0.0,  0.0]
	  ,[  0.0,  0.0,100.0,  6.0,  9.0,  9.0, 11.0, 11.0, 11.0]
	  ,[  0.0,  0.0,  6.0,100.0, 12.0, 12.0, 11.0, 11.0, 11.0]
	  ,[  0.0,  0.0,  9.0, 12.0,100.0,100.0, 40.0, 40.0, 40.0]
	  ,[  0.0,  0.0,  9.0, 12.0,100.0,100.0, 40.0, 40.0, 40.0]
	  ,[  0.0,  0.0, 11.0, 11.0, 40.0, 40.0,100.0,100.0,100.0]
	  ,[  0.0,  0.0, 11.0, 11.0, 40.0, 40.0,100.0,100.0,100.0]
	  ,[  0.0,  0.0, 11.0, 11.0, 40.0, 40.0,100.0,100.0,100.0]]}
      ,{"name": "23114002.COR:ERR-5 (PER-CENT)"
	, "lx":9, "ly":9, "lz":81, "xm":1000000.0, "ym":1000000.0, "zm":0.01
	, "xunit":"MEV", "yunit":"MEV", "zunit":"PER-CENT"
	, "xname":"EN", "yname":"EN", "zname":"COR:ERR-5", "comment":"micro-corr. (sample mass)"
	, "xarr":[ 8.34, 9.15, 13.33, 16.1, 17.16, 17.9, 19.36, 19.95, 20.61]
	, "yarr":[ 8.34, 9.15, 13.33, 16.1, 17.16, 17.9, 19.36, 19.95, 20.61]
	, "zarr":[
	   [100.0,  0.0,  0.0,  0.0,  0.0,100.0,  0.0,  0.0,100.0]
	  ,[  0.0,100.0,100.0,100.0,  0.0,  0.0,  0.0,  0.0,  0.0]
	  ,[  0.0,100.0,100.0,100.0,  0.0,  0.0,  0.0,  0.0,  0.0]
	  ,[  0.0,100.0,100.0,100.0,  0.0,  0.0,  0.0,  0.0,  0.0]
	  ,[  0.0,  0.0,  0.0,  0.0,100.0,  0.0,100.0,  0.0,  0.0]
	  ,[100.0,  0.0,  0.0,  0.0,  0.0,100.0,  0.0,  0.0,100.0]
	  ,[  0.0,  0.0,  0.0,  0.0,100.0,  0.0,100.0,  0.0,  0.0]
	  ,[  0.0,  0.0,  0.0,  0.0,  0.0,  0.0,  0.0,100.0,  0.0]
	  ,[100.0,  0.0,  0.0,  0.0,  0.0,100.0,  0.0,  0.0,100.0]]}
      ]
	}
      ]
     ,"STATUS":[
	{"x4pointer":" "
	,"x4codes":[{"code":"TABLE", "dict":"STATUS", "idict":16,"hlp":"Data presented by authors"}]
	,"x4freetext":[" Table V of Phys.Rev.C81(2010)064604,"
		,"        Appendix B of Sage`s thesis (micro correlation)"]
	}
      ]
     ,"HISTORY":[
	{"x4pointer":" "
	,"x4code":{"code":"20130924A", "date":"20130924", "act":"A", "dict":"HISTORY", "idict":15
	     ,"actHelp":"Important alterations"}
	,"x4freetext":[" On. ERR-ANALYS, COVARIANCE etc."]
	}
      ]
    }
    ,"COMMON":{"ncols":4, "nrows":1
      ,"x4headers":[
       {"icol":0, "header":"ERR-3", "units":"PER-CENT", "pointer":" "
	,"headerHelp":"3rd partial uncertainty, defined under ERR-ANALYS", "pFlag":"0009550"
	,"unitsHelp":"per-cent","familyCode":"PC","convFc":1.0,"basicUnits":"PER-CENT"}
      ,{"icol":1, "header":"ERR-4", "units":"PER-CENT", "pointer":" "
	,"headerHelp":"4th partial uncertainty, defined under ERR-ANALYS", "pFlag":"0009550"
	,"unitsHelp":"per-cent","familyCode":"PC","convFc":1.0,"basicUnits":"PER-CENT"}
      ,{"icol":2, "header":"ERR-5", "units":"PER-CENT", "pointer":" "
	,"headerHelp":"5th partial uncertainty, defined under ERR-ANALYS", "pFlag":"0009550"
	,"unitsHelp":"per-cent","familyCode":"PC","convFc":1.0,"basicUnits":"PER-CENT"}
      ,{"icol":3, "header":"ERR-6", "units":"PER-CENT", "pointer":" "
	,"headerHelp":"6th partial uncertainty, defined under ERR-ANALYS", "pFlag":"0009550"
	,"unitsHelp":"per-cent","familyCode":"PC","convFc":1.0,"basicUnits":"PER-CENT"}
      ]
      ,"datacols":[
	 ["ERR-3"     ,"ERR-4"     ,"ERR-5"     ,"ERR-6"     ]
	,["PER-CENT"  ,"PER-CENT"  ,"PER-CENT"  ,"PER-CENT"  ]
	,[" "         ," "         ," "         ," "         ]]
      ,"data":[
	 [1.2         ,0.1         ,0.3         ,3           ]]}
    ,"DATA":{"ncols":13, "nrows":9
      ,"x4headers":[
       {"icol":0, "header":"EN", "units":"MEV", "pointer":" "
	,"headerHelp":"Energy of incident projectile, laboratory system", "pFlag":"1000000"
	,"unitsHelp":"MeV","familyCode":"E","convFc":1000000.0,"basicUnits":"EV"}
      ,{"icol":1, "header":"EN-ERR", "units":"MEV", "pointer":" "
	,"headerHelp":"Uncertainty in incident projectile energy", "pFlag":"9110000"
	,"unitsHelp":"MeV","familyCode":"E","convFc":1000000.0,"basicUnits":"EV"}
      ,{"icol":2, "header":"DATA", "units":"MB", "pointer":" "
	,"headerHelp":"Value of quantity specified under REACTION", "pFlag":"0001000"
	,"unitsHelp":"millibarns","familyCode":"B","convFc":0.001,"basicUnits":"B"}
      ,{"icol":3, "header":"ERR-T", "units":"PER-CENT", "pointer":" "
	,"headerHelp":"Total uncertainty (1-Sigma)", "pFlag":"0009110"
	,"unitsHelp":"per-cent","familyCode":"PC","convFc":1.0,"basicUnits":"PER-CENT"}
      ,{"icol":4, "header":"MONIT-ERR", "units":"PER-CENT", "pointer":" "
	,"headerHelp":"Error in normalization value", "pFlag":"0009550"
	,"unitsHelp":"per-cent","familyCode":"PC","convFc":1.0,"basicUnits":"PER-CENT"}
      ,{"icol":5, "header":"ERR-1", "units":"PER-CENT", "pointer":" "
	,"headerHelp":"1st partial uncertainty, defined under ERR-ANALYS", "pFlag":"0009550"
	,"unitsHelp":"per-cent","familyCode":"PC","convFc":1.0,"basicUnits":"PER-CENT"}
      ,{"icol":6, "header":"ERR-2", "units":"PER-CENT", "pointer":" "
	,"headerHelp":"2nd partial uncertainty, defined under ERR-ANALYS", "pFlag":"0009550"
	,"unitsHelp":"per-cent","familyCode":"PC","convFc":1.0,"basicUnits":"PER-CENT"}
      ,{"icol":7, "header":"ERR-7", "units":"PER-CENT", "pointer":" "
	,"headerHelp":"7th partial uncertainty, defined under ERR-ANALYS", "pFlag":"0009550"
	,"unitsHelp":"per-cent","familyCode":"PC","convFc":1.0,"basicUnits":"PER-CENT"}
      ,{"icol":8, "header":"ERR-8", "units":"PER-CENT", "pointer":" "
	,"headerHelp":"8th partial uncertainty, defined under ERR-ANALYS", "pFlag":"0009550"
	,"unitsHelp":"per-cent","familyCode":"PC","convFc":1.0,"basicUnits":"PER-CENT"}
      ,{"icol":9, "header":"MISC1", "units":"NO-DIM", "pointer":" "
	,"headerHelp":"1st miscellaneous field, defined under MISC-COL", "pFlag":"0000000"
	,"unitsHelp":"no Dimensions","familyCode":"NO","convFc":1.0,"basicUnits":"NO-DIM"}
      ,{"icol":10, "header":"MISC2", "units":"NO-DIM", "pointer":" "
	,"headerHelp":"2nd miscellaneous field, defined under MISC-COL", "pFlag":"0000000"
	,"unitsHelp":"no Dimensions","familyCode":"NO","convFc":1.0,"basicUnits":"NO-DIM"}
      ,{"icol":11, "header":"MISC3", "units":"NO-DIM", "pointer":" "
	,"headerHelp":"3rd miscellaneous field, defined under MISC-COL", "pFlag":"0000000"
	,"unitsHelp":"no Dimensions","familyCode":"NO","convFc":1.0,"basicUnits":"NO-DIM"}
      ,{"icol":12, "header":"MISC4", "units":"NO-DIM", "pointer":" "
	,"headerHelp":"4th miscellaneous field, defined under MISC-COL", "pFlag":"0000000"
	,"unitsHelp":"no Dimensions","familyCode":"NO","convFc":1.0,"basicUnits":"NO-DIM"}
      ]
      ,"datacols":[
	 ["EN"        ,"EN-ERR"    ,"DATA"      ,"ERR-T"     ,"MONIT-ERR" ,"ERR-1"     ,"ERR-2"     ,"ERR-7"     ,"ERR-8"     ,"MISC1"     ,"MISC2"     ,"MISC3"     ,"MISC4"     ]
	,["MEV"       ,"MEV"       ,"MB"        ,"PER-CENT"  ,"PER-CENT"  ,"PER-CENT"  ,"PER-CENT"  ,"PER-CENT"  ,"PER-CENT"  ,"NO-DIM"    ,"NO-DIM"    ,"NO-DIM"    ,"NO-DIM"    ]
	,[" "         ," "         ," "         ," "         ," "         ," "         ," "         ," "         ," "         ," "         ," "         ," "         ," "         ]]
      ,"data":[
	 [8.34        ,0.15        ,96.8        ,6.5         ,1.9         ,5           ,1           ,0.9         ,null        ,0.9974      ,0.9925      ,1           ,1           ]
	,[9.15        ,0.15        ,162.9       ,5.7         ,1.9         ,4           ,1           ,0.6         ,null        ,1.0731      ,1.3117      ,1           ,1           ]
	,[13.33       ,0.15        ,241.8       ,4.6         ,1.6         ,2.5         ,1           ,0.4         ,0.3         ,0.9168      ,0.8288      ,1           ,1           ]
	,[16.1        ,0.15        ,152.4       ,4.6         ,2           ,2.1         ,1           ,0.6         ,0.3         ,1.0749      ,1.2335      ,1           ,1           ]
	,[17.16       ,0.03        ,116.1       ,4.4         ,2           ,1.5         ,1           ,0.6         ,0.3         ,0.9987      ,0.9878      ,0.998       ,0.997       ]
	,[17.9        ,0.1         ,105.7       ,4.4         ,2.2         ,1.3         ,0.7         ,0.7         ,0.3         ,0.969       ,0.933       ,0.998       ,0.997       ]
	,[19.36       ,0.15        ,89.5        ,8.2         ,3.1         ,6.3         ,2           ,0.6         ,1.3         ,1.0061      ,1.0157      ,0.941       ,0.926       ]
	,[19.95       ,0.07        ,102.1       ,5.8         ,4.1         ,1.4         ,1           ,0.6         ,1.4         ,0.9822      ,0.9433      ,0.922       ,0.891       ]
	,[20.61       ,0.04        ,77.9        ,8.8         ,5.4         ,5.7         ,1.6         ,0.6         ,1.4         ,0.9938      ,0.982       ,0.885       ,0.832       ]]}
   }
  ]
 }
]

}
;
