x5z=
{"format":"x5json.0.1.4" 
 ,"now":"2024-01-25T10:28:53.503Z" 
 ,"program":"exfor2x5z, by V.Zerkin, IAEA-NDS, 2019-2023, ver.2023-08-28"
 ,"input": {"files":[ {"exfor-file":"X4R56734_x4.txt", "format":"EXFOR", "created":"2024-01-25T10:15:08.000Z" }
		     ,{"exfor-dictionaries":"x4dict/", "format":"DICT_ARC_NEW", "modified":"2023-06-28T00:00:00.000Z" }
		     ,{"archive-monitors":"monitors/", "format":"zvv-out", "modified":"2022-08-31T00:00:00.000Z" }
		     ,{"decay-data":"monitors/decay/lara2/", "format":"LARA", "modified":"2022-01-18T00:00:00.000Z" } ] }
 ,"output":{"files":[ {"x4c5.json":"X4R56734_x4.txt.x5z", "created":"2024-01-25T10:28:53.503Z" } ] }
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
      ]}
  ,"datasets":[
{"iDataset":0, "DatasetID":"10828002", "Pointer":" "
 ,"Subent":"10828002", "compiled":20171126, "x4dbVersion":"2023-12-19"
 ,"year1":1978, "author1ini":"T.C.", "author1":"Chapman"
 ,"zTarg1":92, "targ1":"U-235", "proj1":"n", "emis1":"F", "MF":801, "MT":18, "nExpectedArgs":2
 ,"IndepVarFamilyCode":"0 2    7   ", "getYFormulaStr":"y=DATA(EN,ZAM)"
 ,"ReactionType":"FY", "quant":"FY", "quantExpan":"Cumulative fission-product yield"
 ,"reacode":"92-U-235(N,F)ELEM/MASS,CUM,FY"
 ,"compNotes":[]
 ,"wx4data":9
 ,"lx4data":116
 ,"x4data":[
   {"ivar":0, "cvar":"y", "fam":"Data", "ifComm":false, "ifCM":false
    ,"header":"DATA", "units":"PC/FIS", "basicUnits":"PART/FIS"
    ,"what":"Y.Value", "dataType":"21", "rank":0.1
    ,"expansion":"Data: data"
    ,"dat0":[1.1566,2.9404,3.8215,5.3087,5.8519,5.7187,6.167,2.8137,3.1085,1.7182
	,0.2199,0.2407,0.1841,0.0143,0.804,0.8206,1.0171,4.583,6.1357,0.0489
	,6.0934,5.0263,5.0254,4.933,4.6887,2.1597,2.0934,0.5336,0.0464,1.2171
	,2.9155,4.1348,5.1876,6.1109,5.7689,5.4048,2.7391,3.1418,1.3704,0.2017
	,0.2179,0.179,0.0196,0.708,0.8323,0.9554,4.8712,6.1933,0.0457,7.2382
	,5.2981,5.134,5.0148,4.6359,4.3081,2.2044,0.3594,0.0388,1.5766,3.1106
	,3.8468,5.1757,5.8996,5.521,5.3888,2.4217,2.9589,1.3872,0.2172,0.2266
	,0.1818,0.0154,0.7529,0.6423,0.8884,4.4454,5.8901,0.0567,4.184,5.1026
	,5.3388,4.9753,4.7734,4.0963,2.0308,0.4757,0.0342,1.1444,2.9108,3.2539
	,4.8785,6.0543,5.3544,5.3552,2.6665,2.7014,1.0165,0.2917,0.3064,0.2422
	,0.0153,0.8278,0.8083,1.0443,3.9648,5.6398,0.0623,5.3987,4.709,5.5038
	,4.575,4.3895,3.6156,1.8721,0.3704,0.0381]
    ,"dat1":[0.011566,0.029404,0.038215,0.053087,0.058519,0.057187,0.06167,0.028137,0.031085,0.017182
	,0.002199,0.002407,0.001841,1.43e-4,0.00804,0.008206,0.010171,0.04583,0.061357,4.89e-4
	,0.060934,0.050263,0.050254,0.04933,0.046887,0.021597,0.020934,0.005336,4.64e-4,0.012171
	,0.029155,0.041348,0.051876,0.061109,0.057689,0.054048,0.027391,0.031418,0.013704,0.002017
	,0.002179,0.00179,1.96e-4,0.00708,0.008323,0.009554,0.048712,0.061933,4.57e-4,0.072382
	,0.052981,0.05134,0.050148,0.046359,0.043081,0.022044,0.003594,3.88e-4,0.015766,0.031106
	,0.038468,0.051757,0.058996,0.05521,0.053888,0.024217,0.029589,0.013872,0.002172,0.002266
	,0.001818,1.54e-4,0.007529,0.006423,0.008884,0.044454,0.058901,5.67e-4,0.04184,0.051026
	,0.053388,0.049753,0.047734,0.040963,0.020308,0.004757,3.42e-4,0.011444,0.029108,0.032539
	,0.048785,0.060543,0.053544,0.053552,0.026665,0.027014,0.010165,0.002917,0.003064,0.002422
	,1.53e-4,0.008278,0.008083,0.010443,0.039648,0.056398,6.23e-4,0.053987,0.04709,0.055038
	,0.04575,0.043895,0.036156,0.018721,0.003704,3.81e-4]}
  ,{"ivar":1, "cvar":"dy", "fam":"Data", "ifComm":false, "ifCM":false
    ,"header":"DATA-ERR1", "units":"PER-CENT", "basicUnits":"PER-CENT"
    ,"what":"Y.pErr+-", "dataType":"21", "rank":0.955
    ,"expansion":"Data: data /Error/"
    ,"dat0":[38.4,12.4,5.5,5.9,5.5,5.5,5.5,41.4,8.3,7.1
	,5.4,5.4,5.4,43.2,10.9,20.5,11.6,5.6,8,7.8
	,11.1,5.5,11.2,5.5,6.4,5.8,5.5,101.5,6,34.1
	,10,5.7,7.5,5.7,5.7,5.7,27.4,6.4,6,5.5
	,5.5,5.5,12.9,13.6,20.9,11.7,6.1,7.4,8.2,10.2
	,5.7,8.6,5.7,5.8,5.8,5.7,13.4,6.4,26.1,11.6
	,7.9,9.2,6.6,6.5,6.6,21.5,8,7.5,6,6.3
	,6.1,20.1,11.2,11.6,12.2,6.6,9.6,6.9,12.9,6.7
	,10.7,6.6,6.7,6.7,7.7,11.6,9,28.4,15.4,13.3
	,9.3,8.4,8.5,8.7,19.5,12.6,13.7,6.8,7.1,7
	,32.3,13.3,9.3,12.3,8.9,12.7,7.4,11.6,9.2,13.3
	,9,9.2,9.5,11.9,45.8,13.1]
   ,"dat1eq":true}
  ,{"ivar":2, "cvar":"dy", "fam":"Data", "ifComm":false, "ifCM":false
    ,"header":"DATA-ERR2", "units":"PER-CENT", "basicUnits":"PER-CENT"
    ,"what":"Y.pErr+-", "dataType":"21", "rank":0.955
    ,"expansion":"Data: data /Error/"
    ,"dat0":[44,16,7.5,9.2,7.5,9.4,7.5,46.1,9.7,10.4
	,7.4,7.4,7.4,43.8,18.7,21.7,19.1,7.6,12.9,10.5
	,13.4,7.5,19,9,10,9.3,9,102,9.7,40.3
	,14.3,7.7,10.4,7.7,9.6,7.7,34.2,8.2,9.7,7.4
	,7.5,7.5,14.7,20.5,22,19.1,8,12.7,10.8,12.8
	,7.7,17.6,9.2,9.6,9.2,9.2,16.9,9.9,34.6,16
	,9.8,12.2,8.7,10.8,8.8,31.2,9.8,11.3,7.9,8.1
	,8,21.3,19.9,13.9,20.1,8.7,14.9,10,15.7,8.8
	,20.1,10.4,11,10.5,11.1,16.1,12.1,38.1,19.6,14.9
	,12.9,10.5,12.8,10.8,31.5,14.2,17,8.5,8.8,8.7
	,33.1,22,12.2,20.7,11.1,18.1,10.4,15.1,11.3,22.9
	,12.9,13.5,13.3,14.9,47.5,15.6]
   ,"dat1eq":true}
  ,{"ivar":3, "cvar":"x1", "fam":"EN", "ifComm":false, "ifCM":false
    ,"header":"EN", "units":"MEV", "basicUnits":"EV"
    ,"what":"X1.Value", "dataType":"41", "rank":1.1
    ,"expansion":"Incident energy: energy"
    ,"dat0":[6,6,6,6,6,6,6,6,6,6
	,6,6,6,6,6,6,6,6,6,6
	,6,6,6,6,6,6,6,6,6,7.1
	,7.1,7.1,7.1,7.1,7.1,7.1,7.1,7.1,7.1,7.1
	,7.1,7.1,7.1,7.1,7.1,7.1,7.1,7.1,7.1,7.1
	,7.1,7.1,7.1,7.1,7.1,7.1,7.1,7.1,8.1,8.1
	,8.1,8.1,8.1,8.1,8.1,8.1,8.1,8.1,8.1,8.1
	,8.1,8.1,8.1,8.1,8.1,8.1,8.1,8.1,8.1,8.1
	,8.1,8.1,8.1,8.1,8.1,8.1,8.1,9.1,9.1,9.1
	,9.1,9.1,9.1,9.1,9.1,9.1,9.1,9.1,9.1,9.1
	,9.1,9.1,9.1,9.1,9.1,9.1,9.1,9.1,9.1,9.1
	,9.1,9.1,9.1,9.1,9.1,9.1]
    ,"dat1":[6.0e+6,6.0e+6,6.0e+6,6.0e+6,6.0e+6,6.0e+6,6.0e+6,6.0e+6,6.0e+6,6.0e+6
	,6.0e+6,6.0e+6,6.0e+6,6.0e+6,6.0e+6,6.0e+6,6.0e+6,6.0e+6,6.0e+6,6.0e+6
	,6.0e+6,6.0e+6,6.0e+6,6.0e+6,6.0e+6,6.0e+6,6.0e+6,6.0e+6,6.0e+6,7.1e+6
	,7.1e+6,7.1e+6,7.1e+6,7.1e+6,7.1e+6,7.1e+6,7.1e+6,7.1e+6,7.1e+6,7.1e+6
	,7.1e+6,7.1e+6,7.1e+6,7.1e+6,7.1e+6,7.1e+6,7.1e+6,7.1e+6,7.1e+6,7.1e+6
	,7.1e+6,7.1e+6,7.1e+6,7.1e+6,7.1e+6,7.1e+6,7.1e+6,7.1e+6,8.1e+6,8.1e+6
	,8.1e+6,8.1e+6,8.1e+6,8.1e+6,8.1e+6,8.1e+6,8.1e+6,8.1e+6,8.1e+6,8.1e+6
	,8.1e+6,8.1e+6,8.1e+6,8.1e+6,8.1e+6,8.1e+6,8.1e+6,8.1e+6,8.1e+6,8.1e+6
	,8.1e+6,8.1e+6,8.1e+6,8.1e+6,8.1e+6,8.1e+6,8.1e+6,9.1e+6,9.1e+6,9.1e+6
	,9.1e+6,9.1e+6,9.1e+6,9.1e+6,9.1e+6,9.1e+6,9.1e+6,9.1e+6,9.1e+6,9.1e+6
	,9.1e+6,9.1e+6,9.1e+6,9.1e+6,9.1e+6,9.1e+6,9.1e+6,9.1e+6,9.1e+6,9.1e+6
	,9.1e+6,9.1e+6,9.1e+6,9.1e+6,9.1e+6,9.1e+6]}
  ,{"ivar":4, "cvar":"dx1", "fam":"EN", "ifComm":false, "ifCM":false
    ,"header":"EN-RSL-FW", "units":"MEV", "basicUnits":"EV"
    ,"what":"X1.Resl+-", "dataType":"41", "rank":1.922
    ,"expansion":"Incident energy: energy /Error/"
    ,"dat0":[0.5,0.5,0.5,0.5,0.5,0.5,0.5,0.5,0.5,0.5
	,0.5,0.5,0.5,0.5,0.5,0.5,0.5,0.5,0.5,0.5
	,0.5,0.5,0.5,0.5,0.5,0.5,0.5,0.5,0.5,0.3
	,0.3,0.3,0.3,0.3,0.3,0.3,0.3,0.3,0.3,0.3
	,0.3,0.3,0.3,0.3,0.3,0.3,0.3,0.3,0.3,0.3
	,0.3,0.3,0.3,0.3,0.3,0.3,0.3,0.3,0.4,0.4
	,0.4,0.4,0.4,0.4,0.4,0.4,0.4,0.4,0.4,0.4
	,0.4,0.4,0.4,0.4,0.4,0.4,0.4,0.4,0.4,0.4
	,0.4,0.4,0.4,0.4,0.4,0.4,0.4,0.3,0.3,0.3
	,0.3,0.3,0.3,0.3,0.3,0.3,0.3,0.3,0.3,0.3
	,0.3,0.3,0.3,0.3,0.3,0.3,0.3,0.3,0.3,0.3
	,0.3,0.3,0.3,0.3,0.3,0.3]
    ,"dat1":[5.0e+5,5.0e+5,5.0e+5,5.0e+5,5.0e+5,5.0e+5,5.0e+5,5.0e+5,5.0e+5,5.0e+5
	,5.0e+5,5.0e+5,5.0e+5,5.0e+5,5.0e+5,5.0e+5,5.0e+5,5.0e+5,5.0e+5,5.0e+5
	,5.0e+5,5.0e+5,5.0e+5,5.0e+5,5.0e+5,5.0e+5,5.0e+5,5.0e+5,5.0e+5,3.0e+5
	,3.0e+5,3.0e+5,3.0e+5,3.0e+5,3.0e+5,3.0e+5,3.0e+5,3.0e+5,3.0e+5,3.0e+5
	,3.0e+5,3.0e+5,3.0e+5,3.0e+5,3.0e+5,3.0e+5,3.0e+5,3.0e+5,3.0e+5,3.0e+5
	,3.0e+5,3.0e+5,3.0e+5,3.0e+5,3.0e+5,3.0e+5,3.0e+5,3.0e+5,4.0e+5,4.0e+5
	,4.0e+5,4.0e+5,4.0e+5,4.0e+5,4.0e+5,4.0e+5,4.0e+5,4.0e+5,4.0e+5,4.0e+5
	,4.0e+5,4.0e+5,4.0e+5,4.0e+5,4.0e+5,4.0e+5,4.0e+5,4.0e+5,4.0e+5,4.0e+5
	,4.0e+5,4.0e+5,4.0e+5,4.0e+5,4.0e+5,4.0e+5,4.0e+5,3.0e+5,3.0e+5,3.0e+5
	,3.0e+5,3.0e+5,3.0e+5,3.0e+5,3.0e+5,3.0e+5,3.0e+5,3.0e+5,3.0e+5,3.0e+5
	,3.0e+5,3.0e+5,3.0e+5,3.0e+5,3.0e+5,3.0e+5,3.0e+5,3.0e+5,3.0e+5,3.0e+5
	,3.0e+5,3.0e+5,3.0e+5,3.0e+5,3.0e+5,3.0e+5]}
  ,{"ivar":5, "cvar":"x2", "fam":"ZAM", "ifComm":false, "ifCM":false
    ,"header":"ELEMENT", "units":"NO-DIM", "basicUnits":"NO-DIM"
    ,"what":"X2.Value", "dataType":"91", "rank":2.1
    ,"expansion":"Isotope/particle identification: element"
    ,"dat0":[35,36,38,38,40,40,42,43,44,45
	,46,47,48,48,50,51,51,52,53,55
	,55,56,57,58,58,58,60,61,63,35
	,36,38,38,40,40,42,43,44,45,46
	,47,48,48,50,51,51,52,53,55,55
	,56,57,58,58,58,60,61,63,35,36
	,38,38,40,40,42,43,44,45,46,47
	,48,48,50,51,51,52,53,55,55,56
	,57,58,58,58,60,61,63,35,36,38
	,38,40,40,42,43,44,45,46,47,48
	,48,50,51,51,52,53,55,55,56,57
	,58,58,58,60,61,63]
   ,"dat1eq":true}
  ,{"ivar":6, "cvar":"x2", "fam":"ZAM", "ifComm":false, "ifCM":false
    ,"header":"MASS", "units":"NO-DIM", "basicUnits":"NO-DIM"
    ,"what":"X2.Value", "dataType":"92", "rank":2.1
    ,"expansion":"Isotope/particle identification: mass"
    ,"dat0":[84,87,89,91,95,97,99,103,103,105
	,112,111,115,115,128,127,130,132,133,136
	,137,140,142,141,143,144,147,151,156,84
	,87,89,91,95,97,99,103,103,105,112
	,111,115,115,128,127,130,132,133,136,137
	,140,142,141,143,144,147,151,156,84,87
	,89,91,95,97,99,103,103,105,112,111
	,115,115,128,127,130,132,133,136,137,140
	,142,141,143,144,147,151,156,84,87,89
	,91,95,97,99,103,103,105,112,111,115
	,115,128,127,130,132,133,136,137,140,142
	,141,143,144,147,151,156]
   ,"dat1eq":true}
  ,{"ivar":7, "cvar":"x2", "fam":"ZAM", "ifComm":false, "ifCM":false
    ,"header":"ISOMER", "units":"NO-DIM", "basicUnits":"NO-DIM"
    ,"what":"X2.Value", "dataType":"93", "rank":2.1
    ,"expansion":"Isotope/particle identification: isomer"
    ,"dat0":[0,null,null,null,null,null,null,null,null,null
	,null,null,0,1,null,null,0,null,null,null
	,null,null,null,null,null,null,null,null,null,null
	,null,null,null,null,null,null,null,null,null,null
	,null,null,null,null,null,null,null,null,null,null
	,null,null,null,null,null,null,null,null,null,null
	,null,null,null,null,null,null,null,null,null,null
	,null,null,null,null,null,null,null,null,null,null
	,null,null,null,null,null,null,null,null,null,null
	,null,null,null,null,null,null,null,null,null,null
	,null,null,null,null,null,null,null,null,null,null
	,null,null,null,null,null,null]
   ,"dat1eq":true}
  ,{"ivar":8, "cvar":"zzz", "fam":"", "ifComm":false, "ifCM":false
    ,"header":"DECAY-FLAG", "units":"NO-DIM", "basicUnits":"NO-DIM"
    ,"what":"ZZZ", "dataType":"02", "rank":777.0
    ,"expansion":"Flags, etc.: decay flag"
    ,"dat0":[1,2,3,4,5,6,7,9,8,10
	,12,11,13,14,16,15,17,18,19,20
	,21,22,24,23,25,26,27,28,29,1
	,2,3,4,5,6,7,9,8,10,12
	,11,13,14,16,15,17,18,19,20,21
	,22,24,23,25,26,27,28,29,1,2
	,3,4,5,6,7,9,8,10,12,11
	,13,14,16,15,17,18,19,20,21,22
	,24,23,25,26,27,28,29,1,2,3
	,4,5,6,7,9,8,10,12,11,13
	,14,16,15,17,18,19,20,21,22,24
	,23,25,26,27,28,29]
   ,"dat1eq":true}
  ]
 ,"wc5data":3
 ,"lc5data":116
 ,"c5data":{
    "y":{"icvar":0, "cvar":"y", "fam":"Data", "ifCM":false, "units":"PART/FIS"
      ,"header":"DATA", "dataType":"21", "rank":0.0
      ,"expansion":"Data: data"
      ,"y":[0.011566,0.029404,0.038215,0.053087,0.058519,0.057187,0.06167,0.028137,0.031085,0.017182
	,0.002199,0.002407,0.001841,1.43e-4,0.00804,0.008206,0.010171,0.04583,0.061357,4.89e-4
	,0.060934,0.050263,0.050254,0.04933,0.046887,0.021597,0.020934,0.005336,4.64e-4,0.012171
	,0.029155,0.041348,0.051876,0.061109,0.057689,0.054048,0.027391,0.031418,0.013704,0.002017
	,0.002179,0.00179,1.96e-4,0.00708,0.008323,0.009554,0.048712,0.061933,4.57e-4,0.072382
	,0.052981,0.05134,0.050148,0.046359,0.043081,0.022044,0.003594,3.88e-4,0.015766,0.031106
	,0.038468,0.051757,0.058996,0.05521,0.053888,0.024217,0.029589,0.013872,0.002172,0.002266
	,0.001818,1.54e-4,0.007529,0.006423,0.008884,0.044454,0.058901,5.67e-4,0.04184,0.051026
	,0.053388,0.049753,0.047734,0.040963,0.020308,0.004757,3.42e-4,0.011444,0.029108,0.032539
	,0.048785,0.060543,0.053544,0.053552,0.026665,0.027014,0.010165,0.002917,0.003064,0.002422
	,1.53e-4,0.008278,0.008083,0.010443,0.039648,0.056398,6.23e-4,0.053987,0.04709,0.055038
	,0.04575,0.043895,0.036156,0.018721,0.003704,3.81e-4]
      ,"dy":[0.00675454,0.00595211,0.0035542,0.00580205,0.00544258,0.00622813,0.00573564,0.017434,0.00396842,0.00216364
	,2.01446e-4,2.205e-4,1.6865e-4,8.79732e-5,0.00174025,0.00244965,0.00227287,0.00432651,0.00931354,6.39619e-5
	,0.0106027,0.00467473,0.0110837,0.00520309,0.00556673,0.00236711,0.00220802,0.00767833,5.29224e-5,0.0064252
	,0.00508744,0.00396122,0.00665167,0.00585436,0.00644079,0.0051779,0.0120034,0.00326808,0.00156304,1.85969e-4
	,2.02659e-4,1.6648e-4,3.83329e-5,0.00174175,0.0025256,0.00213997,0.00490058,0.00910331,6.19703e-5,0.0118468
	,0.00507568,0.0100569,0.00542735,0.00519965,0.00468534,0.00238575,7.75147e-4,4.57396e-5,0.00683301,0.00614735
	,0.00484223,0.0079085,0.00644246,0.00695931,0.00592768,0.00917594,0.00374321,0.00188138,2.15466e-4,2.32527e-4
	,1.82897e-4,4.51012e-5,0.00171927,0.00116285,0.00208887,0.00485445,0.0104401,6.88876e-5,0.00850186,0.00564362
	,0.0121568,0.00612831,0.00614806,0.00510216,0.00274346,9.43962e-4,5.1574e-5,0.00543821,0.00725554,0.00649885
	,0.0077582,0.00814095,0.00822715,0.00742676,0.00987865,0.00512839,0.00221935,3.17525e-4,3.46449e-4,2.70452e-4
	,7.07598e-5,0.00212809,0.00123997,0.00251453,0.00564089,0.0124702,7.95198e-5,0.0102798,0.00686174,0.0145752
	,0.00719614,0.00717102,0.00590949,0.00356987,0.00244405,7.76128e-5]
      ,"dysys":[0.00675454,0.00595211,0.0035542,0.00580205,0.00544258,0.00622813,0.00573564,0.017434,0.00396842,0.00216364
	,2.01446e-4,2.205e-4,1.6865e-4,8.79732e-5,0.00174025,0.00244965,0.00227287,0.00432651,0.00931354,6.39619e-5
	,0.0106027,0.00467473,0.0110837,0.00520309,0.00556673,0.00236711,0.00220802,0.00767833,5.29224e-5,0.0064252
	,0.00508744,0.00396122,0.00665167,0.00585436,0.00644079,0.0051779,0.0120034,0.00326808,0.00156304,1.85969e-4
	,2.02659e-4,1.6648e-4,3.83329e-5,0.00174175,0.0025256,0.00213997,0.00490058,0.00910331,6.19703e-5,0.0118468
	,0.00507568,0.0100569,0.00542735,0.00519965,0.00468534,0.00238575,7.75147e-4,4.57396e-5,0.00683301,0.00614735
	,0.00484223,0.0079085,0.00644246,0.00695931,0.00592768,0.00917594,0.00374321,0.00188138,2.15466e-4,2.32527e-4
	,1.82897e-4,4.51012e-5,0.00171927,0.00116285,0.00208887,0.00485445,0.0104401,6.88876e-5,0.00850186,0.00564362
	,0.0121568,0.00612831,0.00614806,0.00510216,0.00274346,9.43962e-4,5.1574e-5,0.00543821,0.00725554,0.00649885
	,0.0077582,0.00814095,0.00822715,0.00742676,0.00987865,0.00512839,0.00221935,3.17525e-4,3.46449e-4,2.70452e-4
	,7.07598e-5,0.00212809,0.00123997,0.00251453,0.00564089,0.0124702,7.95198e-5,0.0102798,0.00686174,0.0145752
	,0.00719614,0.00717102,0.00590949,0.00356987,0.00244405,7.76128e-5]   }
   ,"x1":{"icvar":1, "cvar":"x1", "fam":"EN", "ifCM":false, "units":"EV"
      ,"header":"EN", "dataType":"41", "rank":1.0
      ,"expansion":"Incident energy: energy"
      ,"x1":[6.0e+6,6.0e+6,6.0e+6,6.0e+6,6.0e+6,6.0e+6,6.0e+6,6.0e+6,6.0e+6,6.0e+6
	,6.0e+6,6.0e+6,6.0e+6,6.0e+6,6.0e+6,6.0e+6,6.0e+6,6.0e+6,6.0e+6,6.0e+6
	,6.0e+6,6.0e+6,6.0e+6,6.0e+6,6.0e+6,6.0e+6,6.0e+6,6.0e+6,6.0e+6,7.1e+6
	,7.1e+6,7.1e+6,7.1e+6,7.1e+6,7.1e+6,7.1e+6,7.1e+6,7.1e+6,7.1e+6,7.1e+6
	,7.1e+6,7.1e+6,7.1e+6,7.1e+6,7.1e+6,7.1e+6,7.1e+6,7.1e+6,7.1e+6,7.1e+6
	,7.1e+6,7.1e+6,7.1e+6,7.1e+6,7.1e+6,7.1e+6,7.1e+6,7.1e+6,8.1e+6,8.1e+6
	,8.1e+6,8.1e+6,8.1e+6,8.1e+6,8.1e+6,8.1e+6,8.1e+6,8.1e+6,8.1e+6,8.1e+6
	,8.1e+6,8.1e+6,8.1e+6,8.1e+6,8.1e+6,8.1e+6,8.1e+6,8.1e+6,8.1e+6,8.1e+6
	,8.1e+6,8.1e+6,8.1e+6,8.1e+6,8.1e+6,8.1e+6,8.1e+6,9.1e+6,9.1e+6,9.1e+6
	,9.1e+6,9.1e+6,9.1e+6,9.1e+6,9.1e+6,9.1e+6,9.1e+6,9.1e+6,9.1e+6,9.1e+6
	,9.1e+6,9.1e+6,9.1e+6,9.1e+6,9.1e+6,9.1e+6,9.1e+6,9.1e+6,9.1e+6,9.1e+6
	,9.1e+6,9.1e+6,9.1e+6,9.1e+6,9.1e+6,9.1e+6]
      ,"dx1":[5.0e+5,5.0e+5,5.0e+5,5.0e+5,5.0e+5,5.0e+5,5.0e+5,5.0e+5,5.0e+5,5.0e+5
	,5.0e+5,5.0e+5,5.0e+5,5.0e+5,5.0e+5,5.0e+5,5.0e+5,5.0e+5,5.0e+5,5.0e+5
	,5.0e+5,5.0e+5,5.0e+5,5.0e+5,5.0e+5,5.0e+5,5.0e+5,5.0e+5,5.0e+5,3.0e+5
	,3.0e+5,3.0e+5,3.0e+5,3.0e+5,3.0e+5,3.0e+5,3.0e+5,3.0e+5,3.0e+5,3.0e+5
	,3.0e+5,3.0e+5,3.0e+5,3.0e+5,3.0e+5,3.0e+5,3.0e+5,3.0e+5,3.0e+5,3.0e+5
	,3.0e+5,3.0e+5,3.0e+5,3.0e+5,3.0e+5,3.0e+5,3.0e+5,3.0e+5,4.0e+5,4.0e+5
	,4.0e+5,4.0e+5,4.0e+5,4.0e+5,4.0e+5,4.0e+5,4.0e+5,4.0e+5,4.0e+5,4.0e+5
	,4.0e+5,4.0e+5,4.0e+5,4.0e+5,4.0e+5,4.0e+5,4.0e+5,4.0e+5,4.0e+5,4.0e+5
	,4.0e+5,4.0e+5,4.0e+5,4.0e+5,4.0e+5,4.0e+5,4.0e+5,3.0e+5,3.0e+5,3.0e+5
	,3.0e+5,3.0e+5,3.0e+5,3.0e+5,3.0e+5,3.0e+5,3.0e+5,3.0e+5,3.0e+5,3.0e+5
	,3.0e+5,3.0e+5,3.0e+5,3.0e+5,3.0e+5,3.0e+5,3.0e+5,3.0e+5,3.0e+5,3.0e+5
	,3.0e+5,3.0e+5,3.0e+5,3.0e+5,3.0e+5,3.0e+5]   }
   ,"x2":{"icvar":2, "cvar":"x2", "fam":"ZAM", "ifCM":false, "units":"NO-DIM"
      ,"header":"ZAM", "dataType":"91", "rank":2.0
      ,"expansion":"Isotope/particle identification: element"
      ,"x2":[35084,36087,38089,38091,40095,40097,42099,43103,44103,45105
	,46112,47111,48115,48115.1,50128,51127,51130,52132,53133,55136
	,55137,56140,57142,58141,58143,58144,60147,61151,63156,35084
	,36087,38089,38091,40095,40097,42099,43103,44103,45105,46112
	,47111,48115,48115,50128,51127,51130,52132,53133,55136,55137
	,56140,57142,58141,58143,58144,60147,61151,63156,35084,36087
	,38089,38091,40095,40097,42099,43103,44103,45105,46112,47111
	,48115,48115,50128,51127,51130,52132,53133,55136,55137,56140
	,57142,58141,58143,58144,60147,61151,63156,35084,36087,38089
	,38091,40095,40097,42099,43103,44103,45105,46112,47111,48115
	,48115,50128,51127,51130,52132,53133,55136,55137,56140,57142
	,58141,58143,58144,60147,61151,63156]
   }
 }
}
   ]
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
      ]}
  ,"datasets":[
{"iDataset":0, "DatasetID":"10828003", "Pointer":" "
 ,"Subent":"10828003", "compiled":20171126, "x4dbVersion":"2023-12-19"
 ,"year1":1978, "author1ini":"T.C.", "author1":"Chapman"
 ,"zTarg1":92, "targ1":"U-238", "proj1":"n", "emis1":"F", "MF":801, "MT":18, "nExpectedArgs":2
 ,"IndepVarFamilyCode":"0 2    7   ", "getYFormulaStr":"y=DATA(EN,ZAM)"
 ,"ReactionType":"FY", "quant":"FY", "quantExpan":"Cumulative fission-product yield"
 ,"reacode":"92-U-238(N,F)ELEM/MASS,CUM,FY"
 ,"compNotes":[]
 ,"wx4data":9
 ,"lx4data":116
 ,"x4data":[
   {"ivar":0, "cvar":"y", "fam":"Data", "ifComm":false, "ifCM":false
    ,"header":"DATA", "units":"PC/FIS", "basicUnits":"PART/FIS"
    ,"what":"Y.Value", "dataType":"21", "rank":0.1
    ,"expansion":"Data: data"
    ,"dat0":[0.7671,1.5447,2.6825,3.9198,5.1949,5.6423,6.2551,4.4748,5.2271,3.9812
	,0.1526,0.1933,0.1026,0.0216,0.4745,0.5787,0.5961,4.1981,6.1323,0.022
	,5.3644,5.3836,4.4261,4.7188,4.3329,4.3256,2.549,1.6858,0.1047,1.07
	,1.8406,2.57,4.1402,5.1907,5.5406,6.0815,4.5112,5.9156,3.4919,0.1393
	,0.1731,0.0981,0.0226,0.4416,1.0065,0.6161,4.4889,6.8391,0.0166,2.6593
	,5.3458,4.7617,4.7372,4.6913,5.0795,2.5756,0.7015,0.0773,1.1102,1.7395
	,2.6125,3.7717,4.981,5.3968,6.0623,4.5611,5.2195,3.5643,0.1688,0.1945
	,0.1229,0.0123,0.4604,0.539,0.7326,4.6621,6.7132,0.0105,3.8148,5.1455
	,4.6722,4.6197,4.7749,4.3396,2.6285,0.8208,0.077,0.8941,1.909,2.4176
	,4.02,4.9878,5.282,5.9758,4.5104,4.8741,2.6564,0.2225,0.2687,0.1687
	,0.0221,0.5671,0.5113,0.7524,4.301,6.3075,0.0172,5.3348,4.9824,4.706
	,4.405,4.3702,4.2717,2.4378,1.0407,0.0834]
    ,"dat1":[0.007671,0.015447,0.026825,0.039198,0.051949,0.056423,0.062551,0.044748,0.052271,0.039812
	,0.001526,0.001933,0.001026,2.16e-4,0.004745,0.005787,0.005961,0.041981,0.061323,2.2e-4
	,0.053644,0.053836,0.044261,0.047188,0.043329,0.043256,0.02549,0.016858,0.001047,0.0107
	,0.018406,0.0257,0.041402,0.051907,0.055406,0.060815,0.045112,0.059156,0.034919,0.001393
	,0.001731,9.81e-4,2.26e-4,0.004416,0.010065,0.006161,0.044889,0.068391,1.66e-4,0.026593
	,0.053458,0.047617,0.047372,0.046913,0.050795,0.025756,0.007015,7.73e-4,0.011102,0.017395
	,0.026125,0.037717,0.04981,0.053968,0.060623,0.045611,0.052195,0.035643,0.001688,0.001945
	,0.001229,1.23e-4,0.004604,0.00539,0.007326,0.046621,0.067132,1.05e-4,0.038148,0.051455
	,0.046722,0.046197,0.047749,0.043396,0.026285,0.008208,7.7e-4,0.008941,0.01909,0.024176
	,0.0402,0.049878,0.05282,0.059758,0.045104,0.048741,0.026564,0.002225,0.002687,0.001687
	,2.21e-4,0.005671,0.005113,0.007524,0.04301,0.063075,1.72e-4,0.053348,0.049824,0.04706
	,0.04405,0.043702,0.042717,0.024378,0.010407,8.34e-4]}
  ,{"ivar":1, "cvar":"dy", "fam":"Data", "ifComm":false, "ifCM":false
    ,"header":"DATA-ERR1", "units":"PER-CENT", "basicUnits":"PER-CENT"
    ,"what":"Y.pErr+-", "dataType":"21", "rank":0.955
    ,"expansion":"Data: data /Error/"
    ,"dat0":[51.2,21.1,5.4,5.9,5.4,5.4,5.4,28,5.9,6.8
	,6.1,5.4,5.4,39,26.1,50.3,21.7,5.7,11.4,60.9
	,15.1,5.4,12.1,5.4,8.7,5.6,5.4,45,5.6,34.3
	,12,5.5,6,5.5,5.5,5.5,15.9,6.8,6.8,5.7
	,5.5,5.8,31.4,12.1,50.3,14.4,5.7,8.7,32.2,44.5
	,5.5,9.6,5.5,6,5.8,5.5,27.9,6.2,33,15
	,6.4,6.6,6,5.9,5.9,16.3,7.3,7.4,6.9,6.9
	,6,32.3,12.9,51.1,11.6,5.9,9.9,27.8,18.4,6
	,33.9,5.9,5.9,6,6.4,13.5,11.8,31.8,18.3,9.1
	,7.8,7.3,7.3,7.2,12.6,10.5,11.9,8.5,8.3,6.8
	,32.4,15.2,17.1,15.7,7.3,10.9,97.2,16.7,7.6,11.6
	,7.3,7.4,7.3,8.9,55,14.1]
   ,"dat1eq":true}
  ,{"ivar":2, "cvar":"dy", "fam":"Data", "ifComm":false, "ifCM":false
    ,"header":"DATA-ERR2", "units":"PER-CENT", "basicUnits":"PER-CENT"
    ,"what":"Y.pErr+-", "dataType":"21", "rank":0.955
    ,"expansion":"Data: data /Error/"
    ,"dat0":[55.5,23.4,7.4,9.2,7.4,9.3,7.4,34.5,7.8,10.2
	,7.9,7.4,7.4,39.6,30.2,50.8,26.4,7.6,15.2,61.3
	,16.9,7.4,19.4,8.9,11.6,9,8.9,46.1,9.4,40.3
	,15.7,7.5,9.3,7.5,9.4,7.5,25.9,8.5,10.2,7.6
	,7.4,7.7,32.1,19.5,50.8,20.8,7.6,13.4,33,45.2
	,7.5,18,9,9.7,9.1,9,29.7,9.8,39.8,18.5
	,8.4,10,8.1,10.1,8,27.4,9.2,10.9,8.6,8.6
	,7.9,33.1,20.9,51.6,19.3,8.1,14.6,28.7,20.2,8.2
	,37.6,9.7,10.1,9.7,9.9,17.3,14.3,39.9,21.7,10.9
	,11.2,9.4,11.5,9.3,27.3,12.1,14.9,10,9.9,8.5
	,33.1,23,18.5,22.2,9.5,16,97.5,18.9,9.7,21.2
	,11.2,11.6,11.1,12.2,56.2,16.5]
   ,"dat1eq":true}
  ,{"ivar":3, "cvar":"x1", "fam":"EN", "ifComm":false, "ifCM":false
    ,"header":"EN", "units":"MEV", "basicUnits":"EV"
    ,"what":"X1.Value", "dataType":"41", "rank":1.1
    ,"expansion":"Incident energy: energy"
    ,"dat0":[6,6,6,6,6,6,6,6,6,6
	,6,6,6,6,6,6,6,6,6,6
	,6,6,6,6,6,6,6,6,6,7.1
	,7.1,7.1,7.1,7.1,7.1,7.1,7.1,7.1,7.1,7.1
	,7.1,7.1,7.1,7.1,7.1,7.1,7.1,7.1,7.1,7.1
	,7.1,7.1,7.1,7.1,7.1,7.1,7.1,7.1,8.1,8.1
	,8.1,8.1,8.1,8.1,8.1,8.1,8.1,8.1,8.1,8.1
	,8.1,8.1,8.1,8.1,8.1,8.1,8.1,8.1,8.1,8.1
	,8.1,8.1,8.1,8.1,8.1,8.1,8.1,9.1,9.1,9.1
	,9.1,9.1,9.1,9.1,9.1,9.1,9.1,9.1,9.1,9.1
	,9.1,9.1,9.1,9.1,9.1,9.1,9.1,9.1,9.1,9.1
	,9.1,9.1,9.1,9.1,9.1,9.1]
    ,"dat1":[6.0e+6,6.0e+6,6.0e+6,6.0e+6,6.0e+6,6.0e+6,6.0e+6,6.0e+6,6.0e+6,6.0e+6
	,6.0e+6,6.0e+6,6.0e+6,6.0e+6,6.0e+6,6.0e+6,6.0e+6,6.0e+6,6.0e+6,6.0e+6
	,6.0e+6,6.0e+6,6.0e+6,6.0e+6,6.0e+6,6.0e+6,6.0e+6,6.0e+6,6.0e+6,7.1e+6
	,7.1e+6,7.1e+6,7.1e+6,7.1e+6,7.1e+6,7.1e+6,7.1e+6,7.1e+6,7.1e+6,7.1e+6
	,7.1e+6,7.1e+6,7.1e+6,7.1e+6,7.1e+6,7.1e+6,7.1e+6,7.1e+6,7.1e+6,7.1e+6
	,7.1e+6,7.1e+6,7.1e+6,7.1e+6,7.1e+6,7.1e+6,7.1e+6,7.1e+6,8.1e+6,8.1e+6
	,8.1e+6,8.1e+6,8.1e+6,8.1e+6,8.1e+6,8.1e+6,8.1e+6,8.1e+6,8.1e+6,8.1e+6
	,8.1e+6,8.1e+6,8.1e+6,8.1e+6,8.1e+6,8.1e+6,8.1e+6,8.1e+6,8.1e+6,8.1e+6
	,8.1e+6,8.1e+6,8.1e+6,8.1e+6,8.1e+6,8.1e+6,8.1e+6,9.1e+6,9.1e+6,9.1e+6
	,9.1e+6,9.1e+6,9.1e+6,9.1e+6,9.1e+6,9.1e+6,9.1e+6,9.1e+6,9.1e+6,9.1e+6
	,9.1e+6,9.1e+6,9.1e+6,9.1e+6,9.1e+6,9.1e+6,9.1e+6,9.1e+6,9.1e+6,9.1e+6
	,9.1e+6,9.1e+6,9.1e+6,9.1e+6,9.1e+6,9.1e+6]}
  ,{"ivar":4, "cvar":"dx1", "fam":"EN", "ifComm":false, "ifCM":false
    ,"header":"EN-RSL-FW", "units":"MEV", "basicUnits":"EV"
    ,"what":"X1.Resl+-", "dataType":"41", "rank":1.922
    ,"expansion":"Incident energy: energy /Error/"
    ,"dat0":[0.5,0.5,0.5,0.5,0.5,0.5,0.5,0.5,0.5,0.5
	,0.5,0.5,0.5,0.5,0.5,0.5,0.5,0.5,0.5,0.5
	,0.5,0.5,0.5,0.5,0.5,0.5,0.5,0.5,0.5,0.3
	,0.3,0.3,0.3,0.3,0.3,0.3,0.3,0.3,0.3,0.3
	,0.3,0.3,0.3,0.3,0.3,0.3,0.3,0.3,0.3,0.3
	,0.3,0.3,0.3,0.3,0.3,0.3,0.3,0.3,0.4,0.4
	,0.4,0.4,0.4,0.4,0.4,0.4,0.4,0.4,0.4,0.4
	,0.4,0.4,0.4,0.4,0.4,0.4,0.4,0.4,0.4,0.4
	,0.4,0.4,0.4,0.4,0.4,0.4,0.4,0.3,0.3,0.3
	,0.3,0.3,0.3,0.3,0.3,0.3,0.3,0.3,0.3,0.3
	,0.3,0.3,0.3,0.3,0.3,0.3,0.3,0.3,0.3,0.3
	,0.3,0.3,0.3,0.3,0.3,0.3]
    ,"dat1":[5.0e+5,5.0e+5,5.0e+5,5.0e+5,5.0e+5,5.0e+5,5.0e+5,5.0e+5,5.0e+5,5.0e+5
	,5.0e+5,5.0e+5,5.0e+5,5.0e+5,5.0e+5,5.0e+5,5.0e+5,5.0e+5,5.0e+5,5.0e+5
	,5.0e+5,5.0e+5,5.0e+5,5.0e+5,5.0e+5,5.0e+5,5.0e+5,5.0e+5,5.0e+5,3.0e+5
	,3.0e+5,3.0e+5,3.0e+5,3.0e+5,3.0e+5,3.0e+5,3.0e+5,3.0e+5,3.0e+5,3.0e+5
	,3.0e+5,3.0e+5,3.0e+5,3.0e+5,3.0e+5,3.0e+5,3.0e+5,3.0e+5,3.0e+5,3.0e+5
	,3.0e+5,3.0e+5,3.0e+5,3.0e+5,3.0e+5,3.0e+5,3.0e+5,3.0e+5,4.0e+5,4.0e+5
	,4.0e+5,4.0e+5,4.0e+5,4.0e+5,4.0e+5,4.0e+5,4.0e+5,4.0e+5,4.0e+5,4.0e+5
	,4.0e+5,4.0e+5,4.0e+5,4.0e+5,4.0e+5,4.0e+5,4.0e+5,4.0e+5,4.0e+5,4.0e+5
	,4.0e+5,4.0e+5,4.0e+5,4.0e+5,4.0e+5,4.0e+5,4.0e+5,3.0e+5,3.0e+5,3.0e+5
	,3.0e+5,3.0e+5,3.0e+5,3.0e+5,3.0e+5,3.0e+5,3.0e+5,3.0e+5,3.0e+5,3.0e+5
	,3.0e+5,3.0e+5,3.0e+5,3.0e+5,3.0e+5,3.0e+5,3.0e+5,3.0e+5,3.0e+5,3.0e+5
	,3.0e+5,3.0e+5,3.0e+5,3.0e+5,3.0e+5,3.0e+5]}
  ,{"ivar":5, "cvar":"x2", "fam":"ZAM", "ifComm":false, "ifCM":false
    ,"header":"ELEMENT", "units":"NO-DIM", "basicUnits":"NO-DIM"
    ,"what":"X2.Value", "dataType":"91", "rank":2.1
    ,"expansion":"Isotope/particle identification: element"
    ,"dat0":[35,36,38,38,40,40,42,43,44,45
	,46,47,48,48,50,51,51,52,53,55
	,55,56,57,58,58,58,60,61,63,35
	,36,38,38,40,40,42,43,44,45,46
	,47,48,48,50,51,51,52,53,55,55
	,56,57,58,58,58,60,61,63,35,36
	,38,38,40,40,42,43,44,45,46,47
	,48,48,50,51,51,52,53,55,55,56
	,57,58,58,58,60,61,63,35,36,38
	,38,40,40,42,43,44,45,46,47,48
	,48,50,51,51,52,53,55,55,56,57
	,58,58,58,60,61,63]
   ,"dat1eq":true}
  ,{"ivar":6, "cvar":"x2", "fam":"ZAM", "ifComm":false, "ifCM":false
    ,"header":"MASS", "units":"NO-DIM", "basicUnits":"NO-DIM"
    ,"what":"X2.Value", "dataType":"92", "rank":2.1
    ,"expansion":"Isotope/particle identification: mass"
    ,"dat0":[84,87,89,91,95,97,99,104,103,105
	,112,111,115,115,128,127,130,132,133,136
	,137,140,142,141,143,144,147,151,156,84
	,87,89,91,95,97,99,104,103,105,112
	,111,115,115,128,127,130,132,133,136,137
	,140,142,141,143,144,147,151,156,84,87
	,89,91,95,97,99,104,103,105,112,111
	,115,115,128,127,130,132,133,136,137,140
	,142,141,143,144,147,151,156,84,87,89
	,91,95,97,99,104,103,105,112,111,115
	,115,128,127,130,132,133,136,137,140,142
	,141,143,144,147,151,156]
   ,"dat1eq":true}
  ,{"ivar":7, "cvar":"x2", "fam":"ZAM", "ifComm":false, "ifCM":false
    ,"header":"ISOMER", "units":"NO-DIM", "basicUnits":"NO-DIM"
    ,"what":"X2.Value", "dataType":"93", "rank":2.1
    ,"expansion":"Isotope/particle identification: isomer"
    ,"dat0":[0,null,null,null,null,null,null,null,null,null
	,null,null,0,1,null,null,0,null,null,null
	,null,null,null,null,null,null,null,null,null,null
	,null,null,null,null,null,null,null,null,null,null
	,null,null,null,null,null,null,null,null,null,null
	,null,null,null,null,null,null,null,null,null,null
	,null,null,null,null,null,null,null,null,null,null
	,null,null,null,null,null,null,null,null,null,null
	,null,null,null,null,null,null,null,null,null,null
	,null,null,null,null,null,null,null,null,null,null
	,null,null,null,null,null,null,null,null,null,null
	,null,null,null,null,null,null]
   ,"dat1eq":true}
  ,{"ivar":8, "cvar":"zzz", "fam":"", "ifComm":false, "ifCM":false
    ,"header":"DECAY-FLAG", "units":"NO-DIM", "basicUnits":"NO-DIM"
    ,"what":"ZZZ", "dataType":"02", "rank":777.0
    ,"expansion":"Flags, etc.: decay flag"
    ,"dat0":[1,2,3,4,5,6,7,9,8,10
	,12,11,13,14,16,15,17,18,19,20
	,21,22,24,23,25,26,27,28,29,1
	,2,3,4,5,6,7,9,8,10,12
	,11,13,14,16,15,17,18,19,20,21
	,22,24,23,25,26,27,28,29,1,2
	,3,4,5,6,7,9,8,10,12,11
	,13,14,16,15,17,18,19,20,21,22
	,24,23,25,26,27,28,29,1,2,3
	,4,5,6,7,9,8,10,12,11,13
	,14,16,15,17,18,19,20,21,22,24
	,23,25,26,27,28,29]
   ,"dat1eq":true}
  ]
 ,"wc5data":3
 ,"lc5data":116
 ,"c5data":{
    "y":{"icvar":0, "cvar":"y", "fam":"Data", "ifCM":false, "units":"PART/FIS"
      ,"header":"DATA", "dataType":"21", "rank":0.0
      ,"expansion":"Data: data"
      ,"y":[0.007671,0.015447,0.026825,0.039198,0.051949,0.056423,0.062551,0.044748,0.052271,0.039812
	,0.001526,0.001933,0.001026,2.16e-4,0.004745,0.005787,0.005961,0.041981,0.061323,2.2e-4
	,0.053644,0.053836,0.044261,0.047188,0.043329,0.043256,0.02549,0.016858,0.001047,0.0107
	,0.018406,0.0257,0.041402,0.051907,0.055406,0.060815,0.045112,0.059156,0.034919,0.001393
	,0.001731,9.81e-4,2.26e-4,0.004416,0.010065,0.006161,0.044889,0.068391,1.66e-4,0.026593
	,0.053458,0.047617,0.047372,0.046913,0.050795,0.025756,0.007015,7.73e-4,0.011102,0.017395
	,0.026125,0.037717,0.04981,0.053968,0.060623,0.045611,0.052195,0.035643,0.001688,0.001945
	,0.001229,1.23e-4,0.004604,0.00539,0.007326,0.046621,0.067132,1.05e-4,0.038148,0.051455
	,0.046722,0.046197,0.047749,0.043396,0.026285,0.008208,7.7e-4,0.008941,0.01909,0.024176
	,0.0402,0.049878,0.05282,0.059758,0.045104,0.048741,0.026564,0.002225,0.002687,0.001687
	,2.21e-4,0.005671,0.005113,0.007524,0.04301,0.063075,1.72e-4,0.053348,0.049824,0.04706
	,0.04405,0.043702,0.042717,0.024378,0.010407,8.34e-4]
      ,"dy":[0.00579234,0.00486708,0.00245738,0.00428407,0.00475894,0.00606777,0.00573016,0.0198827,0.00511215,0.0048805
	,1.5231e-4,1.77078e-4,9.39897e-5,1.20053e-4,0.00189399,0.00413709,0.0020371,0.00398819,0.0116514,1.901e-4
	,0.0121574,0.0049318,0.0101199,0.00491231,0.0062827,0.00458514,0.00265353,0.0108603,1.14559e-4,0.00566249
	,0.00363718,0.00239024,0.00458218,0.00482763,0.00603417,0.00565612,0.01371,0.00643931,0.00428068,1.32335e-4
	,1.596e-4,9.45686e-5,1.01483e-4,0.00101343,0.00719541,0.00155862,0.00426446,0.0109265,7.65373e-5,0.0168678
	,0.00497188,0.00971387,0.00499657,0.00535076,0.00548139,0.00271662,0.00285856,8.96413e-5,0.0057399,0.00414297
	,0.00275888,0.00451912,0.00502094,0.00631264,0.00602612,0.0145416,0.00612997,0.00469582,1.86117e-4,2.14453e-4
	,1.21919e-4,5.68853e-5,0.00113077,0.00391426,0.00164965,0.00467188,0.0118421,4.19544e-5,0.0104236,0.00522819
	,0.0236534,0.00524494,0.0055852,0.00494962,0.00309862,0.00180117,1.42758e-4,0.00456188,0.00541894,0.00343282
	,0.00548667,0.00593632,0.00719477,0.00702836,0.0135616,0.00780861,0.00506544,2.92018e-4,3.47133e-4,1.83635e-4
	,1.02363e-4,0.00156343,0.00128809,0.00204582,0.00515295,0.0122113,2.36799e-4,0.0134549,0.00613968,0.0113726
	,0.00588904,0.00601312,0.00567509,0.0036814,0.00818353,1.81011e-4]
      ,"dysys":[0.00579234,0.00486708,0.00245738,0.00428407,0.00475894,0.00606777,0.00573016,0.0198827,0.00511215,0.0048805
	,1.5231e-4,1.77078e-4,9.39897e-5,1.20053e-4,0.00189399,0.00413709,0.0020371,0.00398819,0.0116514,1.901e-4
	,0.0121574,0.0049318,0.0101199,0.00491231,0.0062827,0.00458514,0.00265353,0.0108603,1.14559e-4,0.00566249
	,0.00363718,0.00239024,0.00458218,0.00482763,0.00603417,0.00565612,0.01371,0.00643931,0.00428068,1.32335e-4
	,1.596e-4,9.45686e-5,1.01483e-4,0.00101343,0.00719541,0.00155862,0.00426446,0.0109265,7.65373e-5,0.0168678
	,0.00497188,0.00971387,0.00499657,0.00535076,0.00548139,0.00271662,0.00285856,8.96413e-5,0.0057399,0.00414297
	,0.00275888,0.00451912,0.00502094,0.00631264,0.00602612,0.0145416,0.00612997,0.00469582,1.86117e-4,2.14453e-4
	,1.21919e-4,5.68853e-5,0.00113077,0.00391426,0.00164965,0.00467188,0.0118421,4.19544e-5,0.0104236,0.00522819
	,0.0236534,0.00524494,0.0055852,0.00494962,0.00309862,0.00180117,1.42758e-4,0.00456188,0.00541894,0.00343282
	,0.00548667,0.00593632,0.00719477,0.00702836,0.0135616,0.00780861,0.00506544,2.92018e-4,3.47133e-4,1.83635e-4
	,1.02363e-4,0.00156343,0.00128809,0.00204582,0.00515295,0.0122113,2.36799e-4,0.0134549,0.00613968,0.0113726
	,0.00588904,0.00601312,0.00567509,0.0036814,0.00818353,1.81011e-4]   }
   ,"x1":{"icvar":1, "cvar":"x1", "fam":"EN", "ifCM":false, "units":"EV"
      ,"header":"EN", "dataType":"41", "rank":1.0
      ,"expansion":"Incident energy: energy"
      ,"x1":[6.0e+6,6.0e+6,6.0e+6,6.0e+6,6.0e+6,6.0e+6,6.0e+6,6.0e+6,6.0e+6,6.0e+6
	,6.0e+6,6.0e+6,6.0e+6,6.0e+6,6.0e+6,6.0e+6,6.0e+6,6.0e+6,6.0e+6,6.0e+6
	,6.0e+6,6.0e+6,6.0e+6,6.0e+6,6.0e+6,6.0e+6,6.0e+6,6.0e+6,6.0e+6,7.1e+6
	,7.1e+6,7.1e+6,7.1e+6,7.1e+6,7.1e+6,7.1e+6,7.1e+6,7.1e+6,7.1e+6,7.1e+6
	,7.1e+6,7.1e+6,7.1e+6,7.1e+6,7.1e+6,7.1e+6,7.1e+6,7.1e+6,7.1e+6,7.1e+6
	,7.1e+6,7.1e+6,7.1e+6,7.1e+6,7.1e+6,7.1e+6,7.1e+6,7.1e+6,8.1e+6,8.1e+6
	,8.1e+6,8.1e+6,8.1e+6,8.1e+6,8.1e+6,8.1e+6,8.1e+6,8.1e+6,8.1e+6,8.1e+6
	,8.1e+6,8.1e+6,8.1e+6,8.1e+6,8.1e+6,8.1e+6,8.1e+6,8.1e+6,8.1e+6,8.1e+6
	,8.1e+6,8.1e+6,8.1e+6,8.1e+6,8.1e+6,8.1e+6,8.1e+6,9.1e+6,9.1e+6,9.1e+6
	,9.1e+6,9.1e+6,9.1e+6,9.1e+6,9.1e+6,9.1e+6,9.1e+6,9.1e+6,9.1e+6,9.1e+6
	,9.1e+6,9.1e+6,9.1e+6,9.1e+6,9.1e+6,9.1e+6,9.1e+6,9.1e+6,9.1e+6,9.1e+6
	,9.1e+6,9.1e+6,9.1e+6,9.1e+6,9.1e+6,9.1e+6]
      ,"dx1":[5.0e+5,5.0e+5,5.0e+5,5.0e+5,5.0e+5,5.0e+5,5.0e+5,5.0e+5,5.0e+5,5.0e+5
	,5.0e+5,5.0e+5,5.0e+5,5.0e+5,5.0e+5,5.0e+5,5.0e+5,5.0e+5,5.0e+5,5.0e+5
	,5.0e+5,5.0e+5,5.0e+5,5.0e+5,5.0e+5,5.0e+5,5.0e+5,5.0e+5,5.0e+5,3.0e+5
	,3.0e+5,3.0e+5,3.0e+5,3.0e+5,3.0e+5,3.0e+5,3.0e+5,3.0e+5,3.0e+5,3.0e+5
	,3.0e+5,3.0e+5,3.0e+5,3.0e+5,3.0e+5,3.0e+5,3.0e+5,3.0e+5,3.0e+5,3.0e+5
	,3.0e+5,3.0e+5,3.0e+5,3.0e+5,3.0e+5,3.0e+5,3.0e+5,3.0e+5,4.0e+5,4.0e+5
	,4.0e+5,4.0e+5,4.0e+5,4.0e+5,4.0e+5,4.0e+5,4.0e+5,4.0e+5,4.0e+5,4.0e+5
	,4.0e+5,4.0e+5,4.0e+5,4.0e+5,4.0e+5,4.0e+5,4.0e+5,4.0e+5,4.0e+5,4.0e+5
	,4.0e+5,4.0e+5,4.0e+5,4.0e+5,4.0e+5,4.0e+5,4.0e+5,3.0e+5,3.0e+5,3.0e+5
	,3.0e+5,3.0e+5,3.0e+5,3.0e+5,3.0e+5,3.0e+5,3.0e+5,3.0e+5,3.0e+5,3.0e+5
	,3.0e+5,3.0e+5,3.0e+5,3.0e+5,3.0e+5,3.0e+5,3.0e+5,3.0e+5,3.0e+5,3.0e+5
	,3.0e+5,3.0e+5,3.0e+5,3.0e+5,3.0e+5,3.0e+5]   }
   ,"x2":{"icvar":2, "cvar":"x2", "fam":"ZAM", "ifCM":false, "units":"NO-DIM"
      ,"header":"ZAM", "dataType":"91", "rank":2.0
      ,"expansion":"Isotope/particle identification: element"
      ,"x2":[35084,36087,38089,38091,40095,40097,42099,43104,44103,45105
	,46112,47111,48115,48115.1,50128,51127,51130,52132,53133,55136
	,55137,56140,57142,58141,58143,58144,60147,61151,63156,35084
	,36087,38089,38091,40095,40097,42099,43104,44103,45105,46112
	,47111,48115,48115,50128,51127,51130,52132,53133,55136,55137
	,56140,57142,58141,58143,58144,60147,61151,63156,35084,36087
	,38089,38091,40095,40097,42099,43104,44103,45105,46112,47111
	,48115,48115,50128,51127,51130,52132,53133,55136,55137,56140
	,57142,58141,58143,58144,60147,61151,63156,35084,36087,38089
	,38091,40095,40097,42099,43104,44103,45105,46112,47111,48115
	,48115,50128,51127,51130,52132,53133,55136,55137,56140,57142
	,58141,58143,58144,60147,61151,63156]
   }
 }
}
   ]
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
      ]}
  ,"datasets":[
{"iDataset":0, "DatasetID":"13597002", "Pointer":" "
 ,"Subent":"13597002", "compiled":19950217, "x4dbVersion":"2023-12-19"
 ,"year1":1995, "author1ini":"S.K.", "author1":"Ghorai"
 ,"zTarg1":30, "targ1":"Zn-64", "proj1":"n", "emis1":"P", "MF":3, "MT":103, "nExpectedArgs":1
 ,"IndepVarFamilyCode":"0 2        ", "getYFormulaStr":"y=DATA(EN)"
 ,"ReactionType":"CS", "quant":"CS", "quantExpan":"Cross section"
 ,"reacode":"30-ZN-64(N,P)29-CU-64,,SIG"
 ,"compNotes":["RECALCULATED COLUMN:MONIT-ERR,B  TO:PER-CENT:L=4"]
 ,"DECAY-DATA":{"Nuclide":"29-CU-64","HalfLife":"12.7HR","HalfLife1":""
	,"RadiationType":"AR","Ene":511.0,"Ene1":511.0,"Abu":0.386,"Abu1":0.352
	,"FcCorrDECAY_DATA":1.0965909
	,"reaction":"30-ZN-64(N,P)29-CU-64,,SIG"}
 ,"autoCorrNotes":[" #[0]#---Monitor xs-data"
	," #[0]#Reaction: 30-ZN-64(N,P)29-CU-64,,SIG"
	," #[0]#Monitor:  13-AL-27(N,A)11-NA-24,,SIG"
	," m0: [EN,MONIT,MONIT-ERR];     #[0]#old monitor(energy)"
	," m1: recom$al27na;             #[0]#new monitor(energy)"
	," dy=dy/y;                      #to rel. uncertainties"
	," y=y/m0*m1;                    #[0]#renormalizing CS"
	," dy=(dy**2-dm0**2+dm1**2)**0.5; #[0]#replace monitor uncertainties"
	,"  #[1]#---Reaction decay-data"
	,"  #[1]#REACTION   (30-ZN-64(N,P)29-CU-64,,SIG)"
	,"  #[1]#DECAY-DATA (29-CU-64,12.7HR,AR,511.,0.386) #Ix_old=0.386"
	,"   a1=0.386/0.352;             #[1]#DECAY-DATA: correction to new 511 keV gamma-yield per decay Cu-64 Ix_new=0.352"
	,"   y=y*a1;                     #[1]#Renorm.factor: a1=1.0965909"
	," dy=dy*y;                      #to abs. uncertainties"]
 ,"wx4data":6
 ,"lx4data":4
 ,"x4data":[
   {"ivar":0, "cvar":"y", "fam":"Data", "ifComm":false, "ifCM":false
    ,"header":"DATA", "units":"MB", "basicUnits":"B"
    ,"what":"Y.Value", "dataType":"21", "rank":0.1
    ,"expansion":"Data: data"
    ,"dat0":[180,152,116,122]
    ,"dat1":[0.18,0.152,0.116,0.122]}
  ,{"ivar":1, "cvar":"dy", "fam":"Data", "ifComm":false, "ifCM":false
    ,"header":"DATA-ERR", "units":"MB", "basicUnits":"B"
    ,"what":"Y.Err+-", "dataType":"21", "rank":0.911
    ,"expansion":"Data: data /Error/"
    ,"dat0":[10,9,6,8]
    ,"dat1":[0.01,0.009,0.006,0.008]}
  ,{"ivar":2, "cvar":"dy", "fam":"Data", "ifComm":false, "ifCM":false
    ,"header":"MONIT-ERR", "units":"MB", "basicUnits":"B"
    ,"what":"Y.pErr+-", "dataType":"21", "rank":0.955
    ,"expansion":"Data: data /Error/"
    ,"dat0":[0.65,1.96,1.75,1.41]
    ,"dat1":[6.5e-4,0.00196,0.00175,0.00141]}
  ,{"ivar":3, "cvar":"x1", "fam":"EN", "ifComm":false, "ifCM":false
    ,"header":"EN", "units":"MEV", "basicUnits":"EV"
    ,"what":"X1.Value", "dataType":"41", "rank":1.1
    ,"expansion":"Incident energy: energy"
    ,"dat0":[14.2,15.2,16.2,17.2]
    ,"dat1":[1.42e+7,1.52e+7,1.62e+7,1.72e+7]}
  ,{"ivar":4, "cvar":"dx1", "fam":"EN", "ifComm":true , "ifCM":false
    ,"header":"EN-RSL", "units":"MEV", "basicUnits":"EV"
    ,"what":"X1.Resl+-", "dataType":"41", "rank":1.922
    ,"expansion":"Incident energy: energy /Error/"
    ,"com0":0.2
    ,"com1":2.0e+5}
  ,{"ivar":5, "cvar":"zzz", "fam":"", "ifComm":false, "ifCM":false
    ,"header":"MONIT", "units":"MB", "basicUnits":"B"
    ,"what":"ZZZ", "dataType":"11", "rank":777.0
    ,"expansion":"Assumed values: monitor"
    ,"dat0":[122,108,90,72]
    ,"dat1":[0.122,0.108,0.09,0.072]}
  ]
 ,"wc5data":2
 ,"lc5data":4
 ,"c5data":{
    "y":{"icvar":0, "cvar":"y", "fam":"Data", "ifCM":false, "units":"B"
      ,"header":"DATA", "dataType":"21", "rank":0.0
      ,"expansion":"Data: data"
      ,"y":[0.18,0.152,0.116,0.122]
      ,"dy":[0.01,0.009,0.006,0.008]
      ,"dysys":[9.54e-4,0.0027512,0.0022504,0.0023912]   }
   ,"x1":{"icvar":1, "cvar":"x1", "fam":"EN", "ifCM":false, "units":"EV"
      ,"header":"EN", "dataType":"41", "rank":1.0
      ,"expansion":"Incident energy: energy"
      ,"x1":[1.42e+7,1.52e+7,1.62e+7,1.72e+7]
      ,"dx1":[2.0e+5,2.0e+5,2.0e+5,2.0e+5]   }
 }
 ,"c5mon":{"m0ref":"[EN,MONIT,MONIT-ERR]/al27na", "m1ref":"recom/al27na"
      ,"enNorm":[1.42e+7,1.52e+7,1.62e+7,1.72e+7]
      ,"m0":[0.122,0.108,0.09,0.072]
      ,"m1":[0.11962,0.105011,0.089254,0.0731812]
      ,"dm0":[6.5e-4,0.00196,0.00175,0.00141]
      ,"dm1":[5.27832e-4,5.31218e-4,6.517e-4,6.14784e-4]
      ,"Fc0":[0.980492,0.972325,0.991711,1.01641] }
}
   ]
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
      ]}
  ,"datasets":[
{"iDataset":0, "DatasetID":"13597003", "Pointer":" "
 ,"Subent":"13597003", "compiled":19950217, "x4dbVersion":"2023-12-19"
 ,"year1":1995, "author1ini":"S.K.", "author1":"Ghorai"
 ,"zTarg1":30, "targ1":"Zn-64", "proj1":"n", "emis1":"2N", "MF":3, "MT":16, "nExpectedArgs":1
 ,"IndepVarFamilyCode":"0 2        ", "getYFormulaStr":"y=DATA(EN)"
 ,"ReactionType":"CS", "quant":"CS", "quantExpan":"Cross section"
 ,"reacode":"30-ZN-64(N,2N)30-ZN-63,,SIG"
 ,"compNotes":["RECALCULATED COLUMN:MONIT-ERR,B  TO:PER-CENT:L=5"]
 ,"autoCorrNotes":[" #[0]#---Monitor xs-data"
	," #[0]#Reaction: 30-ZN-64(N,2N)30-ZN-63,,SIG"
	," #[0]#Monitor:  13-AL-27(N,A)11-NA-24,,SIG"
	," m0: [EN,MONIT,MONIT-ERR];     #[0]#old monitor(energy)"
	," m1: recom$al27na;             #[0]#new monitor(energy)"
	," dy=dy/y;                      #to rel. uncertainties"
	," y=y/m0*m1;                    #[0]#renormalizing CS"
	," dy=(dy**2-dm0**2+dm1**2)**0.5; #[0]#replace monitor uncertainties"
	," dy=dy*y;                      #to abs. uncertainties"]
 ,"wx4data":6
 ,"lx4data":5
 ,"x4data":[
   {"ivar":0, "cvar":"y", "fam":"Data", "ifComm":false, "ifCM":false
    ,"header":"DATA", "units":"MB", "basicUnits":"B"
    ,"what":"Y.Value", "dataType":"21", "rank":0.1
    ,"expansion":"Data: data"
    ,"dat0":[121,176,222,267,327]
    ,"dat1":[0.121,0.176,0.222,0.267,0.327]}
  ,{"ivar":1, "cvar":"dy", "fam":"Data", "ifComm":false, "ifCM":false
    ,"header":"DATA-ERR", "units":"MB", "basicUnits":"B"
    ,"what":"Y.Err+-", "dataType":"21", "rank":0.911
    ,"expansion":"Data: data /Error/"
    ,"dat0":[6,10,13,17,27]
    ,"dat1":[0.006,0.01,0.013,0.017,0.027]}
  ,{"ivar":2, "cvar":"dy", "fam":"Data", "ifComm":false, "ifCM":false
    ,"header":"MONIT-ERR", "units":"MB", "basicUnits":"B"
    ,"what":"Y.pErr+-", "dataType":"21", "rank":0.955
    ,"expansion":"Data: data /Error/"
    ,"dat0":[0.65,1.96,1.75,1.41,1.26]
    ,"dat1":[6.5e-4,0.00196,0.00175,0.00141,0.00126]}
  ,{"ivar":3, "cvar":"x1", "fam":"EN", "ifComm":false, "ifCM":false
    ,"header":"EN", "units":"MEV", "basicUnits":"EV"
    ,"what":"X1.Value", "dataType":"41", "rank":1.1
    ,"expansion":"Incident energy: energy"
    ,"dat0":[14.2,15.2,16.2,17.2,18.2]
    ,"dat1":[1.42e+7,1.52e+7,1.62e+7,1.72e+7,1.82e+7]}
  ,{"ivar":4, "cvar":"dx1", "fam":"EN", "ifComm":true , "ifCM":false
    ,"header":"EN-RSL", "units":"MEV", "basicUnits":"EV"
    ,"what":"X1.Resl+-", "dataType":"41", "rank":1.922
    ,"expansion":"Incident energy: energy /Error/"
    ,"com0":0.2
    ,"com1":2.0e+5}
  ,{"ivar":5, "cvar":"zzz", "fam":"", "ifComm":false, "ifCM":false
    ,"header":"MONIT", "units":"MB", "basicUnits":"B"
    ,"what":"ZZZ", "dataType":"11", "rank":777.0
    ,"expansion":"Assumed values: monitor"
    ,"dat0":[122,108,90,72,59.5]
    ,"dat1":[0.122,0.108,0.09,0.072,0.0595]}
  ]
 ,"wc5data":2
 ,"lc5data":5
 ,"c5data":{
    "y":{"icvar":0, "cvar":"y", "fam":"Data", "ifCM":false, "units":"B"
      ,"header":"DATA", "dataType":"21", "rank":0.0
      ,"expansion":"Data: data"
      ,"y":[0.121,0.176,0.222,0.267,0.327]
      ,"dy":[0.006,0.01,0.013,0.017,0.027]
      ,"dysys":[6.413e-4,0.0031856,0.0043068,0.0052332,0.0069324]   }
   ,"x1":{"icvar":1, "cvar":"x1", "fam":"EN", "ifCM":false, "units":"EV"
      ,"header":"EN", "dataType":"41", "rank":1.0
      ,"expansion":"Incident energy: energy"
      ,"x1":[1.42e+7,1.52e+7,1.62e+7,1.72e+7,1.82e+7]
      ,"dx1":[2.0e+5,2.0e+5,2.0e+5,2.0e+5,2.0e+5]   }
 }
 ,"c5mon":{"m0ref":"[EN,MONIT,MONIT-ERR]/al27na", "m1ref":"recom/al27na"
      ,"enNorm":[1.42e+7,1.52e+7,1.62e+7,1.72e+7,1.82e+7]
      ,"m0":[0.122,0.108,0.09,0.072,0.0595]
      ,"m1":[0.11962,0.105011,0.089254,0.0731812,0.058549]
      ,"dm0":[6.5e-4,0.00196,0.00175,0.00141,0.00126]
      ,"dm1":[5.27832e-4,5.31218e-4,6.517e-4,6.14784e-4,5.5036e-4]
      ,"Fc0":[0.980492,0.972325,0.991711,1.01641,0.984017] }
}
   ]
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
      ]}
  ,"datasets":[
{"iDataset":0, "DatasetID":"13597004", "Pointer":" "
 ,"Subent":"13597004", "compiled":19950217, "x4dbVersion":"2023-12-19"
 ,"year1":1995, "author1ini":"S.K.", "author1":"Ghorai"
 ,"zTarg1":30, "targ1":"Zn-66", "proj1":"n", "emis1":"P", "MF":3, "MT":103, "nExpectedArgs":1
 ,"IndepVarFamilyCode":"0 2        ", "getYFormulaStr":"y=DATA(EN)"
 ,"ReactionType":"CS", "quant":"CS", "quantExpan":"Cross section"
 ,"reacode":"30-ZN-66(N,P)29-CU-66,,SIG"
 ,"compNotes":["RECALCULATED COLUMN:MONIT-ERR,B  TO:PER-CENT:L=5"]
 ,"DECAY-DATA":{"Nuclide":"29-CU-66","HalfLife":"5.1MIN","HalfLife1":"5.12M"
	,"RadiationType":"DG","Ene":1039.0,"Ene1":1039.2,"Abu":0.08,"Abu1":0.0923
	,"FcCorrDECAY_DATA":0.8667389
	,"reaction":"30-ZN-66(N,P)29-CU-66,,SIG"}
 ,"autoCorrNotes":[" #[0]#---Monitor xs-data"
	," #[0]#Reaction: 30-ZN-66(N,P)29-CU-66,,SIG"
	," #[0]#Monitor:  13-AL-27(N,A)11-NA-24,,SIG"
	," m0: [EN,MONIT,MONIT-ERR];     #[0]#old monitor(energy)"
	," m1: recom$al27na;             #[0]#new monitor(energy)"
	," dy=dy/y;                      #to rel. uncertainties"
	," y=y/m0*m1;                    #[0]#renormalizing CS"
	," dy=(dy**2-dm0**2+dm1**2)**0.5; #[0]#replace monitor uncertainties"
	,"  #[1]#---Reaction decay-data"
	,"  #[1]#REACTION   (30-ZN-66(N,P)29-CU-66,,SIG)"
	,"  #[1]#DECAY-DATA (29-CU-66,5.1MIN,DG,1039.,0.080) #Ix_old=0.08"
	,"   a1=0.08/0.0923;             #[1]#DECAY-DATA: correction to new 1039.2 keV gamma-yield per decay Cu-66 Ix_new=0.0923"
	,"   y=y*a1;                     #[1]#Renorm.factor: a1=0.8667389"
	," dy=dy*y;                      #to abs. uncertainties"]
 ,"wx4data":6
 ,"lx4data":5
 ,"x4data":[
   {"ivar":0, "cvar":"y", "fam":"Data", "ifComm":false, "ifCM":false
    ,"header":"DATA", "units":"MB", "basicUnits":"B"
    ,"what":"Y.Value", "dataType":"21", "rank":0.1
    ,"expansion":"Data: data"
    ,"dat0":[76,72,71,62,57]
    ,"dat1":[0.076,0.072,0.071,0.062,0.057]}
  ,{"ivar":1, "cvar":"dy", "fam":"Data", "ifComm":false, "ifCM":false
    ,"header":"DATA-ERR", "units":"MB", "basicUnits":"B"
    ,"what":"Y.Err+-", "dataType":"21", "rank":0.911
    ,"expansion":"Data: data /Error/"
    ,"dat0":[5,6,8,7,7]
    ,"dat1":[0.005,0.006,0.008,0.007,0.007]}
  ,{"ivar":2, "cvar":"dy", "fam":"Data", "ifComm":false, "ifCM":false
    ,"header":"MONIT-ERR", "units":"MB", "basicUnits":"B"
    ,"what":"Y.pErr+-", "dataType":"21", "rank":0.955
    ,"expansion":"Data: data /Error/"
    ,"dat0":[0.65,1.96,1.75,1.41,1.26]
    ,"dat1":[6.5e-4,0.00196,0.00175,0.00141,0.00126]}
  ,{"ivar":3, "cvar":"x1", "fam":"EN", "ifComm":false, "ifCM":false
    ,"header":"EN", "units":"MEV", "basicUnits":"EV"
    ,"what":"X1.Value", "dataType":"41", "rank":1.1
    ,"expansion":"Incident energy: energy"
    ,"dat0":[14.2,15.2,16.2,17.2,18.2]
    ,"dat1":[1.42e+7,1.52e+7,1.62e+7,1.72e+7,1.82e+7]}
  ,{"ivar":4, "cvar":"dx1", "fam":"EN", "ifComm":true , "ifCM":false
    ,"header":"EN-RSL", "units":"MEV", "basicUnits":"EV"
    ,"what":"X1.Resl+-", "dataType":"41", "rank":1.922
    ,"expansion":"Incident energy: energy /Error/"
    ,"com0":0.2
    ,"com1":2.0e+5}
  ,{"ivar":5, "cvar":"zzz", "fam":"", "ifComm":false, "ifCM":false
    ,"header":"MONIT", "units":"MB", "basicUnits":"B"
    ,"what":"ZZZ", "dataType":"11", "rank":777.0
    ,"expansion":"Assumed values: monitor"
    ,"dat0":[122,108,90,72,59.5]
    ,"dat1":[0.122,0.108,0.09,0.072,0.0595]}
  ]
 ,"wc5data":2
 ,"lc5data":5
 ,"c5data":{
    "y":{"icvar":0, "cvar":"y", "fam":"Data", "ifCM":false, "units":"B"
      ,"header":"DATA", "dataType":"21", "rank":0.0
      ,"expansion":"Data: data"
      ,"y":[0.076,0.072,0.071,0.062,0.057]
      ,"dy":[0.005,0.006,0.008,0.007,0.007]
      ,"dysys":[4.028e-4,0.0013032,0.0013774,0.0012152,0.0012084]   }
   ,"x1":{"icvar":1, "cvar":"x1", "fam":"EN", "ifCM":false, "units":"EV"
      ,"header":"EN", "dataType":"41", "rank":1.0
      ,"expansion":"Incident energy: energy"
      ,"x1":[1.42e+7,1.52e+7,1.62e+7,1.72e+7,1.82e+7]
      ,"dx1":[2.0e+5,2.0e+5,2.0e+5,2.0e+5,2.0e+5]   }
 }
 ,"c5mon":{"m0ref":"[EN,MONIT,MONIT-ERR]/al27na", "m1ref":"recom/al27na"
      ,"enNorm":[1.42e+7,1.52e+7,1.62e+7,1.72e+7,1.82e+7]
      ,"m0":[0.122,0.108,0.09,0.072,0.0595]
      ,"m1":[0.11962,0.105011,0.089254,0.0731812,0.058549]
      ,"dm0":[6.5e-4,0.00196,0.00175,0.00141,0.00126]
      ,"dm1":[5.27832e-4,5.31218e-4,6.517e-4,6.14784e-4,5.5036e-4]
      ,"Fc0":[0.980492,0.972325,0.991711,1.01641,0.984017] }
}
   ]
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
      ]}
  ,"datasets":[
{"iDataset":0, "DatasetID":"13597005", "Pointer":" "
 ,"Subent":"13597005", "compiled":20140415, "x4dbVersion":"2023-12-19"
 ,"year1":1995, "author1ini":"S.K.", "author1":"Ghorai"
 ,"zTarg1":30, "targ1":"Zn-67", "proj1":"n", "emis1":"P", "MF":503, "MT":0, "nExpectedArgs":1
 ,"IndepVarFamilyCode":"0 2        ", "getYFormulaStr":"y=DATA(EN)"
 ,"ReactionType":"CS", "quant":"CS", "quantExpan":"Cross section"
 ,"reacode":"(30-ZN-67(N,P)29-CU-67,,SIG)+(30-ZN-68(N,X)29-CU-67,,SIG,,RAB)"
 ,"compNotes":["RECALCULATED COLUMN:MONIT-ERR,B  TO:PER-CENT:L=5"]
 ,"DECAY-DATA":{"Nuclide":"29-CU-67","HalfLife":"62.01HR","HalfLife1":"61.83HR"
	,"RadiationType":"DG","Ene":185.0,"Ene1":184.577,"Abu":0.47,"Abu1":0.487
	,"FcCorrDECAY_DATA":0.9650924
	,"reaction":"(30-ZN-67(N,P)29-CU-67,,SIG)+(30-ZN-68(N,X)29-CU-67,,SIG,,RAB)"}
 ,"autoCorrNotes":[" #[0]#---Monitor xs-data"
	," #[0]#Reaction: (30-ZN-67(N,P)29-CU-67,,SIG)+(30-ZN-68(N,X)29-CU-67,,SIG,,RAB)"
	," #[0]#Monitor:  13-AL-27(N,A)11-NA-24,,SIG"
	," m0: [EN,MONIT,MONIT-ERR];     #[0]#old monitor(energy)"
	," m1: recom$al27na;             #[0]#new monitor(energy)"
	," dy=dy/y;                      #to rel. uncertainties"
	," y=y/m0*m1;                    #[0]#renormalizing CS"
	," dy=(dy**2-dm0**2+dm1**2)**0.5; #[0]#replace monitor uncertainties"
	,"  #[1]#---Reaction decay-data"
	,"  #[1]#REACTION   ((30-ZN-67(N,P)29-CU-67,,SIG)+(30-ZN-68(N,X)29-CU-67,,SIG,,RAB))"
	,"  #[1]#DECAY-DATA (29-CU-67,62.01HR,DG,185.,0.470) #Ix_old=0.47"
	,"   a1=0.47/0.487;              #[1]#DECAY-DATA: correction to new 184.577 keV gamma-yield per decay Cu-67 Ix_new=0.487"
	,"   y=y*a1;                     #[1]#Renorm.factor: a1=0.9650924"
	," dy=dy*y;                      #to abs. uncertainties"]
 ,"wx4data":6
 ,"lx4data":5
 ,"x4data":[
   {"ivar":0, "cvar":"y", "fam":"Data", "ifComm":false, "ifCM":false
    ,"header":"DATA", "units":"MB", "basicUnits":"B"
    ,"what":"Y.Value", "dataType":"21", "rank":0.1
    ,"expansion":"Data: data"
    ,"dat0":[82,106,125,141,230]
    ,"dat1":[0.082,0.106,0.125,0.141,0.23]}
  ,{"ivar":1, "cvar":"dy", "fam":"Data", "ifComm":false, "ifCM":false
    ,"header":"DATA-ERR", "units":"MB", "basicUnits":"B"
    ,"what":"Y.Err+-", "dataType":"21", "rank":0.911
    ,"expansion":"Data: data /Error/"
    ,"dat0":[5,6,8,21,30]
    ,"dat1":[0.005,0.006,0.008,0.021,0.03]}
  ,{"ivar":2, "cvar":"dy", "fam":"Data", "ifComm":false, "ifCM":false
    ,"header":"MONIT-ERR", "units":"MB", "basicUnits":"B"
    ,"what":"Y.pErr+-", "dataType":"21", "rank":0.955
    ,"expansion":"Data: data /Error/"
    ,"dat0":[0.65,1.96,1.75,1.41,1.26]
    ,"dat1":[6.5e-4,0.00196,0.00175,0.00141,0.00126]}
  ,{"ivar":3, "cvar":"x1", "fam":"EN", "ifComm":false, "ifCM":false
    ,"header":"EN", "units":"MEV", "basicUnits":"EV"
    ,"what":"X1.Value", "dataType":"41", "rank":1.1
    ,"expansion":"Incident energy: energy"
    ,"dat0":[14.2,15.2,16.2,17.2,18.2]
    ,"dat1":[1.42e+7,1.52e+7,1.62e+7,1.72e+7,1.82e+7]}
  ,{"ivar":4, "cvar":"dx1", "fam":"EN", "ifComm":true , "ifCM":false
    ,"header":"EN-RSL", "units":"MEV", "basicUnits":"EV"
    ,"what":"X1.Resl+-", "dataType":"41", "rank":1.922
    ,"expansion":"Incident energy: energy /Error/"
    ,"com0":0.2
    ,"com1":2.0e+5}
  ,{"ivar":5, "cvar":"zzz", "fam":"", "ifComm":false, "ifCM":false
    ,"header":"MONIT", "units":"MB", "basicUnits":"B"
    ,"what":"ZZZ", "dataType":"11", "rank":777.0
    ,"expansion":"Assumed values: monitor"
    ,"dat0":[122,108,90,72,59.5]
    ,"dat1":[0.122,0.108,0.09,0.072,0.0595]}
  ]
 ,"wc5data":2
 ,"lc5data":5
 ,"c5data":{
    "y":{"icvar":0, "cvar":"y", "fam":"Data", "ifCM":false, "units":"B"
      ,"header":"DATA", "dataType":"21", "rank":0.0
      ,"expansion":"Data: data"
      ,"y":[0.082,0.106,0.125,0.141,0.23]
      ,"dy":[0.005,0.006,0.008,0.021,0.03]
      ,"dysys":[4.346e-4,0.0019186,0.002425,0.0027636,0.004876]   }
   ,"x1":{"icvar":1, "cvar":"x1", "fam":"EN", "ifCM":false, "units":"EV"
      ,"header":"EN", "dataType":"41", "rank":1.0
      ,"expansion":"Incident energy: energy"
      ,"x1":[1.42e+7,1.52e+7,1.62e+7,1.72e+7,1.82e+7]
      ,"dx1":[2.0e+5,2.0e+5,2.0e+5,2.0e+5,2.0e+5]   }
 }
 ,"c5mon":{"m0ref":"[EN,MONIT,MONIT-ERR]/al27na", "m1ref":"recom/al27na"
      ,"enNorm":[1.42e+7,1.52e+7,1.62e+7,1.72e+7,1.82e+7]
      ,"m0":[0.122,0.108,0.09,0.072,0.0595]
      ,"m1":[0.11962,0.105011,0.089254,0.0731812,0.058549]
      ,"dm0":[6.5e-4,0.00196,0.00175,0.00141,0.00126]
      ,"dm1":[5.27832e-4,5.31218e-4,6.517e-4,6.14784e-4,5.5036e-4]
      ,"Fc0":[0.980492,0.972325,0.991711,1.01641,0.984017] }
}
   ]
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
      ]}
  ,"datasets":[
{"iDataset":0, "DatasetID":"13597006", "Pointer":" "
 ,"Subent":"13597006", "compiled":19950822, "x4dbVersion":"2023-12-19"
 ,"year1":1995, "author1ini":"S.K.", "author1":"Ghorai"
 ,"zTarg1":30, "targ1":"Zn-68", "proj1":"n", "emis1":"P", "MF":3, "MT":103, "nExpectedArgs":1
 ,"IndepVarFamilyCode":"0 2        ", "getYFormulaStr":"y=DATA(EN)"
 ,"ReactionType":"CS", "quant":"CS", "quantExpan":"Cross section"
 ,"reacode":"30-ZN-68(N,P)29-CU-68-M,,SIG"
 ,"compNotes":["RECALCULATED COLUMN:MONIT-ERR,B  TO:PER-CENT:L=3"]
 ,"DECAY-DATA":{"Nuclide":"29-CU-68-M","HalfLife":"3.8MIN","HalfLife1":"3.75M"
	,"RadiationType":"DG","Ene":526.0,"Ene1":526.44,"Abu":0.74,"Abu1":0.748
	,"FcCorrDECAY_DATA":0.9893048
	,"reaction":"30-ZN-68(N,P)29-CU-68-M,,SIG"}
 ,"autoCorrNotes":[" #[0]#---Monitor xs-data"
	," #[0]#Reaction: 30-ZN-68(N,P)29-CU-68-M,,SIG"
	," #[0]#Monitor:  13-AL-27(N,A)11-NA-24,,SIG"
	," m0: [EN,MONIT,MONIT-ERR];     #[0]#old monitor(energy)"
	," m1: recom$al27na;             #[0]#new monitor(energy)"
	," dy=dy/y;                      #to rel. uncertainties"
	," y=y/m0*m1;                    #[0]#renormalizing CS"
	," dy=(dy**2-dm0**2+dm1**2)**0.5; #[0]#replace monitor uncertainties"
	,"  #[1]#---Reaction decay-data"
	,"  #[1]#REACTION   (30-ZN-68(N,P)29-CU-68-M,,SIG)"
	,"  #[1]#DECAY-DATA (29-CU-68-M,3.8MIN,DG,526.,0.74) #Ix_old=0.74"
	,"   a1=0.74/0.748;              #[1]#DECAY-DATA: correction to new 526.44 keV gamma-yield per decay Cu-68-m Ix_new=0.748"
	,"   y=y*a1;                     #[1]#Renorm.factor: a1=0.9893048"
	," dy=dy*y;                      #to abs. uncertainties"]
 ,"wx4data":6
 ,"lx4data":3
 ,"x4data":[
   {"ivar":0, "cvar":"y", "fam":"Data", "ifComm":false, "ifCM":false
    ,"header":"DATA", "units":"MB", "basicUnits":"B"
    ,"what":"Y.Value", "dataType":"21", "rank":0.1
    ,"expansion":"Data: data"
    ,"dat0":[5,6,2]
    ,"dat1":[0.005,0.006,0.002]}
  ,{"ivar":1, "cvar":"dy", "fam":"Data", "ifComm":false, "ifCM":false
    ,"header":"DATA-ERR", "units":"MB", "basicUnits":"B"
    ,"what":"Y.Err+-", "dataType":"21", "rank":0.911
    ,"expansion":"Data: data /Error/"
    ,"dat0":[0.6,1,1]
    ,"dat1":[6.0e-4,0.001,0.001]}
  ,{"ivar":2, "cvar":"dy", "fam":"Data", "ifComm":false, "ifCM":false
    ,"header":"MONIT-ERR", "units":"MB", "basicUnits":"B"
    ,"what":"Y.pErr+-", "dataType":"21", "rank":0.955
    ,"expansion":"Data: data /Error/"
    ,"dat0":[0.65,1.96,1.75]
    ,"dat1":[6.5e-4,0.00196,0.00175]}
  ,{"ivar":3, "cvar":"x1", "fam":"EN", "ifComm":false, "ifCM":false
    ,"header":"EN", "units":"MEV", "basicUnits":"EV"
    ,"what":"X1.Value", "dataType":"41", "rank":1.1
    ,"expansion":"Incident energy: energy"
    ,"dat0":[14.2,15.2,16.2]
    ,"dat1":[1.42e+7,1.52e+7,1.62e+7]}
  ,{"ivar":4, "cvar":"dx1", "fam":"EN", "ifComm":true , "ifCM":false
    ,"header":"EN-RSL", "units":"MEV", "basicUnits":"EV"
    ,"what":"X1.Resl+-", "dataType":"41", "rank":1.922
    ,"expansion":"Incident energy: energy /Error/"
    ,"com0":0.2
    ,"com1":2.0e+5}
  ,{"ivar":5, "cvar":"zzz", "fam":"", "ifComm":false, "ifCM":false
    ,"header":"MONIT", "units":"MB", "basicUnits":"B"
    ,"what":"ZZZ", "dataType":"11", "rank":777.0
    ,"expansion":"Assumed values: monitor"
    ,"dat0":[122,108,90]
    ,"dat1":[0.122,0.108,0.09]}
  ]
 ,"wc5data":2
 ,"lc5data":3
 ,"c5data":{
    "y":{"icvar":0, "cvar":"y", "fam":"Data", "ifCM":false, "units":"B"
      ,"header":"DATA", "dataType":"21", "rank":0.0
      ,"expansion":"Data: data"
      ,"y":[0.005,0.006,0.002]
      ,"dy":[6.0e-4,0.001,0.001]
      ,"dysys":[2.65e-5,1.086e-4,3.88e-5]   }
   ,"x1":{"icvar":1, "cvar":"x1", "fam":"EN", "ifCM":false, "units":"EV"
      ,"header":"EN", "dataType":"41", "rank":1.0
      ,"expansion":"Incident energy: energy"
      ,"x1":[1.42e+7,1.52e+7,1.62e+7]
      ,"dx1":[2.0e+5,2.0e+5,2.0e+5]   }
 }
 ,"c5mon":{"m0ref":"[EN,MONIT,MONIT-ERR]/al27na", "m1ref":"recom/al27na"
      ,"enNorm":[1.42e+7,1.52e+7,1.62e+7]
      ,"m0":[0.122,0.108,0.09]
      ,"m1":[0.11962,0.105011,0.089254]
      ,"dm0":[6.5e-4,0.00196,0.00175]
      ,"dm1":[5.27832e-4,5.31218e-4,6.517e-4]
      ,"Fc0":[0.980492,0.972325,0.991711] }
}
   ]
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
      ]}
  ,"datasets":[
{"iDataset":0, "DatasetID":"13597007", "Pointer":" "
 ,"Subent":"13597007", "compiled":19950217, "x4dbVersion":"2023-12-19"
 ,"year1":1995, "author1ini":"S.K.", "author1":"Ghorai"
 ,"zTarg1":30, "targ1":"Zn-68", "proj1":"n", "emis1":"A", "MF":3, "MT":107, "nExpectedArgs":1
 ,"IndepVarFamilyCode":"0 2        ", "getYFormulaStr":"y=DATA(EN)"
 ,"ReactionType":"CS", "quant":"CS", "quantExpan":"Cross section"
 ,"reacode":"30-ZN-68(N,A)28-NI-65,,SIG"
 ,"compNotes":["RECALCULATED COLUMN:MONIT-ERR,B  TO:PER-CENT:L=3"]
 ,"DECAY-DATA":{"Nuclide":"28-NI-65","HalfLife":"2.52HR","HalfLife1":"2.5175HR"
	,"RadiationType":"DG","Ene":1482.0,"Ene1":1481.84,"Abu":0.235,"Abu1":0.2359
	,"FcCorrDECAY_DATA":0.9961848
	,"reaction":"30-ZN-68(N,A)28-NI-65,,SIG"}
 ,"autoCorrNotes":[" #[0]#---Monitor xs-data"
	," #[0]#Reaction: 30-ZN-68(N,A)28-NI-65,,SIG"
	," #[0]#Monitor:  13-AL-27(N,A)11-NA-24,,SIG"
	," m0: [EN,MONIT,MONIT-ERR];     #[0]#old monitor(energy)"
	," m1: recom$al27na;             #[0]#new monitor(energy)"
	," dy=dy/y;                      #to rel. uncertainties"
	," y=y/m0*m1;                    #[0]#renormalizing CS"
	," dy=(dy**2-dm0**2+dm1**2)**0.5; #[0]#replace monitor uncertainties"
	,"  #[1]#---Reaction decay-data"
	,"  #[1]#REACTION   (30-ZN-68(N,A)28-NI-65,,SIG)"
	,"  #[1]#DECAY-DATA (28-NI-65,2.52HR,DG,1482.,0.235) #Ix_old=0.235"
	,"   a1=0.235/0.2359;            #[1]#DECAY-DATA: correction to new 1481.84 keV gamma-yield per decay Ni-65 Ix_new=0.2359"
	,"   y=y*a1;                     #[1]#Renorm.factor: a1=0.9961848"
	," dy=dy*y;                      #to abs. uncertainties"]
 ,"wx4data":6
 ,"lx4data":3
 ,"x4data":[
   {"ivar":0, "cvar":"y", "fam":"Data", "ifComm":false, "ifCM":false
    ,"header":"DATA", "units":"MB", "basicUnits":"B"
    ,"what":"Y.Value", "dataType":"21", "rank":0.1
    ,"expansion":"Data: data"
    ,"dat0":[10,9,7]
    ,"dat1":[0.01,0.009,0.007]}
  ,{"ivar":1, "cvar":"dy", "fam":"Data", "ifComm":false, "ifCM":false
    ,"header":"DATA-ERR", "units":"MB", "basicUnits":"B"
    ,"what":"Y.Err+-", "dataType":"21", "rank":0.911
    ,"expansion":"Data: data /Error/"
    ,"dat0":[0.7,0.7,1]
    ,"dat1":[7.0e-4,7.0e-4,0.001]}
  ,{"ivar":2, "cvar":"dy", "fam":"Data", "ifComm":false, "ifCM":false
    ,"header":"MONIT-ERR", "units":"MB", "basicUnits":"B"
    ,"what":"Y.pErr+-", "dataType":"21", "rank":0.955
    ,"expansion":"Data: data /Error/"
    ,"dat0":[0.65,1.96,1.75]
    ,"dat1":[6.5e-4,0.00196,0.00175]}
  ,{"ivar":3, "cvar":"x1", "fam":"EN", "ifComm":false, "ifCM":false
    ,"header":"EN", "units":"MEV", "basicUnits":"EV"
    ,"what":"X1.Value", "dataType":"41", "rank":1.1
    ,"expansion":"Incident energy: energy"
    ,"dat0":[14.2,15.2,16.2]
    ,"dat1":[1.42e+7,1.52e+7,1.62e+7]}
  ,{"ivar":4, "cvar":"dx1", "fam":"EN", "ifComm":true , "ifCM":false
    ,"header":"EN-RSL", "units":"MEV", "basicUnits":"EV"
    ,"what":"X1.Resl+-", "dataType":"41", "rank":1.922
    ,"expansion":"Incident energy: energy /Error/"
    ,"com0":0.2
    ,"com1":2.0e+5}
  ,{"ivar":5, "cvar":"zzz", "fam":"", "ifComm":false, "ifCM":false
    ,"header":"MONIT", "units":"MB", "basicUnits":"B"
    ,"what":"ZZZ", "dataType":"11", "rank":777.0
    ,"expansion":"Assumed values: monitor"
    ,"dat0":[122,108,90]
    ,"dat1":[0.122,0.108,0.09]}
  ]
 ,"wc5data":2
 ,"lc5data":3
 ,"c5data":{
    "y":{"icvar":0, "cvar":"y", "fam":"Data", "ifCM":false, "units":"B"
      ,"header":"DATA", "dataType":"21", "rank":0.0
      ,"expansion":"Data: data"
      ,"y":[0.01,0.009,0.007]
      ,"dy":[7.0e-4,7.0e-4,0.001]
      ,"dysys":[5.3e-5,1.629e-4,1.358e-4]   }
   ,"x1":{"icvar":1, "cvar":"x1", "fam":"EN", "ifCM":false, "units":"EV"
      ,"header":"EN", "dataType":"41", "rank":1.0
      ,"expansion":"Incident energy: energy"
      ,"x1":[1.42e+7,1.52e+7,1.62e+7]
      ,"dx1":[2.0e+5,2.0e+5,2.0e+5]   }
 }
 ,"c5mon":{"m0ref":"[EN,MONIT,MONIT-ERR]/al27na", "m1ref":"recom/al27na"
      ,"enNorm":[1.42e+7,1.52e+7,1.62e+7]
      ,"m0":[0.122,0.108,0.09]
      ,"m1":[0.11962,0.105011,0.089254]
      ,"dm0":[6.5e-4,0.00196,0.00175]
      ,"dm1":[5.27832e-4,5.31218e-4,6.517e-4]
      ,"Fc0":[0.980492,0.972325,0.991711] }
}
   ]
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
      ]}
  ,"datasets":[
{"iDataset":0, "DatasetID":"23114002", "Pointer":" "
 ,"Subent":"23114002", "compiled":20130924, "x4dbVersion":"2023-12-19"
 ,"year1":2010, "author1ini":"C.", "author1":"Sage"
 ,"zTarg1":95, "targ1":"Am-241", "proj1":"n", "emis1":"2N", "MF":3, "MT":16, "nExpectedArgs":1
 ,"IndepVarFamilyCode":"0 2        ", "getYFormulaStr":"y=DATA(EN)"
 ,"ReactionType":"CS", "quant":"CS", "quantExpan":"Cross section"
 ,"reacode":"95-AM-241(N,2N)95-AM-240,,SIG"
 ,"compNotes":[]
 ,"autoCorrNotes":[" #[0]#---Monitor xs-data"
	," #[0]#Reaction: 95-AM-241(N,2N)95-AM-240,,SIG"
	," #[0]#Monitor:  13-AL-27(N,A)11-NA-24,,SIG"
	," #m0: {,M.Wagner+,B,PH-DAT,13-5,1990} $ al27na;#[0]#old monit-ref"
	," m0: wagner90$al27na;          #[0]#old monitor(energy) in ENDF"
	," m1: recom$al27na;             #[0]#new monitor(energy)"
	," dy=dy/y;                      #[0]#to rel. uncertainties----"
	," y=y/m0*m1;                    #[0]#renormalizing CS"
	," dy=(dy**2-dm0**2+dm1**2)**0.5; #[0]#replace monitor uncertainties"
	," dy=dy*y;                      #[0]#to abs. uncertainties"]
 ,"wx4data":17
 ,"lx4data":9
 ,"x4data":[
   {"ivar":0, "cvar":"y", "fam":"Data", "ifComm":false, "ifCM":false
    ,"header":"DATA", "units":"MB", "basicUnits":"B"
    ,"what":"Y.Value", "dataType":"21", "rank":0.1
    ,"expansion":"Data: data"
    ,"dat0":[96.8,162.9,241.8,152.4,116.1,105.7,89.5,102.1,77.9]
    ,"dat1":[0.0968,0.1629,0.2418,0.1524,0.1161,0.1057,0.0895,0.1021,0.0779]}
  ,{"ivar":1, "cvar":"dy", "fam":"Data", "ifComm":false, "ifCM":false
    ,"header":"ERR-T", "units":"PER-CENT", "basicUnits":"PER-CENT"
    ,"what":"Y.Err+-", "dataType":"21", "rank":0.911
    ,"expansion":"Data: data /Error/"
    ,"dat0":[6.5,5.7,4.6,4.6,4.4,4.4,8.2,5.8,8.8]
   ,"dat1eq":true}
  ,{"ivar":2, "cvar":"dy", "fam":"Data", "ifComm":false, "ifCM":false
    ,"header":"ERR-1", "units":"PER-CENT", "basicUnits":"PER-CENT"
    ,"what":"Y.sErr+-", "dataType":"21", "rank":0.944
    ,"expansion":"Data: data /Error/"
    ,"dat0":[5,4,2.5,2.1,1.5,1.3,6.3,1.4,5.7]
   ,"dat1eq":true}
  ,{"ivar":3, "cvar":"dy", "fam":"Data", "ifComm":false, "ifCM":false
    ,"header":"ERR-2", "units":"PER-CENT", "basicUnits":"PER-CENT"
    ,"what":"Y.sErr+-", "dataType":"21", "rank":0.944
    ,"expansion":"Data: data /Error/"
    ,"dat0":[1,1,1,1,1,0.7,2,1,1.6]
   ,"dat1eq":true}
  ,{"ivar":4, "cvar":"dy", "fam":"Data", "ifComm":true , "ifCM":false
    ,"header":"ERR-4", "units":"PER-CENT", "basicUnits":"PER-CENT"
    ,"what":"Y.sErr+-", "dataType":"21", "rank":0.944
    ,"expansion":"Data: data /Error/"
    ,"com0":0.1
    ,"com1":0.1}
  ,{"ivar":5, "cvar":"dy", "fam":"Data", "ifComm":false, "ifCM":false
    ,"header":"ERR-8", "units":"PER-CENT", "basicUnits":"PER-CENT"
    ,"what":"Y.sErr+-", "dataType":"21", "rank":0.944
    ,"expansion":"Data: data /Error/"
    ,"dat0":[null,null,0.3,0.3,0.3,0.3,1.3,1.4,1.4]
   ,"dat1eq":true}
  ,{"ivar":6, "cvar":"dy", "fam":"Data", "ifComm":true , "ifCM":false
    ,"header":"ERR-3", "units":"PER-CENT", "basicUnits":"PER-CENT"
    ,"what":"Y.pErr+-", "dataType":"21", "rank":0.955
    ,"expansion":"Data: data /Error/"
    ,"com0":1.2
    ,"com1":1.2}
  ,{"ivar":7, "cvar":"dy", "fam":"Data", "ifComm":true , "ifCM":false
    ,"header":"ERR-6", "units":"PER-CENT", "basicUnits":"PER-CENT"
    ,"what":"Y.pErr+-", "dataType":"21", "rank":0.955
    ,"expansion":"Data: data /Error/"
    ,"com0":3
    ,"com1":3}
  ,{"ivar":8, "cvar":"dy", "fam":"Data", "ifComm":false, "ifCM":false
    ,"header":"ERR-7", "units":"PER-CENT", "basicUnits":"PER-CENT"
    ,"what":"Y.pErr+-", "dataType":"21", "rank":0.955
    ,"expansion":"Data: data /Error/"
    ,"dat0":[0.9,0.6,0.4,0.6,0.6,0.7,0.6,0.6,0.6]
   ,"dat1eq":true}
  ,{"ivar":9, "cvar":"dy", "fam":"Data", "ifComm":true , "ifCM":false
    ,"header":"ERR-5", "units":"PER-CENT", "basicUnits":"PER-CENT"
    ,"what":"Y.mErr+-", "dataType":"21", "rank":0.966
    ,"expansion":"Data: data /Error/"
    ,"com0":0.3
    ,"com1":0.3}
  ,{"ivar":10, "cvar":"dy", "fam":"Data", "ifComm":false, "ifCM":false
    ,"header":"MONIT-ERR", "units":"PER-CENT", "basicUnits":"PER-CENT"
    ,"what":"Y.mErr+-", "dataType":"21", "rank":0.966
    ,"expansion":"Data: data /Error/"
    ,"dat0":[1.9,1.9,1.6,2,2,2.2,3.1,4.1,5.4]
   ,"dat1eq":true}
  ,{"ivar":11, "cvar":"x1", "fam":"EN", "ifComm":false, "ifCM":false
    ,"header":"EN", "units":"MEV", "basicUnits":"EV"
    ,"what":"X1.Value", "dataType":"41", "rank":1.1
    ,"expansion":"Incident energy: energy"
    ,"dat0":[8.34,9.15,13.33,16.1,17.16,17.9,19.36,19.95,20.61]
    ,"dat1":[8.34e+6,9.15e+6,1.333e+7,1.61e+7,1.716e+7,1.79e+7,1.936e+7,1.995e+7,2.061e+7]}
  ,{"ivar":12, "cvar":"dx1", "fam":"EN", "ifComm":false, "ifCM":false
    ,"header":"EN-ERR", "units":"MEV", "basicUnits":"EV"
    ,"what":"X1.Err+-", "dataType":"41", "rank":1.911
    ,"expansion":"Incident energy: energy /Error/"
    ,"dat0":[0.15,0.15,0.15,0.15,0.03,0.1,0.15,0.07,0.04]
    ,"dat1":[1.5e+5,1.5e+5,1.5e+5,1.5e+5,3.0e+4,1.0e+5,1.5e+5,7.0e+4,4.0e+4]}
  ,{"ivar":13, "cvar":"zzz", "fam":"", "ifComm":false, "ifCM":false
    ,"header":"MISC1", "units":"NO-DIM", "basicUnits":"NO-DIM"
    ,"what":"ZZZ", "dataType":"09", "rank":777.0
    ,"expansion":"Flags, etc."
    ,"dat0":[0.9974,1.0731,0.9168,1.0749,0.9987,0.969,1.0061,0.9822,0.9938]
   ,"dat1eq":true}
  ,{"ivar":14, "cvar":"zzz", "fam":"", "ifComm":false, "ifCM":false
    ,"header":"MISC2", "units":"NO-DIM", "basicUnits":"NO-DIM"
    ,"what":"ZZZ", "dataType":"09", "rank":777.1
    ,"expansion":"Flags, etc."
    ,"dat0":[0.9925,1.3117,0.8288,1.2335,0.9878,0.933,1.0157,0.9433,0.982]
   ,"dat1eq":true}
  ,{"ivar":15, "cvar":"zzz", "fam":"", "ifComm":false, "ifCM":false
    ,"header":"MISC3", "units":"NO-DIM", "basicUnits":"NO-DIM"
    ,"what":"ZZZ", "dataType":"09", "rank":777.2
    ,"expansion":"Flags, etc."
    ,"dat0":[1,1,1,1,0.998,0.998,0.941,0.922,0.885]
   ,"dat1eq":true}
  ,{"ivar":16, "cvar":"zzz", "fam":"", "ifComm":false, "ifCM":false
    ,"header":"MISC4", "units":"NO-DIM", "basicUnits":"NO-DIM"
    ,"what":"ZZZ", "dataType":"09", "rank":777.3
    ,"expansion":"Flags, etc."
    ,"dat0":[1,1,1,1,0.997,0.997,0.926,0.891,0.832]
   ,"dat1eq":true}
  ]
 ,"wc5data":2
 ,"lc5data":9
 ,"c5data":{
    "y":{"icvar":0, "cvar":"y", "fam":"Data", "ifCM":false, "units":"B"
      ,"header":"DATA", "dataType":"21", "rank":0.0
      ,"expansion":"Data: data"
      ,"y":[0.0968,0.1629,0.2418,0.1524,0.1161,0.1057,0.0895,0.1021,0.0779]
      ,"dy":[0.006292,0.0092853,0.0111228,0.0070104,0.0051084,0.0046508,0.007339,0.0059218,0.0068552]
      ,"dysys":[0.00324677,0.00535344,0.00787244,0.00500837,0.00381544,0.0034945,0.00294127,0.00335535,0.00256006]
      ,"dystat":[0.0049368,0.00671851,0.00655541,0.00357734,0.00212498,0.00159603,0.0060298,0.00226699,0.00473975]
      ,"dyprt":[0.00186199,0.00313344,0.00393622,0.0030821,0.00234798,0.00234692,0.00278746,0.00419729,0.00421309]   }
   ,"x1":{"icvar":1, "cvar":"x1", "fam":"EN", "ifCM":false, "units":"EV"
      ,"header":"EN", "dataType":"41", "rank":1.0
      ,"expansion":"Incident energy: energy"
      ,"x1":[8.34e+6,9.15e+6,1.333e+7,1.61e+7,1.716e+7,1.79e+7,1.936e+7,1.995e+7,2.061e+7]
      ,"dx1":[1.5e+5,1.5e+5,1.5e+5,1.5e+5,3.0e+4,1.0e+5,1.5e+5,7.0e+4,4.0e+4]   }
 }
 ,"c5mon":{"m0ref":"wagner90/al27na", "m1ref":"recom/al27na"
      ,"enNorm":[8.34e+6,9.15e+6,1.333e+7,1.61e+7,1.716e+7,1.79e+7,1.936e+7,1.995e+7,2.061e+7]
      ,"m0":[0.05035,0.07829,0.127,0.09073,0.06721,0.06721,0.04315,0.04315,0.03387]
      ,"m1":[0.0497276,0.0721552,0.125271,0.0908497,0.0737955,0.0626993,0.0445321,0.0387122,0.0331231]
      ,"dm0":[9.3e-4,0.00158,0.00226,0.00197,0.00136,0.00136,0.00137,0.00137,0.00174]
      ,"dm1":[4.34628e-4,6.32418e-4,9.96305e-4,6.40152e-4,6.15986e-4,5.63752e-4,5.28705e-4,5.06308e-4,5.68455e-4]
      ,"Fc0":[0.987639,0.921641,0.986386,1.00132,1.09798,0.932886,1.03203,0.897153,0.977949] }
}
   ]
   }
  ]
 }
]

}
;
