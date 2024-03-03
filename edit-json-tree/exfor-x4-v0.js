x4_v0=
{
 "format":"X4JSON.0.1.2" 
 ,"now":"2024-01-19T13:49:54.000Z" 
 ,"program":"EXFOR converter, by V.Zerkin, IAEA-NDS, 2007-2019 (ver.2020-05-11)" 
 ,"input": {  "files": [ { "name":"X4R51690_x4.txt"  ,"format":"EXFOR"  ,"created":"2024-01-19T13:49:51.000Z"  } ] }
 ,"output": { "files": [ { "name":"X4R51690_x4.txt.x4t"  ,"format":"JSON"  ,"outBib":"0"  ,"created":"2024-01-19T13:49:54.000Z"  } ] }
 ,"datasets": [
 
 {"id":"A1499002"
  ,"subent": {"id":"A1499002", "updated":"20110819" }
  ,"entry": {"id":"A1499", "updated":"20110819" }
  ,"author1":"J.R.Erskine+"
  ,"year":"1961"
  ,"ref1":{ "code":"J,PR,123,(3),958,196108" ,"std":"J,PR,123,958,1961"
            ,"exp":"Jour: Physical Review, Vol.123, Issue.3, p.958 (1961)"
          }
  ,"reaction": {
     "code": "3-LI-6(HE3,P)4-BE-8,PAR,DA"
    ,"C4Reaction":"(HE3,P)PAR,DA"
    ,"Proj":"HE3" ,"ProjZA":"2003"
    ,"Target":"3-LI-6" ,"TargZA":"3006"
    ,"MF": 4 ,"MT": 601
    ,"ReactionType":"DAP"
    ,"Quantity":"Partial differential cross section d/dA"
    ,"IndVarFamCode":"0 234"
    ,"ExpectedUnits":"B/SR"
  }
  ,"datasect": {
    "xVariables": 3
    ,"formula":"Y = Y(X1,X2,X3)"
    ,"col": 6
    ,"row": 14
  }
  ,"headers": [

     { "ii":1 ,"varType":"Data" ,"varVar":"variable"
    ,"nval":14   ,"minval":"1.576"   ,"maxval":"6.897"
    ,"varSorted":"0.1" ,"what":"Y.Value"
    ,"dataType":"21"  ,"numVar":"0.1"
    ,"x4Header":"DATA" ,"SAN":"002" ,"expansion":"Data: data"
    ,"x4Units":"MB/SR" ,"hlpUnits":"millibarns per steradian"
    ,"BasicUnits":"B/SR" ,"ConvFactor":"0.001"
    }

   , { "ii":2 ,"varType":"Error" ,"varVar":"variable"
    ,"nval":11   ,"minval":"0.5911"   ,"maxval":"2.239"
    ,"varSorted":"0.911" ,"what":"Y.Err+-"
    ,"dataType":"21"  ,"numVar":"0.911"
    ,"x4Header":"DATA-ERR" ,"SAN":"002" ,"expansion":"Uncertainty: +-error"
    ,"x4Units":"MB/SR" ,"hlpUnits":"millibarns per steradian"
    ,"BasicUnits":"B/SR" ,"ConvFactor":"0.001"
    }

   , { "ii":3 ,"varType":"Data" ,"varVar":"variable"
    ,"nval":2   ,"minval":"3.5"   ,"maxval":"4.25"
    ,"varSorted":"1.1" ,"what":"X1.Value"
    ,"dataType":"41"  ,"numVar":"2.1"
    ,"x4Header":"EN" ,"SAN":"002" ,"expansion":"Incident energy: energy"
    ,"x4Units":"MEV" ,"hlpUnits":"MeV"
    ,"BasicUnits":"EV" ,"ConvFactor":"1.e+06"
    }

   , { "ii":4 ,"varType":"Data" ,"varVar":"variable"
    ,"nval":2   ,"minval":"16.62"   ,"maxval":"16.92"
    ,"varSorted":"2.1" ,"what":"X2.Value"
    ,"dataType":"52"  ,"numVar":"3.1"
    ,"x4Header":"E-LVL" ,"SAN":"002" ,"expansion":"Secondary energy: level energy"
    ,"x4Units":"MEV" ,"hlpUnits":"MeV"
    ,"BasicUnits":"EV" ,"ConvFactor":"1.e+06"
    }

   , { "ii":5 ,"varType":"Data" ,"varVar":"variable"
    ,"nval":14   ,"minval":"18.83"   ,"maxval":"119.3"
    ,"varSorted":"3.1" ,"what":"X3.Value"
    ,"dataType":"61"  ,"numVar":"4.1"
    ,"x4Header":"ANG" ,"SAN":"002" ,"expansion":"Angle: angle" ,"expansion2":"Angle of outgoing particle"
    ,"x4Units":"ADEG" ,"hlpUnits":"angular Degrees"
    }

   , { "ii":6 ,"varType":"Error" ,"varVar":"constant"
    ,"nval":1   ,"minval":"0.5"   ,"maxval":"0.5"
    ,"varSorted":"3.955" ,"what":"X3.pErr+-"
    ,"dataType":"61"  ,"numVar":"4.955"
    ,"x4Header":"ANG-ERR-D" ,"SAN":"002" ,"expansion":"Uncertainty: +-partial error"
    ,"x4Units":"ADEG" ,"hlpUnits":"angular Degrees"
    }
   ]
  ,"data": [
	 [4.877,0.7882,3.5,16.62,19.18,0.5]
	,[5.764,0.936,3.5,16.62,38.51,0.5]
	,[6.897,1.626,3.5,16.62,59.31,0.5]
	,[3.3,0.7882,3.5,16.62,79.14,0.5]
	,[2.808,0.936,3.5,16.62,99.62,0.5]
	,[3.498,0.6897,3.5,16.92,18.83,0.5]
	,[4.286,1.084,3.5,16.92,39.17,0.5]
	,[4.236,0.936,3.5,16.92,59.6,0.5]
	,[1.576,0.5911,3.5,16.92,79.33,0.5]
	,[5.473,0.995,4.25,16.62,28.29,0.5]
	,[4.527,2.239,4.25,16.62,59.78,0.5]
	,[2.488,0.7463,4.25,16.62,88.9,0.5]
	,[3.383,0.8458,4.25,16.92,58.41,0.5]
	,[2.239,0.8955,4.25,16.92,119.3,0.5]
   ]
 }
,
 {"id":"F0037003"
  ,"subent": {"id":"F0037003", "updated":"20200128" }
  ,"entry": {"id":"F0037", "updated":"20200128" }
  ,"author1":"M.R.Aleksic+"
  ,"year":"1978"
  ,"ref1":{ "code":"J,FIZ,10,273,1978" ,"std":"J,FIZ,10,273,1978"
            ,"exp":"Jour: Fizika, Vol.10, p.273 (1978)"
          }
  ,"reaction": {
     "code": "3-LI-6(HE3,P)4-BE-8,PAR,DA,,REL"
    ,"C4Reaction":"(HE3,P)PAR,DA,,REL"
    ,"Proj":"HE3" ,"ProjZA":"2003"
    ,"Target":"3-LI-6" ,"TargZA":"3006"
    ,"MF": 4 ,"MT": 601
    ,"ReactionType":"DAP"
    ,"Quantity":"Partial differential cross section d/dA"
    ,"IndVarFamCode":"0 234"
    ,"ExpectedUnits":"ARB-UNITS"
  }
  ,"datasect": {
    "xVariables": 3
    ,"formula":"Y = Y(X1,X2,X3)"
    ,"col": 6
    ,"row": 9
  }
  ,"headers": [

     { "ii":1 ,"varType":"Data" ,"varVar":"variable"
    ,"nval":9   ,"minval":"2.591"   ,"maxval":"6.213"
    ,"varSorted":"0.1" ,"what":"Y.Value"
    ,"dataType":"21"  ,"numVar":"0.1"
    ,"x4Header":"DATA" ,"SAN":"003" ,"expansion":"Data: data"
    ,"x4Units":"ARB-UNITS" ,"hlpUnits":"arbitrary Units"
    ,"BasicUnits":"NO-DIM" ,"ConvFactor":"1."
    }

   , { "ii":2 ,"varType":"Error" ,"varVar":"variable"
    ,"nval":2   ,"minval":"0.231"   ,"maxval":"0.265"
    ,"varSorted":"0.911" ,"what":"Y.Err+-"
    ,"dataType":"21"  ,"numVar":"0.911"
    ,"x4Header":"DATA-ERR" ,"SAN":"003" ,"expansion":"Uncertainty: +-error"
    ,"x4Units":"ARB-UNITS" ,"hlpUnits":"arbitrary Units"
    ,"BasicUnits":"NO-DIM" ,"ConvFactor":"1."
    }

   , { "ii":3 ,"varType":"Data" ,"varVar":"variable"
    ,"nval":9   ,"minval":"0.7501"   ,"maxval":"0.7909"
    ,"varSorted":"1.1" ,"what":"X1.Value"
    ,"dataType":"41"  ,"numVar":"2.1"
    ,"x4Header":"EN" ,"SAN":"003" ,"expansion":"Incident energy: energy"
    ,"x4Units":"MEV" ,"hlpUnits":"MeV"
    ,"BasicUnits":"EV" ,"ConvFactor":"1.e+06"
    }

   , { "ii":4 ,"varType":"Error" ,"varVar":"constant"
    ,"nval":1   ,"minval":"0.0005"   ,"maxval":"0.0005"
    ,"varSorted":"1.955" ,"what":"X1.pErr+-"
    ,"dataType":"41"  ,"numVar":"2.955"
    ,"x4Header":"EN-ERR-DIG" ,"SAN":"003" ,"expansion":"Uncertainty: +-partial error"
    ,"x4Units":"MEV" ,"hlpUnits":"MeV"
    ,"BasicUnits":"EV" ,"ConvFactor":"1.e+06"
    }

   , { "ii":5 ,"varType":"Data" ,"varVar":"constant"
    ,"nval":1   ,"minval":"16.6"   ,"maxval":"16.6"
    ,"varSorted":"2.1" ,"what":"X2.Value"
    ,"dataType":"52"  ,"numVar":"3.1"
    ,"x4Header":"E-LVL" ,"SAN":"003" ,"expansion":"Secondary energy: level energy"
    ,"x4Units":"MEV" ,"hlpUnits":"MeV"
    ,"BasicUnits":"EV" ,"ConvFactor":"1.e+06"
    }

   , { "ii":6 ,"varType":"Data" ,"varVar":"constant"
    ,"nval":1   ,"minval":"90."   ,"maxval":"90."
    ,"varSorted":"3.1" ,"what":"X3.Value"
    ,"dataType":"61"  ,"numVar":"4.1"
    ,"x4Header":"ANG" ,"SAN":"003" ,"expansion":"Angle: angle" ,"expansion2":"Angle of outgoing particle"
    ,"x4Units":"ADEG" ,"hlpUnits":"angular Degrees"
    }
   ]
  ,"data": [
	 [2.591,0.265,0.7501,5.0E-4,16.6,90.0]
	,[3.791,0.231,0.7561,5.0E-4,16.6,90.0]
	,[4.227,0.265,0.7609,5.0E-4,16.6,90.0]
	,[5.228,0.265,0.7662,5.0E-4,16.6,90.0]
	,[4.437,0.265,0.7717,5.0E-4,16.6,90.0]
	,[4.175,0.231,0.7761,5.0E-4,16.6,90.0]
	,[4.148,0.231,0.782,5.0E-4,16.6,90.0]
	,[5.578,0.265,0.7854,5.0E-4,16.6,90.0]
	,[6.213,0.265,0.7909,5.0E-4,16.6,90.0]
   ]
 }
]
}
;
