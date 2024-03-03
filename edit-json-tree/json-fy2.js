json_fy=
{
 "format":"JSON.FY-0.1.5" 
 ,"now":"2024-01-20T12:42:06.000Z" 
 ,"program":"Converter EXFOR-TO-JSON.FY, by V.Zerkin, IAEA-NDS, 2019-2022 (ver.2022-07-20)" 
 ,"input": {  "files": [ {"name":"X4R52361_x4.txt", "format":"EXFOR", "created":"2024-01-20T12:42:04.000Z" } ] }
 ,"output": { "files": [ {"name":"X4R52361_x4.txt.x4jsonFy", "outBib":"0", "created":"2024-01-20T12:42:06.000Z" } ] }
 ,"datasets": [
 
 { "type":"FYdata", "id":"10828002"
  ,"subent":{"id":"10828002", "updated":"20171126" }
  ,"entry":{"id":"10828", "updated":"20171126" }
  ,"author1":"T.C.Chapman+"
  ,"year":1978
  ,"ref1":{"code":"J,PR/C,17,1089,1978"
          ,"exp":"Jour: Physical Review, Part C, Nuclear Physics, Vol.17, p.1089 (1978)"
          }
  ,"reaction": {
     "code":"92-U-235(N,F)ELEM/MASS,CUM,FY"
    ,"Proj":"N"
    ,"Target":"92-U-235"
    ,"ReactionType":"FY"     ,"MF":801  ,"ReacTypeExp":"Fission product yield"
    ,"DataType":"CUM,FY"
    ,"Quantity":"Cumulative fission-product yield"
    ,"IndVarFamCode":"0 2    7"
  }
  ,"incEnergies": [
    {"incEnergy":6000,"incEnergyWidth":500,"incEnergyUnits":"KEV","Data":"CUM_FY","DataUnits":"PART/FIS"
    ,"Products": [
      {"Z":35 ,"A":84 ,"S":0, "Nucl":"Br-84-G"   ,"Data":0.011566  ,"dData":0.0067545 ,"t12sec":1908       ,"Radiations":[ {"Type":"DG", "Energy":[881.5], "Intensity":0.42}] }
     ,{"Z":36 ,"A":87       , "Nucl":"Kr-87"     ,"Data":0.029404  ,"dData":0.0059521 ,"t12sec":4561.2     ,"Radiations":[ {"Type":"DG", "Energy":[402.47], "Intensity":0.473}
                                                                                                                          ,{"Type":"DG", "Energy":[2554.92], "Intensity":0.0847}] }
     ,{"Z":38 ,"A":89       , "Nucl":"Sr-89"     ,"Data":0.038215  ,"dData":0.0035542 ,"t12sec":4367520    ,"Radiations":[ {"Type":"B"}] }
     ,{"Z":38 ,"A":91       , "Nucl":"Sr-91"     ,"Data":0.053087  ,"dData":0.005802  ,"t12sec":34128      ,"Radiations":[ {"Type":"DG", "Energy":[555.63], "Intensity":0.58}
                                                                                                                          ,{"Type":"DG", "Energy":[749.77], "Intensity":0.24}
                                                                                                                          ,{"Type":"DG", "Energy":[1024.25], "Intensity":0.33}] }
     ,{"Z":40 ,"A":95       , "Nucl":"Zr-95"     ,"Data":0.058519  ,"dData":0.0054426 ,"t12sec":5616000    ,"Radiations":[ {"Type":"B"}
                                                                                                                          ,{"Type":"DG", "Energy":[756.72], "Intensity":0.546}
                                                                                                                          ,{"Type":"DG", "Energy":[765.80], "Intensity":0.99}] }
     ,{"Z":40 ,"A":97       , "Nucl":"Zr-97"     ,"Data":0.057187  ,"dData":0.0062281 ,"t12sec":60552      ,"Radiations":[ {"Type":"B"}
                                                                                                                          ,{"Type":"DG", "Energy":[658.18], "Intensity":0.99}
                                                                                                                          ,{"Type":"DG", "Energy":[743.37], "Intensity":0.94}] }
     ,{"Z":42 ,"A":99       , "Nucl":"Mo-99"     ,"Data":0.06167   ,"dData":0.0057356 ,"t12sec":237773     ,"Radiations":[ {"Type":"B"}
                                                                                                                          ,{"Type":"DG", "Energy":[140.514], "Intensity":0.805}
                                                                                                                          ,{"Type":"DG", "Energy":[181.092], "Intensity":0.0604}
                                                                                                                          ,{"Type":"DG", "Energy":[739.481], "Intensity":0.12}
                                                                                                                          ,{"Type":"DG", "Energy":[777.900], "Intensity":0.0424}] }
     ,{"Z":43 ,"A":103      , "Nucl":"Tc-103"    ,"Data":0.028137  ,"dData":0.017434  ,"t12sec":1092       ,"Radiations":[ {"Type":"DG", "Energy":[358.0], "Intensity":0.9}
                                                                                                                          ,{"Type":"DG", "Energy":[530.5], "Intensity":0.15}
                                                                                                                          ,{"Type":"DG", "Energy":[535.1], "Intensity":0.14}] }
     ,{"Z":44 ,"A":103      , "Nucl":"Ru-103"    ,"Data":0.031085  ,"dData":0.0039684 ,"t12sec":3421440    ,"Radiations":[ {"Type":"DG", "Energy":[497.09], "Intensity":0.9}] }
     ,{"Z":45 ,"A":105      , "Nucl":"Rh-105"    ,"Data":0.017182  ,"dData":0.0021636 ,"t12sec":127526     ,"Radiations":[ {"Type":"DG", "Energy":[319.24], "Intensity":0.196}] }
     ,{"Z":46 ,"A":112      , "Nucl":"Pd-112"    ,"Data":0.002199  ,"dData":0.00020145,"t12sec":76032      ,"Radiations":[ {"Type":"DG", "Energy":[617.40], "Intensity":0.435}] }
     ,{"Z":47 ,"A":111      , "Nucl":"Ag-111"    ,"Data":0.002407  ,"dData":0.0002205 ,"t12sec":642038     ,"Radiations":[ {"Type":"B"}
                                                                                                                          ,{"Type":"DG", "Energy":[342.14], "Intensity":0.0668}] }
     ,{"Z":48 ,"A":115,"S":0, "Nucl":"Cd-115-G"  ,"Data":0.001841  ,"dData":0.00016865,"t12sec":190771     ,"Radiations":[ {"Type":"B"}
                                                                                                                          ,{"Type":"DG", "Energy":[336.25], "Intensity":0.465}
                                                                                                                          ,{"Type":"DG", "Energy":[492.29], "Intensity":0.0826}
                                                                                                                          ,{"Type":"DG", "Energy":[527.86], "Intensity":0.28}] }
     ,{"Z":48 ,"A":115,"S":1, "Nucl":"Cd-115-M"  ,"Data":0.000143  ,"dData":8.7973e-05,"t12sec":3853440    ,"Radiations":[ {"Type":"B"}] }
     ,{"Z":50 ,"A":128      , "Nucl":"Sn-128"    ,"Data":0.00804   ,"dData":0.0017402 ,"t12sec":3600       ,"Radiations":[ {"Type":"DG", "Energy":[482.0], "Intensity":0.66}] }
     ,{"Z":51 ,"A":127      , "Nucl":"Sb-127"    ,"Data":0.008206  ,"dData":0.0024497 ,"t12sec":334368     ,"Radiations":[ {"Type":"DG", "Energy":[473.20], "Intensity":0.248}
                                                                                                                          ,{"Type":"DG", "Energy":[684.90], "Intensity":0.368}] }
     ,{"Z":51 ,"A":130,"S":0, "Nucl":"Sb-130-G"  ,"Data":0.010171  ,"dData":0.0022729 ,"t12sec":2401.2     ,"Radiations":[ {"Type":"DG", "Energy":[330.9], "Intensity":0.78}
                                                                                                                          ,{"Type":"DG", "Energy":[839.4], "Intensity":1}] }
     ,{"Z":52 ,"A":132      , "Nucl":"Te-132"    ,"Data":0.04583   ,"dData":0.0043265 ,"t12sec":279936     ,"Radiations":[ {"Type":"DG", "Energy":[228.2], "Intensity":0.88}
                                                                                                                          ,{"Type":"DG", "Energy":[522.60], "Intensity":0.156}
                                                                                                                          ,{"Type":"DG", "Energy":[630.20], "Intensity":0.135}] }
     ,{"Z":53 ,"A":133      , "Nucl":"I-133"     ,"Data":0.061357  ,"dData":0.0093135 ,"t12sec":75600      ,"Radiations":[ {"Type":"DG", "Energy":[529.91], "Intensity":0.83}] }
     ,{"Z":55 ,"A":136      , "Nucl":"Cs-136"    ,"Data":0.000489  ,"dData":6.3962e-05,"t12sec":1121472    ,"Radiations":[ {"Type":"B"}] }
     ,{"Z":55 ,"A":137      , "Nucl":"Cs-137"    ,"Data":0.060934  ,"dData":0.0106027 ,"t12sec":9.52199e+08,"Radiations":[ {"Type":"B"}] }
     ,{"Z":56 ,"A":140      , "Nucl":"Ba-140"    ,"Data":0.050263  ,"dData":0.0046747 ,"t12sec":1105920    ,"Radiations":[ {"Type":"B"}
                                                                                                                          ,{"Type":"DG", "Energy":[537.261], "Intensity":0.2446}
                                                                                                                          ,{"Type":"DG", "Energy":[1596.20], "Intensity":0.9552}] }
     ,{"Z":57 ,"A":142      , "Nucl":"La-142"    ,"Data":0.050254  ,"dData":0.0110837 ,"t12sec":5562       ,"Radiations":[ {"Type":"DG", "Energy":[641.21], "Intensity":0.465}
                                                                                                                          ,{"Type":"DG", "Energy":[2398.0], "Intensity":0.117}
                                                                                                                          ,{"Type":"DG", "Energy":[2542.9], "Intensity":0.088}] }
     ,{"Z":58 ,"A":141      , "Nucl":"Ce-141"    ,"Data":0.04933   ,"dData":0.0052031 ,"t12sec":2797632    ,"Radiations":[ {"Type":"B"}
                                                                                                                          ,{"Type":"DG", "Energy":[145.44], "Intensity":0.493}] }
     ,{"Z":58 ,"A":143      , "Nucl":"Ce-143"    ,"Data":0.046887  ,"dData":0.0055667 ,"t12sec":119146     ,"Radiations":[ {"Type":"DG", "Energy":[293.20], "Intensity":0.435}] }
     ,{"Z":58 ,"A":144      , "Nucl":"Ce-144"    ,"Data":0.021597  ,"dData":0.0023671 ,"t12sec":2.45894e+07,"Radiations":[ {"Type":"B"}
                                                                                                                          ,{"Type":"DG", "Energy":[133.50], "Intensity":0.11}] }
     ,{"Z":60 ,"A":147      , "Nucl":"Nd-147"    ,"Data":0.020934  ,"dData":0.002208  ,"t12sec":953856     ,"Radiations":[ {"Type":"B"}
                                                                                                                          ,{"Type":"DG", "Energy":[531.00], "Intensity":0.1295}] }
     ,{"Z":61 ,"A":151      , "Nucl":"Pm-151"    ,"Data":0.005336  ,"dData":0.0076783 ,"t12sec":102211     ,"Radiations":[ {"Type":"DG", "Energy":[167.73,168.38], "Intensity":0.092}
                                                                                                                          ,{"Type":"DG", "Energy":[240.08], "Intensity":0.036}
                                                                                                                          ,{"Type":"DG", "Energy":[340.08], "Intensity":0.224}] }
     ,{"Z":63 ,"A":156      , "Nucl":"Eu-156"    ,"Data":0.000464  ,"dData":5.2922e-05,"t12sec":1312416    ,"Radiations":[ {"Type":"B"}] }
     ]
   }
    ,{"incEnergy":7100,"incEnergyWidth":300,"incEnergyUnits":"KEV","Data":"CUM_FY","DataUnits":"PART/FIS"
    ,"Products": [
      {"Z":35 ,"A":84       , "Nucl":"Br-84"     ,"Data":0.012171  ,"dData":0.0064252 ,"t12sec":1908       ,"Radiations":[ {"Type":"DG", "Energy":[881.5], "Intensity":0.42}] }
     ,{"Z":36 ,"A":87       , "Nucl":"Kr-87"     ,"Data":0.029155  ,"dData":0.0050874 ,"t12sec":4561.2     ,"Radiations":[ {"Type":"DG", "Energy":[402.47], "Intensity":0.473}
                                                                                                                          ,{"Type":"DG", "Energy":[2554.92], "Intensity":0.0847}] }
     ,{"Z":38 ,"A":89       , "Nucl":"Sr-89"     ,"Data":0.041348  ,"dData":0.0039612 ,"t12sec":4367520    ,"Radiations":[ {"Type":"B"}] }
     ,{"Z":38 ,"A":91       , "Nucl":"Sr-91"     ,"Data":0.051876  ,"dData":0.0066517 ,"t12sec":34128      ,"Radiations":[ {"Type":"DG", "Energy":[555.63], "Intensity":0.58}
                                                                                                                          ,{"Type":"DG", "Energy":[749.77], "Intensity":0.24}
                                                                                                                          ,{"Type":"DG", "Energy":[1024.25], "Intensity":0.33}] }
     ,{"Z":40 ,"A":95       , "Nucl":"Zr-95"     ,"Data":0.061109  ,"dData":0.0058544 ,"t12sec":5616000    ,"Radiations":[ {"Type":"B"}
                                                                                                                          ,{"Type":"DG", "Energy":[756.72], "Intensity":0.546}
                                                                                                                          ,{"Type":"DG", "Energy":[765.80], "Intensity":0.99}] }
     ,{"Z":40 ,"A":97       , "Nucl":"Zr-97"     ,"Data":0.057689  ,"dData":0.00644079,"t12sec":60552      ,"Radiations":[ {"Type":"B"}
                                                                                                                          ,{"Type":"DG", "Energy":[658.18], "Intensity":0.99}
                                                                                                                          ,{"Type":"DG", "Energy":[743.37], "Intensity":0.94}] }
     ,{"Z":42 ,"A":99       , "Nucl":"Mo-99"     ,"Data":0.054048  ,"dData":0.0051779 ,"t12sec":237773     ,"Radiations":[ {"Type":"B"}
                                                                                                                          ,{"Type":"DG", "Energy":[140.514], "Intensity":0.805}
                                                                                                                          ,{"Type":"DG", "Energy":[181.092], "Intensity":0.0604}
                                                                                                                          ,{"Type":"DG", "Energy":[739.481], "Intensity":0.12}
                                                                                                                          ,{"Type":"DG", "Energy":[777.900], "Intensity":0.0424}] }
     ,{"Z":43 ,"A":103      , "Nucl":"Tc-103"    ,"Data":0.027391  ,"dData":0.0120034 ,"t12sec":1092       ,"Radiations":[ {"Type":"DG", "Energy":[358.0], "Intensity":0.9}
                                                                                                                          ,{"Type":"DG", "Energy":[530.5], "Intensity":0.15}
                                                                                                                          ,{"Type":"DG", "Energy":[535.1], "Intensity":0.14}] }
     ,{"Z":44 ,"A":103      , "Nucl":"Ru-103"    ,"Data":0.031418  ,"dData":0.0032681 ,"t12sec":3421440    ,"Radiations":[ {"Type":"DG", "Energy":[497.09], "Intensity":0.9}] }
     ,{"Z":45 ,"A":105      , "Nucl":"Rh-105"    ,"Data":0.013704  ,"dData":0.001563  ,"t12sec":127526     ,"Radiations":[ {"Type":"DG", "Energy":[319.24], "Intensity":0.196}] }
     ,{"Z":46 ,"A":112      , "Nucl":"Pd-112"    ,"Data":0.002017  ,"dData":0.00018597,"t12sec":76032      ,"Radiations":[ {"Type":"DG", "Energy":[617.40], "Intensity":0.435}] }
     ,{"Z":47 ,"A":111      , "Nucl":"Ag-111"    ,"Data":0.002179  ,"dData":0.00020266,"t12sec":642038     ,"Radiations":[ {"Type":"B"}
                                                                                                                          ,{"Type":"DG", "Energy":[342.14], "Intensity":0.0668}] }
     ,{"Z":48 ,"A":115      , "Nucl":"Cd-115"    ,"Data":0.00179   ,"dData":0.00016648,"t12sec":190771     ,"Radiations":[ {"Type":"B"}
                                                                                                                          ,{"Type":"DG", "Energy":[336.25], "Intensity":0.465}
                                                                                                                          ,{"Type":"DG", "Energy":[492.29], "Intensity":0.0826}
                                                                                                                          ,{"Type":"DG", "Energy":[527.86], "Intensity":0.28}] }
     ,{"Z":48 ,"A":115      , "Nucl":"Cd-115"    ,"Data":0.000196  ,"dData":3.8333e-05,"t12sec":3853440    ,"Radiations":[ {"Type":"B"}] }
     ,{"Z":50 ,"A":128      , "Nucl":"Sn-128"    ,"Data":0.00708   ,"dData":0.0017418 ,"t12sec":3600       ,"Radiations":[ {"Type":"DG", "Energy":[482.0], "Intensity":0.66}] }
     ,{"Z":51 ,"A":127      , "Nucl":"Sb-127"    ,"Data":0.008323  ,"dData":0.0025256 ,"t12sec":334368     ,"Radiations":[ {"Type":"DG", "Energy":[473.20], "Intensity":0.248}
                                                                                                                          ,{"Type":"DG", "Energy":[684.90], "Intensity":0.368}] }
     ,{"Z":51 ,"A":130      , "Nucl":"Sb-130"    ,"Data":0.009554  ,"dData":0.00214   ,"t12sec":2401.2     ,"Radiations":[ {"Type":"DG", "Energy":[330.9], "Intensity":0.78}
                                                                                                                          ,{"Type":"DG", "Energy":[839.4], "Intensity":1}] }
     ,{"Z":52 ,"A":132      , "Nucl":"Te-132"    ,"Data":0.048712  ,"dData":0.0049006 ,"t12sec":279936     ,"Radiations":[ {"Type":"DG", "Energy":[228.2], "Intensity":0.88}
                                                                                                                          ,{"Type":"DG", "Energy":[522.60], "Intensity":0.156}
                                                                                                                          ,{"Type":"DG", "Energy":[630.20], "Intensity":0.135}] }
     ,{"Z":53 ,"A":133      , "Nucl":"I-133"     ,"Data":0.061933  ,"dData":0.0091033 ,"t12sec":75600      ,"Radiations":[ {"Type":"DG", "Energy":[529.91], "Intensity":0.83}] }
     ,{"Z":55 ,"A":136      , "Nucl":"Cs-136"    ,"Data":0.000457  ,"dData":6.197e-05 ,"t12sec":1121472    ,"Radiations":[ {"Type":"B"}] }
     ,{"Z":55 ,"A":137      , "Nucl":"Cs-137"    ,"Data":0.072382  ,"dData":0.0118468 ,"t12sec":9.52199e+08,"Radiations":[ {"Type":"B"}] }
     ,{"Z":56 ,"A":140      , "Nucl":"Ba-140"    ,"Data":0.052981  ,"dData":0.00507568,"t12sec":1105920    ,"Radiations":[ {"Type":"B"}
                                                                                                                          ,{"Type":"DG", "Energy":[537.261], "Intensity":0.2446}
                                                                                                                          ,{"Type":"DG", "Energy":[1596.20], "Intensity":0.9552}] }
     ,{"Z":57 ,"A":142      , "Nucl":"La-142"    ,"Data":0.05134   ,"dData":0.0100569 ,"t12sec":5562       ,"Radiations":[ {"Type":"DG", "Energy":[641.21], "Intensity":0.465}
                                                                                                                          ,{"Type":"DG", "Energy":[2398.0], "Intensity":0.117}
                                                                                                                          ,{"Type":"DG", "Energy":[2542.9], "Intensity":0.088}] }
     ,{"Z":58 ,"A":141      , "Nucl":"Ce-141"    ,"Data":0.050148  ,"dData":0.0054273 ,"t12sec":2797632    ,"Radiations":[ {"Type":"B"}
                                                                                                                          ,{"Type":"DG", "Energy":[145.44], "Intensity":0.493}] }
     ,{"Z":58 ,"A":143      , "Nucl":"Ce-143"    ,"Data":0.046359  ,"dData":0.0051997 ,"t12sec":119146     ,"Radiations":[ {"Type":"DG", "Energy":[293.20], "Intensity":0.435}] }
     ,{"Z":58 ,"A":144      , "Nucl":"Ce-144"    ,"Data":0.043081  ,"dData":0.0046853 ,"t12sec":2.45894e+07,"Radiations":[ {"Type":"B"}
                                                                                                                          ,{"Type":"DG", "Energy":[133.50], "Intensity":0.11}] }
     ,{"Z":60 ,"A":147      , "Nucl":"Nd-147"    ,"Data":0.022044  ,"dData":0.0023857 ,"t12sec":953856     ,"Radiations":[ {"Type":"B"}
                                                                                                                          ,{"Type":"DG", "Energy":[531.00], "Intensity":0.1295}] }
     ,{"Z":61 ,"A":151      , "Nucl":"Pm-151"    ,"Data":0.003594  ,"dData":0.00077515,"t12sec":102211     ,"Radiations":[ {"Type":"DG", "Energy":[167.73,168.38], "Intensity":0.092}
                                                                                                                          ,{"Type":"DG", "Energy":[240.08], "Intensity":0.036}
                                                                                                                          ,{"Type":"DG", "Energy":[340.08], "Intensity":0.224}] }
     ,{"Z":63 ,"A":156      , "Nucl":"Eu-156"    ,"Data":0.000388  ,"dData":4.574e-05 ,"t12sec":1312416    ,"Radiations":[ {"Type":"B"}] }
     ]
   }
    ,{"incEnergy":8100,"incEnergyWidth":400,"incEnergyUnits":"KEV","Data":"CUM_FY","DataUnits":"PART/FIS"
    ,"Products": [
      {"Z":35 ,"A":84       , "Nucl":"Br-84"     ,"Data":0.015766  ,"dData":0.006833  ,"t12sec":1908       ,"Radiations":[ {"Type":"DG", "Energy":[881.5], "Intensity":0.42}] }
     ,{"Z":36 ,"A":87       , "Nucl":"Kr-87"     ,"Data":0.031106  ,"dData":0.0061474 ,"t12sec":4561.2     ,"Radiations":[ {"Type":"DG", "Energy":[402.47], "Intensity":0.473}
                                                                                                                          ,{"Type":"DG", "Energy":[2554.92], "Intensity":0.0847}] }
     ,{"Z":38 ,"A":89       , "Nucl":"Sr-89"     ,"Data":0.038468  ,"dData":0.0048422 ,"t12sec":4367520    ,"Radiations":[ {"Type":"B"}] }
     ,{"Z":38 ,"A":91       , "Nucl":"Sr-91"     ,"Data":0.051757  ,"dData":0.0079085 ,"t12sec":34128      ,"Radiations":[ {"Type":"DG", "Energy":[555.63], "Intensity":0.58}
                                                                                                                          ,{"Type":"DG", "Energy":[749.77], "Intensity":0.24}
                                                                                                                          ,{"Type":"DG", "Energy":[1024.25], "Intensity":0.33}] }
     ,{"Z":40 ,"A":95       , "Nucl":"Zr-95"     ,"Data":0.058996  ,"dData":0.00644246,"t12sec":5616000    ,"Radiations":[ {"Type":"B"}
                                                                                                                          ,{"Type":"DG", "Energy":[756.72], "Intensity":0.546}
                                                                                                                          ,{"Type":"DG", "Energy":[765.80], "Intensity":0.99}] }
     ,{"Z":40 ,"A":97       , "Nucl":"Zr-97"     ,"Data":0.05521   ,"dData":0.0069593 ,"t12sec":60552      ,"Radiations":[ {"Type":"B"}
                                                                                                                          ,{"Type":"DG", "Energy":[658.18], "Intensity":0.99}
                                                                                                                          ,{"Type":"DG", "Energy":[743.37], "Intensity":0.94}] }
     ,{"Z":42 ,"A":99       , "Nucl":"Mo-99"     ,"Data":0.053888  ,"dData":0.00592768,"t12sec":237773     ,"Radiations":[ {"Type":"B"}
                                                                                                                          ,{"Type":"DG", "Energy":[140.514], "Intensity":0.805}
                                                                                                                          ,{"Type":"DG", "Energy":[181.092], "Intensity":0.0604}
                                                                                                                          ,{"Type":"DG", "Energy":[739.481], "Intensity":0.12}
                                                                                                                          ,{"Type":"DG", "Energy":[777.900], "Intensity":0.0424}] }
     ,{"Z":43 ,"A":103      , "Nucl":"Tc-103"    ,"Data":0.024217  ,"dData":0.0091759 ,"t12sec":1092       ,"Radiations":[ {"Type":"DG", "Energy":[358.0], "Intensity":0.9}
                                                                                                                          ,{"Type":"DG", "Energy":[530.5], "Intensity":0.15}
                                                                                                                          ,{"Type":"DG", "Energy":[535.1], "Intensity":0.14}] }
     ,{"Z":44 ,"A":103      , "Nucl":"Ru-103"    ,"Data":0.029589  ,"dData":0.0037432 ,"t12sec":3421440    ,"Radiations":[ {"Type":"DG", "Energy":[497.09], "Intensity":0.9}] }
     ,{"Z":45 ,"A":105      , "Nucl":"Rh-105"    ,"Data":0.013872  ,"dData":0.0018814 ,"t12sec":127526     ,"Radiations":[ {"Type":"DG", "Energy":[319.24], "Intensity":0.196}] }
     ,{"Z":46 ,"A":112      , "Nucl":"Pd-112"    ,"Data":0.002172  ,"dData":0.00021547,"t12sec":76032      ,"Radiations":[ {"Type":"DG", "Energy":[617.40], "Intensity":0.435}] }
     ,{"Z":47 ,"A":111      , "Nucl":"Ag-111"    ,"Data":0.002266  ,"dData":0.00023253,"t12sec":642038     ,"Radiations":[ {"Type":"B"}
                                                                                                                          ,{"Type":"DG", "Energy":[342.14], "Intensity":0.0668}] }
     ,{"Z":48 ,"A":115      , "Nucl":"Cd-115"    ,"Data":0.001818  ,"dData":0.0001829 ,"t12sec":190771     ,"Radiations":[ {"Type":"B"}
                                                                                                                          ,{"Type":"DG", "Energy":[336.25], "Intensity":0.465}
                                                                                                                          ,{"Type":"DG", "Energy":[492.29], "Intensity":0.0826}
                                                                                                                          ,{"Type":"DG", "Energy":[527.86], "Intensity":0.28}] }
     ,{"Z":48 ,"A":115      , "Nucl":"Cd-115"    ,"Data":0.000154  ,"dData":4.5101e-05,"t12sec":3853440    ,"Radiations":[ {"Type":"B"}] }
     ,{"Z":50 ,"A":128      , "Nucl":"Sn-128"    ,"Data":0.007529  ,"dData":0.0017193 ,"t12sec":3600       ,"Radiations":[ {"Type":"DG", "Energy":[482.0], "Intensity":0.66}] }
     ,{"Z":51 ,"A":127      , "Nucl":"Sb-127"    ,"Data":0.006423  ,"dData":0.0011628 ,"t12sec":334368     ,"Radiations":[ {"Type":"DG", "Energy":[473.20], "Intensity":0.248}
                                                                                                                          ,{"Type":"DG", "Energy":[684.90], "Intensity":0.368}] }
     ,{"Z":51 ,"A":130      , "Nucl":"Sb-130"    ,"Data":0.008884  ,"dData":0.0020889 ,"t12sec":2401.2     ,"Radiations":[ {"Type":"DG", "Energy":[330.9], "Intensity":0.78}
                                                                                                                          ,{"Type":"DG", "Energy":[839.4], "Intensity":1}] }
     ,{"Z":52 ,"A":132      , "Nucl":"Te-132"    ,"Data":0.044454  ,"dData":0.00485445,"t12sec":279936     ,"Radiations":[ {"Type":"DG", "Energy":[228.2], "Intensity":0.88}
                                                                                                                          ,{"Type":"DG", "Energy":[522.60], "Intensity":0.156}
                                                                                                                          ,{"Type":"DG", "Energy":[630.20], "Intensity":0.135}] }
     ,{"Z":53 ,"A":133      , "Nucl":"I-133"     ,"Data":0.058901  ,"dData":0.0104401 ,"t12sec":75600      ,"Radiations":[ {"Type":"DG", "Energy":[529.91], "Intensity":0.83}] }
     ,{"Z":55 ,"A":136      , "Nucl":"Cs-136"    ,"Data":0.000567  ,"dData":6.8888e-05,"t12sec":1121472    ,"Radiations":[ {"Type":"B"}] }
     ,{"Z":55 ,"A":137      , "Nucl":"Cs-137"    ,"Data":0.04184   ,"dData":0.0085019 ,"t12sec":9.52199e+08,"Radiations":[ {"Type":"B"}] }
     ,{"Z":56 ,"A":140      , "Nucl":"Ba-140"    ,"Data":0.051026  ,"dData":0.0056436 ,"t12sec":1105920    ,"Radiations":[ {"Type":"B"}
                                                                                                                          ,{"Type":"DG", "Energy":[537.261], "Intensity":0.2446}
                                                                                                                          ,{"Type":"DG", "Energy":[1596.20], "Intensity":0.9552}] }
     ,{"Z":57 ,"A":142      , "Nucl":"La-142"    ,"Data":0.053388  ,"dData":0.0121568 ,"t12sec":5562       ,"Radiations":[ {"Type":"DG", "Energy":[641.21], "Intensity":0.465}
                                                                                                                          ,{"Type":"DG", "Energy":[2398.0], "Intensity":0.117}
                                                                                                                          ,{"Type":"DG", "Energy":[2542.9], "Intensity":0.088}] }
     ,{"Z":58 ,"A":141      , "Nucl":"Ce-141"    ,"Data":0.049753  ,"dData":0.0061283 ,"t12sec":2797632    ,"Radiations":[ {"Type":"B"}
                                                                                                                          ,{"Type":"DG", "Energy":[145.44], "Intensity":0.493}] }
     ,{"Z":58 ,"A":143      , "Nucl":"Ce-143"    ,"Data":0.047734  ,"dData":0.0061481 ,"t12sec":119146     ,"Radiations":[ {"Type":"DG", "Energy":[293.20], "Intensity":0.435}] }
     ,{"Z":58 ,"A":144      , "Nucl":"Ce-144"    ,"Data":0.040963  ,"dData":0.0051022 ,"t12sec":2.45894e+07,"Radiations":[ {"Type":"B"}
                                                                                                                          ,{"Type":"DG", "Energy":[133.50], "Intensity":0.11}] }
     ,{"Z":60 ,"A":147      , "Nucl":"Nd-147"    ,"Data":0.020308  ,"dData":0.00274346,"t12sec":953856     ,"Radiations":[ {"Type":"B"}
                                                                                                                          ,{"Type":"DG", "Energy":[531.00], "Intensity":0.1295}] }
     ,{"Z":61 ,"A":151      , "Nucl":"Pm-151"    ,"Data":0.004757  ,"dData":0.00094396,"t12sec":102211     ,"Radiations":[ {"Type":"DG", "Energy":[167.73,168.38], "Intensity":0.092}
                                                                                                                          ,{"Type":"DG", "Energy":[240.08], "Intensity":0.036}
                                                                                                                          ,{"Type":"DG", "Energy":[340.08], "Intensity":0.224}] }
     ,{"Z":63 ,"A":156      , "Nucl":"Eu-156"    ,"Data":0.000342  ,"dData":5.1574e-05,"t12sec":1312416    ,"Radiations":[ {"Type":"B"}] }
     ]
   }
    ,{"incEnergy":9100,"incEnergyWidth":300,"incEnergyUnits":"KEV","Data":"CUM_FY","DataUnits":"PART/FIS"
    ,"Products": [
      {"Z":35 ,"A":84       , "Nucl":"Br-84"     ,"Data":0.011444  ,"dData":0.0054382 ,"t12sec":1908       ,"Radiations":[ {"Type":"DG", "Energy":[881.5], "Intensity":0.42}] }
     ,{"Z":36 ,"A":87       , "Nucl":"Kr-87"     ,"Data":0.029108  ,"dData":0.0072555 ,"t12sec":4561.2     ,"Radiations":[ {"Type":"DG", "Energy":[402.47], "Intensity":0.473}
                                                                                                                          ,{"Type":"DG", "Energy":[2554.92], "Intensity":0.0847}] }
     ,{"Z":38 ,"A":89       , "Nucl":"Sr-89"     ,"Data":0.032539  ,"dData":0.0064988 ,"t12sec":4367520    ,"Radiations":[ {"Type":"B"}] }
     ,{"Z":38 ,"A":91       , "Nucl":"Sr-91"     ,"Data":0.048785  ,"dData":0.0077582 ,"t12sec":34128      ,"Radiations":[ {"Type":"DG", "Energy":[555.63], "Intensity":0.58}
                                                                                                                          ,{"Type":"DG", "Energy":[749.77], "Intensity":0.24}
                                                                                                                          ,{"Type":"DG", "Energy":[1024.25], "Intensity":0.33}] }
     ,{"Z":40 ,"A":95       , "Nucl":"Zr-95"     ,"Data":0.060543  ,"dData":0.00814095,"t12sec":5616000    ,"Radiations":[ {"Type":"B"}
                                                                                                                          ,{"Type":"DG", "Energy":[756.72], "Intensity":0.546}
                                                                                                                          ,{"Type":"DG", "Energy":[765.80], "Intensity":0.99}] }
     ,{"Z":40 ,"A":97       , "Nucl":"Zr-97"     ,"Data":0.053544  ,"dData":0.0082272 ,"t12sec":60552      ,"Radiations":[ {"Type":"B"}
                                                                                                                          ,{"Type":"DG", "Energy":[658.18], "Intensity":0.99}
                                                                                                                          ,{"Type":"DG", "Energy":[743.37], "Intensity":0.94}] }
     ,{"Z":42 ,"A":99       , "Nucl":"Mo-99"     ,"Data":0.053552  ,"dData":0.0074268 ,"t12sec":237773     ,"Radiations":[ {"Type":"B"}
                                                                                                                          ,{"Type":"DG", "Energy":[140.514], "Intensity":0.805}
                                                                                                                          ,{"Type":"DG", "Energy":[181.092], "Intensity":0.0604}
                                                                                                                          ,{"Type":"DG", "Energy":[739.481], "Intensity":0.12}
                                                                                                                          ,{"Type":"DG", "Energy":[777.900], "Intensity":0.0424}] }
     ,{"Z":43 ,"A":103      , "Nucl":"Tc-103"    ,"Data":0.026665  ,"dData":0.0098787 ,"t12sec":1092       ,"Radiations":[ {"Type":"DG", "Energy":[358.0], "Intensity":0.9}
                                                                                                                          ,{"Type":"DG", "Energy":[530.5], "Intensity":0.15}
                                                                                                                          ,{"Type":"DG", "Energy":[535.1], "Intensity":0.14}] }
     ,{"Z":44 ,"A":103      , "Nucl":"Ru-103"    ,"Data":0.027014  ,"dData":0.0051284 ,"t12sec":3421440    ,"Radiations":[ {"Type":"DG", "Energy":[497.09], "Intensity":0.9}] }
     ,{"Z":45 ,"A":105      , "Nucl":"Rh-105"    ,"Data":0.010165  ,"dData":0.0022193 ,"t12sec":127526     ,"Radiations":[ {"Type":"DG", "Energy":[319.24], "Intensity":0.196}] }
     ,{"Z":46 ,"A":112      , "Nucl":"Pd-112"    ,"Data":0.002917  ,"dData":0.00031752,"t12sec":76032      ,"Radiations":[ {"Type":"DG", "Energy":[617.40], "Intensity":0.435}] }
     ,{"Z":47 ,"A":111      , "Nucl":"Ag-111"    ,"Data":0.003064  ,"dData":0.00034645,"t12sec":642038     ,"Radiations":[ {"Type":"B"}
                                                                                                                          ,{"Type":"DG", "Energy":[342.14], "Intensity":0.0668}] }
     ,{"Z":48 ,"A":115      , "Nucl":"Cd-115"    ,"Data":0.002422  ,"dData":0.00027045,"t12sec":190771     ,"Radiations":[ {"Type":"B"}
                                                                                                                          ,{"Type":"DG", "Energy":[336.25], "Intensity":0.465}
                                                                                                                          ,{"Type":"DG", "Energy":[492.29], "Intensity":0.0826}
                                                                                                                          ,{"Type":"DG", "Energy":[527.86], "Intensity":0.28}] }
     ,{"Z":48 ,"A":115      , "Nucl":"Cd-115"    ,"Data":0.000153  ,"dData":7.076e-05 ,"t12sec":3853440    ,"Radiations":[ {"Type":"B"}] }
     ,{"Z":50 ,"A":128      , "Nucl":"Sn-128"    ,"Data":0.008278  ,"dData":0.00212809,"t12sec":3600       ,"Radiations":[ {"Type":"DG", "Energy":[482.0], "Intensity":0.66}] }
     ,{"Z":51 ,"A":127      , "Nucl":"Sb-127"    ,"Data":0.008083  ,"dData":0.00123997,"t12sec":334368     ,"Radiations":[ {"Type":"DG", "Energy":[473.20], "Intensity":0.248}
                                                                                                                          ,{"Type":"DG", "Energy":[684.90], "Intensity":0.368}] }
     ,{"Z":51 ,"A":130      , "Nucl":"Sb-130"    ,"Data":0.010443  ,"dData":0.00251453,"t12sec":2401.2     ,"Radiations":[ {"Type":"DG", "Energy":[330.9], "Intensity":0.78}
                                                                                                                          ,{"Type":"DG", "Energy":[839.4], "Intensity":1}] }
     ,{"Z":52 ,"A":132      , "Nucl":"Te-132"    ,"Data":0.039648  ,"dData":0.0056409 ,"t12sec":279936     ,"Radiations":[ {"Type":"DG", "Energy":[228.2], "Intensity":0.88}
                                                                                                                          ,{"Type":"DG", "Energy":[522.60], "Intensity":0.156}
                                                                                                                          ,{"Type":"DG", "Energy":[630.20], "Intensity":0.135}] }
     ,{"Z":53 ,"A":133      , "Nucl":"I-133"     ,"Data":0.056398  ,"dData":0.0124702 ,"t12sec":75600      ,"Radiations":[ {"Type":"DG", "Energy":[529.91], "Intensity":0.83}] }
     ,{"Z":55 ,"A":136      , "Nucl":"Cs-136"    ,"Data":0.000623  ,"dData":7.952e-05 ,"t12sec":1121472    ,"Radiations":[ {"Type":"B"}] }
     ,{"Z":55 ,"A":137      , "Nucl":"Cs-137"    ,"Data":0.053987  ,"dData":0.0102798 ,"t12sec":9.52199e+08,"Radiations":[ {"Type":"B"}] }
     ,{"Z":56 ,"A":140      , "Nucl":"Ba-140"    ,"Data":0.04709   ,"dData":0.0068617 ,"t12sec":1105920    ,"Radiations":[ {"Type":"B"}
                                                                                                                          ,{"Type":"DG", "Energy":[537.261], "Intensity":0.2446}
                                                                                                                          ,{"Type":"DG", "Energy":[1596.20], "Intensity":0.9552}] }
     ,{"Z":57 ,"A":142      , "Nucl":"La-142"    ,"Data":0.055038  ,"dData":0.0145752 ,"t12sec":5562       ,"Radiations":[ {"Type":"DG", "Energy":[641.21], "Intensity":0.465}
                                                                                                                          ,{"Type":"DG", "Energy":[2398.0], "Intensity":0.117}
                                                                                                                          ,{"Type":"DG", "Energy":[2542.9], "Intensity":0.088}] }
     ,{"Z":58 ,"A":141      , "Nucl":"Ce-141"    ,"Data":0.04575   ,"dData":0.0071961 ,"t12sec":2797632    ,"Radiations":[ {"Type":"B"}
                                                                                                                          ,{"Type":"DG", "Energy":[145.44], "Intensity":0.493}] }
     ,{"Z":58 ,"A":143      , "Nucl":"Ce-143"    ,"Data":0.043895  ,"dData":0.007171  ,"t12sec":119146     ,"Radiations":[ {"Type":"DG", "Energy":[293.20], "Intensity":0.435}] }
     ,{"Z":58 ,"A":144      , "Nucl":"Ce-144"    ,"Data":0.036156  ,"dData":0.0059095 ,"t12sec":2.45894e+07,"Radiations":[ {"Type":"B"}
                                                                                                                          ,{"Type":"DG", "Energy":[133.50], "Intensity":0.11}] }
     ,{"Z":60 ,"A":147      , "Nucl":"Nd-147"    ,"Data":0.018721  ,"dData":0.0035699 ,"t12sec":953856     ,"Radiations":[ {"Type":"B"}
                                                                                                                          ,{"Type":"DG", "Energy":[531.00], "Intensity":0.1295}] }
     ,{"Z":61 ,"A":151      , "Nucl":"Pm-151"    ,"Data":0.003704  ,"dData":0.002444  ,"t12sec":102211     ,"Radiations":[ {"Type":"DG", "Energy":[167.73,168.38], "Intensity":0.092}
                                                                                                                          ,{"Type":"DG", "Energy":[240.08], "Intensity":0.036}
                                                                                                                          ,{"Type":"DG", "Energy":[340.08], "Intensity":0.224}] }
     ,{"Z":63 ,"A":156      , "Nucl":"Eu-156"    ,"Data":0.000381  ,"dData":7.7613e-05,"t12sec":1312416    ,"Radiations":[ {"Type":"B"}] }
     ]
   }
  ]
 }
,
 { "type":"FYdata", "id":"12729002"
  ,"subent":{"id":"12729002", "updated":"20201025" }
  ,"entry":{"id":"12729", "updated":"20201025" }
  ,"author1":"L.E.Glendenin+"
  ,"year":1981
  ,"ref1":{"code":"J,PR/C,24,2600,1981"
          ,"exp":"Jour: Physical Review, Part C, Nuclear Physics, Vol.24, p.2600 (1981)"
          }
  ,"reaction": {
     "code":"92-U-235(N,F)ELEM/MASS,CUM,FY"
    ,"Proj":"N"
    ,"Target":"92-U-235"
    ,"ReactionType":"FY"     ,"MF":801  ,"ReacTypeExp":"Fission product yield"
    ,"DataType":"CUM,FY"
    ,"Quantity":"Cumulative fission-product yield"
    ,"IndVarFamCode":"0 2    7"
  }
  ,"incEnergies": [
    {"incEnergy":170,"incEnergyUnits":"KEV","Data":"CUM_FY","DataUnits":"PART/FIS"
    ,"Products": [
      {"Z":35 ,"A":84       , "Nucl":"Br-84"     ,"Data":0.017     ,"dData":0.0026     }
     ,{"Z":36 ,"A":85 ,"S":1, "Nucl":"Kr-85-M"   ,"Data":0.0135    ,"dData":0.0009     }
     ,{"Z":36 ,"A":87       , "Nucl":"Kr-87"     ,"Data":0.0238    ,"dData":0.0019     }
     ,{"Z":36 ,"A":88       , "Nucl":"Kr-88"     ,"Data":0.0329    ,"dData":0.0015     }
     ,{"Z":37 ,"A":89       , "Nucl":"Rb-89"     ,"Data":0.0427    ,"dData":0.0052     }
     ,{"Z":38 ,"A":91       , "Nucl":"Sr-91"     ,"Data":0.0582    ,"dData":0.0023     }
     ,{"Z":38 ,"A":92       , "Nucl":"Sr-92"     ,"Data":0.0578    ,"dData":0.0042     }
     ,{"Z":39 ,"A":93       , "Nucl":"Y-93"      ,"Data":0.0664    ,"dData":0.0035     }
     ,{"Z":40 ,"A":95       , "Nucl":"Zr-95"     ,"Data":0.0681    ,"dData":0.0036     }
     ,{"Z":40 ,"A":97       , "Nucl":"Zr-97"     ,"Data":0.0591    ,"dData":0.0022     }
     ,{"Z":42 ,"A":99       , "Nucl":"Mo-99"     ,"Data":0.0594    ,"dData":0.0027     }
     ,{"Z":44 ,"A":103      , "Nucl":"Ru-103"    ,"Data":0.036     ,"dData":0.0019     }
     ,{"Z":44 ,"A":105      , "Nucl":"Ru-105"    ,"Data":0.0111    ,"dData":0.0008     }
     ,{"Z":46 ,"A":109      , "Nucl":"Pd-109"    ,"Data":0.00027   ,"dData":5.0e-05    }
     ,{"Z":46 ,"A":112      , "Nucl":"Pd-112"    ,"Data":0.00012   ,"dData":2.0e-05    }
     ,{"Z":47 ,"A":111      , "Nucl":"Ag-111"    ,"Data":0.00016   ,"dData":2.0e-05    }
     ,{"Z":48 ,"A":115,"S":0, "Nucl":"Cd-115-G"  ,"Data":0.0001    ,"dData":2.0e-05    }
     ,{"Z":50 ,"A":121,"S":0, "Nucl":"Sn-121-G"  ,"Data":9.0e-05   ,"dData":2.0e-05    }
     ,{"Z":50 ,"A":125,"S":0, "Nucl":"Sn-125-G"  ,"Data":9.0e-05   ,"dData":2.0e-05    }
     ,{"Z":51 ,"A":127      , "Nucl":"Sb-127"    ,"Data":0.0013    ,"dData":0.0002     }
     ,{"Z":51 ,"A":129      , "Nucl":"Sb-129"    ,"Data":0.0089    ,"dData":0.0007     }
     ,{"Z":52 ,"A":132      , "Nucl":"Te-132"    ,"Data":0.0465    ,"dData":0.002      }
     ,{"Z":52 ,"A":134      , "Nucl":"Te-134"    ,"Data":0.0618    ,"dData":0.003      }
     ,{"Z":53 ,"A":131      , "Nucl":"I-131"     ,"Data":0.0353    ,"dData":0.0018     }
     ,{"Z":53 ,"A":133      , "Nucl":"I-133"     ,"Data":0.0663    ,"dData":0.0028     }
     ,{"Z":53 ,"A":135      , "Nucl":"I-135"     ,"Data":0.0648    ,"dData":0.0025     }
     ,{"Z":54 ,"A":138      , "Nucl":"Xe-138"    ,"Data":0.0532    ,"dData":0.0031     }
     ,{"Z":56 ,"A":139      , "Nucl":"Ba-139"    ,"Data":0.0627    ,"dData":0.0046     }
     ,{"Z":56 ,"A":140      , "Nucl":"Ba-140"    ,"Data":0.0645    ,"dData":0.0034     }
     ,{"Z":57 ,"A":142      , "Nucl":"La-142"    ,"Data":0.0535    ,"dData":0.0036     }
     ,{"Z":58 ,"A":143      , "Nucl":"Ce-143"    ,"Data":0.0557    ,"dData":0.0026     }
     ,{"Z":58 ,"A":144      , "Nucl":"Ce-144"    ,"Data":0.0526    ,"dData":0.0059     }
     ,{"Z":60 ,"A":147      , "Nucl":"Nd-147"    ,"Data":0.0218    ,"dData":0.0018     }
     ,{"Z":61 ,"A":149      , "Nucl":"Pm-149"    ,"Data":0.0117    ,"dData":0.0011     }
     ,{"Z":61 ,"A":151      , "Nucl":"Pm-151"    ,"Data":0.0043    ,"dData":0.0003     }
     ]
   }
    ,{"incEnergy":550,"incEnergyUnits":"KEV","Data":"CUM_FY","DataUnits":"PART/FIS"
    ,"Products": [
      {"Z":36 ,"A":85 ,"S":1, "Nucl":"Kr-85-M"   ,"Data":0.0174    ,"dData":0.0013     }
     ,{"Z":36 ,"A":87       , "Nucl":"Kr-87"     ,"Data":0.0248    ,"dData":0.0015     }
     ,{"Z":36 ,"A":88       , "Nucl":"Kr-88"     ,"Data":0.0326    ,"dData":0.0019     }
     ,{"Z":38 ,"A":91       , "Nucl":"Sr-91"     ,"Data":0.0553    ,"dData":0.0022     }
     ,{"Z":38 ,"A":92       , "Nucl":"Sr-92"     ,"Data":0.0538    ,"dData":0.0044     }
     ,{"Z":39 ,"A":93       , "Nucl":"Y-93"      ,"Data":0.0636    ,"dData":0.0055     }
     ,{"Z":40 ,"A":95       , "Nucl":"Zr-95"     ,"Data":0.0671    ,"dData":0.0028     }
     ,{"Z":40 ,"A":97       , "Nucl":"Zr-97"     ,"Data":0.0578    ,"dData":0.0022     }
     ,{"Z":42 ,"A":99       , "Nucl":"Mo-99"     ,"Data":0.0542    ,"dData":0.0029     }
     ,{"Z":44 ,"A":103      , "Nucl":"Ru-103"    ,"Data":0.0351    ,"dData":0.0018     }
     ,{"Z":44 ,"A":105      , "Nucl":"Ru-105"    ,"Data":0.0116    ,"dData":0.0009     }
     ,{"Z":46 ,"A":109      , "Nucl":"Pd-109"    ,"Data":0.00027   ,"dData":5.0e-05    }
     ,{"Z":47 ,"A":111      , "Nucl":"Ag-111"    ,"Data":0.00024   ,"dData":4.0e-05    }
     ,{"Z":48 ,"A":115,"S":0, "Nucl":"Cd-115-G"  ,"Data":0.00017   ,"dData":3.0e-05    }
     ,{"Z":50 ,"A":121,"S":0, "Nucl":"Sn-121-G"  ,"Data":0.00014   ,"dData":2.0e-05    }
     ,{"Z":50 ,"A":125,"S":0, "Nucl":"Sn-125-G"  ,"Data":0.00015   ,"dData":2.0e-05    }
     ,{"Z":51 ,"A":127      , "Nucl":"Sb-127"    ,"Data":0.0014    ,"dData":0.0002     }
     ,{"Z":51 ,"A":129      , "Nucl":"Sb-129"    ,"Data":0.0088    ,"dData":0.0008     }
     ,{"Z":52 ,"A":132      , "Nucl":"Te-132"    ,"Data":0.0469    ,"dData":0.0021     }
     ,{"Z":52 ,"A":134      , "Nucl":"Te-134"    ,"Data":0.0594    ,"dData":0.0047     }
     ,{"Z":53 ,"A":131      , "Nucl":"I-131"     ,"Data":0.0363    ,"dData":0.0016     }
     ,{"Z":53 ,"A":133      , "Nucl":"I-133"     ,"Data":0.0669    ,"dData":0.0029     }
     ,{"Z":53 ,"A":135      , "Nucl":"I-135"     ,"Data":0.0629    ,"dData":0.0024     }
     ,{"Z":54 ,"A":138      , "Nucl":"Xe-138"    ,"Data":0.0586    ,"dData":0.0037     }
     ,{"Z":56 ,"A":139      , "Nucl":"Ba-139"    ,"Data":0.064     ,"dData":0.0031     }
     ,{"Z":56 ,"A":140      , "Nucl":"Ba-140"    ,"Data":0.063     ,"dData":0.0025     }
     ,{"Z":57 ,"A":142      , "Nucl":"La-142"    ,"Data":0.0555    ,"dData":0.0037     }
     ,{"Z":58 ,"A":141      , "Nucl":"Ce-141"    ,"Data":0.0637    ,"dData":0.0057     }
     ,{"Z":58 ,"A":143      , "Nucl":"Ce-143"    ,"Data":0.0614    ,"dData":0.0036     }
     ,{"Z":60 ,"A":147      , "Nucl":"Nd-147"    ,"Data":0.0251    ,"dData":0.0017     }
     ,{"Z":61 ,"A":149      , "Nucl":"Pm-149"    ,"Data":0.014     ,"dData":0.0016     }
     ,{"Z":61 ,"A":151      , "Nucl":"Pm-151"    ,"Data":0.0038    ,"dData":0.0004     }
     ]
   }
    ,{"incEnergy":1000,"incEnergyUnits":"KEV","Data":"CUM_FY","DataUnits":"PART/FIS"
    ,"Products": [
      {"Z":35 ,"A":84       , "Nucl":"Br-84"     ,"Data":0.0124    ,"dData":0.0022     }
     ,{"Z":36 ,"A":85 ,"S":1, "Nucl":"Kr-85-M"   ,"Data":0.0149    ,"dData":0.0006     }
     ,{"Z":36 ,"A":87       , "Nucl":"Kr-87"     ,"Data":0.0271    ,"dData":0.0014     }
     ,{"Z":36 ,"A":88       , "Nucl":"Kr-88"     ,"Data":0.0335    ,"dData":0.0015     }
     ,{"Z":38 ,"A":91       , "Nucl":"Sr-91"     ,"Data":0.0581    ,"dData":0.0023     }
     ,{"Z":38 ,"A":92       , "Nucl":"Sr-92"     ,"Data":0.0586    ,"dData":0.0067     }
     ,{"Z":39 ,"A":93       , "Nucl":"Y-93"      ,"Data":0.0643    ,"dData":0.0032     }
     ,{"Z":40 ,"A":95       , "Nucl":"Zr-95"     ,"Data":0.0657    ,"dData":0.0025     }
     ,{"Z":40 ,"A":97       , "Nucl":"Zr-97"     ,"Data":0.0612    ,"dData":0.0023     }
     ,{"Z":42 ,"A":99       , "Nucl":"Mo-99"     ,"Data":0.0571    ,"dData":0.003      }
     ,{"Z":44 ,"A":103      , "Nucl":"Ru-103"    ,"Data":0.0344    ,"dData":0.0018     }
     ,{"Z":44 ,"A":105      , "Nucl":"Ru-105"    ,"Data":0.0123    ,"dData":0.0006     }
     ,{"Z":46 ,"A":109      , "Nucl":"Pd-109"    ,"Data":0.00047   ,"dData":7.0e-05    }
     ,{"Z":46 ,"A":112      , "Nucl":"Pd-112"    ,"Data":0.00025   ,"dData":4.0e-05    }
     ,{"Z":47 ,"A":111      , "Nucl":"Ag-111"    ,"Data":0.00023   ,"dData":3.0e-05    }
     ,{"Z":48 ,"A":115,"S":0, "Nucl":"Cd-115-G"  ,"Data":0.0002    ,"dData":3.0e-05    }
     ,{"Z":50 ,"A":121,"S":0, "Nucl":"Sn-121-G"  ,"Data":0.00014   ,"dData":2.0e-05    }
     ,{"Z":50 ,"A":125,"S":0, "Nucl":"Sn-125-G"  ,"Data":0.00014   ,"dData":2.0e-05    }
     ,{"Z":51 ,"A":127      , "Nucl":"Sb-127"    ,"Data":0.0012    ,"dData":0.0002     }
     ,{"Z":51 ,"A":129      , "Nucl":"Sb-129"    ,"Data":0.0099    ,"dData":0.0013     }
     ,{"Z":52 ,"A":132      , "Nucl":"Te-132"    ,"Data":0.0484    ,"dData":0.0018     }
     ,{"Z":52 ,"A":134      , "Nucl":"Te-134"    ,"Data":0.0646    ,"dData":0.0032     }
     ,{"Z":53 ,"A":131      , "Nucl":"I-131"     ,"Data":0.0356    ,"dData":0.0014     }
     ,{"Z":53 ,"A":133      , "Nucl":"I-133"     ,"Data":0.0692    ,"dData":0.003      }
     ,{"Z":53 ,"A":135      , "Nucl":"I-135"     ,"Data":0.0639    ,"dData":0.0026     }
     ,{"Z":54 ,"A":138      , "Nucl":"Xe-138"    ,"Data":0.0587    ,"dData":0.0032     }
     ,{"Z":56 ,"A":139      , "Nucl":"Ba-139"    ,"Data":0.0691    ,"dData":0.0047     }
     ,{"Z":56 ,"A":140      , "Nucl":"Ba-140"    ,"Data":0.0623    ,"dData":0.0028     }
     ,{"Z":57 ,"A":142      , "Nucl":"La-142"    ,"Data":0.0561    ,"dData":0.0039     }
     ,{"Z":58 ,"A":143      , "Nucl":"Ce-143"    ,"Data":0.055     ,"dData":0.0036     }
     ,{"Z":60 ,"A":147      , "Nucl":"Nd-147"    ,"Data":0.0233    ,"dData":0.0022     }
     ,{"Z":61 ,"A":149      , "Nucl":"Pm-149"    ,"Data":0.0124    ,"dData":0.0015     }
     ,{"Z":61 ,"A":151      , "Nucl":"Pm-151"    ,"Data":0.004     ,"dData":0.0004     }
     ]
   }
    ,{"incEnergy":2000,"incEnergyUnits":"KEV","Data":"CUM_FY","DataUnits":"PART/FIS"
    ,"Products": [
      {"Z":36 ,"A":85 ,"S":1, "Nucl":"Kr-85-M"   ,"Data":0.0176    ,"dData":0.0011     }
     ,{"Z":36 ,"A":87       , "Nucl":"Kr-87"     ,"Data":0.0281    ,"dData":0.0016     }
     ,{"Z":36 ,"A":88       , "Nucl":"Kr-88"     ,"Data":0.0322    ,"dData":0.0017     }
     ,{"Z":38 ,"A":91       , "Nucl":"Sr-91"     ,"Data":0.0536    ,"dData":0.0021     }
     ,{"Z":38 ,"A":92       , "Nucl":"Sr-92"     ,"Data":0.0517    ,"dData":0.0042     }
     ,{"Z":39 ,"A":93       , "Nucl":"Y-93"      ,"Data":0.0662    ,"dData":0.004      }
     ,{"Z":40 ,"A":95       , "Nucl":"Zr-95"     ,"Data":0.0665    ,"dData":0.0057     }
     ,{"Z":40 ,"A":97       , "Nucl":"Zr-97"     ,"Data":0.0576    ,"dData":0.0022     }
     ,{"Z":42 ,"A":99       , "Nucl":"Mo-99"     ,"Data":0.0541    ,"dData":0.0029     }
     ,{"Z":44 ,"A":103      , "Nucl":"Ru-103"    ,"Data":0.0333    ,"dData":0.0018     }
     ,{"Z":44 ,"A":105      , "Nucl":"Ru-105"    ,"Data":0.011     ,"dData":0.0009     }
     ,{"Z":46 ,"A":109      , "Nucl":"Pd-109"    ,"Data":0.00061   ,"dData":9.0e-05    }
     ,{"Z":46 ,"A":112      , "Nucl":"Pd-112"    ,"Data":0.00048   ,"dData":7.0e-05    }
     ,{"Z":47 ,"A":111      , "Nucl":"Ag-111"    ,"Data":0.00047   ,"dData":7.0e-05    }
     ,{"Z":48 ,"A":115,"S":0, "Nucl":"Cd-115-G"  ,"Data":0.00051   ,"dData":8.0e-05    }
     ,{"Z":50 ,"A":121,"S":0, "Nucl":"Sn-121-G"  ,"Data":0.00033   ,"dData":5.0e-05    }
     ,{"Z":50 ,"A":125,"S":0, "Nucl":"Sn-125-G"  ,"Data":0.00033   ,"dData":5.0e-05    }
     ,{"Z":51 ,"A":127      , "Nucl":"Sb-127"    ,"Data":0.0023    ,"dData":0.0003     }
     ,{"Z":51 ,"A":129      , "Nucl":"Sb-129"    ,"Data":0.0106    ,"dData":0.001      }
     ,{"Z":52 ,"A":132      , "Nucl":"Te-132"    ,"Data":0.0473    ,"dData":0.0019     }
     ,{"Z":52 ,"A":134      , "Nucl":"Te-134"    ,"Data":0.0571    ,"dData":0.003      }
     ,{"Z":53 ,"A":131      , "Nucl":"I-131"     ,"Data":0.0369    ,"dData":0.0016     }
     ,{"Z":53 ,"A":133      , "Nucl":"I-133"     ,"Data":0.0637    ,"dData":0.0027     }
     ,{"Z":53 ,"A":135      , "Nucl":"I-135"     ,"Data":0.0632    ,"dData":0.0024     }
     ,{"Z":54 ,"A":138      , "Nucl":"Xe-138"    ,"Data":0.0646    ,"dData":0.0036     }
     ,{"Z":56 ,"A":139      , "Nucl":"Ba-139"    ,"Data":0.0587    ,"dData":0.0035     }
     ,{"Z":56 ,"A":140      , "Nucl":"Ba-140"    ,"Data":0.0611    ,"dData":0.0024     }
     ,{"Z":57 ,"A":142      , "Nucl":"La-142"    ,"Data":0.0556    ,"dData":0.0032     }
     ,{"Z":58 ,"A":141      , "Nucl":"Ce-141"    ,"Data":0.0626    ,"dData":0.0053     }
     ,{"Z":58 ,"A":143      , "Nucl":"Ce-143"    ,"Data":0.0576    ,"dData":0.0033     }
     ,{"Z":58 ,"A":144      , "Nucl":"Ce-144"    ,"Data":0.0548    ,"dData":0.0071     }
     ,{"Z":60 ,"A":147      , "Nucl":"Nd-147"    ,"Data":0.0247    ,"dData":0.0016     }
     ,{"Z":61 ,"A":149      , "Nucl":"Pm-149"    ,"Data":0.0141    ,"dData":0.0015     }
     ,{"Z":61 ,"A":151      , "Nucl":"Pm-151"    ,"Data":0.0043    ,"dData":0.0004     }
     ]
   }
    ,{"incEnergy":4000,"incEnergyUnits":"KEV","Data":"CUM_FY","DataUnits":"PART/FIS"
    ,"Products": [
      {"Z":35 ,"A":84       , "Nucl":"Br-84"     ,"Data":0.014     ,"dData":0.0021     }
     ,{"Z":36 ,"A":85 ,"S":1, "Nucl":"Kr-85-M"   ,"Data":0.017     ,"dData":0.0007     }
     ,{"Z":36 ,"A":87       , "Nucl":"Kr-87"     ,"Data":0.0289    ,"dData":0.0015     }
     ,{"Z":36 ,"A":88       , "Nucl":"Kr-88"     ,"Data":0.0324    ,"dData":0.0016     }
     ,{"Z":37 ,"A":89       , "Nucl":"Rb-89"     ,"Data":0.0422    ,"dData":0.0056     }
     ,{"Z":38 ,"A":91       , "Nucl":"Sr-91"     ,"Data":0.052     ,"dData":0.002      }
     ,{"Z":38 ,"A":92       , "Nucl":"Sr-92"     ,"Data":0.0522    ,"dData":0.0036     }
     ,{"Z":39 ,"A":93       , "Nucl":"Y-93"      ,"Data":0.0618    ,"dData":0.0037     }
     ,{"Z":39 ,"A":94       , "Nucl":"Y-94"      ,"Data":0.0587    ,"dData":0.0042     }
     ,{"Z":40 ,"A":95       , "Nucl":"Zr-95"     ,"Data":0.0639    ,"dData":0.0028     }
     ,{"Z":40 ,"A":97       , "Nucl":"Zr-97"     ,"Data":0.0592    ,"dData":0.0023     }
     ,{"Z":42 ,"A":99       , "Nucl":"Mo-99"     ,"Data":0.0545    ,"dData":0.0029     }
     ,{"Z":44 ,"A":103      , "Nucl":"Ru-103"    ,"Data":0.0357    ,"dData":0.0019     }
     ,{"Z":44 ,"A":105      , "Nucl":"Ru-105"    ,"Data":0.0142    ,"dData":0.0009     }
     ,{"Z":46 ,"A":109      , "Nucl":"Pd-109"    ,"Data":0.0016    ,"dData":0.0002     }
     ,{"Z":46 ,"A":112      , "Nucl":"Pd-112"    ,"Data":0.0012    ,"dData":0.0002     }
     ,{"Z":47 ,"A":111      , "Nucl":"Ag-111"    ,"Data":0.0014    ,"dData":0.0002     }
     ,{"Z":48 ,"A":115,"S":0, "Nucl":"Cd-115-G"  ,"Data":0.001     ,"dData":0.0002     }
     ,{"Z":50 ,"A":121,"S":0, "Nucl":"Sn-121-G"  ,"Data":0.00082   ,"dData":0.00012    }
     ,{"Z":50 ,"A":125,"S":0, "Nucl":"Sn-125-G"  ,"Data":0.00088   ,"dData":0.00013    }
     ,{"Z":51 ,"A":127      , "Nucl":"Sb-127"    ,"Data":0.0039    ,"dData":0.0006     }
     ,{"Z":51 ,"A":129      , "Nucl":"Sb-129"    ,"Data":0.0141    ,"dData":0.0015     }
     ,{"Z":52 ,"A":132      , "Nucl":"Te-132"    ,"Data":0.051     ,"dData":0.0025     }
     ,{"Z":52 ,"A":134      , "Nucl":"Te-134"    ,"Data":0.0471    ,"dData":0.0024     }
     ,{"Z":53 ,"A":131      , "Nucl":"I-131"     ,"Data":0.04      ,"dData":0.0017     }
     ,{"Z":53 ,"A":133      , "Nucl":"I-133"     ,"Data":0.0647    ,"dData":0.0028     }
     ,{"Z":53 ,"A":135      , "Nucl":"I-135"     ,"Data":0.0642    ,"dData":0.0024     }
     ,{"Z":54 ,"A":138      , "Nucl":"Xe-138"    ,"Data":0.061     ,"dData":0.0057     }
     ,{"Z":56 ,"A":139      , "Nucl":"Ba-139"    ,"Data":0.0642    ,"dData":0.0037     }
     ,{"Z":56 ,"A":140      , "Nucl":"Ba-140"    ,"Data":0.0582    ,"dData":0.0024     }
     ,{"Z":57 ,"A":142      , "Nucl":"La-142"    ,"Data":0.0516    ,"dData":0.0036     }
     ,{"Z":58 ,"A":141      , "Nucl":"Ce-141"    ,"Data":0.0603    ,"dData":0.0079     }
     ,{"Z":58 ,"A":143      , "Nucl":"Ce-143"    ,"Data":0.0466    ,"dData":0.0043     }
     ,{"Z":58 ,"A":144      , "Nucl":"Ce-144"    ,"Data":0.0419    ,"dData":0.0044     }
     ,{"Z":60 ,"A":147      , "Nucl":"Nd-147"    ,"Data":0.0222    ,"dData":0.001      }
     ,{"Z":61 ,"A":149      , "Nucl":"Pm-149"    ,"Data":0.0115    ,"dData":0.001      }
     ,{"Z":61 ,"A":151      , "Nucl":"Pm-151"    ,"Data":0.0052    ,"dData":0.0003     }
     ]
   }
    ,{"incEnergy":5500,"incEnergyUnits":"KEV","Data":"CUM_FY","DataUnits":"PART/FIS"
    ,"Products": [
      {"Z":36 ,"A":85 ,"S":1, "Nucl":"Kr-85-M"   ,"Data":0.0181    ,"dData":0.001      }
     ,{"Z":36 ,"A":87       , "Nucl":"Kr-87"     ,"Data":0.0286    ,"dData":0.0016     }
     ,{"Z":36 ,"A":88       , "Nucl":"Kr-88"     ,"Data":0.0322    ,"dData":0.0016     }
     ,{"Z":37 ,"A":89       , "Nucl":"Rb-89"     ,"Data":0.0357    ,"dData":0.0055     }
     ,{"Z":38 ,"A":91       , "Nucl":"Sr-91"     ,"Data":0.0498    ,"dData":0.002      }
     ,{"Z":38 ,"A":92       , "Nucl":"Sr-92"     ,"Data":0.0508    ,"dData":0.0045     }
     ,{"Z":39 ,"A":93       , "Nucl":"Y-93"      ,"Data":0.0588    ,"dData":0.005      }
     ,{"Z":39 ,"A":94       , "Nucl":"Y-94"      ,"Data":0.0559    ,"dData":0.0047     }
     ,{"Z":40 ,"A":95       , "Nucl":"Zr-95"     ,"Data":0.0641    ,"dData":0.0025     }
     ,{"Z":40 ,"A":97       , "Nucl":"Zr-97"     ,"Data":0.0586    ,"dData":0.0024     }
     ,{"Z":42 ,"A":99       , "Nucl":"Mo-99"     ,"Data":0.0552    ,"dData":0.0031     }
     ,{"Z":44 ,"A":103      , "Nucl":"Ru-103"    ,"Data":0.0258    ,"dData":0.0014     }
     ,{"Z":44 ,"A":105      , "Nucl":"Ru-105"    ,"Data":0.0166    ,"dData":0.001      }
     ,{"Z":46 ,"A":109      , "Nucl":"Pd-109"    ,"Data":0.0041    ,"dData":0.0006     }
     ,{"Z":46 ,"A":112      , "Nucl":"Pd-112"    ,"Data":0.0023    ,"dData":0.0004     }
     ,{"Z":47 ,"A":111      , "Nucl":"Ag-111"    ,"Data":0.003     ,"dData":0.0005     }
     ,{"Z":48 ,"A":115,"S":0, "Nucl":"Cd-115-G"  ,"Data":0.0028    ,"dData":0.0004     }
     ,{"Z":50 ,"A":121,"S":0, "Nucl":"Sn-121-G"  ,"Data":0.0021    ,"dData":0.0003     }
     ,{"Z":50 ,"A":125,"S":0, "Nucl":"Sn-125-G"  ,"Data":0.0018    ,"dData":0.0003     }
     ,{"Z":51 ,"A":127      , "Nucl":"Sb-127"    ,"Data":0.0078    ,"dData":0.0012     }
     ,{"Z":51 ,"A":129      , "Nucl":"Sb-129"    ,"Data":0.0197    ,"dData":0.0014     }
     ,{"Z":52 ,"A":132      , "Nucl":"Te-132"    ,"Data":0.0517    ,"dData":0.002      }
     ,{"Z":52 ,"A":134      , "Nucl":"Te-134"    ,"Data":0.038     ,"dData":0.0027     }
     ,{"Z":53 ,"A":131      , "Nucl":"I-131"     ,"Data":0.0475    ,"dData":0.002      }
     ,{"Z":53 ,"A":133      , "Nucl":"I-133"     ,"Data":0.0634    ,"dData":0.0027     }
     ,{"Z":53 ,"A":135      , "Nucl":"I-135"     ,"Data":0.0623    ,"dData":0.0024     }
     ,{"Z":54 ,"A":138      , "Nucl":"Xe-138"    ,"Data":0.0541    ,"dData":0.0075     }
     ,{"Z":56 ,"A":139      , "Nucl":"Ba-139"    ,"Data":0.0553    ,"dData":0.0054     }
     ,{"Z":56 ,"A":140      , "Nucl":"Ba-140"    ,"Data":0.0566    ,"dData":0.0024     }
     ,{"Z":57 ,"A":142      , "Nucl":"La-142"    ,"Data":0.0463    ,"dData":0.0029     }
     ,{"Z":58 ,"A":141      , "Nucl":"Ce-141"    ,"Data":0.0645    ,"dData":0.0084     }
     ,{"Z":58 ,"A":143      , "Nucl":"Ce-143"    ,"Data":0.0483    ,"dData":0.0028     }
     ,{"Z":60 ,"A":147      , "Nucl":"Nd-147"    ,"Data":0.0261    ,"dData":0.0019     }
     ,{"Z":61 ,"A":149      , "Nucl":"Pm-149"    ,"Data":0.0131    ,"dData":0.0022     }
     ,{"Z":61 ,"A":151      , "Nucl":"Pm-151"    ,"Data":0.0064    ,"dData":0.0004     }
     ]
   }
    ,{"incEnergy":6300,"incEnergyUnits":"KEV","Data":"CUM_FY","DataUnits":"PART/FIS"
    ,"Products": [
      {"Z":36 ,"A":85 ,"S":1, "Nucl":"Kr-85-M"   ,"Data":0.0184    ,"dData":0.0012     }
     ,{"Z":36 ,"A":87       , "Nucl":"Kr-87"     ,"Data":0.0266    ,"dData":0.0021     }
     ,{"Z":36 ,"A":88       , "Nucl":"Kr-88"     ,"Data":0.0327    ,"dData":0.0021     }
     ,{"Z":38 ,"A":91       , "Nucl":"Sr-91"     ,"Data":0.0487    ,"dData":0.0019     }
     ,{"Z":38 ,"A":92       , "Nucl":"Sr-92"     ,"Data":0.0473    ,"dData":0.0039     }
     ,{"Z":39 ,"A":93       , "Nucl":"Y-93"      ,"Data":0.0647    ,"dData":0.0044     }
     ,{"Z":40 ,"A":95       , "Nucl":"Zr-95"     ,"Data":0.0627    ,"dData":0.0033     }
     ,{"Z":40 ,"A":97       , "Nucl":"Zr-97"     ,"Data":0.0558    ,"dData":0.0023     }
     ,{"Z":42 ,"A":99       , "Nucl":"Mo-99"     ,"Data":0.0505    ,"dData":0.0029     }
     ,{"Z":44 ,"A":103      , "Nucl":"Ru-103"    ,"Data":0.0352    ,"dData":0.0019     }
     ,{"Z":44 ,"A":105      , "Nucl":"Ru-105"    ,"Data":0.016     ,"dData":0.0017     }
     ,{"Z":46 ,"A":109      , "Nucl":"Pd-109"    ,"Data":0.0039    ,"dData":0.0006     }
     ,{"Z":46 ,"A":112      , "Nucl":"Pd-112"    ,"Data":0.0029    ,"dData":0.0004     }
     ,{"Z":47 ,"A":111      , "Nucl":"Ag-111"    ,"Data":0.003     ,"dData":0.0005     }
     ,{"Z":48 ,"A":115,"S":0, "Nucl":"Cd-115-G"  ,"Data":0.0032    ,"dData":0.0005     }
     ,{"Z":50 ,"A":121,"S":0, "Nucl":"Sn-121-G"  ,"Data":0.0023    ,"dData":0.0003     }
     ,{"Z":50 ,"A":125,"S":0, "Nucl":"Sn-125-G"  ,"Data":0.0021    ,"dData":0.0003     }
     ,{"Z":51 ,"A":127      , "Nucl":"Sb-127"    ,"Data":0.0073    ,"dData":0.0011     }
     ,{"Z":51 ,"A":129      , "Nucl":"Sb-129"    ,"Data":0.0172    ,"dData":0.0015     }
     ,{"Z":52 ,"A":132      , "Nucl":"Te-132"    ,"Data":0.0486    ,"dData":0.0021     }
     ,{"Z":52 ,"A":134      , "Nucl":"Te-134"    ,"Data":0.036     ,"dData":0.0044     }
     ,{"Z":53 ,"A":131      , "Nucl":"I-131"     ,"Data":0.0498    ,"dData":0.0021     }
     ,{"Z":53 ,"A":133      , "Nucl":"I-133"     ,"Data":0.0611    ,"dData":0.0026     }
     ,{"Z":53 ,"A":135      , "Nucl":"I-135"     ,"Data":0.0566    ,"dData":0.0025     }
     ,{"Z":56 ,"A":139      , "Nucl":"Ba-139"    ,"Data":0.0557    ,"dData":0.0043     }
     ,{"Z":56 ,"A":140      , "Nucl":"Ba-140"    ,"Data":0.056     ,"dData":0.0023     }
     ,{"Z":57 ,"A":142      , "Nucl":"La-142"    ,"Data":0.0485    ,"dData":0.0033     }
     ,{"Z":58 ,"A":141      , "Nucl":"Ce-141"    ,"Data":0.057     ,"dData":0.0049     }
     ,{"Z":58 ,"A":143      , "Nucl":"Ce-143"    ,"Data":0.049     ,"dData":0.003      }
     ,{"Z":60 ,"A":147      , "Nucl":"Nd-147"    ,"Data":0.0227    ,"dData":0.0017     }
     ,{"Z":61 ,"A":149      , "Nucl":"Pm-149"    ,"Data":0.0149    ,"dData":0.0019     }
     ,{"Z":61 ,"A":151      , "Nucl":"Pm-151"    ,"Data":0.0058    ,"dData":0.0005     }
     ]
   }
    ,{"incEnergy":7100,"incEnergyUnits":"KEV","Data":"CUM_FY","DataUnits":"PART/FIS"
    ,"Products": [
      {"Z":36 ,"A":85 ,"S":1, "Nucl":"Kr-85-M"   ,"Data":0.0237    ,"dData":0.0014     }
     ,{"Z":36 ,"A":87       , "Nucl":"Kr-87"     ,"Data":0.0305    ,"dData":0.002      }
     ,{"Z":36 ,"A":88       , "Nucl":"Kr-88"     ,"Data":0.0343    ,"dData":0.0019     }
     ,{"Z":38 ,"A":91       , "Nucl":"Sr-91"     ,"Data":0.0519    ,"dData":0.002      }
     ,{"Z":38 ,"A":92       , "Nucl":"Sr-92"     ,"Data":0.0478    ,"dData":0.0045     }
     ,{"Z":39 ,"A":93       , "Nucl":"Y-93"      ,"Data":0.062     ,"dData":0.0044     }
     ,{"Z":40 ,"A":95       , "Nucl":"Zr-95"     ,"Data":0.0605    ,"dData":0.003      }
     ,{"Z":40 ,"A":97       , "Nucl":"Zr-97"     ,"Data":0.0557    ,"dData":0.0022     }
     ,{"Z":42 ,"A":99       , "Nucl":"Mo-99"     ,"Data":0.0521    ,"dData":0.0028     }
     ,{"Z":44 ,"A":103      , "Nucl":"Ru-103"    ,"Data":0.0322    ,"dData":0.0017     }
     ,{"Z":44 ,"A":105      , "Nucl":"Ru-105"    ,"Data":0.0163    ,"dData":0.0009     }
     ,{"Z":46 ,"A":109      , "Nucl":"Pd-109"    ,"Data":0.0039    ,"dData":0.0006     }
     ,{"Z":46 ,"A":112      , "Nucl":"Pd-112"    ,"Data":0.0023    ,"dData":0.0004     }
     ,{"Z":47 ,"A":111      , "Nucl":"Ag-111"    ,"Data":0.0031    ,"dData":0.0005     }
     ,{"Z":48 ,"A":115,"S":0, "Nucl":"Cd-115-G"  ,"Data":0.0034    ,"dData":0.0005     }
     ,{"Z":50 ,"A":121,"S":0, "Nucl":"Sn-121-G"  ,"Data":0.0023    ,"dData":0.0003     }
     ,{"Z":50 ,"A":125,"S":0, "Nucl":"Sn-125-G"  ,"Data":0.002     ,"dData":0.0003     }
     ,{"Z":51 ,"A":127      , "Nucl":"Sb-127"    ,"Data":0.0078    ,"dData":0.0012     }
     ,{"Z":51 ,"A":129      , "Nucl":"Sb-129"    ,"Data":0.0174    ,"dData":0.0014     }
     ,{"Z":52 ,"A":132      , "Nucl":"Te-132"    ,"Data":0.0485    ,"dData":0.0019     }
     ,{"Z":52 ,"A":134      , "Nucl":"Te-134"    ,"Data":0.0391    ,"dData":0.0058     }
     ,{"Z":53 ,"A":131      , "Nucl":"I-131"     ,"Data":0.0441    ,"dData":0.0032     }
     ,{"Z":53 ,"A":133      , "Nucl":"I-133"     ,"Data":0.0622    ,"dData":0.0027     }
     ,{"Z":53 ,"A":135      , "Nucl":"I-135"     ,"Data":0.0583    ,"dData":0.0022     }
     ,{"Z":56 ,"A":140      , "Nucl":"Ba-140"    ,"Data":0.0551    ,"dData":0.0022     }
     ,{"Z":57 ,"A":142      , "Nucl":"La-142"    ,"Data":0.049     ,"dData":0.0029     }
     ,{"Z":58 ,"A":141      , "Nucl":"Ce-141"    ,"Data":0.0587    ,"dData":0.0055     }
     ,{"Z":58 ,"A":143      , "Nucl":"Ce-143"    ,"Data":0.0502    ,"dData":0.0029     }
     ,{"Z":58 ,"A":144      , "Nucl":"Ce-144"    ,"Data":0.043     ,"dData":0.0051     }
     ,{"Z":60 ,"A":147      , "Nucl":"Nd-147"    ,"Data":0.0213    ,"dData":0.0014     }
     ,{"Z":61 ,"A":149      , "Nucl":"Pm-149"    ,"Data":0.011     ,"dData":0.0014     }
     ,{"Z":61 ,"A":151      , "Nucl":"Pm-151"    ,"Data":0.0053    ,"dData":0.0005     }
     ]
   }
    ,{"incEnergy":8100,"incEnergyUnits":"KEV","Data":"CUM_FY","DataUnits":"PART/FIS"
    ,"Products": [
      {"Z":36 ,"A":85 ,"S":1, "Nucl":"Kr-85-M"   ,"Data":0.0207    ,"dData":0.0013     }
     ,{"Z":36 ,"A":87       , "Nucl":"Kr-87"     ,"Data":0.0283    ,"dData":0.0017     }
     ,{"Z":36 ,"A":88       , "Nucl":"Kr-88"     ,"Data":0.0338    ,"dData":0.0018     }
     ,{"Z":38 ,"A":91       , "Nucl":"Sr-91"     ,"Data":0.0515    ,"dData":0.0021     }
     ,{"Z":38 ,"A":92       , "Nucl":"Sr-92"     ,"Data":0.0479    ,"dData":0.0039     }
     ,{"Z":39 ,"A":93       , "Nucl":"Y-93"      ,"Data":0.0623    ,"dData":0.0036     }
     ,{"Z":40 ,"A":95       , "Nucl":"Zr-95"     ,"Data":0.0614    ,"dData":0.0032     }
     ,{"Z":40 ,"A":97       , "Nucl":"Zr-97"     ,"Data":0.0547    ,"dData":0.0023     }
     ,{"Z":42 ,"A":99       , "Nucl":"Mo-99"     ,"Data":0.0492    ,"dData":0.0027     }
     ,{"Z":44 ,"A":103      , "Nucl":"Ru-103"    ,"Data":0.0308    ,"dData":0.0017     }
     ,{"Z":44 ,"A":105      , "Nucl":"Ru-105"    ,"Data":0.0153    ,"dData":0.0009     }
     ,{"Z":46 ,"A":109      , "Nucl":"Pd-109"    ,"Data":0.0054    ,"dData":0.0008     }
     ,{"Z":46 ,"A":112      , "Nucl":"Pd-112"    ,"Data":0.0044    ,"dData":0.0006     }
     ,{"Z":47 ,"A":111      , "Nucl":"Ag-111"    ,"Data":0.0043    ,"dData":0.0006     }
     ,{"Z":48 ,"A":115,"S":0, "Nucl":"Cd-115-G"  ,"Data":0.0038    ,"dData":0.0006     }
     ,{"Z":50 ,"A":121,"S":0, "Nucl":"Sn-121-G"  ,"Data":0.003     ,"dData":0.0005     }
     ,{"Z":50 ,"A":125,"S":0, "Nucl":"Sn-125-G"  ,"Data":0.003     ,"dData":0.0005     }
     ,{"Z":51 ,"A":127      , "Nucl":"Sb-127"    ,"Data":0.0098    ,"dData":0.0015     }
     ,{"Z":51 ,"A":129      , "Nucl":"Sb-129"    ,"Data":0.0175    ,"dData":0.0014     }
     ,{"Z":52 ,"A":132      , "Nucl":"Te-132"    ,"Data":0.0475    ,"dData":0.002      }
     ,{"Z":52 ,"A":134      , "Nucl":"Te-134"    ,"Data":0.0374    ,"dData":0.0051     }
     ,{"Z":53 ,"A":131      , "Nucl":"I-131"     ,"Data":0.0436    ,"dData":0.0018     }
     ,{"Z":53 ,"A":133      , "Nucl":"I-133"     ,"Data":0.0595    ,"dData":0.0026     }
     ,{"Z":53 ,"A":135      , "Nucl":"I-135"     ,"Data":0.0568    ,"dData":0.0036     }
     ,{"Z":54 ,"A":138      , "Nucl":"Xe-138"    ,"Data":0.0523    ,"dData":0.003      }
     ,{"Z":56 ,"A":139      , "Nucl":"Ba-139"    ,"Data":0.0601    ,"dData":0.0039     }
     ,{"Z":56 ,"A":140      , "Nucl":"Ba-140"    ,"Data":0.053     ,"dData":0.002      }
     ,{"Z":57 ,"A":142      , "Nucl":"La-142"    ,"Data":0.0468    ,"dData":0.0027     }
     ,{"Z":58 ,"A":141      , "Nucl":"Ce-141"    ,"Data":0.0557    ,"dData":0.0043     }
     ,{"Z":58 ,"A":143      , "Nucl":"Ce-143"    ,"Data":0.0492    ,"dData":0.0028     }
     ,{"Z":58 ,"A":144      , "Nucl":"Ce-144"    ,"Data":0.0465    ,"dData":0.0055     }
     ,{"Z":60 ,"A":147      , "Nucl":"Nd-147"    ,"Data":0.0222    ,"dData":0.0015     }
     ,{"Z":61 ,"A":149      , "Nucl":"Pm-149"    ,"Data":0.0112    ,"dData":0.0012     }
     ,{"Z":61 ,"A":151      , "Nucl":"Pm-151"    ,"Data":0.0053    ,"dData":0.0003     }
     ]
   }
  ]
 }
,
 { "type":"FYdata", "id":"12729003"
  ,"subent":{"id":"12729003", "updated":"20201025" }
  ,"entry":{"id":"12729", "updated":"20201025" }
  ,"author1":"L.E.Glendenin+"
  ,"year":1981
  ,"ref1":{"code":"J,PR/C,24,2600,1981"
          ,"exp":"Jour: Physical Review, Part C, Nuclear Physics, Vol.24, p.2600 (1981)"
          }
  ,"reaction": {
     "code":"92-U-235(N,F)ELEM/MASS,IND,FY"
    ,"Proj":"N"
    ,"Target":"92-U-235"
    ,"ReactionType":"FY"     ,"MF":801  ,"ReacTypeExp":"Fission product yield"
    ,"DataType":"IND,FY"
    ,"Quantity":"Independent fission-product yield"
    ,"IndVarFamCode":"0 2    7"
  }
  ,"incEnergies": [
    {"incEnergy":170,"incEnergyUnits":"KEV","Data":"IND_FY","DataUnits":"PART/FIS"
    ,"Products": [
      {"Z":53 ,"A":134      , "Nucl":"I-134"     ,"Data":0.008     ,"dData":0.006      }
     ,{"Z":54 ,"A":135      , "Nucl":"Xe-135"    ,"Data":0.005     ,"dData":0.002      }
     ]
   }
    ,{"incEnergy":550,"incEnergyUnits":"KEV","Data":"IND_FY","DataUnits":"PART/FIS"
    ,"Products": [
      {"Z":53 ,"A":134      , "Nucl":"I-134"     ,"Data":0.0179    ,"dData":0.013      }
     ,{"Z":54 ,"A":135      , "Nucl":"Xe-135"    ,"Data":0.0038    ,"dData":0.0022     }
     ]
   }
    ,{"incEnergy":2000,"incEnergyUnits":"KEV","Data":"IND_FY","DataUnits":"PART/FIS"
    ,"Products": [
      {"Z":53 ,"A":134      , "Nucl":"I-134"     ,"Data":0.0213    ,"dData":0.01       }
     ,{"Z":54 ,"A":135      , "Nucl":"Xe-135"    ,"Data":0.0038    ,"dData":0.002      }
     ]
   }
    ,{"incEnergy":4000,"incEnergyUnits":"KEV","Data":"IND_FY","DataUnits":"PART/FIS"
    ,"Products": [
      {"Z":53 ,"A":134      , "Nucl":"I-134"     ,"Data":0.0195    ,"dData":0.0044     }
     ,{"Z":54 ,"A":135      , "Nucl":"Xe-135"    ,"Data":0.0046    ,"dData":0.003      }
     ]
   }
    ,{"incEnergy":5500,"incEnergyUnits":"KEV","Data":"IND_FY","DataUnits":"PART/FIS"
    ,"Products": [
      {"Z":53 ,"A":134      , "Nucl":"I-134"     ,"Data":0.0265    ,"dData":0.0092     }
     ,{"Z":54 ,"A":135      , "Nucl":"Xe-135"    ,"Data":0.0089    ,"dData":0.0018     }
     ]
   }
    ,{"incEnergy":6300,"incEnergyUnits":"KEV","Data":"IND_FY","DataUnits":"PART/FIS"
    ,"Products": [
      {"Z":53 ,"A":134      , "Nucl":"I-134"     ,"Data":0.0297    ,"dData":0.0243     }
     ,{"Z":54 ,"A":135      , "Nucl":"Xe-135"    ,"Data":0.0081    ,"dData":0.0024     }
     ]
   }
    ,{"incEnergy":7100,"incEnergyUnits":"KEV","Data":"IND_FY","DataUnits":"PART/FIS"
    ,"Products": [
      {"Z":53 ,"A":134      , "Nucl":"I-134"     ,"Data":0.0327    ,"dData":0.0156     }
     ,{"Z":54 ,"A":135      , "Nucl":"Xe-135"    ,"Data":0.0039    ,"dData":0.0033     }
     ]
   }
    ,{"incEnergy":8100,"incEnergyUnits":"KEV","Data":"IND_FY","DataUnits":"PART/FIS"
    ,"Products": [
      {"Z":53 ,"A":134      , "Nucl":"I-134"     ,"Data":0.0269    ,"dData":0.0118     }
     ]
   }
  ]
 }
,
 { "type":"FYdata", "id":"127290041" ,"pointer":"1"
  ,"subent":{"id":"12729004", "updated":"20210426" }
  ,"entry":{"id":"12729", "updated":"20201025" }
  ,"author1":"L.E.Glendenin+"
  ,"year":1981
  ,"ref1":{"code":"J,PR/C,24,2600,1981"
          ,"exp":"Jour: Physical Review, Part C, Nuclear Physics, Vol.24, p.2600 (1981)"
          }
  ,"reaction": {
     "code":"92-U-235(N,F),,AP,LF"
    ,"Proj":"N"
    ,"Target":"92-U-235"
    ,"ReactionType":"AP"     ,"MF":801  ,"ReacTypeExp":"Most probable mass"
    ,"DataType":",AP,LF"
    ,"Quantity":"Most probable mass of fragment specified"
    ,"IndVarFamCode":"0 2    7"
  }
  ,"incEnergies": [
    {"incEnergy":170,"incEnergyUnits":"KEV","Data":"AP_LF","DataUnits":"NO-DIM"
    ,"Products": [
      {"Data":94.9       }
     ]
   }
    ,{"incEnergy":550,"incEnergyUnits":"KEV","Data":"AP_LF","DataUnits":"NO-DIM"
    ,"Products": [
      {"Data":94.9       }
     ]
   }
    ,{"incEnergy":1000,"incEnergyUnits":"KEV","Data":"AP_LF","DataUnits":"NO-DIM"
    ,"Products": [
      {"Data":94.9       }
     ]
   }
    ,{"incEnergy":2000,"incEnergyUnits":"KEV","Data":"AP_LF","DataUnits":"NO-DIM"
    ,"Products": [
      {"Data":94.9       }
     ]
   }
    ,{"incEnergy":4000,"incEnergyUnits":"KEV","Data":"AP_LF","DataUnits":"NO-DIM"
    ,"Products": [
      {"Data":95.2       }
     ]
   }
    ,{"incEnergy":5500,"incEnergyUnits":"KEV","Data":"AP_LF","DataUnits":"NO-DIM"
    ,"Products": [
      {"Data":95.4       }
     ]
   }
    ,{"incEnergy":6300,"incEnergyUnits":"KEV","Data":"AP_LF","DataUnits":"NO-DIM"
    ,"Products": [
      {"Data":95.5       }
     ]
   }
    ,{"incEnergy":7100,"incEnergyUnits":"KEV","Data":"AP_LF","DataUnits":"NO-DIM"
    ,"Products": [
      {"Data":95.2       }
     ]
   }
    ,{"incEnergy":8100,"incEnergyUnits":"KEV","Data":"AP_LF","DataUnits":"NO-DIM"
    ,"Products": [
      {"Data":95.4       }
     ]
   }
  ]
 }
,
 { "type":"FYdata", "id":"127290042" ,"pointer":"2"
  ,"subent":{"id":"12729004", "updated":"20210426" }
  ,"entry":{"id":"12729", "updated":"20201025" }
  ,"author1":"L.E.Glendenin+"
  ,"year":1981
  ,"ref1":{"code":"J,PR/C,24,2600,1981"
          ,"exp":"Jour: Physical Review, Part C, Nuclear Physics, Vol.24, p.2600 (1981)"
          }
  ,"reaction": {
     "code":"92-U-235(N,F),,AP,HF"
    ,"Proj":"N"
    ,"Target":"92-U-235"
    ,"ReactionType":"AP"     ,"MF":801  ,"ReacTypeExp":"Most probable mass"
    ,"DataType":",AP,HF"
    ,"Quantity":"Most probable mass of fragment specified"
    ,"IndVarFamCode":"0 2    7"
  }
  ,"incEnergies": [
    {"incEnergy":170,"incEnergyUnits":"KEV","Data":"AP_HF","DataUnits":"NO-DIM"
    ,"Products": [
      {"Data":138.6      }
     ]
   }
    ,{"incEnergy":550,"incEnergyUnits":"KEV","Data":"AP_HF","DataUnits":"NO-DIM"
    ,"Products": [
      {"Data":138.7      }
     ]
   }
    ,{"incEnergy":1000,"incEnergyUnits":"KEV","Data":"AP_HF","DataUnits":"NO-DIM"
    ,"Products": [
      {"Data":138.5      }
     ]
   }
    ,{"incEnergy":2000,"incEnergyUnits":"KEV","Data":"AP_HF","DataUnits":"NO-DIM"
    ,"Products": [
      {"Data":138.6      }
     ]
   }
    ,{"incEnergy":4000,"incEnergyUnits":"KEV","Data":"AP_HF","DataUnits":"NO-DIM"
    ,"Products": [
      {"Data":138        }
     ]
   }
    ,{"incEnergy":5500,"incEnergyUnits":"KEV","Data":"AP_HF","DataUnits":"NO-DIM"
    ,"Products": [
      {"Data":137.7      }
     ]
   }
    ,{"incEnergy":6300,"incEnergyUnits":"KEV","Data":"AP_HF","DataUnits":"NO-DIM"
    ,"Products": [
      {"Data":137.6      }
     ]
   }
    ,{"incEnergy":7100,"incEnergyUnits":"KEV","Data":"AP_HF","DataUnits":"NO-DIM"
    ,"Products": [
      {"Data":137.6      }
     ]
   }
    ,{"incEnergy":8100,"incEnergyUnits":"KEV","Data":"AP_HF","DataUnits":"NO-DIM"
    ,"Products": [
      {"Data":137.5      }
     ]
   }
  ]
 }
,
 { "type":"data", "id":"127290043" ,"pointer":"3"
  ,"subent":{"id":"12729004", "updated":"20210426" }
  ,"entry":{"id":"12729", "updated":"20201025" }
  ,"author1":"L.E.Glendenin+"
  ,"year":1981
  ,"ref1":{"code":"J,PR/C,24,2600,1981"
          ,"exp":"Jour: Physical Review, Part C, Nuclear Physics, Vol.24, p.2600 (1981)"
          }
  ,"reaction": {
     "code":"92-U-235(N,F),,NU"
    ,"Proj":"N"
    ,"Target":"92-U-235"
    ,"ReactionType":"NU"     ,"MF":1    ,"ReacTypeExp":"Neutron yield (nu-bar)"
    ,"DataType":",NU"
    ,"Quantity":"Total neutron yield (nu-bar)"
    ,"IndVarFamCode":"0 2"
  }
  ,"dataCols": [
	 { "Code":"EN"  ,"Units":"KEV", "Exp":"Incident energy"}
	,{ "Code":"Data","Units":"PART/FIS","Data":"NU"}
  ]
  ,"dataPoints": [
	 {"EN":170     ,"Data":2.5        }
	,{"EN":550     ,"Data":2.4        }
	,{"EN":1000    ,"Data":2.6        }
	,{"EN":2000    ,"Data":2.5        }
	,{"EN":4000    ,"Data":2.8        }
	,{"EN":5500    ,"Data":2.9        }
	,{"EN":6300    ,"Data":2.9        }
	,{"EN":7100    ,"Data":3.2        }
	,{"EN":8100    ,"Data":3.1        }
  ]
 }
]
}
;
