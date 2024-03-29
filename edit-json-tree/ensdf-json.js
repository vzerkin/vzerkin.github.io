ensdf_json=
{
 "observationStatus": "observed",
 "hasStableGroundState": false,
 "qValues": [
  {
   "type": "betaMinus",
   "references": [
    "2017WA10"
   ],
   "isFromSystematics": false,
   "unit": "keV",
   "value": 496.8,
   "uncertainty": {
    "type": "symmetric",
    "value": 0.8
   }
  },
  {
   "type": "alpha",
   "references": [
    "2017WA10"
   ],
   "isFromSystematics": false,
   "unit": "keV",
   "value": 1447,
   "uncertainty": {
    "type": "symmetric",
    "value": 5
   }
  }
 ],
 "separationEnergies": [
  {
   "type": "neutron",
   "references": [
    "2017WA10"
   ],
   "isFromSystematics": false,
   "unit": "keV",
   "value": 7072.89,
   "uncertainty": {
    "type": "symmetric",
    "value": 0.16
   }
  },
  {
   "type": "proton",
   "references": [
    "2017WA10"
   ],
   "isFromSystematics": false,
   "unit": "keV",
   "value": 6181.5,
   "uncertainty": {
    "type": "symmetric",
    "value": 1.2
   }
  }
 ],
 "crossReferences": [
  "177LU IT DECAY (160.4 D)",
  "177YB B- DECAY",
  "176LU(N,G) E=THERMAL",
  "176LU(D,P)",
  "176YB(3HE,D),(A,T)",
  "178HF(T,A)",
  "(HI,XNG)"
 ],
 "levels": [
  {
   "energy": {
    "unit": "keV",
    "value": 0,
    "uncertainty": {
     "type": "symmetric",
     "value": 0
    }
   },
   "spinParity": {
    "values": [
     {
      "twoTimesSpin": 7,
      "isTentativeSpin": false,
      "parity": "+",
      "isTentativeParity": false
     }
    ]
   },
   "isStable": false,
   "halfLife": {
    "unit": "d",
    "value": 6.6443,
    "uncertainty": {
     "type": "symmetric",
     "value": 0.0009
    }
   },
   "decayBranchingRatios": {
    "observed": [
     {
      "decayString": "B-",
      "decayMode": [
       {
        "radiation": "betaMinus",
        "multiplicity": 1
       }
      ],
      "value": 100,
      "uncertainty": {
       "type": "symmetric",
       "value": 0
      }
     }
    ]
   },
   "multipoleMoments": [
    {
     "type": "M1",
     "isAbsoluteValue": false,
     "value": 2.2384,
     "uncertainty": {
      "type": "symmetric",
      "value": 0.0014
     }
    },
    {
     "type": "E2",
     "isAbsoluteValue": false,
     "value": 3.39,
     "uncertainty": {
      "type": "symmetric",
      "value": 0.03
     }
    }
   ],
   "flags": [
    "A"
   ],
   "crossReferences": [
    {
     "dataset": "176LU(N,G) E=THERMAL"
    },
    {
     "dataset": "177YB B- DECAY"
    },
    {
     "dataset": "177LU IT DECAY (160.4 D)"
    },
    {
     "dataset": "176LU(D,P)"
    },
    {
     "dataset": "176YB(3HE,D),(A,T)"
    },
    {
     "dataset": "178HF(T,A)"
    },
    {
     "dataset": "(HI,XNG)"
    }
   ],
   "band": 0,
   "comments": [
    {
     "type": "comment",
     "head": [
      {
       "name": "J"
      }
     ],
     "body": "7/2, atomic beam (1962Pe07) and collinear laser spectroscopy (1998Ge13); \\ensuremath{\\pi} from L=4 in \\ensuremath{^{\\textnormal{176}}}Yb(\\ensuremath{^{\\textnormal{3}}}He,d),(\\ensuremath{\\alpha},t)"
    },
    {
     "type": "comment",
     "head": [
      {
       "name": "T"
      }
     ],
     "body": "Weighted average of 6.645 d \\textit{30} (1982La25), 6.65 d \\textit{1} (2001Zi01), 6.646 d \\textit{5} (2001Sc23), 6.6475 d \\textit{20} (2004Sc04), 6.6465 d \\textit{50} (2011Po07), 6.639 d \\textit{9} (2012Ko24), and 6.6430 d \\textit{11} (2017FeZZ), deduced when the half-life of the \\ensuremath{^{\\textnormal{177}}}Lu IT decay (160.4 d) has been taken into account. Other: 6.660 d \\textit{17}\\hphantom{a}(2016Lu16). Other values where the half-life of the \\ensuremath{^{\\textnormal{177}}}Lu IT decay (160.4 d) has not been taken into account: 6.645 \\textit{3} (2016Dr15), 6.681 d \\textit{6} (2012Re25), 6.709 d \\textit{1} (2008Ca13, HPGe \\ensuremath{\\gamma}-ray spectrometry), 6.680 \\textit{6} (2008Ca13, \\ensuremath{\\beta} spectrometry), 6.7479 d \\textit{7} (1990Ab02), 6.71 d \\textit{1} (1972Em01), 6.74 d \\textit{4} (1960Sc19), and 6.75 d \\textit{5} (1958Be41)."
    },
    {
     "type": "comment",
     "head": [
      {
       "name": "MOMM1"
      }
     ],
     "body": "From 1998Ge13, 2014StZZ (recalibrated from the atomic beam data). Others: 2.239 \\textit{11} (atomic beam; 1975Mu15) and 2.239 \\textit{7} (collinear laser spectroscopy; 1998Ge13)"
    },
    {
     "type": "comment",
     "head": [
      {
       "name": "MOME2"
      }
     ],
     "body": "From 1998Ge13 (collinear laser spectroscopy), recommended in 2016St14. Others: +3.39 \\textit{2} (1962Pe07) and +3.39 \\textit{2} (1996Ko26)"
    },
    {
     "type": "comment",
     "body": "\\ensuremath{\\Delta}\\ensuremath{<}r\\ensuremath{^{2}}\\ensuremath{>}(170,177)=+0.48 \\textit{5} (1998Ge13)."
    },
    {
     "type": "comment",
     "head": [
      {
       "name": "CONF"
      }
     ],
     "body": "\\ensuremath{\\pi}7/2[404] (g\\ensuremath{_{\\textnormal{7/2}}}) Nilsson configuration. Based on the observed in-band properties, such as alignment and g\\ensuremath{_{K}}-g\\ensuremath{_{\\textnormal{R}}} values, comparison between the measured \\ensuremath{\\mu} and Nilsson model predictions, and systematics of structures in neighboring nuclei."
    }
   ]
  },
  {
   "energy": {
    "unit": "keV",
    "value": 121.6214,
    "uncertainty": {
     "type": "symmetric",
     "value": 0.0004
    }
   },
   "spinParity": {
    "values": [
     {
      "twoTimesSpin": 9,
      "isTentativeSpin": false,
      "parity": "+",
      "isTentativeParity": false
     }
    ]
   },
   "isStable": false,
   "halfLife": {
    "unit": "ns",
    "value": 0.117,
    "uncertainty": {
     "type": "symmetric",
     "value": 0.004
    }
   },
   "multipoleMoments": [
    {
     "type": "M1",
     "isAbsoluteValue": false,
     "value": 2.2,
     "uncertainty": {
      "type": "symmetric",
      "value": 0.8
     }
    }
   ],
   "flags": [
    "A"
   ],
   "crossReferences": [
    {
     "dataset": "176LU(N,G) E=THERMAL"
    },
    {
     "dataset": "177YB B- DECAY"
    },
    {
     "dataset": "177LU IT DECAY (160.4 D)"
    },
    {
     "dataset": "176LU(D,P)"
    },
    {
     "dataset": "176YB(3HE,D),(A,T)",
     "level": 123
    },
    {
     "dataset": "178HF(T,A)",
     "level": 123
    },
    {
     "dataset": "(HI,XNG)"
    }
   ],
   "gammas": [
    {
     "energy": {
      "unit": "keV",
      "value": 121.6211,
      "uncertainty": {
       "type": "symmetric",
       "value": 0.0005
      }
     },
     "gammaIntensity": {
      "value": 100,
      "uncertainty": {
       "type": "unreported"
      }
     },
     "initialLevelIndex": 1,
     "finalLevelIndex": 0,
     "multipolarity": {
      "stringRepresentation": "M1+E2",
      "isMixedTransition": true,
      "spins": [
       {
        "spin": 1
       },
       {
        "spin": 2
       }
      ],
      "parity": "+",
      "mixingRatio": {
       "isAbsoluteValue": true,
       "value": 0.51,
       "uncertainty": {
        "type": "symmetric",
        "value": 0.05
       }
      }
     },
     "theoreticalInternalConversionCoefficients": {
      "totalValue": {
       "value": 2,
       "uncertainty": {
        "type": "symmetric",
        "value": 0.04
       }
      },
      "shellValues": [
       {
        "includesOuterShells": false,
        "shell": "K",
        "value": 1.52,
        "uncertainty": {
         "type": "symmetric",
         "value": 0.05
        }
       },
       {
        "includesOuterShells": false,
        "shell": "L",
        "value": 0.367,
        "uncertainty": {
         "type": "symmetric",
         "value": 0.016
        }
       },
       {
        "includesOuterShells": false,
        "shell": "M",
        "value": 0.086,
        "uncertainty": {
         "type": "symmetric",
         "value": 0.005
        }
       },
       {
        "includesOuterShells": false,
        "shell": "N",
        "value": 0.0201,
        "uncertainty": {
         "type": "symmetric",
         "value": 0.001
        }
       },
       {
        "includesOuterShells": false,
        "shell": "O",
        "value": 0.00275,
        "uncertainty": {
         "type": "symmetric",
         "value": 0.00011
        }
       },
       {
        "includesOuterShells": false,
        "shell": "P",
        "value": 0.000111,
        "uncertainty": {
         "type": "symmetric",
         "value": 0.000004
        }
       }
      ]
     },
     "reducedTransitionProbabilities": [
      {
       "multipolarity": "M1",
       "unit": "W.u.",
       "value": 0.0277,
       "uncertainty": {
        "type": "symmetric",
        "value": 0.0016
       }
      },
      {
       "multipolarity": "E2",
       "unit": "W.u.",
       "value": 210,
       "uncertainty": {
        "type": "symmetric",
        "value": 40
       }
      }
     ],
     "flags": [
      "P"
     ],
     "comments": [
      {
       "type": "comment",
       "head": [
        {
         "name": "M"
        }
       ],
       "body": "\\ensuremath{\\gamma}\\ensuremath{\\gamma}(\\ensuremath{\\theta}) (1964Kr01,1974Kr12), \\ensuremath{\\alpha}(K)exp=1.41 \\textit{9} (2012De24) (K/L1)exp=3.6 \\textit{3}, (K/L1)exp=7.2 \\textit{6} and (K/L1)exp=10.8 \\textit{12} (1972Ag05); \\ensuremath{\\alpha}(K)exp=2.2 \\textit{8}, \\ensuremath{\\alpha}(L1)exp=0.31 \\textit{12}, \\ensuremath{\\alpha}(L2)exp=0.16 \\textit{6}, \\ensuremath{\\alpha}(L3)exp=0.11 \\textit{4}, \\ensuremath{\\alpha}(M2)exp=0.041 \\textit{15} and \\ensuremath{\\alpha}(M3)exp=0.024 \\textit{9} (1996Pe05); (K/L)exp=4.5 \\textit{6} and ((L1+L2))/L3)exp=4.5 \\textit{6} (1964Jo03); \\ensuremath{\\alpha}(K)exp=1.43, \\ensuremath{\\alpha}(L1)exp+\\ensuremath{\\alpha}(L2)exp=0.31, \\ensuremath{\\alpha}(L3)exp=0.086, \\ensuremath{\\alpha}(M)exp=0.11 and \\ensuremath{\\alpha}(N)exp=0.026 (1971Ma45)."
      },
      {
       "type": "comment",
       "head": [
        {
         "name": "MR"
        }
       ],
       "body": "Using the briccmixing program and the following experimental data: \\ensuremath{\\delta}(\\ensuremath{\\gamma}\\ensuremath{\\gamma}(\\ensuremath{\\theta}))=+0.54 \\textit{7} (1974Kr12) and 0.49 \\textit{4} (1964Kr01), and \\ensuremath{\\alpha}(K)exp=1.41 \\textit{9} (2012De24). The sign is from 1974Kr12. Others (not used in the analysis): (K/L1)exp=3.6 \\textit{3}, (K/L1)exp=7.2 \\textit{6} and (K/L1)exp=10.8 \\textit{12} (1972Ag05); \\ensuremath{\\alpha}(K)exp=2.2 \\textit{8}, \\ensuremath{\\alpha}(L1)exp=0.31 \\textit{12}, \\ensuremath{\\alpha}(L2)exp=0.16 \\textit{6}, \\ensuremath{\\alpha}(L3)exp=0.11 \\textit{4}, \\ensuremath{\\alpha}(M2)exp=0.041 \\textit{15} and \\ensuremath{\\alpha}(M3)exp=0.024 \\textit{9} (1996Pe05); (K/L)exp=4.5 \\textit{6} and ((L1+L2))/L3)exp=4.5 \\textit{6} (1964Jo03)"
      }
     ]
    }
   ],
   "band": 0,
   "comments": [
    {
     "type": "comment",
     "head": [
      {
       "name": "J"
      }
     ],
     "body": "L=4 in \\ensuremath{^{\\textnormal{176}}}Yb(\\ensuremath{^{\\textnormal{3}}}He,d),(\\ensuremath{\\alpha},t); 121.65\\ensuremath{\\gamma} M1+E2 to 7/2\\ensuremath{^{+}}; band assignment."
    },
    {
     "type": "comment",
     "head": [
      {
       "name": "T"
      }
     ],
     "body": "Weighted average of 0.116 ns \\textit{8} (1965Sc01) and 0.118 ns \\textit{5} (1979Be54). Other: 0.26 ns \\textit{3} (1963Li05)"
    },
    {
     "type": "comment",
     "head": [
      {
       "name": "MOMM1"
      }
     ],
     "body": "Integral perturbed angular correlations (1973Il02,2014StZZ)."
    }
   ]
  },
  {
   "energy": {
    "unit": "keV",
    "value": 150.3984,
    "uncertainty": {
     "type": "symmetric",
     "value": 0.001
    }
   },
   "spinParity": {
    "values": [
     {
      "twoTimesSpin": 9,
      "isTentativeSpin": false,
      "parity": "-",
      "isTentativeParity": false
     }
    ]
   },
   "isStable": false,
   "halfLife": {
    "unit": "ns",
    "value": 133.1,
    "uncertainty": {
     "type": "symmetric",
     "value": 2.4
    }
   },
   "multipoleMoments": [
    {
     "type": "M1",
     "isAbsoluteValue": false,
     "value": 5.5,
     "uncertainty": {
      "type": "symmetric",
      "value": 0.3
     }
    }
   ],
   "flags": [
    "B"
   ],
   "crossReferences": [
    {
     "dataset": "176LU(N,G) E=THERMAL"
    },
    {
     "dataset": "177YB B- DECAY"
    },
    {
     "dataset": "177LU IT DECAY (160.4 D)"
    },
    {
     "dataset": "176YB(3HE,D),(A,T)",
     "level": 153
    },
    {
     "dataset": "178HF(T,A)",
     "level": 153
    },
    {
     "dataset": "(HI,XNG)"
    }
   ],
   "gammas": [
    {
     "energy": {
      "unit": "keV",
      "value": 150.399,
      "uncertainty": {
       "type": "symmetric",
       "value": 0.001
      }
     },
     "gammaIntensity": {
      "value": 100,
      "uncertainty": {
       "type": "unreported"
      }
     },
     "initialLevelIndex": 2,
     "finalLevelIndex": 0,
     "multipolarity": {
      "stringRepresentation": "E1",
      "spins": [
       {
        "spin": 1
       }
      ],
      "parity": "-"
     },
     "theoreticalInternalConversionCoefficients": {
      "totalValue": {
       "value": 0.512,
       "uncertainty": {
        "type": "symmetric",
        "value": 0.032
       }
      }
     },
     "reducedTransitionProbabilities": [
      {
       "multipolarity": "E1",
       "unit": "W.u.",
       "value": 3.13e-7,
       "uncertainty": {
        "type": "symmetric",
        "value": 9e-9
       }
      }
     ],
     "comments": [
      {
       "type": "comment",
       "head": [
        {
         "name": "M"
        }
       ],
       "body": "An anomalous E1 transition (see 1972Ag05 for details). \\ensuremath{\\alpha}(K)exp=0.61 \\textit{12}, \\ensuremath{\\alpha}(L1)exp=0.122 \\textit{23}, \\ensuremath{\\alpha}(L2)exp=0.047 \\textit{9}, \\ensuremath{\\alpha}(L3)exp=0.0051 \\textit{10}, \\ensuremath{\\alpha}(M1)exp=0.028 \\textit{5}, \\ensuremath{\\alpha}(M2)exp=0.014 \\textit{3} and \\ensuremath{\\alpha}(M3)exp=0.0014 \\textit{5} (1996Pe05). Other: \\ensuremath{\\alpha}(K)exp=0.32, \\ensuremath{\\alpha}(L1)exp+\\ensuremath{\\alpha}(L2)exp=0.09, \\ensuremath{\\alpha}(L3)exp=0.004, \\ensuremath{\\alpha}(M)exp=0.0029 and \\ensuremath{\\alpha}(N)exp=0.0011 (1971Ma45)."
      },
      {
       "type": "comment",
       "head": [
        {
         "name": "CC"
        }
       ],
       "body": "Experimental value of \\ensuremath{\\alpha}\\ensuremath{_{\\textnormal{tot}}}=0.512 \\textit{32} (1972Ag05)."
      }
     ]
    }
   ],
   "band": 1,
   "comments": [
    {
     "type": "comment",
     "head": [
      {
       "name": "J"
      }
     ],
     "body": "L=5 in \\ensuremath{^{\\textnormal{176}}}Yb(\\ensuremath{^{\\textnormal{3}}}He,d),(\\ensuremath{\\alpha},t); 150.399\\ensuremath{\\gamma} E1 to 7/2\\ensuremath{^{+}}"
    },
    {
     "type": "comment",
     "head": [
      {
       "name": "T"
      }
     ],
     "body": "Weighted average of 122 ns \\textit{5} (1955De18), 130 ns \\textit{20} (1949Mc41), and 136.6 ns \\textit{28} (2002DrZZ,2002McZY). Other: 94 ns \\textit{14} (1974Iv02)."
    },
    {
     "type": "comment",
     "head": [
      {
       "name": "MOMM1"
      }
     ],
     "body": "Differential perturbed angular correlations (1977Ne11,2014StZZ)."
    },
    {
     "type": "comment",
     "head": [
      {
       "name": "CONF"
      }
     ],
     "body": "\\ensuremath{\\pi} 9/2[514] (h\\ensuremath{_{\\textnormal{11/2}}}) Nilsson configuration. Based on the observed in-band properties, such as alignment and g\\ensuremath{_{\\textnormal{K}}}-g\\ensuremath{_{\\textnormal{R}}} values, comparison between the measured \\ensuremath{\\mu} and Nilsson model predictions, and systematics of structures in neighboring nuclei."
    }
   ]
  },
  {
   "energy": {
    "unit": "keV",
    "value": 268.7852,
    "uncertainty": {
     "type": "symmetric",
     "value": 0.0005
    }
   },
   "spinParity": {
    "values": [
     {
      "twoTimesSpin": 11,
      "isTentativeSpin": false,
      "parity": "+",
      "isTentativeParity": false
     }
    ]
   },
   "isStable": false,
   "flags": [
    "A"
   ],
   "crossReferences": [
    {
     "dataset": "176LU(N,G) E=THERMAL"
    },
    {
     "dataset": "177YB B- DECAY"
    },
    {
     "dataset": "177LU IT DECAY (160.4 D)"
    },
    {
     "dataset": "176LU(D,P)"
    },
    {
     "dataset": "(HI,XNG)"
    }
   ],
   "gammas": [
    {
     "energy": {
      "unit": "keV",
      "value": 147.1637,
      "uncertainty": {
       "type": "symmetric",
       "value": 0.0005
      }
     },
     "gammaIntensity": {
      "value": 100,
      "uncertainty": {
       "type": "symmetric",
       "value": 1
      }
     },
     "initialLevelIndex": 3,
     "finalLevelIndex": 1,
     "multipolarity": {
      "stringRepresentation": "M1+E2",
      "isMixedTransition": true,
      "spins": [
       {
        "spin": 1
       },
       {
        "spin": 2
       }
      ],
      "parity": "+",
      "mixingRatio": {
       "isAbsoluteValue": true,
       "value": 0.59,
       "uncertainty": {
        "type": "symmetric",
        "value": 0.07
       }
      }
     },
     "theoreticalInternalConversionCoefficients": {
      "totalValue": {
       "value": 1.114,
       "uncertainty": {
        "type": "symmetric",
        "value": 0.025
       }
      },
      "shellValues": [
       {
        "includesOuterShells": false,
        "shell": "K",
        "value": 0.86,
        "uncertainty": {
         "type": "symmetric",
         "value": 0.04
        }
       },
       {
        "includesOuterShells": false,
        "shell": "L",
        "value": 0.198,
        "uncertainty": {
         "type": "symmetric",
         "value": 0.008
        }
       },
       {
        "includesOuterShells": false,
        "shell": "M",
        "value": 0.0463,
        "uncertainty": {
         "type": "symmetric",
         "value": 0.0021
        }
       },
       {
        "includesOuterShells": false,
        "shell": "N",
        "value": 0.0108,
        "uncertainty": {
         "type": "symmetric",
         "value": 0.0005
        }
       },
       {
        "includesOuterShells": false,
        "shell": "O",
        "value": 0.00149,
        "uncertainty": {
         "type": "symmetric",
         "value": 0.00005
        }
       },
       {
        "includesOuterShells": false,
        "shell": "P",
        "value": 0.000062,
        "uncertainty": {
         "type": "symmetric",
         "value": 0.000003
        }
       }
      ]
     },
     "flags": [
      "P"
     ],
     "comments": [
      {
       "type": "comment",
       "head": [
        {
         "name": "M"
        }
       ],
       "body": "\\ensuremath{\\gamma}\\ensuremath{\\gamma}(\\ensuremath{\\theta}) (1974Kr12,1995Ya21); \\ensuremath{\\alpha}(K)exp=0.91 \\textit{9} (2012De24), (K/L)exp=4.5 \\textit{6} and ((L1+L2)/L3)exp=4.6 \\textit{6} (1964Jo03); \\ensuremath{\\alpha}(K)exp=1.1 \\textit{3}, \\ensuremath{\\alpha}(L1)exp=0.15 \\textit{4}, \\ensuremath{\\alpha}(L2)exp=0.10 \\textit{3}, \\ensuremath{\\alpha}(L3)exp=0.0051 \\textit{10}, \\ensuremath{\\alpha}(M1)exp=0.032 \\textit{9}, \\ensuremath{\\alpha}(M2)exp=0.014 \\textit{3} and \\ensuremath{\\alpha}(M3)exp=0.0014 \\textit{5} (1996Pe05); \\ensuremath{\\alpha}(K)exp=0.66, \\ensuremath{\\alpha}(L1+L2)exp=0.12, \\ensuremath{\\alpha}(L3)exp=0.015, \\ensuremath{\\alpha}(M)exp=0.045 and \\ensuremath{\\alpha}(N)exp=0.0097 (1971Ma45); \\ensuremath{\\alpha}(K)exp=1.22 \\textit{54} (1972Ag05)"
      },
      {
       "type": "comment",
       "head": [
        {
         "name": "MR"
        }
       ],
       "body": "Using the briccmixing program and the following experimental data: \\ensuremath{\\delta}(\\ensuremath{\\gamma}\\ensuremath{\\gamma}(\\ensuremath{\\theta}))=+0.54 \\textit{+12{\\textminus}9} (1974Kr12), \\ensuremath{\\alpha}(K)exp=0.91 \\textit{9} (2012De24), (K/L)exp=4.5 \\textit{6} and ((L1+L2)/L3)exp=4.6 \\textit{6} (1964Jo03). The sign is from 1974Kr12."
      },
      {
       "type": "comment",
       "head": [
        {
         "name": "MR"
        }
       ],
       "body": "Others (not used in the analysis): \\ensuremath{\\alpha}(K)exp=1.1 \\textit{3}, \\ensuremath{\\alpha}(L1)exp=0.15 \\textit{4}, \\ensuremath{\\alpha}(L2)exp=0.10 \\textit{3}, \\ensuremath{\\alpha}(L3)exp=0.0051 \\textit{10}, \\ensuremath{\\alpha}(M1)exp=0.032 \\textit{9}, \\ensuremath{\\alpha}(M2)exp=0.014 \\textit{3} and \\ensuremath{\\alpha}(M3)exp=0.0014 \\textit{5} (1996Pe05); \\ensuremath{\\delta}(\\ensuremath{\\gamma}\\ensuremath{\\gamma}(\\ensuremath{\\theta}))=0.58 \\textit{+13{\\textminus}15} (1995Ya21)"
      }
     ]
    },
    {
     "energy": {
      "unit": "keV",
      "value": 268.7847,
      "uncertainty": {
       "type": "symmetric",
       "value": 0.0006
      }
     },
     "gammaIntensity": {
      "value": 97.2,
      "uncertainty": {
       "type": "symmetric",
       "value": 1.4
      }
     },
     "initialLevelIndex": 3,
     "finalLevelIndex": 0,
     "multipolarity": {
      "stringRepresentation": "E2",
      "spins": [
       {
        "spin": 2
       }
      ],
      "parity": "+"
     },
     "theoreticalInternalConversionCoefficients": {
      "totalValue": {
       "value": 0.1071,
       "uncertainty": {
        "type": "unreported"
       }
      },
      "shellValues": [
       {
        "includesOuterShells": false,
        "shell": "K",
        "value": 0.0728,
        "uncertainty": {
         "type": "symmetric",
         "value": 0.0011
        }
       },
       {
        "includesOuterShells": false,
        "shell": "L",
        "value": 0.0263,
        "uncertainty": {
         "type": "symmetric",
         "value": 0.0004
        }
       },
       {
        "includesOuterShells": false,
        "shell": "M",
        "value": 0.00633,
        "uncertainty": {
         "type": "symmetric",
         "value": 0.00009
        }
       },
       {
        "includesOuterShells": false,
        "shell": "N",
        "value": 0.001467,
        "uncertainty": {
         "type": "symmetric",
         "value": 0.000021
        }
       },
       {
        "includesOuterShells": false,
        "shell": "O",
        "value": 0.00019,
        "uncertainty": {
         "type": "symmetric",
         "value": 0.000003
        }
       },
       {
        "includesOuterShells": false,
        "shell": "P",
        "value": 0.00000447,
        "uncertainty": {
         "type": "symmetric",
         "value": 7e-8
        }
       }
      ]
     },
     "flags": [
      "P"
     ],
     "comments": [
      {
       "type": "comment",
       "head": [
        {
         "name": "M"
        }
       ],
       "body": "\\ensuremath{\\alpha}(K)exp=0.0686 \\textit{11}, \\ensuremath{\\alpha}(L1)exp=0.0070 \\textit{12}, \\ensuremath{\\alpha}(L2)exp=0.0135 \\textit{23}, \\ensuremath{\\alpha}(L3)exp=0.0151 \\textit{26}, and \\ensuremath{\\alpha}(M2)exp=0.0032 \\textit{6} (1996Pe05); \\ensuremath{\\alpha}(K)exp=0.09, \\ensuremath{\\alpha}(L1)exp+\\ensuremath{\\alpha}(L2)exp=0.02, \\ensuremath{\\alpha}(L3)exp=0.006, \\ensuremath{\\alpha}(M)exp=0.0049 and \\ensuremath{\\alpha}(N)exp=0.0011 (1971Ma45); \\ensuremath{\\alpha}(L)exp=0.020 \\textit{2} (2012De24)."
      }
     ]
    }
   ],
   "band": 0,
   "comments": [
    {
     "type": "comment",
     "head": [
      {
       "name": "J"
      }
     ],
     "body": "147.1637\\ensuremath{\\gamma} M1+E2 to 9/2\\ensuremath{^{+}}, 268.7847\\ensuremath{\\gamma} E2 to 7/2\\ensuremath{^{+}}; band assignment."
    }
   ]
  },
  {
   "energy": {
    "unit": "keV",
    "value": 289.014,
    "uncertainty": {
     "type": "symmetric",
     "value": 0.0013
    }
   },
   "spinParity": {
    "values": [
     {
      "twoTimesSpin": 11,
      "isTentativeSpin": false,
      "parity": "-",
      "isTentativeParity": false
     }
    ]
   },
   "isStable": false,
   "flags": [
    "B"
   ],
   "crossReferences": [
    {
     "dataset": "176LU(N,G) E=THERMAL"
    },
    {
     "dataset": "177YB B- DECAY"
    },
    {
     "dataset": "177LU IT DECAY (160.4 D)"
    },
    {
     "dataset": "176YB(3HE,D),(A,T)",
     "level": 291
    },
    {
     "dataset": "178HF(T,A)",
     "level": 293
    },
    {
     "dataset": "(HI,XNG)"
    }
   ],
   "gammas": [
    {
     "energy": {
      "unit": "keV",
      "value": 138.616,
      "uncertainty": {
       "type": "symmetric",
       "value": 0.001
      }
     },
     "gammaIntensity": {
      "value": 100,
      "uncertainty": {
       "type": "unreported"
      }
     },
     "initialLevelIndex": 4,
     "finalLevelIndex": 2,
     "multipolarity": {
      "stringRepresentation": "M1+E2",
      "isMixedTransition": true,
      "spins": [
       {
        "spin": 1
       },
       {
        "spin": 2
       }
      ],
      "parity": "+",
      "mixingRatio": {
       "isAbsoluteValue": true,
       "value": 0.23,
       "uncertainty": {
        "type": "symmetric",
        "value": 0.08
       }
      }
     },
     "theoreticalInternalConversionCoefficients": {
      "totalValue": {
       "value": 1.43,
       "uncertainty": {
        "type": "symmetric",
        "value": 0.03
       }
      },
      "shellValues": [
       {
        "includesOuterShells": false,
        "shell": "K",
        "value": 1.17,
        "uncertainty": {
         "type": "symmetric",
         "value": 0.04
        }
       },
       {
        "includesOuterShells": false,
        "shell": "L",
        "value": 0.197,
        "uncertainty": {
         "type": "symmetric",
         "value": 0.009
        }
       },
       {
        "includesOuterShells": false,
        "shell": "M",
        "value": 0.0448,
        "uncertainty": {
         "type": "symmetric",
         "value": 0.0024
        }
       },
       {
        "includesOuterShells": false,
        "shell": "N",
        "value": 0.0106,
        "uncertainty": {
         "type": "symmetric",
         "value": 0.0006
        }
       },
       {
        "includesOuterShells": false,
        "shell": "O",
        "value": 0.00154,
        "uncertainty": {
         "type": "symmetric",
         "value": 0.00006
        }
       },
       {
        "includesOuterShells": false,
        "shell": "P",
        "value": 0.000087,
        "uncertainty": {
         "type": "symmetric",
         "value": 0.000003
        }
       }
      ]
     },
     "comments": [
      {
       "type": "comment",
       "head": [
        {
         "name": "M"
        }
       ],
       "body": "\\ensuremath{\\gamma}\\ensuremath{\\gamma}(\\ensuremath{\\theta}) (1973Il02,1995Ya21); \\ensuremath{\\alpha}(K)exp=1.6 \\textit{4}, \\ensuremath{\\alpha}(L1)exp=0.22 \\textit{5}, \\ensuremath{\\alpha}(L2)exp=0.029 \\textit{7}, \\ensuremath{\\alpha}(L3)exp=0.0097 \\textit{23} and \\ensuremath{\\alpha}(M1)exp=0.048 \\textit{12}, \\ensuremath{\\alpha}(K)exp=1.17 \\textit{16}, \\ensuremath{\\alpha}(L1)exp=0.20 \\textit{3}, \\ensuremath{\\alpha}(L2)exp=0.028 \\textit{8}, (1996Pe05); \\ensuremath{\\alpha}(L3)exp=0.014 \\textit{7} (1972Ag05); (K/L)exp=5 \\textit{1} (1964Jo03); \\ensuremath{\\alpha}(K)exp=1.12, \\ensuremath{\\alpha}(L1)exp+\\ensuremath{\\alpha}(L2)exp=0.19, \\ensuremath{\\alpha}(L3)exp=0.016, \\ensuremath{\\alpha}(M)exp=0.06 and \\ensuremath{\\alpha}(N)exp=0.025 (1971Ma45)"
      },
      {
       "type": "comment",
       "head": [
        {
         "name": "MR"
        }
       ],
       "body": "Using the briccmixing program and the following experimental data: \\ensuremath{\\delta}(\\ensuremath{\\gamma}\\ensuremath{\\gamma}(\\ensuremath{\\theta}))=0.18 \\textit{4} (1995Ya21), \\ensuremath{\\delta}(\\ensuremath{\\gamma}\\ensuremath{\\gamma}(\\ensuremath{\\theta}))=+0.28 \\textit{6} (1973Il02), \\ensuremath{\\alpha}(K)exp=1.6 \\textit{4}, \\ensuremath{\\alpha}(L1)exp=0.22 \\textit{5}, \\ensuremath{\\alpha}(L2)exp=0.029 \\textit{7}, \\ensuremath{\\alpha}(L3)exp=0.0097 \\textit{23} and \\ensuremath{\\alpha}(M1)exp=0.048 \\textit{12} (1996Pe05) and \\ensuremath{\\alpha}(K)exp=1.17 \\textit{16}, \\ensuremath{\\alpha}(L1)exp=0.20 \\textit{3}, \\ensuremath{\\alpha}(L2)exp=0.028 \\textit{8}, \\ensuremath{\\alpha}(L3)exp=0.014 \\textit{7} (1972Ag05); (K/L)exp=5 \\textit{1} (1964Jo03) The sign is from 1973Il02."
      }
     ]
    }
   ],
   "band": 1,
   "comments": [
    {
     "type": "comment",
     "head": [
      {
       "name": "J"
      }
     ],
     "body": "L=5 in \\ensuremath{^{\\textnormal{176}}}Yb(\\ensuremath{^{\\textnormal{3}}}He,d),(\\ensuremath{\\alpha},t); 138.616\\ensuremath{\\gamma} M1+E2 to 9/2\\ensuremath{^{-}}; band assignment"
    }
   ]
  },
  {
   "energy": {
    "unit": "keV",
    "value": 440.6431,
    "uncertainty": {
     "type": "symmetric",
     "value": 0.0006
    }
   },
   "spinParity": {
    "values": [
     {
      "twoTimesSpin": 13,
      "isTentativeSpin": false,
      "parity": "+",
      "isTentativeParity": false
     }
    ]
   },
   "isStable": false,
   "flags": [
    "A"
   ],
   "crossReferences": [
    {
     "dataset": "176LU(N,G) E=THERMAL"
    },
    {
     "dataset": "177YB B- DECAY"
    },
    {
     "dataset": "177LU IT DECAY (160.4 D)"
    },
    {
     "dataset": "176LU(D,P)"
    },
    {
     "dataset": "(HI,XNG)"
    }
   ],
   "gammas": [
    {
     "energy": {
      "unit": "keV",
      "value": 171.8574,
      "uncertainty": {
       "type": "symmetric",
       "value": 0.0006
      }
     },
     "gammaIntensity": {
      "value": 45.7,
      "uncertainty": {
       "type": "symmetric",
       "value": 0.5
      }
     },
     "initialLevelIndex": 5,
     "finalLevelIndex": 3,
     "multipolarity": {
      "stringRepresentation": "M1+E2",
      "isMixedTransition": true,
      "spins": [
       {
        "spin": 1
       },
       {
        "spin": 2
       }
      ],
      "parity": "+",
      "mixingRatio": {
       "isAbsoluteValue": true,
       "value": 0.47,
       "uncertainty": {
        "type": "symmetric",
        "value": 0.21
       }
      }
     },
     "theoreticalInternalConversionCoefficients": {
      "totalValue": {
       "value": 0.73,
       "uncertainty": {
        "type": "symmetric",
        "value": 0.05
       }
      },
      "shellValues": [
       {
        "includesOuterShells": false,
        "shell": "K",
        "value": 0.59,
        "uncertainty": {
         "type": "symmetric",
         "value": 0.06
        }
       },
       {
        "includesOuterShells": false,
        "shell": "L",
        "value": 0.112,
        "uncertainty": {
         "type": "symmetric",
         "value": 0.009
        }
       },
       {
        "includesOuterShells": false,
        "shell": "M",
        "value": 0.0258,
        "uncertainty": {
         "type": "symmetric",
         "value": 0.0023
        }
       },
       {
        "includesOuterShells": false,
        "shell": "N",
        "value": 0.0061,
        "uncertainty": {
         "type": "symmetric",
         "value": 0.0006
        }
       },
       {
        "includesOuterShells": false,
        "shell": "O",
        "value": 0.00086,
        "uncertainty": {
         "type": "symmetric",
         "value": 0.00005
        }
       },
       {
        "includesOuterShells": false,
        "shell": "P",
        "value": 0.000043,
        "uncertainty": {
         "type": "symmetric",
         "value": 0.000005
        }
       }
      ]
     },
     "flags": [
      "P"
     ],
     "comments": [
      {
       "type": "comment",
       "head": [
        {
         "name": "M"
        }
       ],
       "body": "\\ensuremath{\\gamma}\\ensuremath{\\gamma}(\\ensuremath{\\theta}) (1974Kr12); \\ensuremath{\\alpha}(K)exp=0.61 \\textit{7} (2012De24); \\ensuremath{\\alpha}(L1)exp=0.055 \\textit{18}, \\ensuremath{\\alpha}(L2)exp=0.073 \\textit{20}, \\ensuremath{\\alpha}(L3)exp=0.017 \\textit{6}, and \\ensuremath{\\alpha}(M1)exp=0.0127 \\textit{25} (1996Pe05); \\ensuremath{\\alpha}(K)exp=0.55, \\ensuremath{\\alpha}(L1)exp+\\ensuremath{\\alpha}(L2)exp=0.10, \\ensuremath{\\alpha}(L3)exp=0.02, and \\ensuremath{\\alpha}(M)exp=0.0037 (1971Ma45)."
      },
      {
       "type": "comment",
       "head": [
        {
         "name": "MR"
        }
       ],
       "body": "Using the briccmixing program and the following experimental data: \\ensuremath{\\delta}(\\ensuremath{\\gamma}\\ensuremath{\\gamma}(\\ensuremath{\\theta}))=+0.59 \\textit{+31{\\textminus}15} (1974Kr12) and \\ensuremath{\\alpha}(K)exp=0.61 \\textit{7} (2012De24). The sign is from 1974Kr12. Others (not used in the analysis):\\hphantom{a}\\ensuremath{\\alpha}(K)exp=0.74 \\textit{12}, \\ensuremath{\\alpha}(L1)exp=0.055 \\textit{18}, \\ensuremath{\\alpha}(L2)exp=0.073 \\textit{20}, \\ensuremath{\\alpha}(L3)exp=0.017 \\textit{6}, and \\ensuremath{\\alpha}(M1)exp=0.0127 \\textit{25} (1996Pe05)"
      }
     ]
    },
    {
     "energy": {
      "unit": "keV",
      "value": 319.021,
      "uncertainty": {
       "type": "symmetric",
       "value": 0.0006
      }
     },
     "gammaIntensity": {
      "value": 100,
      "uncertainty": {
       "type": "symmetric",
       "value": 1.1
      }
     },
     "initialLevelIndex": 5,
     "finalLevelIndex": 1,
     "multipolarity": {
      "stringRepresentation": "E2",
      "spins": [
       {
        "spin": 2
       }
      ],
      "parity": "+"
     },
     "theoreticalInternalConversionCoefficients": {
      "totalValue": {
       "value": 0.0637,
       "uncertainty": {
        "type": "unreported"
       }
      },
      "shellValues": [
       {
        "includesOuterShells": false,
        "shell": "K",
        "value": 0.0456,
        "uncertainty": {
         "type": "symmetric",
         "value": 0.0007
        }
       },
       {
        "includesOuterShells": false,
        "shell": "L",
        "value": 0.01393,
        "uncertainty": {
         "type": "symmetric",
         "value": 0.0002
        }
       },
       {
        "includesOuterShells": false,
        "shell": "M",
        "value": 0.00332,
        "uncertainty": {
         "type": "symmetric",
         "value": 0.00005
        }
       },
       {
        "includesOuterShells": false,
        "shell": "N",
        "value": 0.000771,
        "uncertainty": {
         "type": "symmetric",
         "value": 0.000011
        }
       },
       {
        "includesOuterShells": false,
        "shell": "O",
        "value": 0.0001016,
        "uncertainty": {
         "type": "symmetric",
         "value": 0.0000015
        }
       },
       {
        "includesOuterShells": false,
        "shell": "P",
        "value": 0.0000029,
        "uncertainty": {
         "type": "symmetric",
         "value": 4e-8
        }
       }
      ]
     },
     "flags": [
      "P"
     ],
     "comments": [
      {
       "type": "comment",
       "head": [
        {
         "name": "M"
        }
       ],
       "body": "\\ensuremath{\\alpha}(K)exp=0.038 \\textit{7}, \\ensuremath{\\alpha}(L1)exp=0.0042 \\textit{8}, \\ensuremath{\\alpha}(L2)exp=0.0034 \\textit{7}, \\ensuremath{\\alpha}(L3)exp=0.0041 \\textit{10}, \\ensuremath{\\alpha}(M1)exp=0.0008 \\textit{3}, and \\ensuremath{\\alpha}(M2)exp=0.0013 \\textit{4} (1996Pe05). Other: \\ensuremath{\\alpha}(K)exp=0.045, \\ensuremath{\\alpha}(L1)exp+\\ensuremath{\\alpha}(L2)exp=0.011, \\ensuremath{\\alpha}(L3)exp=0.003, \\ensuremath{\\alpha}(M)exp=0.002 and \\ensuremath{\\alpha}(N)exp=0.0006 (1971Ma45); \\ensuremath{\\alpha}(K)exp=0.049 \\textit{5} and \\ensuremath{\\alpha}(L)exp=0.012 \\textit{2} (2012De24)"
      }
     ]
    }
   ],
   "band": 0,
   "comments": [
    {
     "type": "comment",
     "head": [
      {
       "name": "J"
      }
     ],
     "body": "171.8574\\ensuremath{\\gamma} M1+E2 to 11/2\\ensuremath{^{+}}, 319.0210\\ensuremath{\\gamma} E2 to 9/2\\ensuremath{^{+}}; band assignment."
    }
   ]
  },
  {
   "energy": {
    "unit": "keV",
    "value": 451.5139,
    "uncertainty": {
     "type": "symmetric",
     "value": 0.0013
    }
   },
   "spinParity": {
    "values": [
     {
      "twoTimesSpin": 13,
      "isTentativeSpin": false,
      "parity": "-",
      "isTentativeParity": false
     }
    ]
   },
   "isStable": false,
   "flags": [
    "B"
   ],
   "crossReferences": [
    {
     "dataset": "176LU(N,G) E=THERMAL"
    },
    {
     "dataset": "177YB B- DECAY"
    },
    {
     "dataset": "177LU IT DECAY (160.4 D)"
    },
    {
     "dataset": "(HI,XNG)"
    }
   ],
   "gammas": [
    {
     "energy": {
      "unit": "keV",
      "value": 162.5,
      "uncertainty": {
       "type": "symmetric",
       "value": 0.001
      }
     },
     "gammaIntensity": {
      "value": 100,
      "uncertainty": {
       "type": "symmetric",
       "value": 5
      }
     },
     "initialLevelIndex": 6,
     "finalLevelIndex": 4,
     "multipolarity": {
      "stringRepresentation": "M1+E2",
      "isMixedTransition": true,
      "spins": [
       {
        "spin": 1
       },
       {
        "spin": 2
       }
      ],
      "parity": "+",
      "mixingRatio": {
       "isAbsoluteValue": true,
       "value": 0.33,
       "uncertainty": {
        "type": "symmetric",
        "value": 0.13
       }
      }
     },
     "theoreticalInternalConversionCoefficients": {
      "totalValue": {
       "value": 0.89,
       "uncertainty": {
        "type": "symmetric",
        "value": 0.03
       }
      },
      "shellValues": [
       {
        "includesOuterShells": false,
        "shell": "K",
        "value": 0.73,
        "uncertainty": {
         "type": "symmetric",
         "value": 0.04
        }
       },
       {
        "includesOuterShells": false,
        "shell": "L",
        "value": 0.127,
        "uncertainty": {
         "type": "symmetric",
         "value": 0.007
        }
       },
       {
        "includesOuterShells": false,
        "shell": "M",
        "value": 0.029,
        "uncertainty": {
         "type": "symmetric",
         "value": 0.0019
        }
       },
       {
        "includesOuterShells": false,
        "shell": "N",
        "value": 0.0068,
        "uncertainty": {
         "type": "symmetric",
         "value": 0.0005
        }
       },
       {
        "includesOuterShells": false,
        "shell": "O",
        "value": 0.00098,
        "uncertainty": {
         "type": "symmetric",
         "value": 0.00005
        }
       },
       {
        "includesOuterShells": false,
        "shell": "P",
        "value": 0.000054,
        "uncertainty": {
         "type": "symmetric",
         "value": 0.000004
        }
       }
      ]
     },
     "comments": [
      {
       "type": "comment",
       "head": [
        {
         "name": "RI"
        }
       ],
       "body": "From (HI,xn\\ensuremath{\\gamma})"
      },
      {
       "type": "comment",
       "head": [
        {
         "name": "M"
        }
       ],
       "body": "\\ensuremath{\\alpha}(K)exp=1.18 \\textit{19}, \\ensuremath{\\alpha}(L1)exp=0.16 \\textit{3}, \\ensuremath{\\alpha}(L2)exp=0.018 \\textit{3}, \\ensuremath{\\alpha}(M1)exp=0.024 \\textit{4} and \\ensuremath{\\alpha}(M2)exp=0.0053 \\textit{12} (1996Pe05). Other: \\ensuremath{\\alpha}(K)exp=0.74, \\ensuremath{\\alpha}(L1)exp+\\ensuremath{\\alpha}(L2)exp=0.128, \\ensuremath{\\alpha}(L3)exp=0.0087, \\ensuremath{\\alpha}(M)exp=0.0032 and \\ensuremath{\\alpha}(N)exp=0.0012 (1971Ma45)."
      },
      {
       "type": "comment",
       "head": [
        {
         "name": "MR"
        }
       ],
       "body": "Using the briccmixing program and the following experimental data: \\ensuremath{\\alpha}(K)exp=1.18 \\textit{19}, \\ensuremath{\\alpha}(L1)exp=0.16 \\textit{3}, \\ensuremath{\\alpha}(L2)exp=0.018 \\textit{3}, \\ensuremath{\\alpha}(M1)exp=0.024 \\textit{4} and \\ensuremath{\\alpha}(M1)exp=0.0053 \\textit{12} (1996Pe05)"
      }
     ]
    },
    {
     "energy": {
      "unit": "keV",
      "value": 301.115,
      "uncertainty": {
       "type": "symmetric",
       "value": 0.001
      }
     },
     "gammaIntensity": {
      "value": 12.6,
      "uncertainty": {
       "type": "symmetric",
       "value": 1.6
      }
     },
     "initialLevelIndex": 6,
     "finalLevelIndex": 2,
     "multipolarity": {
      "stringRepresentation": "E2",
      "spins": [
       {
        "spin": 2
       }
      ],
      "parity": "+"
     },
     "theoreticalInternalConversionCoefficients": {
      "totalValue": {
       "value": 0.0757,
       "uncertainty": {
        "type": "unreported"
       }
      },
      "shellValues": [
       {
        "includesOuterShells": false,
        "shell": "K",
        "value": 0.0533,
        "uncertainty": {
         "type": "symmetric",
         "value": 0.0008
        }
       },
       {
        "includesOuterShells": false,
        "shell": "L",
        "value": 0.01719,
        "uncertainty": {
         "type": "symmetric",
         "value": 0.00024
        }
       },
       {
        "includesOuterShells": false,
        "shell": "M",
        "value": 0.00411,
        "uncertainty": {
         "type": "symmetric",
         "value": 0.00006
        }
       },
       {
        "includesOuterShells": false,
        "shell": "N",
        "value": 0.000954,
        "uncertainty": {
         "type": "symmetric",
         "value": 0.000014
        }
       },
       {
        "includesOuterShells": false,
        "shell": "O",
        "value": 0.000125,
        "uncertainty": {
         "type": "symmetric",
         "value": 0.0000018
        }
       },
       {
        "includesOuterShells": false,
        "shell": "P",
        "value": 0.00000335,
        "uncertainty": {
         "type": "symmetric",
         "value": 5e-8
        }
       }
      ]
     },
     "comments": [
      {
       "type": "comment",
       "head": [
        {
         "name": "RI"
        }
       ],
       "body": "From (HI,xn\\ensuremath{\\gamma})"
      },
      {
       "type": "comment",
       "head": [
        {
         "name": "M"
        }
       ],
       "body": "\\ensuremath{\\alpha}(K)exp=0.048 \\textit{12}, \\ensuremath{\\alpha}(L1)exp=0.010 \\textit{3}, and \\ensuremath{\\alpha}(L3)exp=0.0054 \\textit{22} (1996Pe05). Other: \\ensuremath{\\alpha}(K)exp=0.073, \\ensuremath{\\alpha}(L1)exp+\\ensuremath{\\alpha}(L2)exp=0.019, and \\ensuremath{\\alpha}(M)exp=0.004 (1971Ma45)."
      }
     ]
    }
   ],
   "band": 1,
   "comments": [
    {
     "type": "comment",
     "head": [
      {
       "name": "J"
      }
     ],
     "body": "162.500\\ensuremath{\\gamma} M1+E2 to 11/2\\ensuremath{^{-}}, 301.115\\ensuremath{\\gamma} E2 to 9/2\\ensuremath{^{-}} level; band assignment."
    }
   ]
  },
  {
   "energy": {
    "unit": "keV",
    "value": 457.9568,
    "uncertainty": {
     "type": "symmetric",
     "value": 0.0014
    }
   },
   "spinParity": {
    "values": [
     {
      "twoTimesSpin": 5,
      "isTentativeSpin": false,
      "parity": "+",
      "isTentativeParity": false
     }
    ]
   },
   "isStable": false,
   "halfLife": {
    "unit": "ns",
    "value": 0.45,
    "uncertainty": {
     "type": "limit",
     "limitType": "upper",
     "isInclusive": true
    }
   },
   "flags": [
    "C"
   ],
   "crossReferences": [
    {
     "dataset": "176LU(N,G) E=THERMAL"
    },
    {
     "dataset": "177YB B- DECAY"
    },
    {
     "dataset": "176YB(3HE,D),(A,T)",
     "level": 460
    },
    {
     "dataset": "178HF(T,A)",
     "level": 461
    },
    {
     "dataset": "(HI,XNG)"
    }
   ],
   "gammas": [
    {
     "energy": {
      "unit": "keV",
      "value": 336.335,
      "uncertainty": {
       "type": "symmetric",
       "value": 0.002
      }
     },
     "gammaIntensity": {
      "value": 1.93,
      "uncertainty": {
       "type": "symmetric",
       "value": 0.19
      }
     },
     "initialLevelIndex": 7,
     "finalLevelIndex": 1,
     "multipolarity": {
      "stringRepresentation": "E2",
      "spins": [
       {
        "spin": 2
       }
      ],
      "parity": "+"
     },
     "theoreticalInternalConversionCoefficients": {
      "totalValue": {
       "value": 0.0546,
       "uncertainty": {
        "type": "unreported"
       }
      },
      "shellValues": [
       {
        "includesOuterShells": false,
        "shell": "K",
        "value": 0.0396,
        "uncertainty": {
         "type": "symmetric",
         "value": 0.0006
        }
       },
       {
        "includesOuterShells": false,
        "shell": "L",
        "value": 0.01153,
        "uncertainty": {
         "type": "symmetric",
         "value": 0.00017
        }
       },
       {
        "includesOuterShells": false,
        "shell": "M",
        "value": 0.00274,
        "uncertainty": {
         "type": "symmetric",
         "value": 0.00004
        }
       },
       {
        "includesOuterShells": false,
        "shell": "N",
        "value": 0.000637,
        "uncertainty": {
         "type": "symmetric",
         "value": 0.000009
        }
       },
       {
        "includesOuterShells": false,
        "shell": "O",
        "value": 0.0000844,
        "uncertainty": {
         "type": "symmetric",
         "value": 0.0000012
        }
       },
       {
        "includesOuterShells": false,
        "shell": "P",
        "value": 0.00000254,
        "uncertainty": {
         "type": "symmetric",
         "value": 4e-8
        }
       }
      ]
     },
     "comments": [
      {
       "type": "comment",
       "head": [
        {
         "name": "M"
        }
       ],
       "body": "\\ensuremath{\\alpha}(K)exp=0.032 \\textit{11} and \\ensuremath{\\alpha}(L2)exp=0.006 \\textit{4} (1996Pe05)."
      }
     ]
    },
    {
     "energy": {
      "unit": "keV",
      "value": 457.964,
      "uncertainty": {
       "type": "symmetric",
       "value": 0.004
      }
     },
     "gammaIntensity": {
      "value": 100,
      "uncertainty": {
       "type": "symmetric",
       "value": 10
      }
     },
     "initialLevelIndex": 7,
     "finalLevelIndex": 0,
     "multipolarity": {
      "stringRepresentation": "M1(+E2)",
      "isMixedTransition": true,
      "spins": [
       {
        "spin": 1
       },
       {
        "spin": 2
       }
      ],
      "parity": "+",
      "mixingRatio": {
       "isAbsoluteValue": true,
       "value": 0.6,
       "uncertainty": {
        "type": "limit",
        "limitType": "upper",
        "isInclusive": true
       }
      }
     },
     "theoreticalInternalConversionCoefficients": {
      "totalValue": {
       "value": 0.051,
       "uncertainty": {
        "type": "symmetric",
        "value": 0.005
       }
      },
      "shellValues": [
       {
        "includesOuterShells": false,
        "shell": "K",
        "value": 0.043,
        "uncertainty": {
         "type": "symmetric",
         "value": 0.004
        }
       },
       {
        "includesOuterShells": false,
        "shell": "L",
        "value": 0.0066,
        "uncertainty": {
         "type": "symmetric",
         "value": 0.0004
        }
       },
       {
        "includesOuterShells": false,
        "shell": "M",
        "value": 0.00149,
        "uncertainty": {
         "type": "symmetric",
         "value": 0.00009
        }
       },
       {
        "includesOuterShells": false,
        "shell": "N",
        "value": 0.000351,
        "uncertainty": {
         "type": "symmetric",
         "value": 0.00002
        }
       },
       {
        "includesOuterShells": false,
        "shell": "O",
        "value": 0.000052,
        "uncertainty": {
         "type": "symmetric",
         "value": 0.000004
        }
       },
       {
        "includesOuterShells": false,
        "shell": "P",
        "value": 0.0000031,
        "uncertainty": {
         "type": "symmetric",
         "value": 3e-7
        }
       }
      ]
     },
     "comments": [
      {
       "type": "comment",
       "head": [
        {
         "name": "M"
        }
       ],
       "body": "\\ensuremath{\\alpha}(K)exp=0.070 \\textit{23}, \\ensuremath{\\alpha}(L1)exp=0.009 \\textit{3}, and \\ensuremath{\\alpha}(M1)exp=0.0018 \\textit{6} (1996Pe05). Other: \\ensuremath{\\alpha}(K)exp=0.063, \\ensuremath{\\alpha}(L1)exp+\\ensuremath{\\alpha}(L2)exp=0.009, \\ensuremath{\\alpha}(M)exp=0.0002 and \\ensuremath{\\alpha}(N)exp=0.00009 (1971Ma45)."
      },
      {
       "type": "comment",
       "head": [
        {
         "name": "MR"
        }
       ],
       "body": "Using the briccmixing program and the following experimental data: \\ensuremath{\\alpha}(K)exp=0.070 \\textit{23}, \\ensuremath{\\alpha}(L1)exp=0.009 \\textit{3},\\hphantom{a}and \\ensuremath{\\alpha}(M1)exp=0.0018 \\textit{5} (1996Pe05)"
      }
     ]
    }
   ],
   "band": 2,
   "comments": [
    {
     "type": "comment",
     "head": [
      {
       "name": "J"
      }
     ],
     "body": "L=2 in \\ensuremath{^{\\textnormal{176}}}Yb(\\ensuremath{^{\\textnormal{3}}}He,d),(\\ensuremath{\\alpha},t); 336.335\\ensuremath{\\gamma} E2 to 9/2\\ensuremath{^{+}}, 457.964\\ensuremath{\\gamma} M1(+E2) to 7/2\\ensuremath{^{+}};"
    },
    {
     "type": "comment",
     "head": [
      {
       "name": "T"
      }
     ],
     "body": "From 1996Pe05. Others: \\ensuremath{\\leq}0.8 ns (1971Ma45) and \\ensuremath{<}4.2 ns (2002McZY)."
    },
    {
     "type": "comment",
     "head": [
      {
       "name": "CONF"
      }
     ],
     "body": "\\ensuremath{\\pi}5/2[402] (d\\ensuremath{_{\\textnormal{5/2}}}) Nilsson configuration. Based on the observed in-band properties, such as alignment and g\\ensuremath{_{\\textnormal{K}}}-g\\ensuremath{_{R}} values, and systematics of structures in neighboring nuclei."
    }
   ]
  },
  {
   "energy": {
    "unit": "keV",
    "value": 552.096,
    "uncertainty": {
     "type": "symmetric",
     "value": 0.0013
    }
   },
   "spinParity": {
    "values": [
     {
      "twoTimesSpin": 7,
      "isTentativeSpin": false,
      "parity": "+",
      "isTentativeParity": false
     }
    ]
   },
   "isStable": false,
   "flags": [
    "C"
   ],
   "crossReferences": [
    {
     "dataset": "176LU(N,G) E=THERMAL"
    },
    {
     "dataset": "177YB B- DECAY"
    },
    {
     "dataset": "176YB(3HE,D),(A,T)",
     "level": 554
    },
    {
     "dataset": "(HI,XNG)"
    }
   ],
   "gammas": [
    {
     "energy": {
      "unit": "keV",
      "value": 94.14,
      "uncertainty": {
       "type": "symmetric",
       "value": 0.004
      }
     },
     "gammaIntensity": {
      "value": 100,
      "uncertainty": {
       "type": "symmetric",
       "value": 11
      }
     },
     "initialLevelIndex": 8,
     "finalLevelIndex": 7,
     "multipolarity": {
      "stringRepresentation": "M1",
      "spins": [
       {
        "spin": 1
       }
      ],
      "parity": "+"
     },
     "theoreticalInternalConversionCoefficients": {
      "totalValue": {
       "value": 4.37,
       "uncertainty": {
        "type": "unreported"
       }
      },
      "shellValues": [
       {
        "includesOuterShells": false,
        "shell": "K",
        "value": 3.65,
        "uncertainty": {
         "type": "symmetric",
         "value": 0.06
        }
       },
       {
        "includesOuterShells": false,
        "shell": "L",
        "value": 0.565,
        "uncertainty": {
         "type": "symmetric",
         "value": 0.008
        }
       },
       {
        "includesOuterShells": false,
        "shell": "M",
        "value": 0.127,
        "uncertainty": {
         "type": "symmetric",
         "value": 0.0018
        }
       },
       {
        "includesOuterShells": false,
        "shell": "N",
        "value": 0.03,
        "uncertainty": {
         "type": "symmetric",
         "value": 0.0005
        }
       },
       {
        "includesOuterShells": false,
        "shell": "O",
        "value": 0.00445,
        "uncertainty": {
         "type": "symmetric",
         "value": 0.00007
        }
       },
       {
        "includesOuterShells": false,
        "shell": "P",
        "value": 0.000274,
        "uncertainty": {
         "type": "symmetric",
         "value": 0.000004
        }
       }
      ]
     },
     "comments": [
      {
       "type": "comment",
       "head": [
        {
         "name": "M"
        }
       ],
       "body": "\\ensuremath{\\alpha}(K)exp=6.7 \\textit{21}, \\ensuremath{\\alpha}(L1)exp=1.2 \\textit{4}, \\ensuremath{\\alpha}(M1)exp=0.25 \\textit{8}, and \\ensuremath{\\alpha}(M2)exp=0.030 \\textit{14} (1996Pe05). Other: \\ensuremath{\\alpha}(L1)exp=0.41, \\ensuremath{\\alpha}(M)exp=0.23 and \\ensuremath{\\alpha}(N)exp=0.12 (1971Ma45)."
      }
     ]
    },
    {
     "energy": {
      "unit": "keV",
      "value": 283.33,
      "uncertainty": {
       "type": "symmetric",
       "value": 0.03
      }
     },
     "gammaIntensity": {
      "value": 0.24,
      "uncertainty": {
       "type": "symmetric",
       "value": 0.24
      }
     },
     "initialLevelIndex": 8,
     "finalLevelIndex": 3
    },
    {
     "energy": {
      "unit": "keV",
      "value": 401.721,
      "uncertainty": {
       "type": "symmetric",
       "value": 0.009
      }
     },
     "gammaIntensity": {
      "value": 1.9,
      "uncertainty": {
       "type": "symmetric",
       "value": 0.5
      }
     },
     "initialLevelIndex": 8,
     "finalLevelIndex": 2
    },
    {
     "energy": {
      "unit": "keV",
      "value": 430.473,
      "uncertainty": {
       "type": "symmetric",
       "value": 0.003
      }
     },
     "gammaIntensity": {
      "value": 6.1,
      "uncertainty": {
       "type": "symmetric",
       "value": 0.9
      }
     },
     "initialLevelIndex": 8,
     "finalLevelIndex": 1,
     "multipolarity": {
      "stringRepresentation": "M1(+E2)",
      "isMixedTransition": true,
      "spins": [
       {
        "spin": 1
       },
       {
        "spin": 2
       }
      ],
      "parity": "+",
      "mixingRatio": {
       "isAbsoluteValue": true,
       "value": 1.1,
       "uncertainty": {
        "type": "limit",
        "limitType": "upper",
        "isInclusive": true
       }
      }
     },
     "theoreticalInternalConversionCoefficients": {
      "totalValue": {
       "value": 0.055,
       "uncertainty": {
        "type": "symmetric",
        "value": 0.011
       }
      },
      "shellValues": [
       {
        "includesOuterShells": false,
        "shell": "K",
        "value": 0.046,
        "uncertainty": {
         "type": "symmetric",
         "value": 0.01
        }
       },
       {
        "includesOuterShells": false,
        "shell": "L",
        "value": 0.0073,
        "uncertainty": {
         "type": "symmetric",
         "value": 0.0009
        }
       },
       {
        "includesOuterShells": false,
        "shell": "M",
        "value": 0.00166,
        "uncertainty": {
         "type": "symmetric",
         "value": 0.00019
        }
       },
       {
        "includesOuterShells": false,
        "shell": "N",
        "value": 0.00039,
        "uncertainty": {
         "type": "symmetric",
         "value": 0.00005
        }
       },
       {
        "includesOuterShells": false,
        "shell": "O",
        "value": 0.000057,
        "uncertainty": {
         "type": "symmetric",
         "value": 0.000008
        }
       },
       {
        "includesOuterShells": false,
        "shell": "P",
        "value": 0.0000033,
        "uncertainty": {
         "type": "symmetric",
         "value": 8e-7
        }
       }
      ]
     },
     "comments": [
      {
       "type": "comment",
       "head": [
        {
         "name": "M"
        },
        {
         "name": "MR"
        }
       ],
       "body": "\\ensuremath{\\alpha}(K)exp=0.051 \\textit{14} (1996Pe05). Other: \\ensuremath{\\alpha}(K)exp=0.049 (1971Ma45)."
      }
     ]
    },
    {
     "energy": {
      "unit": "keV",
      "value": 552.102,
      "uncertainty": {
       "type": "symmetric",
       "value": 0.004
      }
     },
     "gammaIntensity": {
      "value": 74,
      "uncertainty": {
       "type": "symmetric",
       "value": 7
      }
     },
     "initialLevelIndex": 8,
     "finalLevelIndex": 0,
     "multipolarity": {
      "stringRepresentation": "M1+E2",
      "isMixedTransition": true,
      "spins": [
       {
        "spin": 1
       },
       {
        "spin": 2
       }
      ],
      "parity": "+",
      "mixingRatio": {
       "isAbsoluteValue": true,
       "value": 1.8,
       "uncertainty": {
        "type": "symmetric",
        "value": 0.5
       }
      }
     },
     "theoreticalInternalConversionCoefficients": {
      "totalValue": {
       "value": 0.019,
       "uncertainty": {
        "type": "symmetric",
        "value": 0.003
       }
      },
      "shellValues": [
       {
        "includesOuterShells": false,
        "shell": "K",
        "value": 0.0156,
        "uncertainty": {
         "type": "symmetric",
         "value": 0.0024
        }
       },
       {
        "includesOuterShells": false,
        "shell": "L",
        "value": 0.0028,
        "uncertainty": {
         "type": "symmetric",
         "value": 0.0003
        }
       },
       {
        "includesOuterShells": false,
        "shell": "M",
        "value": 0.00064,
        "uncertainty": {
         "type": "symmetric",
         "value": 0.00006
        }
       },
       {
        "includesOuterShells": false,
        "shell": "N",
        "value": 0.00015,
        "uncertainty": {
         "type": "symmetric",
         "value": 0.000014
        }
       },
       {
        "includesOuterShells": false,
        "shell": "O",
        "value": 0.0000215,
        "uncertainty": {
         "type": "symmetric",
         "value": 0.0000022
        }
       },
       {
        "includesOuterShells": false,
        "shell": "P",
        "value": 0.00000109,
        "uncertainty": {
         "type": "symmetric",
         "value": 1.9e-7
        }
       }
      ]
     },
     "comments": [
      {
       "type": "comment",
       "head": [
        {
         "name": "M"
        },
        {
         "name": "MR"
        }
       ],
       "body": "\\ensuremath{\\alpha}(K)exp=0.015 \\textit{4} and \\ensuremath{\\alpha}(L1)exp=0.0022 \\textit{9} (1996Pe05). Other: \\ensuremath{\\alpha}(K)exp=0.028 (1971Ma45)."
      }
     ]
    }
   ],
   "band": 2,
   "comments": [
    {
     "type": "comment",
     "head": [
      {
       "name": "J"
      }
     ],
     "body": "94.140\\ensuremath{\\gamma} M1 to 5/2\\ensuremath{^{+}} level, 283.33\\ensuremath{\\gamma} to 11/2\\ensuremath{^{+}}; band assignment."
    }
   ]
  },
  {
   "energy": {
    "unit": "keV",
    "value": 569.6721,
    "uncertainty": {
     "type": "symmetric",
     "value": 0.0015
    }
   },
   "spinParity": {
    "values": [
     {
      "twoTimesSpin": 1,
      "isTentativeSpin": false,
      "parity": "+",
      "isTentativeParity": false
     }
    ]
   },
   "isStable": false,
   "halfLife": {
    "unit": "us",
    "value": 155,
    "uncertainty": {
     "type": "symmetric",
     "value": 7
    }
   },
   "flags": [
    "D"
   ],
   "crossReferences": [
    {
     "dataset": "176LU(N,G) E=THERMAL"
    },
    {
     "assignment": "ambiguous",
     "dataset": "176YB(3HE,D),(A,T)",
     "level": 576
    },
    {
     "assignment": "ambiguous",
     "dataset": "178HF(T,A)",
     "level": 574
    },
    {
     "dataset": "(HI,XNG)"
    }
   ],
   "gammas": [
    {
     "energy": {
      "unit": "keV",
      "value": 111.715,
      "uncertainty": {
       "type": "symmetric",
       "value": 0.001
      }
     },
     "gammaIntensity": {
      "value": 100,
      "uncertainty": {
       "type": "symmetric",
       "value": 10
      }
     },
     "initialLevelIndex": 9,
     "finalLevelIndex": 7,
     "multipolarity": {
      "stringRepresentation": "E2",
      "spins": [
       {
        "spin": 2
       }
      ],
      "parity": "+"
     },
     "theoreticalInternalConversionCoefficients": {
      "totalValue": {
       "value": 2.2,
       "uncertainty": {
        "type": "unreported"
       }
      },
      "shellValues": [
       {
        "includesOuterShells": false,
        "shell": "K",
        "value": 0.774,
        "uncertainty": {
         "type": "symmetric",
         "value": 0.011
        }
       },
       {
        "includesOuterShells": false,
        "shell": "L",
        "value": 1.087,
        "uncertainty": {
         "type": "symmetric",
         "value": 0.016
        }
       },
       {
        "includesOuterShells": false,
        "shell": "M",
        "value": 0.269,
        "uncertainty": {
         "type": "symmetric",
         "value": 0.004
        }
       },
       {
        "includesOuterShells": false,
        "shell": "N",
        "value": 0.0619,
        "uncertainty": {
         "type": "symmetric",
         "value": 0.0009
        }
       },
       {
        "includesOuterShells": false,
        "shell": "O",
        "value": 0.00752,
        "uncertainty": {
         "type": "symmetric",
         "value": 0.00011
        }
       },
       {
        "includesOuterShells": false,
        "shell": "P",
        "value": 0.0000407,
        "uncertainty": {
         "type": "symmetric",
         "value": 6e-7
        }
       }
      ]
     },
     "reducedTransitionProbabilities": [
      {
       "multipolarity": "E2",
       "unit": "W.u.",
       "value": 0.0011,
       "uncertainty": {
        "type": "symmetric",
        "value": 0.00005
       }
      }
     ],
     "comments": [
      {
       "type": "comment",
       "head": [
        {
         "name": "M"
        }
       ],
       "body": "\\ensuremath{\\alpha}(K)exp=1.0 \\textit{4}, \\ensuremath{\\alpha}(L1)exp=0.39 \\textit{15}, \\ensuremath{\\alpha}(L2)exp=0.7 \\textit{3}, \\ensuremath{\\alpha}(L3)exp=0.8 \\textit{3}, and \\ensuremath{\\alpha}(M3)exp=0.15 \\textit{6} (1996Pe05). Other: \\ensuremath{\\alpha}(K)exp=0.96, \\ensuremath{\\alpha}(L1)exp=0.1, \\ensuremath{\\alpha}(L2)exp=0.75, \\ensuremath{\\alpha}(L3)exp=0.67, \\ensuremath{\\alpha}(M)exp=0.42 and \\ensuremath{\\alpha}(N)exp=0.13 (1971Ma45)."
      }
     ]
    },
    {
     "energy": {
      "unit": "keV",
      "value": 569.68,
      "uncertainty": {
       "type": "symmetric",
       "value": 0.009
      }
     },
     "gammaIntensity": {
      "value": 2.1,
      "uncertainty": {
       "type": "symmetric",
       "value": 0.5
      }
     },
     "initialLevelIndex": 9,
     "finalLevelIndex": 0,
     "multipolarity": {
      "stringRepresentation": "[M3]",
      "spins": [
       {
        "spin": 3,
        "evaluatorInferred": true
       }
      ],
      "parity": "+"
     },
     "theoreticalInternalConversionCoefficients": {
      "totalValue": {
       "value": 0.235,
       "uncertainty": {
        "type": "unreported"
       }
      },
      "shellValues": [
       {
        "includesOuterShells": false,
        "shell": "K",
        "value": 0.183,
        "uncertainty": {
         "type": "symmetric",
         "value": 0.003
        }
       },
       {
        "includesOuterShells": false,
        "shell": "L",
        "value": 0.0395,
        "uncertainty": {
         "type": "symmetric",
         "value": 0.0006
        }
       },
       {
        "includesOuterShells": false,
        "shell": "M",
        "value": 0.0093,
        "uncertainty": {
         "type": "symmetric",
         "value": 0.00013
        }
       },
       {
        "includesOuterShells": false,
        "shell": "N",
        "value": 0.0022,
        "uncertainty": {
         "type": "symmetric",
         "value": 0.00003
        }
       },
       {
        "includesOuterShells": false,
        "shell": "O",
        "value": 0.000319,
        "uncertainty": {
         "type": "symmetric",
         "value": 0.000005
        }
       },
       {
        "includesOuterShells": false,
        "shell": "P",
        "value": 0.00001753,
        "uncertainty": {
         "type": "symmetric",
         "value": 2.5e-7
        }
       }
      ]
     },
     "reducedTransitionProbabilities": [
      {
       "multipolarity": "M3",
       "unit": "W.u.",
       "value": 0.14,
       "uncertainty": {
        "type": "symmetric",
        "value": 0.04
       }
      }
     ]
    }
   ],
   "band": 3,
   "comments": [
    {
     "type": "comment",
     "head": [
      {
       "name": "J"
      }
     ],
     "body": "L=0+2 for 1/2\\ensuremath{^{+}}, 3/2\\ensuremath{^{+}} doublet in \\ensuremath{^{\\textnormal{176}}}Yb(\\ensuremath{^{\\textnormal{3}}}He,d),(\\ensuremath{\\alpha},t); 111.715\\ensuremath{\\gamma} E2 to 5/2\\ensuremath{^{+}}; configuration assignment."
    },
    {
     "type": "comment",
     "head": [
      {
       "name": "T"
      }
     ],
     "body": "Weighted average of 150 \\ensuremath{\\mu}s \\textit{10} (1970Fl09) and 160 \\ensuremath{\\mu}s \\textit{10} (1965He06)"
    },
    {
     "type": "comment",
     "head": [
      {
       "name": "CONF"
      }
     ],
     "body": "\\ensuremath{\\pi}1/2[411] (d\\ensuremath{_{\\textnormal{3/2}}}) Nilsson configuration. Based on the observed in-band properties, such as alignment and large signature splitting, and systematics of structures in neighboring nuclei."
    }
   ]
  },
  {
   "energy": {
    "unit": "keV",
    "value": 573.6203,
    "uncertainty": {
     "type": "symmetric",
     "value": 0.0014
    }
   },
   "spinParity": {
    "values": [
     {
      "twoTimesSpin": 3,
      "isTentativeSpin": false,
      "parity": "+",
      "isTentativeParity": false
     }
    ]
   },
   "isStable": false,
   "halfLife": {
    "unit": "ns",
    "value": 3.5,
    "uncertainty": {
     "type": "symmetric",
     "value": 1
    }
   },
   "flags": [
    "D"
   ],
   "crossReferences": [
    {
     "dataset": "176LU(N,G) E=THERMAL"
    },
    {
     "assignment": "ambiguous",
     "dataset": "176YB(3HE,D),(A,T)",
     "level": 576
    },
    {
     "assignment": "ambiguous",
     "dataset": "178HF(T,A)",
     "level": 574
    },
    {
     "dataset": "(HI,XNG)"
    }
   ],
   "gammas": [
    {
     "energy": {
      "unit": "keV",
      "value": 115.665,
      "uncertainty": {
       "type": "symmetric",
       "value": 0.002
      }
     },
     "gammaIntensity": {
      "value": 100,
      "uncertainty": {
       "type": "unreported"
      }
     },
     "initialLevelIndex": 10,
     "finalLevelIndex": 7,
     "multipolarity": {
      "stringRepresentation": "M1(+E2)",
      "isMixedTransition": true,
      "spins": [
       {
        "spin": 1
       },
       {
        "spin": 2
       }
      ],
      "parity": "+"
     },
     "theoreticalInternalConversionCoefficients": {
      "totalValue": {
       "value": 2.42,
       "uncertainty": {
        "type": "unreported"
       }
      },
      "shellValues": [
       {
        "includesOuterShells": false,
        "shell": "K",
        "value": 2.02,
        "uncertainty": {
         "type": "symmetric",
         "value": 0.03
        }
       },
       {
        "includesOuterShells": false,
        "shell": "L",
        "value": 0.312,
        "uncertainty": {
         "type": "symmetric",
         "value": 0.005
        }
       },
       {
        "includesOuterShells": false,
        "shell": "M",
        "value": 0.0702,
        "uncertainty": {
         "type": "symmetric",
         "value": 0.001
        }
       },
       {
        "includesOuterShells": false,
        "shell": "N",
        "value": 0.01658,
        "uncertainty": {
         "type": "symmetric",
         "value": 0.00024
        }
       },
       {
        "includesOuterShells": false,
        "shell": "O",
        "value": 0.00246,
        "uncertainty": {
         "type": "symmetric",
         "value": 0.00004
        }
       },
       {
        "includesOuterShells": false,
        "shell": "P",
        "value": 0.0001517,
        "uncertainty": {
         "type": "symmetric",
         "value": 0.0000022
        }
       }
      ]
     },
     "comments": [
      {
       "type": "comment",
       "head": [
        {
         "name": "M"
        }
       ],
       "body": "\\ensuremath{\\alpha}(K)exp=4.5 \\textit{13} (1996Pe05); \\ensuremath{\\alpha}(K)exp=2.5 and \\ensuremath{\\alpha}(L1)exp=0.5 (1971Ma45)."
      }
     ]
    },
    {
     "energy": {
      "unit": "keV",
      "value": 573.6,
      "uncertainty": {
       "type": "symmetric",
       "value": 0.5
      }
     },
     "initialLevelIndex": 10,
     "finalLevelIndex": 0
    }
   ],
   "band": 3,
   "comments": [
    {
     "type": "comment",
     "head": [
      {
       "name": "J"
      }
     ],
     "body": "L=0+2 for 1/2\\ensuremath{^{+}}, 3/2\\ensuremath{^{+}} doublet in \\ensuremath{^{\\textnormal{176}}}Yb(\\ensuremath{^{\\textnormal{3}}}He,d),(\\ensuremath{\\alpha},t); 115.665\\ensuremath{\\gamma} M1 to 5/2\\ensuremath{^{+}} and 573.6\\ensuremath{\\gamma} to 7/2\\ensuremath{^{+}}; band assignment."
    },
    {
     "type": "comment",
     "head": [
      {
       "name": "T"
      }
     ],
     "body": "From 1972Ma54."
    }
   ]
  },
  {
   "energy": {
    "unit": "keV",
    "value": 636.2035,
    "uncertainty": {
     "type": "symmetric",
     "value": 0.0007
    }
   },
   "spinParity": {
    "values": [
     {
      "twoTimesSpin": 15,
      "isTentativeSpin": false,
      "parity": "+",
      "isTentativeParity": false
     }
    ]
   },
   "isStable": false,
   "flags": [
    "A"
   ],
   "crossReferences": [
    {
     "dataset": "176LU(N,G) E=THERMAL"
    },
    {
     "dataset": "177LU IT DECAY (160.4 D)"
    },
    {
     "assignment": "tentative",
     "dataset": "176LU(D,P)",
     "level": 633
    },
    {
     "dataset": "(HI,XNG)"
    }
   ],
   "gammas": [
    {
     "energy": {
      "unit": "keV",
      "value": 195.5602,
      "uncertainty": {
       "type": "symmetric",
       "value": 0.0007
      }
     },
     "gammaIntensity": {
      "value": 27.3,
      "uncertainty": {
       "type": "symmetric",
       "value": 0.4
      }
     },
     "initialLevelIndex": 11,
     "finalLevelIndex": 5,
     "multipolarity": {
      "stringRepresentation": "M1+E2",
      "isMixedTransition": true,
      "spins": [
       {
        "spin": 1
       },
       {
        "spin": 2
       }
      ],
      "parity": "+",
      "mixingRatio": {
       "isAbsoluteValue": true,
       "value": 0.48,
       "uncertainty": {
        "type": "symmetric",
        "value": 0.17
       }
      }
     },
     "theoreticalInternalConversionCoefficients": {
      "totalValue": {
       "value": 0.5,
       "uncertainty": {
        "type": "symmetric",
        "value": 0.03
       }
      },
      "shellValues": [
       {
        "includesOuterShells": false,
        "shell": "K",
        "value": 0.41,
        "uncertainty": {
         "type": "symmetric",
         "value": 0.04
        }
       },
       {
        "includesOuterShells": false,
        "shell": "L",
        "value": 0.075,
        "uncertainty": {
         "type": "symmetric",
         "value": 0.003
        }
       },
       {
        "includesOuterShells": false,
        "shell": "M",
        "value": 0.0172,
        "uncertainty": {
         "type": "symmetric",
         "value": 0.0008
        }
       },
       {
        "includesOuterShells": false,
        "shell": "N",
        "value": 0.00403,
        "uncertainty": {
         "type": "symmetric",
         "value": 0.00018
        }
       },
       {
        "includesOuterShells": false,
        "shell": "O",
        "value": 0.000575,
        "uncertainty": {
         "type": "symmetric",
         "value": 0.000015
        }
       },
       {
        "includesOuterShells": false,
        "shell": "P",
        "value": 0.00003,
        "uncertainty": {
         "type": "symmetric",
         "value": 0.000003
        }
       }
      ]
     },
     "flags": [
      "P"
     ],
     "comments": [
      {
       "type": "comment",
       "head": [
        {
         "name": "M"
        }
       ],
       "body": "\\ensuremath{\\gamma}\\ensuremath{\\gamma}(\\ensuremath{\\theta}) (1974Kr12); \\ensuremath{\\alpha}(K)exp=0.37 \\textit{6} (2012De24); \\ensuremath{\\alpha}(K)exp=0.50 \\textit{8}, \\ensuremath{\\alpha}(L1)exp=0.037 \\textit{7}, \\ensuremath{\\alpha}(L2)exp=0.012 \\textit{4}, \\ensuremath{\\alpha}(M1)exp=0.010 \\textit{3}, and \\ensuremath{\\alpha}(M2)exp=0.010 \\textit{5} (1996Pe05). Other: \\ensuremath{\\alpha}(K)exp=0.53 and \\ensuremath{\\alpha}(L1)exp+\\ensuremath{\\alpha}(L2)exp=0.10 (1971Ma45)."
      },
      {
       "type": "comment",
       "head": [
        {
         "name": "MR"
        }
       ],
       "body": "Using the briccmixing program and the following experimental data: \\ensuremath{\\delta}(\\ensuremath{\\gamma}\\ensuremath{\\gamma}(\\ensuremath{\\theta}))=+0.41 \\textit{+19{\\textminus}11} (1974Kr12) and \\ensuremath{\\alpha}(K)exp=0.37 \\textit{6} (2012De24). The sign is from 1974Kr12. Others (not used in the analysis):\\hphantom{a}\\ensuremath{\\alpha}(K)exp=0.50 \\textit{8}, \\ensuremath{\\alpha}(L1)exp=0.037 \\textit{7}, \\ensuremath{\\alpha}(L2)exp=0.012 \\textit{4}, \\ensuremath{\\alpha}(M1)exp=0.010 \\textit{3} and \\ensuremath{\\alpha}(M2)exp=0.0095 \\textit{50} (1996Pe05)"
      }
     ]
    },
    {
     "energy": {
      "unit": "keV",
      "value": 367.4174,
      "uncertainty": {
       "type": "symmetric",
       "value": 0.0007
      }
     },
     "gammaIntensity": {
      "value": 100,
      "uncertainty": {
       "type": "symmetric",
       "value": 1.2
      }
     },
     "initialLevelIndex": 11,
     "finalLevelIndex": 3,
     "multipolarity": {
      "stringRepresentation": "E2",
      "spins": [
       {
        "spin": 2
       }
      ],
      "parity": "+"
     },
     "theoreticalInternalConversionCoefficients": {
      "totalValue": {
       "value": 0.0424,
       "uncertainty": {
        "type": "unreported"
       }
      },
      "shellValues": [
       {
        "includesOuterShells": false,
        "shell": "K",
        "value": 0.0314,
        "uncertainty": {
         "type": "symmetric",
         "value": 0.0005
        }
       },
       {
        "includesOuterShells": false,
        "shell": "L",
        "value": 0.00847,
        "uncertainty": {
         "type": "symmetric",
         "value": 0.00012
        }
       },
       {
        "includesOuterShells": false,
        "shell": "M",
        "value": 0.002,
        "uncertainty": {
         "type": "symmetric",
         "value": 0.00003
        }
       },
       {
        "includesOuterShells": false,
        "shell": "N",
        "value": 0.000466,
        "uncertainty": {
         "type": "symmetric",
         "value": 0.000007
        }
       },
       {
        "includesOuterShells": false,
        "shell": "O",
        "value": 0.0000624,
        "uncertainty": {
         "type": "symmetric",
         "value": 9e-7
        }
       },
       {
        "includesOuterShells": false,
        "shell": "P",
        "value": 0.00000204,
        "uncertainty": {
         "type": "symmetric",
         "value": 3e-8
        }
       }
      ]
     },
     "flags": [
      "P"
     ],
     "comments": [
      {
       "type": "comment",
       "head": [
        {
         "name": "M"
        }
       ],
       "body": "\\ensuremath{\\alpha}(K)exp=0.034 \\textit{4} (2012De24); \\ensuremath{\\alpha}(K)exp=0.028 \\textit{7}, \\ensuremath{\\alpha}(L2)exp=0.0024 \\textit{8}, and \\ensuremath{\\alpha}(L3)exp=0.0018 \\textit{6} (1996Pe05); \\ensuremath{\\alpha}(K)exp=0.024, \\ensuremath{\\alpha}(L1)exp+\\ensuremath{\\alpha}(L2)exp=0.005, \\ensuremath{\\alpha}(L3)exp=0.0013, \\ensuremath{\\alpha}(M)exp=0.0013 and \\ensuremath{\\alpha}(N)exp=0.0027 (1971Ma45)."
      }
     ]
    }
   ],
   "band": 0,
   "comments": [
    {
     "type": "comment",
     "head": [
      {
       "name": "J"
      }
     ],
     "body": "195.5602\\ensuremath{\\gamma} M1+E2 to 13/2\\ensuremath{^{+}}, 367.4174\\ensuremath{\\gamma} E2 to 11/2\\ensuremath{^{+}} level; band assignment."
    }
   ]
  },
  {
   "energy": {
    "unit": "keV",
    "value": 637.1126,
    "uncertainty": {
     "type": "symmetric",
     "value": 0.0016
    }
   },
   "spinParity": {
    "values": [
     {
      "twoTimesSpin": 15,
      "isTentativeSpin": false,
      "parity": "-",
      "isTentativeParity": false
     }
    ]
   },
   "isStable": false,
   "flags": [
    "B"
   ],
   "crossReferences": [
    {
     "dataset": "176LU(N,G) E=THERMAL"
    },
    {
     "dataset": "177LU IT DECAY (160.4 D)"
    },
    {
     "dataset": "(HI,XNG)"
    }
   ],
   "gammas": [
    {
     "energy": {
      "unit": "keV",
      "value": 185.599,
      "uncertainty": {
       "type": "symmetric",
       "value": 0.001
      }
     },
     "gammaIntensity": {
      "value": 100,
      "uncertainty": {
       "type": "symmetric",
       "value": 5
      }
     },
     "initialLevelIndex": 12,
     "finalLevelIndex": 6,
     "multipolarity": {
      "stringRepresentation": "M1(+E2)",
      "isMixedTransition": true,
      "spins": [
       {
        "spin": 1
       },
       {
        "spin": 2
       }
      ],
      "parity": "+"
     },
     "theoreticalInternalConversionCoefficients": {
      "totalValue": {
       "value": 0.638,
       "uncertainty": {
        "type": "unreported"
       }
      },
      "shellValues": [
       {
        "includesOuterShells": false,
        "shell": "K",
        "value": 0.533,
        "uncertainty": {
         "type": "symmetric",
         "value": 0.008
        }
       },
       {
        "includesOuterShells": false,
        "shell": "L",
        "value": 0.0816,
        "uncertainty": {
         "type": "symmetric",
         "value": 0.0012
        }
       },
       {
        "includesOuterShells": false,
        "shell": "M",
        "value": 0.0183,
        "uncertainty": {
         "type": "symmetric",
         "value": 0.0003
        }
       },
       {
        "includesOuterShells": false,
        "shell": "N",
        "value": 0.00433,
        "uncertainty": {
         "type": "symmetric",
         "value": 0.00006
        }
       },
       {
        "includesOuterShells": false,
        "shell": "O",
        "value": 0.000642,
        "uncertainty": {
         "type": "symmetric",
         "value": 0.000009
        }
       },
       {
        "includesOuterShells": false,
        "shell": "P",
        "value": 0.0000398,
        "uncertainty": {
         "type": "symmetric",
         "value": 6e-7
        }
       }
      ]
     },
     "comments": [
      {
       "type": "comment",
       "head": [
        {
         "name": "RI"
        }
       ],
       "body": "From (HI,xn\\ensuremath{\\gamma})"
      },
      {
       "type": "comment",
       "head": [
        {
         "name": "M"
        }
       ],
       "body": "\\ensuremath{\\alpha}(K)exp=0.66 \\textit{10}, \\ensuremath{\\alpha}(L1)exp=0.065 \\textit{10}, \\ensuremath{\\alpha}(L2)exp=0.0041 \\textit{32}, and \\ensuremath{\\alpha}(M1)exp=0.016 \\textit{3} (1996Pe05); \\ensuremath{\\alpha}(K)exp=0.51, \\ensuremath{\\alpha}(L1)exp+\\ensuremath{\\alpha}(L2)exp=0.082, \\ensuremath{\\alpha}(L3)exp=0.0087, and \\ensuremath{\\alpha}(M)exp=0.0052 (1971Ma45)"
      }
     ]
    },
    {
     "energy": {
      "unit": "keV",
      "value": 348.098,
      "uncertainty": {
       "type": "symmetric",
       "value": 0.003
      }
     },
     "gammaIntensity": {
      "value": 20.51,
      "uncertainty": {
       "type": "symmetric",
       "value": 0.19
      }
     },
     "initialLevelIndex": 12,
     "finalLevelIndex": 4,
     "multipolarity": {
      "stringRepresentation": "E2",
      "spins": [
       {
        "spin": 2
       }
      ],
      "parity": "+"
     },
     "theoreticalInternalConversionCoefficients": {
      "totalValue": {
       "value": 0.0494,
       "uncertainty": {
        "type": "unreported"
       }
      },
      "shellValues": [
       {
        "includesOuterShells": false,
        "shell": "K",
        "value": 0.0361,
        "uncertainty": {
         "type": "symmetric",
         "value": 0.0005
        }
       },
       {
        "includesOuterShells": false,
        "shell": "L",
        "value": 0.01021,
        "uncertainty": {
         "type": "symmetric",
         "value": 0.00015
        }
       },
       {
        "includesOuterShells": false,
        "shell": "M",
        "value": 0.00242,
        "uncertainty": {
         "type": "symmetric",
         "value": 0.00004
        }
       },
       {
        "includesOuterShells": false,
        "shell": "N",
        "value": 0.000564,
        "uncertainty": {
         "type": "symmetric",
         "value": 0.000008
        }
       },
       {
        "includesOuterShells": false,
        "shell": "O",
        "value": 0.0000749,
        "uncertainty": {
         "type": "symmetric",
         "value": 0.0000011
        }
       },
       {
        "includesOuterShells": false,
        "shell": "P",
        "value": 0.00000233,
        "uncertainty": {
         "type": "symmetric",
         "value": 4e-8
        }
       }
      ]
     },
     "comments": [
      {
       "type": "comment",
       "head": [
        {
         "name": "RI"
        }
       ],
       "body": "From (HI,xn\\ensuremath{\\gamma})"
      },
      {
       "type": "comment",
       "head": [
        {
         "name": "M"
        }
       ],
       "body": "\\ensuremath{\\alpha}(K)exp=0.023 \\textit{5}, \\ensuremath{\\alpha}(L1)exp=0.0036 \\textit{10}, \\ensuremath{\\alpha}(L2)exp=0.0030 \\textit{9}, \\ensuremath{\\alpha}(L3)exp=0.0024 \\textit{9} (1996Pe05); \\ensuremath{\\alpha}(K)exp=0.047, \\ensuremath{\\alpha}(L1)exp+\\ensuremath{\\alpha}(L2)exp=0.0069, and \\ensuremath{\\alpha}(M)exp=0.0019 (1971Ma45)."
      }
     ]
    }
   ],
   "band": 1,
   "comments": [
    {
     "type": "comment",
     "head": [
      {
       "name": "J"
      }
     ],
     "body": "185.599\\ensuremath{\\gamma} M1(+E2) to 13/2\\ensuremath{^{-}}, 348.098\\ensuremath{\\gamma} E2 to 11/2\\ensuremath{^{-}}; band assignment"
    }
   ]
  },
  {
   "energy": {
    "unit": "keV",
    "value": 671.9408,
    "uncertainty": {
     "type": "symmetric",
     "value": 0.0013
    }
   },
   "spinParity": {
    "values": [
     {
      "twoTimesSpin": 9,
      "isTentativeSpin": false,
      "parity": "+",
      "isTentativeParity": false
     }
    ]
   },
   "isStable": false,
   "flags": [
    "C"
   ],
   "crossReferences": [
    {
     "dataset": "176LU(N,G) E=THERMAL"
    },
    {
     "dataset": "177YB B- DECAY"
    },
    {
     "dataset": "(HI,XNG)"
    }
   ],
   "gammas": [
    {
     "energy": {
      "unit": "keV",
      "value": 119.845,
      "uncertainty": {
       "type": "symmetric",
       "value": 0.001
      }
     },
     "gammaIntensity": {
      "value": 100,
      "uncertainty": {
       "type": "symmetric",
       "value": 11
      }
     },
     "initialLevelIndex": 13,
     "finalLevelIndex": 8,
     "multipolarity": {
      "stringRepresentation": "M1+E2",
      "isMixedTransition": true,
      "spins": [
       {
        "spin": 1
       },
       {
        "spin": 2
       }
      ],
      "parity": "+",
      "mixingRatio": {
       "isAbsoluteValue": true,
       "value": 0.34,
       "uncertainty": {
        "type": "symmetric",
        "value": 0.22
       }
      }
     },
     "theoreticalInternalConversionCoefficients": {
      "totalValue": {
       "value": 2.14,
       "uncertainty": {
        "type": "symmetric",
        "value": 0.08
       }
      },
      "shellValues": [
       {
        "includesOuterShells": false,
        "shell": "K",
        "value": 1.71,
        "uncertainty": {
         "type": "symmetric",
         "value": 0.16
        }
       },
       {
        "includesOuterShells": false,
        "shell": "L",
        "value": 0.33,
        "uncertainty": {
         "type": "symmetric",
         "value": 0.07
        }
       },
       {
        "includesOuterShells": false,
        "shell": "M",
        "value": 0.077,
        "uncertainty": {
         "type": "symmetric",
         "value": 0.018
        }
       },
       {
        "includesOuterShells": false,
        "shell": "N",
        "value": 0.018,
        "uncertainty": {
         "type": "symmetric",
         "value": 0.004
        }
       },
       {
        "includesOuterShells": false,
        "shell": "O",
        "value": 0.0026,
        "uncertainty": {
         "type": "symmetric",
         "value": 0.0005
        }
       },
       {
        "includesOuterShells": false,
        "shell": "P",
        "value": 0.000126,
        "uncertainty": {
         "type": "symmetric",
         "value": 0.000014
        }
       }
      ]
     },
     "comments": [
      {
       "type": "comment",
       "head": [
        {
         "name": "M"
        }
       ],
       "body": "\\ensuremath{\\alpha}(K)exp=2.6 \\textit{10}, \\ensuremath{\\alpha}(L1)exp=0.38 \\textit{15}, \\ensuremath{\\alpha}(L2)exp=0.18 \\textit{7}, \\ensuremath{\\alpha}(L3)exp=0.25 \\textit{10}, \\ensuremath{\\alpha}(M1)exp=0.08 \\textit{3}, and \\ensuremath{\\alpha}(M2)exp=0.017 \\textit{7} (1996Pe05); \\ensuremath{\\alpha}(K)exp=1.6, \\ensuremath{\\alpha}(L1)exp=0.24, \\ensuremath{\\alpha}(L2)exp=0.027, \\ensuremath{\\alpha}(M)exp=0.11 and \\ensuremath{\\alpha}(N)exp=0.028 (1971Ma45)."
      },
      {
       "type": "comment",
       "head": [
        {
         "name": "MR"
        }
       ],
       "body": "Using the briccmixing program and the following experimental data: \\ensuremath{\\alpha}(K)exp=2.6 \\textit{10}, \\ensuremath{\\alpha}(L1)exp=0.038 \\textit{15}, \\ensuremath{\\alpha}(M1)exp=0.08 \\textit{3} and \\ensuremath{\\alpha}(M2)exp=0.017 \\textit{7} (1996Pe05)"
      }
     ]
    },
    {
     "energy": {
      "unit": "keV",
      "value": 213.986,
      "uncertainty": {
       "type": "symmetric",
       "value": 0.003
      }
     },
     "gammaIntensity": {
      "value": 12.4,
      "uncertainty": {
       "type": "symmetric",
       "value": 1.6
      }
     },
     "initialLevelIndex": 13,
     "finalLevelIndex": 7
    },
    {
     "energy": {
      "unit": "keV",
      "value": 231.262,
      "uncertainty": {
       "type": "symmetric",
       "value": 0.013
      }
     },
     "gammaIntensity": {
      "value": 0.58,
      "uncertainty": {
       "type": "symmetric",
       "value": 0.19
      }
     },
     "initialLevelIndex": 13,
     "finalLevelIndex": 5
    },
    {
     "energy": {
      "unit": "keV",
      "value": 382.939,
      "uncertainty": {
       "type": "symmetric",
       "value": 0.007
      }
     },
     "gammaIntensity": {
      "value": 1,
      "uncertainty": {
       "type": "symmetric",
       "value": 0.4
      }
     },
     "initialLevelIndex": 13,
     "finalLevelIndex": 4
    },
    {
     "energy": {
      "unit": "keV",
      "value": 403.222,
      "uncertainty": {
       "type": "symmetric",
       "value": 0.011
      }
     },
     "gammaIntensity": {
      "value": 2,
      "uncertainty": {
       "type": "symmetric",
       "value": 0.4
      }
     },
     "initialLevelIndex": 13,
     "finalLevelIndex": 3
    },
    {
     "energy": {
      "unit": "keV",
      "value": 550.318,
      "uncertainty": {
       "type": "symmetric",
       "value": 0.003
      }
     },
     "gammaIntensity": {
      "value": 48,
      "uncertainty": {
       "type": "symmetric",
       "value": 5
      }
     },
     "initialLevelIndex": 13,
     "finalLevelIndex": 1,
     "multipolarity": {
      "stringRepresentation": "M1+E2",
      "isMixedTransition": true,
      "spins": [
       {
        "spin": 1
       },
       {
        "spin": 2
       }
      ],
      "parity": "+",
      "mixingRatio": {
       "isAbsoluteValue": true,
       "value": 1.3,
       "uncertainty": {
        "type": "symmetric",
        "value": 0.6
       }
      }
     },
     "theoreticalInternalConversionCoefficients": {
      "totalValue": {
       "value": 0.022,
       "uncertainty": {
        "type": "symmetric",
        "value": 0.006
       }
      },
      "shellValues": [
       {
        "includesOuterShells": false,
        "shell": "K",
        "value": 0.018,
        "uncertainty": {
         "type": "symmetric",
         "value": 0.006
        }
       },
       {
        "includesOuterShells": false,
        "shell": "L",
        "value": 0.0031,
        "uncertainty": {
         "type": "symmetric",
         "value": 0.0006
        }
       },
       {
        "includesOuterShells": false,
        "shell": "M",
        "value": 0.0007,
        "uncertainty": {
         "type": "symmetric",
         "value": 0.00013
        }
       },
       {
        "includesOuterShells": false,
        "shell": "N",
        "value": 0.00017,
        "uncertainty": {
         "type": "symmetric",
         "value": 0.00003
        }
       },
       {
        "includesOuterShells": false,
        "shell": "O",
        "value": 0.000024,
        "uncertainty": {
         "type": "symmetric",
         "value": 0.000005
        }
       },
       {
        "includesOuterShells": false,
        "shell": "P",
        "value": 0.0000013,
        "uncertainty": {
         "type": "symmetric",
         "value": 4e-7
        }
       }
      ]
     },
     "comments": [
      {
       "type": "comment",
       "head": [
        {
         "name": "M"
        },
        {
         "name": "MR"
        }
       ],
       "body": "\\ensuremath{\\alpha}(K)exp=0.016 \\textit{5} and \\ensuremath{\\alpha}(L1)exp=0.0033 \\textit{13} (1996Pe05). Other: \\ensuremath{\\alpha}(K)exp=0.021 (1971Ma45)."
      }
     ]
    },
    {
     "energy": {
      "unit": "keV",
      "value": 671.944,
      "uncertainty": {
       "type": "symmetric",
       "value": 0.008
      }
     },
     "gammaIntensity": {
      "value": 16.4,
      "uncertainty": {
       "type": "symmetric",
       "value": 1.7
      }
     },
     "initialLevelIndex": 13,
     "finalLevelIndex": 0,
     "multipolarity": {
      "stringRepresentation": "M1(+E2)",
      "isMixedTransition": true,
      "spins": [
       {
        "spin": 1
       },
       {
        "spin": 2
       }
      ],
      "parity": "+",
      "mixingRatio": {
       "isAbsoluteValue": true,
       "value": 0.3,
       "uncertainty": {
        "type": "limit",
        "limitType": "upper",
        "isInclusive": true
       }
      }
     },
     "theoreticalInternalConversionCoefficients": {
      "totalValue": {
       "value": 0.0203,
       "uncertainty": {
        "type": "symmetric",
        "value": 0.0006
       }
      },
      "shellValues": [
       {
        "includesOuterShells": false,
        "shell": "K",
        "value": 0.0171,
        "uncertainty": {
         "type": "symmetric",
         "value": 0.0005
        }
       },
       {
        "includesOuterShells": false,
        "shell": "L",
        "value": 0.00253,
        "uncertainty": {
         "type": "symmetric",
         "value": 0.00007
        }
       },
       {
        "includesOuterShells": false,
        "shell": "M",
        "value": 0.000567,
        "uncertainty": {
         "type": "symmetric",
         "value": 0.000014
        }
       },
       {
        "includesOuterShells": false,
        "shell": "N",
        "value": 0.000134,
        "uncertainty": {
         "type": "symmetric",
         "value": 0.000004
        }
       },
       {
        "includesOuterShells": false,
        "shell": "O",
        "value": 0.0000199,
        "uncertainty": {
         "type": "symmetric",
         "value": 5e-7
        }
       },
       {
        "includesOuterShells": false,
        "shell": "P",
        "value": 0.00000125,
        "uncertainty": {
         "type": "symmetric",
         "value": 4e-8
        }
       }
      ]
     },
     "comments": [
      {
       "type": "comment",
       "head": [
        {
         "name": "M"
        },
        {
         "name": "MR"
        }
       ],
       "body": "\\ensuremath{\\alpha}(K)exp=0.020 (1971Ma45)."
      }
     ]
    }
   ],
   "band": 2,
   "comments": [
    {
     "type": "comment",
     "head": [
      {
       "name": "J"
      }
     ],
     "body": "119.845\\ensuremath{\\gamma} M1+E2 to 7/2\\ensuremath{^{+}}, 231.262\\ensuremath{\\gamma} to 13/2\\ensuremath{^{+}}; band assignment."
    }
   ]
  },
  {
   "energy": {
    "unit": "keV",
    "value": 709.4074,
    "uncertainty": {
     "type": "symmetric",
     "value": 0.0015
    }
   },
   "spinParity": {
    "values": [
     {
      "twoTimesSpin": 5,
      "isTentativeSpin": false,
      "parity": "+",
      "isTentativeParity": false
     }
    ]
   },
   "isStable": false,
   "flags": [
    "D"
   ],
   "crossReferences": [
    {
     "dataset": "176LU(N,G) E=THERMAL"
    },
    {
     "dataset": "178HF(T,A)"
    },
    {
     "dataset": "(HI,XNG)"
    }
   ],
   "gammas": [
    {
     "energy": {
      "unit": "keV",
      "value": 135.788,
      "uncertainty": {
       "type": "symmetric",
       "value": 0.001
      }
     },
     "gammaIntensity": {
      "value": 100,
      "uncertainty": {
       "type": "symmetric",
       "value": 12
      }
     },
     "initialLevelIndex": 14,
     "finalLevelIndex": 10,
     "multipolarity": {
      "stringRepresentation": "M1(+E2)",
      "isMixedTransition": true,
      "spins": [
       {
        "spin": 1
       },
       {
        "spin": 2
       }
      ],
      "parity": "+"
     },
     "theoreticalInternalConversionCoefficients": {
      "totalValue": {
       "value": 1.536,
       "uncertainty": {
        "type": "unreported"
       }
      },
      "shellValues": [
       {
        "includesOuterShells": false,
        "shell": "K",
        "value": 1.282,
        "uncertainty": {
         "type": "symmetric",
         "value": 0.018
        }
       },
       {
        "includesOuterShells": false,
        "shell": "L",
        "value": 0.197,
        "uncertainty": {
         "type": "symmetric",
         "value": 0.003
        }
       },
       {
        "includesOuterShells": false,
        "shell": "M",
        "value": 0.0444,
        "uncertainty": {
         "type": "symmetric",
         "value": 0.0007
        }
       },
       {
        "includesOuterShells": false,
        "shell": "N",
        "value": 0.01048,
        "uncertainty": {
         "type": "symmetric",
         "value": 0.00015
        }
       },
       {
        "includesOuterShells": false,
        "shell": "O",
        "value": 0.001553,
        "uncertainty": {
         "type": "symmetric",
         "value": 0.000022
        }
       },
       {
        "includesOuterShells": false,
        "shell": "P",
        "value": 0.000096,
        "uncertainty": {
         "type": "symmetric",
         "value": 0.0000014
        }
       }
      ]
     },
     "comments": [
      {
       "type": "comment",
       "head": [
        {
         "name": "M"
        }
       ],
       "body": "\\ensuremath{\\alpha}(K)exp=1.2 \\textit{3}, \\ensuremath{\\alpha}(L2)exp=0.043 \\textit{12}, \\ensuremath{\\alpha}(L3)exp=0.034 \\textit{10}, \\ensuremath{\\alpha}(M1)exp=0.066 \\textit{16} (1996Pe05). Other: \\ensuremath{\\alpha}(K)exp=1.2 and \\ensuremath{\\alpha}(L1)exp+\\ensuremath{\\alpha}(L2)exp=0.19 (1971Ma45)."
      }
     ]
    },
    {
     "energy": {
      "unit": "keV",
      "value": 139.735,
      "uncertainty": {
       "type": "symmetric",
       "value": 0.001
      }
     },
     "gammaIntensity": {
      "value": 10.6,
      "uncertainty": {
       "type": "symmetric",
       "value": 1.8
      }
     },
     "initialLevelIndex": 14,
     "finalLevelIndex": 9
    },
    {
     "energy": {
      "unit": "keV",
      "value": 157.317,
      "uncertainty": {
       "type": "symmetric",
       "value": 0.018
      }
     },
     "gammaIntensity": {
      "value": 0.6,
      "uncertainty": {
       "type": "symmetric",
       "value": 0.6
      }
     },
     "initialLevelIndex": 14,
     "finalLevelIndex": 8
    },
    {
     "energy": {
      "unit": "keV",
      "value": 251.43,
      "uncertainty": {
       "type": "symmetric",
       "value": 0.08
      }
     },
     "gammaIntensity": {
      "value": 3.6,
      "uncertainty": {
       "type": "symmetric",
       "value": 1.2
      }
     },
     "initialLevelIndex": 14,
     "finalLevelIndex": 7
    }
   ],
   "band": 3,
   "comments": [
    {
     "type": "comment",
     "head": [
      {
       "name": "J"
      }
     ],
     "body": "Comparison of measured (t,\\ensuremath{\\alpha}) cross section in \\ensuremath{^{\\textnormal{178}}}Hf(t,\\ensuremath{\\alpha}) with calculated DWBA values. For the corresponding spectroscopic factor see 1992Bu12; 135.788\\ensuremath{\\gamma} M1+E2 to 3/2\\ensuremath{^{+}}, 139.735\\ensuremath{\\gamma} to 1/2\\ensuremath{^{+}}; band assignment."
    }
   ]
  },
  {
   "energy": {
    "unit": "keV",
    "value": 720.7963,
    "uncertainty": {
     "type": "symmetric",
     "value": 0.0016
    }
   },
   "spinParity": {
    "values": [
     {
      "twoTimesSpin": 7,
      "isTentativeSpin": false,
      "parity": "+",
      "isTentativeParity": false
     }
    ]
   },
   "isStable": false,
   "flags": [
    "D"
   ],
   "crossReferences": [
    {
     "dataset": "176LU(N,G) E=THERMAL"
    },
    {
     "dataset": "(HI,XNG)"
    }
   ],
   "gammas": [
    {
     "energy": {
      "unit": "keV",
      "value": 147.175,
      "uncertainty": {
       "type": "symmetric",
       "value": 0.001
      }
     },
     "gammaIntensity": {
      "value": 100,
      "uncertainty": {
       "type": "symmetric",
       "value": 11
      }
     },
     "initialLevelIndex": 15,
     "finalLevelIndex": 10,
     "multipolarity": {
      "stringRepresentation": "E2",
      "spins": [
       {
        "spin": 2
       }
      ],
      "parity": "+"
     },
     "theoreticalInternalConversionCoefficients": {
      "totalValue": {
       "value": 0.8,
       "uncertainty": {
        "type": "unreported"
       }
      },
      "shellValues": [
       {
        "includesOuterShells": false,
        "shell": "K",
        "value": 0.387,
        "uncertainty": {
         "type": "symmetric",
         "value": 0.006
        }
       },
       {
        "includesOuterShells": false,
        "shell": "L",
        "value": 0.316,
        "uncertainty": {
         "type": "symmetric",
         "value": 0.005
        }
       },
       {
        "includesOuterShells": false,
        "shell": "M",
        "value": 0.0777,
        "uncertainty": {
         "type": "symmetric",
         "value": 0.0011
        }
       },
       {
        "includesOuterShells": false,
        "shell": "N",
        "value": 0.0179,
        "uncertainty": {
         "type": "symmetric",
         "value": 0.0003
        }
       },
       {
        "includesOuterShells": false,
        "shell": "O",
        "value": 0.00221,
        "uncertainty": {
         "type": "symmetric",
         "value": 0.00003
        }
       },
       {
        "includesOuterShells": false,
        "shell": "P",
        "value": 0.0000208,
        "uncertainty": {
         "type": "symmetric",
         "value": 3e-7
        }
       }
      ]
     },
     "comments": [
      {
       "type": "comment",
       "head": [
        {
         "name": "M"
        }
       ],
       "body": "\\ensuremath{\\alpha}(K)exp=1.1 \\textit{3}, \\ensuremath{\\alpha}(L1)exp=0.15 \\textit{4}, \\ensuremath{\\alpha}(L2)exp=0.10 \\textit{3}, \\ensuremath{\\alpha}(L3)exp=0.0051 \\textit{10}, \\ensuremath{\\alpha}(M1)exp=0.032 \\textit{9}, \\ensuremath{\\alpha}(M2)exp=0.014 \\textit{3} and \\ensuremath{\\alpha}(M3)exp=0.0014 \\textit{5} (1996Pe05); \\ensuremath{\\alpha}(K)exp=0.66, \\ensuremath{\\alpha}(L1)exp+\\ensuremath{\\alpha}(L2)exp=0.12, \\ensuremath{\\alpha}(L3)exp=0.015, \\ensuremath{\\alpha}(M)exp=0.045 and \\ensuremath{\\alpha}(N)exp=0.0097 (1971Ma45)."
      }
     ]
    },
    {
     "energy": {
      "unit": "keV",
      "value": 168.714,
      "uncertainty": {
       "type": "symmetric",
       "value": 0.008
      }
     },
     "gammaIntensity": {
      "value": 1.8,
      "uncertainty": {
       "type": "symmetric",
       "value": 0.6
      }
     },
     "initialLevelIndex": 15,
     "finalLevelIndex": 8
    },
    {
     "energy": {
      "unit": "keV",
      "value": 262.844,
      "uncertainty": {
       "type": "symmetric",
       "value": 0.009
      }
     },
     "gammaIntensity": {
      "value": 0.63,
      "uncertainty": {
       "type": "symmetric",
       "value": 0.21
      }
     },
     "initialLevelIndex": 15,
     "finalLevelIndex": 7
    }
   ],
   "band": 3,
   "comments": [
    {
     "type": "comment",
     "head": [
      {
       "name": "J"
      }
     ],
     "body": "147.175\\ensuremath{\\gamma} E2 to 3/2\\ensuremath{^{+}}; band assignment."
    }
   ]
  },
  {
   "energy": {
    "unit": "keV",
    "value": 761.7063,
    "uncertainty": {
     "type": "symmetric",
     "value": 0.0014
    }
   },
   "spinParity": {
    "values": [
     {
      "twoTimesSpin": 5,
      "isTentativeSpin": false,
      "parity": "-",
      "isTentativeParity": false
     }
    ]
   },
   "isStable": false,
   "halfLife": {
    "unit": "ns",
    "value": 33,
    "uncertainty": {
     "type": "symmetric",
     "value": 2
    }
   },
   "flags": [
    "E"
   ],
   "crossReferences": [
    {
     "dataset": "176LU(N,G) E=THERMAL"
    },
    {
     "dataset": "176YB(3HE,D),(A,T)",
     "level": 765
    },
    {
     "dataset": "(HI,XNG)"
    }
   ],
   "gammas": [
    {
     "energy": {
      "unit": "keV",
      "value": 52.1,
      "uncertainty": {
       "type": "symmetric",
       "value": 0.5
      }
     },
     "gammaIntensity": {
      "value": 0.46,
      "uncertainty": {
       "type": "symmetric",
       "value": 0.08
      }
     },
     "initialLevelIndex": 16,
     "finalLevelIndex": 14,
     "multipolarity": {
      "stringRepresentation": "[E1]",
      "spins": [
       {
        "spin": 1,
        "evaluatorInferred": true
       }
      ],
      "parity": "-"
     },
     "theoreticalInternalConversionCoefficients": {
      "totalValue": {
       "value": 0.378,
       "uncertainty": {
        "type": "unreported"
       }
      },
      "shellValues": [
       {
        "includesOuterShells": false,
        "shell": "L",
        "value": 0.294,
        "uncertainty": {
         "type": "symmetric",
         "value": 0.005
        }
       },
       {
        "includesOuterShells": false,
        "shell": "M",
        "value": 0.0666,
        "uncertainty": {
         "type": "symmetric",
         "value": 0.001
        }
       },
       {
        "includesOuterShells": false,
        "shell": "N",
        "value": 0.01522,
        "uncertainty": {
         "type": "symmetric",
         "value": 0.00022
        }
       },
       {
        "includesOuterShells": false,
        "shell": "O",
        "value": 0.00197,
        "uncertainty": {
         "type": "symmetric",
         "value": 0.00003
        }
       },
       {
        "includesOuterShells": false,
        "shell": "P",
        "value": 0.0000738,
        "uncertainty": {
         "type": "symmetric",
         "value": 0.0000011
        }
       }
      ]
     },
     "reducedTransitionProbabilities": [
      {
       "multipolarity": "E1",
       "unit": "W.u.",
       "value": 1.5e-7,
       "uncertainty": {
        "type": "symmetric",
        "value": 3e-8
       }
      }
     ]
    },
    {
     "energy": {
      "unit": "keV",
      "value": 188.08,
      "uncertainty": {
       "type": "symmetric",
       "value": 0.05
      }
     },
     "gammaIntensity": {
      "value": 28,
      "uncertainty": {
       "type": "symmetric",
       "value": 3
      }
     },
     "initialLevelIndex": 16,
     "finalLevelIndex": 10,
     "multipolarity": {
      "stringRepresentation": "E1",
      "spins": [
       {
        "spin": 1
       }
      ],
      "parity": "-"
     },
     "theoreticalInternalConversionCoefficients": {
      "totalValue": {
       "value": 0.067,
       "uncertainty": {
        "type": "unreported"
       }
      },
      "shellValues": [
       {
        "includesOuterShells": false,
        "shell": "K",
        "value": 0.0559,
        "uncertainty": {
         "type": "symmetric",
         "value": 0.0008
        }
       },
       {
        "includesOuterShells": false,
        "shell": "L",
        "value": 0.00864,
        "uncertainty": {
         "type": "symmetric",
         "value": 0.00012
        }
       },
       {
        "includesOuterShells": false,
        "shell": "M",
        "value": 0.00194,
        "uncertainty": {
         "type": "symmetric",
         "value": 0.00003
        }
       },
       {
        "includesOuterShells": false,
        "shell": "N",
        "value": 0.000452,
        "uncertainty": {
         "type": "symmetric",
         "value": 0.000007
        }
       },
       {
        "includesOuterShells": false,
        "shell": "O",
        "value": 0.0000638,
        "uncertainty": {
         "type": "symmetric",
         "value": 9e-7
        }
       },
       {
        "includesOuterShells": false,
        "shell": "P",
        "value": 0.00000328,
        "uncertainty": {
         "type": "symmetric",
         "value": 5e-8
        }
       }
      ]
     },
     "reducedTransitionProbabilities": [
      {
       "multipolarity": "E1",
       "unit": "W.u.",
       "value": 1.9e-7,
       "uncertainty": {
        "type": "symmetric",
        "value": 3e-8
       }
      }
     ],
     "comments": [
      {
       "type": "comment",
       "head": [
        {
         "name": "M"
        }
       ],
       "body": "\\ensuremath{\\alpha}(K)exp=0.060 \\textit{13} (1996Pe05)."
      }
     ]
    },
    {
     "energy": {
      "unit": "keV",
      "value": 209.61,
      "uncertainty": {
       "type": "symmetric",
       "value": 0.001
      }
     },
     "gammaIntensity": {
      "value": 9.9,
      "uncertainty": {
       "type": "symmetric",
       "value": 1
      }
     },
     "initialLevelIndex": 16,
     "finalLevelIndex": 8,
     "multipolarity": {
      "stringRepresentation": "[E1]",
      "spins": [
       {
        "spin": 1,
        "evaluatorInferred": true
       }
      ],
      "parity": "-"
     },
     "theoreticalInternalConversionCoefficients": {
      "totalValue": {
       "value": 0.0507,
       "uncertainty": {
        "type": "unreported"
       }
      },
      "shellValues": [
       {
        "includesOuterShells": false,
        "shell": "K",
        "value": 0.0424,
        "uncertainty": {
         "type": "symmetric",
         "value": 0.0006
        }
       },
       {
        "includesOuterShells": false,
        "shell": "L",
        "value": 0.00648,
        "uncertainty": {
         "type": "symmetric",
         "value": 0.00009
        }
       },
       {
        "includesOuterShells": false,
        "shell": "M",
        "value": 0.001453,
        "uncertainty": {
         "type": "symmetric",
         "value": 0.000021
        }
       },
       {
        "includesOuterShells": false,
        "shell": "N",
        "value": 0.000339,
        "uncertainty": {
         "type": "symmetric",
         "value": 0.000005
        }
       },
       {
        "includesOuterShells": false,
        "shell": "O",
        "value": 0.0000481,
        "uncertainty": {
         "type": "symmetric",
         "value": 7e-7
        }
       },
       {
        "includesOuterShells": false,
        "shell": "P",
        "value": 0.00000252,
        "uncertainty": {
         "type": "symmetric",
         "value": 4e-8
        }
       }
      ]
     },
     "reducedTransitionProbabilities": [
      {
       "multipolarity": "E1",
       "unit": "W.u.",
       "value": 4.9e-8,
       "uncertainty": {
        "type": "symmetric",
        "value": 7e-9
       }
      }
     ]
    },
    {
     "energy": {
      "unit": "keV",
      "value": 303.75,
      "uncertainty": {
       "type": "symmetric",
       "value": 0.05
      }
     },
     "gammaIntensity": {
      "value": 0.54,
      "uncertainty": {
       "type": "symmetric",
       "value": 0.15
      }
     },
     "initialLevelIndex": 16,
     "finalLevelIndex": 7,
     "multipolarity": {
      "stringRepresentation": "[E1]",
      "spins": [
       {
        "spin": 1,
        "evaluatorInferred": true
       }
      ],
      "parity": "-"
     },
     "theoreticalInternalConversionCoefficients": {
      "totalValue": {
       "value": 0.02,
       "uncertainty": {
        "type": "unreported"
       }
      },
      "shellValues": [
       {
        "includesOuterShells": false,
        "shell": "K",
        "value": 0.01681,
        "uncertainty": {
         "type": "symmetric",
         "value": 0.00024
        }
       },
       {
        "includesOuterShells": false,
        "shell": "L",
        "value": 0.0025,
        "uncertainty": {
         "type": "symmetric",
         "value": 0.00004
        }
       },
       {
        "includesOuterShells": false,
        "shell": "M",
        "value": 0.000559,
        "uncertainty": {
         "type": "symmetric",
         "value": 0.000008
        }
       },
       {
        "includesOuterShells": false,
        "shell": "N",
        "value": 0.000131,
        "uncertainty": {
         "type": "symmetric",
         "value": 0.0000019
        }
       },
       {
        "includesOuterShells": false,
        "shell": "O",
        "value": 0.0000188,
        "uncertainty": {
         "type": "symmetric",
         "value": 3e-7
        }
       },
       {
        "includesOuterShells": false,
        "shell": "P",
        "value": 0.000001041,
        "uncertainty": {
         "type": "symmetric",
         "value": 1.5e-8
        }
       }
      ]
     },
     "reducedTransitionProbabilities": [
      {
       "multipolarity": "E1",
       "unit": "W.u.",
       "value": 9e-10,
       "uncertainty": {
        "type": "symmetric",
        "value": 3e-10
       }
      }
     ]
    },
    {
     "energy": {
      "unit": "keV",
      "value": 761.708,
      "uncertainty": {
       "type": "symmetric",
       "value": 0.005
      }
     },
     "gammaIntensity": {
      "value": 100,
      "uncertainty": {
       "type": "symmetric",
       "value": 11
      }
     },
     "initialLevelIndex": 16,
     "finalLevelIndex": 0,
     "multipolarity": {
      "stringRepresentation": "E1",
      "spins": [
       {
        "spin": 1
       }
      ],
      "parity": "-"
     },
     "theoreticalInternalConversionCoefficients": {
      "totalValue": {
       "value": 0.00263,
       "uncertainty": {
        "type": "unreported"
       }
      },
      "shellValues": [
       {
        "includesOuterShells": false,
        "shell": "K",
        "value": 0.00223,
        "uncertainty": {
         "type": "symmetric",
         "value": 0.00004
        }
       },
       {
        "includesOuterShells": false,
        "shell": "L",
        "value": 0.000313,
        "uncertainty": {
         "type": "symmetric",
         "value": 0.000005
        }
       },
       {
        "includesOuterShells": false,
        "shell": "M",
        "value": 0.0000695,
        "uncertainty": {
         "type": "symmetric",
         "value": 0.000001
        }
       },
       {
        "includesOuterShells": false,
        "shell": "N",
        "value": 0.00001635,
        "uncertainty": {
         "type": "symmetric",
         "value": 2.3e-7
        }
       },
       {
        "includesOuterShells": false,
        "shell": "O",
        "value": 0.00000241,
        "uncertainty": {
         "type": "symmetric",
         "value": 4e-8
        }
       },
       {
        "includesOuterShells": false,
        "shell": "P",
        "value": 1.459e-7,
        "uncertainty": {
         "type": "symmetric",
         "value": 2.1e-9
        }
       }
      ]
     },
     "reducedTransitionProbabilities": [
      {
       "multipolarity": "E1",
       "unit": "W.u.",
       "value": 1.04e-8,
       "uncertainty": {
        "type": "symmetric",
        "value": 8e-10
       }
      }
     ],
     "comments": [
      {
       "type": "comment",
       "head": [
        {
         "name": "M"
        }
       ],
       "body": "\\ensuremath{\\alpha}(K)exp=0.0027 \\textit{9} (1996Pe05)"
      }
     ]
    }
   ],
   "band": 4,
   "comments": [
    {
     "type": "comment",
     "head": [
      {
       "name": "J"
      }
     ],
     "body": "L=3 in \\ensuremath{^{\\textnormal{176}}}Yb(\\ensuremath{^{\\textnormal{3}}}He,d),(\\ensuremath{\\alpha},t); 188.086\\ensuremath{\\gamma} E1 to 3/2\\ensuremath{^{+}}; 761.708\\ensuremath{\\gamma} E1 to 7/2\\ensuremath{^{+}}"
    },
    {
     "type": "comment",
     "head": [
      {
       "name": "T"
      }
     ],
     "body": "Unweighted average of 35.0 ns \\textit{9} (2016De30), 29 ns \\textit{4} (2002McZY) and 35 ns \\textit{3} (1972Ma54)."
    },
    {
     "type": "comment",
     "head": [
      {
       "name": "CONF"
      }
     ],
     "body": "\\ensuremath{\\pi}1/2[541] (h\\ensuremath{_{\\textnormal{9/2}}}) Nilsson configuration. Based on the observed in-band properties, such as large alignment and large signature splitting, and systematics of structures in neighboring nuclei."
    }
   ]
  },
  {
   "energy": {
    "unit": "keV",
    "value": 761.863,
    "uncertainty": {
     "type": "symmetric",
     "value": 0.018
    }
   },
   "spinParity": {
    "values": [
     {
      "twoTimesSpin": 3,
      "isTentativeSpin": true,
      "parity": "+",
      "isTentativeParity": true
     }
    ]
   },
   "isStable": false,
   "flags": [
    "t"
   ],
   "crossReferences": [
    {
     "dataset": "176LU(N,G) E=THERMAL"
    }
   ],
   "gammas": [
    {
     "energy": {
      "unit": "keV",
      "value": 761.5,
      "uncertainty": {
       "type": "symmetric",
       "value": 0.5
      }
     },
     "gammaIntensity": {
      "value": 100,
      "uncertainty": {
       "type": "unreported"
      }
     },
     "initialLevelIndex": 17,
     "finalLevelIndex": 0,
     "multipolarity": {
      "stringRepresentation": "E2",
      "spins": [
       {
        "spin": 2
       }
      ],
      "parity": "+"
     },
     "theoreticalInternalConversionCoefficients": {
      "totalValue": {
       "value": 0.00691,
       "uncertainty": {
        "type": "unreported"
       }
      },
      "shellValues": [
       {
        "includesOuterShells": false,
        "shell": "K",
        "value": 0.00564,
        "uncertainty": {
         "type": "symmetric",
         "value": 0.00008
        }
       },
       {
        "includesOuterShells": false,
        "shell": "L",
        "value": 0.000987,
        "uncertainty": {
         "type": "symmetric",
         "value": 0.000014
        }
       },
       {
        "includesOuterShells": false,
        "shell": "M",
        "value": 0.000225,
        "uncertainty": {
         "type": "symmetric",
         "value": 0.000004
        }
       },
       {
        "includesOuterShells": false,
        "shell": "N",
        "value": 0.0000529,
        "uncertainty": {
         "type": "symmetric",
         "value": 8e-7
        }
       },
       {
        "includesOuterShells": false,
        "shell": "O",
        "value": 0.00000755,
        "uncertainty": {
         "type": "symmetric",
         "value": 1.1e-7
        }
       },
       {
        "includesOuterShells": false,
        "shell": "P",
        "value": 3.88e-7,
        "uncertainty": {
         "type": "symmetric",
         "value": 6e-9
        }
       }
      ]
     },
     "comments": [
      {
       "type": "comment",
       "head": [
        {
         "name": "M"
        }
       ],
       "body": "\\ensuremath{\\alpha}(K)exp=0.0041 (1971Ma45)."
      }
     ]
    }
   ],
   "band": 21,
   "comments": [
    {
     "type": "comment",
     "head": [
      {
       "name": "J"
      }
     ],
     "body": "761.52\\ensuremath{\\gamma} E2 to 7/2\\ensuremath{^{+}}; band assignment."
    },
    {
     "type": "comment",
     "head": [
      {
       "name": "CONF"
      }
     ],
     "body": "\\ensuremath{K^{\\pi}}=3/2\\ensuremath{^{+}}: \\ensuremath{\\pi}7/2[404] {\\textminus} K=2 gamma vibration phonon. The assignment is tentative."
    }
   ]
  },
  {
   "energy": {
    "unit": "keV",
    "value": 795.218,
    "uncertainty": {
     "type": "symmetric",
     "value": 0.004
    }
   },
   "spinParity": {
    "values": [
     {
      "twoTimesSpin": 1,
      "isTentativeSpin": true,
      "parity": "-",
      "isTentativeParity": true
     }
    ]
   },
   "isStable": false,
   "flags": [
    "E"
   ],
   "crossReferences": [
    {
     "dataset": "176LU(N,G) E=THERMAL"
    },
    {
     "dataset": "(HI,XNG)"
    },
    {
     "dataset": "176YB(3HE,D),(A,T)",
     "level": 798
    }
   ],
   "gammas": [
    {
     "energy": {
      "unit": "keV",
      "value": 221.6,
      "uncertainty": {
       "type": "symmetric",
       "value": 0.003
      }
     },
     "gammaIntensity": {
      "value": 100,
      "uncertainty": {
       "type": "symmetric",
       "value": 24
      }
     },
     "initialLevelIndex": 18,
     "finalLevelIndex": 10
    },
    {
     "energy": {
      "unit": "keV",
      "value": 225.53,
      "uncertainty": {
       "type": "symmetric",
       "value": 0.04
      }
     },
     "gammaIntensity": {
      "value": 35,
      "uncertainty": {
       "type": "symmetric",
       "value": 12
      }
     },
     "initialLevelIndex": 18,
     "finalLevelIndex": 9
    }
   ],
   "band": 4,
   "comments": [
    {
     "type": "comment",
     "head": [
      {
       "name": "J"
      }
     ],
     "body": "221.600\\ensuremath{\\gamma} to 1/2\\ensuremath{^{+}} and 225.53\\ensuremath{\\gamma} to 3/2\\ensuremath{^{+}}; band assignment"
    }
   ]
  },
  {
   "energy": {
    "unit": "keV",
    "value": 811.4396,
    "uncertainty": {
     "type": "symmetric",
     "value": 0.0022
    }
   },
   "spinParity": {
    "values": [
     {
      "twoTimesSpin": 9,
      "isTentativeSpin": false,
      "parity": "-",
      "isTentativeParity": false
     }
    ]
   },
   "isStable": false,
   "halfLife": {
    "unit": "ns",
    "value": 1,
    "uncertainty": {
     "type": "symmetric",
     "value": 0.1
    }
   },
   "flags": [
    "E"
   ],
   "crossReferences": [
    {
     "dataset": "176LU(N,G) E=THERMAL"
    },
    {
     "dataset": "176YB(3HE,D),(A,T)",
     "level": 814
    },
    {
     "dataset": "178HF(T,A)",
     "level": 812
    },
    {
     "dataset": "(HI,XNG)"
    }
   ],
   "gammas": [
    {
     "energy": {
      "unit": "keV",
      "value": 49.74,
      "uncertainty": {
       "type": "symmetric",
       "value": 0.004
      }
     },
     "gammaIntensity": {
      "value": 8.5,
      "uncertainty": {
       "type": "symmetric",
       "value": 2.9
      }
     },
     "initialLevelIndex": 19,
     "finalLevelIndex": 16,
     "multipolarity": {
      "stringRepresentation": "E2",
      "spins": [
       {
        "spin": 2
       }
      ],
      "parity": "+"
     },
     "theoreticalInternalConversionCoefficients": {
      "totalValue": {
       "value": 66.7,
       "uncertainty": {
        "type": "unreported"
       }
      },
      "shellValues": [
       {
        "includesOuterShells": false,
        "shell": "L",
        "value": 50.8,
        "uncertainty": {
         "type": "symmetric",
         "value": 0.8
        }
       },
       {
        "includesOuterShells": false,
        "shell": "M",
        "value": 12.6,
        "uncertainty": {
         "type": "symmetric",
         "value": 0.18
        }
       },
       {
        "includesOuterShells": false,
        "shell": "N",
        "value": 2.89,
        "uncertainty": {
         "type": "symmetric",
         "value": 0.04
        }
       },
       {
        "includesOuterShells": false,
        "shell": "O",
        "value": 0.343,
        "uncertainty": {
         "type": "symmetric",
         "value": 0.005
        }
       },
       {
        "includesOuterShells": false,
        "shell": "P",
        "value": 0.000263,
        "uncertainty": {
         "type": "symmetric",
         "value": 0.000004
        }
       }
      ]
     },
     "reducedTransitionProbabilities": [
      {
       "multipolarity": "E2",
       "unit": "W.u.",
       "value": 360,
       "uncertainty": {
        "type": "symmetric",
        "value": 50
       }
      }
     ],
     "comments": [
      {
       "type": "comment",
       "head": [
        {
         "name": "M"
        }
       ],
       "body": "\\ensuremath{\\alpha}(L2)exp=35 \\textit{8} and \\ensuremath{\\alpha}(L3)exp=38 \\textit{8} (1996Pe05); \\ensuremath{\\alpha}(L2)exp=35.12, \\ensuremath{\\alpha}(L3)exp=39.05, \\ensuremath{\\alpha}(M)exp=32.14 and \\ensuremath{\\alpha}(N)exp=16.7 (1971Ma45)."
      }
     ]
    },
    {
     "energy": {
      "unit": "keV",
      "value": 90.647,
      "uncertainty": {
       "type": "symmetric",
       "value": 0.006
      }
     },
     "gammaIntensity": {
      "value": 1,
      "uncertainty": {
       "type": "symmetric",
       "value": 0.5
      }
     },
     "initialLevelIndex": 19,
     "finalLevelIndex": 15,
     "multipolarity": {
      "stringRepresentation": "[E1]",
      "spins": [
       {
        "spin": 1,
        "evaluatorInferred": true
       }
      ],
      "parity": "-"
     },
     "theoreticalInternalConversionCoefficients": {
      "totalValue": {
       "value": 0.452,
       "uncertainty": {
        "type": "unreported"
       }
      },
      "shellValues": [
       {
        "includesOuterShells": false,
        "shell": "K",
        "value": 0.371,
        "uncertainty": {
         "type": "symmetric",
         "value": 0.006
        }
       },
       {
        "includesOuterShells": false,
        "shell": "L",
        "value": 0.0632,
        "uncertainty": {
         "type": "symmetric",
         "value": 0.0009
        }
       },
       {
        "includesOuterShells": false,
        "shell": "M",
        "value": 0.01423,
        "uncertainty": {
         "type": "symmetric",
         "value": 0.0002
        }
       },
       {
        "includesOuterShells": false,
        "shell": "N",
        "value": 0.00329,
        "uncertainty": {
         "type": "symmetric",
         "value": 0.00005
        }
       },
       {
        "includesOuterShells": false,
        "shell": "O",
        "value": 0.000447,
        "uncertainty": {
         "type": "symmetric",
         "value": 0.000007
        }
       },
       {
        "includesOuterShells": false,
        "shell": "P",
        "value": 0.0000197,
        "uncertainty": {
         "type": "symmetric",
         "value": 3e-7
        }
       }
      ]
     },
     "reducedTransitionProbabilities": [
      {
       "multipolarity": "E1",
       "unit": "W.u.",
       "value": 3.9e-7,
       "uncertainty": {
        "type": "symmetric",
        "value": 2.3e-7
       }
      }
     ]
    },
    {
     "energy": {
      "unit": "keV",
      "value": 542.652,
      "uncertainty": {
       "type": "symmetric",
       "value": 0.005
      }
     },
     "gammaIntensity": {
      "value": 33,
      "uncertainty": {
       "type": "symmetric",
       "value": 3
      }
     },
     "initialLevelIndex": 19,
     "finalLevelIndex": 3,
     "multipolarity": {
      "stringRepresentation": "[E1]",
      "spins": [
       {
        "spin": 1,
        "evaluatorInferred": true
       }
      ],
      "parity": "-"
     },
     "theoreticalInternalConversionCoefficients": {
      "totalValue": {
       "value": 0.00528,
       "uncertainty": {
        "type": "unreported"
       }
      },
      "shellValues": [
       {
        "includesOuterShells": false,
        "shell": "K",
        "value": 0.00446,
        "uncertainty": {
         "type": "symmetric",
         "value": 0.00007
        }
       },
       {
        "includesOuterShells": false,
        "shell": "L",
        "value": 0.000639,
        "uncertainty": {
         "type": "symmetric",
         "value": 0.000009
        }
       },
       {
        "includesOuterShells": false,
        "shell": "M",
        "value": 0.0001424,
        "uncertainty": {
         "type": "symmetric",
         "value": 0.000002
        }
       },
       {
        "includesOuterShells": false,
        "shell": "N",
        "value": 0.0000334,
        "uncertainty": {
         "type": "symmetric",
         "value": 5e-7
        }
       },
       {
        "includesOuterShells": false,
        "shell": "O",
        "value": 0.00000489,
        "uncertainty": {
         "type": "symmetric",
         "value": 7e-8
        }
       },
       {
        "includesOuterShells": false,
        "shell": "P",
        "value": 2.88e-7,
        "uncertainty": {
         "type": "symmetric",
         "value": 4e-9
        }
       }
      ]
     },
     "reducedTransitionProbabilities": [
      {
       "multipolarity": "E1",
       "unit": "W.u.",
       "value": 6e-8,
       "uncertainty": {
        "type": "symmetric",
        "value": 1.8e-8
       }
      }
     ]
    },
    {
     "energy": {
      "unit": "keV",
      "value": 689.824,
      "uncertainty": {
       "type": "symmetric",
       "value": 0.005
      }
     },
     "gammaIntensity": {
      "value": 100,
      "uncertainty": {
       "type": "symmetric",
       "value": 10
      }
     },
     "initialLevelIndex": 19,
     "finalLevelIndex": 1,
     "multipolarity": {
      "stringRepresentation": "E1",
      "spins": [
       {
        "spin": 1
       }
      ],
      "parity": "-"
     },
     "theoreticalInternalConversionCoefficients": {
      "totalValue": {
       "value": 0.00321,
       "uncertainty": {
        "type": "unreported"
       }
      },
      "shellValues": [
       {
        "includesOuterShells": false,
        "shell": "K",
        "value": 0.00272,
        "uncertainty": {
         "type": "symmetric",
         "value": 0.00004
        }
       },
       {
        "includesOuterShells": false,
        "shell": "L",
        "value": 0.000383,
        "uncertainty": {
         "type": "symmetric",
         "value": 0.000006
        }
       },
       {
        "includesOuterShells": false,
        "shell": "M",
        "value": 0.0000852,
        "uncertainty": {
         "type": "symmetric",
         "value": 0.0000012
        }
       },
       {
        "includesOuterShells": false,
        "shell": "N",
        "value": 0.00002,
        "uncertainty": {
         "type": "symmetric",
         "value": 3e-7
        }
       },
       {
        "includesOuterShells": false,
        "shell": "O",
        "value": 0.00000294,
        "uncertainty": {
         "type": "symmetric",
         "value": 5e-8
        }
       },
       {
        "includesOuterShells": false,
        "shell": "P",
        "value": 1.77e-7,
        "uncertainty": {
         "type": "symmetric",
         "value": 2.5e-9
        }
       }
      ]
     },
     "reducedTransitionProbabilities": [
      {
       "multipolarity": "E1",
       "unit": "W.u.",
       "value": 9e-8,
       "uncertainty": {
        "type": "symmetric",
        "value": 3e-8
       }
      }
     ],
     "comments": [
      {
       "type": "comment",
       "head": [
        {
         "name": "M"
        }
       ],
       "body": "\\ensuremath{\\alpha}(K)exp=0.0040 \\textit{15} (1996Pe05); \\ensuremath{\\alpha}(K)exp=0.0031 \\textit{1} (1971Ma45)."
      }
     ]
    },
    {
     "energy": {
      "unit": "keV",
      "value": 811.483,
      "uncertainty": {
       "type": "symmetric",
       "value": 0.014
      }
     },
     "gammaIntensity": {
      "value": 29,
      "uncertainty": {
       "type": "symmetric",
       "value": 7
      }
     },
     "initialLevelIndex": 19,
     "finalLevelIndex": 0,
     "multipolarity": {
      "stringRepresentation": "[E1]",
      "spins": [
       {
        "spin": 1,
        "evaluatorInferred": true
       }
      ],
      "parity": "-"
     },
     "theoreticalInternalConversionCoefficients": {
      "totalValue": {
       "value": 0.00233,
       "uncertainty": {
        "type": "unreported"
       }
      },
      "shellValues": [
       {
        "includesOuterShells": false,
        "shell": "K",
        "value": 0.00197,
        "uncertainty": {
         "type": "symmetric",
         "value": 0.00003
        }
       },
       {
        "includesOuterShells": false,
        "shell": "L",
        "value": 0.000276,
        "uncertainty": {
         "type": "symmetric",
         "value": 0.000004
        }
       },
       {
        "includesOuterShells": false,
        "shell": "M",
        "value": 0.0000612,
        "uncertainty": {
         "type": "symmetric",
         "value": 9e-7
        }
       },
       {
        "includesOuterShells": false,
        "shell": "N",
        "value": 0.0000144,
        "uncertainty": {
         "type": "symmetric",
         "value": 2.1e-7
        }
       },
       {
        "includesOuterShells": false,
        "shell": "O",
        "value": 0.00000212,
        "uncertainty": {
         "type": "symmetric",
         "value": 3e-8
        }
       },
       {
        "includesOuterShells": false,
        "shell": "P",
        "value": 1.292e-7,
        "uncertainty": {
         "type": "symmetric",
         "value": 1.8e-9
        }
       }
      ]
     },
     "reducedTransitionProbabilities": [
      {
       "multipolarity": "E1",
       "unit": "W.u.",
       "value": 1.6e-8,
       "uncertainty": {
        "type": "symmetric",
        "value": 6e-9
       }
      }
     ]
    }
   ],
   "band": 4,
   "comments": [
    {
     "type": "comment",
     "head": [
      {
       "name": "J"
      }
     ],
     "body": "L=5 in \\ensuremath{^{176}}Yb(\\ensuremath{^{3}}He,d),(\\ensuremath{\\alpha},t); 49.740\\ensuremath{\\gamma} E2 to 5/2\\ensuremath{^{-}}; 689.824\\ensuremath{\\gamma} E1 to 9/2\\ensuremath{^{+}}; band assignment."
    },
    {
     "type": "comment",
     "head": [
      {
       "name": "T"
      }
     ],
     "body": "From 1996Pe05."
    }
   ]
  },
  {
   "energy": {
    "unit": "keV",
    "value": 816.6951,
    "uncertainty": {
     "type": "symmetric",
     "value": 0.0014
    }
   },
   "spinParity": {
    "values": [
     {
      "twoTimesSpin": 11,
      "isTentativeSpin": false,
      "parity": "+",
      "isTentativeParity": false
     }
    ]
   },
   "isStable": false,
   "flags": [
    "C"
   ],
   "crossReferences": [
    {
     "dataset": "176LU(N,G) E=THERMAL"
    },
    {
     "dataset": "(HI,XNG)"
    }
   ],
   "gammas": [
    {
     "energy": {
      "unit": "keV",
      "value": 144.755,
      "uncertainty": {
       "type": "symmetric",
       "value": 0.001
      }
     },
     "gammaIntensity": {
      "value": 100,
      "uncertainty": {
       "type": "symmetric",
       "value": 11
      }
     },
     "initialLevelIndex": 20,
     "finalLevelIndex": 13,
     "multipolarity": {
      "stringRepresentation": "M1(+E2)",
      "isMixedTransition": true,
      "spins": [
       {
        "spin": 1
       },
       {
        "spin": 2
       }
      ],
      "parity": "+"
     },
     "theoreticalInternalConversionCoefficients": {
      "totalValue": {
       "value": 1.281,
       "uncertainty": {
        "type": "unreported"
       }
      },
      "shellValues": [
       {
        "includesOuterShells": false,
        "shell": "K",
        "value": 1.07,
        "uncertainty": {
         "type": "symmetric",
         "value": 0.015
        }
       },
       {
        "includesOuterShells": false,
        "shell": "L",
        "value": 0.1645,
        "uncertainty": {
         "type": "symmetric",
         "value": 0.0023
        }
       },
       {
        "includesOuterShells": false,
        "shell": "M",
        "value": 0.037,
        "uncertainty": {
         "type": "symmetric",
         "value": 0.0006
        }
       },
       {
        "includesOuterShells": false,
        "shell": "N",
        "value": 0.00874,
        "uncertainty": {
         "type": "symmetric",
         "value": 0.00013
        }
       },
       {
        "includesOuterShells": false,
        "shell": "O",
        "value": 0.001295,
        "uncertainty": {
         "type": "symmetric",
         "value": 0.000019
        }
       },
       {
        "includesOuterShells": false,
        "shell": "P",
        "value": 0.00008,
        "uncertainty": {
         "type": "symmetric",
         "value": 0.0000012
        }
       }
      ]
     },
     "comments": [
      {
       "type": "comment",
       "head": [
        {
         "name": "M"
        }
       ],
       "body": "\\ensuremath{\\alpha}(K)exp=1.3 \\textit{3}, \\ensuremath{\\alpha}(L1)exp=0.15 \\textit{4}, \\ensuremath{\\alpha}(L2)exp=0.018 \\textit{6}, and \\ensuremath{\\alpha}(M1)exp=0.0038 \\textit{9} (1996Pe05); \\ensuremath{\\alpha}(K)exp=0.95, \\ensuremath{\\alpha}(L1)exp+\\ensuremath{\\alpha}(L2)exp=0.26, \\ensuremath{\\alpha}(L3)exp=0.03, \\ensuremath{\\alpha}(M)exp=0.07 (1971Ma45)."
      }
     ]
    },
    {
     "energy": {
      "unit": "keV",
      "value": 264.6,
      "uncertainty": {
       "type": "symmetric",
       "value": 0.002
      }
     },
     "gammaIntensity": {
      "value": 29,
      "uncertainty": {
       "type": "symmetric",
       "value": 3
      }
     },
     "initialLevelIndex": 20,
     "finalLevelIndex": 8,
     "multipolarity": {
      "stringRepresentation": "E2",
      "spins": [
       {
        "spin": 2
       }
      ],
      "parity": "+"
     },
     "theoreticalInternalConversionCoefficients": {
      "totalValue": {
       "value": 0.1124,
       "uncertainty": {
        "type": "unreported"
       }
      },
      "shellValues": [
       {
        "includesOuterShells": false,
        "shell": "K",
        "value": 0.076,
        "uncertainty": {
         "type": "symmetric",
         "value": 0.0011
        }
       },
       {
        "includesOuterShells": false,
        "shell": "L",
        "value": 0.0279,
        "uncertainty": {
         "type": "symmetric",
         "value": 0.0004
        }
       },
       {
        "includesOuterShells": false,
        "shell": "M",
        "value": 0.00672,
        "uncertainty": {
         "type": "symmetric",
         "value": 0.0001
        }
       },
       {
        "includesOuterShells": false,
        "shell": "N",
        "value": 0.001559,
        "uncertainty": {
         "type": "symmetric",
         "value": 0.000022
        }
       },
       {
        "includesOuterShells": false,
        "shell": "O",
        "value": 0.000202,
        "uncertainty": {
         "type": "symmetric",
         "value": 0.000003
        }
       },
       {
        "includesOuterShells": false,
        "shell": "P",
        "value": 0.00000465,
        "uncertainty": {
         "type": "symmetric",
         "value": 7e-8
        }
       }
      ]
     },
     "comments": [
      {
       "type": "comment",
       "head": [
        {
         "name": "M"
        }
       ],
       "body": "\\ensuremath{\\alpha}(L2)exp=0.018 \\textit{7} and \\ensuremath{\\alpha}(L3)exp=0.008 \\textit{3} (1996Pe05); \\ensuremath{\\alpha}(K)exp=0.076 and \\ensuremath{\\alpha}(M)exp=0.0031 (1971Ma45)."
      }
     ]
    },
    {
     "energy": {
      "unit": "keV",
      "value": 527.665,
      "uncertainty": {
       "type": "symmetric",
       "value": 0.02
      }
     },
     "gammaIntensity": {
      "value": 2.4,
      "uncertainty": {
       "type": "symmetric",
       "value": 0.4
      }
     },
     "initialLevelIndex": 20,
     "finalLevelIndex": 4
    },
    {
     "energy": {
      "unit": "keV",
      "value": 547.902,
      "uncertainty": {
       "type": "symmetric",
       "value": 0.007
      }
     },
     "gammaIntensity": {
      "value": 32,
      "uncertainty": {
       "type": "symmetric",
       "value": 3
      }
     },
     "initialLevelIndex": 20,
     "finalLevelIndex": 3,
     "multipolarity": {
      "stringRepresentation": "M1(+E2)",
      "isMixedTransition": true,
      "spins": [
       {
        "spin": 1
       },
       {
        "spin": 2
       }
      ],
      "parity": "+"
     },
     "theoreticalInternalConversionCoefficients": {
      "totalValue": {
       "value": 0.0351,
       "uncertainty": {
        "type": "unreported"
       }
      },
      "shellValues": [
       {
        "includesOuterShells": false,
        "shell": "K",
        "value": 0.0294,
        "uncertainty": {
         "type": "symmetric",
         "value": 0.0005
        }
       },
       {
        "includesOuterShells": false,
        "shell": "L",
        "value": 0.00437,
        "uncertainty": {
         "type": "symmetric",
         "value": 0.00007
        }
       },
       {
        "includesOuterShells": false,
        "shell": "M",
        "value": 0.00098,
        "uncertainty": {
         "type": "symmetric",
         "value": 0.000014
        }
       },
       {
        "includesOuterShells": false,
        "shell": "N",
        "value": 0.000231,
        "uncertainty": {
         "type": "symmetric",
         "value": 0.000004
        }
       },
       {
        "includesOuterShells": false,
        "shell": "O",
        "value": 0.0000344,
        "uncertainty": {
         "type": "symmetric",
         "value": 5e-7
        }
       },
       {
        "includesOuterShells": false,
        "shell": "P",
        "value": 0.00000216,
        "uncertainty": {
         "type": "symmetric",
         "value": 3e-8
        }
       }
      ]
     },
     "comments": [
      {
       "type": "comment",
       "head": [
        {
         "name": "M"
        }
       ],
       "body": "\\ensuremath{\\alpha}(K)exp=0.015 \\textit{4} and \\ensuremath{\\alpha}(L1)exp=0.0041 \\textit{18} (1996Pe05); \\ensuremath{\\alpha}(K)exp=0.029 (1971Ma45)."
      }
     ]
    },
    {
     "energy": {
      "unit": "keV",
      "value": 695.069,
      "uncertainty": {
       "type": "symmetric",
       "value": 0.007
      }
     },
     "gammaIntensity": {
      "value": 19,
      "uncertainty": {
       "type": "symmetric",
       "value": 3
      }
     },
     "initialLevelIndex": 20,
     "finalLevelIndex": 1,
     "multipolarity": {
      "stringRepresentation": "M1(+E2)",
      "isMixedTransition": true,
      "spins": [
       {
        "spin": 1
       },
       {
        "spin": 2
       }
      ],
      "parity": "+"
     },
     "theoreticalInternalConversionCoefficients": {
      "totalValue": {
       "value": 0.0191,
       "uncertainty": {
        "type": "unreported"
       }
      },
      "shellValues": [
       {
        "includesOuterShells": false,
        "shell": "K",
        "value": 0.01608,
        "uncertainty": {
         "type": "symmetric",
         "value": 0.00023
        }
       },
       {
        "includesOuterShells": false,
        "shell": "L",
        "value": 0.00237,
        "uncertainty": {
         "type": "symmetric",
         "value": 0.00004
        }
       },
       {
        "includesOuterShells": false,
        "shell": "M",
        "value": 0.00053,
        "uncertainty": {
         "type": "symmetric",
         "value": 0.000008
        }
       },
       {
        "includesOuterShells": false,
        "shell": "N",
        "value": 0.0001253,
        "uncertainty": {
         "type": "symmetric",
         "value": 0.0000018
        }
       },
       {
        "includesOuterShells": false,
        "shell": "O",
        "value": 0.0000186,
        "uncertainty": {
         "type": "symmetric",
         "value": 3e-7
        }
       },
       {
        "includesOuterShells": false,
        "shell": "P",
        "value": 0.000001173,
        "uncertainty": {
         "type": "symmetric",
         "value": 1.7e-8
        }
       }
      ]
     },
     "comments": [
      {
       "type": "comment",
       "head": [
        {
         "name": "M"
        }
       ],
       "body": "\\ensuremath{\\alpha}(K)exp=0.0044 \\textit{18} and \\ensuremath{\\alpha}(L1)exp=0.0020 \\textit{11} (1996Pe05), \\ensuremath{\\alpha}(K)exp=0.016 (1971Ma45)."
      }
     ]
    }
   ],
   "band": 2,
   "comments": [
    {
     "type": "comment",
     "head": [
      {
       "name": "J"
      }
     ],
     "body": "144.755\\ensuremath{\\gamma} M1(+E2) to 9/2\\ensuremath{^{+}}, 264.600\\ensuremath{\\gamma} E2 to 7/2\\ensuremath{^{+}}; band assignment."
    }
   ]
  },
  {
   "energy": {
    "unit": "keV",
    "value": 823.046,
    "uncertainty": {
     "type": "symmetric",
     "value": 0.011
    }
   },
   "spinParity": {
    "values": [
     {
      "twoTimesSpin": 5,
      "isTentativeSpin": true,
      "parity": "+",
      "isTentativeParity": true
     }
    ]
   },
   "isStable": false,
   "flags": [
    "t"
   ],
   "crossReferences": [
    {
     "dataset": "176LU(N,G) E=THERMAL"
    }
   ],
   "gammas": [
    {
     "energy": {
      "unit": "keV",
      "value": 823.045,
      "uncertainty": {
       "type": "symmetric",
       "value": 0.011
      }
     },
     "gammaIntensity": {
      "value": 100,
      "uncertainty": {
       "type": "unreported"
      }
     },
     "initialLevelIndex": 21,
     "finalLevelIndex": 0,
     "multipolarity": {
      "stringRepresentation": "M1(+E2)",
      "isMixedTransition": true,
      "spins": [
       {
        "spin": 1
       },
       {
        "spin": 2
       }
      ],
      "parity": "+"
     },
     "theoreticalInternalConversionCoefficients": {
      "totalValue": {
       "value": 0.01251,
       "uncertainty": {
        "type": "unreported"
       }
      },
      "shellValues": [
       {
        "includesOuterShells": false,
        "shell": "K",
        "value": 0.01053,
        "uncertainty": {
         "type": "symmetric",
         "value": 0.00015
        }
       },
       {
        "includesOuterShells": false,
        "shell": "L",
        "value": 0.001543,
        "uncertainty": {
         "type": "symmetric",
         "value": 0.000022
        }
       },
       {
        "includesOuterShells": false,
        "shell": "M",
        "value": 0.000345,
        "uncertainty": {
         "type": "symmetric",
         "value": 0.000005
        }
       },
       {
        "includesOuterShells": false,
        "shell": "N",
        "value": 0.0000815,
        "uncertainty": {
         "type": "symmetric",
         "value": 0.0000012
        }
       },
       {
        "includesOuterShells": false,
        "shell": "O",
        "value": 0.00001214,
        "uncertainty": {
         "type": "symmetric",
         "value": 1.7e-7
        }
       },
       {
        "includesOuterShells": false,
        "shell": "P",
        "value": 7.66e-7,
        "uncertainty": {
         "type": "symmetric",
         "value": 1.1e-8
        }
       }
      ]
     },
     "comments": [
      {
       "type": "comment",
       "head": [
        {
         "name": "M"
        }
       ],
       "body": "\\ensuremath{\\alpha}(K)exp=0.010 (1971Ma45)."
      }
     ]
    }
   ],
   "band": 21,
   "comments": [
    {
     "type": "comment",
     "head": [
      {
       "name": "J"
      }
     ],
     "body": "822.5\\ensuremath{\\gamma} M1(+E2) to 7/2\\ensuremath{^{+}} level; band assignment."
    }
   ]
  },
  {
   "energy": {
    "unit": "keV",
    "value": 832,
    "uncertainty": {
     "type": "unreported"
    }
   },
   "isStable": false,
   "flags": [
    "R"
   ],
   "crossReferences": [
    {
     "dataset": "176YB(3HE,D),(A,T)"
    }
   ]
  },
  {
   "energy": {
    "unit": "keV",
    "value": 844.9109,
    "uncertainty": {
     "type": "symmetric",
     "value": 0.0017
    }
   },
   "spinParity": {
    "values": [
     {
      "twoTimesSpin": 17,
      "isTentativeSpin": false,
      "parity": "-",
      "isTentativeParity": false
     }
    ]
   },
   "isStable": false,
   "flags": [
    "B"
   ],
   "crossReferences": [
    {
     "dataset": "176LU(N,G) E=THERMAL"
    },
    {
     "dataset": "177LU IT DECAY (160.4 D)"
    },
    {
     "dataset": "(HI,XNG)"
    }
   ],
   "gammas": [
    {
     "energy": {
      "unit": "keV",
      "value": 207.799,
      "uncertainty": {
       "type": "symmetric",
       "value": 0.001
      }
     },
     "gammaIntensity": {
      "value": 100,
      "uncertainty": {
       "type": "symmetric",
       "value": 4
      }
     },
     "initialLevelIndex": 23,
     "finalLevelIndex": 12,
     "multipolarity": {
      "stringRepresentation": "M1(+E2)",
      "isMixedTransition": true,
      "spins": [
       {
        "spin": 1
       },
       {
        "spin": 2
       }
      ],
      "parity": "+"
     },
     "theoreticalInternalConversionCoefficients": {
      "totalValue": {
       "value": 0.466,
       "uncertainty": {
        "type": "unreported"
       }
      },
      "shellValues": [
       {
        "includesOuterShells": false,
        "shell": "K",
        "value": 0.389,
        "uncertainty": {
         "type": "symmetric",
         "value": 0.006
        }
       },
       {
        "includesOuterShells": false,
        "shell": "L",
        "value": 0.0595,
        "uncertainty": {
         "type": "symmetric",
         "value": 0.0009
        }
       },
       {
        "includesOuterShells": false,
        "shell": "M",
        "value": 0.01337,
        "uncertainty": {
         "type": "symmetric",
         "value": 0.00019
        }
       },
       {
        "includesOuterShells": false,
        "shell": "N",
        "value": 0.00316,
        "uncertainty": {
         "type": "symmetric",
         "value": 0.00005
        }
       },
       {
        "includesOuterShells": false,
        "shell": "O",
        "value": 0.000469,
        "uncertainty": {
         "type": "symmetric",
         "value": 0.000007
        }
       },
       {
        "includesOuterShells": false,
        "shell": "P",
        "value": 0.000029,
        "uncertainty": {
         "type": "symmetric",
         "value": 4e-7
        }
       }
      ]
     },
     "comments": [
      {
       "type": "comment",
       "head": [
        {
         "name": "RI"
        }
       ],
       "body": "From (HI,xn\\ensuremath{\\gamma})"
      },
      {
       "type": "comment",
       "head": [
        {
         "name": "M"
        }
       ],
       "body": "\\ensuremath{\\alpha}(K)exp=0.29 \\textit{6}, \\ensuremath{\\alpha}(L1)exp=0.031 \\textit{7}, and \\ensuremath{\\alpha}(L2)exp=0.0067 \\textit{19} (1996Pe05); \\ensuremath{\\alpha}(K)exp=0.46 and \\ensuremath{\\alpha}(L1)exp+\\ensuremath{\\alpha}(L2)exp=0.07 (1971Ma45)."
      }
     ]
    },
    {
     "energy": {
      "unit": "keV",
      "value": 393.395,
      "uncertainty": {
       "type": "symmetric",
       "value": 0.002
      }
     },
     "gammaIntensity": {
      "value": 44,
      "uncertainty": {
       "type": "symmetric",
       "value": 6
      }
     },
     "initialLevelIndex": 23,
     "finalLevelIndex": 6,
     "multipolarity": {
      "stringRepresentation": "E2",
      "spins": [
       {
        "spin": 2
       }
      ],
      "parity": "+"
     },
     "theoreticalInternalConversionCoefficients": {
      "totalValue": {
       "value": 0.035,
       "uncertainty": {
        "type": "unreported"
       }
      },
      "shellValues": [
       {
        "includesOuterShells": false,
        "shell": "K",
        "value": 0.0263,
        "uncertainty": {
         "type": "symmetric",
         "value": 0.0004
        }
       },
       {
        "includesOuterShells": false,
        "shell": "L",
        "value": 0.00672,
        "uncertainty": {
         "type": "symmetric",
         "value": 0.0001
        }
       },
       {
        "includesOuterShells": false,
        "shell": "M",
        "value": 0.001585,
        "uncertainty": {
         "type": "symmetric",
         "value": 0.000023
        }
       },
       {
        "includesOuterShells": false,
        "shell": "N",
        "value": 0.000369,
        "uncertainty": {
         "type": "symmetric",
         "value": 0.000006
        }
       },
       {
        "includesOuterShells": false,
        "shell": "O",
        "value": 0.0000497,
        "uncertainty": {
         "type": "symmetric",
         "value": 7e-7
        }
       },
       {
        "includesOuterShells": false,
        "shell": "P",
        "value": 0.000001725,
        "uncertainty": {
         "type": "symmetric",
         "value": 2.5e-8
        }
       }
      ]
     },
     "comments": [
      {
       "type": "comment",
       "head": [
        {
         "name": "RI"
        }
       ],
       "body": "From (HI,xn\\ensuremath{\\gamma})"
      },
      {
       "type": "comment",
       "head": [
        {
         "name": "M"
        }
       ],
       "body": "\\ensuremath{\\alpha}(K)exp=0.0391 \\textit{17} (1996Pe05); \\ensuremath{\\alpha}(K)exp=0.022 and \\ensuremath{\\alpha}(L1)exp+\\ensuremath{\\alpha}(L2)exp=0.006 (1971Ma45)."
      }
     ]
    }
   ],
   "band": 1,
   "comments": [
    {
     "type": "comment",
     "head": [
      {
       "name": "J"
      }
     ],
     "body": "207.799\\ensuremath{\\gamma} M1(+E2) to 15/2\\ensuremath{^{-}}, 393.395\\ensuremath{\\gamma} E2 to 13/2\\ensuremath{^{-}}; band assignment"
    }
   ]
  },
  {
   "energy": {
    "unit": "keV",
    "value": 854.3074,
    "uncertainty": {
     "type": "symmetric",
     "value": 0.0007
    }
   },
   "spinParity": {
    "values": [
     {
      "twoTimesSpin": 17,
      "isTentativeSpin": false,
      "parity": "+",
      "isTentativeParity": false
     }
    ]
   },
   "isStable": false,
   "flags": [
    "A"
   ],
   "crossReferences": [
    {
     "dataset": "176LU(N,G) E=THERMAL"
    },
    {
     "dataset": "177LU IT DECAY (160.4 D)"
    },
    {
     "dataset": "(HI,XNG)"
    }
   ],
   "gammas": [
    {
     "energy": {
      "unit": "keV",
      "value": 218.1038,
      "uncertainty": {
       "type": "symmetric",
       "value": 0.0006
      }
     },
     "gammaIntensity": {
      "value": 19.14,
      "uncertainty": {
       "type": "symmetric",
       "value": 0.22
      }
     },
     "initialLevelIndex": 24,
     "finalLevelIndex": 11,
     "multipolarity": {
      "stringRepresentation": "M1+E2",
      "isMixedTransition": true,
      "spins": [
       {
        "spin": 1
       },
       {
        "spin": 2
       }
      ],
      "parity": "+",
      "mixingRatio": {
       "isAbsoluteValue": true,
       "value": 0.52,
       "uncertainty": {
        "type": "symmetric",
        "value": 0.05
       }
      }
     },
     "theoreticalInternalConversionCoefficients": {
      "totalValue": {
       "value": 0.365,
       "uncertainty": {
        "type": "symmetric",
        "value": 0.009
       }
      },
      "shellValues": [
       {
        "includesOuterShells": false,
        "shell": "K",
        "value": 0.296,
        "uncertainty": {
         "type": "symmetric",
         "value": 0.008
        }
       },
       {
        "includesOuterShells": false,
        "shell": "L",
        "value": 0.0537,
        "uncertainty": {
         "type": "symmetric",
         "value": 0.0008
        }
       },
       {
        "includesOuterShells": false,
        "shell": "M",
        "value": 0.0123,
        "uncertainty": {
         "type": "symmetric",
         "value": 0.0002
        }
       },
       {
        "includesOuterShells": false,
        "shell": "N",
        "value": 0.00289,
        "uncertainty": {
         "type": "symmetric",
         "value": 0.00005
        }
       },
       {
        "includesOuterShells": false,
        "shell": "O",
        "value": 0.000413,
        "uncertainty": {
         "type": "symmetric",
         "value": 0.000006
        }
       },
       {
        "includesOuterShells": false,
        "shell": "P",
        "value": 0.0000216,
        "uncertainty": {
         "type": "symmetric",
         "value": 7e-7
        }
       }
      ]
     },
     "flags": [
      "P"
     ],
     "comments": [
      {
       "type": "comment",
       "head": [
        {
         "name": "M"
        }
       ],
       "body": "\\ensuremath{\\gamma}\\ensuremath{\\gamma}(\\ensuremath{\\theta}) in 1974Kr12; \\ensuremath{\\alpha}(K)exp=0.30 \\textit{2} (2012De24); \\ensuremath{\\alpha}(L1)exp=0.078 \\textit{23} and \\ensuremath{\\alpha}(M1)exp=0.023 \\textit{7} (1996Pe05). Other: \\ensuremath{\\alpha}(K)exp=0.56 and \\ensuremath{\\alpha}(L1)exp+\\ensuremath{\\alpha}(L2)exp=0.048 (1971Ma45)."
      },
      {
       "type": "comment",
       "head": [
        {
         "name": "MR"
        }
       ],
       "body": "Using the briccmixing program and the following experimental data: \\ensuremath{\\delta}(\\ensuremath{\\gamma}\\ensuremath{\\gamma}(\\ensuremath{\\theta}))=+0.52 \\textit{5} (1974Kr12) and \\ensuremath{\\alpha}(K)exp=0.30 \\textit{2} (2012De24). The sign is from 1974Kr12. Others (not used in the analysis): \\ensuremath{\\alpha}(L1)exp=0.078 \\textit{24} and \\ensuremath{\\alpha}(M1)exp=0.023 \\textit{7} (1996Pe05)"
      }
     ]
    },
    {
     "energy": {
      "unit": "keV",
      "value": 413.6637,
      "uncertainty": {
       "type": "symmetric",
       "value": 0.0006
      }
     },
     "gammaIntensity": {
      "value": 100,
      "uncertainty": {
       "type": "symmetric",
       "value": 0.9
      }
     },
     "initialLevelIndex": 24,
     "finalLevelIndex": 5,
     "multipolarity": {
      "stringRepresentation": "E2",
      "spins": [
       {
        "spin": 2
       }
      ],
      "parity": "+"
     },
     "theoreticalInternalConversionCoefficients": {
      "totalValue": {
       "value": 0.0305,
       "uncertainty": {
        "type": "unreported"
       }
      },
      "shellValues": [
       {
        "includesOuterShells": false,
        "shell": "K",
        "value": 0.0231,
        "uncertainty": {
         "type": "symmetric",
         "value": 0.0004
        }
       },
       {
        "includesOuterShells": false,
        "shell": "L",
        "value": 0.00569,
        "uncertainty": {
         "type": "symmetric",
         "value": 0.00008
        }
       },
       {
        "includesOuterShells": false,
        "shell": "M",
        "value": 0.001339,
        "uncertainty": {
         "type": "symmetric",
         "value": 0.000019
        }
       },
       {
        "includesOuterShells": false,
        "shell": "N",
        "value": 0.000312,
        "uncertainty": {
         "type": "symmetric",
         "value": 0.000005
        }
       },
       {
        "includesOuterShells": false,
        "shell": "O",
        "value": 0.0000422,
        "uncertainty": {
         "type": "symmetric",
         "value": 6e-7
        }
       },
       {
        "includesOuterShells": false,
        "shell": "P",
        "value": 0.000001528,
        "uncertainty": {
         "type": "symmetric",
         "value": 2.2e-8
        }
       }
      ]
     },
     "flags": [
      "P"
     ],
     "comments": [
      {
       "type": "comment",
       "head": [
        {
         "name": "M"
        }
       ],
       "body": "\\ensuremath{\\alpha}(K)exp=0.026 \\textit{2} and \\ensuremath{\\alpha}(L)exp=0.0063 \\textit{6} (2012De24); \\ensuremath{\\alpha}(K)exp=0.028 \\textit{8} (1996Pe05); \\ensuremath{\\alpha}(K)exp=0.025, \\ensuremath{\\alpha}(L1)exp+\\ensuremath{\\alpha}(L2)exp=0.006, and \\ensuremath{\\alpha}(M)exp=0.0015 (1971Ma45)."
      }
     ]
    }
   ],
   "band": 0,
   "comments": [
    {
     "type": "comment",
     "head": [
      {
       "name": "J"
      }
     ],
     "body": "218.1038\\ensuremath{\\gamma} M1+E2 to 15/2\\ensuremath{^{+}}, 413.6637\\ensuremath{\\gamma} E2 to 13/2\\ensuremath{^{+}}; band assignment."
    }
   ]
  },
  {
   "energy": {
    "unit": "keV",
    "value": 907.737,
    "uncertainty": {
     "type": "symmetric",
     "value": 0.018
    }
   },
   "spinParity": {
    "values": [
     {
      "twoTimesSpin": 7,
      "isTentativeSpin": true,
      "parity": "+",
      "isTentativeParity": true
     }
    ]
   },
   "isStable": false,
   "flags": [
    "t"
   ],
   "crossReferences": [
    {
     "dataset": "176LU(N,G) E=THERMAL"
    }
   ],
   "gammas": [
    {
     "energy": {
      "unit": "keV",
      "value": 84.702,
      "uncertainty": {
       "type": "symmetric",
       "value": 0.015
      }
     },
     "gammaIntensity": {
      "value": 0.07,
      "uncertainty": {
       "type": "unreported"
      }
     },
     "initialLevelIndex": 25,
     "finalLevelIndex": 21
    },
    {
     "energy": {
      "unit": "keV",
      "value": 145.874,
      "uncertainty": {
       "type": "symmetric",
       "value": 0.001
      }
     },
     "gammaIntensity": {
      "value": 100,
      "uncertainty": {
       "type": "symmetric",
       "value": 11
      }
     },
     "initialLevelIndex": 25,
     "finalLevelIndex": 17,
     "multipolarity": {
      "stringRepresentation": "E2",
      "spins": [
       {
        "spin": 2
       }
      ],
      "parity": "+"
     },
     "theoreticalInternalConversionCoefficients": {
      "totalValue": {
       "value": 0.826,
       "uncertainty": {
        "type": "unreported"
       }
      },
      "shellValues": [
       {
        "includesOuterShells": false,
        "shell": "K",
        "value": 0.396,
        "uncertainty": {
         "type": "symmetric",
         "value": 0.006
        }
       },
       {
        "includesOuterShells": false,
        "shell": "L",
        "value": 0.328,
        "uncertainty": {
         "type": "symmetric",
         "value": 0.005
        }
       },
       {
        "includesOuterShells": false,
        "shell": "M",
        "value": 0.0808,
        "uncertainty": {
         "type": "symmetric",
         "value": 0.0012
        }
       },
       {
        "includesOuterShells": false,
        "shell": "N",
        "value": 0.0186,
        "uncertainty": {
         "type": "symmetric",
         "value": 0.0003
        }
       },
       {
        "includesOuterShells": false,
        "shell": "O",
        "value": 0.00229,
        "uncertainty": {
         "type": "symmetric",
         "value": 0.00004
        }
       },
       {
        "includesOuterShells": false,
        "shell": "P",
        "value": 0.0000213,
        "uncertainty": {
         "type": "symmetric",
         "value": 3e-7
        }
       }
      ]
     },
     "comments": [
      {
       "type": "comment",
       "head": [
        {
         "name": "M"
        }
       ],
       "body": "\\ensuremath{\\alpha}(K)exp=0.84 \\textit{21}, \\ensuremath{\\alpha}(L1)exp=0.051 \\textit{14}, \\ensuremath{\\alpha}(L2)exp=0.23 \\textit{6}, \\ensuremath{\\alpha}(M2)exp=0.050 \\textit{13}, and \\ensuremath{\\alpha}(M3)exp=0.036 \\textit{9} (1996Pe05); \\ensuremath{\\alpha}(K)exp=0.75, \\ensuremath{\\alpha}(L1)exp=0.06, \\ensuremath{\\alpha}(L2)exp=0.11, \\ensuremath{\\alpha}(L3)exp=0.021, and \\ensuremath{\\alpha}(M)exp=0.09 (1971Ma45)."
      }
     ]
    },
    {
     "energy": {
      "unit": "keV",
      "value": 787,
      "uncertainty": {
       "type": "symmetric",
       "value": 0.6
      }
     },
     "gammaIntensity": {
      "value": 2.2,
      "uncertainty": {
       "type": "symmetric",
       "value": 0.9
      }
     },
     "initialLevelIndex": 25,
     "finalLevelIndex": 1
    },
    {
     "energy": {
      "unit": "keV",
      "value": 907.5,
      "uncertainty": {
       "type": "symmetric",
       "value": 0.6
      }
     },
     "gammaIntensity": {
      "value": 11,
      "uncertainty": {
       "type": "symmetric",
       "value": 0.9
      }
     },
     "initialLevelIndex": 25,
     "finalLevelIndex": 0
    }
   ],
   "band": 21,
   "comments": [
    {
     "type": "comment",
     "head": [
      {
       "name": "J"
      }
     ],
     "body": "145.874\\ensuremath{\\gamma} E2 to 3/2\\ensuremath{^{+}}; band assignment."
    }
   ]
  },
  {
   "energy": {
    "unit": "keV",
    "value": 956.411,
    "uncertainty": {
     "type": "symmetric",
     "value": 0.017
    }
   },
   "spinParity": {
    "values": [
     {
      "twoTimesSpin": 3,
      "isTentativeSpin": true,
      "parity": "-",
      "isTentativeParity": false
     }
    ]
   },
   "isStable": false,
   "flags": [
    "E"
   ],
   "crossReferences": [
    {
     "dataset": "176LU(N,G) E=THERMAL"
    },
    {
     "assignment": "ambiguous",
     "dataset": "176YB(3HE,D),(A,T)",
     "level": 959
    },
    {
     "assignment": "ambiguous",
     "dataset": "178HF(T,A)",
     "level": 959
    },
    {
     "dataset": "(HI,XNG)",
     "level": 953
    }
   ],
   "gammas": [
    {
     "energy": {
      "unit": "keV",
      "value": 161.4,
      "uncertainty": {
       "type": "symmetric",
       "value": 0.03
      }
     },
     "gammaIntensity": {
      "value": 69,
      "uncertainty": {
       "type": "symmetric",
       "value": 27
      }
     },
     "initialLevelIndex": 26,
     "finalLevelIndex": 18
    },
    {
     "energy": {
      "unit": "keV",
      "value": 194.612,
      "uncertainty": {
       "type": "symmetric",
       "value": 0.02
      }
     },
     "gammaIntensity": {
      "value": 100,
      "uncertainty": {
       "type": "symmetric",
       "value": 25
      }
     },
     "initialLevelIndex": 26,
     "finalLevelIndex": 16
    }
   ],
   "band": 4,
   "comments": [
    {
     "type": "comment",
     "head": [
      {
       "name": "J"
      }
     ],
     "body": "L=1 in \\ensuremath{^{\\textnormal{176}}}Yb(\\ensuremath{^{\\textnormal{3}}}He,d),(\\ensuremath{\\alpha},t); 161.40\\ensuremath{\\gamma} to (1/2\\ensuremath{^{-}}), 194.612\\ensuremath{\\gamma} to 3/2\\ensuremath{^{-}}; band assignment."
    }
   ]
  },
  {
   "energy": {
    "unit": "keV",
    "value": 956.6663,
    "uncertainty": {
     "type": "symmetric",
     "value": 0.0018
    }
   },
   "spinParity": {
    "values": [
     {
      "twoTimesSpin": 9,
      "isTentativeSpin": false,
      "parity": "+",
      "isTentativeParity": false
     }
    ]
   },
   "isStable": false,
   "flags": [
    "D"
   ],
   "crossReferences": [
    {
     "dataset": "176LU(N,G) E=THERMAL"
    },
    {
     "assignment": "ambiguous",
     "dataset": "178HF(T,A)",
     "level": 959
    },
    {
     "dataset": "(HI,XNG)"
    }
   ],
   "gammas": [
    {
     "energy": {
      "unit": "keV",
      "value": 235.869,
      "uncertainty": {
       "type": "symmetric",
       "value": 0.001
      }
     },
     "gammaIntensity": {
      "value": 100,
      "uncertainty": {
       "type": "symmetric",
       "value": 10
      }
     },
     "initialLevelIndex": 27,
     "finalLevelIndex": 15,
     "multipolarity": {
      "stringRepresentation": "M1(+E2)",
      "isMixedTransition": true,
      "spins": [
       {
        "spin": 1
       },
       {
        "spin": 2
       }
      ],
      "parity": "+"
     },
     "theoreticalInternalConversionCoefficients": {
      "totalValue": {
       "value": 0.329,
       "uncertainty": {
        "type": "unreported"
       }
      },
      "shellValues": [
       {
        "includesOuterShells": false,
        "shell": "K",
        "value": 0.275,
        "uncertainty": {
         "type": "symmetric",
         "value": 0.004
        }
       },
       {
        "includesOuterShells": false,
        "shell": "L",
        "value": 0.0419,
        "uncertainty": {
         "type": "symmetric",
         "value": 0.0006
        }
       },
       {
        "includesOuterShells": false,
        "shell": "M",
        "value": 0.00941,
        "uncertainty": {
         "type": "symmetric",
         "value": 0.00014
        }
       },
       {
        "includesOuterShells": false,
        "shell": "N",
        "value": 0.00222,
        "uncertainty": {
         "type": "symmetric",
         "value": 0.00004
        }
       },
       {
        "includesOuterShells": false,
        "shell": "O",
        "value": 0.00033,
        "uncertainty": {
         "type": "symmetric",
         "value": 0.000005
        }
       },
       {
        "includesOuterShells": false,
        "shell": "P",
        "value": 0.0000205,
        "uncertainty": {
         "type": "symmetric",
         "value": 3e-7
        }
       }
      ]
     },
     "comments": [
      {
       "type": "comment",
       "head": [
        {
         "name": "M"
        }
       ],
       "body": "\\ensuremath{\\alpha}(K)exp=0.18 \\textit{3}, \\ensuremath{\\alpha}(L1)exp=0.059 \\textit{13}, and \\ensuremath{\\alpha}(L2)exp=0.042 \\textit{7} (1996Pe05)."
      }
     ]
    },
    {
     "energy": {
      "unit": "keV",
      "value": 247.262,
      "uncertainty": {
       "type": "symmetric",
       "value": 0.002
      }
     },
     "gammaIntensity": {
      "value": 48,
      "uncertainty": {
       "type": "symmetric",
       "value": 5
      }
     },
     "initialLevelIndex": 27,
     "finalLevelIndex": 14,
     "multipolarity": {
      "stringRepresentation": "E2",
      "spins": [
       {
        "spin": 2
       }
      ],
      "parity": "+"
     },
     "theoreticalInternalConversionCoefficients": {
      "totalValue": {
       "value": 0.1391,
       "uncertainty": {
        "type": "unreported"
       }
      },
      "shellValues": [
       {
        "includesOuterShells": false,
        "shell": "K",
        "value": 0.0917,
        "uncertainty": {
         "type": "symmetric",
         "value": 0.0013
        }
       },
       {
        "includesOuterShells": false,
        "shell": "L",
        "value": 0.0363,
        "uncertainty": {
         "type": "symmetric",
         "value": 0.0005
        }
       },
       {
        "includesOuterShells": false,
        "shell": "M",
        "value": 0.00877,
        "uncertainty": {
         "type": "symmetric",
         "value": 0.00013
        }
       },
       {
        "includesOuterShells": false,
        "shell": "N",
        "value": 0.00203,
        "uncertainty": {
         "type": "symmetric",
         "value": 0.00003
        }
       },
       {
        "includesOuterShells": false,
        "shell": "O",
        "value": 0.000261,
        "uncertainty": {
         "type": "symmetric",
         "value": 0.000004
        }
       },
       {
        "includesOuterShells": false,
        "shell": "P",
        "value": 0.00000554,
        "uncertainty": {
         "type": "symmetric",
         "value": 8e-8
        }
       }
      ]
     },
     "comments": [
      {
       "type": "comment",
       "head": [
        {
         "name": "M"
        }
       ],
       "body": "\\ensuremath{\\alpha}(K)exp=0.045 \\textit{11}, \\ensuremath{\\alpha}(L1)exp=0.014 \\textit{5}, and \\ensuremath{\\alpha}(L2)exp=0.020 \\textit{6} (1996Pe05)."
      }
     ]
    }
   ],
   "band": 3,
   "comments": [
    {
     "type": "comment",
     "head": [
      {
       "name": "J"
      }
     ],
     "body": "235.869\\ensuremath{\\gamma} M1(+E2) to 7/2\\ensuremath{^{+}}, 247.262\\ensuremath{\\gamma} E2 to 5/2\\ensuremath{^{+}}; band assignment."
    }
   ]
  },
  {
   "energy": {
    "unit": "keV",
    "value": 957.3128,
    "uncertainty": {
     "type": "symmetric",
     "value": 0.0024
    }
   },
   "spinParity": {
    "values": [
     {
      "twoTimesSpin": 13,
      "isTentativeSpin": false,
      "parity": "-",
      "isTentativeParity": false
     }
    ]
   },
   "isStable": false,
   "flags": [
    "E"
   ],
   "crossReferences": [
    {
     "dataset": "176LU(N,G) E=THERMAL"
    },
    {
     "dataset": "(HI,XNG)"
    }
   ],
   "gammas": [
    {
     "energy": {
      "unit": "keV",
      "value": 145.874,
      "uncertainty": {
       "type": "symmetric",
       "value": 0.001
      }
     },
     "gammaIntensity": {
      "value": 100,
      "uncertainty": {
       "type": "symmetric",
       "value": 10
      }
     },
     "initialLevelIndex": 28,
     "finalLevelIndex": 19,
     "multipolarity": {
      "stringRepresentation": "E2",
      "spins": [
       {
        "spin": 2
       }
      ],
      "parity": "+"
     },
     "theoreticalInternalConversionCoefficients": {
      "totalValue": {
       "value": 0.826,
       "uncertainty": {
        "type": "unreported"
       }
      },
      "shellValues": [
       {
        "includesOuterShells": false,
        "shell": "K",
        "value": 0.396,
        "uncertainty": {
         "type": "symmetric",
         "value": 0.006
        }
       },
       {
        "includesOuterShells": false,
        "shell": "L",
        "value": 0.328,
        "uncertainty": {
         "type": "symmetric",
         "value": 0.005
        }
       },
       {
        "includesOuterShells": false,
        "shell": "M",
        "value": 0.0808,
        "uncertainty": {
         "type": "symmetric",
         "value": 0.0012
        }
       },
       {
        "includesOuterShells": false,
        "shell": "N",
        "value": 0.0186,
        "uncertainty": {
         "type": "symmetric",
         "value": 0.0003
        }
       },
       {
        "includesOuterShells": false,
        "shell": "O",
        "value": 0.00229,
        "uncertainty": {
         "type": "symmetric",
         "value": 0.00004
        }
       },
       {
        "includesOuterShells": false,
        "shell": "P",
        "value": 0.0000213,
        "uncertainty": {
         "type": "symmetric",
         "value": 3e-7
        }
       }
      ]
     },
     "comments": [
      {
       "type": "comment",
       "head": [
        {
         "name": "M"
        }
       ],
       "body": "\\ensuremath{\\alpha}(K)exp=0.84 \\textit{21}, \\ensuremath{\\alpha}(L1)exp=0.051 \\textit{14}, \\ensuremath{\\alpha}(L2)exp=0.23 \\textit{6}, \\ensuremath{\\alpha}(M2)exp=0.050 \\textit{13}, and \\ensuremath{\\alpha}(M3)exp=0.036 \\textit{9} (1996Pe05); \\ensuremath{\\alpha}(K)exp=0.75, \\ensuremath{\\alpha}(L1)exp=0.06, \\ensuremath{\\alpha}(L2)exp=0.11, \\ensuremath{\\alpha}(L3)exp=0.021, and \\ensuremath{\\alpha}(M)exp=0.09 (1971Ma45)."
      }
     ]
    },
    {
     "energy": {
      "unit": "keV",
      "value": 321.077,
      "uncertainty": {
       "type": "symmetric",
       "value": 0.006
      }
     },
     "gammaIntensity": {
      "value": 1.6,
      "uncertainty": {
       "type": "symmetric",
       "value": 0.2
      }
     },
     "initialLevelIndex": 28,
     "finalLevelIndex": 11
    },
    {
     "energy": {
      "unit": "keV",
      "value": 516.665,
      "uncertainty": {
       "type": "symmetric",
       "value": 0.014
      }
     },
     "gammaIntensity": {
      "value": 6.4,
      "uncertainty": {
       "type": "symmetric",
       "value": 0.8
      }
     },
     "initialLevelIndex": 28,
     "finalLevelIndex": 5
    },
    {
     "energy": {
      "unit": "keV",
      "value": 688.532,
      "uncertainty": {
       "type": "symmetric",
       "value": 0.018
      }
     },
     "gammaIntensity": {
      "value": 3.7,
      "uncertainty": {
       "type": "symmetric",
       "value": 0.6
      }
     },
     "initialLevelIndex": 28,
     "finalLevelIndex": 3
    }
   ],
   "band": 4,
   "comments": [
    {
     "type": "comment",
     "head": [
      {
       "name": "J"
      }
     ],
     "body": "145.874\\ensuremath{\\gamma} E2 to 9/2\\ensuremath{^{-}}, 321.077\\ensuremath{\\gamma} to 15/2\\ensuremath{^{+}}; band assignment."
    }
   ]
  },
  {
   "energy": {
    "unit": "keV",
    "value": 970.1757,
    "uncertainty": {
     "type": "symmetric",
     "value": 0.0024
    }
   },
   "spinParity": {
    "values": [
     {
      "twoTimesSpin": 23,
      "isTentativeSpin": false,
      "parity": "-",
      "isTentativeParity": false
     }
    ]
   },
   "isStable": false,
   "halfLife": {
    "unit": "d",
    "value": 160.4,
    "uncertainty": {
     "type": "symmetric",
     "value": 0.3
    }
   },
   "decayBranchingRatios": {
    "observed": [
     {
      "decayString": "B-",
      "decayMode": [
       {
        "radiation": "betaMinus",
        "multiplicity": 1
       }
      ],
      "value": 77.3,
      "uncertainty": {
       "type": "symmetric",
       "value": 0.08
      }
     },
     {
      "decayString": "IT",
      "decayMode": [
       {
        "radiation": "internalTransition",
        "multiplicity": 1
       }
      ],
      "value": 22.7,
      "uncertainty": {
       "type": "symmetric",
       "value": 0.08
      }
     }
    ]
   },
   "multipoleMoments": [
    {
     "type": "M1",
     "isAbsoluteValue": true,
     "value": 2.32,
     "uncertainty": {
      "type": "symmetric",
      "value": 0.014
     }
    },
    {
     "type": "E2",
     "isAbsoluteValue": true,
     "value": 5.71,
     "uncertainty": {
      "type": "symmetric",
      "value": 0.05
     }
    }
   ],
   "flags": [
    "F"
   ],
   "crossReferences": [
    {
     "dataset": "177LU IT DECAY (160.4 D)"
    },
    {
     "dataset": "176LU(D,P)",
     "level": 972
    },
    {
     "dataset": "(HI,XNG)"
    }
   ],
   "gammas": [
    {
     "energy": {
      "unit": "keV",
      "value": 115.8682,
      "uncertainty": {
       "type": "symmetric",
       "value": 0.0023
      }
     },
     "gammaIntensity": {
      "value": 100,
      "uncertainty": {
       "type": "symmetric",
       "value": 2
      }
     },
     "initialLevelIndex": 29,
     "finalLevelIndex": 24,
     "multipolarity": {
      "stringRepresentation": "E3",
      "spins": [
       {
        "spin": 3
       }
      ],
      "parity": "-"
     },
     "theoreticalInternalConversionCoefficients": {
      "totalValue": {
       "value": 30.7,
       "uncertainty": {
        "type": "unreported"
       }
      },
      "shellValues": [
       {
        "includesOuterShells": false,
        "shell": "K",
        "value": 2.09,
        "uncertainty": {
         "type": "symmetric",
         "value": 0.03
        }
       },
       {
        "includesOuterShells": false,
        "shell": "L",
        "value": 21.5,
        "uncertainty": {
         "type": "symmetric",
         "value": 0.3
        }
       },
       {
        "includesOuterShells": false,
        "shell": "M",
        "value": 5.64,
        "uncertainty": {
         "type": "symmetric",
         "value": 0.08
        }
       },
       {
        "includesOuterShells": false,
        "shell": "N",
        "value": 1.307,
        "uncertainty": {
         "type": "symmetric",
         "value": 0.019
        }
       },
       {
        "includesOuterShells": false,
        "shell": "O",
        "value": 0.1558,
        "uncertainty": {
         "type": "symmetric",
         "value": 0.0022
        }
       },
       {
        "includesOuterShells": false,
        "shell": "P",
        "value": 0.000273,
        "uncertainty": {
         "type": "symmetric",
         "value": 0.000004
        }
       }
      ]
     },
     "reducedTransitionProbabilities": [
      {
       "multipolarity": "E3",
       "unit": "W.u.",
       "value": 1.201e-9,
       "uncertainty": {
        "type": "symmetric",
        "value": 1.7e-11
       }
      }
     ],
     "flags": [
      "P"
     ],
     "comments": [
      {
       "type": "comment",
       "head": [
        {
         "name": "M"
        }
       ],
       "body": "from \\ensuremath{\\alpha}(exp)=32.9 \\textit{20} from \\ensuremath{\\gamma}-ray transition intensity balance (1981Hn03); \\ensuremath{\\alpha}(L2)exp=11.2 \\textit{3} and ce(L2)/ce(L3)exp=1.24 \\textit{3} (1990Bu31); ce(K)/ce(L)/ce(M)exp=31.6 \\textit{16}/323 \\textit{11}/91 \\textit{7} (2012De24)."
      }
     ]
    },
    {
     "energy": {
      "unit": "keV",
      "value": 125.3,
      "uncertainty": {
       "type": "symmetric",
       "value": 0.2
      }
     },
     "gammaIntensity": {
      "value": 0.032,
      "uncertainty": {
       "type": "symmetric",
       "value": 0.008
      }
     },
     "initialLevelIndex": 29,
     "finalLevelIndex": 23,
     "multipolarity": {
      "stringRepresentation": "[M3]",
      "spins": [
       {
        "spin": 3,
        "evaluatorInferred": true
       }
      ],
      "parity": "+"
     },
     "theoreticalInternalConversionCoefficients": {
      "totalValue": {
       "value": 94.3,
       "uncertainty": {
        "type": "symmetric",
        "value": 1.5
       }
      },
      "shellValues": [
       {
        "includesOuterShells": false,
        "shell": "K",
        "value": 45.8,
        "uncertainty": {
         "type": "symmetric",
         "value": 0.7
        }
       },
       {
        "includesOuterShells": false,
        "shell": "L",
        "value": 36.2,
        "uncertainty": {
         "type": "symmetric",
         "value": 0.6
        }
       },
       {
        "includesOuterShells": false,
        "shell": "M",
        "value": 9.59,
        "uncertainty": {
         "type": "symmetric",
         "value": 0.16
        }
       },
       {
        "includesOuterShells": false,
        "shell": "N",
        "value": 2.29,
        "uncertainty": {
         "type": "symmetric",
         "value": 0.04
        }
       },
       {
        "includesOuterShells": false,
        "shell": "O",
        "value": 0.305,
        "uncertainty": {
         "type": "symmetric",
         "value": 0.005
        }
       },
       {
        "includesOuterShells": false,
        "shell": "P",
        "value": 0.01123,
        "uncertainty": {
         "type": "symmetric",
         "value": 0.00018
        }
       }
      ]
     },
     "reducedTransitionProbabilities": [
      {
       "multipolarity": "M3",
       "unit": "W.u.",
       "value": 2.3e-11,
       "uncertainty": {
        "type": "symmetric",
        "value": 6e-12
       }
      }
     ],
     "flags": [
      "P"
     ]
    },
    {
     "energy": {
      "unit": "keV",
      "value": 333.1,
      "uncertainty": {
       "type": "symmetric",
       "value": 0.2
      }
     },
     "gammaIntensity": {
      "value": 0.26,
      "uncertainty": {
       "type": "symmetric",
       "value": 0.06
      }
     },
     "initialLevelIndex": 29,
     "finalLevelIndex": 12,
     "multipolarity": {
      "stringRepresentation": "[E4]",
      "spins": [
       {
        "spin": 4,
        "evaluatorInferred": true
       }
      ],
      "parity": "+"
     },
     "theoreticalInternalConversionCoefficients": {
      "totalValue": {
       "value": 1.007,
       "uncertainty": {
        "type": "unreported"
       }
      },
      "shellValues": [
       {
        "includesOuterShells": false,
        "shell": "K",
        "value": 0.324,
        "uncertainty": {
         "type": "symmetric",
         "value": 0.005
        }
       },
       {
        "includesOuterShells": false,
        "shell": "L",
        "value": 0.514,
        "uncertainty": {
         "type": "symmetric",
         "value": 0.008
        }
       },
       {
        "includesOuterShells": false,
        "shell": "M",
        "value": 0.133,
        "uncertainty": {
         "type": "symmetric",
         "value": 0.002
        }
       },
       {
        "includesOuterShells": false,
        "shell": "N",
        "value": 0.031,
        "uncertainty": {
         "type": "symmetric",
         "value": 0.0005
        }
       },
       {
        "includesOuterShells": false,
        "shell": "O",
        "value": 0.00383,
        "uncertainty": {
         "type": "symmetric",
         "value": 0.00006
        }
       },
       {
        "includesOuterShells": false,
        "shell": "P",
        "value": 0.0000361,
        "uncertainty": {
         "type": "symmetric",
         "value": 6e-7
        }
       }
      ]
     },
     "reducedTransitionProbabilities": [
      {
       "multipolarity": "E4",
       "unit": "W.u.",
       "value": 1.7e-9,
       "uncertainty": {
        "type": "symmetric",
        "value": 4e-10
       }
      }
     ],
     "flags": [
      "P"
     ]
    },
    {
     "energy": {
      "unit": "keV",
      "value": 334,
      "uncertainty": {
       "type": "unreported"
      }
     },
     "gammaIntensity": {
      "value": 0.28,
      "uncertainty": {
       "type": "limit",
       "limitType": "upper",
       "isInclusive": true
      }
     },
     "initialLevelIndex": 29,
     "finalLevelIndex": 11,
     "multipolarity": {
      "stringRepresentation": "[M4]",
      "spins": [
       {
        "spin": 4,
        "evaluatorInferred": true
       }
      ],
      "parity": "-"
     },
     "theoreticalInternalConversionCoefficients": {
      "totalValue": {
       "value": 5.58,
       "uncertainty": {
        "type": "unreported"
       }
      },
      "shellValues": [
       {
        "includesOuterShells": false,
        "shell": "K",
        "value": 3.52,
        "uncertainty": {
         "type": "symmetric",
         "value": 0.05
        }
       },
       {
        "includesOuterShells": false,
        "shell": "L",
        "value": 1.556,
        "uncertainty": {
         "type": "symmetric",
         "value": 0.022
        }
       },
       {
        "includesOuterShells": false,
        "shell": "M",
        "value": 0.398,
        "uncertainty": {
         "type": "symmetric",
         "value": 0.006
        }
       },
       {
        "includesOuterShells": false,
        "shell": "N",
        "value": 0.0946,
        "uncertainty": {
         "type": "symmetric",
         "value": 0.0014
        }
       },
       {
        "includesOuterShells": false,
        "shell": "O",
        "value": 0.01287,
        "uncertainty": {
         "type": "symmetric",
         "value": 0.00018
        }
       },
       {
        "includesOuterShells": false,
        "shell": "P",
        "value": 0.000527,
        "uncertainty": {
         "type": "symmetric",
         "value": 0.000008
        }
       }
      ]
     },
     "flags": [
      "P"
     ]
    }
   ],
   "band": 8,
   "comments": [
    {
     "type": "comment",
     "head": [
      {
       "name": "J"
      }
     ],
     "body": "115.8682\\ensuremath{\\gamma} E3 to 17/2\\ensuremath{^{+}}."
    },
    {
     "type": "comment",
     "head": [
      {
       "name": "T"
      }
     ],
     "body": "Weighted average (external uncertainty) of 160.10 d \\textit{8} (1975Wa19), 160.07 d \\textit{12} (2008Ca13) and 160.95 d 10 (1967Ne05)."
    },
    {
     "type": "comment",
     "body": "2008Ca13: Measurements were carried out by \\ensuremath{\\gamma}-ray spectrometry during a time interval of 420 days. A value of T\\ensuremath{_{\\textnormal{1/2}}}=150.33 d \\textit{10} was obtained using \\ensuremath{\\beta} spectrometry using liquid-scintillator counter."
    },
    {
     "type": "comment",
     "body": "1975Wa19: 160.10 d \\textit{8}, weighted average of 160.50 d \\textit{18}, 159.90 d \\textit{10} and 160.30 d \\textit{16} values obtained by carrying out measurements during a 3-year period with 3 mass-separated samples. Measurements were carried out using a beta-proportional counter. These results supersede the previous ones of 161.3 d \\textit{4}, 160.6 d \\textit{4} and 160.8 d \\textit{4} (1973Ch18), where the same sources were used, but the measurements were carried out during a 12-month period."
    },
    {
     "type": "comment",
     "body": "1967Ne05:\\hphantom{a}161.95 d \\textit{10}, weighted average of 160.4 d \\textit{2}, 161.4 d \\textit{2}, 161.8 d \\textit{4}, 160.8 d \\textit{2}, and 161.0 d \\textit{3} values obtained by carrying out measurements during a 3-year period with 5 chemically-purified samples, produced via the \\ensuremath{^{\\textnormal{176}}}Lu(n,\\ensuremath{\\gamma}) reaction. One of the samples was measured using a beta-proportional counter and the others via \\ensuremath{\\gamma}-ray spectrometry using NaI detectors, covering different energy ranges."
    },
    {
     "type": "comment",
     "body": "Others: 160.90 d \\textit{23} (1973Ch18, superseded by 1975Wa19); 159.5 d \\textit{7} (1982La25), 160 d \\textit{20} (1965Sy01) and 155 d \\textit{5} (1962Jo08)."
    },
    {
     "type": "comment",
     "body": "\\%\\ensuremath{\\beta}\\ensuremath{^{-}} and \\%IT are from I(\\ensuremath{\\gamma}+ce)(23/2\\ensuremath{^{-}} isomer it decay)=179.1 \\textit{7}, weighted average of 179.2 \\textit{25} (I\\ensuremath{\\pi}=9/2\\ensuremath{^{+}}),\\hphantom{a}178.5 \\textit{15} (I\\ensuremath{\\pi}=11/2\\ensuremath{^{+}}), 179.5 \\textit{23} (I\\ensuremath{\\pi}=13/2\\ensuremath{^{+}}), 179.1 \\textit{14} (I\\ensuremath{\\pi}=15/2\\ensuremath{^{+}}) and 179.5 \\textit{14} (I\\ensuremath{\\pi}=17/2\\ensuremath{^{+}}), and I(\\ensuremath{\\gamma}+ce)(23/2\\ensuremath{^{-}} isomer \\ensuremath{\\beta}\\ensuremath{^{-}} decay)=609.8 \\textit{17}, weighted average of 610 \\textit{11} (I\\ensuremath{\\pi}=7/2\\ensuremath{^{-}}), 610 \\textit{8} (I=9/2), 610 \\textit{5} (I=11/2), 609 \\textit{4} (I=13/2), 611.5 \\textit{34} (I=15/2), 609.1 \\textit{31} (I=17/2), 609 \\textit{7} (I=19/2) and 609 \\textit{9} (I=21/2)."
    },
    {
     "type": "comment",
     "body": "\\ensuremath{\\Delta}\\ensuremath{<}r\\ensuremath{^{\\textnormal{2}}}\\ensuremath{>}(170,177)=+0.44 \\textit{5} (1998Ge13)."
    },
    {
     "type": "comment",
     "head": [
      {
       "name": "MOMM1"
      }
     ],
     "body": "Weighted average of 2.308 \\textit{11} (1998Ge13, colinear laser spectroscopy) and 2.337 \\textit{13} (1996Ko26, NMR resonant-offset technique). Others: 2.74 \\textit{21} (1974Kr12) and 2.92 \\textit{18} (1975Sc16)."
    },
    {
     "type": "comment",
     "head": [
      {
       "name": "MOME2"
      }
     ],
     "body": "From 1998Ge13 using the colinear laser spectroscopy, recommended in 2016St14. Others: 4.23 \\textit{67} (1983Oe01) and 5.2 \\textit{5} (1996Ko26)."
    },
    {
     "type": "comment",
     "head": [
      {
       "name": "CONF"
      }
     ],
     "body": "\\ensuremath{K^{\\pi}}=23/2\\ensuremath{^{-}}, \\ensuremath{\\pi}(7/2[404])\\ensuremath{\\otimes}\\ensuremath{\\nu}\\ensuremath{^{2}}(7/2[514],9/2[624]). Based on comparison between the measured \\ensuremath{\\mu} with Nilsson model predictions and the observed in-band properties, such as alignment and g\\ensuremath{_{\\textnormal{K}}}-g\\ensuremath{_{\\textnormal{R}}} values"
    }
   ]
  },
  {
   "energy": {
    "unit": "keV",
    "value": 980.1858,
    "uncertainty": {
     "type": "symmetric",
     "value": 0.002
    }
   },
   "spinParity": {
    "values": [
     {
      "twoTimesSpin": 11,
      "isTentativeSpin": false,
      "parity": "+",
      "isTentativeParity": false
     }
    ]
   },
   "isStable": false,
   "flags": [
    "D"
   ],
   "crossReferences": [
    {
     "dataset": "176LU(N,G) E=THERMAL"
    },
    {
     "dataset": "(HI,XNG)"
    }
   ],
   "gammas": [
    {
     "energy": {
      "unit": "keV",
      "value": 163.489,
      "uncertainty": {
       "type": "symmetric",
       "value": 0.004
      }
     },
     "gammaIntensity": {
      "value": 0.6,
      "uncertainty": {
       "type": "symmetric",
       "value": 0.3
      }
     },
     "initialLevelIndex": 30,
     "finalLevelIndex": 20
    },
    {
     "energy": {
      "unit": "keV",
      "value": 259.39,
      "uncertainty": {
       "type": "symmetric",
       "value": 0.002
      }
     },
     "gammaIntensity": {
      "value": 100,
      "uncertainty": {
       "type": "symmetric",
       "value": 10
      }
     },
     "initialLevelIndex": 30,
     "finalLevelIndex": 15,
     "multipolarity": {
      "stringRepresentation": "E2",
      "spins": [
       {
        "spin": 2
       }
      ],
      "parity": "+"
     },
     "theoreticalInternalConversionCoefficients": {
      "totalValue": {
       "value": 0.1196,
       "uncertainty": {
        "type": "unreported"
       }
      },
      "shellValues": [
       {
        "includesOuterShells": false,
        "shell": "K",
        "value": 0.0803,
        "uncertainty": {
         "type": "symmetric",
         "value": 0.0012
        }
       },
       {
        "includesOuterShells": false,
        "shell": "L",
        "value": 0.0302,
        "uncertainty": {
         "type": "symmetric",
         "value": 0.0005
        }
       },
       {
        "includesOuterShells": false,
        "shell": "M",
        "value": 0.00727,
        "uncertainty": {
         "type": "symmetric",
         "value": 0.00011
        }
       },
       {
        "includesOuterShells": false,
        "shell": "N",
        "value": 0.001684,
        "uncertainty": {
         "type": "symmetric",
         "value": 0.000024
        }
       },
       {
        "includesOuterShells": false,
        "shell": "O",
        "value": 0.000217,
        "uncertainty": {
         "type": "symmetric",
         "value": 0.000003
        }
       },
       {
        "includesOuterShells": false,
        "shell": "P",
        "value": 0.0000049,
        "uncertainty": {
         "type": "symmetric",
         "value": 7e-8
        }
       }
      ]
     },
     "comments": [
      {
       "type": "comment",
       "head": [
        {
         "name": "M"
        }
       ],
       "body": "\\ensuremath{\\alpha}(K)exp=0.0650 \\textit{10}, \\ensuremath{\\alpha}(L1)exp=0.0070 \\textit{13}, \\ensuremath{\\alpha}(L2)exp=0.0113 \\textit{18}, \\ensuremath{\\alpha}(M1)exp=0.0016 \\textit{7}, and \\ensuremath{\\alpha}(M2)exp=0.0028 \\textit{8} (1996Pe05); \\ensuremath{\\alpha}(K)exp=0.09, \\ensuremath{\\alpha}(L1)exp+\\ensuremath{\\alpha}(L2)exp=0.027, and \\ensuremath{\\alpha}(M)exp=0.004 (1971Ma45)."
      }
     ]
    }
   ],
   "band": 3,
   "comments": [
    {
     "type": "comment",
     "head": [
      {
       "name": "J"
      }
     ],
     "body": "163.489\\ensuremath{\\gamma} to 9/2\\ensuremath{^{+}}, 259.390\\ensuremath{\\gamma} E2 to 7/2\\ensuremath{^{+}}; band assignment."
    }
   ]
  },
  {
   "energy": {
    "unit": "keV",
    "value": 985.2968,
    "uncertainty": {
     "type": "symmetric",
     "value": 0.0017
    }
   },
   "spinParity": {
    "values": [
     {
      "twoTimesSpin": 13,
      "isTentativeSpin": false,
      "parity": "+",
      "isTentativeParity": false
     }
    ]
   },
   "isStable": false,
   "flags": [
    "C"
   ],
   "crossReferences": [
    {
     "dataset": "176LU(N,G) E=THERMAL"
    },
    {
     "dataset": "(HI,XNG)"
    }
   ],
   "gammas": [
    {
     "energy": {
      "unit": "keV",
      "value": 168.605,
      "uncertainty": {
       "type": "symmetric",
       "value": 0.002
      }
     },
     "gammaIntensity": {
      "value": 100,
      "uncertainty": {
       "type": "symmetric",
       "value": 10
      }
     },
     "initialLevelIndex": 31,
     "finalLevelIndex": 20,
     "multipolarity": {
      "stringRepresentation": "M1(+E2)",
      "isMixedTransition": true,
      "spins": [
       {
        "spin": 1
       },
       {
        "spin": 2
       }
      ],
      "parity": "+"
     },
     "theoreticalInternalConversionCoefficients": {
      "totalValue": {
       "value": 0.834,
       "uncertainty": {
        "type": "unreported"
       }
      },
      "shellValues": [
       {
        "includesOuterShells": false,
        "shell": "K",
        "value": 0.696,
        "uncertainty": {
         "type": "symmetric",
         "value": 0.01
        }
       },
       {
        "includesOuterShells": false,
        "shell": "L",
        "value": 0.1068,
        "uncertainty": {
         "type": "symmetric",
         "value": 0.0015
        }
       },
       {
        "includesOuterShells": false,
        "shell": "M",
        "value": 0.024,
        "uncertainty": {
         "type": "symmetric",
         "value": 0.0004
        }
       },
       {
        "includesOuterShells": false,
        "shell": "N",
        "value": 0.00567,
        "uncertainty": {
         "type": "symmetric",
         "value": 0.00008
        }
       },
       {
        "includesOuterShells": false,
        "shell": "O",
        "value": 0.000841,
        "uncertainty": {
         "type": "symmetric",
         "value": 0.000012
        }
       },
       {
        "includesOuterShells": false,
        "shell": "P",
        "value": 0.000052,
        "uncertainty": {
         "type": "symmetric",
         "value": 8e-7
        }
       }
      ]
     },
     "comments": [
      {
       "type": "comment",
       "head": [
        {
         "name": "M"
        }
       ],
       "body": "\\ensuremath{\\alpha}(K)exp=0.8427 \\textit{13}, \\ensuremath{\\alpha}(L1)exp=0.12 \\textit{2}, \\ensuremath{\\alpha}(L2)exp=0.024 \\textit{5}, and \\ensuremath{\\alpha}(M1)exp=0.022 \\textit{5} (1996Pe05); \\ensuremath{\\alpha}(K)exp=0.74, \\ensuremath{\\alpha}(L1)exp+\\ensuremath{\\alpha}(L2)exp=0.16, and \\ensuremath{\\alpha}(M)exp=0.05 (1971Ma45)."
      }
     ]
    },
    {
     "energy": {
      "unit": "keV",
      "value": 313.358,
      "uncertainty": {
       "type": "symmetric",
       "value": 0.002
      }
     },
     "gammaIntensity": {
      "value": 47,
      "uncertainty": {
       "type": "symmetric",
       "value": 6
      }
     },
     "initialLevelIndex": 31,
     "finalLevelIndex": 13,
     "multipolarity": {
      "stringRepresentation": "E2",
      "spins": [
       {
        "spin": 2
       }
      ],
      "parity": "+"
     },
     "theoreticalInternalConversionCoefficients": {
      "totalValue": {
       "value": 0.0672,
       "uncertainty": {
        "type": "unreported"
       }
      },
      "shellValues": [
       {
        "includesOuterShells": false,
        "shell": "K",
        "value": 0.0478,
        "uncertainty": {
         "type": "symmetric",
         "value": 0.0007
        }
       },
       {
        "includesOuterShells": false,
        "shell": "L",
        "value": 0.01486,
        "uncertainty": {
         "type": "symmetric",
         "value": 0.00021
        }
       },
       {
        "includesOuterShells": false,
        "shell": "M",
        "value": 0.00354,
        "uncertainty": {
         "type": "symmetric",
         "value": 0.00005
        }
       },
       {
        "includesOuterShells": false,
        "shell": "N",
        "value": 0.000823,
        "uncertainty": {
         "type": "symmetric",
         "value": 0.000012
        }
       },
       {
        "includesOuterShells": false,
        "shell": "O",
        "value": 0.0001083,
        "uncertainty": {
         "type": "symmetric",
         "value": 0.0000016
        }
       },
       {
        "includesOuterShells": false,
        "shell": "P",
        "value": 0.00000303,
        "uncertainty": {
         "type": "symmetric",
         "value": 5e-8
        }
       }
      ]
     },
     "comments": [
      {
       "type": "comment",
       "head": [
        {
         "name": "M"
        }
       ],
       "body": "\\ensuremath{\\alpha}(K)exp=0.051 \\textit{11}, \\ensuremath{\\alpha}(L1)exp=0.0067 \\textit{21}, and \\ensuremath{\\alpha}(L2)exp=0.0053 \\textit{20} (1996Pe05); \\ensuremath{\\alpha}(K)exp=0.067 (1971Ma45)."
      }
     ]
    },
    {
     "energy": {
      "unit": "keV",
      "value": 544.64,
      "uncertainty": {
       "type": "symmetric",
       "value": 0.004
      }
     },
     "gammaIntensity": {
      "value": 22.4,
      "uncertainty": {
       "type": "symmetric",
       "value": 2.4
      }
     },
     "initialLevelIndex": 31,
     "finalLevelIndex": 5,
     "multipolarity": {
      "stringRepresentation": "M1(+E2)",
      "isMixedTransition": true,
      "spins": [
       {
        "spin": 1
       },
       {
        "spin": 2
       }
      ],
      "parity": "+"
     },
     "theoreticalInternalConversionCoefficients": {
      "totalValue": {
       "value": 0.0356,
       "uncertainty": {
        "type": "unreported"
       }
      },
      "shellValues": [
       {
        "includesOuterShells": false,
        "shell": "K",
        "value": 0.0299,
        "uncertainty": {
         "type": "symmetric",
         "value": 0.0005
        }
       },
       {
        "includesOuterShells": false,
        "shell": "L",
        "value": 0.00444,
        "uncertainty": {
         "type": "symmetric",
         "value": 0.00007
        }
       },
       {
        "includesOuterShells": false,
        "shell": "M",
        "value": 0.000995,
        "uncertainty": {
         "type": "symmetric",
         "value": 0.000014
        }
       },
       {
        "includesOuterShells": false,
        "shell": "N",
        "value": 0.000235,
        "uncertainty": {
         "type": "symmetric",
         "value": 0.000004
        }
       },
       {
        "includesOuterShells": false,
        "shell": "O",
        "value": 0.000035,
        "uncertainty": {
         "type": "symmetric",
         "value": 5e-7
        }
       },
       {
        "includesOuterShells": false,
        "shell": "P",
        "value": 0.00000219,
        "uncertainty": {
         "type": "symmetric",
         "value": 3e-8
        }
       }
      ]
     },
     "comments": [
      {
       "type": "comment",
       "head": [
        {
         "name": "M"
        }
       ],
       "body": "\\ensuremath{\\alpha}(K)exp=0.026 (1971Ma45)."
      }
     ]
    },
    {
     "energy": {
      "unit": "keV",
      "value": 716.505,
      "uncertainty": {
       "type": "symmetric",
       "value": 0.008
      }
     },
     "gammaIntensity": {
      "value": 25,
      "uncertainty": {
       "type": "symmetric",
       "value": 3
      }
     },
     "initialLevelIndex": 31,
     "finalLevelIndex": 3,
     "multipolarity": {
      "stringRepresentation": "M1(+E2)",
      "isMixedTransition": true,
      "spins": [
       {
        "spin": 1
       },
       {
        "spin": 2
       }
      ],
      "parity": "+"
     },
     "theoreticalInternalConversionCoefficients": {
      "totalValue": {
       "value": 0.01771,
       "uncertainty": {
        "type": "unreported"
       }
      },
      "shellValues": [
       {
        "includesOuterShells": false,
        "shell": "K",
        "value": 0.01489,
        "uncertainty": {
         "type": "symmetric",
         "value": 0.00021
        }
       },
       {
        "includesOuterShells": false,
        "shell": "L",
        "value": 0.00219,
        "uncertainty": {
         "type": "symmetric",
         "value": 0.00003
        }
       },
       {
        "includesOuterShells": false,
        "shell": "M",
        "value": 0.000491,
        "uncertainty": {
         "type": "symmetric",
         "value": 0.000007
        }
       },
       {
        "includesOuterShells": false,
        "shell": "N",
        "value": 0.0001159,
        "uncertainty": {
         "type": "symmetric",
         "value": 0.0000017
        }
       },
       {
        "includesOuterShells": false,
        "shell": "O",
        "value": 0.00001725,
        "uncertainty": {
         "type": "symmetric",
         "value": 2.5e-7
        }
       },
       {
        "includesOuterShells": false,
        "shell": "P",
        "value": 0.000001086,
        "uncertainty": {
         "type": "symmetric",
         "value": 1.6e-8
        }
       }
      ]
     },
     "comments": [
      {
       "type": "comment",
       "head": [
        {
         "name": "M"
        }
       ],
       "body": "\\ensuremath{\\alpha}(K)exp=0.0042 \\textit{16} (1996Pe05) and \\ensuremath{\\alpha}(K)exp=0.0056 (1971Ma45)."
      }
     ]
    }
   ],
   "band": 2,
   "comments": [
    {
     "type": "comment",
     "head": [
      {
       "name": "J"
      }
     ],
     "body": "168.605\\ensuremath{\\gamma} M1(+E2) 11/2\\ensuremath{^{+}}, 313.358\\ensuremath{\\gamma} E2 to 9/2\\ensuremath{^{+}}; band assignment."
    }
   ]
  },
  {
   "energy": {
    "unit": "keV",
    "value": 1021.195,
    "uncertainty": {
     "type": "symmetric",
     "value": 0.019
    }
   },
   "spinParity": {
    "values": [
     {
      "twoTimesSpin": 9,
      "isTentativeSpin": true,
      "parity": "+",
      "isTentativeParity": true
     }
    ]
   },
   "isStable": false,
   "flags": [
    "t"
   ],
   "crossReferences": [
    {
     "dataset": "176LU(N,G) E=THERMAL"
    }
   ],
   "gammas": [
    {
     "energy": {
      "unit": "keV",
      "value": 198.09,
      "uncertainty": {
       "type": "symmetric",
       "value": 0.04
      }
     },
     "initialLevelIndex": 32,
     "finalLevelIndex": 21
    },
    {
     "energy": {
      "unit": "keV",
      "value": 1020.2,
      "uncertainty": {
       "type": "symmetric",
       "value": 1
      }
     },
     "gammaIntensity": {
      "value": 100,
      "uncertainty": {
       "type": "unreported"
      }
     },
     "initialLevelIndex": 32,
     "finalLevelIndex": 0
    }
   ],
   "band": 21,
   "comments": [
    {
     "type": "comment",
     "head": [
      {
       "name": "J"
      }
     ],
     "body": "198.09\\ensuremath{\\gamma} to (5/2\\ensuremath{^{+}}), 1020.2\\ensuremath{\\gamma} to 7/2\\ensuremath{^{+}}; band assignment."
    }
   ]
  },
  {
   "energy": {
    "unit": "keV",
    "value": 1049.456,
    "uncertainty": {
     "type": "symmetric",
     "value": 0.009
    }
   },
   "spinParity": {
    "values": [
     {
      "twoTimesSpin": 9,
      "isTentativeSpin": false,
      "parity": "-",
      "isTentativeParity": false
     }
    ]
   },
   "isStable": false,
   "flags": [
    "y"
   ],
   "crossReferences": [
    {
     "dataset": "176LU(N,G) E=THERMAL"
    },
    {
     "dataset": "177YB B- DECAY"
    }
   ],
   "gammas": [
    {
     "energy": {
      "unit": "keV",
      "value": 760.4,
      "uncertainty": {
       "type": "symmetric",
       "value": 0.07
      }
     },
     "gammaIntensity": {
      "value": 9.1,
      "uncertainty": {
       "type": "symmetric",
       "value": 0.7
      }
     },
     "initialLevelIndex": 33,
     "finalLevelIndex": 4,
     "multipolarity": {
      "stringRepresentation": "M1+E2",
      "isMixedTransition": true,
      "spins": [
       {
        "spin": 1
       },
       {
        "spin": 2
       }
      ],
      "parity": "+",
      "mixingRatio": {
       "isAbsoluteValue": true,
       "value": 0.55,
       "uncertainty": {
        "type": "asymmetric",
        "upperLimit": 1.11,
        "lowerLimit": 0.04
       }
      }
     },
     "theoreticalInternalConversionCoefficients": {
      "totalValue": {
       "value": 0.013,
       "uncertainty": {
        "type": "symmetric",
        "value": 0.005
       }
      },
      "shellValues": [
       {
        "includesOuterShells": false,
        "shell": "K",
        "value": 0.011,
        "uncertainty": {
         "type": "symmetric",
         "value": 0.004
        }
       },
       {
        "includesOuterShells": false,
        "shell": "L",
        "value": 0.0017,
        "uncertainty": {
         "type": "symmetric",
         "value": 0.0005
        }
       },
       {
        "includesOuterShells": false,
        "shell": "M",
        "value": 0.00038,
        "uncertainty": {
         "type": "symmetric",
         "value": 0.0001
        }
       },
       {
        "includesOuterShells": false,
        "shell": "N",
        "value": 0.000089,
        "uncertainty": {
         "type": "symmetric",
         "value": 0.000024
        }
       },
       {
        "includesOuterShells": false,
        "shell": "O",
        "value": 0.000013,
        "uncertainty": {
         "type": "symmetric",
         "value": 0.000004
        }
       },
       {
        "includesOuterShells": false,
        "shell": "P",
        "value": 8e-7,
        "uncertainty": {
         "type": "symmetric",
         "value": 3e-7
        }
       }
      ]
     },
     "comments": [
      {
       "type": "comment",
       "head": [
        {
         "name": "RI"
        },
        {
         "name": "MR"
        }
       ],
       "body": "From \\ensuremath{^{\\textnormal{177}}}Yb \\ensuremath{\\beta}\\ensuremath{^{-}} decay. \\ensuremath{\\delta} is from \\ensuremath{\\gamma}\\ensuremath{\\gamma}(\\ensuremath{\\theta}) in 1995Ya21"
      }
     ]
    },
    {
     "energy": {
      "unit": "keV",
      "value": 899.06,
      "uncertainty": {
       "type": "symmetric",
       "value": 0.009
      }
     },
     "gammaIntensity": {
      "value": 100,
      "uncertainty": {
       "type": "symmetric",
       "value": 3
      }
     },
     "initialLevelIndex": 33,
     "finalLevelIndex": 2,
     "multipolarity": {
      "stringRepresentation": "E2(+M1)",
      "isMixedTransition": true,
      "spins": [
       {
        "spin": 2
       },
       {
        "spin": 1
       }
      ],
      "parity": "+"
     },
     "theoreticalInternalConversionCoefficients": {
      "totalValue": {
       "value": 0.01004,
       "uncertainty": {
        "type": "unreported"
       }
      },
      "shellValues": [
       {
        "includesOuterShells": false,
        "shell": "K",
        "value": 0.00845,
        "uncertainty": {
         "type": "symmetric",
         "value": 0.00012
        }
       },
       {
        "includesOuterShells": false,
        "shell": "L",
        "value": 0.001236,
        "uncertainty": {
         "type": "symmetric",
         "value": 0.000018
        }
       },
       {
        "includesOuterShells": false,
        "shell": "M",
        "value": 0.000276,
        "uncertainty": {
         "type": "symmetric",
         "value": 0.000004
        }
       },
       {
        "includesOuterShells": false,
        "shell": "N",
        "value": 0.0000653,
        "uncertainty": {
         "type": "symmetric",
         "value": 0.000001
        }
       },
       {
        "includesOuterShells": false,
        "shell": "O",
        "value": 0.00000972,
        "uncertainty": {
         "type": "symmetric",
         "value": 1.4e-7
        }
       },
       {
        "includesOuterShells": false,
        "shell": "P",
        "value": 6.14e-7,
        "uncertainty": {
         "type": "symmetric",
         "value": 9e-9
        }
       }
      ]
     },
     "comments": [
      {
       "type": "comment",
       "head": [
        {
         "name": "RI"
        },
        {
         "name": "M"
        }
       ],
       "body": "From \\ensuremath{^{\\textnormal{177}}}Yb \\ensuremath{\\beta}\\ensuremath{^{-}} decay. Mult. is from \\ensuremath{\\alpha}(K)exp (1964Ew04)"
      }
     ]
    },
    {
     "energy": {
      "unit": "keV",
      "value": 927.66,
      "uncertainty": {
       "type": "symmetric",
       "value": 0.09
      }
     },
     "gammaIntensity": {
      "value": 2.9,
      "uncertainty": {
       "type": "symmetric",
       "value": 0.8
      }
     },
     "initialLevelIndex": 33,
     "finalLevelIndex": 1
    },
    {
     "energy": {
      "unit": "keV",
      "value": 1049.2,
      "uncertainty": {
       "type": "symmetric",
       "value": 0.1
      }
     },
     "gammaIntensity": {
      "value": 2.5,
      "uncertainty": {
       "type": "symmetric",
       "value": 0.9
      }
     },
     "initialLevelIndex": 33,
     "finalLevelIndex": 0,
     "flags": [
      "Q"
     ]
    }
   ],
   "band": 26,
   "comments": [
    {
     "type": "comment",
     "head": [
      {
       "name": "J"
      }
     ],
     "body": "760.40\\ensuremath{\\gamma} M1+E2 to 11/2\\ensuremath{^{-}}, 1049.2\\ensuremath{\\gamma} to 7/2\\ensuremath{^{+}}; direct feeding in \\ensuremath{^{\\textnormal{177}}}Yb \\ensuremath{\\beta}\\ensuremath{^{-}} decay (\\ensuremath{J^{\\pi}}=9/2\\ensuremath{^{+}})."
    }
   ]
  },
  {
   "energy": {
    "unit": "keV",
    "value": 1073,
    "uncertainty": {
     "type": "symmetric",
     "value": 3
    }
   },
   "spinParity": {
    "values": [
     {
      "twoTimesSpin": 3,
      "isTentativeSpin": true,
      "parity": "+",
      "isTentativeParity": true
     }
    ]
   },
   "isStable": false,
   "flags": [
    "G",
    "T"
   ],
   "crossReferences": [
    {
     "dataset": "178HF(T,A)"
    }
   ],
   "band": 7,
   "comments": [
    {
     "type": "comment",
     "head": [
      {
       "name": "J"
      }
     ],
     "body": "Comparison of measured (t,\\ensuremath{\\alpha}) cross section in \\ensuremath{^{\\textnormal{178}}}Hf(t,\\ensuremath{\\alpha}) with calculated DWBA values (1992Bu12)."
    },
    {
     "type": "comment",
     "head": [
      {
       "name": "CONF"
      }
     ],
     "body": "\\ensuremath{K^{\\pi}}=3/2\\ensuremath{^{+}}, \\ensuremath{\\pi}3/2[411]"
    }
   ]
  },
  {
   "energy": {
    "unit": "keV",
    "value": 1073.6382,
    "uncertainty": {
     "type": "symmetric",
     "value": 0.0019
    }
   },
   "spinParity": {
    "values": [
     {
      "twoTimesSpin": 19,
      "isTentativeSpin": false,
      "parity": "-",
      "isTentativeParity": false
     }
    ]
   },
   "isStable": false,
   "flags": [
    "B"
   ],
   "crossReferences": [
    {
     "dataset": "176LU(N,G) E=THERMAL"
    },
    {
     "dataset": "176LU(D,P)",
     "level": 1073
    },
    {
     "dataset": "(HI,XNG)"
    }
   ],
   "gammas": [
    {
     "energy": {
      "unit": "keV",
      "value": 228.728,
      "uncertainty": {
       "type": "symmetric",
       "value": 0.001
      }
     },
     "gammaIntensity": {
      "value": 100,
      "uncertainty": {
       "type": "symmetric",
       "value": 5
      }
     },
     "initialLevelIndex": 35,
     "finalLevelIndex": 23,
     "multipolarity": {
      "stringRepresentation": "M1(+E2)",
      "isMixedTransition": true,
      "spins": [
       {
        "spin": 1
       },
       {
        "spin": 2
       }
      ],
      "parity": "+"
     },
     "theoreticalInternalConversionCoefficients": {
      "totalValue": {
       "value": 0.358,
       "uncertainty": {
        "type": "unreported"
       }
      },
      "shellValues": [
       {
        "includesOuterShells": false,
        "shell": "K",
        "value": 0.299,
        "uncertainty": {
         "type": "symmetric",
         "value": 0.005
        }
       },
       {
        "includesOuterShells": false,
        "shell": "L",
        "value": 0.0456,
        "uncertainty": {
         "type": "symmetric",
         "value": 0.0007
        }
       },
       {
        "includesOuterShells": false,
        "shell": "M",
        "value": 0.01025,
        "uncertainty": {
         "type": "symmetric",
         "value": 0.00015
        }
       },
       {
        "includesOuterShells": false,
        "shell": "N",
        "value": 0.00242,
        "uncertainty": {
         "type": "symmetric",
         "value": 0.00004
        }
       },
       {
        "includesOuterShells": false,
        "shell": "O",
        "value": 0.000359,
        "uncertainty": {
         "type": "symmetric",
         "value": 0.000005
        }
       },
       {
        "includesOuterShells": false,
        "shell": "P",
        "value": 0.0000223,
        "uncertainty": {
         "type": "symmetric",
         "value": 4e-7
        }
       }
      ]
     },
     "comments": [
      {
       "type": "comment",
       "head": [
        {
         "name": "RI"
        }
       ],
       "body": "From (HI,xn\\ensuremath{\\gamma})"
      },
      {
       "type": "comment",
       "head": [
        {
         "name": "M"
        }
       ],
       "body": "\\ensuremath{\\alpha}(K)exp=0.19 \\textit{4}, \\ensuremath{\\alpha}(L1)exp=0.021 \\textit{6}, and \\ensuremath{\\alpha}(L2)exp=0.027 \\textit{13} (1996Pe05); \\ensuremath{\\alpha}(K)exp=0.37 (1971Ma45)."
      }
     ]
    },
    {
     "energy": {
      "unit": "keV",
      "value": 436.522,
      "uncertainty": {
       "type": "symmetric",
       "value": 0.003
      }
     },
     "gammaIntensity": {
      "value": 25,
      "uncertainty": {
       "type": "symmetric",
       "value": 3
      }
     },
     "initialLevelIndex": 35,
     "finalLevelIndex": 12,
     "multipolarity": {
      "stringRepresentation": "E2",
      "spins": [
       {
        "spin": 2
       }
      ],
      "parity": "+"
     },
     "theoreticalInternalConversionCoefficients": {
      "totalValue": {
       "value": 0.0264,
       "uncertainty": {
        "type": "unreported"
       }
      },
      "shellValues": [
       {
        "includesOuterShells": false,
        "shell": "K",
        "value": 0.0202,
        "uncertainty": {
         "type": "symmetric",
         "value": 0.0003
        }
       },
       {
        "includesOuterShells": false,
        "shell": "L",
        "value": 0.00479,
        "uncertainty": {
         "type": "symmetric",
         "value": 0.00007
        }
       },
       {
        "includesOuterShells": false,
        "shell": "M",
        "value": 0.001122,
        "uncertainty": {
         "type": "symmetric",
         "value": 0.000016
        }
       },
       {
        "includesOuterShells": false,
        "shell": "N",
        "value": 0.000262,
        "uncertainty": {
         "type": "symmetric",
         "value": 0.000004
        }
       },
       {
        "includesOuterShells": false,
        "shell": "O",
        "value": 0.0000356,
        "uncertainty": {
         "type": "symmetric",
         "value": 5e-7
        }
       },
       {
        "includesOuterShells": false,
        "shell": "P",
        "value": 0.000001344,
        "uncertainty": {
         "type": "symmetric",
         "value": 1.9e-8
        }
       }
      ]
     },
     "comments": [
      {
       "type": "comment",
       "head": [
        {
         "name": "RI"
        }
       ],
       "body": "From (HI,xn\\ensuremath{\\gamma})"
      },
      {
       "type": "comment",
       "head": [
        {
         "name": "M"
        }
       ],
       "body": "\\ensuremath{\\alpha}(K)exp=0.025 \\textit{10} (1996Pe05) and \\ensuremath{\\alpha}(K)exp=0.014 (1971Ma45)."
      }
     ]
    }
   ],
   "band": 1,
   "comments": [
    {
     "type": "comment",
     "head": [
      {
       "name": "J"
      }
     ],
     "body": "228.728\\ensuremath{\\gamma} M1(+E2) to 17/2\\ensuremath{^{-}}, 436.552\\ensuremath{\\gamma} E2 to 15/2\\ensuremath{^{-}}; band assignment."
    }
   ]
  },
  {
   "energy": {
    "unit": "keV",
    "value": 1088.612,
    "uncertainty": {
     "type": "symmetric",
     "value": 0.005
    }
   },
   "spinParity": {
    "values": [
     {
      "twoTimesSpin": 7,
      "isTentativeSpin": false,
      "parity": "-",
      "isTentativeParity": false
     }
    ]
   },
   "isStable": false,
   "flags": [
    "E"
   ],
   "crossReferences": [
    {
     "dataset": "176LU(N,G) E=THERMAL"
    },
    {
     "dataset": "(HI,XNG)"
    }
   ],
   "gammas": [
    {
     "energy": {
      "unit": "keV",
      "value": 277.175,
      "uncertainty": {
       "type": "symmetric",
       "value": 0.005
      }
     },
     "gammaIntensity": {
      "value": 100,
      "uncertainty": {
       "type": "symmetric",
       "value": 18
      }
     },
     "initialLevelIndex": 36,
     "finalLevelIndex": 19,
     "multipolarity": {
      "stringRepresentation": "M1(+E2)",
      "isMixedTransition": true,
      "spins": [
       {
        "spin": 1
       },
       {
        "spin": 2
       }
      ],
      "parity": "+"
     },
     "theoreticalInternalConversionCoefficients": {
      "totalValue": {
       "value": 0.212,
       "uncertainty": {
        "type": "unreported"
       }
      },
      "shellValues": [
       {
        "includesOuterShells": false,
        "shell": "K",
        "value": 0.1772,
        "uncertainty": {
         "type": "symmetric",
         "value": 0.0025
        }
       },
       {
        "includesOuterShells": false,
        "shell": "L",
        "value": 0.0269,
        "uncertainty": {
         "type": "symmetric",
         "value": 0.0004
        }
       },
       {
        "includesOuterShells": false,
        "shell": "M",
        "value": 0.00604,
        "uncertainty": {
         "type": "symmetric",
         "value": 0.00009
        }
       },
       {
        "includesOuterShells": false,
        "shell": "N",
        "value": 0.001426,
        "uncertainty": {
         "type": "symmetric",
         "value": 0.00002
        }
       },
       {
        "includesOuterShells": false,
        "shell": "O",
        "value": 0.000212,
        "uncertainty": {
         "type": "symmetric",
         "value": 0.000003
        }
       },
       {
        "includesOuterShells": false,
        "shell": "P",
        "value": 0.00001315,
        "uncertainty": {
         "type": "symmetric",
         "value": 1.9e-7
        }
       }
      ]
     },
     "comments": [
      {
       "type": "comment",
       "head": [
        {
         "name": "M"
        }
       ],
       "body": "\\ensuremath{\\alpha}(K)exp=0.24 (1971Ma45)"
      }
     ]
    },
    {
     "energy": {
      "unit": "keV",
      "value": 326.89,
      "uncertainty": {
       "type": "symmetric",
       "value": 0.013
      }
     },
     "gammaIntensity": {
      "value": 30,
      "uncertainty": {
       "type": "symmetric",
       "value": 6
      }
     },
     "initialLevelIndex": 36,
     "finalLevelIndex": 16
    }
   ],
   "band": 4,
   "comments": [
    {
     "type": "comment",
     "head": [
      {
       "name": "J"
      }
     ],
     "body": "277.175\\ensuremath{\\gamma} M1(+E2) to 9/2\\ensuremath{^{-}}, 326.890\\ensuremath{\\gamma} to 5/2\\ensuremath{^{-}}; band assignment."
    }
   ]
  },
  {
   "energy": {
    "unit": "keV",
    "value": 1093.661,
    "uncertainty": {
     "type": "symmetric",
     "value": 0.006
    }
   },
   "spinParity": {
    "values": [
     {
      "twoTimesSpin": 19,
      "isTentativeSpin": false,
      "parity": "+",
      "isTentativeParity": false
     }
    ]
   },
   "isStable": false,
   "flags": [
    "A"
   ],
   "crossReferences": [
    {
     "dataset": "176LU(N,G) E=THERMAL"
    },
    {
     "dataset": "(HI,XNG)"
    }
   ],
   "gammas": [
    {
     "energy": {
      "unit": "keV",
      "value": 239.349,
      "uncertainty": {
       "type": "symmetric",
       "value": 0.008
      }
     },
     "gammaIntensity": {
      "value": 29,
      "uncertainty": {
       "type": "symmetric",
       "value": 7
      }
     },
     "initialLevelIndex": 37,
     "finalLevelIndex": 24,
     "comments": [
      {
       "type": "comment",
       "head": [
        {
         "name": "RI"
        }
       ],
       "body": "From (HI,xn\\ensuremath{\\gamma})"
      }
     ]
    },
    {
     "energy": {
      "unit": "keV",
      "value": 457.461,
      "uncertainty": {
       "type": "symmetric",
       "value": 0.008
      }
     },
     "gammaIntensity": {
      "value": 100,
      "uncertainty": {
       "type": "symmetric",
       "value": 10
      }
     },
     "initialLevelIndex": 37,
     "finalLevelIndex": 11,
     "comments": [
      {
       "type": "comment",
       "head": [
        {
         "name": "RI"
        }
       ],
       "body": "From (HI,xn\\ensuremath{\\gamma})"
      }
     ]
    }
   ],
   "band": 0,
   "comments": [
    {
     "type": "comment",
     "head": [
      {
       "name": "J"
      }
     ],
     "body": "239.349\\ensuremath{\\gamma} to 17/2\\ensuremath{^{+}}, 457.461\\ensuremath{\\gamma} to 15/2\\ensuremath{^{+}}; band assignment."
    }
   ]
  },
  {
   "energy": {
    "unit": "keV",
    "value": 1098,
    "uncertainty": {
     "type": "unreported"
    }
   },
   "spinParity": {
    "values": [
     {
      "twoTimesSpin": 3,
      "isTentativeSpin": true,
      "parity": "+",
      "isTentativeParity": true
     },
     {
      "twoTimesSpin": 5,
      "isTentativeSpin": true,
      "parity": "+",
      "isTentativeParity": true
     }
    ]
   },
   "isStable": false,
   "flags": [
    "R"
   ],
   "crossReferences": [
    {
     "dataset": "176YB(3HE,D),(A,T)"
    }
   ],
   "comments": [
    {
     "type": "comment",
     "head": [
      {
       "name": "J"
      }
     ],
     "body": "L=(2) in \\ensuremath{^{\\textnormal{176}}}Yb(\\ensuremath{^{\\textnormal{3}}}He,d), (\\ensuremath{\\alpha},t)."
    }
   ]
  },
  {
   "energy": {
    "unit": "keV",
    "value": 1133,
    "uncertainty": {
     "type": "symmetric",
     "value": 3
    }
   },
   "spinParity": {
    "values": [
     {
      "twoTimesSpin": 5,
      "isTentativeSpin": true,
      "parity": "+",
      "isTentativeParity": true
     }
    ]
   },
   "isStable": false,
   "flags": [
    "G",
    "T"
   ],
   "crossReferences": [
    {
     "dataset": "176YB(3HE,D),(A,T)",
     "level": 1126
    },
    {
     "dataset": "178HF(T,A)"
    }
   ],
   "band": 7,
   "comments": [
    {
     "type": "comment",
     "head": [
      {
       "name": "J"
      }
     ],
     "body": "L=(2) in \\ensuremath{^{\\textnormal{176}}}Yb(\\ensuremath{^{\\textnormal{3}}}He,d), (\\ensuremath{\\alpha},t). Comparison of measured (t,\\ensuremath{\\alpha}) cross section in \\ensuremath{^{\\textnormal{178}}}Hf(t,\\ensuremath{\\alpha}) with calculated DWBA values (1992Bu12)."
    }
   ]
  },
  {
   "energy": {
    "unit": "keV",
    "value": 1149.97,
    "uncertainty": {
     "type": "symmetric",
     "value": 0.13
    }
   },
   "spinParity": {
    "values": [
     {
      "twoTimesSpin": 7,
      "isTentativeSpin": false,
      "parity": "+",
      "isTentativeParity": false
     }
    ]
   },
   "isStable": false,
   "crossReferences": [
    {
     "dataset": "177YB B- DECAY"
    }
   ],
   "gammas": [
    {
     "energy": {
      "unit": "keV",
      "value": 691.9,
      "uncertainty": {
       "type": "symmetric",
       "value": 0.2
      }
     },
     "gammaIntensity": {
      "value": 0.5,
      "uncertainty": {
       "type": "symmetric",
       "value": 0.3
      }
     },
     "initialLevelIndex": 40,
     "finalLevelIndex": 7,
     "flags": [
      "Q"
     ]
    },
    {
     "energy": {
      "unit": "keV",
      "value": 881.3,
      "uncertainty": {
       "type": "symmetric",
       "value": 0.2
      }
     },
     "gammaIntensity": {
      "value": 0.34,
      "uncertainty": {
       "type": "limit",
       "limitType": "upper",
       "isInclusive": false
      }
     },
     "initialLevelIndex": 40,
     "finalLevelIndex": 3,
     "flags": [
      "Q"
     ]
    },
    {
     "energy": {
      "unit": "keV",
      "value": 1028.3,
      "uncertainty": {
       "type": "symmetric",
       "value": 0.3
      }
     },
     "gammaIntensity": {
      "value": 96,
      "uncertainty": {
       "type": "symmetric",
       "value": 3
      }
     },
     "initialLevelIndex": 40,
     "finalLevelIndex": 1,
     "multipolarity": {
      "stringRepresentation": "M1+E2",
      "isMixedTransition": true,
      "spins": [
       {
        "spin": 1
       },
       {
        "spin": 2
       }
      ],
      "parity": "+",
      "mixingRatio": {
       "isAbsoluteValue": true,
       "value": -0.1,
       "uncertainty": {
        "type": "symmetric",
        "value": 0.04
       }
      }
     },
     "theoreticalInternalConversionCoefficients": {
      "totalValue": {
       "value": 0.00717,
       "uncertainty": {
        "type": "symmetric",
        "value": 0.00011
       }
      },
      "shellValues": [
       {
        "includesOuterShells": false,
        "shell": "K",
        "value": 0.00604,
        "uncertainty": {
         "type": "symmetric",
         "value": 0.00009
        }
       },
       {
        "includesOuterShells": false,
        "shell": "L",
        "value": 0.000879,
        "uncertainty": {
         "type": "symmetric",
         "value": 0.000013
        }
       },
       {
        "includesOuterShells": false,
        "shell": "M",
        "value": 0.000197,
        "uncertainty": {
         "type": "symmetric",
         "value": 0.000003
        }
       },
       {
        "includesOuterShells": false,
        "shell": "N",
        "value": 0.0000464,
        "uncertainty": {
         "type": "symmetric",
         "value": 7e-7
        }
       },
       {
        "includesOuterShells": false,
        "shell": "O",
        "value": 0.00000692,
        "uncertainty": {
         "type": "symmetric",
         "value": 1.1e-7
        }
       },
       {
        "includesOuterShells": false,
        "shell": "P",
        "value": 4.37e-7,
        "uncertainty": {
         "type": "symmetric",
         "value": 7e-9
        }
       }
      ]
     },
     "flags": [
      "Q"
     ],
     "comments": [
      {
       "type": "comment",
       "head": [
        {
         "name": "M"
        },
        {
         "name": "MR"
        }
       ],
       "body": "From 1995Ya21"
      }
     ]
    },
    {
     "energy": {
      "unit": "keV",
      "value": 1150.1,
      "uncertainty": {
       "type": "symmetric",
       "value": 0.2
      }
     },
     "gammaIntensity": {
      "value": 100,
      "uncertainty": {
       "type": "symmetric",
       "value": 3
      }
     },
     "initialLevelIndex": 40,
     "finalLevelIndex": 0,
     "flags": [
      "Q"
     ]
    }
   ],
   "comments": [
    {
     "type": "comment",
     "head": [
      {
       "name": "J"
      }
     ],
     "body": "881.3\\ensuremath{\\gamma} to 11/2\\ensuremath{^{+}}, 691.9\\ensuremath{\\gamma} to 5/2\\ensuremath{^{+}}; \\ensuremath{\\gamma}\\ensuremath{\\gamma}(\\ensuremath{\\theta}) in 1995Ya21; direct feeding in \\ensuremath{^{\\textnormal{177}}}Yb \\ensuremath{\\beta}\\ensuremath{^{-}} decay (\\ensuremath{J^{\\pi}}=9/2\\ensuremath{^{+}})."
    }
   ]
  },
  {
   "energy": {
    "unit": "keV",
    "value": 1152.069,
    "uncertainty": {
     "type": "symmetric",
     "value": 0.018
    }
   },
   "spinParity": {
    "values": [
     {
      "twoTimesSpin": 11,
      "isTentativeSpin": true,
      "parity": "+",
      "isTentativeParity": true
     }
    ]
   },
   "isStable": false,
   "flags": [
    "t"
   ],
   "crossReferences": [
    {
     "dataset": "176LU(N,G) E=THERMAL"
    }
   ],
   "gammas": [
    {
     "energy": {
      "unit": "keV",
      "value": 130.873,
      "uncertainty": {
       "type": "symmetric",
       "value": 0.005
      }
     },
     "gammaIntensity": {
      "value": 2.4,
      "uncertainty": {
       "type": "symmetric",
       "value": 0.4
      }
     },
     "initialLevelIndex": 41,
     "finalLevelIndex": 32
    },
    {
     "energy": {
      "unit": "keV",
      "value": 244.332,
      "uncertainty": {
       "type": "symmetric",
       "value": 0.002
      }
     },
     "gammaIntensity": {
      "value": 100,
      "uncertainty": {
       "type": "symmetric",
       "value": 11
      }
     },
     "initialLevelIndex": 41,
     "finalLevelIndex": 25,
     "multipolarity": {
      "stringRepresentation": "E2",
      "spins": [
       {
        "spin": 2
       }
      ],
      "parity": "+"
     },
     "theoreticalInternalConversionCoefficients": {
      "totalValue": {
       "value": 0.1445,
       "uncertainty": {
        "type": "unreported"
       }
      },
      "shellValues": [
       {
        "includesOuterShells": false,
        "shell": "K",
        "value": 0.0948,
        "uncertainty": {
         "type": "symmetric",
         "value": 0.0014
        }
       },
       {
        "includesOuterShells": false,
        "shell": "L",
        "value": 0.0381,
        "uncertainty": {
         "type": "symmetric",
         "value": 0.0006
        }
       },
       {
        "includesOuterShells": false,
        "shell": "M",
        "value": 0.0092,
        "uncertainty": {
         "type": "symmetric",
         "value": 0.00013
        }
       },
       {
        "includesOuterShells": false,
        "shell": "N",
        "value": 0.00213,
        "uncertainty": {
         "type": "symmetric",
         "value": 0.00003
        }
       },
       {
        "includesOuterShells": false,
        "shell": "O",
        "value": 0.000273,
        "uncertainty": {
         "type": "symmetric",
         "value": 0.000004
        }
       },
       {
        "includesOuterShells": false,
        "shell": "P",
        "value": 0.00000571,
        "uncertainty": {
         "type": "symmetric",
         "value": 8e-8
        }
       }
      ]
     },
     "comments": [
      {
       "type": "comment",
       "head": [
        {
         "name": "M"
        }
       ],
       "body": "\\ensuremath{\\alpha}(K)exp=0.076 \\textit{21}, \\ensuremath{\\alpha}(L1)exp=0.017 \\textit{6}, \\ensuremath{\\alpha}(L2)exp=0.009 \\textit{3}, \\ensuremath{\\alpha}(L3)exp=0.007 \\textit{3}, and \\ensuremath{\\alpha}(M2)exp=0.0042 \\textit{20} (1996Pe05); \\ensuremath{\\alpha}(K)exp=0.08 and \\ensuremath{\\alpha}(M)exp=0.006 (1971Ma45)."
      }
     ]
    },
    {
     "energy": {
      "unit": "keV",
      "value": 1030,
      "uncertainty": {
       "type": "symmetric",
       "value": 0.5
      }
     },
     "gammaIntensity": {
      "value": 23,
      "uncertainty": {
       "type": "symmetric",
       "value": 4
      }
     },
     "initialLevelIndex": 41,
     "finalLevelIndex": 1,
     "multipolarity": {
      "stringRepresentation": "M1(+E2)",
      "isMixedTransition": true,
      "spins": [
       {
        "spin": 1
       },
       {
        "spin": 2
       }
      ],
      "parity": "+"
     },
     "theoreticalInternalConversionCoefficients": {
      "totalValue": {
       "value": 0.00718,
       "uncertainty": {
        "type": "unreported"
       }
      },
      "shellValues": [
       {
        "includesOuterShells": false,
        "shell": "K",
        "value": 0.00605,
        "uncertainty": {
         "type": "symmetric",
         "value": 0.00009
        }
       },
       {
        "includesOuterShells": false,
        "shell": "L",
        "value": 0.00088,
        "uncertainty": {
         "type": "symmetric",
         "value": 0.000013
        }
       },
       {
        "includesOuterShells": false,
        "shell": "M",
        "value": 0.000197,
        "uncertainty": {
         "type": "symmetric",
         "value": 0.000003
        }
       },
       {
        "includesOuterShells": false,
        "shell": "N",
        "value": 0.0000464,
        "uncertainty": {
         "type": "symmetric",
         "value": 7e-7
        }
       },
       {
        "includesOuterShells": false,
        "shell": "O",
        "value": 0.00000692,
        "uncertainty": {
         "type": "symmetric",
         "value": 1e-7
        }
       },
       {
        "includesOuterShells": false,
        "shell": "P",
        "value": 4.38e-7,
        "uncertainty": {
         "type": "symmetric",
         "value": 7e-9
        }
       }
      ]
     },
     "comments": [
      {
       "type": "comment",
       "head": [
        {
         "name": "E"
        }
       ],
       "body": "1030.02 keV \\textit{4} in \\ensuremath{^{\\textnormal{176}}}Lu(n,\\ensuremath{\\gamma})"
      },
      {
       "type": "comment",
       "head": [
        {
         "name": "M"
        }
       ],
       "body": "\\ensuremath{\\alpha}(K)exp=0.0092 (1971Ma45)."
      }
     ]
    }
   ],
   "band": 21,
   "comments": [
    {
     "type": "comment",
     "head": [
      {
       "name": "J"
      }
     ],
     "body": "244.31\\ensuremath{\\gamma} E2 to (7/2\\ensuremath{^{+}}), 1030.0\\ensuremath{\\gamma} M1(+E2) to 9/2\\ensuremath{^{+}}; band assignment."
    }
   ]
  },
  {
   "energy": {
    "unit": "keV",
    "value": 1165.605,
    "uncertainty": {
     "type": "symmetric",
     "value": 0.013
    }
   },
   "spinParity": {
    "values": [
     {
      "twoTimesSpin": 9,
      "isTentativeSpin": false,
      "parity": "-",
      "isTentativeParity": false
     },
     {
      "twoTimesSpin": 11,
      "isTentativeSpin": false
     }
    ]
   },
   "isStable": false,
   "crossReferences": [
    {
     "dataset": "176LU(N,G) E=THERMAL"
    },
    {
     "dataset": "177YB B- DECAY"
    }
   ],
   "gammas": [
    {
     "energy": {
      "unit": "keV",
      "value": 714.2,
      "uncertainty": {
       "type": "symmetric",
       "value": 0.2
      }
     },
     "gammaIntensity": {
      "value": 26,
      "uncertainty": {
       "type": "symmetric",
       "value": 8
      }
     },
     "initialLevelIndex": 42,
     "finalLevelIndex": 6,
     "flags": [
      "Q"
     ]
    },
    {
     "energy": {
      "unit": "keV",
      "value": 876.586,
      "uncertainty": {
       "type": "symmetric",
       "value": 0.013
      }
     },
     "gammaIntensity": {
      "value": 100,
      "uncertainty": {
       "type": "symmetric",
       "value": 11
      }
     },
     "initialLevelIndex": 42,
     "finalLevelIndex": 4,
     "comments": [
      {
       "type": "comment",
       "head": [
        {
         "name": "RI"
        }
       ],
       "body": "From \\ensuremath{^{\\textnormal{177}}}Yb \\ensuremath{\\beta}\\ensuremath{^{-}} decay."
      }
     ]
    },
    {
     "energy": {
      "unit": "keV",
      "value": 1015.27,
      "uncertainty": {
       "type": "symmetric",
       "value": 0.08
      }
     },
     "gammaIntensity": {
      "value": 42,
      "uncertainty": {
       "type": "symmetric",
       "value": 8
      }
     },
     "initialLevelIndex": 42,
     "finalLevelIndex": 2,
     "comments": [
      {
       "type": "comment",
       "head": [
        {
         "name": "RI"
        }
       ],
       "body": "From \\ensuremath{^{\\textnormal{177}}}Yb \\ensuremath{\\beta}\\ensuremath{^{-}} decay."
      }
     ]
    }
   ],
   "comments": [
    {
     "type": "comment",
     "head": [
      {
       "name": "J"
      }
     ],
     "body": "1015.27\\ensuremath{\\gamma} to 9/2\\ensuremath{^{-}}, 714.2\\ensuremath{\\gamma} to 13/2\\ensuremath{^{-}}; direct feeding in \\ensuremath{^{\\textnormal{177}}}Yb \\ensuremath{\\beta}\\ensuremath{^{-}} decay (\\ensuremath{J^{\\pi}}=9/2\\ensuremath{^{+}})."
    }
   ]
  },
  {
   "energy": {
    "unit": "keV",
    "value": 1176.7986,
    "uncertainty": {
     "type": "symmetric",
     "value": 0.002
    }
   },
   "spinParity": {
    "values": [
     {
      "twoTimesSpin": 15,
      "isTentativeSpin": false,
      "parity": "+",
      "isTentativeParity": false
     }
    ]
   },
   "isStable": false,
   "flags": [
    "C"
   ],
   "crossReferences": [
    {
     "dataset": "176LU(N,G) E=THERMAL"
    },
    {
     "dataset": "(HI,XNG)"
    }
   ],
   "gammas": [
    {
     "energy": {
      "unit": "keV",
      "value": 191.503,
      "uncertainty": {
       "type": "symmetric",
       "value": 0.002
      }
     },
     "gammaIntensity": {
      "value": 100,
      "uncertainty": {
       "type": "symmetric",
       "value": 10
      }
     },
     "initialLevelIndex": 43,
     "finalLevelIndex": 31,
     "multipolarity": {
      "stringRepresentation": "M1(+E2)",
      "isMixedTransition": true,
      "spins": [
       {
        "spin": 1
       },
       {
        "spin": 2
       }
      ],
      "parity": "+"
     },
     "theoreticalInternalConversionCoefficients": {
      "totalValue": {
       "value": 0.584,
       "uncertainty": {
        "type": "unreported"
       }
      },
      "shellValues": [
       {
        "includesOuterShells": false,
        "shell": "K",
        "value": 0.488,
        "uncertainty": {
         "type": "symmetric",
         "value": 0.007
        }
       },
       {
        "includesOuterShells": false,
        "shell": "L",
        "value": 0.0747,
        "uncertainty": {
         "type": "symmetric",
         "value": 0.0011
        }
       },
       {
        "includesOuterShells": false,
        "shell": "M",
        "value": 0.0168,
        "uncertainty": {
         "type": "symmetric",
         "value": 0.00024
        }
       },
       {
        "includesOuterShells": false,
        "shell": "N",
        "value": 0.00397,
        "uncertainty": {
         "type": "symmetric",
         "value": 0.00006
        }
       },
       {
        "includesOuterShells": false,
        "shell": "O",
        "value": 0.000588,
        "uncertainty": {
         "type": "symmetric",
         "value": 0.000009
        }
       },
       {
        "includesOuterShells": false,
        "shell": "P",
        "value": 0.0000364,
        "uncertainty": {
         "type": "symmetric",
         "value": 6e-7
        }
       }
      ]
     },
     "comments": [
      {
       "type": "comment",
       "head": [
        {
         "name": "M"
        }
       ],
       "body": "\\ensuremath{\\alpha}(K)exp=0.52 \\textit{9}, \\ensuremath{\\alpha}(L1)exp=0.068 \\textit{15}, and \\ensuremath{\\alpha}(L2)exp=0.028 \\textit{7} (1996Pe05); \\ensuremath{\\alpha}(K)exp=0.38 and \\ensuremath{\\alpha}(L1)exp+\\ensuremath{\\alpha}(L2)exp=0.059 (1971Ma45)."
      }
     ]
    },
    {
     "energy": {
      "unit": "keV",
      "value": 360.104,
      "uncertainty": {
       "type": "symmetric",
       "value": 0.003
      }
     },
     "gammaIntensity": {
      "value": 58,
      "uncertainty": {
       "type": "symmetric",
       "value": 6
      }
     },
     "initialLevelIndex": 43,
     "finalLevelIndex": 20,
     "multipolarity": {
      "stringRepresentation": "E2",
      "spins": [
       {
        "spin": 2
       }
      ],
      "parity": "+"
     },
     "theoreticalInternalConversionCoefficients": {
      "totalValue": {
       "value": 0.0448,
       "uncertainty": {
        "type": "unreported"
       }
      },
      "shellValues": [
       {
        "includesOuterShells": false,
        "shell": "K",
        "value": 0.033,
        "uncertainty": {
         "type": "symmetric",
         "value": 0.0005
        }
       },
       {
        "includesOuterShells": false,
        "shell": "L",
        "value": 0.00908,
        "uncertainty": {
         "type": "symmetric",
         "value": 0.00013
        }
       },
       {
        "includesOuterShells": false,
        "shell": "M",
        "value": 0.00215,
        "uncertainty": {
         "type": "symmetric",
         "value": 0.00003
        }
       },
       {
        "includesOuterShells": false,
        "shell": "N",
        "value": 0.0005,
        "uncertainty": {
         "type": "symmetric",
         "value": 0.000007
        }
       },
       {
        "includesOuterShells": false,
        "shell": "O",
        "value": 0.0000667,
        "uncertainty": {
         "type": "symmetric",
         "value": 0.000001
        }
       },
       {
        "includesOuterShells": false,
        "shell": "P",
        "value": 0.00000214,
        "uncertainty": {
         "type": "symmetric",
         "value": 3e-8
        }
       }
      ]
     },
     "comments": [
      {
       "type": "comment",
       "head": [
        {
         "name": "M"
        }
       ],
       "body": "\\ensuremath{\\alpha}(K)exp=0.036 (1971Ma45)."
      }
     ]
    },
    {
     "energy": {
      "unit": "keV",
      "value": 540.567,
      "uncertainty": {
       "type": "symmetric",
       "value": 0.009
      }
     },
     "gammaIntensity": {
      "value": 15,
      "uncertainty": {
       "type": "symmetric",
       "value": 3
      }
     },
     "initialLevelIndex": 43,
     "finalLevelIndex": 11
    },
    {
     "energy": {
      "unit": "keV",
      "value": 725.359,
      "uncertainty": {
       "type": "symmetric",
       "value": 0.031
      }
     },
     "gammaIntensity": {
      "value": 7.1,
      "uncertainty": {
       "type": "symmetric",
       "value": 1.5
      }
     },
     "initialLevelIndex": 43,
     "finalLevelIndex": 6
    },
    {
     "energy": {
      "unit": "keV",
      "value": 736.142,
      "uncertainty": {
       "type": "symmetric",
       "value": 0.009
      }
     },
     "gammaIntensity": {
      "value": 18,
      "uncertainty": {
       "type": "symmetric",
       "value": 3
      }
     },
     "initialLevelIndex": 43,
     "finalLevelIndex": 5,
     "multipolarity": {
      "stringRepresentation": "M1(+E2)",
      "isMixedTransition": true,
      "spins": [
       {
        "spin": 1
       },
       {
        "spin": 2
       }
      ],
      "parity": "+"
     },
     "theoreticalInternalConversionCoefficients": {
      "totalValue": {
       "value": 0.01655,
       "uncertainty": {
        "type": "unreported"
       }
      },
      "shellValues": [
       {
        "includesOuterShells": false,
        "shell": "K",
        "value": 0.01392,
        "uncertainty": {
         "type": "symmetric",
         "value": 0.0002
        }
       },
       {
        "includesOuterShells": false,
        "shell": "L",
        "value": 0.00205,
        "uncertainty": {
         "type": "symmetric",
         "value": 0.00003
        }
       },
       {
        "includesOuterShells": false,
        "shell": "M",
        "value": 0.000458,
        "uncertainty": {
         "type": "symmetric",
         "value": 0.000007
        }
       },
       {
        "includesOuterShells": false,
        "shell": "N",
        "value": 0.0001082,
        "uncertainty": {
         "type": "symmetric",
         "value": 0.0000016
        }
       },
       {
        "includesOuterShells": false,
        "shell": "O",
        "value": 0.00001611,
        "uncertainty": {
         "type": "symmetric",
         "value": 2.3e-7
        }
       },
       {
        "includesOuterShells": false,
        "shell": "P",
        "value": 0.000001014,
        "uncertainty": {
         "type": "symmetric",
         "value": 1.5e-8
        }
       }
      ]
     },
     "comments": [
      {
       "type": "comment",
       "head": [
        {
         "name": "M"
        }
       ],
       "body": "\\ensuremath{\\alpha}(K)exp=0.015 (1971Ma45)."
      }
     ]
    },
    {
     "energy": {
      "unit": "keV",
      "value": 908.035,
      "uncertainty": {
       "type": "symmetric",
       "value": 0.01
      }
     },
     "gammaIntensity": {
      "value": 95,
      "uncertainty": {
       "type": "symmetric",
       "value": 12
      }
     },
     "initialLevelIndex": 43,
     "finalLevelIndex": 3
    }
   ],
   "band": 2,
   "comments": [
    {
     "type": "comment",
     "head": [
      {
       "name": "J"
      }
     ],
     "body": "191.503\\ensuremath{\\gamma} M1(+E2) to 13/2\\ensuremath{^{+}}, 360.104\\ensuremath{\\gamma} E2 to 11/2\\ensuremath{^{+}}; band assignment."
    }
   ]
  },
  {
   "energy": {
    "unit": "keV",
    "value": 1184.4,
    "uncertainty": {
     "type": "unreported"
    }
   },
   "isStable": false,
   "flags": [
    "Z"
   ],
   "crossReferences": [
    {
     "dataset": "176LU(N,G) E=THERMAL"
    }
   ]
  },
  {
   "energy": {
    "unit": "keV",
    "value": 1187.74,
    "uncertainty": {
     "type": "symmetric",
     "value": 0.009
    }
   },
   "spinParity": {
    "values": [
     {
      "twoTimesSpin": 11,
      "isTentativeSpin": true,
      "parity": "-",
      "isTentativeParity": true
     }
    ]
   },
   "isStable": false,
   "flags": [
    "y"
   ],
   "crossReferences": [
    {
     "dataset": "176LU(N,G) E=THERMAL"
    },
    {
     "dataset": "176YB(3HE,D),(A,T)",
     "level": 1190
    },
    {
     "dataset": "178HF(T,A)",
     "level": 1191
    }
   ],
   "gammas": [
    {
     "energy": {
      "unit": "keV",
      "value": 515.798,
      "uncertainty": {
       "type": "symmetric",
       "value": 0.009
      }
     },
     "gammaIntensity": {
      "value": 9.3,
      "uncertainty": {
       "type": "symmetric",
       "value": 1
      }
     },
     "initialLevelIndex": 45,
     "finalLevelIndex": 13
    },
    {
     "energy": {
      "unit": "keV",
      "value": 898.8,
      "uncertainty": {
       "type": "symmetric",
       "value": 0.6
      }
     },
     "gammaIntensity": {
      "value": 93,
      "uncertainty": {
       "type": "symmetric",
       "value": 10
      }
     },
     "initialLevelIndex": 45,
     "finalLevelIndex": 4,
     "comments": [
      {
       "type": "comment",
       "head": [
        {
         "name": "E"
        }
       ],
       "body": "899.060 keV \\textit{9} in \\ensuremath{^{\\textnormal{176}}}Lu(n,\\ensuremath{\\gamma})"
      }
     ]
    },
    {
     "energy": {
      "unit": "keV",
      "value": 1066,
      "uncertainty": {
       "type": "symmetric",
       "value": 0.5
      }
     },
     "gammaIntensity": {
      "value": 100,
      "uncertainty": {
       "type": "symmetric",
       "value": 15
      }
     },
     "initialLevelIndex": 45,
     "finalLevelIndex": 1,
     "comments": [
      {
       "type": "comment",
       "head": [
        {
         "name": "E"
        }
       ],
       "body": "1066.03 keV \\textit{3} in \\ensuremath{^{\\textnormal{176}}}Lu(n,\\ensuremath{\\gamma})"
      }
     ]
    }
   ],
   "band": 26
  },
  {
   "energy": {
    "unit": "keV",
    "value": 1201.644,
    "uncertainty": {
     "type": "symmetric",
     "value": 0.003
    }
   },
   "spinParity": {
    "values": [
     {
      "twoTimesSpin": 17,
      "isTentativeSpin": false,
      "parity": "-",
      "isTentativeParity": false
     }
    ]
   },
   "isStable": false,
   "flags": [
    "E"
   ],
   "crossReferences": [
    {
     "dataset": "176LU(N,G) E=THERMAL"
    },
    {
     "dataset": "(HI,XNG)"
    }
   ],
   "gammas": [
    {
     "energy": {
      "unit": "keV",
      "value": 244.332,
      "uncertainty": {
       "type": "symmetric",
       "value": 0.002
      }
     },
     "gammaIntensity": {
      "value": 100,
      "uncertainty": {
       "type": "unreported"
      }
     },
     "initialLevelIndex": 46,
     "finalLevelIndex": 28,
     "multipolarity": {
      "stringRepresentation": "E2",
      "spins": [
       {
        "spin": 2
       }
      ],
      "parity": "+"
     },
     "theoreticalInternalConversionCoefficients": {
      "totalValue": {
       "value": 0.1445,
       "uncertainty": {
        "type": "unreported"
       }
      },
      "shellValues": [
       {
        "includesOuterShells": false,
        "shell": "K",
        "value": 0.0948,
        "uncertainty": {
         "type": "symmetric",
         "value": 0.0014
        }
       },
       {
        "includesOuterShells": false,
        "shell": "L",
        "value": 0.0381,
        "uncertainty": {
         "type": "symmetric",
         "value": 0.0006
        }
       },
       {
        "includesOuterShells": false,
        "shell": "M",
        "value": 0.0092,
        "uncertainty": {
         "type": "symmetric",
         "value": 0.00013
        }
       },
       {
        "includesOuterShells": false,
        "shell": "N",
        "value": 0.00213,
        "uncertainty": {
         "type": "symmetric",
         "value": 0.00003
        }
       },
       {
        "includesOuterShells": false,
        "shell": "O",
        "value": 0.000273,
        "uncertainty": {
         "type": "symmetric",
         "value": 0.000004
        }
       },
       {
        "includesOuterShells": false,
        "shell": "P",
        "value": 0.00000571,
        "uncertainty": {
         "type": "symmetric",
         "value": 8e-8
        }
       }
      ]
     },
     "comments": [
      {
       "type": "comment",
       "head": [
        {
         "name": "M"
        }
       ],
       "body": "\\ensuremath{\\alpha}(K)exp=0.076 \\textit{21}, \\ensuremath{\\alpha}(L1)exp=0.017 \\textit{6}, \\ensuremath{\\alpha}(L2)exp=0.009 \\textit{3}, \\ensuremath{\\alpha}(L3)exp=0.007 \\textit{3}, and \\ensuremath{\\alpha}(M2)exp=0.004 \\textit{2} (1996Pe05); \\ensuremath{\\alpha}(K)exp=0.08 and \\ensuremath{\\alpha}(M)exp=0.006 (1971Ma45)."
      }
     ]
    }
   ],
   "band": 4,
   "comments": [
    {
     "type": "comment",
     "head": [
      {
       "name": "J"
      }
     ],
     "body": "244.332\\ensuremath{\\gamma} E2 to 13/2\\ensuremath{^{-}}; band assignment."
    }
   ]
  },
  {
   "energy": {
    "unit": "keV",
    "value": 1230.62,
    "uncertainty": {
     "type": "symmetric",
     "value": 0.018
    }
   },
   "spinParity": {
    "values": [
     {
      "twoTimesSpin": 11,
      "isTentativeSpin": false,
      "parity": "+",
      "isTentativeParity": false
     }
    ]
   },
   "isStable": false,
   "halfLife": {
    "unit": "ps",
    "value": 60,
    "uncertainty": {
     "type": "symmetric",
     "value": 15
    }
   },
   "flags": [
    "q"
   ],
   "crossReferences": [
    {
     "dataset": "176LU(N,G) E=THERMAL"
    },
    {
     "dataset": "177YB B- DECAY"
    },
    {
     "dataset": "(HI,XNG)"
    }
   ],
   "gammas": [
    {
     "energy": {
      "unit": "keV",
      "value": 779.3,
      "uncertainty": {
       "type": "symmetric",
       "value": 0.2
      }
     },
     "gammaIntensity": {
      "value": 1.93,
      "uncertainty": {
       "type": "symmetric",
       "value": 0.1
      }
     },
     "initialLevelIndex": 47,
     "finalLevelIndex": 6,
     "multipolarity": {
      "stringRepresentation": "[E1]",
      "spins": [
       {
        "spin": 1,
        "evaluatorInferred": true
       }
      ],
      "parity": "-"
     },
     "theoreticalInternalConversionCoefficients": {
      "totalValue": {
       "value": 0.00252,
       "uncertainty": {
        "type": "unreported"
       }
      },
      "shellValues": [
       {
        "includesOuterShells": false,
        "shell": "K",
        "value": 0.00213,
        "uncertainty": {
         "type": "symmetric",
         "value": 0.00003
        }
       },
       {
        "includesOuterShells": false,
        "shell": "L",
        "value": 0.000299,
        "uncertainty": {
         "type": "symmetric",
         "value": 0.000005
        }
       },
       {
        "includesOuterShells": false,
        "shell": "M",
        "value": 0.0000664,
        "uncertainty": {
         "type": "symmetric",
         "value": 0.000001
        }
       },
       {
        "includesOuterShells": false,
        "shell": "N",
        "value": 0.00001562,
        "uncertainty": {
         "type": "symmetric",
         "value": 2.2e-7
        }
       },
       {
        "includesOuterShells": false,
        "shell": "O",
        "value": 0.0000023,
        "uncertainty": {
         "type": "symmetric",
         "value": 4e-8
        }
       },
       {
        "includesOuterShells": false,
        "shell": "P",
        "value": 1.396e-7,
        "uncertainty": {
         "type": "symmetric",
         "value": 2e-9
        }
       }
      ]
     },
     "reducedTransitionProbabilities": [
      {
       "multipolarity": "E1",
       "unit": "W.u.",
       "value": 1.1e-7,
       "uncertainty": {
        "type": "symmetric",
        "value": 3e-8
       }
      }
     ],
     "flags": [
      "Q"
     ]
    },
    {
     "energy": {
      "unit": "keV",
      "value": 790.3,
      "uncertainty": {
       "type": "symmetric",
       "value": 0.2
      }
     },
     "gammaIntensity": {
      "value": 0.15,
      "uncertainty": {
       "type": "symmetric",
       "value": 0.05
      }
     },
     "initialLevelIndex": 47,
     "finalLevelIndex": 5,
     "multipolarity": {
      "stringRepresentation": "[M1+E2]",
      "isMixedTransition": true,
      "spins": [
       {
        "spin": 1,
        "evaluatorInferred": true
       },
       {
        "spin": 2,
        "evaluatorInferred": true
       }
      ],
      "parity": "+"
     },
     "theoreticalInternalConversionCoefficients": {
      "totalValue": {
       "value": 0.01385,
       "uncertainty": {
        "type": "unreported"
       }
      },
      "shellValues": [
       {
        "includesOuterShells": false,
        "shell": "K",
        "value": 0.01165,
        "uncertainty": {
         "type": "symmetric",
         "value": 0.00017
        }
       },
       {
        "includesOuterShells": false,
        "shell": "L",
        "value": 0.00171,
        "uncertainty": {
         "type": "symmetric",
         "value": 0.000024
        }
       },
       {
        "includesOuterShells": false,
        "shell": "M",
        "value": 0.000383,
        "uncertainty": {
         "type": "symmetric",
         "value": 0.000006
        }
       },
       {
        "includesOuterShells": false,
        "shell": "N",
        "value": 0.0000904,
        "uncertainty": {
         "type": "symmetric",
         "value": 0.0000013
        }
       },
       {
        "includesOuterShells": false,
        "shell": "O",
        "value": 0.00001345,
        "uncertainty": {
         "type": "symmetric",
         "value": 1.9e-7
        }
       },
       {
        "includesOuterShells": false,
        "shell": "P",
        "value": 8.48e-7,
        "uncertainty": {
         "type": "symmetric",
         "value": 1.2e-8
        }
       }
      ]
     },
     "flags": [
      "Q"
     ]
    },
    {
     "energy": {
      "unit": "keV",
      "value": 941.8,
      "uncertainty": {
       "type": "symmetric",
       "value": 0.1
      }
     },
     "gammaIntensity": {
      "value": 18.3,
      "uncertainty": {
       "type": "symmetric",
       "value": 0.5
      }
     },
     "initialLevelIndex": 47,
     "finalLevelIndex": 4,
     "multipolarity": {
      "stringRepresentation": "E1",
      "spins": [
       {
        "spin": 1
       }
      ],
      "parity": "-"
     },
     "theoreticalInternalConversionCoefficients": {
      "totalValue": {
       "value": 0.00175,
       "uncertainty": {
        "type": "unreported"
       }
      },
      "shellValues": [
       {
        "includesOuterShells": false,
        "shell": "K",
        "value": 0.001486,
        "uncertainty": {
         "type": "symmetric",
         "value": 0.000021
        }
       },
       {
        "includesOuterShells": false,
        "shell": "L",
        "value": 0.000206,
        "uncertainty": {
         "type": "symmetric",
         "value": 0.000003
        }
       },
       {
        "includesOuterShells": false,
        "shell": "M",
        "value": 0.0000457,
        "uncertainty": {
         "type": "symmetric",
         "value": 7e-7
        }
       },
       {
        "includesOuterShells": false,
        "shell": "N",
        "value": 0.00001077,
        "uncertainty": {
         "type": "symmetric",
         "value": 1.5e-7
        }
       },
       {
        "includesOuterShells": false,
        "shell": "O",
        "value": 0.000001589,
        "uncertainty": {
         "type": "symmetric",
         "value": 2.3e-8
        }
       },
       {
        "includesOuterShells": false,
        "shell": "P",
        "value": 9.78e-8,
        "uncertainty": {
         "type": "symmetric",
         "value": 1.4e-9
        }
       }
      ]
     },
     "reducedTransitionProbabilities": [
      {
       "multipolarity": "E1",
       "unit": "W.u.",
       "value": 6e-7,
       "uncertainty": {
        "type": "symmetric",
        "value": 1.6e-7
       }
      }
     ],
     "flags": [
      "Q"
     ],
     "comments": [
      {
       "type": "comment",
       "head": [
        {
         "name": "M"
        }
       ],
       "body": "From \\ensuremath{\\alpha}(K)exp (1964Ew04)"
      }
     ]
    },
    {
     "energy": {
      "unit": "keV",
      "value": 962,
      "uncertainty": {
       "type": "symmetric",
       "value": 0.5
      }
     },
     "gammaIntensity": {
      "value": 0.32,
      "uncertainty": {
       "type": "symmetric",
       "value": 0.02
      }
     },
     "initialLevelIndex": 47,
     "finalLevelIndex": 3,
     "multipolarity": {
      "stringRepresentation": "[M1+E2]",
      "isMixedTransition": true,
      "spins": [
       {
        "spin": 1,
        "evaluatorInferred": true
       },
       {
        "spin": 2,
        "evaluatorInferred": true
       }
      ],
      "parity": "+"
     },
     "theoreticalInternalConversionCoefficients": {
      "totalValue": {
       "value": 0.00849,
       "uncertainty": {
        "type": "unreported"
       }
      },
      "shellValues": [
       {
        "includesOuterShells": false,
        "shell": "K",
        "value": 0.00715,
        "uncertainty": {
         "type": "symmetric",
         "value": 0.0001
        }
       },
       {
        "includesOuterShells": false,
        "shell": "L",
        "value": 0.001043,
        "uncertainty": {
         "type": "symmetric",
         "value": 0.000015
        }
       },
       {
        "includesOuterShells": false,
        "shell": "M",
        "value": 0.000233,
        "uncertainty": {
         "type": "symmetric",
         "value": 0.000004
        }
       },
       {
        "includesOuterShells": false,
        "shell": "N",
        "value": 0.0000551,
        "uncertainty": {
         "type": "symmetric",
         "value": 8e-7
        }
       },
       {
        "includesOuterShells": false,
        "shell": "O",
        "value": 0.0000082,
        "uncertainty": {
         "type": "symmetric",
         "value": 1.2e-7
        }
       },
       {
        "includesOuterShells": false,
        "shell": "P",
        "value": 5.19e-7,
        "uncertainty": {
         "type": "symmetric",
         "value": 8e-9
        }
       }
      ]
     },
     "flags": [
      "Q"
     ]
    },
    {
     "energy": {
      "unit": "keV",
      "value": 1080.204,
      "uncertainty": {
       "type": "symmetric",
       "value": 0.018
      }
     },
     "gammaIntensity": {
      "value": 100,
      "uncertainty": {
       "type": "symmetric",
       "value": 3
      }
     },
     "initialLevelIndex": 47,
     "finalLevelIndex": 2,
     "multipolarity": {
      "stringRepresentation": "E1",
      "spins": [
       {
        "spin": 1
       }
      ],
      "parity": "-"
     },
     "theoreticalInternalConversionCoefficients": {
      "totalValue": {
       "value": 0.00136,
       "uncertainty": {
        "type": "unreported"
       }
      },
      "shellValues": [
       {
        "includesOuterShells": false,
        "shell": "K",
        "value": 0.001155,
        "uncertainty": {
         "type": "symmetric",
         "value": 0.000017
        }
       },
       {
        "includesOuterShells": false,
        "shell": "L",
        "value": 0.0001591,
        "uncertainty": {
         "type": "symmetric",
         "value": 0.0000023
        }
       },
       {
        "includesOuterShells": false,
        "shell": "M",
        "value": 0.0000353,
        "uncertainty": {
         "type": "symmetric",
         "value": 5e-7
        }
       },
       {
        "includesOuterShells": false,
        "shell": "N",
        "value": 0.00000831,
        "uncertainty": {
         "type": "symmetric",
         "value": 1.2e-7
        }
       },
       {
        "includesOuterShells": false,
        "shell": "O",
        "value": 0.000001229,
        "uncertainty": {
         "type": "symmetric",
         "value": 1.8e-8
        }
       },
       {
        "includesOuterShells": false,
        "shell": "P",
        "value": 7.62e-8,
        "uncertainty": {
         "type": "symmetric",
         "value": 1.1e-9
        }
       }
      ]
     },
     "reducedTransitionProbabilities": [
      {
       "multipolarity": "E1",
       "unit": "W.u.",
       "value": 0.0000022,
       "uncertainty": {
        "type": "symmetric",
        "value": 6e-7
       }
      }
     ],
     "comments": [
      {
       "type": "comment",
       "head": [
        {
         "name": "RI"
        }
       ],
       "body": "From \\ensuremath{^{\\textnormal{177}}}Yb \\ensuremath{\\beta}\\ensuremath{^{-}} decay."
      },
      {
       "type": "comment",
       "head": [
        {
         "name": "M"
        }
       ],
       "body": "\\ensuremath{\\alpha}(K)exp\\ensuremath{>}0.0009 (1964Jo03); \\ensuremath{\\alpha}(K)exp (1964Ew04); \\ensuremath{\\alpha}(K)exp=0.0023 \\textit{1} (1971Ma45)."
      }
     ]
    },
    {
     "energy": {
      "unit": "keV",
      "value": 1109.2,
      "uncertainty": {
       "type": "symmetric",
       "value": 0.2
      }
     },
     "gammaIntensity": {
      "value": 3.5,
      "uncertainty": {
       "type": "symmetric",
       "value": 0.1
      }
     },
     "initialLevelIndex": 47,
     "finalLevelIndex": 1,
     "multipolarity": {
      "stringRepresentation": "M1+E2",
      "isMixedTransition": true,
      "spins": [
       {
        "spin": 1
       },
       {
        "spin": 2
       }
      ],
      "parity": "+",
      "mixingRatio": {
       "isAbsoluteValue": true,
       "value": 0.7,
       "uncertainty": {
        "type": "asymmetric",
        "upperLimit": 0.6,
        "lowerLimit": 0.2
       }
      }
     },
     "theoreticalInternalConversionCoefficients": {
      "totalValue": {
       "value": 0.0051,
       "uncertainty": {
        "type": "symmetric",
        "value": 0.0009
       }
      },
      "pairCreationValue": {
       "value": 4e-7,
       "uncertainty": {
        "type": "symmetric",
        "value": 4e-8
       }
      },
      "shellValues": [
       {
        "includesOuterShells": false,
        "shell": "K",
        "value": 0.0043,
        "uncertainty": {
         "type": "symmetric",
         "value": 0.0008
        }
       },
       {
        "includesOuterShells": false,
        "shell": "L",
        "value": 0.00063,
        "uncertainty": {
         "type": "symmetric",
         "value": 0.0001
        }
       },
       {
        "includesOuterShells": false,
        "shell": "M",
        "value": 0.00014,
        "uncertainty": {
         "type": "symmetric",
         "value": 0.000022
        }
       },
       {
        "includesOuterShells": false,
        "shell": "N",
        "value": 0.000033,
        "uncertainty": {
         "type": "symmetric",
         "value": 0.000005
        }
       },
       {
        "includesOuterShells": false,
        "shell": "O",
        "value": 0.0000049,
        "uncertainty": {
         "type": "symmetric",
         "value": 8e-7
        }
       },
       {
        "includesOuterShells": false,
        "shell": "P",
        "value": 3e-7,
        "uncertainty": {
         "type": "symmetric",
         "value": 6e-8
        }
       }
      ]
     },
     "reducedTransitionProbabilities": [
      {
       "multipolarity": "M1",
       "unit": "W.u.",
       "value": 0.000005,
       "uncertainty": {
        "type": "symmetric",
        "value": 0.000003
       }
      },
      {
       "multipolarity": "E2",
       "unit": "W.u.",
       "value": 0.0008,
       "uncertainty": {
        "type": "asymmetric",
        "upperLimit": 0.001,
        "lowerLimit": 0.0008
       }
      }
     ],
     "flags": [
      "Q"
     ],
     "comments": [
      {
       "type": "comment",
       "head": [
        {
         "name": "M"
        },
        {
         "name": "MR"
        }
       ],
       "body": "From \\ensuremath{\\gamma}\\ensuremath{\\gamma}(\\ensuremath{\\theta}) in 1995Ya21"
      }
     ]
    },
    {
     "energy": {
      "unit": "keV",
      "value": 1231,
      "uncertainty": {
       "type": "symmetric",
       "value": 0.3
      }
     },
     "gammaIntensity": {
      "value": 6.1,
      "uncertainty": {
       "type": "symmetric",
       "value": 0.2
      }
     },
     "initialLevelIndex": 47,
     "finalLevelIndex": 0,
     "multipolarity": {
      "stringRepresentation": "E2",
      "spins": [
       {
        "spin": 2
       }
      ],
      "parity": "+"
     },
     "theoreticalInternalConversionCoefficients": {
      "totalValue": {
       "value": 0.00258,
       "uncertainty": {
        "type": "unreported"
       }
      },
      "pairCreationValue": {
       "value": 0.00000827,
       "uncertainty": {
        "type": "symmetric",
        "value": 1.3e-7
       }
      },
      "shellValues": [
       {
        "includesOuterShells": false,
        "shell": "K",
        "value": 0.00215,
        "uncertainty": {
         "type": "symmetric",
         "value": 0.00003
        }
       },
       {
        "includesOuterShells": false,
        "shell": "L",
        "value": 0.000329,
        "uncertainty": {
         "type": "symmetric",
         "value": 0.000005
        }
       },
       {
        "includesOuterShells": false,
        "shell": "M",
        "value": 0.0000738,
        "uncertainty": {
         "type": "symmetric",
         "value": 0.0000011
        }
       },
       {
        "includesOuterShells": false,
        "shell": "N",
        "value": 0.00001738,
        "uncertainty": {
         "type": "symmetric",
         "value": 2.5e-7
        }
       },
       {
        "includesOuterShells": false,
        "shell": "O",
        "value": 0.00000254,
        "uncertainty": {
         "type": "symmetric",
         "value": 4e-8
        }
       },
       {
        "includesOuterShells": false,
        "shell": "P",
        "value": 1.486e-7,
        "uncertainty": {
         "type": "symmetric",
         "value": 2.1e-9
        }
       }
      ]
     },
     "reducedTransitionProbabilities": [
      {
       "multipolarity": "E2",
       "unit": "W.u.",
       "value": 0.0026,
       "uncertainty": {
        "type": "symmetric",
        "value": 0.0007
       }
      }
     ],
     "flags": [
      "Q"
     ],
     "comments": [
      {
       "type": "comment",
       "head": [
        {
         "name": "M"
        }
       ],
       "body": "\\ensuremath{\\alpha}(K)exp=0.0021 (1964Jo03) and \\ensuremath{\\alpha}(K)exp=0.0020 \\textit{8} (1971Ma45)."
      }
     ]
    }
   ],
   "band": 18,
   "comments": [
    {
     "type": "comment",
     "head": [
      {
       "name": "J"
      }
     ],
     "body": "1080.204\\ensuremath{\\gamma} E1 to 9/2\\ensuremath{^{-}} level, 1231.0\\ensuremath{\\gamma} E2 to 7/2\\ensuremath{^{+}}, 779.3\\ensuremath{\\gamma} to 13/2\\ensuremath{^{-}}; band assignment."
    },
    {
     "type": "comment",
     "head": [
      {
       "name": "T"
      }
     ],
     "body": "From \\ensuremath{\\beta}\\ensuremath{\\gamma}(\\ensuremath{\\Delta}t) in 1979Be54."
    }
   ]
  },
  {
   "energy": {
    "unit": "keV",
    "value": 1236.37,
    "uncertainty": {
     "type": "symmetric",
     "value": 0.12
    }
   },
   "spinParity": {
    "values": [
     {
      "twoTimesSpin": 7,
      "isTentativeSpin": false,
      "parity": "+",
      "isTentativeParity": false
     }
    ]
   },
   "isStable": false,
   "crossReferences": [
    {
     "dataset": "177YB B- DECAY"
    },
    {
     "dataset": "178HF(T,A)",
     "level": 1227
    }
   ],
   "gammas": [
    {
     "energy": {
      "unit": "keV",
      "value": 967.3,
      "uncertainty": {
       "type": "symmetric",
       "value": 0.2
      }
     },
     "gammaIntensity": {
      "value": 83,
      "uncertainty": {
       "type": "symmetric",
       "value": 9
      }
     },
     "initialLevelIndex": 48,
     "finalLevelIndex": 3,
     "flags": [
      "Q"
     ]
    },
    {
     "energy": {
      "unit": "keV",
      "value": 1114.6,
      "uncertainty": {
       "type": "symmetric",
       "value": 0.2
      }
     },
     "gammaIntensity": {
      "value": 9,
      "uncertainty": {
       "type": "symmetric",
       "value": 5
      }
     },
     "initialLevelIndex": 48,
     "finalLevelIndex": 1,
     "flags": [
      "Q"
     ]
    },
    {
     "energy": {
      "unit": "keV",
      "value": 1236.8,
      "uncertainty": {
       "type": "symmetric",
       "value": 0.2
      }
     },
     "gammaIntensity": {
      "value": 100,
      "uncertainty": {
       "type": "symmetric",
       "value": 9
      }
     },
     "initialLevelIndex": 48,
     "finalLevelIndex": 0,
     "flags": [
      "Q"
     ]
    }
   ],
   "comments": [
    {
     "type": "comment",
     "head": [
      {
       "name": "J"
      }
     ],
     "body": "1236.8\\ensuremath{\\gamma} to 7/2\\ensuremath{^{+}}, 967.3\\ensuremath{\\gamma} to 11/2\\ensuremath{^{+}}; \\ensuremath{J^{\\pi}}=(7/2\\ensuremath{^{+}}) from comparison of measured (t,\\ensuremath{\\alpha}) cross section in \\ensuremath{^{\\textnormal{178}}}Hf(t,\\ensuremath{\\alpha}) with calculated DWBA values. For the corresponding spectroscopic factor see 1992Bu12."
    }
   ]
  },
  {
   "energy": {
    "unit": "keV",
    "value": 1241.5,
    "uncertainty": {
     "type": "symmetric",
     "value": 0.21
    }
   },
   "spinParity": {
    "values": [
     {
      "twoTimesSpin": 7,
      "isTentativeSpin": false,
      "parity": "+",
      "isTentativeParity": false
     }
    ]
   },
   "isStable": false,
   "halfLife": {
    "unit": "ps",
    "value": 25,
    "uncertainty": {
     "type": "symmetric",
     "value": 8
    }
   },
   "crossReferences": [
    {
     "dataset": "176LU(N,G) E=THERMAL"
    },
    {
     "dataset": "177YB B- DECAY"
    }
   ],
   "gammas": [
    {
     "energy": {
      "unit": "keV",
      "value": 783.3,
      "uncertainty": {
       "type": "symmetric",
       "value": 0.3
      }
     },
     "gammaIntensity": {
      "value": 0.07,
      "uncertainty": {
       "type": "symmetric",
       "value": 0.03
      }
     },
     "initialLevelIndex": 49,
     "finalLevelIndex": 7,
     "multipolarity": {
      "stringRepresentation": "[M1+E2]",
      "isMixedTransition": true,
      "spins": [
       {
        "spin": 1,
        "evaluatorInferred": true
       },
       {
        "spin": 2,
        "evaluatorInferred": true
       }
      ],
      "parity": "+"
     },
     "theoreticalInternalConversionCoefficients": {
      "totalValue": {
       "value": 0.01416,
       "uncertainty": {
        "type": "unreported"
       }
      },
      "shellValues": [
       {
        "includesOuterShells": false,
        "shell": "K",
        "value": 0.01191,
        "uncertainty": {
         "type": "symmetric",
         "value": 0.00017
        }
       },
       {
        "includesOuterShells": false,
        "shell": "L",
        "value": 0.001749,
        "uncertainty": {
         "type": "symmetric",
         "value": 0.000025
        }
       },
       {
        "includesOuterShells": false,
        "shell": "M",
        "value": 0.000391,
        "uncertainty": {
         "type": "symmetric",
         "value": 0.000006
        }
       },
       {
        "includesOuterShells": false,
        "shell": "N",
        "value": 0.0000924,
        "uncertainty": {
         "type": "symmetric",
         "value": 0.0000013
        }
       },
       {
        "includesOuterShells": false,
        "shell": "O",
        "value": 0.00001376,
        "uncertainty": {
         "type": "symmetric",
         "value": 2e-7
        }
       },
       {
        "includesOuterShells": false,
        "shell": "P",
        "value": 8.67e-7,
        "uncertainty": {
         "type": "symmetric",
         "value": 1.3e-8
        }
       }
      ]
     },
     "flags": [
      "Q"
     ]
    },
    {
     "energy": {
      "unit": "keV",
      "value": 973.1,
      "uncertainty": {
       "type": "symmetric",
       "value": 0.2
      }
     },
     "gammaIntensity": {
      "value": 0.07,
      "uncertainty": {
       "type": "limit",
       "limitType": "upper",
       "isInclusive": false
      }
     },
     "initialLevelIndex": 49,
     "finalLevelIndex": 3,
     "flags": [
      "Q"
     ]
    },
    {
     "energy": {
      "unit": "keV",
      "value": 1120,
      "uncertainty": {
       "type": "symmetric",
       "value": 0.4
      }
     },
     "gammaIntensity": {
      "value": 16.8,
      "uncertainty": {
       "type": "symmetric",
       "value": 0.5
      }
     },
     "initialLevelIndex": 49,
     "finalLevelIndex": 1,
     "multipolarity": {
      "stringRepresentation": "M1+E2",
      "isMixedTransition": true,
      "spins": [
       {
        "spin": 1
       },
       {
        "spin": 2
       }
      ],
      "parity": "+",
      "mixingRatio": {
       "isAbsoluteValue": true,
       "value": -0.07,
       "uncertainty": {
        "type": "symmetric",
        "value": 0.03
       }
      }
     },
     "theoreticalInternalConversionCoefficients": {
      "totalValue": {
       "value": 0.00583,
       "uncertainty": {
        "type": "unreported"
       }
      },
      "pairCreationValue": {
       "value": 6.56e-7,
       "uncertainty": {
        "type": "symmetric",
        "value": 1.4e-8
       }
      },
      "shellValues": [
       {
        "includesOuterShells": false,
        "shell": "K",
        "value": 0.00492,
        "uncertainty": {
         "type": "symmetric",
         "value": 0.00007
        }
       },
       {
        "includesOuterShells": false,
        "shell": "L",
        "value": 0.000713,
        "uncertainty": {
         "type": "symmetric",
         "value": 0.000011
        }
       },
       {
        "includesOuterShells": false,
        "shell": "M",
        "value": 0.0001593,
        "uncertainty": {
         "type": "symmetric",
         "value": 0.0000023
        }
       },
       {
        "includesOuterShells": false,
        "shell": "N",
        "value": 0.0000376,
        "uncertainty": {
         "type": "symmetric",
         "value": 6e-7
        }
       },
       {
        "includesOuterShells": false,
        "shell": "O",
        "value": 0.00000561,
        "uncertainty": {
         "type": "symmetric",
         "value": 8e-8
        }
       },
       {
        "includesOuterShells": false,
        "shell": "P",
        "value": 3.55e-7,
        "uncertainty": {
         "type": "symmetric",
         "value": 5e-9
        }
       }
      ]
     },
     "reducedTransitionProbabilities": [
      {
       "multipolarity": "M1",
       "unit": "W.u.",
       "value": 0.00009,
       "uncertainty": {
        "type": "symmetric",
        "value": 0.00003
       }
      },
      {
       "multipolarity": "E2",
       "unit": "W.u.",
       "value": 0.00015,
       "uncertainty": {
        "type": "symmetric",
        "value": 0.00014
       }
      }
     ],
     "flags": [
      "Q"
     ],
     "comments": [
      {
       "type": "comment",
       "head": [
        {
         "name": "MR"
        }
       ],
       "body": "From \\ensuremath{\\gamma}\\ensuremath{\\gamma}(\\ensuremath{\\theta}) in 1995Ya21"
      }
     ]
    },
    {
     "energy": {
      "unit": "keV",
      "value": 1241.8,
      "uncertainty": {
       "type": "symmetric",
       "value": 0.4
      }
     },
     "gammaIntensity": {
      "value": 100,
      "uncertainty": {
       "type": "symmetric",
       "value": 4
      }
     },
     "initialLevelIndex": 49,
     "finalLevelIndex": 0,
     "multipolarity": {
      "stringRepresentation": "E2+M1",
      "isMixedTransition": true,
      "spins": [
       {
        "spin": 2
       },
       {
        "spin": 1
       }
      ],
      "parity": "+"
     },
     "theoreticalInternalConversionCoefficients": {
      "totalValue": {
       "value": 0.00456,
       "uncertainty": {
        "type": "unreported"
       }
      },
      "pairCreationValue": {
       "value": 0.00001248,
       "uncertainty": {
        "type": "symmetric",
        "value": 1.9e-7
       }
      },
      "shellValues": [
       {
        "includesOuterShells": false,
        "shell": "K",
        "value": 0.00383,
        "uncertainty": {
         "type": "symmetric",
         "value": 0.00006
        }
       },
       {
        "includesOuterShells": false,
        "shell": "L",
        "value": 0.000554,
        "uncertainty": {
         "type": "symmetric",
         "value": 0.000008
        }
       },
       {
        "includesOuterShells": false,
        "shell": "M",
        "value": 0.0001237,
        "uncertainty": {
         "type": "symmetric",
         "value": 0.0000018
        }
       },
       {
        "includesOuterShells": false,
        "shell": "N",
        "value": 0.0000292,
        "uncertainty": {
         "type": "symmetric",
         "value": 4e-7
        }
       },
       {
        "includesOuterShells": false,
        "shell": "O",
        "value": 0.00000436,
        "uncertainty": {
         "type": "symmetric",
         "value": 7e-8
        }
       },
       {
        "includesOuterShells": false,
        "shell": "P",
        "value": 2.77e-7,
        "uncertainty": {
         "type": "symmetric",
         "value": 4e-9
        }
       }
      ]
     },
     "flags": [
      "Q"
     ],
     "comments": [
      {
       "type": "comment",
       "head": [
        {
         "name": "M"
        }
       ],
       "body": "From \\ensuremath{\\alpha}(K)exp (1964Ew04) and \\ensuremath{\\alpha}(K)exp=0.0040 \\textit{32} (1971Ma45)."
      }
     ]
    }
   ],
   "comments": [
    {
     "type": "comment",
     "head": [
      {
       "name": "J"
      }
     ],
     "body": "From \\ensuremath{\\gamma}\\ensuremath{\\gamma}(\\ensuremath{\\theta}) in 1995Ya21; 1120.0\\ensuremath{\\gamma} M1+E2 to 9/2\\ensuremath{^{+}}, 783.3\\ensuremath{\\gamma} to 5/2\\ensuremath{^{+}}, 1241.8\\ensuremath{\\gamma} E2+M1 to 7/2\\ensuremath{^{+}}"
    },
    {
     "type": "comment",
     "head": [
      {
       "name": "T"
      }
     ],
     "body": "From \\ensuremath{\\beta}\\ensuremath{\\gamma}(\\ensuremath{\\Delta}t) in 1979Be54."
    }
   ]
  },
  {
   "energy": {
    "unit": "keV",
    "value": 1243,
    "uncertainty": {
     "type": "symmetric",
     "value": 0.4
    }
   },
   "spinParity": {
    "values": [
     {
      "twoTimesSpin": 25,
      "isTentativeSpin": false,
      "parity": "-",
      "isTentativeParity": false
     }
    ]
   },
   "isStable": false,
   "flags": [
    "F"
   ],
   "crossReferences": [
    {
     "dataset": "176LU(D,P)"
    },
    {
     "dataset": "(HI,XNG)"
    }
   ],
   "gammas": [
    {
     "energy": {
      "unit": "keV",
      "value": 272.8,
      "uncertainty": {
       "type": "symmetric",
       "value": 0.5
      }
     },
     "gammaIntensity": {
      "value": 100,
      "uncertainty": {
       "type": "unreported"
      }
     },
     "initialLevelIndex": 50,
     "finalLevelIndex": 29,
     "multipolarity": {
      "stringRepresentation": "[M1+E2]",
      "isMixedTransition": true,
      "spins": [
       {
        "spin": 1,
        "evaluatorInferred": true
       },
       {
        "spin": 2,
        "evaluatorInferred": true
       }
      ],
      "parity": "+"
     },
     "theoreticalInternalConversionCoefficients": {
      "totalValue": {
       "value": 0.221,
       "uncertainty": {
        "type": "symmetric",
        "value": 0.004
       }
      },
      "shellValues": [
       {
        "includesOuterShells": false,
        "shell": "K",
        "value": 0.185,
        "uncertainty": {
         "type": "symmetric",
         "value": 0.003
        }
       },
       {
        "includesOuterShells": false,
        "shell": "L",
        "value": 0.0281,
        "uncertainty": {
         "type": "symmetric",
         "value": 0.0005
        }
       },
       {
        "includesOuterShells": false,
        "shell": "M",
        "value": 0.00631,
        "uncertainty": {
         "type": "symmetric",
         "value": 0.0001
        }
       },
       {
        "includesOuterShells": false,
        "shell": "N",
        "value": 0.00149,
        "uncertainty": {
         "type": "symmetric",
         "value": 0.000023
        }
       },
       {
        "includesOuterShells": false,
        "shell": "O",
        "value": 0.000221,
        "uncertainty": {
         "type": "symmetric",
         "value": 0.000004
        }
       },
       {
        "includesOuterShells": false,
        "shell": "P",
        "value": 0.00001373,
        "uncertainty": {
         "type": "symmetric",
         "value": 2.1e-7
        }
       }
      ]
     },
     "flags": [
      "S"
     ]
    }
   ],
   "band": 8,
   "comments": [
    {
     "type": "comment",
     "head": [
      {
       "name": "J"
      }
     ],
     "body": "272.8\\ensuremath{\\gamma} to 23/2\\ensuremath{^{-}}; band assignment."
    }
   ]
  },
  {
   "energy": {
    "unit": "keV",
    "value": 1286.931,
    "uncertainty": {
     "type": "symmetric",
     "value": 0.004
    }
   },
   "spinParity": {
    "values": [
     {
      "twoTimesSpin": 11,
      "isTentativeSpin": false,
      "parity": "-",
      "isTentativeParity": false
     }
    ]
   },
   "isStable": false,
   "flags": [
    "E"
   ],
   "crossReferences": [
    {
     "dataset": "176LU(N,G) E=THERMAL"
    },
    {
     "assignment": "ambiguous",
     "dataset": "176YB(3HE,D),(A,T)",
     "level": 1294
    },
    {
     "dataset": "(HI,XNG)"
    }
   ],
   "gammas": [
    {
     "energy": {
      "unit": "keV",
      "value": 301.64,
      "uncertainty": {
       "type": "symmetric",
       "value": 0.012
      }
     },
     "gammaIntensity": {
      "value": 3.3,
      "uncertainty": {
       "type": "symmetric",
       "value": 1.3
      }
     },
     "initialLevelIndex": 51,
     "finalLevelIndex": 31
    },
    {
     "energy": {
      "unit": "keV",
      "value": 329.623,
      "uncertainty": {
       "type": "symmetric",
       "value": 0.005
      }
     },
     "gammaIntensity": {
      "value": 44,
      "uncertainty": {
       "type": "symmetric",
       "value": 5
      }
     },
     "initialLevelIndex": 51,
     "finalLevelIndex": 28,
     "multipolarity": {
      "stringRepresentation": "M1(+E2)",
      "isMixedTransition": true,
      "spins": [
       {
        "spin": 1
       },
       {
        "spin": 2
       }
      ],
      "parity": "+"
     },
     "theoreticalInternalConversionCoefficients": {
      "totalValue": {
       "value": 0.1328,
       "uncertainty": {
        "type": "unreported"
       }
      },
      "shellValues": [
       {
        "includesOuterShells": false,
        "shell": "K",
        "value": 0.1112,
        "uncertainty": {
         "type": "symmetric",
         "value": 0.0016
        }
       },
       {
        "includesOuterShells": false,
        "shell": "L",
        "value": 0.0168,
        "uncertainty": {
         "type": "symmetric",
         "value": 0.00024
        }
       },
       {
        "includesOuterShells": false,
        "shell": "M",
        "value": 0.00377,
        "uncertainty": {
         "type": "symmetric",
         "value": 0.00006
        }
       },
       {
        "includesOuterShells": false,
        "shell": "N",
        "value": 0.000891,
        "uncertainty": {
         "type": "symmetric",
         "value": 0.000013
        }
       },
       {
        "includesOuterShells": false,
        "shell": "O",
        "value": 0.0001322,
        "uncertainty": {
         "type": "symmetric",
         "value": 0.0000019
        }
       },
       {
        "includesOuterShells": false,
        "shell": "P",
        "value": 0.00000823,
        "uncertainty": {
         "type": "symmetric",
         "value": 1.2e-7
        }
       }
      ]
     },
     "comments": [
      {
       "type": "comment",
       "head": [
        {
         "name": "M"
        }
       ],
       "body": "\\ensuremath{\\alpha}(K)exp=0.14 \\textit{5} (1996Pe05) and \\ensuremath{\\alpha}(K)exp=0.15 (1971Ma45)."
      }
     ]
    },
    {
     "energy": {
      "unit": "keV",
      "value": 475.491,
      "uncertainty": {
       "type": "symmetric",
       "value": 0.005
      }
     },
     "gammaIntensity": {
      "value": 100,
      "uncertainty": {
       "type": "symmetric",
       "value": 10
      }
     },
     "initialLevelIndex": 51,
     "finalLevelIndex": 19,
     "multipolarity": {
      "stringRepresentation": "M1(+E2)",
      "isMixedTransition": true,
      "spins": [
       {
        "spin": 1
       },
       {
        "spin": 2
       }
      ],
      "parity": "+"
     },
     "theoreticalInternalConversionCoefficients": {
      "totalValue": {
       "value": 0.0506,
       "uncertainty": {
        "type": "unreported"
       }
      },
      "shellValues": [
       {
        "includesOuterShells": false,
        "shell": "K",
        "value": 0.0424,
        "uncertainty": {
         "type": "symmetric",
         "value": 0.0006
        }
       },
       {
        "includesOuterShells": false,
        "shell": "L",
        "value": 0.00633,
        "uncertainty": {
         "type": "symmetric",
         "value": 0.00009
        }
       },
       {
        "includesOuterShells": false,
        "shell": "M",
        "value": 0.00142,
        "uncertainty": {
         "type": "symmetric",
         "value": 0.00002
        }
       },
       {
        "includesOuterShells": false,
        "shell": "N",
        "value": 0.000335,
        "uncertainty": {
         "type": "symmetric",
         "value": 0.000005
        }
       },
       {
        "includesOuterShells": false,
        "shell": "O",
        "value": 0.0000499,
        "uncertainty": {
         "type": "symmetric",
         "value": 7e-7
        }
       },
       {
        "includesOuterShells": false,
        "shell": "P",
        "value": 0.00000312,
        "uncertainty": {
         "type": "symmetric",
         "value": 5e-8
        }
       }
      ]
     },
     "comments": [
      {
       "type": "comment",
       "head": [
        {
         "name": "M"
        }
       ],
       "body": "\\ensuremath{\\alpha}(K)exp=0.037 \\textit{14} and \\ensuremath{\\alpha}(L1)exp=0.014 \\textit{6} (1996Pe05) and \\ensuremath{\\alpha}(K)exp=0.031 (1971Ma45)."
      }
     ]
    }
   ],
   "band": 4,
   "comments": [
    {
     "type": "comment",
     "head": [
      {
       "name": "J"
      }
     ],
     "body": "329.623\\ensuremath{\\gamma} M1(+E2) to 13/2\\ensuremath{^{-}}; 475.491\\ensuremath{\\gamma} M1(+E2) to 9/2\\ensuremath{^{-}}; band assignment"
    }
   ]
  },
  {
   "energy": {
    "unit": "keV",
    "value": 1303.059,
    "uncertainty": {
     "type": "symmetric",
     "value": 0.0021
    }
   },
   "spinParity": {
    "values": [
     {
      "twoTimesSpin": 13,
      "isTentativeSpin": false,
      "parity": "+",
      "isTentativeParity": false
     }
    ]
   },
   "isStable": false,
   "flags": [
    "D"
   ],
   "crossReferences": [
    {
     "dataset": "176LU(N,G) E=THERMAL"
    },
    {
     "assignment": "ambiguous",
     "dataset": "176YB(3HE,D),(A,T)",
     "level": 1294
    },
    {
     "dataset": "(HI,XNG)"
    }
   ],
   "gammas": [
    {
     "energy": {
      "unit": "keV",
      "value": 317.768,
      "uncertainty": {
       "type": "symmetric",
       "value": 0.008
      }
     },
     "gammaIntensity": {
      "value": 4.1,
      "uncertainty": {
       "type": "symmetric",
       "value": 0.7
      }
     },
     "initialLevelIndex": 52,
     "finalLevelIndex": 31
    },
    {
     "energy": {
      "unit": "keV",
      "value": 322.873,
      "uncertainty": {
       "type": "symmetric",
       "value": 0.001
      }
     },
     "gammaIntensity": {
      "value": 92,
      "uncertainty": {
       "type": "symmetric",
       "value": 9
      }
     },
     "initialLevelIndex": 52,
     "finalLevelIndex": 30,
     "multipolarity": {
      "stringRepresentation": "M1(+E2)",
      "isMixedTransition": true,
      "spins": [
       {
        "spin": 1
       },
       {
        "spin": 2
       }
      ],
      "parity": "+"
     },
     "theoreticalInternalConversionCoefficients": {
      "totalValue": {
       "value": 0.1404,
       "uncertainty": {
        "type": "unreported"
       }
      },
      "shellValues": [
       {
        "includesOuterShells": false,
        "shell": "K",
        "value": 0.1175,
        "uncertainty": {
         "type": "symmetric",
         "value": 0.0017
        }
       },
       {
        "includesOuterShells": false,
        "shell": "L",
        "value": 0.01776,
        "uncertainty": {
         "type": "symmetric",
         "value": 0.00025
        }
       },
       {
        "includesOuterShells": false,
        "shell": "M",
        "value": 0.00399,
        "uncertainty": {
         "type": "symmetric",
         "value": 0.00006
        }
       },
       {
        "includesOuterShells": false,
        "shell": "N",
        "value": 0.000942,
        "uncertainty": {
         "type": "symmetric",
         "value": 0.000014
        }
       },
       {
        "includesOuterShells": false,
        "shell": "O",
        "value": 0.0001398,
        "uncertainty": {
         "type": "symmetric",
         "value": 0.000002
        }
       },
       {
        "includesOuterShells": false,
        "shell": "P",
        "value": 0.0000087,
        "uncertainty": {
         "type": "symmetric",
         "value": 1.3e-7
        }
       }
      ]
     },
     "comments": [
      {
       "type": "comment",
       "head": [
        {
         "name": "M"
        }
       ],
       "body": "\\ensuremath{\\alpha}(K)exp=0.16 \\textit{4} and \\ensuremath{\\alpha}(L1)exp=0.013 \\textit{4} (1996Pe05); \\ensuremath{\\alpha}(K)exp=0.16 and \\ensuremath{\\alpha}(L1)exp+\\ensuremath{\\alpha}(L2)exp=0.018 (1971Ma45)."
      }
     ]
    },
    {
     "energy": {
      "unit": "keV",
      "value": 346.392,
      "uncertainty": {
       "type": "symmetric",
       "value": 0.002
      }
     },
     "gammaIntensity": {
      "value": 100,
      "uncertainty": {
       "type": "symmetric",
       "value": 10
      }
     },
     "initialLevelIndex": 52,
     "finalLevelIndex": 27,
     "multipolarity": {
      "stringRepresentation": "E2",
      "spins": [
       {
        "spin": 2
       }
      ],
      "parity": "+"
     },
     "theoreticalInternalConversionCoefficients": {
      "totalValue": {
       "value": 0.0501,
       "uncertainty": {
        "type": "unreported"
       }
      },
      "shellValues": [
       {
        "includesOuterShells": false,
        "shell": "K",
        "value": 0.0366,
        "uncertainty": {
         "type": "symmetric",
         "value": 0.0006
        }
       },
       {
        "includesOuterShells": false,
        "shell": "L",
        "value": 0.01039,
        "uncertainty": {
         "type": "symmetric",
         "value": 0.00015
        }
       },
       {
        "includesOuterShells": false,
        "shell": "M",
        "value": 0.00247,
        "uncertainty": {
         "type": "symmetric",
         "value": 0.00004
        }
       },
       {
        "includesOuterShells": false,
        "shell": "N",
        "value": 0.000573,
        "uncertainty": {
         "type": "symmetric",
         "value": 0.000008
        }
       },
       {
        "includesOuterShells": false,
        "shell": "O",
        "value": 0.0000762,
        "uncertainty": {
         "type": "symmetric",
         "value": 0.0000011
        }
       },
       {
        "includesOuterShells": false,
        "shell": "P",
        "value": 0.00000236,
        "uncertainty": {
         "type": "symmetric",
         "value": 4e-8
        }
       }
      ]
     },
     "comments": [
      {
       "type": "comment",
       "head": [
        {
         "name": "M"
        }
       ],
       "body": "\\ensuremath{\\alpha}(K)exp=0.042 \\textit{8} and \\ensuremath{\\alpha}(L2)exp=0.010 \\textit{3} (1996Pe05)."
      }
     ]
    }
   ],
   "band": 3,
   "comments": [
    {
     "type": "comment",
     "head": [
      {
       "name": "J"
      }
     ],
     "body": "322.873\\ensuremath{\\gamma} M1(+E2) to 11/2\\ensuremath{^{+}}; 346.392\\ensuremath{\\gamma} E2 to 9/2\\ensuremath{^{+}}; band assignment."
    }
   ]
  },
  {
   "energy": {
    "unit": "keV",
    "value": 1305.917,
    "uncertainty": {
     "type": "symmetric",
     "value": 0.02
    }
   },
   "spinParity": {
    "values": [
     {
      "twoTimesSpin": 11,
      "isTentativeSpin": false,
      "parity": "+",
      "isTentativeParity": false
     }
    ]
   },
   "isStable": false,
   "flags": [
    "M"
   ],
   "crossReferences": [
    {
     "dataset": "176LU(N,G) E=THERMAL"
    },
    {
     "dataset": "176LU(D,P)"
    },
    {
     "assignment": "ambiguous",
     "dataset": "176YB(3HE,D),(A,T)",
     "level": 1294
    },
    {
     "dataset": "(HI,XNG)"
    }
   ],
   "gammas": [
    {
     "energy": {
      "unit": "keV",
      "value": 865.18,
      "uncertainty": {
       "type": "symmetric",
       "value": 0.17
      }
     },
     "gammaIntensity": {
      "value": 4.6,
      "uncertainty": {
       "type": "symmetric",
       "value": 1.4
      }
     },
     "initialLevelIndex": 53,
     "finalLevelIndex": 5,
     "multipolarity": {
      "stringRepresentation": "M1(+E2)",
      "isMixedTransition": true,
      "spins": [
       {
        "spin": 1
       },
       {
        "spin": 2
       }
      ],
      "parity": "+"
     },
     "theoreticalInternalConversionCoefficients": {
      "totalValue": {
       "value": 0.01105,
       "uncertainty": {
        "type": "unreported"
       }
      },
      "shellValues": [
       {
        "includesOuterShells": false,
        "shell": "K",
        "value": 0.0093,
        "uncertainty": {
         "type": "symmetric",
         "value": 0.00013
        }
       },
       {
        "includesOuterShells": false,
        "shell": "L",
        "value": 0.001361,
        "uncertainty": {
         "type": "symmetric",
         "value": 0.000019
        }
       },
       {
        "includesOuterShells": false,
        "shell": "M",
        "value": 0.000304,
        "uncertainty": {
         "type": "symmetric",
         "value": 0.000005
        }
       },
       {
        "includesOuterShells": false,
        "shell": "N",
        "value": 0.0000719,
        "uncertainty": {
         "type": "symmetric",
         "value": 0.000001
        }
       },
       {
        "includesOuterShells": false,
        "shell": "O",
        "value": 0.0000107,
        "uncertainty": {
         "type": "symmetric",
         "value": 1.5e-7
        }
       },
       {
        "includesOuterShells": false,
        "shell": "P",
        "value": 6.76e-7,
        "uncertainty": {
         "type": "symmetric",
         "value": 1e-8
        }
       }
      ]
     },
     "comments": [
      {
       "type": "comment",
       "head": [
        {
         "name": "M"
        }
       ],
       "body": "\\ensuremath{\\alpha}(K)exp=0.009 (1971Ma45)."
      }
     ]
    },
    {
     "energy": {
      "unit": "keV",
      "value": 1035.5,
      "uncertainty": {
       "type": "symmetric",
       "value": 0.5
      }
     },
     "gammaIntensity": {
      "value": 12.3,
      "uncertainty": {
       "type": "symmetric",
       "value": 1.9
      }
     },
     "initialLevelIndex": 53,
     "finalLevelIndex": 3,
     "multipolarity": {
      "stringRepresentation": "M1(+E2)",
      "isMixedTransition": true,
      "spins": [
       {
        "spin": 1
       },
       {
        "spin": 2
       }
      ],
      "parity": "+"
     },
     "theoreticalInternalConversionCoefficients": {
      "totalValue": {
       "value": 0.00708,
       "uncertainty": {
        "type": "unreported"
       }
      },
      "shellValues": [
       {
        "includesOuterShells": false,
        "shell": "K",
        "value": 0.00597,
        "uncertainty": {
         "type": "symmetric",
         "value": 0.00009
        }
       },
       {
        "includesOuterShells": false,
        "shell": "L",
        "value": 0.000868,
        "uncertainty": {
         "type": "symmetric",
         "value": 0.000013
        }
       },
       {
        "includesOuterShells": false,
        "shell": "M",
        "value": 0.000194,
        "uncertainty": {
         "type": "symmetric",
         "value": 0.000003
        }
       },
       {
        "includesOuterShells": false,
        "shell": "N",
        "value": 0.0000458,
        "uncertainty": {
         "type": "symmetric",
         "value": 7e-7
        }
       },
       {
        "includesOuterShells": false,
        "shell": "O",
        "value": 0.00000683,
        "uncertainty": {
         "type": "symmetric",
         "value": 1e-7
        }
       },
       {
        "includesOuterShells": false,
        "shell": "P",
        "value": 4.32e-7,
        "uncertainty": {
         "type": "symmetric",
         "value": 6e-9
        }
       }
      ]
     },
     "comments": [
      {
       "type": "comment",
       "head": [
        {
         "name": "E"
        }
       ],
       "body": "1035.48 keV \\textit{9} in \\ensuremath{^{176}}Lu(n,\\ensuremath{\\gamma})"
      },
      {
       "type": "comment",
       "head": [
        {
         "name": "M"
        }
       ],
       "body": "\\ensuremath{\\alpha}(K)exp=0.015 (1971Ma45)."
      }
     ]
    },
    {
     "energy": {
      "unit": "keV",
      "value": 1184.14,
      "uncertainty": {
       "type": "symmetric",
       "value": 0.06
      }
     },
     "gammaIntensity": {
      "value": 13.3,
      "uncertainty": {
       "type": "symmetric",
       "value": 2.5
      }
     },
     "initialLevelIndex": 53,
     "finalLevelIndex": 1,
     "multipolarity": {
      "stringRepresentation": "M1(+E2)",
      "isMixedTransition": true,
      "spins": [
       {
        "spin": 1
       },
       {
        "spin": 2
       }
      ],
      "parity": "+"
     },
     "theoreticalInternalConversionCoefficients": {
      "totalValue": {
       "value": 0.00511,
       "uncertainty": {
        "type": "unreported"
       }
      },
      "pairCreationValue": {
       "value": 0.00000448,
       "uncertainty": {
        "type": "symmetric",
        "value": 7e-8
       }
      },
      "shellValues": [
       {
        "includesOuterShells": false,
        "shell": "K",
        "value": 0.0043,
        "uncertainty": {
         "type": "symmetric",
         "value": 0.00006
        }
       },
       {
        "includesOuterShells": false,
        "shell": "L",
        "value": 0.000623,
        "uncertainty": {
         "type": "symmetric",
         "value": 0.000009
        }
       },
       {
        "includesOuterShells": false,
        "shell": "M",
        "value": 0.0001391,
        "uncertainty": {
         "type": "symmetric",
         "value": 0.000002
        }
       },
       {
        "includesOuterShells": false,
        "shell": "N",
        "value": 0.0000329,
        "uncertainty": {
         "type": "symmetric",
         "value": 5e-7
        }
       },
       {
        "includesOuterShells": false,
        "shell": "O",
        "value": 0.0000049,
        "uncertainty": {
         "type": "symmetric",
         "value": 7e-8
        }
       },
       {
        "includesOuterShells": false,
        "shell": "P",
        "value": 3.11e-7,
        "uncertainty": {
         "type": "symmetric",
         "value": 5e-9
        }
       }
      ]
     },
     "comments": [
      {
       "type": "comment",
       "head": [
        {
         "name": "M"
        }
       ],
       "body": "\\ensuremath{\\alpha}(K)exp=0.0084 \\textit{15} (1971Ma45)."
      }
     ]
    },
    {
     "energy": {
      "unit": "keV",
      "value": 1305.71,
      "uncertainty": {
       "type": "symmetric",
       "value": 0.03
      }
     },
     "gammaIntensity": {
      "value": 100,
      "uncertainty": {
       "type": "symmetric",
       "value": 15
      }
     },
     "initialLevelIndex": 53,
     "finalLevelIndex": 0,
     "multipolarity": {
      "stringRepresentation": "(E2)",
      "spins": [
       {
        "spin": 2
       }
      ],
      "parity": "+"
     },
     "theoreticalInternalConversionCoefficients": {
      "totalValue": {
       "value": 0.00232,
       "uncertainty": {
        "type": "unreported"
       }
      },
      "pairCreationValue": {
       "value": 0.0000192,
       "uncertainty": {
        "type": "symmetric",
        "value": 3e-7
       }
      },
      "shellValues": [
       {
        "includesOuterShells": false,
        "shell": "K",
        "value": 0.00193,
        "uncertainty": {
         "type": "symmetric",
         "value": 0.00003
        }
       },
       {
        "includesOuterShells": false,
        "shell": "L",
        "value": 0.00029,
        "uncertainty": {
         "type": "symmetric",
         "value": 0.000004
        }
       },
       {
        "includesOuterShells": false,
        "shell": "M",
        "value": 0.0000652,
        "uncertainty": {
         "type": "symmetric",
         "value": 0.000001
        }
       },
       {
        "includesOuterShells": false,
        "shell": "N",
        "value": 0.00001534,
        "uncertainty": {
         "type": "symmetric",
         "value": 2.2e-7
        }
       },
       {
        "includesOuterShells": false,
        "shell": "O",
        "value": 0.00000225,
        "uncertainty": {
         "type": "symmetric",
         "value": 4e-8
        }
       },
       {
        "includesOuterShells": false,
        "shell": "P",
        "value": 1.328e-7,
        "uncertainty": {
         "type": "symmetric",
         "value": 1.9e-9
        }
       }
      ]
     },
     "comments": [
      {
       "type": "comment",
       "head": [
        {
         "name": "M"
        }
       ],
       "body": "\\ensuremath{\\alpha}(K)exp=0.0050 (1971Ma45)."
      }
     ]
    }
   ],
   "band": 13,
   "comments": [
    {
     "type": "comment",
     "head": [
      {
       "name": "J"
      }
     ],
     "body": "865.18\\ensuremath{\\gamma} M1(+E2) to 13/2\\ensuremath{^{+}}; 1305.706\\ensuremath{\\gamma} (E2) to 7/2\\ensuremath{^{+}} level; band assignment."
    }
   ]
  },
  {
   "energy": {
    "unit": "keV",
    "value": 1319.941,
    "uncertainty": {
     "type": "symmetric",
     "value": 0.018
    }
   },
   "spinParity": {
    "values": [
     {
      "twoTimesSpin": 13,
      "isTentativeSpin": true,
      "parity": "+",
      "isTentativeParity": true
     }
    ]
   },
   "isStable": false,
   "flags": [
    "t"
   ],
   "crossReferences": [
    {
     "dataset": "176LU(N,G) E=THERMAL"
    }
   ],
   "gammas": [
    {
     "energy": {
      "unit": "keV",
      "value": 167.872,
      "uncertainty": {
       "type": "symmetric",
       "value": 0.002
      }
     },
     "gammaIntensity": {
      "value": 41,
      "uncertainty": {
       "type": "symmetric",
       "value": 5
      }
     },
     "initialLevelIndex": 54,
     "finalLevelIndex": 41
    },
    {
     "energy": {
      "unit": "keV",
      "value": 299,
      "uncertainty": {
       "type": "symmetric",
       "value": 0.5
      }
     },
     "gammaIntensity": {
      "value": 6.5,
      "uncertainty": {
       "type": "symmetric",
       "value": 0.9
      }
     },
     "initialLevelIndex": 54,
     "finalLevelIndex": 32,
     "multipolarity": {
      "stringRepresentation": "(E2)",
      "spins": [
       {
        "spin": 2
       }
      ],
      "parity": "+"
     },
     "theoreticalInternalConversionCoefficients": {
      "totalValue": {
       "value": 0.0773,
       "uncertainty": {
        "type": "unreported"
       }
      },
      "shellValues": [
       {
        "includesOuterShells": false,
        "shell": "K",
        "value": 0.0543,
        "uncertainty": {
         "type": "symmetric",
         "value": 0.0008
        }
       },
       {
        "includesOuterShells": false,
        "shell": "L",
        "value": 0.0176,
        "uncertainty": {
         "type": "symmetric",
         "value": 0.0003
        }
       },
       {
        "includesOuterShells": false,
        "shell": "M",
        "value": 0.00422,
        "uncertainty": {
         "type": "symmetric",
         "value": 0.00007
        }
       },
       {
        "includesOuterShells": false,
        "shell": "N",
        "value": 0.000979,
        "uncertainty": {
         "type": "symmetric",
         "value": 0.000015
        }
       },
       {
        "includesOuterShells": false,
        "shell": "O",
        "value": 0.0001282,
        "uncertainty": {
         "type": "symmetric",
         "value": 0.000002
        }
       },
       {
        "includesOuterShells": false,
        "shell": "P",
        "value": 0.00000341,
        "uncertainty": {
         "type": "symmetric",
         "value": 5e-8
        }
       }
      ]
     },
     "comments": [
      {
       "type": "comment",
       "head": [
        {
         "name": "E"
        }
       ],
       "body": "299.002 keV \\textit{18} in \\ensuremath{^{\\textnormal{176}}}Lu(n,\\ensuremath{\\gamma})"
      },
      {
       "type": "comment",
       "head": [
        {
         "name": "M"
        }
       ],
       "body": "\\ensuremath{\\alpha}(K)exp=0.08 and \\ensuremath{\\alpha}(M)exp=0.006 (1971Ma45)."
      }
     ]
    },
    {
     "energy": {
      "unit": "keV",
      "value": 1049.6,
      "uncertainty": {
       "type": "symmetric",
       "value": 0.5
      }
     },
     "gammaIntensity": {
      "value": 80,
      "uncertainty": {
       "type": "symmetric",
       "value": 10
      }
     },
     "initialLevelIndex": 54,
     "finalLevelIndex": 3,
     "multipolarity": {
      "stringRepresentation": "M1(+E2)",
      "isMixedTransition": true,
      "spins": [
       {
        "spin": 1
       },
       {
        "spin": 2
       }
      ],
      "parity": "+"
     },
     "theoreticalInternalConversionCoefficients": {
      "totalValue": {
       "value": 0.00685,
       "uncertainty": {
        "type": "unreported"
       }
      },
      "shellValues": [
       {
        "includesOuterShells": false,
        "shell": "K",
        "value": 0.00577,
        "uncertainty": {
         "type": "symmetric",
         "value": 0.00009
        }
       },
       {
        "includesOuterShells": false,
        "shell": "L",
        "value": 0.000839,
        "uncertainty": {
         "type": "symmetric",
         "value": 0.000012
        }
       },
       {
        "includesOuterShells": false,
        "shell": "M",
        "value": 0.000188,
        "uncertainty": {
         "type": "symmetric",
         "value": 0.000003
        }
       },
       {
        "includesOuterShells": false,
        "shell": "N",
        "value": 0.0000443,
        "uncertainty": {
         "type": "symmetric",
         "value": 7e-7
        }
       },
       {
        "includesOuterShells": false,
        "shell": "O",
        "value": 0.0000066,
        "uncertainty": {
         "type": "symmetric",
         "value": 1e-7
        }
       },
       {
        "includesOuterShells": false,
        "shell": "P",
        "value": 4.18e-7,
        "uncertainty": {
         "type": "symmetric",
         "value": 6e-9
        }
       }
      ]
     },
     "comments": [
      {
       "type": "comment",
       "head": [
        {
         "name": "E"
        }
       ],
       "body": "1049.5 keV \\textit{3} in \\ensuremath{^{\\textnormal{176}}}Lu(n,\\ensuremath{\\gamma})"
      },
      {
       "type": "comment",
       "head": [
        {
         "name": "M"
        }
       ],
       "body": "\\ensuremath{\\alpha}(K)exp=0.003 (1971Ma45)."
      }
     ]
    },
    {
     "energy": {
      "unit": "keV",
      "value": 1197.2,
      "uncertainty": {
       "type": "symmetric",
       "value": 0.5
      }
     },
     "gammaIntensity": {
      "value": 100,
      "uncertainty": {
       "type": "symmetric",
       "value": 14
      }
     },
     "initialLevelIndex": 54,
     "finalLevelIndex": 1,
     "comments": [
      {
       "type": "comment",
       "head": [
        {
         "name": "E"
        }
       ],
       "body": "1197.24 keV \\textit{3} in \\ensuremath{^{\\textnormal{176}}}Lu(n,\\ensuremath{\\gamma})"
      }
     ]
    }
   ],
   "band": 21,
   "comments": [
    {
     "type": "comment",
     "head": [
      {
       "name": "J"
      }
     ],
     "body": "299.002\\ensuremath{\\gamma} (E2) to (9/2\\ensuremath{^{+}}), 1049.55\\ensuremath{\\gamma} M1(+E2) to 11/2\\ensuremath{^{+}}; band assignment."
    }
   ]
  },
  {
   "energy": {
    "unit": "keV",
    "value": 1322.1,
    "uncertainty": {
     "type": "symmetric",
     "value": 0.4
    }
   },
   "spinParity": {
    "values": [
     {
      "twoTimesSpin": 3,
      "isTentativeSpin": true,
      "parity": "-",
      "isTentativeParity": true
     }
    ]
   },
   "isStable": false,
   "flags": [
    "H"
   ],
   "crossReferences": [
    {
     "dataset": "176LU(N,G) E=THERMAL"
    }
   ],
   "gammas": [
    {
     "energy": {
      "unit": "keV",
      "value": 526.9,
      "uncertainty": {
       "type": "symmetric",
       "value": 0.4
      }
     },
     "gammaIntensity": {
      "value": 100,
      "uncertainty": {
       "type": "unreported"
      }
     },
     "initialLevelIndex": 55,
     "finalLevelIndex": 18,
     "multipolarity": {
      "stringRepresentation": "M1(+E2)",
      "isMixedTransition": true,
      "spins": [
       {
        "spin": 1
       },
       {
        "spin": 2
       }
      ],
      "parity": "+"
     },
     "theoreticalInternalConversionCoefficients": {
      "totalValue": {
       "value": 0.0388,
       "uncertainty": {
        "type": "unreported"
       }
      },
      "shellValues": [
       {
        "includesOuterShells": false,
        "shell": "K",
        "value": 0.0325,
        "uncertainty": {
         "type": "symmetric",
         "value": 0.0005
        }
       },
       {
        "includesOuterShells": false,
        "shell": "L",
        "value": 0.00484,
        "uncertainty": {
         "type": "symmetric",
         "value": 0.00007
        }
       },
       {
        "includesOuterShells": false,
        "shell": "M",
        "value": 0.001085,
        "uncertainty": {
         "type": "symmetric",
         "value": 0.000016
        }
       },
       {
        "includesOuterShells": false,
        "shell": "N",
        "value": 0.000256,
        "uncertainty": {
         "type": "symmetric",
         "value": 0.000004
        }
       },
       {
        "includesOuterShells": false,
        "shell": "O",
        "value": 0.0000381,
        "uncertainty": {
         "type": "symmetric",
         "value": 6e-7
        }
       },
       {
        "includesOuterShells": false,
        "shell": "P",
        "value": 0.00000239,
        "uncertainty": {
         "type": "symmetric",
         "value": 4e-8
        }
       }
      ]
     },
     "comments": [
      {
       "type": "comment",
       "head": [
        {
         "name": "M"
        }
       ],
       "body": "\\ensuremath{\\alpha}(K)exp=0.023 (1971Ma45)."
      }
     ]
    }
   ],
   "band": 5,
   "comments": [
    {
     "type": "comment",
     "head": [
      {
       "name": "J"
      }
     ],
     "body": "526.9\\ensuremath{\\gamma} M1(+E2) to (1/2\\ensuremath{^{-}}); band assignment."
    },
    {
     "type": "comment",
     "head": [
      {
       "name": "CONF"
      }
     ],
     "body": "\\ensuremath{K^{\\pi}}=3/2\\ensuremath{^{-}}, \\ensuremath{\\pi}3/2[532]. The assignment is tentative"
    }
   ]
  },
  {
   "energy": {
    "unit": "keV",
    "value": 1322.184,
    "uncertainty": {
     "type": "symmetric",
     "value": 0.003
    }
   },
   "spinParity": {
    "values": [
     {
      "twoTimesSpin": 21,
      "isTentativeSpin": false,
      "parity": "-",
      "isTentativeParity": false
     }
    ]
   },
   "isStable": false,
   "flags": [
    "B"
   ],
   "crossReferences": [
    {
     "dataset": "176LU(N,G) E=THERMAL"
    },
    {
     "dataset": "(HI,XNG)"
    }
   ],
   "gammas": [
    {
     "energy": {
      "unit": "keV",
      "value": 248.56,
      "uncertainty": {
       "type": "symmetric",
       "value": 0.005
      }
     },
     "gammaIntensity": {
      "value": 100,
      "uncertainty": {
       "type": "symmetric",
       "value": 16
      }
     },
     "initialLevelIndex": 56,
     "finalLevelIndex": 35,
     "multipolarity": {
      "stringRepresentation": "[M1+E2]",
      "isMixedTransition": true,
      "spins": [
       {
        "spin": 1,
        "evaluatorInferred": true
       },
       {
        "spin": 2,
        "evaluatorInferred": true
       }
      ],
      "parity": "+"
     },
     "theoreticalInternalConversionCoefficients": {
      "totalValue": {
       "value": 0.285,
       "uncertainty": {
        "type": "unreported"
       }
      },
      "shellValues": [
       {
        "includesOuterShells": false,
        "shell": "K",
        "value": 0.238,
        "uncertainty": {
         "type": "symmetric",
         "value": 0.004
        }
       },
       {
        "includesOuterShells": false,
        "shell": "L",
        "value": 0.0363,
        "uncertainty": {
         "type": "symmetric",
         "value": 0.0005
        }
       },
       {
        "includesOuterShells": false,
        "shell": "M",
        "value": 0.00814,
        "uncertainty": {
         "type": "symmetric",
         "value": 0.00012
        }
       },
       {
        "includesOuterShells": false,
        "shell": "N",
        "value": 0.00192,
        "uncertainty": {
         "type": "symmetric",
         "value": 0.00003
        }
       },
       {
        "includesOuterShells": false,
        "shell": "O",
        "value": 0.000285,
        "uncertainty": {
         "type": "symmetric",
         "value": 0.000004
        }
       },
       {
        "includesOuterShells": false,
        "shell": "P",
        "value": 0.00001771,
        "uncertainty": {
         "type": "symmetric",
         "value": 2.5e-7
        }
       }
      ]
     },
     "comments": [
      {
       "type": "comment",
       "head": [
        {
         "name": "RI"
        }
       ],
       "body": "From (HI,xn\\ensuremath{\\gamma})"
      }
     ]
    },
    {
     "energy": {
      "unit": "keV",
      "value": 477.267,
      "uncertainty": {
       "type": "symmetric",
       "value": 0.003
      }
     },
     "gammaIntensity": {
      "value": 55,
      "uncertainty": {
       "type": "symmetric",
       "value": 11
      }
     },
     "initialLevelIndex": 56,
     "finalLevelIndex": 23,
     "multipolarity": {
      "stringRepresentation": "[E2]",
      "spins": [
       {
        "spin": 2,
        "evaluatorInferred": true
       }
      ],
      "parity": "+"
     },
     "theoreticalInternalConversionCoefficients": {
      "totalValue": {
       "value": 0.0209,
       "uncertainty": {
        "type": "unreported"
       }
      },
      "shellValues": [
       {
        "includesOuterShells": false,
        "shell": "K",
        "value": 0.01623,
        "uncertainty": {
         "type": "symmetric",
         "value": 0.00023
        }
       },
       {
        "includesOuterShells": false,
        "shell": "L",
        "value": 0.00362,
        "uncertainty": {
         "type": "symmetric",
         "value": 0.00005
        }
       },
       {
        "includesOuterShells": false,
        "shell": "M",
        "value": 0.000844,
        "uncertainty": {
         "type": "symmetric",
         "value": 0.000012
        }
       },
       {
        "includesOuterShells": false,
        "shell": "N",
        "value": 0.000197,
        "uncertainty": {
         "type": "symmetric",
         "value": 0.000003
        }
       },
       {
        "includesOuterShells": false,
        "shell": "O",
        "value": 0.0000271,
        "uncertainty": {
         "type": "symmetric",
         "value": 4e-7
        }
       },
       {
        "includesOuterShells": false,
        "shell": "P",
        "value": 0.000001089,
        "uncertainty": {
         "type": "symmetric",
         "value": 1.6e-8
        }
       }
      ]
     },
     "comments": [
      {
       "type": "comment",
       "head": [
        {
         "name": "RI"
        }
       ],
       "body": "From (HI,xn\\ensuremath{\\gamma})"
      }
     ]
    }
   ],
   "band": 1,
   "comments": [
    {
     "type": "comment",
     "head": [
      {
       "name": "J"
      }
     ],
     "body": "248.560\\ensuremath{\\gamma} to 19/2\\ensuremath{^{-}}; 477.267\\ensuremath{\\gamma} to 17/2\\ensuremath{^{-}}; band assignment."
    }
   ]
  },
  {
   "energy": {
    "unit": "keV",
    "value": 1324.4,
    "uncertainty": {
     "type": "symmetric",
     "value": 0.4
    }
   },
   "spinParity": {
    "values": [
     {
      "twoTimesSpin": 25,
      "isTentativeSpin": false,
      "parity": "+",
      "isTentativeParity": false
     }
    ]
   },
   "isStable": false,
   "halfLife": {
    "unit": "ns",
    "value": 62,
    "uncertainty": {
     "type": "symmetric",
     "value": 4
    }
   },
   "flags": [
    "J"
   ],
   "crossReferences": [
    {
     "dataset": "(HI,XNG)"
    }
   ],
   "gammas": [
    {
     "energy": {
      "unit": "keV",
      "value": 81.2,
      "uncertainty": {
       "type": "symmetric",
       "value": 0.5
      }
     },
     "gammaIntensity": {
      "value": 22.1,
      "uncertainty": {
       "type": "symmetric",
       "value": 1.6
      }
     },
     "initialLevelIndex": 57,
     "finalLevelIndex": 50,
     "multipolarity": {
      "stringRepresentation": "E1",
      "spins": [
       {
        "spin": 1
       }
      ],
      "parity": "-"
     },
     "theoreticalInternalConversionCoefficients": {
      "totalValue": {
       "value": 0.602,
       "uncertainty": {
        "type": "symmetric",
        "value": 0.013
       }
      },
      "shellValues": [
       {
        "includesOuterShells": false,
        "shell": "K",
        "value": 0.492,
        "uncertainty": {
         "type": "symmetric",
         "value": 0.011
        }
       },
       {
        "includesOuterShells": false,
        "shell": "L",
        "value": 0.0857,
        "uncertainty": {
         "type": "symmetric",
         "value": 0.0019
        }
       },
       {
        "includesOuterShells": false,
        "shell": "M",
        "value": 0.0193,
        "uncertainty": {
         "type": "symmetric",
         "value": 0.0005
        }
       },
       {
        "includesOuterShells": false,
        "shell": "N",
        "value": 0.00446,
        "uncertainty": {
         "type": "symmetric",
         "value": 0.0001
        }
       },
       {
        "includesOuterShells": false,
        "shell": "O",
        "value": 0.0006,
        "uncertainty": {
         "type": "symmetric",
         "value": 0.000013
        }
       },
       {
        "includesOuterShells": false,
        "shell": "P",
        "value": 0.0000257,
        "uncertainty": {
         "type": "symmetric",
         "value": 6e-7
        }
       }
      ]
     },
     "reducedTransitionProbabilities": [
      {
       "multipolarity": "E1",
       "unit": "W.u.",
       "value": 0.00000104,
       "uncertainty": {
        "type": "symmetric",
        "value": 1e-7
       }
      }
     ],
     "flags": [
      "S"
     ],
     "comments": [
      {
       "type": "comment",
       "head": [
        {
         "name": "M"
        }
       ],
       "body": "From \\ensuremath{\\alpha}(exp) using intensity balances (2004Dr06)"
      }
     ]
    },
    {
     "energy": {
      "unit": "keV",
      "value": 354.3,
      "uncertainty": {
       "type": "symmetric",
       "value": 0.5
      }
     },
     "gammaIntensity": {
      "value": 100,
      "uncertainty": {
       "type": "symmetric",
       "value": 5
      }
     },
     "initialLevelIndex": 57,
     "finalLevelIndex": 29,
     "multipolarity": {
      "stringRepresentation": "[E1]",
      "spins": [
       {
        "spin": 1,
        "evaluatorInferred": true
       }
      ],
      "parity": "-"
     },
     "theoreticalInternalConversionCoefficients": {
      "totalValue": {
       "value": 0.01383,
       "uncertainty": {
        "type": "unreported"
       }
      },
      "shellValues": [
       {
        "includesOuterShells": false,
        "shell": "K",
        "value": 0.01163,
        "uncertainty": {
         "type": "symmetric",
         "value": 0.00017
        }
       },
       {
        "includesOuterShells": false,
        "shell": "L",
        "value": 0.001713,
        "uncertainty": {
         "type": "symmetric",
         "value": 0.000025
        }
       },
       {
        "includesOuterShells": false,
        "shell": "M",
        "value": 0.000383,
        "uncertainty": {
         "type": "symmetric",
         "value": 0.000006
        }
       },
       {
        "includesOuterShells": false,
        "shell": "N",
        "value": 0.0000897,
        "uncertainty": {
         "type": "symmetric",
         "value": 0.0000013
        }
       },
       {
        "includesOuterShells": false,
        "shell": "O",
        "value": 0.00001296,
        "uncertainty": {
         "type": "symmetric",
         "value": 1.9e-7
        }
       },
       {
        "includesOuterShells": false,
        "shell": "P",
        "value": 7.3e-7,
        "uncertainty": {
         "type": "symmetric",
         "value": 1.1e-8
        }
       }
      ]
     },
     "reducedTransitionProbabilities": [
      {
       "multipolarity": "E1",
       "unit": "W.u.",
       "value": 5.7e-8,
       "uncertainty": {
        "type": "symmetric",
        "value": 4e-9
       }
      }
     ],
     "flags": [
      "S"
     ]
    }
   ],
   "band": 9,
   "comments": [
    {
     "type": "comment",
     "head": [
      {
       "name": "J"
      }
     ],
     "body": "81.2\\ensuremath{\\gamma} E1 to 25/2\\ensuremath{^{-}}, 354.3\\ensuremath{\\gamma} to 23/2\\ensuremath{^{-}}"
    },
    {
     "type": "comment",
     "head": [
      {
       "name": "T"
      }
     ],
     "body": "From \\ensuremath{\\gamma}\\ensuremath{\\gamma}(t) in 2004Dr06"
    },
    {
     "type": "comment",
     "head": [
      {
       "name": "CONF"
      }
     ],
     "body": "\\ensuremath{K^{\\pi}}=25/2\\ensuremath{^{+}}, \\ensuremath{\\pi}(9/2[514])\\ensuremath{\\otimes}\\ensuremath{\\nu}\\ensuremath{^{\\textnormal{2}}}(7/2[514],9/2[624])"
    }
   ]
  },
  {
   "energy": {
    "unit": "keV",
    "value": 1328,
    "uncertainty": {
     "type": "symmetric",
     "value": 5
    }
   },
   "spinParity": {
    "values": [
     {
      "twoTimesSpin": 11,
      "isTentativeSpin": true,
      "parity": "-",
      "isTentativeParity": true
     }
    ]
   },
   "isStable": false,
   "flags": [
    "T"
   ],
   "crossReferences": [
    {
     "dataset": "176LU(N,G) E=THERMAL"
    },
    {
     "assignment": "ambiguous",
     "dataset": "176YB(3HE,D),(A,T)",
     "level": 1333
    },
    {
     "dataset": "178HF(T,A)"
    }
   ],
   "comments": [
    {
     "type": "comment",
     "head": [
      {
       "name": "J"
      }
     ],
     "body": "Comparison of measured (t,\\ensuremath{\\alpha}) cross section in \\ensuremath{^{\\textnormal{178}}}Hf(t,\\ensuremath{\\alpha}) with calculated DWBA values. For the corresponding spectroscopic factor see 1992Bu12."
    }
   ]
  },
  {
   "energy": {
    "unit": "keV",
    "value": 1336.85,
    "uncertainty": {
     "type": "symmetric",
     "value": 0.04
    }
   },
   "spinParity": {
    "values": [
     {
      "twoTimesSpin": 7,
      "isTentativeSpin": false,
      "parity": "+",
      "isTentativeParity": false
     }
    ]
   },
   "isStable": false,
   "flags": [
    "r"
   ],
   "crossReferences": [
    {
     "dataset": "176LU(N,G) E=THERMAL"
    },
    {
     "dataset": "177YB B- DECAY"
    }
   ],
   "gammas": [
    {
     "energy": {
      "unit": "keV",
      "value": 1068.3,
      "uncertainty": {
       "type": "symmetric",
       "value": 0.3
      }
     },
     "gammaIntensity": {
      "value": 31,
      "uncertainty": {
       "type": "symmetric",
       "value": 6
      }
     },
     "initialLevelIndex": 59,
     "finalLevelIndex": 3,
     "multipolarity": {
      "stringRepresentation": "[E2]",
      "spins": [
       {
        "spin": 2,
        "evaluatorInferred": true
       }
      ],
      "parity": "+"
     },
     "theoreticalInternalConversionCoefficients": {
      "totalValue": {
       "value": 0.00341,
       "uncertainty": {
        "type": "unreported"
       }
      },
      "shellValues": [
       {
        "includesOuterShells": false,
        "shell": "K",
        "value": 0.00283,
        "uncertainty": {
         "type": "symmetric",
         "value": 0.00004
        }
       },
       {
        "includesOuterShells": false,
        "shell": "L",
        "value": 0.000446,
        "uncertainty": {
         "type": "symmetric",
         "value": 0.000007
        }
       },
       {
        "includesOuterShells": false,
        "shell": "M",
        "value": 0.0001006,
        "uncertainty": {
         "type": "symmetric",
         "value": 0.0000015
        }
       },
       {
        "includesOuterShells": false,
        "shell": "N",
        "value": 0.0000237,
        "uncertainty": {
         "type": "symmetric",
         "value": 4e-7
        }
       },
       {
        "includesOuterShells": false,
        "shell": "O",
        "value": 0.00000344,
        "uncertainty": {
         "type": "symmetric",
         "value": 5e-8
        }
       },
       {
        "includesOuterShells": false,
        "shell": "P",
        "value": 1.96e-7,
        "uncertainty": {
         "type": "symmetric",
         "value": 3e-9
        }
       }
      ]
     },
     "flags": [
      "Q"
     ],
     "comments": [
      {
       "type": "comment",
       "head": [
        {
         "name": "RI"
        }
       ],
       "body": "From \\ensuremath{^{177}}Yb \\ensuremath{\\beta}\\ensuremath{^{-}} decay."
      }
     ]
    },
    {
     "energy": {
      "unit": "keV",
      "value": 1215.22,
      "uncertainty": {
       "type": "symmetric",
       "value": 0.04
      }
     },
     "gammaIntensity": {
      "value": 100,
      "uncertainty": {
       "type": "symmetric",
       "value": 6
      }
     },
     "initialLevelIndex": 59,
     "finalLevelIndex": 1,
     "multipolarity": {
      "stringRepresentation": "M1(+E2)",
      "isMixedTransition": true,
      "spins": [
       {
        "spin": 1
       },
       {
        "spin": 2
       }
      ],
      "parity": "+"
     },
     "theoreticalInternalConversionCoefficients": {
      "totalValue": {
       "value": 0.0048,
       "uncertainty": {
        "type": "unreported"
       }
      },
      "pairCreationValue": {
       "value": 0.00000834,
       "uncertainty": {
        "type": "symmetric",
        "value": 1.2e-7
       }
      },
      "shellValues": [
       {
        "includesOuterShells": false,
        "shell": "K",
        "value": 0.00404,
        "uncertainty": {
         "type": "symmetric",
         "value": 0.00006
        }
       },
       {
        "includesOuterShells": false,
        "shell": "L",
        "value": 0.000584,
        "uncertainty": {
         "type": "symmetric",
         "value": 0.000009
        }
       },
       {
        "includesOuterShells": false,
        "shell": "M",
        "value": 0.0001305,
        "uncertainty": {
         "type": "symmetric",
         "value": 0.0000019
        }
       },
       {
        "includesOuterShells": false,
        "shell": "N",
        "value": 0.0000308,
        "uncertainty": {
         "type": "symmetric",
         "value": 5e-7
        }
       },
       {
        "includesOuterShells": false,
        "shell": "O",
        "value": 0.0000046,
        "uncertainty": {
         "type": "symmetric",
         "value": 7e-8
        }
       },
       {
        "includesOuterShells": false,
        "shell": "P",
        "value": 2.92e-7,
        "uncertainty": {
         "type": "symmetric",
         "value": 4e-9
        }
       }
      ]
     },
     "comments": [
      {
       "type": "comment",
       "head": [
        {
         "name": "RI"
        }
       ],
       "body": "From \\ensuremath{^{\\textnormal{177}}}Yb \\ensuremath{\\beta}\\ensuremath{^{-}} decay."
      },
      {
       "type": "comment",
       "head": [
        {
         "name": "M"
        }
       ],
       "body": "\\ensuremath{\\alpha}(K)exp=0.0050 (1971Ma45)."
      }
     ]
    },
    {
     "energy": {
      "unit": "keV",
      "value": 1336.8,
      "uncertainty": {
       "type": "symmetric",
       "value": 1
      }
     },
     "gammaIntensity": {
      "value": 44.9,
      "uncertainty": {
       "type": "symmetric",
       "value": 2
      }
     },
     "initialLevelIndex": 59,
     "finalLevelIndex": 0,
     "multipolarity": {
      "stringRepresentation": "M1(+E2)",
      "isMixedTransition": true,
      "spins": [
       {
        "spin": 1
       },
       {
        "spin": 2
       }
      ],
      "parity": "+"
     },
     "theoreticalInternalConversionCoefficients": {
      "totalValue": {
       "value": 0.00383,
       "uncertainty": {
        "type": "unreported"
       }
      },
      "pairCreationValue": {
       "value": 0.0000328,
       "uncertainty": {
        "type": "symmetric",
        "value": 6e-7
       }
      },
      "shellValues": [
       {
        "includesOuterShells": false,
        "shell": "K",
        "value": 0.00321,
        "uncertainty": {
         "type": "symmetric",
         "value": 0.00005
        }
       },
       {
        "includesOuterShells": false,
        "shell": "L",
        "value": 0.000462,
        "uncertainty": {
         "type": "symmetric",
         "value": 0.000007
        }
       },
       {
        "includesOuterShells": false,
        "shell": "M",
        "value": 0.0001032,
        "uncertainty": {
         "type": "symmetric",
         "value": 0.0000015
        }
       },
       {
        "includesOuterShells": false,
        "shell": "N",
        "value": 0.0000244,
        "uncertainty": {
         "type": "symmetric",
         "value": 4e-7
        }
       },
       {
        "includesOuterShells": false,
        "shell": "O",
        "value": 0.00000364,
        "uncertainty": {
         "type": "symmetric",
         "value": 6e-8
        }
       },
       {
        "includesOuterShells": false,
        "shell": "P",
        "value": 2.31e-7,
        "uncertainty": {
         "type": "symmetric",
         "value": 4e-9
        }
       }
      ]
     },
     "comments": [
      {
       "type": "comment",
       "head": [
        {
         "name": "M"
        }
       ],
       "body": "\\ensuremath{\\alpha}(K)exp=0.0043 (1971Ma45)."
      },
      {
       "type": "comment",
       "head": [
        {
         "name": "RI"
        }
       ],
       "body": "From \\ensuremath{^{\\textnormal{177}}}Yb \\ensuremath{\\beta}\\ensuremath{^{-}} decay."
      }
     ]
    }
   ],
   "band": 19,
   "comments": [
    {
     "type": "comment",
     "head": [
      {
       "name": "J"
      }
     ],
     "body": "1215.22\\ensuremath{\\gamma} M1(+E2) to 9/2\\ensuremath{^{+}}, 1336.8\\ensuremath{\\gamma} M1(+E2) to 7/2\\ensuremath{^{+}}; band assignment."
    },
    {
     "type": "comment",
     "head": [
      {
       "name": "CONF"
      }
     ],
     "body": "\\ensuremath{K^{\\pi}}=7/2\\ensuremath{^{+}},\\ensuremath{\\pi}9/2[514]\\ensuremath{\\otimes}\\ensuremath{\\nu}\\ensuremath{^{\\textnormal{2}}}(7/2[514],9/2[624])"
    }
   ]
  },
  {
   "energy": {
    "unit": "keV",
    "value": 1344.39,
    "uncertainty": {
     "type": "symmetric",
     "value": 0.05
    }
   },
   "spinParity": {
    "values": [
     {
      "twoTimesSpin": 11,
      "isTentativeSpin": true,
      "parity": "+",
      "isTentativeParity": true
     }
    ]
   },
   "isStable": false,
   "flags": [
    "s"
   ],
   "crossReferences": [
    {
     "dataset": "176LU(N,G) E=THERMAL"
    },
    {
     "assignment": "ambiguous",
     "dataset": "176YB(3HE,D),(A,T)",
     "level": 1333
    }
   ],
   "gammas": [
    {
     "energy": {
      "unit": "keV",
      "value": 902.6,
      "uncertainty": {
       "type": "symmetric",
       "value": 1
      }
     },
     "gammaIntensity": {
      "value": 100,
      "uncertainty": {
       "type": "symmetric",
       "value": 9
      }
     },
     "initialLevelIndex": 60,
     "finalLevelIndex": 5
    },
    {
     "energy": {
      "unit": "keV",
      "value": 1076,
      "uncertainty": {
       "type": "symmetric",
       "value": 0.7
      }
     },
     "gammaIntensity": {
      "value": 42,
      "uncertainty": {
       "type": "symmetric",
       "value": 9
      }
     },
     "initialLevelIndex": 60,
     "finalLevelIndex": 3
    },
    {
     "energy": {
      "unit": "keV",
      "value": 1222.2,
      "uncertainty": {
       "type": "symmetric",
       "value": 0.8
      }
     },
     "gammaIntensity": {
      "value": 75,
      "uncertainty": {
       "type": "symmetric",
       "value": 9
      }
     },
     "initialLevelIndex": 60,
     "finalLevelIndex": 1,
     "multipolarity": {
      "stringRepresentation": "M1(+E2)",
      "isMixedTransition": true,
      "spins": [
       {
        "spin": 1
       },
       {
        "spin": 2
       }
      ],
      "parity": "+"
     },
     "theoreticalInternalConversionCoefficients": {
      "totalValue": {
       "value": 0.00473,
       "uncertainty": {
        "type": "unreported"
       }
      },
      "pairCreationValue": {
       "value": 0.00000936,
       "uncertainty": {
        "type": "symmetric",
        "value": 1.8e-7
       }
      },
      "shellValues": [
       {
        "includesOuterShells": false,
        "shell": "K",
        "value": 0.00398,
        "uncertainty": {
         "type": "symmetric",
         "value": 0.00006
        }
       },
       {
        "includesOuterShells": false,
        "shell": "L",
        "value": 0.000576,
        "uncertainty": {
         "type": "symmetric",
         "value": 0.000009
        }
       },
       {
        "includesOuterShells": false,
        "shell": "M",
        "value": 0.0001287,
        "uncertainty": {
         "type": "symmetric",
         "value": 0.0000019
        }
       },
       {
        "includesOuterShells": false,
        "shell": "N",
        "value": 0.0000304,
        "uncertainty": {
         "type": "symmetric",
         "value": 5e-7
        }
       },
       {
        "includesOuterShells": false,
        "shell": "O",
        "value": 0.00000453,
        "uncertainty": {
         "type": "symmetric",
         "value": 7e-8
        }
       },
       {
        "includesOuterShells": false,
        "shell": "P",
        "value": 2.88e-7,
        "uncertainty": {
         "type": "symmetric",
         "value": 4e-9
        }
       }
      ]
     },
     "comments": [
      {
       "type": "comment",
       "head": [
        {
         "name": "M"
        }
       ],
       "body": "\\ensuremath{\\alpha}(K)exp=0.0050 (1971Ma45)."
      }
     ]
    },
    {
     "energy": {
      "unit": "keV",
      "value": 1344.39,
      "uncertainty": {
       "type": "symmetric",
       "value": 0.05
      }
     },
     "gammaIntensity": {
      "value": 71,
      "uncertainty": {
       "type": "symmetric",
       "value": 11
      }
     },
     "initialLevelIndex": 60,
     "finalLevelIndex": 0
    }
   ],
   "band": 20,
   "comments": [
    {
     "type": "comment",
     "head": [
      {
       "name": "J"
      }
     ],
     "body": "1222.2\\ensuremath{\\gamma} M1(+E2) to 9/2\\ensuremath{^{+}}, 902.6\\ensuremath{\\gamma} to 13/2\\ensuremath{^{+}}; band assignment."
    },
    {
     "type": "comment",
     "head": [
      {
       "name": "CONF"
      }
     ],
     "body": "\\ensuremath{K^{\\pi}}=11/2\\ensuremath{^{+}}. The assignment is tentative."
    }
   ]
  },
  {
   "energy": {
    "unit": "keV",
    "value": 1344.799,
    "uncertainty": {
     "type": "symmetric",
     "value": 0.003
    }
   },
   "spinParity": {
    "values": [
     {
      "twoTimesSpin": 15,
      "isTentativeSpin": false,
      "parity": "+",
      "isTentativeParity": false
     }
    ]
   },
   "isStable": false,
   "flags": [
    "D"
   ],
   "crossReferences": [
    {
     "dataset": "176LU(N,G) E=THERMAL"
    },
    {
     "assignment": "ambiguous",
     "dataset": "176YB(3HE,D),(A,T)",
     "level": 1333
    },
    {
     "dataset": "(HI,XNG)"
    }
   ],
   "gammas": [
    {
     "energy": {
      "unit": "keV",
      "value": 364.613,
      "uncertainty": {
       "type": "symmetric",
       "value": 0.002
      }
     },
     "gammaIntensity": {
      "value": 100,
      "uncertainty": {
       "type": "unreported"
      }
     },
     "initialLevelIndex": 61,
     "finalLevelIndex": 30,
     "multipolarity": {
      "stringRepresentation": "E2",
      "spins": [
       {
        "spin": 2
       }
      ],
      "parity": "+"
     },
     "theoreticalInternalConversionCoefficients": {
      "totalValue": {
       "value": 0.0433,
       "uncertainty": {
        "type": "unreported"
       }
      },
      "shellValues": [
       {
        "includesOuterShells": false,
        "shell": "K",
        "value": 0.032,
        "uncertainty": {
         "type": "symmetric",
         "value": 0.0005
        }
       },
       {
        "includesOuterShells": false,
        "shell": "L",
        "value": 0.0087,
        "uncertainty": {
         "type": "symmetric",
         "value": 0.00013
        }
       },
       {
        "includesOuterShells": false,
        "shell": "M",
        "value": 0.00206,
        "uncertainty": {
         "type": "symmetric",
         "value": 0.00003
        }
       },
       {
        "includesOuterShells": false,
        "shell": "N",
        "value": 0.000479,
        "uncertainty": {
         "type": "symmetric",
         "value": 0.000007
        }
       },
       {
        "includesOuterShells": false,
        "shell": "O",
        "value": 0.000064,
        "uncertainty": {
         "type": "symmetric",
         "value": 9e-7
        }
       },
       {
        "includesOuterShells": false,
        "shell": "P",
        "value": 0.00000208,
        "uncertainty": {
         "type": "symmetric",
         "value": 3e-8
        }
       }
      ]
     },
     "comments": [
      {
       "type": "comment",
       "head": [
        {
         "name": "M"
        }
       ],
       "body": "\\ensuremath{\\alpha}(K)exp=0.026 \\textit{5} (1996Pe05) and \\ensuremath{\\alpha}(K)exp=0.025 and \\ensuremath{\\alpha}(L1)exp+\\ensuremath{\\alpha}(L2)exp=0.0061 (1971Ma45)."
      }
     ]
    }
   ],
   "band": 3,
   "comments": [
    {
     "type": "comment",
     "head": [
      {
       "name": "J"
      }
     ],
     "body": "364.613\\ensuremath{\\gamma} E2 to 11/2\\ensuremath{^{+}}; band assignment."
    }
   ]
  },
  {
   "energy": {
    "unit": "keV",
    "value": 1348.6,
    "uncertainty": {
     "type": "symmetric",
     "value": 0.3
    }
   },
   "spinParity": {
    "values": [
     {
      "twoTimesSpin": 13,
      "isTentativeSpin": true,
      "parity": "-",
      "isTentativeParity": true
     }
    ]
   },
   "isStable": false,
   "flags": [
    "y"
   ],
   "crossReferences": [
    {
     "dataset": "176LU(N,G) E=THERMAL"
    },
    {
     "assignment": "ambiguous",
     "dataset": "176YB(3HE,D),(A,T)",
     "level": 1333
    }
   ],
   "gammas": [
    {
     "energy": {
      "unit": "keV",
      "value": 907.9,
      "uncertainty": {
       "type": "symmetric",
       "value": 0.3
      }
     },
     "initialLevelIndex": 62,
     "finalLevelIndex": 5
    },
    {
     "energy": {
      "unit": "keV",
      "value": 1080.21,
      "uncertainty": {
       "type": "unreported"
      }
     },
     "initialLevelIndex": 62,
     "finalLevelIndex": 3
    }
   ],
   "band": 26,
   "comments": [
    {
     "type": "comment",
     "head": [
      {
       "name": "J"
      }
     ],
     "body": "907.9\\ensuremath{\\gamma} to 13/2\\ensuremath{^{+}}, 1080.21\\ensuremath{\\gamma} to 11/2\\ensuremath{^{+}}; population in \\ensuremath{^{\\textnormal{176}}}Lu(n,\\ensuremath{\\gamma}) (\\ensuremath{J^{\\pi}}=13/2\\ensuremath{^{-}},15/2\\ensuremath{^{-}})"
    }
   ]
  },
  {
   "energy": {
    "unit": "keV",
    "value": 1352.5,
    "uncertainty": {
     "type": "symmetric",
     "value": 0.4
    }
   },
   "spinParity": {
    "values": [
     {
      "twoTimesSpin": 21,
      "isTentativeSpin": false,
      "parity": "+",
      "isTentativeParity": false
     }
    ]
   },
   "isStable": false,
   "flags": [
    "A"
   ],
   "crossReferences": [
    {
     "dataset": "(HI,XNG)"
    }
   ],
   "gammas": [
    {
     "energy": {
      "unit": "keV",
      "value": 258.7,
      "uncertainty": {
       "type": "symmetric",
       "value": 0.5
      }
     },
     "gammaIntensity": {
      "value": 29,
      "uncertainty": {
       "type": "symmetric",
       "value": 12
      }
     },
     "initialLevelIndex": 63,
     "finalLevelIndex": 37,
     "multipolarity": {
      "stringRepresentation": "[M1+E2]",
      "isMixedTransition": true,
      "spins": [
       {
        "spin": 1,
        "evaluatorInferred": true
       },
       {
        "spin": 2,
        "evaluatorInferred": true
       }
      ],
      "parity": "+"
     },
     "theoreticalInternalConversionCoefficients": {
      "totalValue": {
       "value": 0.255,
       "uncertainty": {
        "type": "unreported"
       }
      },
      "shellValues": [
       {
        "includesOuterShells": false,
        "shell": "K",
        "value": 0.214,
        "uncertainty": {
         "type": "symmetric",
         "value": 0.004
        }
       },
       {
        "includesOuterShells": false,
        "shell": "L",
        "value": 0.0325,
        "uncertainty": {
         "type": "symmetric",
         "value": 0.0005
        }
       },
       {
        "includesOuterShells": false,
        "shell": "M",
        "value": 0.0073,
        "uncertainty": {
         "type": "symmetric",
         "value": 0.00011
        }
       },
       {
        "includesOuterShells": false,
        "shell": "N",
        "value": 0.00172,
        "uncertainty": {
         "type": "symmetric",
         "value": 0.00003
        }
       },
       {
        "includesOuterShells": false,
        "shell": "O",
        "value": 0.000256,
        "uncertainty": {
         "type": "symmetric",
         "value": 0.000004
        }
       },
       {
        "includesOuterShells": false,
        "shell": "P",
        "value": 0.00001588,
        "uncertainty": {
         "type": "symmetric",
         "value": 2.4e-7
        }
       }
      ]
     },
     "flags": [
      "S"
     ]
    },
    {
     "energy": {
      "unit": "keV",
      "value": 498.4,
      "uncertainty": {
       "type": "symmetric",
       "value": 0.5
      }
     },
     "gammaIntensity": {
      "value": 100,
      "uncertainty": {
       "type": "symmetric",
       "value": 6
      }
     },
     "initialLevelIndex": 63,
     "finalLevelIndex": 24,
     "multipolarity": {
      "stringRepresentation": "[E2]",
      "spins": [
       {
        "spin": 2,
        "evaluatorInferred": true
       }
      ],
      "parity": "+"
     },
     "theoreticalInternalConversionCoefficients": {
      "totalValue": {
       "value": 0.0187,
       "uncertainty": {
        "type": "unreported"
       }
      },
      "shellValues": [
       {
        "includesOuterShells": false,
        "shell": "K",
        "value": 0.01462,
        "uncertainty": {
         "type": "symmetric",
         "value": 0.00021
        }
       },
       {
        "includesOuterShells": false,
        "shell": "L",
        "value": 0.00317,
        "uncertainty": {
         "type": "symmetric",
         "value": 0.00005
        }
       },
       {
        "includesOuterShells": false,
        "shell": "M",
        "value": 0.000738,
        "uncertainty": {
         "type": "symmetric",
         "value": 0.000011
        }
       },
       {
        "includesOuterShells": false,
        "shell": "N",
        "value": 0.0001724,
        "uncertainty": {
         "type": "symmetric",
         "value": 0.0000025
        }
       },
       {
        "includesOuterShells": false,
        "shell": "O",
        "value": 0.0000238,
        "uncertainty": {
         "type": "symmetric",
         "value": 4e-7
        }
       },
       {
        "includesOuterShells": false,
        "shell": "P",
        "value": 9.85e-7,
        "uncertainty": {
         "type": "symmetric",
         "value": 1.4e-8
        }
       }
      ]
     },
     "flags": [
      "S"
     ]
    }
   ],
   "band": 0,
   "comments": [
    {
     "type": "comment",
     "head": [
      {
       "name": "J"
      }
     ],
     "body": "258.7\\ensuremath{\\gamma} to 19/2\\ensuremath{^{+}}; 498.4\\ensuremath{\\gamma} to 17/2\\ensuremath{^{+}}; band assignment."
    }
   ]
  },
  {
   "energy": {
    "unit": "keV",
    "value": 1356.86,
    "uncertainty": {
     "type": "symmetric",
     "value": 0.007
    }
   },
   "spinParity": {
    "values": [
     {
      "twoTimesSpin": 15,
      "isTentativeSpin": false,
      "parity": "+",
      "isTentativeParity": false
     }
    ]
   },
   "isStable": false,
   "halfLife": {
    "unit": "ns",
    "value": 10.8,
    "uncertainty": {
     "type": "symmetric",
     "value": 0.5
    }
   },
   "flags": [
    "L"
   ],
   "crossReferences": [
    {
     "dataset": "176LU(N,G) E=THERMAL"
    },
    {
     "dataset": "176LU(D,P)"
    },
    {
     "dataset": "(HI,XNG)"
    }
   ],
   "gammas": [
    {
     "energy": {
      "unit": "keV",
      "value": 502.54,
      "uncertainty": {
       "type": "symmetric",
       "value": 0.06
      }
     },
     "gammaIntensity": {
      "value": 0.8,
      "uncertainty": {
       "type": "symmetric",
       "value": 0.6
      }
     },
     "initialLevelIndex": 64,
     "finalLevelIndex": 24,
     "multipolarity": {
      "stringRepresentation": "[M1]",
      "spins": [
       {
        "spin": 1,
        "evaluatorInferred": true
       }
      ],
      "parity": "+"
     },
     "theoreticalInternalConversionCoefficients": {
      "totalValue": {
       "value": 0.0438,
       "uncertainty": {
        "type": "unreported"
       }
      },
      "shellValues": [
       {
        "includesOuterShells": false,
        "shell": "K",
        "value": 0.0368,
        "uncertainty": {
         "type": "symmetric",
         "value": 0.0006
        }
       },
       {
        "includesOuterShells": false,
        "shell": "L",
        "value": 0.00548,
        "uncertainty": {
         "type": "symmetric",
         "value": 0.00008
        }
       },
       {
        "includesOuterShells": false,
        "shell": "M",
        "value": 0.001228,
        "uncertainty": {
         "type": "symmetric",
         "value": 0.000018
        }
       },
       {
        "includesOuterShells": false,
        "shell": "N",
        "value": 0.00029,
        "uncertainty": {
         "type": "symmetric",
         "value": 0.000004
        }
       },
       {
        "includesOuterShells": false,
        "shell": "O",
        "value": 0.0000431,
        "uncertainty": {
         "type": "symmetric",
         "value": 6e-7
        }
       },
       {
        "includesOuterShells": false,
        "shell": "P",
        "value": 0.0000027,
        "uncertainty": {
         "type": "symmetric",
         "value": 4e-8
        }
       }
      ]
     },
     "reducedTransitionProbabilities": [
      {
       "multipolarity": "M1",
       "unit": "W.u.",
       "value": 9e-8,
       "uncertainty": {
        "type": "symmetric",
        "value": 7e-8
       }
      }
     ]
    },
    {
     "energy": {
      "unit": "keV",
      "value": 720.721,
      "uncertainty": {
       "type": "symmetric",
       "value": 0.018
      }
     },
     "gammaIntensity": {
      "value": 11.9,
      "uncertainty": {
       "type": "symmetric",
       "value": 1.9
      }
     },
     "initialLevelIndex": 64,
     "finalLevelIndex": 11,
     "multipolarity": {
      "stringRepresentation": "M1",
      "spins": [
       {
        "spin": 1
       }
      ],
      "parity": "+"
     },
     "theoreticalInternalConversionCoefficients": {
      "totalValue": {
       "value": 0.01745,
       "uncertainty": {
        "type": "unreported"
       }
      },
      "shellValues": [
       {
        "includesOuterShells": false,
        "shell": "K",
        "value": 0.01467,
        "uncertainty": {
         "type": "symmetric",
         "value": 0.00021
        }
       },
       {
        "includesOuterShells": false,
        "shell": "L",
        "value": 0.00216,
        "uncertainty": {
         "type": "symmetric",
         "value": 0.00003
        }
       },
       {
        "includesOuterShells": false,
        "shell": "M",
        "value": 0.000484,
        "uncertainty": {
         "type": "symmetric",
         "value": 0.000007
        }
       },
       {
        "includesOuterShells": false,
        "shell": "N",
        "value": 0.0001142,
        "uncertainty": {
         "type": "symmetric",
         "value": 0.0000016
        }
       },
       {
        "includesOuterShells": false,
        "shell": "O",
        "value": 0.000017,
        "uncertainty": {
         "type": "symmetric",
         "value": 2.4e-7
        }
       },
       {
        "includesOuterShells": false,
        "shell": "P",
        "value": 0.00000107,
        "uncertainty": {
         "type": "symmetric",
         "value": 1.5e-8
        }
       }
      ]
     },
     "reducedTransitionProbabilities": [
      {
       "multipolarity": "M1",
       "unit": "W.u.",
       "value": 4.5e-7,
       "uncertainty": {
        "type": "symmetric",
        "value": 9e-8
       }
      }
     ],
     "comments": [
      {
       "type": "comment",
       "head": [
        {
         "name": "M"
        }
       ],
       "body": "\\ensuremath{\\alpha}(K)exp=0.010 (1971Ma45). E2 admixtures are possible"
      }
     ]
    },
    {
     "energy": {
      "unit": "keV",
      "value": 916.25,
      "uncertainty": {
       "type": "symmetric",
       "value": 0.16
      }
     },
     "gammaIntensity": {
      "value": 17,
      "uncertainty": {
       "type": "symmetric",
       "value": 3
      }
     },
     "initialLevelIndex": 64,
     "finalLevelIndex": 5,
     "multipolarity": {
      "stringRepresentation": "M1",
      "spins": [
       {
        "spin": 1
       }
      ],
      "parity": "+"
     },
     "theoreticalInternalConversionCoefficients": {
      "totalValue": {
       "value": 0.00958,
       "uncertainty": {
        "type": "unreported"
       }
      },
      "shellValues": [
       {
        "includesOuterShells": false,
        "shell": "K",
        "value": 0.00807,
        "uncertainty": {
         "type": "symmetric",
         "value": 0.00012
        }
       },
       {
        "includesOuterShells": false,
        "shell": "L",
        "value": 0.001178,
        "uncertainty": {
         "type": "symmetric",
         "value": 0.000017
        }
       },
       {
        "includesOuterShells": false,
        "shell": "M",
        "value": 0.000263,
        "uncertainty": {
         "type": "symmetric",
         "value": 0.000004
        }
       },
       {
        "includesOuterShells": false,
        "shell": "N",
        "value": 0.0000622,
        "uncertainty": {
         "type": "symmetric",
         "value": 9e-7
        }
       },
       {
        "includesOuterShells": false,
        "shell": "O",
        "value": 0.00000927,
        "uncertainty": {
         "type": "symmetric",
         "value": 1.3e-7
        }
       },
       {
        "includesOuterShells": false,
        "shell": "P",
        "value": 5.85e-7,
        "uncertainty": {
         "type": "symmetric",
         "value": 9e-9
        }
       }
      ]
     },
     "reducedTransitionProbabilities": [
      {
       "multipolarity": "M1",
       "unit": "W.u.",
       "value": 3.1e-7,
       "uncertainty": {
        "type": "symmetric",
        "value": 6e-8
       }
      }
     ],
     "comments": [
      {
       "type": "comment",
       "head": [
        {
         "name": "M"
        }
       ],
       "body": "\\ensuremath{\\alpha}(K)exp=0.0043 (1971Ma45). E2 admixtures are possible"
      }
     ]
    },
    {
     "energy": {
      "unit": "keV",
      "value": 1067,
      "uncertainty": {
       "type": "symmetric",
       "value": 0.5
      }
     },
     "gammaIntensity": {
      "value": 11,
      "uncertainty": {
       "type": "symmetric",
       "value": 4
      }
     },
     "initialLevelIndex": 64,
     "finalLevelIndex": 4,
     "multipolarity": {
      "stringRepresentation": "[M2]",
      "spins": [
       {
        "spin": 2,
        "evaluatorInferred": true
       }
      ],
      "parity": "-"
     },
     "theoreticalInternalConversionCoefficients": {
      "totalValue": {
       "value": 0.0162,
       "uncertainty": {
        "type": "unreported"
       }
      },
      "shellValues": [
       {
        "includesOuterShells": false,
        "shell": "K",
        "value": 0.01347,
        "uncertainty": {
         "type": "symmetric",
         "value": 0.00019
        }
       },
       {
        "includesOuterShells": false,
        "shell": "L",
        "value": 0.00212,
        "uncertainty": {
         "type": "symmetric",
         "value": 0.00003
        }
       },
       {
        "includesOuterShells": false,
        "shell": "M",
        "value": 0.000479,
        "uncertainty": {
         "type": "symmetric",
         "value": 0.000007
        }
       },
       {
        "includesOuterShells": false,
        "shell": "N",
        "value": 0.0001133,
        "uncertainty": {
         "type": "symmetric",
         "value": 0.0000016
        }
       },
       {
        "includesOuterShells": false,
        "shell": "O",
        "value": 0.0000168,
        "uncertainty": {
         "type": "symmetric",
         "value": 2.4e-7
        }
       },
       {
        "includesOuterShells": false,
        "shell": "P",
        "value": 0.000001039,
        "uncertainty": {
         "type": "symmetric",
         "value": 1.5e-8
        }
       }
      ]
     },
     "reducedTransitionProbabilities": [
      {
       "multipolarity": "M2",
       "unit": "W.u.",
       "value": 0.005,
       "uncertainty": {
        "type": "symmetric",
        "value": 0.0018
       }
      }
     ],
     "flags": [
      "S"
     ]
    },
    {
     "energy": {
      "unit": "keV",
      "value": 1088.129,
      "uncertainty": {
       "type": "symmetric",
       "value": 0.01
      }
     },
     "gammaIntensity": {
      "value": 100,
      "uncertainty": {
       "type": "symmetric",
       "value": 14
      }
     },
     "initialLevelIndex": 64,
     "finalLevelIndex": 3,
     "multipolarity": {
      "stringRepresentation": "(E2)",
      "spins": [
       {
        "spin": 2
       }
      ],
      "parity": "+"
     },
     "theoreticalInternalConversionCoefficients": {
      "totalValue": {
       "value": 0.00329,
       "uncertainty": {
        "type": "unreported"
       }
      },
      "shellValues": [
       {
        "includesOuterShells": false,
        "shell": "K",
        "value": 0.00273,
        "uncertainty": {
         "type": "symmetric",
         "value": 0.00004
        }
       },
       {
        "includesOuterShells": false,
        "shell": "L",
        "value": 0.000428,
        "uncertainty": {
         "type": "symmetric",
         "value": 0.000006
        }
       },
       {
        "includesOuterShells": false,
        "shell": "M",
        "value": 0.0000966,
        "uncertainty": {
         "type": "symmetric",
         "value": 0.0000014
        }
       },
       {
        "includesOuterShells": false,
        "shell": "N",
        "value": 0.0000227,
        "uncertainty": {
         "type": "symmetric",
         "value": 4e-7
        }
       },
       {
        "includesOuterShells": false,
        "shell": "O",
        "value": 0.00000331,
        "uncertainty": {
         "type": "symmetric",
         "value": 5e-8
        }
       },
       {
        "includesOuterShells": false,
        "shell": "P",
        "value": 1.89e-7,
        "uncertainty": {
         "type": "symmetric",
         "value": 3e-9
        }
       }
      ]
     },
     "reducedTransitionProbabilities": [
      {
       "multipolarity": "E2",
       "unit": "W.u.",
       "value": 0.0004,
       "uncertainty": {
        "type": "symmetric",
        "value": 0.00003
       }
      }
     ],
     "comments": [
      {
       "type": "comment",
       "head": [
        {
         "name": "M"
        }
       ],
       "body": "\\ensuremath{\\alpha}(K)exp=0.0048 (1971Ma45)."
      }
     ]
    },
    {
     "energy": {
      "unit": "keV",
      "value": 1206,
      "uncertainty": {
       "type": "symmetric",
       "value": 0.5
      }
     },
     "gammaIntensity": {
      "value": 5.7,
      "uncertainty": {
       "type": "limit",
       "limitType": "upper",
       "isInclusive": true
      }
     },
     "initialLevelIndex": 64,
     "finalLevelIndex": 2,
     "multipolarity": {
      "stringRepresentation": "[E3]",
      "spins": [
       {
        "spin": 3,
        "evaluatorInferred": true
       }
      ],
      "parity": "-"
     },
     "theoreticalInternalConversionCoefficients": {
      "totalValue": {
       "value": 0.00559,
       "uncertainty": {
        "type": "unreported"
       }
      },
      "pairCreationValue": {
       "value": 0.00000152,
       "uncertainty": {
        "type": "symmetric",
        "value": 3e-8
       }
      },
      "shellValues": [
       {
        "includesOuterShells": false,
        "shell": "K",
        "value": 0.00452,
        "uncertainty": {
         "type": "symmetric",
         "value": 0.00007
        }
       },
       {
        "includesOuterShells": false,
        "shell": "L",
        "value": 0.000821,
        "uncertainty": {
         "type": "symmetric",
         "value": 0.000012
        }
       },
       {
        "includesOuterShells": false,
        "shell": "M",
        "value": 0.000188,
        "uncertainty": {
         "type": "symmetric",
         "value": 0.000003
        }
       },
       {
        "includesOuterShells": false,
        "shell": "N",
        "value": 0.0000443,
        "uncertainty": {
         "type": "symmetric",
         "value": 7e-7
        }
       },
       {
        "includesOuterShells": false,
        "shell": "O",
        "value": 0.00000636,
        "uncertainty": {
         "type": "symmetric",
         "value": 9e-8
        }
       },
       {
        "includesOuterShells": false,
        "shell": "P",
        "value": 3.34e-7,
        "uncertainty": {
         "type": "symmetric",
         "value": 5e-9
        }
       }
      ]
     },
     "flags": [
      "S"
     ]
    }
   ],
   "band": 12,
   "comments": [
    {
     "type": "comment",
     "head": [
      {
       "name": "J"
      }
     ],
     "body": "720.721\\ensuremath{\\gamma} M1 to the 15/2\\ensuremath{^{+}}; 916.25\\ensuremath{\\gamma} M1 to 13/2\\ensuremath{^{+}} level; 1088.129\\ensuremath{\\gamma} (E2) to 11/2\\ensuremath{^{+}}; configuration assignment."
    },
    {
     "type": "comment",
     "head": [
      {
       "name": "T"
      }
     ],
     "body": "Weighted average of 10.8 ns \\textit{5} (2016De30), 11.1 ns \\textit{21} (2002McZY) and 11 ns \\textit{2} (1996Pe05)."
    },
    {
     "type": "comment",
     "head": [
      {
       "name": "CONF"
      }
     ],
     "body": "\\ensuremath{K^{\\pi}}=15/2\\ensuremath{^{+}}:\\ensuremath{\\pi}7/2[404]\\ensuremath{\\otimes}\\ensuremath{\\nu}\\ensuremath{^{\\textnormal{2}}}(7/2[514],1/2[510]). The assignment is tentative."
    }
   ]
  },
  {
   "energy": {
    "unit": "keV",
    "value": 1388,
    "uncertainty": {
     "type": "symmetric",
     "value": 1
    }
   },
   "spinParity": {
    "values": [
     {
      "twoTimesSpin": 13,
      "isTentativeSpin": true,
      "parity": "+",
      "isTentativeParity": true
     }
    ]
   },
   "isStable": false,
   "flags": [
    "q"
   ],
   "crossReferences": [
    {
     "dataset": "176LU(N,G) E=THERMAL"
    }
   ],
   "gammas": [
    {
     "energy": {
      "unit": "keV",
      "value": 1099,
      "uncertainty": {
       "type": "symmetric",
       "value": 1
      }
     },
     "gammaIntensity": {
      "value": 100,
      "uncertainty": {
       "type": "unreported"
      }
     },
     "initialLevelIndex": 65,
     "finalLevelIndex": 4
    }
   ],
   "band": 18,
   "comments": [
    {
     "type": "comment",
     "head": [
      {
       "name": "J"
      }
     ],
     "body": "1099.0\\ensuremath{\\gamma} to 11/2\\ensuremath{^{-}}; band assignment"
    }
   ]
  },
  {
   "energy": {
    "unit": "keV",
    "value": 1389.659,
    "uncertainty": {
     "type": "symmetric",
     "value": 0.003
    }
   },
   "spinParity": {
    "values": [
     {
      "twoTimesSpin": 17,
      "isTentativeSpin": false,
      "parity": "+",
      "isTentativeParity": false
     }
    ]
   },
   "isStable": false,
   "flags": [
    "C"
   ],
   "crossReferences": [
    {
     "dataset": "176LU(N,G) E=THERMAL"
    },
    {
     "dataset": "(HI,XNG)"
    }
   ],
   "gammas": [
    {
     "energy": {
      "unit": "keV",
      "value": 212.861,
      "uncertainty": {
       "type": "symmetric",
       "value": 0.002
      }
     },
     "gammaIntensity": {
      "value": 100,
      "uncertainty": {
       "type": "symmetric",
       "value": 12
      }
     },
     "initialLevelIndex": 66,
     "finalLevelIndex": 43,
     "multipolarity": {
      "stringRepresentation": "M1(+E2)",
      "isMixedTransition": true,
      "spins": [
       {
        "spin": 1
       },
       {
        "spin": 2
       }
      ],
      "parity": "+"
     },
     "theoreticalInternalConversionCoefficients": {
      "totalValue": {
       "value": 0.436,
       "uncertainty": {
        "type": "unreported"
       }
      },
      "shellValues": [
       {
        "includesOuterShells": false,
        "shell": "K",
        "value": 0.364,
        "uncertainty": {
         "type": "symmetric",
         "value": 0.006
        }
       },
       {
        "includesOuterShells": false,
        "shell": "L",
        "value": 0.0557,
        "uncertainty": {
         "type": "symmetric",
         "value": 0.0008
        }
       },
       {
        "includesOuterShells": false,
        "shell": "M",
        "value": 0.01251,
        "uncertainty": {
         "type": "symmetric",
         "value": 0.00018
        }
       },
       {
        "includesOuterShells": false,
        "shell": "N",
        "value": 0.00295,
        "uncertainty": {
         "type": "symmetric",
         "value": 0.00005
        }
       },
       {
        "includesOuterShells": false,
        "shell": "O",
        "value": 0.000438,
        "uncertainty": {
         "type": "symmetric",
         "value": 0.000007
        }
       },
       {
        "includesOuterShells": false,
        "shell": "P",
        "value": 0.0000272,
        "uncertainty": {
         "type": "symmetric",
         "value": 4e-7
        }
       }
      ]
     },
     "comments": [
      {
       "type": "comment",
       "head": [
        {
         "name": "M"
        }
       ],
       "body": "\\ensuremath{\\alpha}(K)exp=0.26 \\textit{4} and \\ensuremath{\\alpha}(M3)exp=0.015 \\textit{8} (1996Pe05) and \\ensuremath{\\alpha}(K)exp=0.38 (1971Ma45)."
      }
     ]
    },
    {
     "energy": {
      "unit": "keV",
      "value": 404.361,
      "uncertainty": {
       "type": "symmetric",
       "value": 0.004
      }
     },
     "gammaIntensity": {
      "value": 81,
      "uncertainty": {
       "type": "symmetric",
       "value": 10
      }
     },
     "initialLevelIndex": 66,
     "finalLevelIndex": 31,
     "multipolarity": {
      "stringRepresentation": "E2",
      "spins": [
       {
        "spin": 2
       }
      ],
      "parity": "+"
     },
     "theoreticalInternalConversionCoefficients": {
      "totalValue": {
       "value": 0.0325,
       "uncertainty": {
        "type": "unreported"
       }
      },
      "shellValues": [
       {
        "includesOuterShells": false,
        "shell": "K",
        "value": 0.0245,
        "uncertainty": {
         "type": "symmetric",
         "value": 0.0004
        }
       },
       {
        "includesOuterShells": false,
        "shell": "L",
        "value": 0.00614,
        "uncertainty": {
         "type": "symmetric",
         "value": 0.00009
        }
       },
       {
        "includesOuterShells": false,
        "shell": "M",
        "value": 0.001444,
        "uncertainty": {
         "type": "symmetric",
         "value": 0.000021
        }
       },
       {
        "includesOuterShells": false,
        "shell": "N",
        "value": 0.000337,
        "uncertainty": {
         "type": "symmetric",
         "value": 0.000005
        }
       },
       {
        "includesOuterShells": false,
        "shell": "O",
        "value": 0.0000454,
        "uncertainty": {
         "type": "symmetric",
         "value": 7e-7
        }
       },
       {
        "includesOuterShells": false,
        "shell": "P",
        "value": 0.000001614,
        "uncertainty": {
         "type": "symmetric",
         "value": 2.3e-8
        }
       }
      ]
     },
     "comments": [
      {
       "type": "comment",
       "head": [
        {
         "name": "M"
        }
       ],
       "body": "\\ensuremath{\\alpha}(K)exp=0.018 \\textit{6} (1996Pe05) and \\ensuremath{\\alpha}(K)exp=0.02 (1971Ma45)."
      }
     ]
    },
    {
     "energy": {
      "unit": "keV",
      "value": 535.25,
      "uncertainty": {
       "type": "symmetric",
       "value": 0.03
      }
     },
     "gammaIntensity": {
      "value": 13,
      "uncertainty": {
       "type": "symmetric",
       "value": 3
      }
     },
     "initialLevelIndex": 66,
     "finalLevelIndex": 24,
     "multipolarity": {
      "stringRepresentation": "M1(+E2)",
      "isMixedTransition": true,
      "spins": [
       {
        "spin": 1
       },
       {
        "spin": 2
       }
      ],
      "parity": "+"
     },
     "theoreticalInternalConversionCoefficients": {
      "totalValue": {
       "value": 0.0372,
       "uncertainty": {
        "type": "unreported"
       }
      },
      "shellValues": [
       {
        "includesOuterShells": false,
        "shell": "K",
        "value": 0.0313,
        "uncertainty": {
         "type": "symmetric",
         "value": 0.0005
        }
       },
       {
        "includesOuterShells": false,
        "shell": "L",
        "value": 0.00465,
        "uncertainty": {
         "type": "symmetric",
         "value": 0.00007
        }
       },
       {
        "includesOuterShells": false,
        "shell": "M",
        "value": 0.001042,
        "uncertainty": {
         "type": "symmetric",
         "value": 0.000015
        }
       },
       {
        "includesOuterShells": false,
        "shell": "N",
        "value": 0.000246,
        "uncertainty": {
         "type": "symmetric",
         "value": 0.000004
        }
       },
       {
        "includesOuterShells": false,
        "shell": "O",
        "value": 0.0000366,
        "uncertainty": {
         "type": "symmetric",
         "value": 6e-7
        }
       },
       {
        "includesOuterShells": false,
        "shell": "P",
        "value": 0.00000229,
        "uncertainty": {
         "type": "symmetric",
         "value": 4e-8
        }
       }
      ]
     },
     "comments": [
      {
       "type": "comment",
       "head": [
        {
         "name": "M"
        }
       ],
       "body": "\\ensuremath{\\alpha}(K)exp=0.03 (1971Ma45)."
      }
     ]
    },
    {
     "energy": {
      "unit": "keV",
      "value": 753.45,
      "uncertainty": {
       "type": "symmetric",
       "value": 0.03
      }
     },
     "gammaIntensity": {
      "value": 26,
      "uncertainty": {
       "type": "symmetric",
       "value": 5
      }
     },
     "initialLevelIndex": 66,
     "finalLevelIndex": 11,
     "multipolarity": {
      "stringRepresentation": "M1(+E2)",
      "isMixedTransition": true,
      "spins": [
       {
        "spin": 1
       },
       {
        "spin": 2
       }
      ],
      "parity": "+"
     },
     "theoreticalInternalConversionCoefficients": {
      "totalValue": {
       "value": 0.01561,
       "uncertainty": {
        "type": "unreported"
       }
      },
      "shellValues": [
       {
        "includesOuterShells": false,
        "shell": "K",
        "value": 0.01313,
        "uncertainty": {
         "type": "symmetric",
         "value": 0.00019
        }
       },
       {
        "includesOuterShells": false,
        "shell": "L",
        "value": 0.00193,
        "uncertainty": {
         "type": "symmetric",
         "value": 0.00003
        }
       },
       {
        "includesOuterShells": false,
        "shell": "M",
        "value": 0.000432,
        "uncertainty": {
         "type": "symmetric",
         "value": 0.000006
        }
       },
       {
        "includesOuterShells": false,
        "shell": "N",
        "value": 0.000102,
        "uncertainty": {
         "type": "symmetric",
         "value": 0.0000015
        }
       },
       {
        "includesOuterShells": false,
        "shell": "O",
        "value": 0.00001518,
        "uncertainty": {
         "type": "symmetric",
         "value": 2.2e-7
        }
       },
       {
        "includesOuterShells": false,
        "shell": "P",
        "value": 9.56e-7,
        "uncertainty": {
         "type": "symmetric",
         "value": 1.4e-8
        }
       }
      ]
     },
     "comments": [
      {
       "type": "comment",
       "head": [
        {
         "name": "M"
        }
       ],
       "body": "\\ensuremath{\\alpha}(K)exp=0.011 (1971Ma45)."
      }
     ]
    }
   ],
   "band": 2,
   "comments": [
    {
     "type": "comment",
     "head": [
      {
       "name": "J"
      }
     ],
     "body": "404.361\\ensuremath{\\gamma} E2 to 13/2\\ensuremath{^{+}}; 535.247\\ensuremath{\\gamma} M1(+E2) to 17/2\\ensuremath{^{+}}; band assignment."
    }
   ]
  },
  {
   "energy": {
    "unit": "keV",
    "value": 1394.48,
    "uncertainty": {
     "type": "symmetric",
     "value": 0.07
    }
   },
   "spinParity": {
    "values": [
     {
      "twoTimesSpin": 5,
      "isTentativeSpin": true,
      "parity": "-",
      "isTentativeParity": true
     }
    ]
   },
   "isStable": false,
   "flags": [
    "H"
   ],
   "crossReferences": [
    {
     "dataset": "176LU(N,G) E=THERMAL"
    },
    {
     "dataset": "176YB(3HE,D),(A,T)",
     "level": 1390
    }
   ],
   "gammas": [
    {
     "energy": {
      "unit": "keV",
      "value": 632.95,
      "uncertainty": {
       "type": "symmetric",
       "value": 0.27
      }
     },
     "gammaIntensity": {
      "value": 100,
      "uncertainty": {
       "type": "unreported"
      }
     },
     "initialLevelIndex": 67,
     "finalLevelIndex": 16,
     "multipolarity": {
      "stringRepresentation": "M1(+E2)",
      "isMixedTransition": true,
      "spins": [
       {
        "spin": 1
       },
       {
        "spin": 2
       }
      ],
      "parity": "+"
     },
     "theoreticalInternalConversionCoefficients": {
      "totalValue": {
       "value": 0.0242,
       "uncertainty": {
        "type": "unreported"
       }
      },
      "shellValues": [
       {
        "includesOuterShells": false,
        "shell": "K",
        "value": 0.0204,
        "uncertainty": {
         "type": "symmetric",
         "value": 0.0003
        }
       },
       {
        "includesOuterShells": false,
        "shell": "L",
        "value": 0.00301,
        "uncertainty": {
         "type": "symmetric",
         "value": 0.00005
        }
       },
       {
        "includesOuterShells": false,
        "shell": "M",
        "value": 0.000675,
        "uncertainty": {
         "type": "symmetric",
         "value": 0.00001
        }
       },
       {
        "includesOuterShells": false,
        "shell": "N",
        "value": 0.0001593,
        "uncertainty": {
         "type": "symmetric",
         "value": 0.0000023
        }
       },
       {
        "includesOuterShells": false,
        "shell": "O",
        "value": 0.0000237,
        "uncertainty": {
         "type": "symmetric",
         "value": 4e-7
        }
       },
       {
        "includesOuterShells": false,
        "shell": "P",
        "value": 0.000001489,
        "uncertainty": {
         "type": "symmetric",
         "value": 2.1e-8
        }
       }
      ]
     }
    }
   ],
   "band": 5,
   "comments": [
    {
     "type": "comment",
     "head": [
      {
       "name": "J"
      }
     ],
     "body": "L=3 in \\ensuremath{^{\\textnormal{176}}}Yb(\\ensuremath{^{\\textnormal{3}}}He,d), (\\ensuremath{\\alpha},t); 632.95\\ensuremath{\\gamma} M1(+E2) to 5/2\\ensuremath{^{-}}; band assignment"
    }
   ]
  },
  {
   "energy": {
    "unit": "keV",
    "value": 1429.4,
    "uncertainty": {
     "type": "unreported"
    }
   },
   "isStable": false,
   "flags": [
    "Z"
   ],
   "crossReferences": [
    {
     "dataset": "176LU(N,G) E=THERMAL"
    },
    {
     "dataset": "176YB(3HE,D),(A,T)",
     "level": 1431
    }
   ]
  },
  {
   "energy": {
    "unit": "keV",
    "value": 1438.3,
    "uncertainty": {
     "type": "symmetric",
     "value": 0.5
    }
   },
   "spinParity": {
    "values": [
     {
      "twoTimesSpin": 17,
      "isTentativeSpin": true,
      "parity": "-",
      "isTentativeParity": true
     }
    ]
   },
   "isStable": false,
   "halfLife": {
    "unit": "ns",
    "value": 13,
    "uncertainty": {
     "type": "limit",
     "limitType": "upper",
     "isInclusive": false
    }
   },
   "flags": [
    "O"
   ],
   "crossReferences": [
    {
     "dataset": "(HI,XNG)"
    }
   ],
   "gammas": [
    {
     "energy": {
      "unit": "keV",
      "value": 81.4,
      "uncertainty": {
       "type": "symmetric",
       "value": 0.5
      }
     },
     "gammaIntensity": {
      "value": 100,
      "uncertainty": {
       "type": "unreported"
      }
     },
     "initialLevelIndex": 69,
     "finalLevelIndex": 64,
     "multipolarity": {
      "stringRepresentation": "[E1]",
      "spins": [
       {
        "spin": 1,
        "evaluatorInferred": true
       }
      ],
      "parity": "-"
     },
     "theoreticalInternalConversionCoefficients": {
      "totalValue": {
       "value": 0.598,
       "uncertainty": {
        "type": "symmetric",
        "value": 0.013
       }
      },
      "shellValues": [
       {
        "includesOuterShells": false,
        "shell": "K",
        "value": 0.489,
        "uncertainty": {
         "type": "symmetric",
         "value": 0.011
        }
       },
       {
        "includesOuterShells": false,
        "shell": "L",
        "value": 0.0851,
        "uncertainty": {
         "type": "symmetric",
         "value": 0.0019
        }
       },
       {
        "includesOuterShells": false,
        "shell": "M",
        "value": 0.0192,
        "uncertainty": {
         "type": "symmetric",
         "value": 0.0005
        }
       },
       {
        "includesOuterShells": false,
        "shell": "N",
        "value": 0.00443,
        "uncertainty": {
         "type": "symmetric",
         "value": 0.0001
        }
       },
       {
        "includesOuterShells": false,
        "shell": "O",
        "value": 0.000596,
        "uncertainty": {
         "type": "symmetric",
         "value": 0.000013
        }
       },
       {
        "includesOuterShells": false,
        "shell": "P",
        "value": 0.0000256,
        "uncertainty": {
         "type": "symmetric",
         "value": 6e-7
        }
       }
      ]
     },
     "flags": [
      "S"
     ]
    }
   ],
   "band": 15,
   "comments": [
    {
     "type": "comment",
     "head": [
      {
       "name": "J"
      }
     ],
     "body": "81.4\\ensuremath{\\gamma} to 15/2\\ensuremath{^{+}}; configuration assignment."
    },
    {
     "type": "comment",
     "head": [
      {
       "name": "T"
      }
     ],
     "body": "From 233\\ensuremath{\\gamma}-(916,1088)\\ensuremath{\\gamma}(\\ensuremath{\\Delta}t) in 2002McZY and two-level fit"
    },
    {
     "type": "comment",
     "head": [
      {
       "name": "CONF"
      }
     ],
     "body": "\\ensuremath{K^{\\pi}}=17/2\\ensuremath{^{-}}, \\ensuremath{\\pi}(9/2[514])\\ensuremath{\\otimes}\\ensuremath{\\nu}\\ensuremath{^{2}}(1/2[510],7/2[514]) or \\ensuremath{\\pi}(7/2[404])\\ensuremath{\\otimes}\\ensuremath{\\nu}\\ensuremath{^{2}}(1/2[510],9/2[624])."
    }
   ]
  },
  {
   "energy": {
    "unit": "keV",
    "value": 1443.72,
    "uncertainty": {
     "type": "symmetric",
     "value": 0.15
    }
   },
   "spinParity": {
    "values": [
     {
      "twoTimesSpin": 9,
      "isTentativeSpin": false,
      "parity": "+",
      "isTentativeParity": false
     }
    ]
   },
   "isStable": false,
   "flags": [
    "r"
   ],
   "crossReferences": [
    {
     "dataset": "176LU(N,G) E=THERMAL"
    }
   ],
   "gammas": [
    {
     "energy": {
      "unit": "keV",
      "value": 1175.5,
      "uncertainty": {
       "type": "symmetric",
       "value": 1
      }
     },
     "gammaIntensity": {
      "value": 100,
      "uncertainty": {
       "type": "symmetric",
       "value": 36
      }
     },
     "initialLevelIndex": 70,
     "finalLevelIndex": 3,
     "multipolarity": {
      "stringRepresentation": "M1(+E2)",
      "isMixedTransition": true,
      "spins": [
       {
        "spin": 1
       },
       {
        "spin": 2
       }
      ],
      "parity": "+"
     },
     "theoreticalInternalConversionCoefficients": {
      "totalValue": {
       "value": 0.0052,
       "uncertainty": {
        "type": "unreported"
       }
      },
      "pairCreationValue": {
       "value": 0.00000364,
       "uncertainty": {
        "type": "symmetric",
        "value": 1.1e-7
       }
      },
      "shellValues": [
       {
        "includesOuterShells": false,
        "shell": "K",
        "value": 0.00438,
        "uncertainty": {
         "type": "symmetric",
         "value": 0.00007
        }
       },
       {
        "includesOuterShells": false,
        "shell": "L",
        "value": 0.000634,
        "uncertainty": {
         "type": "symmetric",
         "value": 0.000009
        }
       },
       {
        "includesOuterShells": false,
        "shell": "M",
        "value": 0.0001417,
        "uncertainty": {
         "type": "symmetric",
         "value": 0.000002
        }
       },
       {
        "includesOuterShells": false,
        "shell": "N",
        "value": 0.0000335,
        "uncertainty": {
         "type": "symmetric",
         "value": 5e-7
        }
       },
       {
        "includesOuterShells": false,
        "shell": "O",
        "value": 0.00000499,
        "uncertainty": {
         "type": "symmetric",
         "value": 7e-8
        }
       },
       {
        "includesOuterShells": false,
        "shell": "P",
        "value": 3.16e-7,
        "uncertainty": {
         "type": "symmetric",
         "value": 5e-9
        }
       }
      ]
     },
     "comments": [
      {
       "type": "comment",
       "head": [
        {
         "name": "M"
        }
       ],
       "body": "\\ensuremath{\\alpha}(K)exp=0.0017 (1971Ma45)."
      }
     ]
    },
    {
     "energy": {
      "unit": "keV",
      "value": 1322.07,
      "uncertainty": {
       "type": "symmetric",
       "value": 0.15
      }
     },
     "gammaIntensity": {
      "value": 80,
      "uncertainty": {
       "type": "symmetric",
       "value": 15
      }
     },
     "initialLevelIndex": 70,
     "finalLevelIndex": 1,
     "multipolarity": {
      "stringRepresentation": "M1(+E2)",
      "isMixedTransition": true,
      "spins": [
       {
        "spin": 1
       },
       {
        "spin": 2
       }
      ],
      "parity": "+"
     },
     "theoreticalInternalConversionCoefficients": {
      "totalValue": {
       "value": 0.00393,
       "uncertainty": {
        "type": "unreported"
       }
      },
      "pairCreationValue": {
       "value": 0.0000289,
       "uncertainty": {
        "type": "symmetric",
        "value": 4e-7
       }
      },
      "shellValues": [
       {
        "includesOuterShells": false,
        "shell": "K",
        "value": 0.00329,
        "uncertainty": {
         "type": "symmetric",
         "value": 0.00005
        }
       },
       {
        "includesOuterShells": false,
        "shell": "L",
        "value": 0.000475,
        "uncertainty": {
         "type": "symmetric",
         "value": 0.000007
        }
       },
       {
        "includesOuterShells": false,
        "shell": "M",
        "value": 0.0001061,
        "uncertainty": {
         "type": "symmetric",
         "value": 0.0000015
        }
       },
       {
        "includesOuterShells": false,
        "shell": "N",
        "value": 0.0000251,
        "uncertainty": {
         "type": "symmetric",
         "value": 4e-7
        }
       },
       {
        "includesOuterShells": false,
        "shell": "O",
        "value": 0.00000374,
        "uncertainty": {
         "type": "symmetric",
         "value": 6e-8
        }
       },
       {
        "includesOuterShells": false,
        "shell": "P",
        "value": 2.37e-7,
        "uncertainty": {
         "type": "symmetric",
         "value": 4e-9
        }
       }
      ]
     },
     "comments": [
      {
       "type": "comment",
       "head": [
        {
         "name": "M"
        }
       ],
       "body": "\\ensuremath{\\alpha}(K)exp=0.008 (1971Ma45)."
      }
     ]
    },
    {
     "energy": {
      "unit": "keV",
      "value": 1444.4,
      "uncertainty": {
       "type": "symmetric",
       "value": 1
      }
     },
     "gammaIntensity": {
      "value": 59,
      "uncertainty": {
       "type": "symmetric",
       "value": 17
      }
     },
     "initialLevelIndex": 70,
     "finalLevelIndex": 0,
     "multipolarity": {
      "stringRepresentation": "M1(+E2)",
      "isMixedTransition": true,
      "spins": [
       {
        "spin": 1
       },
       {
        "spin": 2
       }
      ],
      "parity": "+"
     },
     "theoreticalInternalConversionCoefficients": {
      "totalValue": {
       "value": 0.00322,
       "uncertainty": {
        "type": "unreported"
       }
      },
      "pairCreationValue": {
       "value": 0.0000687,
       "uncertainty": {
        "type": "symmetric",
        "value": 0.0000011
       }
      },
      "shellValues": [
       {
        "includesOuterShells": false,
        "shell": "K",
        "value": 0.00266,
        "uncertainty": {
         "type": "symmetric",
         "value": 0.00004
        }
       },
       {
        "includesOuterShells": false,
        "shell": "L",
        "value": 0.000383,
        "uncertainty": {
         "type": "symmetric",
         "value": 0.000006
        }
       },
       {
        "includesOuterShells": false,
        "shell": "M",
        "value": 0.0000854,
        "uncertainty": {
         "type": "symmetric",
         "value": 0.0000012
        }
       },
       {
        "includesOuterShells": false,
        "shell": "N",
        "value": 0.0000202,
        "uncertainty": {
         "type": "symmetric",
         "value": 3e-7
        }
       },
       {
        "includesOuterShells": false,
        "shell": "O",
        "value": 0.00000301,
        "uncertainty": {
         "type": "symmetric",
         "value": 5e-8
        }
       },
       {
        "includesOuterShells": false,
        "shell": "P",
        "value": 1.92e-7,
        "uncertainty": {
         "type": "symmetric",
         "value": 3e-9
        }
       }
      ]
     },
     "comments": [
      {
       "type": "comment",
       "head": [
        {
         "name": "M"
        }
       ],
       "body": "\\ensuremath{\\alpha}(K)exp=0.0029 (1971Ma45)."
      }
     ]
    }
   ],
   "band": 19,
   "comments": [
    {
     "type": "comment",
     "head": [
      {
       "name": "J"
      }
     ],
     "body": "1175.5\\ensuremath{\\gamma} M1(+E2) to 11/2\\ensuremath{^{+}}; 1444.4\\ensuremath{\\gamma} M1(+E2) to 7/2\\ensuremath{^{+}} level; band assignment."
    }
   ]
  },
  {
   "energy": {
    "unit": "keV",
    "value": 1454.392,
    "uncertainty": {
     "type": "symmetric",
     "value": 0.007
    }
   },
   "spinParity": {
    "values": [
     {
      "twoTimesSpin": 13,
      "isTentativeSpin": true,
      "parity": "+",
      "isTentativeParity": true
     }
    ]
   },
   "isStable": false,
   "flags": [
    "o"
   ],
   "crossReferences": [
    {
     "dataset": "176LU(N,G) E=THERMAL"
    },
    {
     "dataset": "176LU(D,P)",
     "level": 1453
    }
   ],
   "gammas": [
    {
     "energy": {
      "unit": "keV",
      "value": 97.534,
      "uncertainty": {
       "type": "symmetric",
       "value": 0.004
      }
     },
     "gammaIntensity": {
      "value": 10.8,
      "uncertainty": {
       "type": "symmetric",
       "value": 2.2
      }
     },
     "initialLevelIndex": 71,
     "finalLevelIndex": 64
    },
    {
     "energy": {
      "unit": "keV",
      "value": 1013.731,
      "uncertainty": {
       "type": "symmetric",
       "value": 0.013
      }
     },
     "gammaIntensity": {
      "value": 100,
      "uncertainty": {
       "type": "symmetric",
       "value": 11
      }
     },
     "initialLevelIndex": 71,
     "finalLevelIndex": 5,
     "multipolarity": {
      "stringRepresentation": "M1(+E2)",
      "isMixedTransition": true,
      "spins": [
       {
        "spin": 1
       },
       {
        "spin": 2
       }
      ],
      "parity": "+"
     },
     "theoreticalInternalConversionCoefficients": {
      "totalValue": {
       "value": 0.00746,
       "uncertainty": {
        "type": "unreported"
       }
      },
      "shellValues": [
       {
        "includesOuterShells": false,
        "shell": "K",
        "value": 0.00629,
        "uncertainty": {
         "type": "symmetric",
         "value": 0.00009
        }
       },
       {
        "includesOuterShells": false,
        "shell": "L",
        "value": 0.000915,
        "uncertainty": {
         "type": "symmetric",
         "value": 0.000013
        }
       },
       {
        "includesOuterShells": false,
        "shell": "M",
        "value": 0.000205,
        "uncertainty": {
         "type": "symmetric",
         "value": 0.000003
        }
       },
       {
        "includesOuterShells": false,
        "shell": "N",
        "value": 0.0000483,
        "uncertainty": {
         "type": "symmetric",
         "value": 7e-7
        }
       },
       {
        "includesOuterShells": false,
        "shell": "O",
        "value": 0.0000072,
        "uncertainty": {
         "type": "symmetric",
         "value": 1e-7
        }
       },
       {
        "includesOuterShells": false,
        "shell": "P",
        "value": 4.56e-7,
        "uncertainty": {
         "type": "symmetric",
         "value": 7e-9
        }
       }
      ]
     }
    },
    {
     "energy": {
      "unit": "keV",
      "value": 1185.1,
      "uncertainty": {
       "type": "symmetric",
       "value": 0.25
      }
     },
     "gammaIntensity": {
      "value": 85,
      "uncertainty": {
       "type": "symmetric",
       "value": 10
      }
     },
     "initialLevelIndex": 71,
     "finalLevelIndex": 3,
     "multipolarity": {
      "stringRepresentation": "M1(+E2)",
      "isMixedTransition": true,
      "spins": [
       {
        "spin": 1
       },
       {
        "spin": 2
       }
      ],
      "parity": "+"
     },
     "theoreticalInternalConversionCoefficients": {
      "totalValue": {
       "value": 0.0051,
       "uncertainty": {
        "type": "unreported"
       }
      },
      "pairCreationValue": {
       "value": 0.00000458,
       "uncertainty": {
        "type": "symmetric",
        "value": 7e-8
       }
      },
      "shellValues": [
       {
        "includesOuterShells": false,
        "shell": "K",
        "value": 0.00429,
        "uncertainty": {
         "type": "symmetric",
         "value": 0.00006
        }
       },
       {
        "includesOuterShells": false,
        "shell": "L",
        "value": 0.000622,
        "uncertainty": {
         "type": "symmetric",
         "value": 0.000009
        }
       },
       {
        "includesOuterShells": false,
        "shell": "M",
        "value": 0.0001388,
        "uncertainty": {
         "type": "symmetric",
         "value": 0.000002
        }
       },
       {
        "includesOuterShells": false,
        "shell": "N",
        "value": 0.0000328,
        "uncertainty": {
         "type": "symmetric",
         "value": 5e-7
        }
       },
       {
        "includesOuterShells": false,
        "shell": "O",
        "value": 0.00000489,
        "uncertainty": {
         "type": "symmetric",
         "value": 7e-8
        }
       },
       {
        "includesOuterShells": false,
        "shell": "P",
        "value": 3.1e-7,
        "uncertainty": {
         "type": "symmetric",
         "value": 5e-9
        }
       }
      ]
     }
    },
    {
     "energy": {
      "unit": "keV",
      "value": 1332.1,
      "uncertainty": {
       "type": "symmetric",
       "value": 0.5
      }
     },
     "gammaIntensity": {
      "value": 49,
      "uncertainty": {
       "type": "symmetric",
       "value": 7
      }
     },
     "initialLevelIndex": 71,
     "finalLevelIndex": 1,
     "multipolarity": {
      "stringRepresentation": "(E2)",
      "spins": [
       {
        "spin": 2
       }
      ],
      "parity": "+"
     },
     "theoreticalInternalConversionCoefficients": {
      "totalValue": {
       "value": 0.00224,
       "uncertainty": {
        "type": "unreported"
       }
      },
      "pairCreationValue": {
       "value": 0.0000243,
       "uncertainty": {
        "type": "symmetric",
        "value": 4e-7
       }
      },
      "shellValues": [
       {
        "includesOuterShells": false,
        "shell": "K",
        "value": 0.00185,
        "uncertainty": {
         "type": "symmetric",
         "value": 0.00003
        }
       },
       {
        "includesOuterShells": false,
        "shell": "L",
        "value": 0.000279,
        "uncertainty": {
         "type": "symmetric",
         "value": 0.000004
        }
       },
       {
        "includesOuterShells": false,
        "shell": "M",
        "value": 0.0000625,
        "uncertainty": {
         "type": "symmetric",
         "value": 9e-7
        }
       },
       {
        "includesOuterShells": false,
        "shell": "N",
        "value": 0.00001471,
        "uncertainty": {
         "type": "symmetric",
         "value": 2.1e-7
        }
       },
       {
        "includesOuterShells": false,
        "shell": "O",
        "value": 0.00000216,
        "uncertainty": {
         "type": "symmetric",
         "value": 3e-8
        }
       },
       {
        "includesOuterShells": false,
        "shell": "P",
        "value": 1.279e-7,
        "uncertainty": {
         "type": "symmetric",
         "value": 1.8e-9
        }
       }
      ]
     },
     "comments": [
      {
       "type": "comment",
       "head": [
        {
         "name": "E"
        }
       ],
       "body": "1332.05 keV \\textit{8} in \\ensuremath{^{\\textnormal{176}}}Lu(n,\\ensuremath{\\gamma})"
      }
     ]
    }
   ],
   "band": 16,
   "comments": [
    {
     "type": "comment",
     "head": [
      {
       "name": "J"
      }
     ],
     "body": "1013.94\\ensuremath{\\gamma} M1(+E2) to 13/2\\ensuremath{^{+}}; 1332.33\\ensuremath{\\gamma} (E2) to 9/2\\ensuremath{^{+}}; band assignment."
    },
    {
     "type": "comment",
     "head": [
      {
       "name": "CONF"
      }
     ],
     "body": "\\ensuremath{K^{\\pi}}=13/2\\ensuremath{^{+}}:\\ensuremath{\\pi}7/2[404]\\ensuremath{\\otimes}\\ensuremath{\\nu}\\ensuremath{^{\\textnormal{2}}}(7/2[514],1/2[521])"
    }
   ]
  },
  {
   "energy": {
    "unit": "keV",
    "value": 1465.2,
    "uncertainty": {
     "type": "unreported"
    }
   },
   "isStable": false,
   "flags": [
    "Z"
   ],
   "crossReferences": [
    {
     "dataset": "176LU(N,G) E=THERMAL"
    }
   ]
  },
  {
   "energy": {
    "unit": "keV",
    "value": 1471.097,
    "uncertainty": {
     "type": "symmetric",
     "value": 0.018
    }
   },
   "spinParity": {
    "values": [
     {
      "twoTimesSpin": 13,
      "isTentativeSpin": false,
      "parity": "+",
      "isTentativeParity": false
     }
    ]
   },
   "isStable": false,
   "flags": [
    "M"
   ],
   "crossReferences": [
    {
     "dataset": "176LU(N,G) E=THERMAL"
    },
    {
     "assignment": "ambiguous",
     "dataset": "176LU(D,P)",
     "level": 1473
    }
   ],
   "gammas": [
    {
     "energy": {
      "unit": "keV",
      "value": 165.07,
      "uncertainty": {
       "type": "symmetric",
       "value": 0.02
      }
     },
     "gammaIntensity": {
      "value": 6.7,
      "uncertainty": {
       "type": "symmetric",
       "value": 0.7
      }
     },
     "initialLevelIndex": 73,
     "finalLevelIndex": 53
    },
    {
     "energy": {
      "unit": "keV",
      "value": 834.99,
      "uncertainty": {
       "type": "symmetric",
       "value": 0.03
      }
     },
     "gammaIntensity": {
      "value": 39,
      "uncertainty": {
       "type": "symmetric",
       "value": 6
      }
     },
     "initialLevelIndex": 73,
     "finalLevelIndex": 11,
     "multipolarity": {
      "stringRepresentation": "M1(+E2)",
      "isMixedTransition": true,
      "spins": [
       {
        "spin": 1
       },
       {
        "spin": 2
       }
      ],
      "parity": "+"
     },
     "theoreticalInternalConversionCoefficients": {
      "totalValue": {
       "value": 0.01207,
       "uncertainty": {
        "type": "unreported"
       }
      },
      "shellValues": [
       {
        "includesOuterShells": false,
        "shell": "K",
        "value": 0.01016,
        "uncertainty": {
         "type": "symmetric",
         "value": 0.00015
        }
       },
       {
        "includesOuterShells": false,
        "shell": "L",
        "value": 0.001488,
        "uncertainty": {
         "type": "symmetric",
         "value": 0.000021
        }
       },
       {
        "includesOuterShells": false,
        "shell": "M",
        "value": 0.000333,
        "uncertainty": {
         "type": "symmetric",
         "value": 0.000005
        }
       },
       {
        "includesOuterShells": false,
        "shell": "N",
        "value": 0.0000786,
        "uncertainty": {
         "type": "symmetric",
         "value": 0.0000011
        }
       },
       {
        "includesOuterShells": false,
        "shell": "O",
        "value": 0.0000117,
        "uncertainty": {
         "type": "symmetric",
         "value": 1.7e-7
        }
       },
       {
        "includesOuterShells": false,
        "shell": "P",
        "value": 7.38e-7,
        "uncertainty": {
         "type": "symmetric",
         "value": 1.1e-8
        }
       }
      ]
     },
     "comments": [
      {
       "type": "comment",
       "head": [
        {
         "name": "M"
        }
       ],
       "body": "\\ensuremath{\\alpha}(K)exp=0.018 (1971Ma45)."
      }
     ]
    },
    {
     "energy": {
      "unit": "keV",
      "value": 1030,
      "uncertainty": {
       "type": "symmetric",
       "value": 0.5
      }
     },
     "gammaIntensity": {
      "value": 33,
      "uncertainty": {
       "type": "symmetric",
       "value": 5
      }
     },
     "initialLevelIndex": 73,
     "finalLevelIndex": 5,
     "multipolarity": {
      "stringRepresentation": "M1(+E2)",
      "isMixedTransition": true,
      "spins": [
       {
        "spin": 1
       },
       {
        "spin": 2
       }
      ],
      "parity": "+"
     },
     "theoreticalInternalConversionCoefficients": {
      "totalValue": {
       "value": 0.00718,
       "uncertainty": {
        "type": "unreported"
       }
      },
      "shellValues": [
       {
        "includesOuterShells": false,
        "shell": "K",
        "value": 0.00605,
        "uncertainty": {
         "type": "symmetric",
         "value": 0.00009
        }
       },
       {
        "includesOuterShells": false,
        "shell": "L",
        "value": 0.00088,
        "uncertainty": {
         "type": "symmetric",
         "value": 0.000013
        }
       },
       {
        "includesOuterShells": false,
        "shell": "M",
        "value": 0.000197,
        "uncertainty": {
         "type": "symmetric",
         "value": 0.000003
        }
       },
       {
        "includesOuterShells": false,
        "shell": "N",
        "value": 0.0000464,
        "uncertainty": {
         "type": "symmetric",
         "value": 7e-7
        }
       },
       {
        "includesOuterShells": false,
        "shell": "O",
        "value": 0.00000692,
        "uncertainty": {
         "type": "symmetric",
         "value": 1e-7
        }
       },
       {
        "includesOuterShells": false,
        "shell": "P",
        "value": 4.38e-7,
        "uncertainty": {
         "type": "symmetric",
         "value": 7e-9
        }
       }
      ]
     },
     "comments": [
      {
       "type": "comment",
       "head": [
        {
         "name": "E"
        }
       ],
       "body": "1030.02 keV \\textit{4} in \\ensuremath{^{\\textnormal{176}}}Lu(n,\\ensuremath{\\gamma})"
      },
      {
       "type": "comment",
       "head": [
        {
         "name": "M"
        }
       ],
       "body": "\\ensuremath{\\alpha}(K)exp=0.0092 (1971Ma45)."
      }
     ]
    },
    {
     "energy": {
      "unit": "keV",
      "value": 1202.45,
      "uncertainty": {
       "type": "symmetric",
       "value": 0.03
      }
     },
     "gammaIntensity": {
      "value": 100,
      "uncertainty": {
       "type": "symmetric",
       "value": 15
      }
     },
     "initialLevelIndex": 73,
     "finalLevelIndex": 3,
     "multipolarity": {
      "stringRepresentation": "M1(+E2)",
      "isMixedTransition": true,
      "spins": [
       {
        "spin": 1
       },
       {
        "spin": 2
       }
      ],
      "parity": "+"
     },
     "theoreticalInternalConversionCoefficients": {
      "totalValue": {
       "value": 0.00492,
       "uncertainty": {
        "type": "unreported"
       }
      },
      "pairCreationValue": {
       "value": 0.00000661,
       "uncertainty": {
        "type": "symmetric",
        "value": 1e-7
       }
      },
      "shellValues": [
       {
        "includesOuterShells": false,
        "shell": "K",
        "value": 0.00414,
        "uncertainty": {
         "type": "symmetric",
         "value": 0.00006
        }
       },
       {
        "includesOuterShells": false,
        "shell": "L",
        "value": 0.0006,
        "uncertainty": {
         "type": "symmetric",
         "value": 0.000009
        }
       },
       {
        "includesOuterShells": false,
        "shell": "M",
        "value": 0.0001339,
        "uncertainty": {
         "type": "symmetric",
         "value": 0.0000019
        }
       },
       {
        "includesOuterShells": false,
        "shell": "N",
        "value": 0.0000316,
        "uncertainty": {
         "type": "symmetric",
         "value": 5e-7
        }
       },
       {
        "includesOuterShells": false,
        "shell": "O",
        "value": 0.00000472,
        "uncertainty": {
         "type": "symmetric",
         "value": 7e-8
        }
       },
       {
        "includesOuterShells": false,
        "shell": "P",
        "value": 2.99e-7,
        "uncertainty": {
         "type": "symmetric",
         "value": 5e-9
        }
       }
      ]
     },
     "comments": [
      {
       "type": "comment",
       "head": [
        {
         "name": "M"
        }
       ],
       "body": "\\ensuremath{\\alpha}(K)exp=0.0077 (1971Ma45)"
      }
     ]
    },
    {
     "energy": {
      "unit": "keV",
      "value": 1350.8,
      "uncertainty": {
       "type": "symmetric",
       "value": 1
      }
     },
     "gammaIntensity": {
      "value": 48,
      "uncertainty": {
       "type": "symmetric",
       "value": 26
      }
     },
     "initialLevelIndex": 73,
     "finalLevelIndex": 1,
     "comments": [
      {
       "type": "comment",
       "head": [
        {
         "name": "M"
        }
       ],
       "body": "\\ensuremath{\\alpha}(K)exp=0.0045 (1971Ma45)."
      }
     ]
    }
   ],
   "band": 13,
   "comments": [
    {
     "type": "comment",
     "head": [
      {
       "name": "J"
      }
     ],
     "body": "834.99\\ensuremath{\\gamma} M1(+E2) to 15/2\\ensuremath{^{+}}; 1350.8\\ensuremath{\\gamma} to 9/2\\ensuremath{^{+}}; band assignment."
    }
   ]
  },
  {
   "energy": {
    "unit": "keV",
    "value": 1480.8,
    "uncertainty": {
     "type": "unreported"
    }
   },
   "isStable": false,
   "flags": [
    "Z"
   ],
   "crossReferences": [
    {
     "dataset": "176LU(N,G) E=THERMAL"
    },
    {
     "dataset": "176YB(3HE,D),(A,T)",
     "level": 1481
    }
   ]
  },
  {
   "energy": {
    "unit": "keV",
    "value": 1488.404,
    "uncertainty": {
     "type": "symmetric",
     "value": 0.018
    }
   },
   "spinParity": {
    "values": [
     {
      "twoTimesSpin": 11,
      "isTentativeSpin": true,
      "parity": "+",
      "isTentativeParity": true
     }
    ]
   },
   "isStable": false,
   "crossReferences": [
    {
     "dataset": "176LU(N,G) E=THERMAL"
    }
   ],
   "gammas": [
    {
     "energy": {
      "unit": "keV",
      "value": 336.335,
      "uncertainty": {
       "type": "symmetric",
       "value": 0.002
      }
     },
     "gammaIntensity": {
      "value": 48,
      "uncertainty": {
       "type": "symmetric",
       "value": 5
      }
     },
     "initialLevelIndex": 75,
     "finalLevelIndex": 41,
     "multipolarity": {
      "stringRepresentation": "(E2)",
      "spins": [
       {
        "spin": 2
       }
      ],
      "parity": "+"
     },
     "theoreticalInternalConversionCoefficients": {
      "totalValue": {
       "value": 0.0546,
       "uncertainty": {
        "type": "unreported"
       }
      },
      "shellValues": [
       {
        "includesOuterShells": false,
        "shell": "K",
        "value": 0.0396,
        "uncertainty": {
         "type": "symmetric",
         "value": 0.0006
        }
       },
       {
        "includesOuterShells": false,
        "shell": "L",
        "value": 0.01153,
        "uncertainty": {
         "type": "symmetric",
         "value": 0.00017
        }
       },
       {
        "includesOuterShells": false,
        "shell": "M",
        "value": 0.00274,
        "uncertainty": {
         "type": "symmetric",
         "value": 0.00004
        }
       },
       {
        "includesOuterShells": false,
        "shell": "N",
        "value": 0.000637,
        "uncertainty": {
         "type": "symmetric",
         "value": 0.000009
        }
       },
       {
        "includesOuterShells": false,
        "shell": "O",
        "value": 0.0000844,
        "uncertainty": {
         "type": "symmetric",
         "value": 0.0000012
        }
       },
       {
        "includesOuterShells": false,
        "shell": "P",
        "value": 0.00000254,
        "uncertainty": {
         "type": "symmetric",
         "value": 4e-8
        }
       }
      ]
     },
     "comments": [
      {
       "type": "comment",
       "head": [
        {
         "name": "M"
        }
       ],
       "body": "\\ensuremath{\\alpha}(K)exp=0.032 \\textit{11} and \\ensuremath{\\alpha}(L2)exp=0.006 \\textit{4} (1996Pe05)."
      }
     ]
    },
    {
     "energy": {
      "unit": "keV",
      "value": 1047.68,
      "uncertainty": {
       "type": "symmetric",
       "value": 0.16
      }
     },
     "gammaIntensity": {
      "value": 30,
      "uncertainty": {
       "type": "symmetric",
       "value": 5
      }
     },
     "initialLevelIndex": 75,
     "finalLevelIndex": 5
    },
    {
     "energy": {
      "unit": "keV",
      "value": 1220.6,
      "uncertainty": {
       "type": "symmetric",
       "value": 0.5
      }
     },
     "gammaIntensity": {
      "value": 79,
      "uncertainty": {
       "type": "symmetric",
       "value": 10
      }
     },
     "initialLevelIndex": 75,
     "finalLevelIndex": 3,
     "multipolarity": {
      "stringRepresentation": "(E2)",
      "spins": [
       {
        "spin": 2
       }
      ],
      "parity": "+"
     },
     "theoreticalInternalConversionCoefficients": {
      "totalValue": {
       "value": 0.00263,
       "uncertainty": {
        "type": "unreported"
       }
      },
      "pairCreationValue": {
       "value": 0.00000703,
       "uncertainty": {
        "type": "symmetric",
        "value": 1.2e-7
       }
      },
      "shellValues": [
       {
        "includesOuterShells": false,
        "shell": "K",
        "value": 0.00219,
        "uncertainty": {
         "type": "symmetric",
         "value": 0.00003
        }
       },
       {
        "includesOuterShells": false,
        "shell": "L",
        "value": 0.000334,
        "uncertainty": {
         "type": "symmetric",
         "value": 0.000005
        }
       },
       {
        "includesOuterShells": false,
        "shell": "M",
        "value": 0.0000752,
        "uncertainty": {
         "type": "symmetric",
         "value": 0.0000011
        }
       },
       {
        "includesOuterShells": false,
        "shell": "N",
        "value": 0.0000177,
        "uncertainty": {
         "type": "symmetric",
         "value": 2.5e-7
        }
       },
       {
        "includesOuterShells": false,
        "shell": "O",
        "value": 0.00000259,
        "uncertainty": {
         "type": "symmetric",
         "value": 4e-8
        }
       },
       {
        "includesOuterShells": false,
        "shell": "P",
        "value": 1.511e-7,
        "uncertainty": {
         "type": "symmetric",
         "value": 2.2e-9
        }
       }
      ]
     },
     "comments": [
      {
       "type": "comment",
       "head": [
        {
         "name": "M"
        }
       ],
       "body": "\\ensuremath{\\alpha}(K)exp=0.0050 (1971Ma45)."
      }
     ]
    },
    {
     "energy": {
      "unit": "keV",
      "value": 1368,
      "uncertainty": {
       "type": "symmetric",
       "value": 1
      }
     },
     "gammaIntensity": {
      "value": 100,
      "uncertainty": {
       "type": "symmetric",
       "value": 17
      }
     },
     "initialLevelIndex": 75,
     "finalLevelIndex": 1
    }
   ],
   "comments": [
    {
     "type": "comment",
     "head": [
      {
       "name": "J"
      }
     ],
     "body": "336.33\\ensuremath{\\gamma} E2 to (11/2\\ensuremath{^{+}}); 1368.0\\ensuremath{\\gamma} to 9/2\\ensuremath{^{+}}"
    }
   ]
  },
  {
   "energy": {
    "unit": "keV",
    "value": 1502.682,
    "uncertainty": {
     "type": "symmetric",
     "value": 0.008
    }
   },
   "spinParity": {
    "values": [
     {
      "twoTimesSpin": 13,
      "isTentativeSpin": true,
      "parity": "+",
      "isTentativeParity": true
     }
    ]
   },
   "isStable": false,
   "flags": [
    "K"
   ],
   "crossReferences": [
    {
     "dataset": "176LU(N,G) E=THERMAL"
    },
    {
     "assignment": "ambiguous",
     "dataset": "176LU(D,P)",
     "level": 1503
    },
    {
     "assignment": "ambiguous",
     "dataset": "178HF(T,A)",
     "level": 1501
    },
    {
     "dataset": "(HI,XNG)"
    }
   ],
   "gammas": [
    {
     "energy": {
      "unit": "keV",
      "value": 325.884,
      "uncertainty": {
       "type": "symmetric",
       "value": 0.008
      }
     },
     "gammaIntensity": {
      "value": 6.2,
      "uncertainty": {
       "type": "symmetric",
       "value": 0.5
      }
     },
     "initialLevelIndex": 76,
     "finalLevelIndex": 43,
     "multipolarity": {
      "stringRepresentation": "M1(+E2)",
      "isMixedTransition": true,
      "spins": [
       {
        "spin": 1
       },
       {
        "spin": 2
       }
      ],
      "parity": "+"
     },
     "theoreticalInternalConversionCoefficients": {
      "totalValue": {
       "value": 0.1369,
       "uncertainty": {
        "type": "unreported"
       }
      },
      "shellValues": [
       {
        "includesOuterShells": false,
        "shell": "K",
        "value": 0.1146,
        "uncertainty": {
         "type": "symmetric",
         "value": 0.0016
        }
       },
       {
        "includesOuterShells": false,
        "shell": "L",
        "value": 0.01732,
        "uncertainty": {
         "type": "symmetric",
         "value": 0.00025
        }
       },
       {
        "includesOuterShells": false,
        "shell": "M",
        "value": 0.00389,
        "uncertainty": {
         "type": "symmetric",
         "value": 0.00006
        }
       },
       {
        "includesOuterShells": false,
        "shell": "N",
        "value": 0.000919,
        "uncertainty": {
         "type": "symmetric",
         "value": 0.000013
        }
       },
       {
        "includesOuterShells": false,
        "shell": "O",
        "value": 0.0001364,
        "uncertainty": {
         "type": "symmetric",
         "value": 0.0000019
        }
       },
       {
        "includesOuterShells": false,
        "shell": "P",
        "value": 0.00000849,
        "uncertainty": {
         "type": "symmetric",
         "value": 1.2e-7
        }
       }
      ]
     },
     "comments": [
      {
       "type": "comment",
       "head": [
        {
         "name": "M"
        }
       ],
       "body": "\\ensuremath{\\alpha}(K)exp=0.12 (1971Ma45)."
      }
     ]
    },
    {
     "energy": {
      "unit": "keV",
      "value": 1061.99,
      "uncertainty": {
       "type": "symmetric",
       "value": 0.06
      }
     },
     "gammaIntensity": {
      "value": 100,
      "uncertainty": {
       "type": "symmetric",
       "value": 16
      }
     },
     "initialLevelIndex": 76,
     "finalLevelIndex": 5,
     "multipolarity": {
      "stringRepresentation": "(M1+E2)",
      "isMixedTransition": true,
      "spins": [
       {
        "spin": 1
       },
       {
        "spin": 2
       }
      ],
      "parity": "+"
     },
     "theoreticalInternalConversionCoefficients": {
      "totalValue": {
       "value": 0.00666,
       "uncertainty": {
        "type": "unreported"
       }
      },
      "shellValues": [
       {
        "includesOuterShells": false,
        "shell": "K",
        "value": 0.00561,
        "uncertainty": {
         "type": "symmetric",
         "value": 0.00008
        }
       },
       {
        "includesOuterShells": false,
        "shell": "L",
        "value": 0.000815,
        "uncertainty": {
         "type": "symmetric",
         "value": 0.000012
        }
       },
       {
        "includesOuterShells": false,
        "shell": "M",
        "value": 0.000182,
        "uncertainty": {
         "type": "symmetric",
         "value": 0.000003
        }
       },
       {
        "includesOuterShells": false,
        "shell": "N",
        "value": 0.000043,
        "uncertainty": {
         "type": "symmetric",
         "value": 6e-7
        }
       },
       {
        "includesOuterShells": false,
        "shell": "O",
        "value": 0.00000641,
        "uncertainty": {
         "type": "symmetric",
         "value": 9e-8
        }
       },
       {
        "includesOuterShells": false,
        "shell": "P",
        "value": 4.06e-7,
        "uncertainty": {
         "type": "symmetric",
         "value": 6e-9
        }
       }
      ]
     },
     "comments": [
      {
       "type": "comment",
       "head": [
        {
         "name": "M"
        }
       ],
       "body": "\\ensuremath{\\alpha}(K)exp=0.008 (1971Ma45)."
      }
     ]
    },
    {
     "energy": {
      "unit": "keV",
      "value": 1233.88,
      "uncertainty": {
       "type": "symmetric",
       "value": 0.08
      }
     },
     "gammaIntensity": {
      "value": 45,
      "uncertainty": {
       "type": "symmetric",
       "value": 6
      }
     },
     "initialLevelIndex": 76,
     "finalLevelIndex": 3
    },
    {
     "energy": {
      "unit": "keV",
      "value": 1381.07,
      "uncertainty": {
       "type": "symmetric",
       "value": 0.05
      }
     },
     "gammaIntensity": {
      "value": 97,
      "uncertainty": {
       "type": "symmetric",
       "value": 14
      }
     },
     "initialLevelIndex": 76,
     "finalLevelIndex": 1
    }
   ],
   "band": 11,
   "comments": [
    {
     "type": "comment",
     "head": [
      {
       "name": "J"
      }
     ],
     "body": "325.884\\ensuremath{\\gamma} M1(+E2) to 15/2\\ensuremath{^{+}} level; 1381.07\\ensuremath{\\gamma} to 9/2\\ensuremath{^{+}}; band assignment"
    },
    {
     "type": "comment",
     "head": [
      {
       "name": "CONF"
      }
     ],
     "body": "\\ensuremath{K^{\\pi}}=13/2\\ensuremath{^{+}}:\\ensuremath{\\pi}7/2[404]\\ensuremath{\\otimes}\\ensuremath{\\nu}\\ensuremath{^{\\textnormal{2}}}(7/2[514],1/2[510])"
    }
   ]
  },
  {
   "energy": {
    "unit": "keV",
    "value": 1505.95,
    "uncertainty": {
     "type": "symmetric",
     "value": 0.11
    }
   },
   "spinParity": {
    "values": [
     {
      "twoTimesSpin": 13,
      "isTentativeSpin": true,
      "parity": "+",
      "isTentativeParity": true
     }
    ]
   },
   "isStable": false,
   "flags": [
    "s"
   ],
   "crossReferences": [
    {
     "dataset": "176LU(N,G) E=THERMAL"
    },
    {
     "assignment": "ambiguous",
     "dataset": "176LU(D,P)",
     "level": 1503
    },
    {
     "assignment": "ambiguous",
     "dataset": "178HF(T,A)",
     "level": 1501
    }
   ],
   "gammas": [
    {
     "energy": {
      "unit": "keV",
      "value": 1065.7,
      "uncertainty": {
       "type": "symmetric",
       "value": 0.8
      }
     },
     "gammaIntensity": {
      "value": 100,
      "uncertainty": {
       "type": "symmetric",
       "value": 12
      }
     },
     "initialLevelIndex": 77,
     "finalLevelIndex": 5,
     "multipolarity": {
      "stringRepresentation": "M1(+E2)",
      "isMixedTransition": true,
      "spins": [
       {
        "spin": 1
       },
       {
        "spin": 2
       }
      ],
      "parity": "+"
     },
     "theoreticalInternalConversionCoefficients": {
      "totalValue": {
       "value": 0.0066,
       "uncertainty": {
        "type": "unreported"
       }
      },
      "shellValues": [
       {
        "includesOuterShells": false,
        "shell": "K",
        "value": 0.00556,
        "uncertainty": {
         "type": "symmetric",
         "value": 0.00008
        }
       },
       {
        "includesOuterShells": false,
        "shell": "L",
        "value": 0.000808,
        "uncertainty": {
         "type": "symmetric",
         "value": 0.000012
        }
       },
       {
        "includesOuterShells": false,
        "shell": "M",
        "value": 0.000181,
        "uncertainty": {
         "type": "symmetric",
         "value": 0.000003
        }
       },
       {
        "includesOuterShells": false,
        "shell": "N",
        "value": 0.0000427,
        "uncertainty": {
         "type": "symmetric",
         "value": 6e-7
        }
       },
       {
        "includesOuterShells": false,
        "shell": "O",
        "value": 0.00000636,
        "uncertainty": {
         "type": "symmetric",
         "value": 9e-8
        }
       },
       {
        "includesOuterShells": false,
        "shell": "P",
        "value": 4.03e-7,
        "uncertainty": {
         "type": "symmetric",
         "value": 6e-9
        }
       }
      ]
     },
     "comments": [
      {
       "type": "comment",
       "head": [
        {
         "name": "M"
        }
       ],
       "body": "\\ensuremath{\\alpha}(K)exp=0.0023 (1971Ma45)."
      }
     ]
    },
    {
     "energy": {
      "unit": "keV",
      "value": 1237.15,
      "uncertainty": {
       "type": "symmetric",
       "value": 0.11
      }
     },
     "gammaIntensity": {
      "value": 28,
      "uncertainty": {
       "type": "symmetric",
       "value": 5
      }
     },
     "initialLevelIndex": 77,
     "finalLevelIndex": 3,
     "multipolarity": {
      "stringRepresentation": "M1(+E2)",
      "isMixedTransition": true,
      "spins": [
       {
        "spin": 1
       },
       {
        "spin": 2
       }
      ],
      "parity": "+"
     },
     "theoreticalInternalConversionCoefficients": {
      "totalValue": {
       "value": 0.0046,
       "uncertainty": {
        "type": "unreported"
       }
      },
      "pairCreationValue": {
       "value": 0.00001171,
       "uncertainty": {
        "type": "symmetric",
        "value": 1.7e-7
       }
      },
      "shellValues": [
       {
        "includesOuterShells": false,
        "shell": "K",
        "value": 0.00387,
        "uncertainty": {
         "type": "symmetric",
         "value": 0.00006
        }
       },
       {
        "includesOuterShells": false,
        "shell": "L",
        "value": 0.000559,
        "uncertainty": {
         "type": "symmetric",
         "value": 0.000008
        }
       },
       {
        "includesOuterShells": false,
        "shell": "M",
        "value": 0.0001249,
        "uncertainty": {
         "type": "symmetric",
         "value": 0.0000018
        }
       },
       {
        "includesOuterShells": false,
        "shell": "N",
        "value": 0.0000295,
        "uncertainty": {
         "type": "symmetric",
         "value": 5e-7
        }
       },
       {
        "includesOuterShells": false,
        "shell": "O",
        "value": 0.0000044,
        "uncertainty": {
         "type": "symmetric",
         "value": 7e-8
        }
       },
       {
        "includesOuterShells": false,
        "shell": "P",
        "value": 2.79e-7,
        "uncertainty": {
         "type": "symmetric",
         "value": 4e-9
        }
       }
      ]
     },
     "comments": [
      {
       "type": "comment",
       "head": [
        {
         "name": "M"
        }
       ],
       "body": "\\ensuremath{\\alpha}(K)exp=0.0050 (1971Ma45)."
      }
     ]
    }
   ],
   "band": 20,
   "comments": [
    {
     "type": "comment",
     "head": [
      {
       "name": "J"
      }
     ],
     "body": "1065.7\\ensuremath{\\gamma} M1(+E2) to 13/2\\ensuremath{^{+}}; 1237.15\\ensuremath{\\gamma} M1(+E2) to 11/2\\ensuremath{^{+}}; band assignment"
    }
   ]
  },
  {
   "energy": {
    "unit": "keV",
    "value": 1513,
    "uncertainty": {
     "type": "unreported"
    }
   },
   "isStable": false,
   "flags": [
    "R"
   ],
   "crossReferences": [
    {
     "dataset": "176YB(3HE,D),(A,T)"
    }
   ]
  },
  {
   "energy": {
    "unit": "keV",
    "value": 1536.6,
    "uncertainty": {
     "type": "symmetric",
     "value": 0.4
    }
   },
   "spinParity": {
    "values": [
     {
      "twoTimesSpin": 27,
      "isTentativeSpin": false,
      "parity": "-",
      "isTentativeParity": false
     }
    ]
   },
   "isStable": false,
   "flags": [
    "F"
   ],
   "crossReferences": [
    {
     "dataset": "(HI,XNG)"
    }
   ],
   "gammas": [
    {
     "energy": {
      "unit": "keV",
      "value": 293.5,
      "uncertainty": {
       "type": "symmetric",
       "value": 0.5
      }
     },
     "gammaIntensity": {
      "value": 50.3,
      "uncertainty": {
       "type": "symmetric",
       "value": 1.5
      }
     },
     "initialLevelIndex": 79,
     "finalLevelIndex": 50,
     "flags": [
      "S"
     ]
    },
    {
     "energy": {
      "unit": "keV",
      "value": 566.4,
      "uncertainty": {
       "type": "symmetric",
       "value": 0.5
      }
     },
     "gammaIntensity": {
      "value": 100,
      "uncertainty": {
       "type": "unreported"
      }
     },
     "initialLevelIndex": 79,
     "finalLevelIndex": 29,
     "flags": [
      "S"
     ]
    }
   ],
   "band": 8,
   "comments": [
    {
     "type": "comment",
     "head": [
      {
       "name": "J"
      }
     ],
     "body": "293.5\\ensuremath{\\gamma} to 25/2\\ensuremath{^{-}}, 566.4\\ensuremath{\\gamma} to 23/2\\ensuremath{^{-}}; band assignment"
    }
   ]
  },
  {
   "energy": {
    "unit": "keV",
    "value": 1541,
    "uncertainty": {
     "type": "unreported"
    }
   },
   "isStable": false,
   "flags": [
    "R"
   ],
   "crossReferences": [
    {
     "dataset": "176YB(3HE,D),(A,T)"
    }
   ]
  },
  {
   "energy": {
    "unit": "keV",
    "value": 1542.9,
    "uncertainty": {
     "type": "symmetric",
     "value": 0.5
    }
   },
   "spinParity": {
    "values": [
     {
      "twoTimesSpin": 21,
      "isTentativeSpin": true,
      "parity": "-",
      "isTentativeParity": true
     }
    ]
   },
   "isStable": false,
   "flags": [
    "E"
   ],
   "crossReferences": [
    {
     "dataset": "(HI,XNG)"
    }
   ],
   "gammas": [
    {
     "energy": {
      "unit": "keV",
      "value": 341.3,
      "uncertainty": {
       "type": "symmetric",
       "value": 0.5
      }
     },
     "gammaIntensity": {
      "value": 100,
      "uncertainty": {
       "type": "unreported"
      }
     },
     "initialLevelIndex": 81,
     "finalLevelIndex": 46,
     "multipolarity": {
      "stringRepresentation": "[E2]",
      "spins": [
       {
        "spin": 2,
        "evaluatorInferred": true
       }
      ],
      "parity": "+"
     },
     "theoreticalInternalConversionCoefficients": {
      "totalValue": {
       "value": 0.0523,
       "uncertainty": {
        "type": "unreported"
       }
      },
      "shellValues": [
       {
        "includesOuterShells": false,
        "shell": "K",
        "value": 0.0381,
        "uncertainty": {
         "type": "symmetric",
         "value": 0.0006
        }
       },
       {
        "includesOuterShells": false,
        "shell": "L",
        "value": 0.01094,
        "uncertainty": {
         "type": "symmetric",
         "value": 0.00017
        }
       },
       {
        "includesOuterShells": false,
        "shell": "M",
        "value": 0.0026,
        "uncertainty": {
         "type": "symmetric",
         "value": 0.00004
        }
       },
       {
        "includesOuterShells": false,
        "shell": "N",
        "value": 0.000604,
        "uncertainty": {
         "type": "symmetric",
         "value": 0.000009
        }
       },
       {
        "includesOuterShells": false,
        "shell": "O",
        "value": 0.0000802,
        "uncertainty": {
         "type": "symmetric",
         "value": 0.0000012
        }
       },
       {
        "includesOuterShells": false,
        "shell": "P",
        "value": 0.00000245,
        "uncertainty": {
         "type": "symmetric",
         "value": 4e-8
        }
       }
      ]
     },
     "flags": [
      "S"
     ]
    }
   ],
   "band": 4,
   "comments": [
    {
     "type": "comment",
     "head": [
      {
       "name": "J"
      }
     ],
     "body": "341.3\\ensuremath{\\gamma} to 17/2\\ensuremath{^{-}}; band assignment"
    }
   ]
  },
  {
   "energy": {
    "unit": "keV",
    "value": 1544.309,
    "uncertainty": {
     "type": "symmetric",
     "value": 0.008
    }
   },
   "spinParity": {
    "values": [
     {
      "twoTimesSpin": 17,
      "isTentativeSpin": true,
      "parity": "+",
      "isTentativeParity": true
     }
    ]
   },
   "isStable": false,
   "halfLife": {
    "unit": "ns",
    "value": 0.8,
    "uncertainty": {
     "type": "asymmetric",
     "upperLimit": 0.2,
     "lowerLimit": 0.1
    }
   },
   "flags": [
    "L"
   ],
   "crossReferences": [
    {
     "dataset": "176LU(N,G) E=THERMAL"
    },
    {
     "dataset": "176LU(D,P)",
     "level": 1543
    },
    {
     "dataset": "(HI,XNG)"
    }
   ],
   "gammas": [
    {
     "energy": {
      "unit": "keV",
      "value": 154.566,
      "uncertainty": {
       "type": "symmetric",
       "value": 0.016
      }
     },
     "gammaIntensity": {
      "value": 0.04,
      "uncertainty": {
       "type": "symmetric",
       "value": 0.04
      }
     },
     "initialLevelIndex": 82,
     "finalLevelIndex": 66,
     "multipolarity": {
      "stringRepresentation": "[M1]",
      "spins": [
       {
        "spin": 1,
        "evaluatorInferred": true
       }
      ],
      "parity": "+"
     },
     "theoreticalInternalConversionCoefficients": {
      "totalValue": {
       "value": 1.065,
       "uncertainty": {
        "type": "unreported"
       }
      },
      "shellValues": [
       {
        "includesOuterShells": false,
        "shell": "K",
        "value": 0.889,
        "uncertainty": {
         "type": "symmetric",
         "value": 0.013
        }
       },
       {
        "includesOuterShells": false,
        "shell": "L",
        "value": 0.1366,
        "uncertainty": {
         "type": "symmetric",
         "value": 0.002
        }
       },
       {
        "includesOuterShells": false,
        "shell": "M",
        "value": 0.0307,
        "uncertainty": {
         "type": "symmetric",
         "value": 0.0005
        }
       },
       {
        "includesOuterShells": false,
        "shell": "N",
        "value": 0.00725,
        "uncertainty": {
         "type": "symmetric",
         "value": 0.00011
        }
       },
       {
        "includesOuterShells": false,
        "shell": "O",
        "value": 0.001075,
        "uncertainty": {
         "type": "symmetric",
         "value": 0.000015
        }
       },
       {
        "includesOuterShells": false,
        "shell": "P",
        "value": 0.0000665,
        "uncertainty": {
         "type": "symmetric",
         "value": 0.000001
        }
       }
      ]
     }
    },
    {
     "energy": {
      "unit": "keV",
      "value": 187.492,
      "uncertainty": {
       "type": "symmetric",
       "value": 0.008
      }
     },
     "gammaIntensity": {
      "value": 0.78,
      "uncertainty": {
       "type": "symmetric",
       "value": 0.11
      }
     },
     "initialLevelIndex": 82,
     "finalLevelIndex": 64,
     "multipolarity": {
      "stringRepresentation": "[M1]",
      "spins": [
       {
        "spin": 1,
        "evaluatorInferred": true
       }
      ],
      "parity": "+"
     },
     "theoreticalInternalConversionCoefficients": {
      "totalValue": {
       "value": 0.62,
       "uncertainty": {
        "type": "unreported"
       }
      },
      "shellValues": [
       {
        "includesOuterShells": false,
        "shell": "K",
        "value": 0.518,
        "uncertainty": {
         "type": "symmetric",
         "value": 0.008
        }
       },
       {
        "includesOuterShells": false,
        "shell": "L",
        "value": 0.0793,
        "uncertainty": {
         "type": "symmetric",
         "value": 0.0012
        }
       },
       {
        "includesOuterShells": false,
        "shell": "M",
        "value": 0.01783,
        "uncertainty": {
         "type": "symmetric",
         "value": 0.00025
        }
       },
       {
        "includesOuterShells": false,
        "shell": "N",
        "value": 0.00421,
        "uncertainty": {
         "type": "symmetric",
         "value": 0.00006
        }
       },
       {
        "includesOuterShells": false,
        "shell": "O",
        "value": 0.000624,
        "uncertainty": {
         "type": "symmetric",
         "value": 0.000009
        }
       },
       {
        "includesOuterShells": false,
        "shell": "P",
        "value": 0.0000387,
        "uncertainty": {
         "type": "symmetric",
         "value": 6e-7
        }
       }
      ]
     }
    },
    {
     "energy": {
      "unit": "keV",
      "value": 367.44,
      "uncertainty": {
       "type": "symmetric",
       "value": 0.02
      }
     },
     "gammaIntensity": {
      "value": 100,
      "uncertainty": {
       "type": "symmetric",
       "value": 11
      }
     },
     "initialLevelIndex": 82,
     "finalLevelIndex": 43,
     "multipolarity": {
      "stringRepresentation": "[M1]",
      "spins": [
       {
        "spin": 1,
        "evaluatorInferred": true
       }
      ],
      "parity": "+"
     },
     "theoreticalInternalConversionCoefficients": {
      "totalValue": {
       "value": 0.0995,
       "uncertainty": {
        "type": "unreported"
       }
      },
      "shellValues": [
       {
        "includesOuterShells": false,
        "shell": "K",
        "value": 0.0833,
        "uncertainty": {
         "type": "symmetric",
         "value": 0.0012
        }
       },
       {
        "includesOuterShells": false,
        "shell": "L",
        "value": 0.01255,
        "uncertainty": {
         "type": "symmetric",
         "value": 0.00018
        }
       },
       {
        "includesOuterShells": false,
        "shell": "M",
        "value": 0.00282,
        "uncertainty": {
         "type": "symmetric",
         "value": 0.00004
        }
       },
       {
        "includesOuterShells": false,
        "shell": "N",
        "value": 0.000665,
        "uncertainty": {
         "type": "symmetric",
         "value": 0.00001
        }
       },
       {
        "includesOuterShells": false,
        "shell": "O",
        "value": 0.0000988,
        "uncertainty": {
         "type": "symmetric",
         "value": 0.0000014
        }
       },
       {
        "includesOuterShells": false,
        "shell": "P",
        "value": 0.00000616,
        "uncertainty": {
         "type": "symmetric",
         "value": 9e-8
        }
       }
      ]
     },
     "comments": [
      {
       "type": "comment",
       "head": [
        {
         "name": "RI"
        }
       ],
       "body": "Contaminated in \\ensuremath{^{\\textnormal{176}}}Lu(n,\\ensuremath{\\gamma}), but the intensity value is not corrected"
      }
     ]
    },
    {
     "energy": {
      "unit": "keV",
      "value": 689.7,
      "uncertainty": {
       "type": "symmetric",
       "value": 0.6
      }
     },
     "gammaIntensity": {
      "value": 6.7,
      "uncertainty": {
       "type": "symmetric",
       "value": 0.3
      }
     },
     "initialLevelIndex": 82,
     "finalLevelIndex": 24,
     "multipolarity": {
      "stringRepresentation": "[M1]",
      "spins": [
       {
        "spin": 1,
        "evaluatorInferred": true
       }
      ],
      "parity": "+"
     },
     "theoreticalInternalConversionCoefficients": {
      "totalValue": {
       "value": 0.0195,
       "uncertainty": {
        "type": "unreported"
       }
      },
      "shellValues": [
       {
        "includesOuterShells": false,
        "shell": "K",
        "value": 0.01639,
        "uncertainty": {
         "type": "symmetric",
         "value": 0.00024
        }
       },
       {
        "includesOuterShells": false,
        "shell": "L",
        "value": 0.00242,
        "uncertainty": {
         "type": "symmetric",
         "value": 0.00004
        }
       },
       {
        "includesOuterShells": false,
        "shell": "M",
        "value": 0.000541,
        "uncertainty": {
         "type": "symmetric",
         "value": 0.000008
        }
       },
       {
        "includesOuterShells": false,
        "shell": "N",
        "value": 0.0001278,
        "uncertainty": {
         "type": "symmetric",
         "value": 0.0000019
        }
       },
       {
        "includesOuterShells": false,
        "shell": "O",
        "value": 0.000019,
        "uncertainty": {
         "type": "symmetric",
         "value": 3e-7
        }
       },
       {
        "includesOuterShells": false,
        "shell": "P",
        "value": 0.000001196,
        "uncertainty": {
         "type": "symmetric",
         "value": 1.7e-8
        }
       }
      ]
     }
    },
    {
     "energy": {
      "unit": "keV",
      "value": 908,
      "uncertainty": {
       "type": "symmetric",
       "value": 1
      }
     },
     "initialLevelIndex": 82,
     "finalLevelIndex": 12,
     "comments": [
      {
       "type": "comment",
       "head": [
        {
         "name": "E"
        }
       ],
       "body": "From (HI,xn\\ensuremath{\\gamma})."
      }
     ]
    },
    {
     "energy": {
      "unit": "keV",
      "value": 908.035,
      "uncertainty": {
       "type": "symmetric",
       "value": 0.01
      }
     },
     "gammaIntensity": {
      "value": 23,
      "uncertainty": {
       "type": "symmetric",
       "value": 3
      }
     },
     "initialLevelIndex": 82,
     "finalLevelIndex": 11,
     "multipolarity": {
      "stringRepresentation": "M1(+E2)",
      "isMixedTransition": true,
      "spins": [
       {
        "spin": 1
       },
       {
        "spin": 2
       }
      ],
      "parity": "+"
     },
     "theoreticalInternalConversionCoefficients": {
      "totalValue": {
       "value": 0.0098,
       "uncertainty": {
        "type": "unreported"
       }
      },
      "shellValues": [
       {
        "includesOuterShells": false,
        "shell": "K",
        "value": 0.00825,
        "uncertainty": {
         "type": "symmetric",
         "value": 0.00012
        }
       },
       {
        "includesOuterShells": false,
        "shell": "L",
        "value": 0.001205,
        "uncertainty": {
         "type": "symmetric",
         "value": 0.000017
        }
       },
       {
        "includesOuterShells": false,
        "shell": "M",
        "value": 0.000269,
        "uncertainty": {
         "type": "symmetric",
         "value": 0.000004
        }
       },
       {
        "includesOuterShells": false,
        "shell": "N",
        "value": 0.0000636,
        "uncertainty": {
         "type": "symmetric",
         "value": 9e-7
        }
       },
       {
        "includesOuterShells": false,
        "shell": "O",
        "value": 0.00000948,
        "uncertainty": {
         "type": "symmetric",
         "value": 1.4e-7
        }
       },
       {
        "includesOuterShells": false,
        "shell": "P",
        "value": 5.99e-7,
        "uncertainty": {
         "type": "symmetric",
         "value": 9e-9
        }
       }
      ]
     },
     "comments": [
      {
       "type": "comment",
       "head": [
        {
         "name": "M"
        }
       ],
       "body": "\\ensuremath{\\alpha}(K)exp=0.0096 (1971Ma45)."
      }
     ]
    }
   ],
   "band": 12,
   "comments": [
    {
     "type": "comment",
     "head": [
      {
       "name": "J"
      }
     ],
     "body": "908.035\\ensuremath{\\gamma} M1(+E2) to 15/2\\ensuremath{^{+}}; band assignment."
    },
    {
     "type": "comment",
     "head": [
      {
       "name": "T"
      }
     ],
     "body": "From 1996Pe05."
    }
   ]
  },
  {
   "energy": {
    "unit": "keV",
    "value": 1555,
    "uncertainty": {
     "type": "symmetric",
     "value": 5
    }
   },
   "isStable": false,
   "flags": [
    "T"
   ],
   "crossReferences": [
    {
     "dataset": "178HF(T,A)"
    }
   ]
  },
  {
   "energy": {
    "unit": "keV",
    "value": 1564.097,
    "uncertainty": {
     "type": "symmetric",
     "value": 0.004
    }
   },
   "spinParity": {
    "values": [
     {
      "twoTimesSpin": 15,
      "isTentativeSpin": false,
      "parity": "-",
      "isTentativeParity": false
     }
    ]
   },
   "isStable": false,
   "flags": [
    "E"
   ],
   "crossReferences": [
    {
     "dataset": "176LU(N,G) E=THERMAL"
    },
    {
     "dataset": "(HI,XNG)"
    }
   ],
   "gammas": [
    {
     "energy": {
      "unit": "keV",
      "value": 277.175,
      "uncertainty": {
       "type": "symmetric",
       "value": 0.005
      }
     },
     "gammaIntensity": {
      "value": 17,
      "uncertainty": {
       "type": "symmetric",
       "value": 3
      }
     },
     "initialLevelIndex": 84,
     "finalLevelIndex": 51
    },
    {
     "energy": {
      "unit": "keV",
      "value": 362.459,
      "uncertainty": {
       "type": "symmetric",
       "value": 0.004
      }
     },
     "gammaIntensity": {
      "value": 27,
      "uncertainty": {
       "type": "symmetric",
       "value": 3
      }
     },
     "initialLevelIndex": 84,
     "finalLevelIndex": 46,
     "multipolarity": {
      "stringRepresentation": "M1(+E2)",
      "isMixedTransition": true,
      "spins": [
       {
        "spin": 1
       },
       {
        "spin": 2
       }
      ],
      "parity": "+"
     },
     "theoreticalInternalConversionCoefficients": {
      "totalValue": {
       "value": 0.1031,
       "uncertainty": {
        "type": "unreported"
       }
      },
      "shellValues": [
       {
        "includesOuterShells": false,
        "shell": "K",
        "value": 0.0864,
        "uncertainty": {
         "type": "symmetric",
         "value": 0.0012
        }
       },
       {
        "includesOuterShells": false,
        "shell": "L",
        "value": 0.01301,
        "uncertainty": {
         "type": "symmetric",
         "value": 0.00019
        }
       },
       {
        "includesOuterShells": false,
        "shell": "M",
        "value": 0.00292,
        "uncertainty": {
         "type": "symmetric",
         "value": 0.00004
        }
       },
       {
        "includesOuterShells": false,
        "shell": "N",
        "value": 0.00069,
        "uncertainty": {
         "type": "symmetric",
         "value": 0.00001
        }
       },
       {
        "includesOuterShells": false,
        "shell": "O",
        "value": 0.0001024,
        "uncertainty": {
         "type": "symmetric",
         "value": 0.0000015
        }
       },
       {
        "includesOuterShells": false,
        "shell": "P",
        "value": 0.00000638,
        "uncertainty": {
         "type": "symmetric",
         "value": 9e-8
        }
       }
      ]
     },
     "comments": [
      {
       "type": "comment",
       "head": [
        {
         "name": "M"
        }
       ],
       "body": "\\ensuremath{\\alpha}(K)exp=0.065 and \\ensuremath{\\alpha}(L1)exp=0.024 (1971Ma45)."
      }
     ]
    },
    {
     "energy": {
      "unit": "keV",
      "value": 578.86,
      "uncertainty": {
       "type": "symmetric",
       "value": 0.04
      }
     },
     "gammaIntensity": {
      "value": 5.3,
      "uncertainty": {
       "type": "symmetric",
       "value": 1.6
      }
     },
     "initialLevelIndex": 84,
     "finalLevelIndex": 31,
     "multipolarity": {
      "stringRepresentation": "E1",
      "spins": [
       {
        "spin": 1
       }
      ],
      "parity": "-"
     },
     "theoreticalInternalConversionCoefficients": {
      "totalValue": {
       "value": 0.00461,
       "uncertainty": {
        "type": "unreported"
       }
      },
      "shellValues": [
       {
        "includesOuterShells": false,
        "shell": "K",
        "value": 0.00389,
        "uncertainty": {
         "type": "symmetric",
         "value": 0.00006
        }
       },
       {
        "includesOuterShells": false,
        "shell": "L",
        "value": 0.000555,
        "uncertainty": {
         "type": "symmetric",
         "value": 0.000008
        }
       },
       {
        "includesOuterShells": false,
        "shell": "M",
        "value": 0.0001236,
        "uncertainty": {
         "type": "symmetric",
         "value": 0.0000018
        }
       },
       {
        "includesOuterShells": false,
        "shell": "N",
        "value": 0.000029,
        "uncertainty": {
         "type": "symmetric",
         "value": 4e-7
        }
       },
       {
        "includesOuterShells": false,
        "shell": "O",
        "value": 0.00000425,
        "uncertainty": {
         "type": "symmetric",
         "value": 6e-8
        }
       },
       {
        "includesOuterShells": false,
        "shell": "P",
        "value": 2.52e-7,
        "uncertainty": {
         "type": "symmetric",
         "value": 4e-9
        }
       }
      ]
     },
     "comments": [
      {
       "type": "comment",
       "head": [
        {
         "name": "M"
        }
       ],
       "body": "\\ensuremath{\\alpha}(K)exp=0.006 (1971Ma45)."
      }
     ]
    },
    {
     "energy": {
      "unit": "keV",
      "value": 606.774,
      "uncertainty": {
       "type": "symmetric",
       "value": 0.004
      }
     },
     "gammaIntensity": {
      "value": 100,
      "uncertainty": {
       "type": "symmetric",
       "value": 11
      }
     },
     "initialLevelIndex": 84,
     "finalLevelIndex": 28,
     "multipolarity": {
      "stringRepresentation": "M1(+E2)",
      "isMixedTransition": true,
      "spins": [
       {
        "spin": 1
       },
       {
        "spin": 2
       }
      ],
      "parity": "+"
     },
     "theoreticalInternalConversionCoefficients": {
      "totalValue": {
       "value": 0.027,
       "uncertainty": {
        "type": "unreported"
       }
      },
      "shellValues": [
       {
        "includesOuterShells": false,
        "shell": "K",
        "value": 0.0227,
        "uncertainty": {
         "type": "symmetric",
         "value": 0.0004
        }
       },
       {
        "includesOuterShells": false,
        "shell": "L",
        "value": 0.00336,
        "uncertainty": {
         "type": "symmetric",
         "value": 0.00005
        }
       },
       {
        "includesOuterShells": false,
        "shell": "M",
        "value": 0.000752,
        "uncertainty": {
         "type": "symmetric",
         "value": 0.000011
        }
       },
       {
        "includesOuterShells": false,
        "shell": "N",
        "value": 0.0001777,
        "uncertainty": {
         "type": "symmetric",
         "value": 0.0000025
        }
       },
       {
        "includesOuterShells": false,
        "shell": "O",
        "value": 0.0000264,
        "uncertainty": {
         "type": "symmetric",
         "value": 4e-7
        }
       },
       {
        "includesOuterShells": false,
        "shell": "P",
        "value": 0.000001659,
        "uncertainty": {
         "type": "symmetric",
         "value": 2.4e-8
        }
       }
      ]
     },
     "comments": [
      {
       "type": "comment",
       "head": [
        {
         "name": "M"
        }
       ],
       "body": "\\ensuremath{\\alpha}(K)exp=0.0060 \\textit{22} (1996Pe05) and \\ensuremath{\\alpha}(K)exp=0.012 (1971Ma45)."
      }
     ]
    },
    {
     "energy": {
      "unit": "keV",
      "value": 709.745,
      "uncertainty": {
       "type": "symmetric",
       "value": 0.017
      }
     },
     "gammaIntensity": {
      "value": 35,
      "uncertainty": {
       "type": "symmetric",
       "value": 5
      }
     },
     "initialLevelIndex": 84,
     "finalLevelIndex": 24,
     "multipolarity": {
      "stringRepresentation": "(E1)",
      "spins": [
       {
        "spin": 1
       }
      ],
      "parity": "-"
     },
     "theoreticalInternalConversionCoefficients": {
      "totalValue": {
       "value": 0.00303,
       "uncertainty": {
        "type": "unreported"
       }
      },
      "shellValues": [
       {
        "includesOuterShells": false,
        "shell": "K",
        "value": 0.00256,
        "uncertainty": {
         "type": "symmetric",
         "value": 0.00004
        }
       },
       {
        "includesOuterShells": false,
        "shell": "L",
        "value": 0.000361,
        "uncertainty": {
         "type": "symmetric",
         "value": 0.000005
        }
       },
       {
        "includesOuterShells": false,
        "shell": "M",
        "value": 0.0000803,
        "uncertainty": {
         "type": "symmetric",
         "value": 0.0000012
        }
       },
       {
        "includesOuterShells": false,
        "shell": "N",
        "value": 0.0000189,
        "uncertainty": {
         "type": "symmetric",
         "value": 3e-7
        }
       },
       {
        "includesOuterShells": false,
        "shell": "O",
        "value": 0.00000278,
        "uncertainty": {
         "type": "symmetric",
         "value": 4e-8
        }
       },
       {
        "includesOuterShells": false,
        "shell": "P",
        "value": 1.674e-7,
        "uncertainty": {
         "type": "symmetric",
         "value": 2.4e-9
        }
       }
      ]
     },
     "comments": [
      {
       "type": "comment",
       "head": [
        {
         "name": "M"
        }
       ],
       "body": "\\ensuremath{\\alpha}(K)exp\\ensuremath{\\leq}0.004 (1971Ma45)."
      }
     ]
    }
   ],
   "band": 4,
   "comments": [
    {
     "type": "comment",
     "head": [
      {
       "name": "J"
      }
     ],
     "body": "277.175\\ensuremath{\\gamma} to 11/2\\ensuremath{^{-}}, 362.459\\ensuremath{\\gamma} M1(+E2) to 17/2\\ensuremath{^{-}}; 709.745\\ensuremath{\\gamma} (E1) to 17/2\\ensuremath{^{+}}; band assignment."
    }
   ]
  },
  {
   "energy": {
    "unit": "keV",
    "value": 1566.2,
    "uncertainty": {
     "type": "symmetric",
     "value": 0.12
    }
   },
   "spinParity": {
    "values": [
     {
      "twoTimesSpin": 15,
      "isTentativeSpin": true,
      "parity": "+",
      "isTentativeParity": true
     }
    ]
   },
   "isStable": false,
   "flags": [
    "q"
   ],
   "crossReferences": [
    {
     "dataset": "176LU(N,G) E=THERMAL"
    }
   ],
   "gammas": [
    {
     "energy": {
      "unit": "keV",
      "value": 1126,
      "uncertainty": {
       "type": "symmetric",
       "value": 1.2
      }
     },
     "initialLevelIndex": 85,
     "finalLevelIndex": 5
    },
    {
     "energy": {
      "unit": "keV",
      "value": 1277.7,
      "uncertainty": {
       "type": "symmetric",
       "value": 1
      }
     },
     "gammaIntensity": {
      "value": 35,
      "uncertainty": {
       "type": "symmetric",
       "value": 17
      }
     },
     "initialLevelIndex": 85,
     "finalLevelIndex": 4,
     "multipolarity": {
      "stringRepresentation": "(M2)",
      "spins": [
       {
        "spin": 2
       }
      ],
      "parity": "-"
     },
     "theoreticalInternalConversionCoefficients": {
      "totalValue": {
       "value": 0.01012,
       "uncertainty": {
        "type": "unreported"
       }
      },
      "pairCreationValue": {
       "value": 0.00000504,
       "uncertainty": {
        "type": "symmetric",
        "value": 1e-7
       }
      },
      "shellValues": [
       {
        "includesOuterShells": false,
        "shell": "K",
        "value": 0.00844,
        "uncertainty": {
         "type": "symmetric",
         "value": 0.00012
        }
       },
       {
        "includesOuterShells": false,
        "shell": "L",
        "value": 0.001301,
        "uncertainty": {
         "type": "symmetric",
         "value": 0.000019
        }
       },
       {
        "includesOuterShells": false,
        "shell": "M",
        "value": 0.000293,
        "uncertainty": {
         "type": "symmetric",
         "value": 0.000005
        }
       },
       {
        "includesOuterShells": false,
        "shell": "N",
        "value": 0.0000693,
        "uncertainty": {
         "type": "symmetric",
         "value": 0.000001
        }
       },
       {
        "includesOuterShells": false,
        "shell": "O",
        "value": 0.00001029,
        "uncertainty": {
         "type": "symmetric",
         "value": 1.5e-7
        }
       },
       {
        "includesOuterShells": false,
        "shell": "P",
        "value": 6.41e-7,
        "uncertainty": {
         "type": "symmetric",
         "value": 9e-9
        }
       }
      ]
     },
     "comments": [
      {
       "type": "comment",
       "head": [
        {
         "name": "M"
        }
       ],
       "body": "\\ensuremath{\\alpha}(K)exp=0.006 (1971Ma45)."
      }
     ]
    },
    {
     "energy": {
      "unit": "keV",
      "value": 1297.4,
      "uncertainty": {
       "type": "symmetric",
       "value": 0.12
      }
     },
     "gammaIntensity": {
      "value": 100,
      "uncertainty": {
       "type": "symmetric",
       "value": 5
      }
     },
     "initialLevelIndex": 85,
     "finalLevelIndex": 3,
     "multipolarity": {
      "stringRepresentation": "E2",
      "spins": [
       {
        "spin": 2
       }
      ],
      "parity": "+"
     },
     "theoreticalInternalConversionCoefficients": {
      "totalValue": {
       "value": 0.00234,
       "uncertainty": {
        "type": "unreported"
       }
      },
      "pairCreationValue": {
       "value": 0.0000178,
       "uncertainty": {
        "type": "symmetric",
        "value": 3e-7
       }
      },
      "shellValues": [
       {
        "includesOuterShells": false,
        "shell": "K",
        "value": 0.00195,
        "uncertainty": {
         "type": "symmetric",
         "value": 0.00003
        }
       },
       {
        "includesOuterShells": false,
        "shell": "L",
        "value": 0.000294,
        "uncertainty": {
         "type": "symmetric",
         "value": 0.000005
        }
       },
       {
        "includesOuterShells": false,
        "shell": "M",
        "value": 0.000066,
        "uncertainty": {
         "type": "symmetric",
         "value": 0.000001
        }
       },
       {
        "includesOuterShells": false,
        "shell": "N",
        "value": 0.00001555,
        "uncertainty": {
         "type": "symmetric",
         "value": 2.2e-7
        }
       },
       {
        "includesOuterShells": false,
        "shell": "O",
        "value": 0.00000228,
        "uncertainty": {
         "type": "symmetric",
         "value": 4e-8
        }
       },
       {
        "includesOuterShells": false,
        "shell": "P",
        "value": 1.344e-7,
        "uncertainty": {
         "type": "symmetric",
         "value": 1.9e-9
        }
       }
      ]
     },
     "comments": [
      {
       "type": "comment",
       "head": [
        {
         "name": "M"
        }
       ],
       "body": "\\ensuremath{\\alpha}(K)exp=0.0033 (1971Ma45)."
      }
     ]
    }
   ],
   "band": 18,
   "comments": [
    {
     "type": "comment",
     "head": [
      {
       "name": "J"
      }
     ],
     "body": "1277.70\\ensuremath{\\gamma} (M2) to 11/2\\ensuremath{^{-}}; 1297.40\\ensuremath{\\gamma} E2 to 11/2\\ensuremath{^{+}}; band assignment."
    }
   ]
  },
  {
   "energy": {
    "unit": "keV",
    "value": 1573.32,
    "uncertainty": {
     "type": "symmetric",
     "value": 0.04
    }
   },
   "spinParity": {
    "values": [
     {
      "twoTimesSpin": 7,
      "isTentativeSpin": true,
      "parity": "-",
      "isTentativeParity": true
     }
    ]
   },
   "isStable": false,
   "flags": [
    "H"
   ],
   "crossReferences": [
    {
     "dataset": "176LU(N,G) E=THERMAL"
    }
   ],
   "gammas": [
    {
     "energy": {
      "unit": "keV",
      "value": 178.85,
      "uncertainty": {
       "type": "symmetric",
       "value": 0.06
      }
     },
     "gammaIntensity": {
      "value": 5.7,
      "uncertainty": {
       "type": "symmetric",
       "value": 2.4
      }
     },
     "initialLevelIndex": 86,
     "finalLevelIndex": 67
    },
    {
     "energy": {
      "unit": "keV",
      "value": 811.94,
      "uncertainty": {
       "type": "symmetric",
       "value": 0.09
      }
     },
     "gammaIntensity": {
      "value": 100,
      "uncertainty": {
       "type": "symmetric",
       "value": 10
      }
     },
     "initialLevelIndex": 86,
     "finalLevelIndex": 16
    }
   ],
   "band": 5,
   "comments": [
    {
     "type": "comment",
     "head": [
      {
       "name": "J"
      }
     ],
     "body": "178.85\\ensuremath{\\gamma} to 5/2\\ensuremath{^{-}}; band assignment"
    }
   ]
  },
  {
   "energy": {
    "unit": "keV",
    "value": 1573.7,
    "uncertainty": {
     "type": "symmetric",
     "value": 0.6
    }
   },
   "spinParity": {
    "values": [
     {
      "twoTimesSpin": 11,
      "isTentativeSpin": true,
      "parity": "+",
      "isTentativeParity": true
     }
    ]
   },
   "isStable": false,
   "flags": [
    "r"
   ],
   "crossReferences": [
    {
     "dataset": "176LU(N,G) E=THERMAL"
    }
   ],
   "gammas": [
    {
     "energy": {
      "unit": "keV",
      "value": 1132.4,
      "uncertainty": {
       "type": "symmetric",
       "value": 0.8
      }
     },
     "gammaIntensity": {
      "value": 37,
      "uncertainty": {
       "type": "symmetric",
       "value": 13
      }
     },
     "initialLevelIndex": 87,
     "finalLevelIndex": 5,
     "multipolarity": {
      "stringRepresentation": "M1(+E2)",
      "isMixedTransition": true,
      "spins": [
       {
        "spin": 1
       },
       {
        "spin": 2
       }
      ],
      "parity": "+"
     },
     "theoreticalInternalConversionCoefficients": {
      "totalValue": {
       "value": 0.00569,
       "uncertainty": {
        "type": "unreported"
       }
      },
      "pairCreationValue": {
       "value": 0.00000102,
       "uncertainty": {
        "type": "symmetric",
        "value": 4e-8
       }
      },
      "shellValues": [
       {
        "includesOuterShells": false,
        "shell": "K",
        "value": 0.0048,
        "uncertainty": {
         "type": "symmetric",
         "value": 0.00007
        }
       },
       {
        "includesOuterShells": false,
        "shell": "L",
        "value": 0.000696,
        "uncertainty": {
         "type": "symmetric",
         "value": 0.00001
        }
       },
       {
        "includesOuterShells": false,
        "shell": "M",
        "value": 0.0001554,
        "uncertainty": {
         "type": "symmetric",
         "value": 0.0000022
        }
       },
       {
        "includesOuterShells": false,
        "shell": "N",
        "value": 0.0000367,
        "uncertainty": {
         "type": "symmetric",
         "value": 6e-7
        }
       },
       {
        "includesOuterShells": false,
        "shell": "O",
        "value": 0.00000547,
        "uncertainty": {
         "type": "symmetric",
         "value": 8e-8
        }
       },
       {
        "includesOuterShells": false,
        "shell": "P",
        "value": 3.47e-7,
        "uncertainty": {
         "type": "symmetric",
         "value": 5e-9
        }
       }
      ]
     },
     "comments": [
      {
       "type": "comment",
       "head": [
        {
         "name": "M"
        }
       ],
       "body": "\\ensuremath{\\alpha}(K)exp=0.010 (1971Ma45)."
      }
     ]
    },
    {
     "energy": {
      "unit": "keV",
      "value": 1305.3,
      "uncertainty": {
       "type": "symmetric",
       "value": 1
      }
     },
     "gammaIntensity": {
      "value": 100,
      "uncertainty": {
       "type": "symmetric",
       "value": 37
      }
     },
     "initialLevelIndex": 87,
     "finalLevelIndex": 3,
     "multipolarity": {
      "stringRepresentation": "M1(+E2)",
      "isMixedTransition": true,
      "spins": [
       {
        "spin": 1
       },
       {
        "spin": 2
       }
      ],
      "parity": "+"
     },
     "theoreticalInternalConversionCoefficients": {
      "totalValue": {
       "value": 0.00405,
       "uncertainty": {
        "type": "unreported"
       }
      },
      "pairCreationValue": {
       "value": 0.0000248,
       "uncertainty": {
        "type": "symmetric",
        "value": 5e-7
       }
      },
      "shellValues": [
       {
        "includesOuterShells": false,
        "shell": "K",
        "value": 0.0034,
        "uncertainty": {
         "type": "symmetric",
         "value": 0.00005
        }
       },
       {
        "includesOuterShells": false,
        "shell": "L",
        "value": 0.00049,
        "uncertainty": {
         "type": "symmetric",
         "value": 0.000007
        }
       },
       {
        "includesOuterShells": false,
        "shell": "M",
        "value": 0.0001094,
        "uncertainty": {
         "type": "symmetric",
         "value": 0.0000016
        }
       },
       {
        "includesOuterShells": false,
        "shell": "N",
        "value": 0.0000259,
        "uncertainty": {
         "type": "symmetric",
         "value": 4e-7
        }
       },
       {
        "includesOuterShells": false,
        "shell": "O",
        "value": 0.00000385,
        "uncertainty": {
         "type": "symmetric",
         "value": 6e-8
        }
       },
       {
        "includesOuterShells": false,
        "shell": "P",
        "value": 2.45e-7,
        "uncertainty": {
         "type": "symmetric",
         "value": 4e-9
        }
       }
      ]
     },
     "comments": [
      {
       "type": "comment",
       "head": [
        {
         "name": "M"
        }
       ],
       "body": "\\ensuremath{\\alpha}(K)exp=0.0050 (1971Ma45)."
      }
     ]
    },
    {
     "energy": {
      "unit": "keV",
      "value": 1452.8,
      "uncertainty": {
       "type": "symmetric",
       "value": 1.2
      }
     },
     "gammaIntensity": {
      "value": 37,
      "uncertainty": {
       "type": "symmetric",
       "value": 13
      }
     },
     "initialLevelIndex": 87,
     "finalLevelIndex": 1
    }
   ],
   "band": 19,
   "comments": [
    {
     "type": "comment",
     "head": [
      {
       "name": "J"
      }
     ],
     "body": "1132.4\\ensuremath{\\gamma} M1(+E2) to 13/2\\ensuremath{^{+}}; band assignment."
    }
   ]
  },
  {
   "energy": {
    "unit": "keV",
    "value": 1588.7,
    "uncertainty": {
     "type": "symmetric",
     "value": 0.4
    }
   },
   "spinParity": {
    "values": [
     {
      "twoTimesSpin": 23,
      "isTentativeSpin": false,
      "parity": "-",
      "isTentativeParity": false
     }
    ]
   },
   "isStable": false,
   "flags": [
    "B"
   ],
   "crossReferences": [
    {
     "dataset": "176LU(D,P)",
     "level": 1587
    },
    {
     "dataset": "(HI,XNG)"
    }
   ],
   "gammas": [
    {
     "energy": {
      "unit": "keV",
      "value": 266.6,
      "uncertainty": {
       "type": "symmetric",
       "value": 0.5
      }
     },
     "gammaIntensity": {
      "value": 100,
      "uncertainty": {
       "type": "symmetric",
       "value": 20
      }
     },
     "initialLevelIndex": 88,
     "finalLevelIndex": 56,
     "multipolarity": {
      "stringRepresentation": "[M1+E2]",
      "isMixedTransition": true,
      "spins": [
       {
        "spin": 1,
        "evaluatorInferred": true
       },
       {
        "spin": 2,
        "evaluatorInferred": true
       }
      ],
      "parity": "+"
     },
     "theoreticalInternalConversionCoefficients": {
      "totalValue": {
       "value": 0.235,
       "uncertainty": {
        "type": "unreported"
       }
      },
      "shellValues": [
       {
        "includesOuterShells": false,
        "shell": "K",
        "value": 0.197,
        "uncertainty": {
         "type": "symmetric",
         "value": 0.003
        }
       },
       {
        "includesOuterShells": false,
        "shell": "L",
        "value": 0.0299,
        "uncertainty": {
         "type": "symmetric",
         "value": 0.0005
        }
       },
       {
        "includesOuterShells": false,
        "shell": "M",
        "value": 0.00672,
        "uncertainty": {
         "type": "symmetric",
         "value": 0.0001
        }
       },
       {
        "includesOuterShells": false,
        "shell": "N",
        "value": 0.001587,
        "uncertainty": {
         "type": "symmetric",
         "value": 0.000024
        }
       },
       {
        "includesOuterShells": false,
        "shell": "O",
        "value": 0.000235,
        "uncertainty": {
         "type": "symmetric",
         "value": 0.000004
        }
       },
       {
        "includesOuterShells": false,
        "shell": "P",
        "value": 0.00001462,
        "uncertainty": {
         "type": "symmetric",
         "value": 2.2e-7
        }
       }
      ]
     },
     "flags": [
      "S"
     ]
    },
    {
     "energy": {
      "unit": "keV",
      "value": 515,
      "uncertainty": {
       "type": "symmetric",
       "value": 0.5
      }
     },
     "gammaIntensity": {
      "value": 29,
      "uncertainty": {
       "type": "symmetric",
       "value": 14
      }
     },
     "initialLevelIndex": 88,
     "finalLevelIndex": 35,
     "multipolarity": {
      "stringRepresentation": "[E2]",
      "spins": [
       {
        "spin": 2,
        "evaluatorInferred": true
       }
      ],
      "parity": "+"
     },
     "theoreticalInternalConversionCoefficients": {
      "totalValue": {
       "value": 0.01725,
       "uncertainty": {
        "type": "unreported"
       }
      },
      "shellValues": [
       {
        "includesOuterShells": false,
        "shell": "K",
        "value": 0.01353,
        "uncertainty": {
         "type": "symmetric",
         "value": 0.0002
        }
       },
       {
        "includesOuterShells": false,
        "shell": "L",
        "value": 0.00287,
        "uncertainty": {
         "type": "symmetric",
         "value": 0.00005
        }
       },
       {
        "includesOuterShells": false,
        "shell": "M",
        "value": 0.000668,
        "uncertainty": {
         "type": "symmetric",
         "value": 0.00001
        }
       },
       {
        "includesOuterShells": false,
        "shell": "N",
        "value": 0.000156,
        "uncertainty": {
         "type": "symmetric",
         "value": 0.0000023
        }
       },
       {
        "includesOuterShells": false,
        "shell": "O",
        "value": 0.0000216,
        "uncertainty": {
         "type": "symmetric",
         "value": 3e-7
        }
       },
       {
        "includesOuterShells": false,
        "shell": "P",
        "value": 9.13e-7,
        "uncertainty": {
         "type": "symmetric",
         "value": 1.3e-8
        }
       }
      ]
     },
     "flags": [
      "S"
     ]
    }
   ],
   "band": 1,
   "comments": [
    {
     "type": "comment",
     "head": [
      {
       "name": "J"
      }
     ],
     "body": "266.6\\ensuremath{\\gamma} to 21/2\\ensuremath{^{-}}; 515.0\\ensuremath{\\gamma} assumed to 19/2\\ensuremath{^{-}}; band assignment."
    }
   ]
  },
  {
   "energy": {
    "unit": "keV",
    "value": 1591,
    "uncertainty": {
     "type": "symmetric",
     "value": 1.1
    }
   },
   "isStable": false,
   "flags": [
    "Z"
   ],
   "crossReferences": [
    {
     "dataset": "176LU(N,G) E=THERMAL"
    }
   ]
  },
  {
   "energy": {
    "unit": "keV",
    "value": 1602,
    "uncertainty": {
     "type": "unreported"
    }
   },
   "isStable": false,
   "flags": [
    "R"
   ],
   "crossReferences": [
    {
     "dataset": "176YB(3HE,D),(A,T)"
    }
   ]
  },
  {
   "energy": {
    "unit": "keV",
    "value": 1605.8,
    "uncertainty": {
     "type": "symmetric",
     "value": 0.5
    }
   },
   "spinParity": {
    "values": [
     {
      "twoTimesSpin": 27,
      "isTentativeSpin": false,
      "parity": "+",
      "isTentativeParity": false
     }
    ]
   },
   "isStable": false,
   "flags": [
    "J"
   ],
   "crossReferences": [
    {
     "dataset": "(HI,XNG)"
    }
   ],
   "gammas": [
    {
     "energy": {
      "unit": "keV",
      "value": 281.3,
      "uncertainty": {
       "type": "symmetric",
       "value": 0.5
      }
     },
     "gammaIntensity": {
      "value": 100,
      "uncertainty": {
       "type": "unreported"
      }
     },
     "initialLevelIndex": 91,
     "finalLevelIndex": 57,
     "flags": [
      "S"
     ]
    }
   ],
   "band": 9,
   "comments": [
    {
     "type": "comment",
     "head": [
      {
       "name": "J"
      }
     ],
     "body": "281.3\\ensuremath{\\gamma} to 25/2\\ensuremath{^{+}}; band assignment."
    }
   ]
  },
  {
   "energy": {
    "unit": "keV",
    "value": 1607.369,
    "uncertainty": {
     "type": "symmetric",
     "value": 0.023
    }
   },
   "spinParity": {
    "values": [
     {
      "twoTimesSpin": 15,
      "isTentativeSpin": true,
      "parity": "+",
      "isTentativeParity": true
     }
    ]
   },
   "isStable": false,
   "flags": [
    "o"
   ],
   "crossReferences": [
    {
     "dataset": "176LU(N,G) E=THERMAL"
    },
    {
     "dataset": "176LU(D,P)",
     "level": 1608
    }
   ],
   "gammas": [
    {
     "energy": {
      "unit": "keV",
      "value": 152.8,
      "uncertainty": {
       "type": "unreported"
      }
     },
     "initialLevelIndex": 92,
     "finalLevelIndex": 71
    },
    {
     "energy": {
      "unit": "keV",
      "value": 753.27,
      "uncertainty": {
       "type": "symmetric",
       "value": 0.1
      }
     },
     "gammaIntensity": {
      "value": 47,
      "uncertainty": {
       "type": "symmetric",
       "value": 4
      }
     },
     "initialLevelIndex": 92,
     "finalLevelIndex": 24,
     "multipolarity": {
      "stringRepresentation": "M1(+E2)",
      "isMixedTransition": true,
      "spins": [
       {
        "spin": 1
       },
       {
        "spin": 2
       }
      ],
      "parity": "+"
     },
     "theoreticalInternalConversionCoefficients": {
      "totalValue": {
       "value": 0.01562,
       "uncertainty": {
        "type": "unreported"
       }
      },
      "shellValues": [
       {
        "includesOuterShells": false,
        "shell": "K",
        "value": 0.01314,
        "uncertainty": {
         "type": "symmetric",
         "value": 0.00019
        }
       },
       {
        "includesOuterShells": false,
        "shell": "L",
        "value": 0.00193,
        "uncertainty": {
         "type": "symmetric",
         "value": 0.00003
        }
       },
       {
        "includesOuterShells": false,
        "shell": "M",
        "value": 0.000432,
        "uncertainty": {
         "type": "symmetric",
         "value": 0.000006
        }
       },
       {
        "includesOuterShells": false,
        "shell": "N",
        "value": 0.0001021,
        "uncertainty": {
         "type": "symmetric",
         "value": 0.0000015
        }
       },
       {
        "includesOuterShells": false,
        "shell": "O",
        "value": 0.00001519,
        "uncertainty": {
         "type": "symmetric",
         "value": 2.2e-7
        }
       },
       {
        "includesOuterShells": false,
        "shell": "P",
        "value": 9.57e-7,
        "uncertainty": {
         "type": "symmetric",
         "value": 1.4e-8
        }
       }
      ]
     },
     "comments": [
      {
       "type": "comment",
       "head": [
        {
         "name": "M"
        }
       ],
       "body": "\\ensuremath{\\alpha}(K)exp=0.011 (1971Ma45)."
      }
     ]
    },
    {
     "energy": {
      "unit": "keV",
      "value": 971.15,
      "uncertainty": {
       "type": "symmetric",
       "value": 0.03
      }
     },
     "gammaIntensity": {
      "value": 27,
      "uncertainty": {
       "type": "symmetric",
       "value": 5
      }
     },
     "initialLevelIndex": 92,
     "finalLevelIndex": 11
    },
    {
     "energy": {
      "unit": "keV",
      "value": 1166.64,
      "uncertainty": {
       "type": "symmetric",
       "value": 0.04
      }
     },
     "gammaIntensity": {
      "value": 100,
      "uncertainty": {
       "type": "symmetric",
       "value": 14
      }
     },
     "initialLevelIndex": 92,
     "finalLevelIndex": 5
    }
   ],
   "band": 16,
   "comments": [
    {
     "type": "comment",
     "head": [
      {
       "name": "J"
      }
     ],
     "body": "753.27\\ensuremath{\\gamma} M1(+E2) to 17/2\\ensuremath{^{+}}; band assignment."
    }
   ]
  },
  {
   "energy": {
    "unit": "keV",
    "value": 1623.25,
    "uncertainty": {
     "type": "symmetric",
     "value": 0.011
    }
   },
   "spinParity": {
    "values": [
     {
      "twoTimesSpin": 19,
      "isTentativeSpin": false,
      "parity": "+",
      "isTentativeParity": false
     }
    ]
   },
   "isStable": false,
   "flags": [
    "C"
   ],
   "crossReferences": [
    {
     "dataset": "176LU(N,G) E=THERMAL"
    },
    {
     "dataset": "(HI,XNG)"
    }
   ],
   "gammas": [
    {
     "energy": {
      "unit": "keV",
      "value": 233.6,
      "uncertainty": {
       "type": "symmetric",
       "value": 0.5
      }
     },
     "gammaIntensity": {
      "value": 52,
      "uncertainty": {
       "type": "symmetric",
       "value": 13
      }
     },
     "initialLevelIndex": 93,
     "finalLevelIndex": 66,
     "multipolarity": {
      "stringRepresentation": "M1(+E2)",
      "isMixedTransition": true,
      "spins": [
       {
        "spin": 1
       },
       {
        "spin": 2
       }
      ],
      "parity": "+"
     },
     "theoreticalInternalConversionCoefficients": {
      "totalValue": {
       "value": 0.338,
       "uncertainty": {
        "type": "symmetric",
        "value": 0.006
       }
      },
      "shellValues": [
       {
        "includesOuterShells": false,
        "shell": "K",
        "value": 0.282,
        "uncertainty": {
         "type": "symmetric",
         "value": 0.005
        }
       },
       {
        "includesOuterShells": false,
        "shell": "L",
        "value": 0.043,
        "uncertainty": {
         "type": "symmetric",
         "value": 0.0007
        }
       },
       {
        "includesOuterShells": false,
        "shell": "M",
        "value": 0.00967,
        "uncertainty": {
         "type": "symmetric",
         "value": 0.00015
        }
       },
       {
        "includesOuterShells": false,
        "shell": "N",
        "value": 0.00228,
        "uncertainty": {
         "type": "symmetric",
         "value": 0.00004
        }
       },
       {
        "includesOuterShells": false,
        "shell": "O",
        "value": 0.000339,
        "uncertainty": {
         "type": "symmetric",
         "value": 0.000006
        }
       },
       {
        "includesOuterShells": false,
        "shell": "P",
        "value": 0.000021,
        "uncertainty": {
         "type": "symmetric",
         "value": 4e-7
        }
       }
      ]
     },
     "flags": [
      "S"
     ],
     "comments": [
      {
       "type": "comment",
       "head": [
        {
         "name": "M"
        }
       ],
       "body": "\\ensuremath{\\alpha}(K)exp=0.35 (1971Ma45)."
      }
     ]
    },
    {
     "energy": {
      "unit": "keV",
      "value": 446.4,
      "uncertainty": {
       "type": "symmetric",
       "value": 0.5
      }
     },
     "gammaIntensity": {
      "value": 100,
      "uncertainty": {
       "type": "symmetric",
       "value": 30
      }
     },
     "initialLevelIndex": 93,
     "finalLevelIndex": 43,
     "multipolarity": {
      "stringRepresentation": "[E2]",
      "spins": [
       {
        "spin": 2,
        "evaluatorInferred": true
       }
      ],
      "parity": "+"
     },
     "theoreticalInternalConversionCoefficients": {
      "totalValue": {
       "value": 0.0249,
       "uncertainty": {
        "type": "unreported"
       }
      },
      "shellValues": [
       {
        "includesOuterShells": false,
        "shell": "K",
        "value": 0.0191,
        "uncertainty": {
         "type": "symmetric",
         "value": 0.0003
        }
       },
       {
        "includesOuterShells": false,
        "shell": "L",
        "value": 0.00446,
        "uncertainty": {
         "type": "symmetric",
         "value": 0.00007
        }
       },
       {
        "includesOuterShells": false,
        "shell": "M",
        "value": 0.001043,
        "uncertainty": {
         "type": "symmetric",
         "value": 0.000015
        }
       },
       {
        "includesOuterShells": false,
        "shell": "N",
        "value": 0.000243,
        "uncertainty": {
         "type": "symmetric",
         "value": 0.000004
        }
       },
       {
        "includesOuterShells": false,
        "shell": "O",
        "value": 0.0000332,
        "uncertainty": {
         "type": "symmetric",
         "value": 5e-7
        }
       },
       {
        "includesOuterShells": false,
        "shell": "P",
        "value": 0.000001274,
        "uncertainty": {
         "type": "symmetric",
         "value": 1.9e-8
        }
       }
      ]
     },
     "flags": [
      "S"
     ]
    },
    {
     "energy": {
      "unit": "keV",
      "value": 768.7,
      "uncertainty": {
       "type": "symmetric",
       "value": 1
      }
     },
     "initialLevelIndex": 93,
     "finalLevelIndex": 24
    },
    {
     "energy": {
      "unit": "keV",
      "value": 987.9,
      "uncertainty": {
       "type": "symmetric",
       "value": 0.5
      }
     },
     "gammaIntensity": {
      "value": 77,
      "uncertainty": {
       "type": "symmetric",
       "value": 9
      }
     },
     "initialLevelIndex": 93,
     "finalLevelIndex": 11,
     "comments": [
      {
       "type": "comment",
       "head": [
        {
         "name": "E"
        }
       ],
       "body": "987.86 keV \\textit{5} in \\ensuremath{^{\\textnormal{176}}}Lu(n,\\ensuremath{\\gamma})"
      }
     ]
    }
   ],
   "band": 2,
   "comments": [
    {
     "type": "comment",
     "head": [
      {
       "name": "J"
      }
     ],
     "body": "233.6\\ensuremath{\\gamma} M1(+E2) to 17/2\\ensuremath{^{+}}; 446.4\\ensuremath{\\gamma} to 15/2\\ensuremath{^{+}}; band assignment."
    }
   ]
  },
  {
   "energy": {
    "unit": "keV",
    "value": 1623.4,
    "uncertainty": {
     "type": "symmetric",
     "value": 0.7
    }
   },
   "spinParity": {
    "values": [
     {
      "twoTimesSpin": 9,
      "isTentativeSpin": true,
      "parity": "+",
      "isTentativeParity": true
     }
    ]
   },
   "isStable": false,
   "flags": [
    "u"
   ],
   "crossReferences": [
    {
     "dataset": "176LU(N,G) E=THERMAL"
    }
   ],
   "gammas": [
    {
     "energy": {
      "unit": "keV",
      "value": 902.6,
      "uncertainty": {
       "type": "symmetric",
       "value": 1
      }
     },
     "gammaIntensity": {
      "value": 100,
      "uncertainty": {
       "type": "unreported"
      }
     },
     "initialLevelIndex": 94,
     "finalLevelIndex": 15
    }
   ],
   "band": 22,
   "comments": [
    {
     "type": "comment",
     "head": [
      {
       "name": "J"
      }
     ],
     "body": "902.6\\ensuremath{\\gamma} to 7/2\\ensuremath{^{+}}; band assignment."
    },
    {
     "type": "comment",
     "head": [
      {
       "name": "CONF"
      }
     ],
     "body": "\\ensuremath{K^{\\pi}}=9/2\\ensuremath{^{+}}:\\ensuremath{\\pi}1/2[411]\\ensuremath{\\otimes}\\ensuremath{\\nu}\\ensuremath{^{\\textnormal{2}}}(7/2[514],1/2[510]). The assignment is tentative."
    }
   ]
  },
  {
   "energy": {
    "unit": "keV",
    "value": 1628.096,
    "uncertainty": {
     "type": "symmetric",
     "value": 0.017
    }
   },
   "spinParity": {
    "values": [
     {
      "twoTimesSpin": 9,
      "isTentativeSpin": true,
      "parity": "-",
      "isTentativeParity": true
     }
    ]
   },
   "isStable": false,
   "flags": [
    "H"
   ],
   "crossReferences": [
    {
     "dataset": "176LU(N,G) E=THERMAL"
    },
    {
     "dataset": "176YB(3HE,D),(A,T)",
     "level": 1629
    },
    {
     "dataset": "178HF(T,A)",
     "level": 1628
    }
   ],
   "gammas": [
    {
     "energy": {
      "unit": "keV",
      "value": 341.132,
      "uncertainty": {
       "type": "symmetric",
       "value": 0.018
      }
     },
     "gammaIntensity": {
      "value": 23,
      "uncertainty": {
       "type": "symmetric",
       "value": 3
      }
     },
     "initialLevelIndex": 95,
     "finalLevelIndex": 51,
     "multipolarity": {
      "stringRepresentation": "M1(+E2)",
      "isMixedTransition": true,
      "spins": [
       {
        "spin": 1
       },
       {
        "spin": 2
       }
      ],
      "parity": "+"
     },
     "theoreticalInternalConversionCoefficients": {
      "totalValue": {
       "value": 0.1212,
       "uncertainty": {
        "type": "unreported"
       }
      },
      "shellValues": [
       {
        "includesOuterShells": false,
        "shell": "K",
        "value": 0.1015,
        "uncertainty": {
         "type": "symmetric",
         "value": 0.0015
        }
       },
       {
        "includesOuterShells": false,
        "shell": "L",
        "value": 0.01532,
        "uncertainty": {
         "type": "symmetric",
         "value": 0.00022
        }
       },
       {
        "includesOuterShells": false,
        "shell": "M",
        "value": 0.00344,
        "uncertainty": {
         "type": "symmetric",
         "value": 0.00005
        }
       },
       {
        "includesOuterShells": false,
        "shell": "N",
        "value": 0.000812,
        "uncertainty": {
         "type": "symmetric",
         "value": 0.000012
        }
       },
       {
        "includesOuterShells": false,
        "shell": "O",
        "value": 0.0001206,
        "uncertainty": {
         "type": "symmetric",
         "value": 0.0000017
        }
       },
       {
        "includesOuterShells": false,
        "shell": "P",
        "value": 0.00000751,
        "uncertainty": {
         "type": "symmetric",
         "value": 1.1e-7
        }
       }
      ]
     },
     "comments": [
      {
       "type": "comment",
       "head": [
        {
         "name": "M"
        }
       ],
       "body": "\\ensuremath{\\alpha}(K)exp=0.089 (1971Ma45)"
      }
     ]
    },
    {
     "energy": {
      "unit": "keV",
      "value": 817.01,
      "uncertainty": {
       "type": "symmetric",
       "value": 0.11
      }
     },
     "gammaIntensity": {
      "value": 100,
      "uncertainty": {
       "type": "symmetric",
       "value": 16
      }
     },
     "initialLevelIndex": 95,
     "finalLevelIndex": 19
    }
   ],
   "band": 5,
   "comments": [
    {
     "type": "comment",
     "head": [
      {
       "name": "J"
      }
     ],
     "body": "L=5 in \\ensuremath{^{\\textnormal{176}}}Yb(\\ensuremath{^{\\textnormal{3}}}He,d),(\\ensuremath{\\alpha},t); 341.33\\ensuremath{\\gamma} M1(+E2) to 11/2\\ensuremath{^{-}}; band assignment."
    }
   ]
  },
  {
   "energy": {
    "unit": "keV",
    "value": 1629.7,
    "uncertainty": {
     "type": "symmetric",
     "value": 0.5
    }
   },
   "spinParity": {
    "values": [
     {
      "twoTimesSpin": 23,
      "isTentativeSpin": true,
      "parity": "+",
      "isTentativeParity": true
     }
    ]
   },
   "isStable": false,
   "flags": [
    "A"
   ],
   "crossReferences": [
    {
     "dataset": "(HI,XNG)"
    }
   ],
   "gammas": [
    {
     "energy": {
      "unit": "keV",
      "value": 536,
      "uncertainty": {
       "type": "symmetric",
       "value": 0.5
      }
     },
     "gammaIntensity": {
      "value": 100,
      "uncertainty": {
       "type": "unreported"
      }
     },
     "initialLevelIndex": 96,
     "finalLevelIndex": 37,
     "multipolarity": {
      "stringRepresentation": "[E2]",
      "spins": [
       {
        "spin": 2,
        "evaluatorInferred": true
       }
      ],
      "parity": "+"
     },
     "theoreticalInternalConversionCoefficients": {
      "totalValue": {
       "value": 0.01561,
       "uncertainty": {
        "type": "unreported"
       }
      },
      "shellValues": [
       {
        "includesOuterShells": false,
        "shell": "K",
        "value": 0.01231,
        "uncertainty": {
         "type": "symmetric",
         "value": 0.00018
        }
       },
       {
        "includesOuterShells": false,
        "shell": "L",
        "value": 0.00255,
        "uncertainty": {
         "type": "symmetric",
         "value": 0.00004
        }
       },
       {
        "includesOuterShells": false,
        "shell": "M",
        "value": 0.000592,
        "uncertainty": {
         "type": "symmetric",
         "value": 0.000009
        }
       },
       {
        "includesOuterShells": false,
        "shell": "N",
        "value": 0.0001385,
        "uncertainty": {
         "type": "symmetric",
         "value": 0.000002
        }
       },
       {
        "includesOuterShells": false,
        "shell": "O",
        "value": 0.0000192,
        "uncertainty": {
         "type": "symmetric",
         "value": 3e-7
        }
       },
       {
        "includesOuterShells": false,
        "shell": "P",
        "value": 8.34e-7,
        "uncertainty": {
         "type": "symmetric",
         "value": 1.2e-8
        }
       }
      ]
     },
     "flags": [
      "S"
     ]
    }
   ],
   "band": 0,
   "comments": [
    {
     "type": "comment",
     "head": [
      {
       "name": "J"
      }
     ],
     "body": "536.0\\ensuremath{\\gamma} to 15/2\\ensuremath{^{+}}; band assignment."
    }
   ]
  },
  {
   "energy": {
    "unit": "keV",
    "value": 1632.771,
    "uncertainty": {
     "type": "symmetric",
     "value": 0.009
    }
   },
   "spinParity": {
    "values": [
     {
      "twoTimesSpin": 15,
      "isTentativeSpin": true,
      "parity": "+",
      "isTentativeParity": true
     }
    ]
   },
   "isStable": false,
   "flags": [
    "p"
   ],
   "crossReferences": [
    {
     "dataset": "176LU(N,G) E=THERMAL"
    },
    {
     "dataset": "176LU(D,P)"
    }
   ],
   "gammas": [
    {
     "energy": {
      "unit": "keV",
      "value": 130.089,
      "uncertainty": {
       "type": "symmetric",
       "value": 0.004
      }
     },
     "gammaIntensity": {
      "value": 35,
      "uncertainty": {
       "type": "symmetric",
       "value": 6
      }
     },
     "initialLevelIndex": 97,
     "finalLevelIndex": 76
    },
    {
     "energy": {
      "unit": "keV",
      "value": 161.47,
      "uncertainty": {
       "type": "unreported"
      }
     },
     "initialLevelIndex": 97,
     "finalLevelIndex": 73
    },
    {
     "energy": {
      "unit": "keV",
      "value": 275.91,
      "uncertainty": {
       "type": "symmetric",
       "value": 0.08
      }
     },
     "gammaIntensity": {
      "value": 36,
      "uncertainty": {
       "type": "symmetric",
       "value": 9
      }
     },
     "initialLevelIndex": 97,
     "finalLevelIndex": 64,
     "multipolarity": {
      "stringRepresentation": "M1(+E2)",
      "isMixedTransition": true,
      "spins": [
       {
        "spin": 1
       },
       {
        "spin": 2
       }
      ],
      "parity": "+"
     },
     "theoreticalInternalConversionCoefficients": {
      "totalValue": {
       "value": 0.214,
       "uncertainty": {
        "type": "unreported"
       }
      },
      "shellValues": [
       {
        "includesOuterShells": false,
        "shell": "K",
        "value": 0.179,
        "uncertainty": {
         "type": "symmetric",
         "value": 0.003
        }
       },
       {
        "includesOuterShells": false,
        "shell": "L",
        "value": 0.0272,
        "uncertainty": {
         "type": "symmetric",
         "value": 0.0004
        }
       },
       {
        "includesOuterShells": false,
        "shell": "M",
        "value": 0.00612,
        "uncertainty": {
         "type": "symmetric",
         "value": 0.00009
        }
       },
       {
        "includesOuterShells": false,
        "shell": "N",
        "value": 0.001444,
        "uncertainty": {
         "type": "symmetric",
         "value": 0.000021
        }
       },
       {
        "includesOuterShells": false,
        "shell": "O",
        "value": 0.000214,
        "uncertainty": {
         "type": "symmetric",
         "value": 0.000003
        }
       },
       {
        "includesOuterShells": false,
        "shell": "P",
        "value": 0.00001332,
        "uncertainty": {
         "type": "symmetric",
         "value": 1.9e-7
        }
       }
      ]
     },
     "comments": [
      {
       "type": "comment",
       "head": [
        {
         "name": "M"
        }
       ],
       "body": "\\ensuremath{\\alpha}(K)exp=0.16 (1971Ma45)."
      }
     ]
    },
    {
     "energy": {
      "unit": "keV",
      "value": 326.6,
      "uncertainty": {
       "type": "unreported"
      }
     },
     "initialLevelIndex": 97,
     "finalLevelIndex": 53
    },
    {
     "energy": {
      "unit": "keV",
      "value": 996.57,
      "uncertainty": {
       "type": "symmetric",
       "value": 0.04
      }
     },
     "gammaIntensity": {
      "value": 100,
      "uncertainty": {
       "type": "symmetric",
       "value": 15
      }
     },
     "initialLevelIndex": 97,
     "finalLevelIndex": 11
    }
   ],
   "band": 17,
   "comments": [
    {
     "type": "comment",
     "head": [
      {
       "name": "J"
      }
     ],
     "body": "130.089\\ensuremath{\\gamma} to 13/2\\ensuremath{^{+}}, 326.6\\ensuremath{\\gamma} to 11/2\\ensuremath{^{+}}; 275.91 M1(+E2) to 15/2\\ensuremath{^{+}}; band assignment."
    }
   ]
  },
  {
   "energy": {
    "unit": "keV",
    "value": 1634.74,
    "uncertainty": {
     "type": "symmetric",
     "value": 0.04
    }
   },
   "spinParity": {
    "values": [
     {
      "twoTimesSpin": 13,
      "isTentativeSpin": false,
      "parity": "+",
      "isTentativeParity": false
     }
    ]
   },
   "isStable": false,
   "flags": [
    "N"
   ],
   "crossReferences": [
    {
     "dataset": "176LU(N,G) E=THERMAL"
    }
   ],
   "gammas": [
    {
     "energy": {
      "unit": "keV",
      "value": 163.64,
      "uncertainty": {
       "type": "symmetric",
       "value": 0.03
      }
     },
     "gammaIntensity": {
      "value": 1.3,
      "uncertainty": {
       "type": "symmetric",
       "value": 0.4
      }
     },
     "initialLevelIndex": 98,
     "finalLevelIndex": 73
    },
    {
     "energy": {
      "unit": "keV",
      "value": 999.4,
      "uncertainty": {
       "type": "symmetric",
       "value": 0.5
      }
     },
     "gammaIntensity": {
      "value": 12.2,
      "uncertainty": {
       "type": "symmetric",
       "value": 2.4
      }
     },
     "initialLevelIndex": 98,
     "finalLevelIndex": 11,
     "multipolarity": {
      "stringRepresentation": "M1(+E2)",
      "isMixedTransition": true,
      "spins": [
       {
        "spin": 1
       },
       {
        "spin": 2
       }
      ],
      "parity": "+"
     },
     "theoreticalInternalConversionCoefficients": {
      "totalValue": {
       "value": 0.00773,
       "uncertainty": {
        "type": "unreported"
       }
      },
      "shellValues": [
       {
        "includesOuterShells": false,
        "shell": "K",
        "value": 0.00651,
        "uncertainty": {
         "type": "symmetric",
         "value": 0.0001
        }
       },
       {
        "includesOuterShells": false,
        "shell": "L",
        "value": 0.000948,
        "uncertainty": {
         "type": "symmetric",
         "value": 0.000014
        }
       },
       {
        "includesOuterShells": false,
        "shell": "M",
        "value": 0.000212,
        "uncertainty": {
         "type": "symmetric",
         "value": 0.000003
        }
       },
       {
        "includesOuterShells": false,
        "shell": "N",
        "value": 0.0000501,
        "uncertainty": {
         "type": "symmetric",
         "value": 7e-7
        }
       },
       {
        "includesOuterShells": false,
        "shell": "O",
        "value": 0.00000746,
        "uncertainty": {
         "type": "symmetric",
         "value": 1.1e-7
        }
       },
       {
        "includesOuterShells": false,
        "shell": "P",
        "value": 4.72e-7,
        "uncertainty": {
         "type": "symmetric",
         "value": 7e-9
        }
       }
      ]
     },
     "comments": [
      {
       "type": "comment",
       "head": [
        {
         "name": "E"
        }
       ],
       "body": "999.35 keV \\textit{3} in \\ensuremath{^{\\textnormal{176}}}Lu(n,\\ensuremath{\\gamma})"
      },
      {
       "type": "comment",
       "head": [
        {
         "name": "M"
        }
       ],
       "body": "\\ensuremath{\\alpha}(K)exp=0.0045 (1971Ma45)."
      }
     ]
    },
    {
     "energy": {
      "unit": "keV",
      "value": 1367,
      "uncertainty": {
       "type": "symmetric",
       "value": 0.5
      }
     },
     "gammaIntensity": {
      "value": 100,
      "uncertainty": {
       "type": "symmetric",
       "value": 15
      }
     },
     "initialLevelIndex": 98,
     "finalLevelIndex": 3,
     "multipolarity": {
      "stringRepresentation": "M1(+E2)",
      "isMixedTransition": true,
      "spins": [
       {
        "spin": 1
       },
       {
        "spin": 2
       }
      ],
      "parity": "+"
     },
     "theoreticalInternalConversionCoefficients": {
      "totalValue": {
       "value": 0.00364,
       "uncertainty": {
        "type": "symmetric",
        "value": 0.00006
       }
      },
      "pairCreationValue": {
       "value": 0.0000416,
       "uncertainty": {
        "type": "symmetric",
        "value": 6e-7
       }
      },
      "shellValues": [
       {
        "includesOuterShells": false,
        "shell": "K",
        "value": 0.00304,
        "uncertainty": {
         "type": "symmetric",
         "value": 0.00005
        }
       },
       {
        "includesOuterShells": false,
        "shell": "L",
        "value": 0.000438,
        "uncertainty": {
         "type": "symmetric",
         "value": 0.000007
        }
       },
       {
        "includesOuterShells": false,
        "shell": "M",
        "value": 0.0000977,
        "uncertainty": {
         "type": "symmetric",
         "value": 0.0000014
        }
       },
       {
        "includesOuterShells": false,
        "shell": "N",
        "value": 0.0000231,
        "uncertainty": {
         "type": "symmetric",
         "value": 4e-7
        }
       },
       {
        "includesOuterShells": false,
        "shell": "O",
        "value": 0.00000344,
        "uncertainty": {
         "type": "symmetric",
         "value": 5e-8
        }
       },
       {
        "includesOuterShells": false,
        "shell": "P",
        "value": 2.19e-7,
        "uncertainty": {
         "type": "symmetric",
         "value": 3e-9
        }
       }
      ]
     },
     "comments": [
      {
       "type": "comment",
       "head": [
        {
         "name": "E"
        }
       ],
       "body": "1367.004 keV \\textit{24} in \\ensuremath{^{\\textnormal{176}}}Lu(n,\\ensuremath{\\gamma})"
      },
      {
       "type": "comment",
       "head": [
        {
         "name": "M"
        }
       ],
       "body": "\\ensuremath{\\alpha}(K)exp=0.0038 (1971Ma45)."
      }
     ]
    },
    {
     "energy": {
      "unit": "keV",
      "value": 1513.8,
      "uncertainty": {
       "type": "symmetric",
       "value": 1.5
      }
     },
     "initialLevelIndex": 98,
     "finalLevelIndex": 1
    }
   ],
   "band": 14,
   "comments": [
    {
     "type": "comment",
     "head": [
      {
       "name": "J"
      }
     ],
     "body": "999.4\\ensuremath{\\gamma} M1(+E2) to 15/2\\ensuremath{^{+}}; 1367.0\\ensuremath{\\gamma} M1(+E2) to 11/2\\ensuremath{^{+}} level; band assignment."
    },
    {
     "type": "comment",
     "head": [
      {
       "name": "CONF"
      }
     ],
     "body": "\\ensuremath{K^{\\pi}}=11/2\\ensuremath{^{+}}. The assignment is tentative."
    }
   ]
  },
  {
   "energy": {
    "unit": "keV",
    "value": 1640.17,
    "uncertainty": {
     "type": "symmetric",
     "value": 0.06
    }
   },
   "spinParity": {
    "values": [
     {
      "twoTimesSpin": 3,
      "isTentativeSpin": true,
      "parity": "-",
      "isTentativeParity": true
     }
    ]
   },
   "isStable": false,
   "flags": [
    "I"
   ],
   "crossReferences": [
    {
     "dataset": "176LU(N,G) E=THERMAL"
    },
    {
     "dataset": "176YB(3HE,D),(A,T)",
     "level": 1647
    }
   ],
   "gammas": [
    {
     "energy": {
      "unit": "keV",
      "value": 844.96,
      "uncertainty": {
       "type": "symmetric",
       "value": 0.08
      }
     },
     "gammaIntensity": {
      "value": 100,
      "uncertainty": {
       "type": "unreported"
      }
     },
     "initialLevelIndex": 99,
     "finalLevelIndex": 18
    }
   ],
   "band": 6,
   "comments": [
    {
     "type": "comment",
     "head": [
      {
       "name": "J"
      }
     ],
     "body": "L=1 in \\ensuremath{^{\\textnormal{176}}}Yb(\\ensuremath{^{\\textnormal{3}}}He,d),(\\ensuremath{\\alpha},t); 688.41\\ensuremath{\\gamma} to 3/2\\ensuremath{^{-}}, 844.96\\ensuremath{\\gamma} to (1/2\\ensuremath{^{-}}); band assignment."
    }
   ]
  },
  {
   "energy": {
    "unit": "keV",
    "value": 1651,
    "uncertainty": {
     "type": "symmetric",
     "value": 6
    }
   },
   "isStable": false,
   "flags": [
    "Z"
   ],
   "crossReferences": [
    {
     "dataset": "176LU(N,G) E=THERMAL"
    },
    {
     "dataset": "178HF(T,A)"
    }
   ]
  },
  {
   "energy": {
    "unit": "keV",
    "value": 1661.392,
    "uncertainty": {
     "type": "symmetric",
     "value": 0.024
    }
   },
   "spinParity": {
    "values": [
     {
      "twoTimesSpin": 15,
      "isTentativeSpin": false,
      "parity": "+",
      "isTentativeParity": false
     }
    ]
   },
   "isStable": false,
   "flags": [
    "M"
   ],
   "crossReferences": [
    {
     "dataset": "176LU(N,G) E=THERMAL"
    }
   ],
   "gammas": [
    {
     "energy": {
      "unit": "keV",
      "value": 1025.39,
      "uncertainty": {
       "type": "symmetric",
       "value": 0.04
      }
     },
     "gammaIntensity": {
      "value": 52,
      "uncertainty": {
       "type": "symmetric",
       "value": 7
      }
     },
     "initialLevelIndex": 101,
     "finalLevelIndex": 11,
     "multipolarity": {
      "stringRepresentation": "M1(+E2)",
      "isMixedTransition": true,
      "spins": [
       {
        "spin": 1
       },
       {
        "spin": 2
       }
      ],
      "parity": "+"
     },
     "theoreticalInternalConversionCoefficients": {
      "totalValue": {
       "value": 0.00726,
       "uncertainty": {
        "type": "unreported"
       }
      },
      "shellValues": [
       {
        "includesOuterShells": false,
        "shell": "K",
        "value": 0.00611,
        "uncertainty": {
         "type": "symmetric",
         "value": 0.00009
        }
       },
       {
        "includesOuterShells": false,
        "shell": "L",
        "value": 0.00089,
        "uncertainty": {
         "type": "symmetric",
         "value": 0.000013
        }
       },
       {
        "includesOuterShells": false,
        "shell": "M",
        "value": 0.000199,
        "uncertainty": {
         "type": "symmetric",
         "value": 0.000003
        }
       },
       {
        "includesOuterShells": false,
        "shell": "N",
        "value": 0.000047,
        "uncertainty": {
         "type": "symmetric",
         "value": 7e-7
        }
       },
       {
        "includesOuterShells": false,
        "shell": "O",
        "value": 0.000007,
        "uncertainty": {
         "type": "symmetric",
         "value": 1e-7
        }
       },
       {
        "includesOuterShells": false,
        "shell": "P",
        "value": 4.43e-7,
        "uncertainty": {
         "type": "symmetric",
         "value": 7e-9
        }
       }
      ]
     },
     "comments": [
      {
       "type": "comment",
       "head": [
        {
         "name": "M"
        }
       ],
       "body": "\\ensuremath{\\alpha}(K)exp=0.005 (1971Ma45)"
      }
     ]
    },
    {
     "energy": {
      "unit": "keV",
      "value": 1220.63,
      "uncertainty": {
       "type": "symmetric",
       "value": 0.03
      }
     },
     "gammaIntensity": {
      "value": 100,
      "uncertainty": {
       "type": "symmetric",
       "value": 13
      }
     },
     "initialLevelIndex": 101,
     "finalLevelIndex": 5,
     "multipolarity": {
      "stringRepresentation": "M1(+E2)",
      "isMixedTransition": true,
      "spins": [
       {
        "spin": 1
       },
       {
        "spin": 2
       }
      ],
      "parity": "+"
     },
     "theoreticalInternalConversionCoefficients": {
      "totalValue": {
       "value": 0.00475,
       "uncertainty": {
        "type": "unreported"
       }
      },
      "pairCreationValue": {
       "value": 0.00000913,
       "uncertainty": {
        "type": "symmetric",
        "value": 1.3e-7
       }
      },
      "shellValues": [
       {
        "includesOuterShells": false,
        "shell": "K",
        "value": 0.004,
        "uncertainty": {
         "type": "symmetric",
         "value": 0.00006
        }
       },
       {
        "includesOuterShells": false,
        "shell": "L",
        "value": 0.000578,
        "uncertainty": {
         "type": "symmetric",
         "value": 0.000008
        }
       },
       {
        "includesOuterShells": false,
        "shell": "M",
        "value": 0.0001291,
        "uncertainty": {
         "type": "symmetric",
         "value": 0.0000018
        }
       },
       {
        "includesOuterShells": false,
        "shell": "N",
        "value": 0.0000305,
        "uncertainty": {
         "type": "symmetric",
         "value": 5e-7
        }
       },
       {
        "includesOuterShells": false,
        "shell": "O",
        "value": 0.00000455,
        "uncertainty": {
         "type": "symmetric",
         "value": 7e-8
        }
       },
       {
        "includesOuterShells": false,
        "shell": "P",
        "value": 2.88e-7,
        "uncertainty": {
         "type": "symmetric",
         "value": 4e-9
        }
       }
      ]
     },
     "comments": [
      {
       "type": "comment",
       "head": [
        {
         "name": "M"
        }
       ],
       "body": "\\ensuremath{\\alpha}(K)exp=0.0050 (1971Ma45)."
      }
     ]
    }
   ],
   "band": 13,
   "comments": [
    {
     "type": "comment",
     "head": [
      {
       "name": "J"
      }
     ],
     "body": "1025.39\\ensuremath{\\gamma} M1(+E2) to 15/2\\ensuremath{^{+}}; 1220.63\\ensuremath{\\gamma} (M1(+E2))to 13/2\\ensuremath{^{+}}; band assignment."
    }
   ]
  },
  {
   "energy": {
    "unit": "keV",
    "value": 1668,
    "uncertainty": {
     "type": "approximation"
    }
   },
   "isStable": false,
   "flags": [
    "R"
   ],
   "crossReferences": [
    {
     "dataset": "176YB(3HE,D),(A,T)"
    }
   ]
  },
  {
   "energy": {
    "unit": "keV",
    "value": 1671.3,
    "uncertainty": {
     "type": "symmetric",
     "value": 0.7
    }
   },
   "spinParity": {
    "values": [
     {
      "twoTimesSpin": 19,
      "isTentativeSpin": true,
      "parity": "-",
      "isTentativeParity": true
     }
    ]
   },
   "isStable": false,
   "flags": [
    "O"
   ],
   "crossReferences": [
    {
     "dataset": "(HI,XNG)"
    }
   ],
   "gammas": [
    {
     "energy": {
      "unit": "keV",
      "value": 233.4,
      "uncertainty": {
       "type": "symmetric",
       "value": 0.5
      }
     },
     "gammaIntensity": {
      "value": 100,
      "uncertainty": {
       "type": "unreported"
      }
     },
     "initialLevelIndex": 103,
     "finalLevelIndex": 69,
     "multipolarity": {
      "stringRepresentation": "[M1+E2]",
      "isMixedTransition": true,
      "spins": [
       {
        "spin": 1,
        "evaluatorInferred": true
       },
       {
        "spin": 2,
        "evaluatorInferred": true
       }
      ],
      "parity": "+"
     },
     "theoreticalInternalConversionCoefficients": {
      "totalValue": {
       "value": 0.338,
       "uncertainty": {
        "type": "symmetric",
        "value": 0.006
       }
      },
      "shellValues": [
       {
        "includesOuterShells": false,
        "shell": "K",
        "value": 0.283,
        "uncertainty": {
         "type": "symmetric",
         "value": 0.005
        }
       },
       {
        "includesOuterShells": false,
        "shell": "L",
        "value": 0.0431,
        "uncertainty": {
         "type": "symmetric",
         "value": 0.0007
        }
       },
       {
        "includesOuterShells": false,
        "shell": "M",
        "value": 0.00969,
        "uncertainty": {
         "type": "symmetric",
         "value": 0.00015
        }
       },
       {
        "includesOuterShells": false,
        "shell": "N",
        "value": 0.00229,
        "uncertainty": {
         "type": "symmetric",
         "value": 0.00004
        }
       },
       {
        "includesOuterShells": false,
        "shell": "O",
        "value": 0.000339,
        "uncertainty": {
         "type": "symmetric",
         "value": 0.000006
        }
       },
       {
        "includesOuterShells": false,
        "shell": "P",
        "value": 0.0000211,
        "uncertainty": {
         "type": "symmetric",
         "value": 4e-7
        }
       }
      ]
     },
     "flags": [
      "S"
     ]
    }
   ],
   "band": 15,
   "comments": [
    {
     "type": "comment",
     "head": [
      {
       "name": "J"
      }
     ],
     "body": "233.4\\ensuremath{\\gamma} to (17/2\\ensuremath{^{-}}); band assignment."
    }
   ]
  },
  {
   "energy": {
    "unit": "keV",
    "value": 1677.191,
    "uncertainty": {
     "type": "symmetric",
     "value": 0.008
    }
   },
   "spinParity": {
    "values": [
     {
      "twoTimesSpin": 15,
      "isTentativeSpin": true,
      "parity": "+",
      "isTentativeParity": true
     }
    ]
   },
   "isStable": false,
   "flags": [
    "K"
   ],
   "crossReferences": [
    {
     "dataset": "176LU(N,G) E=THERMAL"
    },
    {
     "dataset": "176LU(D,P)",
     "level": 1679
    }
   ],
   "gammas": [
    {
     "energy": {
      "unit": "keV",
      "value": 174.509,
      "uncertainty": {
       "type": "symmetric",
       "value": 0.002
      }
     },
     "gammaIntensity": {
      "value": 18.7,
      "uncertainty": {
       "type": "symmetric",
       "value": 1.9
      }
     },
     "initialLevelIndex": 104,
     "finalLevelIndex": 76
    },
    {
     "energy": {
      "unit": "keV",
      "value": 823.1,
      "uncertainty": {
       "type": "symmetric",
       "value": 0.5
      }
     },
     "gammaIntensity": {
      "value": 41,
      "uncertainty": {
       "type": "symmetric",
       "value": 6
      }
     },
     "initialLevelIndex": 104,
     "finalLevelIndex": 24,
     "multipolarity": {
      "stringRepresentation": "M1(+E2)",
      "isMixedTransition": true,
      "spins": [
       {
        "spin": 1
       },
       {
        "spin": 2
       }
      ],
      "parity": "+"
     },
     "theoreticalInternalConversionCoefficients": {
      "totalValue": {
       "value": 0.01251,
       "uncertainty": {
        "type": "unreported"
       }
      },
      "shellValues": [
       {
        "includesOuterShells": false,
        "shell": "K",
        "value": 0.01053,
        "uncertainty": {
         "type": "symmetric",
         "value": 0.00015
        }
       },
       {
        "includesOuterShells": false,
        "shell": "L",
        "value": 0.001543,
        "uncertainty": {
         "type": "symmetric",
         "value": 0.000022
        }
       },
       {
        "includesOuterShells": false,
        "shell": "M",
        "value": 0.000345,
        "uncertainty": {
         "type": "symmetric",
         "value": 0.000005
        }
       },
       {
        "includesOuterShells": false,
        "shell": "N",
        "value": 0.0000815,
        "uncertainty": {
         "type": "symmetric",
         "value": 0.0000012
        }
       },
       {
        "includesOuterShells": false,
        "shell": "O",
        "value": 0.00001214,
        "uncertainty": {
         "type": "symmetric",
         "value": 1.7e-7
        }
       },
       {
        "includesOuterShells": false,
        "shell": "P",
        "value": 7.65e-7,
        "uncertainty": {
         "type": "symmetric",
         "value": 1.1e-8
        }
       }
      ]
     },
     "comments": [
      {
       "type": "comment",
       "head": [
        {
         "name": "E"
        }
       ],
       "body": "823.045 keV \\textit{11} in \\ensuremath{^{\\textnormal{176}}}Lu(n,\\ensuremath{\\gamma})"
      },
      {
       "type": "comment",
       "head": [
        {
         "name": "M"
        }
       ],
       "body": "\\ensuremath{\\alpha}(K)exp=0.010 (1971Ma45)."
      }
     ]
    },
    {
     "energy": {
      "unit": "keV",
      "value": 1039.39,
      "uncertainty": {
       "type": "symmetric",
       "value": 0.24
      }
     },
     "gammaIntensity": {
      "value": 13,
      "uncertainty": {
       "type": "symmetric",
       "value": 4
      }
     },
     "initialLevelIndex": 104,
     "finalLevelIndex": 11,
     "multipolarity": {
      "stringRepresentation": "M1(+E2)",
      "isMixedTransition": true,
      "spins": [
       {
        "spin": 1
       },
       {
        "spin": 2
       }
      ],
      "parity": "+"
     },
     "theoreticalInternalConversionCoefficients": {
      "totalValue": {
       "value": 0.00702,
       "uncertainty": {
        "type": "unreported"
       }
      },
      "shellValues": [
       {
        "includesOuterShells": false,
        "shell": "K",
        "value": 0.00591,
        "uncertainty": {
         "type": "symmetric",
         "value": 0.00009
        }
       },
       {
        "includesOuterShells": false,
        "shell": "L",
        "value": 0.00086,
        "uncertainty": {
         "type": "symmetric",
         "value": 0.000012
        }
       },
       {
        "includesOuterShells": false,
        "shell": "M",
        "value": 0.000192,
        "uncertainty": {
         "type": "symmetric",
         "value": 0.000003
        }
       },
       {
        "includesOuterShells": false,
        "shell": "N",
        "value": 0.0000454,
        "uncertainty": {
         "type": "symmetric",
         "value": 7e-7
        }
       },
       {
        "includesOuterShells": false,
        "shell": "O",
        "value": 0.00000676,
        "uncertainty": {
         "type": "symmetric",
         "value": 1e-7
        }
       },
       {
        "includesOuterShells": false,
        "shell": "P",
        "value": 4.28e-7,
        "uncertainty": {
         "type": "symmetric",
         "value": 6e-9
        }
       }
      ]
     },
     "comments": [
      {
       "type": "comment",
       "head": [
        {
         "name": "M"
        }
       ],
       "body": "\\ensuremath{\\alpha}(K)exp=0.0060 (1971Ma45)."
      }
     ]
    },
    {
     "energy": {
      "unit": "keV",
      "value": 1237.15,
      "uncertainty": {
       "type": "symmetric",
       "value": 0.11
      }
     },
     "gammaIntensity": {
      "value": 100,
      "uncertainty": {
       "type": "symmetric",
       "value": 16
      }
     },
     "initialLevelIndex": 104,
     "finalLevelIndex": 5,
     "multipolarity": {
      "stringRepresentation": "M1(+E2)",
      "isMixedTransition": true,
      "spins": [
       {
        "spin": 1
       },
       {
        "spin": 2
       }
      ],
      "parity": "+"
     },
     "theoreticalInternalConversionCoefficients": {
      "totalValue": {
       "value": 0.0046,
       "uncertainty": {
        "type": "unreported"
       }
      },
      "pairCreationValue": {
       "value": 0.00001171,
       "uncertainty": {
        "type": "symmetric",
        "value": 1.7e-7
       }
      },
      "shellValues": [
       {
        "includesOuterShells": false,
        "shell": "K",
        "value": 0.00387,
        "uncertainty": {
         "type": "symmetric",
         "value": 0.00006
        }
       },
       {
        "includesOuterShells": false,
        "shell": "L",
        "value": 0.000559,
        "uncertainty": {
         "type": "symmetric",
         "value": 0.000008
        }
       },
       {
        "includesOuterShells": false,
        "shell": "M",
        "value": 0.0001249,
        "uncertainty": {
         "type": "symmetric",
         "value": 0.0000018
        }
       },
       {
        "includesOuterShells": false,
        "shell": "N",
        "value": 0.0000295,
        "uncertainty": {
         "type": "symmetric",
         "value": 5e-7
        }
       },
       {
        "includesOuterShells": false,
        "shell": "O",
        "value": 0.0000044,
        "uncertainty": {
         "type": "symmetric",
         "value": 7e-8
        }
       },
       {
        "includesOuterShells": false,
        "shell": "P",
        "value": 2.79e-7,
        "uncertainty": {
         "type": "symmetric",
         "value": 4e-9
        }
       }
      ]
     },
     "comments": [
      {
       "type": "comment",
       "head": [
        {
         "name": "M"
        }
       ],
       "body": "\\ensuremath{\\alpha}(K)exp=0.0050 (1971Ma45)."
      }
     ]
    },
    {
     "energy": {
      "unit": "keV",
      "value": 1409.2,
      "uncertainty": {
       "type": "symmetric",
       "value": 0.5
      }
     },
     "gammaIntensity": {
      "value": 27,
      "uncertainty": {
       "type": "symmetric",
       "value": 5
      }
     },
     "initialLevelIndex": 104,
     "finalLevelIndex": 3,
     "multipolarity": {
      "stringRepresentation": "(E2)",
      "spins": [
       {
        "spin": 2
       }
      ],
      "parity": "+"
     },
     "theoreticalInternalConversionCoefficients": {
      "totalValue": {
       "value": 0.00203,
       "uncertainty": {
        "type": "unreported"
       }
      },
      "pairCreationValue": {
       "value": 0.0000431,
       "uncertainty": {
        "type": "symmetric",
        "value": 7e-7
       }
      },
      "shellValues": [
       {
        "includesOuterShells": false,
        "shell": "K",
        "value": 0.001667,
        "uncertainty": {
         "type": "symmetric",
         "value": 0.000024
        }
       },
       {
        "includesOuterShells": false,
        "shell": "L",
        "value": 0.000248,
        "uncertainty": {
         "type": "symmetric",
         "value": 0.000004
        }
       },
       {
        "includesOuterShells": false,
        "shell": "M",
        "value": 0.0000556,
        "uncertainty": {
         "type": "symmetric",
         "value": 8e-7
        }
       },
       {
        "includesOuterShells": false,
        "shell": "N",
        "value": 0.00001309,
        "uncertainty": {
         "type": "symmetric",
         "value": 1.9e-7
        }
       },
       {
        "includesOuterShells": false,
        "shell": "O",
        "value": 0.00000192,
        "uncertainty": {
         "type": "symmetric",
         "value": 3e-8
        }
       },
       {
        "includesOuterShells": false,
        "shell": "P",
        "value": 1.15e-7,
        "uncertainty": {
         "type": "symmetric",
         "value": 1.7e-9
        }
       }
      ]
     },
     "comments": [
      {
       "type": "comment",
       "head": [
        {
         "name": "E"
        }
       ],
       "body": "1409.19 keV \\textit{7} in \\ensuremath{^{\\textnormal{176}}}Lu(n,\\ensuremath{\\gamma})"
      },
      {
       "type": "comment",
       "head": [
        {
         "name": "M"
        }
       ],
       "body": "\\ensuremath{\\alpha}(K)exp=0.0036 (1971Ma45)."
      }
     ]
    }
   ],
   "band": 11,
   "comments": [
    {
     "type": "comment",
     "head": [
      {
       "name": "J"
      }
     ],
     "body": "823.045\\ensuremath{\\gamma} M1(+E2) to 17/2\\ensuremath{^{+}}, 1409.19\\ensuremath{\\gamma} (E2) to 11/2\\ensuremath{^{+}} level; band assignment."
    }
   ]
  },
  {
   "existence": "uncertain",
   "energy": {
    "unit": "keV",
    "value": 1678.8,
    "uncertainty": {
     "type": "symmetric",
     "value": 0.3
    }
   },
   "isStable": false,
   "crossReferences": [
    {
     "dataset": "(HI,XNG)"
    }
   ],
   "gammas": [
    {
     "energy": {
      "unit": "keV",
      "value": 436,
      "uncertainty": {
       "type": "symmetric",
       "value": 0.5
      }
     },
     "gammaIntensity": {
      "value": 100,
      "uncertainty": {
       "type": "unreported"
      }
     },
     "initialLevelIndex": 105,
     "finalLevelIndex": 50,
     "flags": [
      "S"
     ]
    }
   ]
  },
  {
   "energy": {
    "unit": "keV",
    "value": 1692.996,
    "uncertainty": {
     "type": "symmetric",
     "value": 0.024
    }
   },
   "spinParity": {
    "values": [
     {
      "twoTimesSpin": 15,
      "isTentativeSpin": true,
      "parity": "+",
      "isTentativeParity": true
     }
    ]
   },
   "isStable": false,
   "flags": [
    "s"
   ],
   "crossReferences": [
    {
     "dataset": "176LU(N,G) E=THERMAL"
    }
   ],
   "gammas": [
    {
     "energy": {
      "unit": "keV",
      "value": 837.8,
      "uncertainty": {
       "type": "symmetric",
       "value": 1.5
      }
     },
     "gammaIntensity": {
      "value": 42,
      "uncertainty": {
       "type": "symmetric",
       "value": 30
      }
     },
     "initialLevelIndex": 106,
     "finalLevelIndex": 24
    },
    {
     "energy": {
      "unit": "keV",
      "value": 1056.79,
      "uncertainty": {
       "type": "symmetric",
       "value": 0.024
      }
     },
     "gammaIntensity": {
      "value": 100,
      "uncertainty": {
       "type": "symmetric",
       "value": 16
      }
     },
     "initialLevelIndex": 106,
     "finalLevelIndex": 11,
     "multipolarity": {
      "stringRepresentation": "M1(+E2)",
      "isMixedTransition": true,
      "spins": [
       {
        "spin": 1
       },
       {
        "spin": 2
       }
      ],
      "parity": "+"
     },
     "theoreticalInternalConversionCoefficients": {
      "totalValue": {
       "value": 0.00674,
       "uncertainty": {
        "type": "unreported"
       }
      },
      "shellValues": [
       {
        "includesOuterShells": false,
        "shell": "K",
        "value": 0.00568,
        "uncertainty": {
         "type": "symmetric",
         "value": 0.00008
        }
       },
       {
        "includesOuterShells": false,
        "shell": "L",
        "value": 0.000825,
        "uncertainty": {
         "type": "symmetric",
         "value": 0.000012
        }
       },
       {
        "includesOuterShells": false,
        "shell": "M",
        "value": 0.000184,
        "uncertainty": {
         "type": "symmetric",
         "value": 0.000003
        }
       },
       {
        "includesOuterShells": false,
        "shell": "N",
        "value": 0.0000436,
        "uncertainty": {
         "type": "symmetric",
         "value": 6e-7
        }
       },
       {
        "includesOuterShells": false,
        "shell": "O",
        "value": 0.00000649,
        "uncertainty": {
         "type": "symmetric",
         "value": 9e-8
        }
       },
       {
        "includesOuterShells": false,
        "shell": "P",
        "value": 4.11e-7,
        "uncertainty": {
         "type": "symmetric",
         "value": 6e-9
        }
       }
      ]
     },
     "comments": [
      {
       "type": "comment",
       "head": [
        {
         "name": "M"
        }
       ],
       "body": "\\ensuremath{\\alpha}(K)exp=0.0036 \\textit{3} (1971Ma45)."
      }
     ]
    },
    {
     "energy": {
      "unit": "keV",
      "value": 1252,
      "uncertainty": {
       "type": "symmetric",
       "value": 1
      }
     },
     "gammaIntensity": {
      "value": 49,
      "uncertainty": {
       "type": "symmetric",
       "value": 7
      }
     },
     "initialLevelIndex": 106,
     "finalLevelIndex": 5
    },
    {
     "energy": {
      "unit": "keV",
      "value": 1423.5,
      "uncertainty": {
       "type": "symmetric",
       "value": 1
      }
     },
     "gammaIntensity": {
      "value": 42,
      "uncertainty": {
       "type": "symmetric",
       "value": 29
      }
     },
     "initialLevelIndex": 106,
     "finalLevelIndex": 3
    }
   ],
   "band": 20,
   "comments": [
    {
     "type": "comment",
     "head": [
      {
       "name": "J"
      }
     ],
     "body": "1423.5\\ensuremath{\\gamma} to 11/2\\ensuremath{^{+}}, 1056.3\\ensuremath{\\gamma} M1(+E2) to 15/2\\ensuremath{^{+}}; band assignment."
    }
   ]
  },
  {
   "energy": {
    "unit": "keV",
    "value": 1706.2,
    "uncertainty": {
     "type": "unreported"
    }
   },
   "isStable": false,
   "flags": [
    "Z"
   ],
   "crossReferences": [
    {
     "dataset": "176LU(N,G) E=THERMAL"
    },
    {
     "assignment": "ambiguous",
     "dataset": "176LU(D,P)",
     "level": 1711
    }
   ]
  },
  {
   "energy": {
    "unit": "keV",
    "value": 1711.9,
    "uncertainty": {
     "type": "symmetric",
     "value": 1
    }
   },
   "spinParity": {
    "values": [
     {
      "twoTimesSpin": 7,
      "isTentativeSpin": true,
      "parity": "+",
      "isTentativeParity": true
     }
    ]
   },
   "isStable": false,
   "flags": [
    "v"
   ],
   "crossReferences": [
    {
     "dataset": "176LU(N,G) E=THERMAL"
    },
    {
     "assignment": "ambiguous",
     "dataset": "176LU(D,P)",
     "level": 1711
    }
   ],
   "gammas": [
    {
     "energy": {
      "unit": "keV",
      "value": 1138.3,
      "uncertainty": {
       "type": "symmetric",
       "value": 1
      }
     },
     "gammaIntensity": {
      "value": 100,
      "uncertainty": {
       "type": "unreported"
      }
     },
     "initialLevelIndex": 108,
     "finalLevelIndex": 10
    }
   ],
   "band": 23,
   "comments": [
    {
     "type": "comment",
     "head": [
      {
       "name": "J"
      }
     ],
     "body": "1138.5\\ensuremath{\\gamma} to 3/2\\ensuremath{^{+}}; band assignment."
    },
    {
     "type": "comment",
     "head": [
      {
       "name": "CONF"
      }
     ],
     "body": "\\ensuremath{K^{\\pi}}=7/2\\ensuremath{^{+}}:\\ensuremath{\\pi}1/2[411]\\ensuremath{\\otimes}\\ensuremath{\\nu}\\ensuremath{^{\\textnormal{2}}}(7/2[514],1/2[510]). The assignment is tentative."
    }
   ]
  },
  {
   "energy": {
    "unit": "keV",
    "value": 1728.899,
    "uncertainty": {
     "type": "symmetric",
     "value": 0.005
    }
   },
   "spinParity": {
    "values": [
     {
      "twoTimesSpin": 13,
      "isTentativeSpin": false,
      "parity": "+",
      "isTentativeParity": false
     }
    ]
   },
   "isStable": false,
   "flags": [
    "w"
   ],
   "crossReferences": [
    {
     "dataset": "176LU(N,G) E=THERMAL"
    }
   ],
   "gammas": [
    {
     "energy": {
      "unit": "keV",
      "value": 552.102,
      "uncertainty": {
       "type": "symmetric",
       "value": 0.004
      }
     },
     "gammaIntensity": {
      "value": 100,
      "uncertainty": {
       "type": "symmetric",
       "value": 10
      }
     },
     "initialLevelIndex": 109,
     "finalLevelIndex": 43,
     "multipolarity": {
      "stringRepresentation": "M1(+E2)",
      "isMixedTransition": true,
      "spins": [
       {
        "spin": 1
       },
       {
        "spin": 2
       }
      ],
      "parity": "+"
     },
     "theoreticalInternalConversionCoefficients": {
      "totalValue": {
       "value": 0.0344,
       "uncertainty": {
        "type": "unreported"
       }
      },
      "shellValues": [
       {
        "includesOuterShells": false,
        "shell": "K",
        "value": 0.0289,
        "uncertainty": {
         "type": "symmetric",
         "value": 0.0004
        }
       },
       {
        "includesOuterShells": false,
        "shell": "L",
        "value": 0.00429,
        "uncertainty": {
         "type": "symmetric",
         "value": 0.00006
        }
       },
       {
        "includesOuterShells": false,
        "shell": "M",
        "value": 0.000961,
        "uncertainty": {
         "type": "symmetric",
         "value": 0.000014
        }
       },
       {
        "includesOuterShells": false,
        "shell": "N",
        "value": 0.000227,
        "uncertainty": {
         "type": "symmetric",
         "value": 0.000004
        }
       },
       {
        "includesOuterShells": false,
        "shell": "O",
        "value": 0.0000337,
        "uncertainty": {
         "type": "symmetric",
         "value": 5e-7
        }
       },
       {
        "includesOuterShells": false,
        "shell": "P",
        "value": 0.00000212,
        "uncertainty": {
         "type": "symmetric",
         "value": 3e-8
        }
       }
      ]
     },
     "comments": [
      {
       "type": "comment",
       "head": [
        {
         "name": "M"
        }
       ],
       "body": "\\ensuremath{\\alpha}(K)exp=0.015 \\textit{4} and \\ensuremath{\\alpha}(L1)exp=0.0022 \\textit{9} (1996Pe05) and \\ensuremath{\\alpha}(K)exp=0.028 (1971Ma45)."
      }
     ]
    },
    {
     "energy": {
      "unit": "keV",
      "value": 743.4,
      "uncertainty": {
       "type": "symmetric",
       "value": 0.5
      }
     },
     "gammaIntensity": {
      "value": 3.3,
      "uncertainty": {
       "type": "symmetric",
       "value": 0.7
      }
     },
     "initialLevelIndex": 109,
     "finalLevelIndex": 31,
     "multipolarity": {
      "stringRepresentation": "M1(+E2)",
      "isMixedTransition": true,
      "spins": [
       {
        "spin": 1
       },
       {
        "spin": 2
       }
      ],
      "parity": "+"
     },
     "theoreticalInternalConversionCoefficients": {
      "totalValue": {
       "value": 0.01614,
       "uncertainty": {
        "type": "unreported"
       }
      },
      "shellValues": [
       {
        "includesOuterShells": false,
        "shell": "K",
        "value": 0.01358,
        "uncertainty": {
         "type": "symmetric",
         "value": 0.0002
        }
       },
       {
        "includesOuterShells": false,
        "shell": "L",
        "value": 0.002,
        "uncertainty": {
         "type": "symmetric",
         "value": 0.00003
        }
       },
       {
        "includesOuterShells": false,
        "shell": "M",
        "value": 0.000447,
        "uncertainty": {
         "type": "symmetric",
         "value": 0.000007
        }
       },
       {
        "includesOuterShells": false,
        "shell": "N",
        "value": 0.0001055,
        "uncertainty": {
         "type": "symmetric",
         "value": 0.0000015
        }
       },
       {
        "includesOuterShells": false,
        "shell": "O",
        "value": 0.00001571,
        "uncertainty": {
         "type": "symmetric",
         "value": 2.3e-7
        }
       },
       {
        "includesOuterShells": false,
        "shell": "P",
        "value": 9.89e-7,
        "uncertainty": {
         "type": "symmetric",
         "value": 1.4e-8
        }
       }
      ]
     },
     "comments": [
      {
       "type": "comment",
       "head": [
        {
         "name": "M"
        }
       ],
       "body": "\\ensuremath{\\alpha}(K)exp=0.008 (1971Ma45)."
      }
     ]
    },
    {
     "energy": {
      "unit": "keV",
      "value": 911,
      "uncertainty": {
       "type": "symmetric",
       "value": 1
      }
     },
     "initialLevelIndex": 109,
     "finalLevelIndex": 20
    },
    {
     "energy": {
      "unit": "keV",
      "value": 1056.79,
      "uncertainty": {
       "type": "symmetric",
       "value": 0.024
      }
     },
     "gammaIntensity": {
      "value": 8.9,
      "uncertainty": {
       "type": "symmetric",
       "value": 1.5
      }
     },
     "initialLevelIndex": 109,
     "finalLevelIndex": 13,
     "multipolarity": {
      "stringRepresentation": "(E2)",
      "spins": [
       {
        "spin": 2
       }
      ],
      "parity": "+"
     },
     "theoreticalInternalConversionCoefficients": {
      "totalValue": {
       "value": 0.00348,
       "uncertainty": {
        "type": "unreported"
       }
      },
      "shellValues": [
       {
        "includesOuterShells": false,
        "shell": "K",
        "value": 0.00289,
        "uncertainty": {
         "type": "symmetric",
         "value": 0.00004
        }
       },
       {
        "includesOuterShells": false,
        "shell": "L",
        "value": 0.000457,
        "uncertainty": {
         "type": "symmetric",
         "value": 0.000007
        }
       },
       {
        "includesOuterShells": false,
        "shell": "M",
        "value": 0.0001031,
        "uncertainty": {
         "type": "symmetric",
         "value": 0.0000015
        }
       },
       {
        "includesOuterShells": false,
        "shell": "N",
        "value": 0.0000242,
        "uncertainty": {
         "type": "symmetric",
         "value": 4e-7
        }
       },
       {
        "includesOuterShells": false,
        "shell": "O",
        "value": 0.00000353,
        "uncertainty": {
         "type": "symmetric",
         "value": 5e-8
        }
       },
       {
        "includesOuterShells": false,
        "shell": "P",
        "value": 2e-7,
        "uncertainty": {
         "type": "symmetric",
         "value": 3e-9
        }
       }
      ]
     },
     "comments": [
      {
       "type": "comment",
       "head": [
        {
         "name": "M"
        }
       ],
       "body": "\\ensuremath{\\alpha}(K)exp=0.0036 (1971Ma45)."
      }
     ]
    }
   ],
   "band": 24,
   "comments": [
    {
     "type": "comment",
     "head": [
      {
       "name": "J"
      }
     ],
     "body": "552.102\\ensuremath{\\gamma} M1(+E2) to 15/2\\ensuremath{^{+}}; 1056.79\\ensuremath{\\gamma} (E2) to 9/2\\ensuremath{^{+}}; band assignment."
    }
   ]
  },
  {
   "energy": {
    "unit": "keV",
    "value": 1733,
    "uncertainty": {
     "type": "unreported"
    }
   },
   "spinParity": {
    "values": [
     {
      "twoTimesSpin": 7,
      "isTentativeSpin": true,
      "parity": "-",
      "isTentativeParity": false
     }
    ]
   },
   "isStable": false,
   "flags": [
    "R"
   ],
   "crossReferences": [
    {
     "dataset": "176YB(3HE,D),(A,T)"
    }
   ],
   "comments": [
    {
     "type": "comment",
     "head": [
      {
       "name": "J"
      }
     ],
     "body": "L=3 in \\ensuremath{^{\\textnormal{176}}}Yb(\\ensuremath{^{\\textnormal{3}}}He,d), (\\ensuremath{\\alpha},t)."
    }
   ]
  },
  {
   "existence": "uncertain",
   "energy": {
    "unit": "keV",
    "value": 1739.2,
    "uncertainty": {
     "type": "unreported"
    }
   },
   "isStable": false,
   "crossReferences": [
    {
     "dataset": "176LU(N,G) E=THERMAL"
    }
   ]
  },
  {
   "energy": {
    "unit": "keV",
    "value": 1745.517,
    "uncertainty": {
     "type": "symmetric",
     "value": 0.012
    }
   },
   "spinParity": {
    "values": [
     {
      "twoTimesSpin": 17,
      "isTentativeSpin": true,
      "parity": "+",
      "isTentativeParity": true
     }
    ]
   },
   "isStable": false,
   "flags": [
    "D"
   ],
   "crossReferences": [
    {
     "dataset": "176LU(N,G) E=THERMAL"
    },
    {
     "assignment": "ambiguous",
     "dataset": "176LU(D,P)",
     "level": 1749
    }
   ],
   "gammas": [
    {
     "energy": {
      "unit": "keV",
      "value": 355.829,
      "uncertainty": {
       "type": "symmetric",
       "value": 0.02
      }
     },
     "gammaIntensity": {
      "value": 43,
      "uncertainty": {
       "type": "symmetric",
       "value": 14
      }
     },
     "initialLevelIndex": 112,
     "finalLevelIndex": 66
    },
    {
     "energy": {
      "unit": "keV",
      "value": 400.75,
      "uncertainty": {
       "type": "symmetric",
       "value": 0.04
      }
     },
     "gammaIntensity": {
      "value": 14,
      "uncertainty": {
       "type": "symmetric",
       "value": 14
      }
     },
     "initialLevelIndex": 112,
     "finalLevelIndex": 61
    },
    {
     "energy": {
      "unit": "keV",
      "value": 442.47,
      "uncertainty": {
       "type": "symmetric",
       "value": 0.016
      }
     },
     "gammaIntensity": {
      "value": 100,
      "uncertainty": {
       "type": "symmetric",
       "value": 14
      }
     },
     "initialLevelIndex": 112,
     "finalLevelIndex": 52
    }
   ],
   "band": 3,
   "comments": [
    {
     "type": "comment",
     "head": [
      {
       "name": "J"
      }
     ],
     "body": "355.929\\ensuremath{\\gamma} to 17/2\\ensuremath{^{+}}, 442.47\\ensuremath{\\gamma} to 13/2\\ensuremath{^{+}}; band assignment"
    }
   ]
  },
  {
   "energy": {
    "unit": "keV",
    "value": 1746.548,
    "uncertainty": {
     "type": "symmetric",
     "value": 0.008
    }
   },
   "spinParity": {
    "values": [
     {
      "twoTimesSpin": 19,
      "isTentativeSpin": true,
      "parity": "+",
      "isTentativeParity": true
     }
    ]
   },
   "isStable": false,
   "flags": [
    "L"
   ],
   "crossReferences": [
    {
     "dataset": "176LU(N,G) E=THERMAL"
    },
    {
     "assignment": "ambiguous",
     "dataset": "176LU(D,P)",
     "level": 1749
    },
    {
     "dataset": "(HI,XNG)"
    }
   ],
   "gammas": [
    {
     "energy": {
      "unit": "keV",
      "value": 202.239,
      "uncertainty": {
       "type": "symmetric",
       "value": 0.002
      }
     },
     "gammaIntensity": {
      "value": 68,
      "uncertainty": {
       "type": "symmetric",
       "value": 8
      }
     },
     "initialLevelIndex": 113,
     "finalLevelIndex": 82
    },
    {
     "energy": {
      "unit": "keV",
      "value": 389.1,
      "uncertainty": {
       "type": "unreported"
      }
     },
     "initialLevelIndex": 113,
     "finalLevelIndex": 64
    },
    {
     "energy": {
      "unit": "keV",
      "value": 652,
      "uncertainty": {
       "type": "symmetric",
       "value": 0.8
      }
     },
     "gammaIntensity": {
      "value": 60,
      "uncertainty": {
       "type": "symmetric",
       "value": 24
      }
     },
     "initialLevelIndex": 113,
     "finalLevelIndex": 37,
     "multipolarity": {
      "stringRepresentation": "M1(+E2)",
      "isMixedTransition": true,
      "spins": [
       {
        "spin": 1
       },
       {
        "spin": 2
       }
      ],
      "parity": "+"
     },
     "theoreticalInternalConversionCoefficients": {
      "totalValue": {
       "value": 0.0225,
       "uncertainty": {
        "type": "unreported"
       }
      },
      "shellValues": [
       {
        "includesOuterShells": false,
        "shell": "K",
        "value": 0.0189,
        "uncertainty": {
         "type": "symmetric",
         "value": 0.0003
        }
       },
       {
        "includesOuterShells": false,
        "shell": "L",
        "value": 0.00279,
        "uncertainty": {
         "type": "symmetric",
         "value": 0.00004
        }
       },
       {
        "includesOuterShells": false,
        "shell": "M",
        "value": 0.000625,
        "uncertainty": {
         "type": "symmetric",
         "value": 0.000009
        }
       },
       {
        "includesOuterShells": false,
        "shell": "N",
        "value": 0.0001476,
        "uncertainty": {
         "type": "symmetric",
         "value": 0.0000022
        }
       },
       {
        "includesOuterShells": false,
        "shell": "O",
        "value": 0.000022,
        "uncertainty": {
         "type": "symmetric",
         "value": 4e-7
        }
       },
       {
        "includesOuterShells": false,
        "shell": "P",
        "value": 0.00000138,
        "uncertainty": {
         "type": "symmetric",
         "value": 2e-8
        }
       }
      ]
     },
     "comments": [
      {
       "type": "comment",
       "head": [
        {
         "name": "M"
        }
       ],
       "body": "\\ensuremath{\\alpha}(K)exp=0.020 (1971Ma45)."
      }
     ]
    },
    {
     "energy": {
      "unit": "keV",
      "value": 891.3,
      "uncertainty": {
       "type": "symmetric",
       "value": 1
      }
     },
     "gammaIntensity": {
      "value": 100,
      "uncertainty": {
       "type": "symmetric",
       "value": 40
      }
     },
     "initialLevelIndex": 113,
     "finalLevelIndex": 24,
     "comments": [
      {
       "type": "comment",
       "head": [
        {
         "name": "E"
        }
       ],
       "body": "E\\ensuremath{\\gamma}=895 keV in (HI,xn\\ensuremath{\\gamma})."
      }
     ]
    },
    {
     "energy": {
      "unit": "keV",
      "value": 1108,
      "uncertainty": {
       "type": "symmetric",
       "value": 1.2
      }
     },
     "initialLevelIndex": 113,
     "finalLevelIndex": 12,
     "comments": [
      {
       "type": "comment",
       "head": [
        {
         "name": "E"
        }
       ],
       "body": "E\\ensuremath{\\gamma}=1113 keV in (HI,xn\\ensuremath{\\gamma})."
      }
     ]
    }
   ],
   "band": 12,
   "comments": [
    {
     "type": "comment",
     "head": [
      {
       "name": "J"
      }
     ],
     "body": "202.239\\ensuremath{\\gamma} to 17/2\\ensuremath{^{+}}, 652.0\\ensuremath{\\gamma} M1(+E2) to 19/2\\ensuremath{^{+}}; band assignment."
    }
   ]
  },
  {
   "energy": {
    "unit": "keV",
    "value": 1749.1,
    "uncertainty": {
     "type": "unreported"
    }
   },
   "isStable": false,
   "flags": [
    "Z"
   ],
   "crossReferences": [
    {
     "dataset": "176LU(N,G) E=THERMAL"
    }
   ]
  },
  {
   "energy": {
    "unit": "keV",
    "value": 1756.533,
    "uncertainty": {
     "type": "symmetric",
     "value": 0.018
    }
   },
   "spinParity": {
    "values": [
     {
      "twoTimesSpin": 7,
      "isTentativeSpin": true,
      "parity": "-",
      "isTentativeParity": true
     }
    ]
   },
   "isStable": false,
   "flags": [
    "I"
   ],
   "crossReferences": [
    {
     "dataset": "176LU(N,G) E=THERMAL"
    },
    {
     "assignment": "ambiguous",
     "dataset": "178HF(T,A)",
     "level": 1757
    }
   ],
   "gammas": [
    {
     "energy": {
      "unit": "keV",
      "value": 128.436,
      "uncertainty": {
       "type": "symmetric",
       "value": 0.004
      }
     },
     "gammaIntensity": {
      "value": 18,
      "uncertainty": {
       "type": "symmetric",
       "value": 3
      }
     },
     "initialLevelIndex": 115,
     "finalLevelIndex": 95
    },
    {
     "energy": {
      "unit": "keV",
      "value": 183.28,
      "uncertainty": {
       "type": "symmetric",
       "value": 0.04
      }
     },
     "gammaIntensity": {
      "value": 5.9,
      "uncertainty": {
       "type": "symmetric",
       "value": 2.5
      }
     },
     "initialLevelIndex": 115,
     "finalLevelIndex": 86
    },
    {
     "energy": {
      "unit": "keV",
      "value": 945.6,
      "uncertainty": {
       "type": "symmetric",
       "value": 0.5
      }
     },
     "gammaIntensity": {
      "value": 100,
      "uncertainty": {
       "type": "symmetric",
       "value": 30
      }
     },
     "initialLevelIndex": 115,
     "finalLevelIndex": 19,
     "multipolarity": {
      "stringRepresentation": "M1(+E2)",
      "isMixedTransition": true,
      "spins": [
       {
        "spin": 1
       },
       {
        "spin": 2
       }
      ],
      "parity": "+"
     },
     "theoreticalInternalConversionCoefficients": {
      "totalValue": {
       "value": 0.00886,
       "uncertainty": {
        "type": "unreported"
       }
      },
      "shellValues": [
       {
        "includesOuterShells": false,
        "shell": "K",
        "value": 0.00746,
        "uncertainty": {
         "type": "symmetric",
         "value": 0.00011
        }
       },
       {
        "includesOuterShells": false,
        "shell": "L",
        "value": 0.001089,
        "uncertainty": {
         "type": "symmetric",
         "value": 0.000016
        }
       },
       {
        "includesOuterShells": false,
        "shell": "M",
        "value": 0.000243,
        "uncertainty": {
         "type": "symmetric",
         "value": 0.000004
        }
       },
       {
        "includesOuterShells": false,
        "shell": "N",
        "value": 0.0000575,
        "uncertainty": {
         "type": "symmetric",
         "value": 8e-7
        }
       },
       {
        "includesOuterShells": false,
        "shell": "O",
        "value": 0.00000856,
        "uncertainty": {
         "type": "symmetric",
         "value": 1.2e-7
        }
       },
       {
        "includesOuterShells": false,
        "shell": "P",
        "value": 5.41e-7,
        "uncertainty": {
         "type": "symmetric",
         "value": 8e-9
        }
       }
      ]
     },
     "comments": [
      {
       "type": "comment",
       "head": [
        {
         "name": "E"
        }
       ],
       "body": "945.595 keV \\textit{18} in \\ensuremath{^{\\textnormal{176}}}Lu(n,\\ensuremath{\\gamma})"
      },
      {
       "type": "comment",
       "head": [
        {
         "name": "M"
        }
       ],
       "body": "\\ensuremath{\\alpha}(K)exp=0.009 (1971Ma45)."
      }
     ]
    },
    {
     "energy": {
      "unit": "keV",
      "value": 994.89,
      "uncertainty": {
       "type": "symmetric",
       "value": 0.05
      }
     },
     "gammaIntensity": {
      "value": 28,
      "uncertainty": {
       "type": "symmetric",
       "value": 3
      }
     },
     "initialLevelIndex": 115,
     "finalLevelIndex": 16
    }
   ],
   "band": 6,
   "comments": [
    {
     "type": "comment",
     "head": [
      {
       "name": "J"
      }
     ],
     "body": "945.595\\ensuremath{\\gamma} M1(+E2) to 9/2\\ensuremath{^{-}}, 994.89\\ensuremath{\\gamma} to 5/2\\ensuremath{^{-}}; band assignment."
    }
   ]
  },
  {
   "energy": {
    "unit": "keV",
    "value": 1757.1,
    "uncertainty": {
     "type": "symmetric",
     "value": 0.7
    }
   },
   "spinParity": {
    "values": [
     {
      "twoTimesSpin": 11,
      "isTentativeSpin": true,
      "parity": "+",
      "isTentativeParity": true
     }
    ]
   },
   "isStable": false,
   "flags": [
    "u"
   ],
   "crossReferences": [
    {
     "dataset": "176LU(N,G) E=THERMAL"
    }
   ],
   "gammas": [
    {
     "energy": {
      "unit": "keV",
      "value": 133.75,
      "uncertainty": {
       "type": "symmetric",
       "value": 0.02
      }
     },
     "gammaIntensity": {
      "value": 3.4,
      "uncertainty": {
       "type": "symmetric",
       "value": 1.4
      }
     },
     "initialLevelIndex": 116,
     "finalLevelIndex": 94
    },
    {
     "energy": {
      "unit": "keV",
      "value": 1036.3,
      "uncertainty": {
       "type": "symmetric",
       "value": 1
      }
     },
     "gammaIntensity": {
      "value": 100,
      "uncertainty": {
       "type": "symmetric",
       "value": 71
      }
     },
     "initialLevelIndex": 116,
     "finalLevelIndex": 15
    }
   ],
   "band": 22,
   "comments": [
    {
     "type": "comment",
     "head": [
      {
       "name": "J"
      }
     ],
     "body": "133.75\\ensuremath{\\gamma} to (9/2\\ensuremath{^{+}}), 1036.3\\ensuremath{\\gamma} to 7/2\\ensuremath{^{+}}; band assignment"
    }
   ]
  },
  {
   "energy": {
    "unit": "keV",
    "value": 1766,
    "uncertainty": {
     "type": "symmetric",
     "value": 5
    }
   },
   "isStable": false,
   "flags": [
    "U"
   ],
   "crossReferences": [
    {
     "dataset": "176LU(D,P)"
    },
    {
     "dataset": "176YB(3HE,D),(A,T)",
     "level": 1760
    },
    {
     "assignment": "ambiguous",
     "dataset": "178HF(T,A)",
     "level": 1757
    }
   ]
  },
  {
   "existence": "uncertain",
   "energy": {
    "unit": "keV",
    "value": 1772.9,
    "uncertainty": {
     "type": "symmetric",
     "value": 0.3
    }
   },
   "isStable": false,
   "crossReferences": [
    {
     "dataset": "(HI,XNG)"
    }
   ],
   "gammas": [
    {
     "energy": {
      "unit": "keV",
      "value": 530.1,
      "uncertainty": {
       "type": "symmetric",
       "value": 0.5
      }
     },
     "gammaIntensity": {
      "value": 100,
      "uncertainty": {
       "type": "unreported"
      }
     },
     "initialLevelIndex": 118,
     "finalLevelIndex": 50,
     "flags": [
      "S"
     ]
    }
   ]
  },
  {
   "energy": {
    "unit": "keV",
    "value": 1786.38,
    "uncertainty": {
     "type": "symmetric",
     "value": 0.04
    }
   },
   "spinParity": {
    "values": [
     {
      "twoTimesSpin": 17,
      "isTentativeSpin": true,
      "parity": "+",
      "isTentativeParity": true
     }
    ]
   },
   "isStable": false,
   "flags": [
    "o"
   ],
   "crossReferences": [
    {
     "dataset": "176LU(N,G) E=THERMAL"
    },
    {
     "assignment": "tentative",
     "dataset": "176LU(D,P)",
     "level": 1787
    }
   ],
   "gammas": [
    {
     "energy": {
      "unit": "keV",
      "value": 178.85,
      "uncertainty": {
       "type": "symmetric",
       "value": 0.06
      }
     },
     "gammaIntensity": {
      "value": 6,
      "uncertainty": {
       "type": "symmetric",
       "value": 3
      }
     },
     "initialLevelIndex": 119,
     "finalLevelIndex": 92
    },
    {
     "energy": {
      "unit": "keV",
      "value": 1150.24,
      "uncertainty": {
       "type": "symmetric",
       "value": 0.04
      }
     },
     "gammaIntensity": {
      "value": 100,
      "uncertainty": {
       "type": "symmetric",
       "value": 15
      }
     },
     "initialLevelIndex": 119,
     "finalLevelIndex": 11
    }
   ],
   "band": 16,
   "comments": [
    {
     "type": "comment",
     "head": [
      {
       "name": "J"
      }
     ],
     "body": "178.85\\ensuremath{\\gamma} to 15/2\\ensuremath{^{+}}; band assignment"
    }
   ]
  },
  {
   "energy": {
    "unit": "keV",
    "value": 1804.3,
    "uncertainty": {
     "type": "symmetric",
     "value": 0.5
    }
   },
   "spinParity": {
    "values": [
     {
      "twoTimesSpin": 19,
      "isTentativeSpin": true,
      "parity": "+",
      "isTentativeParity": true
     }
    ]
   },
   "isStable": false,
   "flags": [
    "D"
   ],
   "crossReferences": [
    {
     "dataset": "176LU(N,G) E=THERMAL"
    },
    {
     "dataset": "(HI,XNG)"
    }
   ],
   "gammas": [
    {
     "energy": {
      "unit": "keV",
      "value": 459.5,
      "uncertainty": {
       "type": "symmetric",
       "value": 0.5
      }
     },
     "gammaIntensity": {
      "value": 100,
      "uncertainty": {
       "type": "unreported"
      }
     },
     "initialLevelIndex": 120,
     "finalLevelIndex": 61,
     "multipolarity": {
      "stringRepresentation": "[E2]",
      "spins": [
       {
        "spin": 2,
        "evaluatorInferred": true
       }
      ],
      "parity": "+"
     },
     "theoreticalInternalConversionCoefficients": {
      "totalValue": {
       "value": 0.0231,
       "uncertainty": {
        "type": "unreported"
       }
      },
      "shellValues": [
       {
        "includesOuterShells": false,
        "shell": "K",
        "value": 0.0178,
        "uncertainty": {
         "type": "symmetric",
         "value": 0.0003
        }
       },
       {
        "includesOuterShells": false,
        "shell": "L",
        "value": 0.00407,
        "uncertainty": {
         "type": "symmetric",
         "value": 0.00006
        }
       },
       {
        "includesOuterShells": false,
        "shell": "M",
        "value": 0.000951,
        "uncertainty": {
         "type": "symmetric",
         "value": 0.000014
        }
       },
       {
        "includesOuterShells": false,
        "shell": "N",
        "value": 0.000222,
        "uncertainty": {
         "type": "symmetric",
         "value": 0.000004
        }
       },
       {
        "includesOuterShells": false,
        "shell": "O",
        "value": 0.0000304,
        "uncertainty": {
         "type": "symmetric",
         "value": 5e-7
        }
       },
       {
        "includesOuterShells": false,
        "shell": "P",
        "value": 0.00000119,
        "uncertainty": {
         "type": "symmetric",
         "value": 1.7e-8
        }
       }
      ]
     },
     "flags": [
      "S"
     ]
    }
   ],
   "band": 3,
   "comments": [
    {
     "type": "comment",
     "head": [
      {
       "name": "J"
      }
     ],
     "body": "459.5\\ensuremath{\\gamma} to 15/2\\ensuremath{^{+}}; band assignment"
    }
   ]
  },
  {
   "energy": {
    "unit": "keV",
    "value": 1812.335,
    "uncertainty": {
     "type": "symmetric",
     "value": 0.022
    }
   },
   "spinParity": {
    "values": [
     {
      "twoTimesSpin": 17,
      "isTentativeSpin": true,
      "parity": "+",
      "isTentativeParity": true
     }
    ]
   },
   "isStable": false,
   "flags": [
    "p"
   ],
   "crossReferences": [
    {
     "dataset": "176LU(N,G) E=THERMAL"
    },
    {
     "dataset": "176LU(D,P)",
     "level": 1814
    }
   ],
   "gammas": [
    {
     "energy": {
      "unit": "keV",
      "value": 180.1,
      "uncertainty": {
       "type": "symmetric",
       "value": 0.16
      }
     },
     "gammaIntensity": {
      "value": 2.5,
      "uncertainty": {
       "type": "unreported"
      }
     },
     "initialLevelIndex": 121,
     "finalLevelIndex": 97
    },
    {
     "energy": {
      "unit": "keV",
      "value": 958.014,
      "uncertainty": {
       "type": "symmetric",
       "value": 0.022
      }
     },
     "gammaIntensity": {
      "value": 100,
      "uncertainty": {
       "type": "symmetric",
       "value": 12
      }
     },
     "initialLevelIndex": 121,
     "finalLevelIndex": 24
    },
    {
     "energy": {
      "unit": "keV",
      "value": 1176.3,
      "uncertainty": {
       "type": "symmetric",
       "value": 0.3
      }
     },
     "gammaIntensity": {
      "value": 43,
      "uncertainty": {
       "type": "symmetric",
       "value": 11
      }
     },
     "initialLevelIndex": 121,
     "finalLevelIndex": 11
    }
   ],
   "band": 17,
   "comments": [
    {
     "type": "comment",
     "head": [
      {
       "name": "J"
      }
     ],
     "body": "180.10\\ensuremath{\\gamma} to 15/2\\ensuremath{^{+}}, 958.014\\ensuremath{\\gamma} to 17/2\\ensuremath{^{+}}; band assignment"
    }
   ]
  },
  {
   "energy": {
    "unit": "keV",
    "value": 1820.69,
    "uncertainty": {
     "type": "symmetric",
     "value": 0.03
    }
   },
   "spinParity": {
    "values": [
     {
      "twoTimesSpin": 15,
      "isTentativeSpin": true,
      "parity": "+",
      "isTentativeParity": true
     }
    ]
   },
   "isStable": false,
   "flags": [
    "N"
   ],
   "crossReferences": [
    {
     "dataset": "176LU(N,G) E=THERMAL"
    }
   ],
   "gammas": [
    {
     "energy": {
      "unit": "keV",
      "value": 966.47,
      "uncertainty": {
       "type": "symmetric",
       "value": 0.03
      }
     },
     "gammaIntensity": {
      "value": 100,
      "uncertainty": {
       "type": "symmetric",
       "value": 13
      }
     },
     "initialLevelIndex": 122,
     "finalLevelIndex": 24,
     "multipolarity": {
      "stringRepresentation": "M1(+E2)",
      "isMixedTransition": true,
      "spins": [
       {
        "spin": 1
       },
       {
        "spin": 2
       }
      ],
      "parity": "+"
     },
     "theoreticalInternalConversionCoefficients": {
      "totalValue": {
       "value": 0.0084,
       "uncertainty": {
        "type": "unreported"
       }
      },
      "shellValues": [
       {
        "includesOuterShells": false,
        "shell": "K",
        "value": 0.00707,
        "uncertainty": {
         "type": "symmetric",
         "value": 0.0001
        }
       },
       {
        "includesOuterShells": false,
        "shell": "L",
        "value": 0.001031,
        "uncertainty": {
         "type": "symmetric",
         "value": 0.000015
        }
       },
       {
        "includesOuterShells": false,
        "shell": "M",
        "value": 0.00023,
        "uncertainty": {
         "type": "symmetric",
         "value": 0.000004
        }
       },
       {
        "includesOuterShells": false,
        "shell": "N",
        "value": 0.0000544,
        "uncertainty": {
         "type": "symmetric",
         "value": 8e-7
        }
       },
       {
        "includesOuterShells": false,
        "shell": "O",
        "value": 0.00000811,
        "uncertainty": {
         "type": "symmetric",
         "value": 1.2e-7
        }
       },
       {
        "includesOuterShells": false,
        "shell": "P",
        "value": 5.13e-7,
        "uncertainty": {
         "type": "symmetric",
         "value": 8e-9
        }
       }
      ]
     },
     "comments": [
      {
       "type": "comment",
       "head": [
        {
         "name": "M"
        }
       ],
       "body": "\\ensuremath{\\alpha}(K)exp=0.0053 (1971Ma45)."
      }
     ]
    },
    {
     "energy": {
      "unit": "keV",
      "value": 1184.14,
      "uncertainty": {
       "type": "symmetric",
       "value": 0.06
      }
     },
     "gammaIntensity": {
      "value": 36,
      "uncertainty": {
       "type": "symmetric",
       "value": 7
      }
     },
     "initialLevelIndex": 122,
     "finalLevelIndex": 11,
     "multipolarity": {
      "stringRepresentation": "M1(+E2)",
      "isMixedTransition": true,
      "spins": [
       {
        "spin": 1
       },
       {
        "spin": 2
       }
      ],
      "parity": "+"
     },
     "theoreticalInternalConversionCoefficients": {
      "totalValue": {
       "value": 0.00511,
       "uncertainty": {
        "type": "unreported"
       }
      },
      "pairCreationValue": {
       "value": 0.00000448,
       "uncertainty": {
        "type": "symmetric",
        "value": 7e-8
       }
      },
      "shellValues": [
       {
        "includesOuterShells": false,
        "shell": "K",
        "value": 0.0043,
        "uncertainty": {
         "type": "symmetric",
         "value": 0.00006
        }
       },
       {
        "includesOuterShells": false,
        "shell": "L",
        "value": 0.000623,
        "uncertainty": {
         "type": "symmetric",
         "value": 0.000009
        }
       },
       {
        "includesOuterShells": false,
        "shell": "M",
        "value": 0.0001391,
        "uncertainty": {
         "type": "symmetric",
         "value": 0.000002
        }
       },
       {
        "includesOuterShells": false,
        "shell": "N",
        "value": 0.0000329,
        "uncertainty": {
         "type": "symmetric",
         "value": 5e-7
        }
       },
       {
        "includesOuterShells": false,
        "shell": "O",
        "value": 0.0000049,
        "uncertainty": {
         "type": "symmetric",
         "value": 7e-8
        }
       },
       {
        "includesOuterShells": false,
        "shell": "P",
        "value": 3.11e-7,
        "uncertainty": {
         "type": "symmetric",
         "value": 5e-9
        }
       }
      ]
     },
     "comments": [
      {
       "type": "comment",
       "head": [
        {
         "name": "M"
        }
       ],
       "body": "\\ensuremath{\\alpha}(K)exp=0.0084 (1971Ma45)"
      }
     ]
    }
   ],
   "band": 14,
   "comments": [
    {
     "type": "comment",
     "head": [
      {
       "name": "J"
      }
     ],
     "body": "966.47\\ensuremath{\\gamma} M1(+E2) to 17/2\\ensuremath{^{+}}, 1184.14\\ensuremath{\\gamma} M1(+E2) to 15/2\\ensuremath{^{+}}; band assignment."
    }
   ]
  },
  {
   "energy": {
    "unit": "keV",
    "value": 1821.8,
    "uncertainty": {
     "type": "symmetric",
     "value": 1
    }
   },
   "spinParity": {
    "values": [
     {
      "twoTimesSpin": 9,
      "isTentativeSpin": true,
      "parity": "+",
      "isTentativeParity": true
     }
    ]
   },
   "isStable": false,
   "flags": [
    "v"
   ],
   "crossReferences": [
    {
     "dataset": "176LU(N,G) E=THERMAL"
    }
   ],
   "gammas": [
    {
     "energy": {
      "unit": "keV",
      "value": 109.82,
      "uncertainty": {
       "type": "symmetric",
       "value": 0.02
      }
     },
     "gammaIntensity": {
      "value": 100,
      "uncertainty": {
       "type": "unreported"
      }
     },
     "initialLevelIndex": 123,
     "finalLevelIndex": 108
    }
   ],
   "band": 23,
   "comments": [
    {
     "type": "comment",
     "head": [
      {
       "name": "J"
      }
     ],
     "body": "180.10\\ensuremath{\\gamma} to (7/2\\ensuremath{^{+}}); band assignment"
    }
   ]
  },
  {
   "energy": {
    "unit": "keV",
    "value": 1827.68,
    "uncertainty": {
     "type": "symmetric",
     "value": 0.06
    }
   },
   "spinParity": {
    "values": [
     {
      "twoTimesSpin": 5,
      "isTentativeSpin": true,
      "parity": "-",
      "isTentativeParity": true
     }
    ]
   },
   "isStable": false,
   "flags": [
    "I"
   ],
   "crossReferences": [
    {
     "dataset": "176LU(N,G) E=THERMAL"
    }
   ],
   "gammas": [
    {
     "energy": {
      "unit": "keV",
      "value": 187.505,
      "uncertainty": {
       "type": "symmetric",
       "value": 0.002
      }
     },
     "gammaIntensity": {
      "value": 5.9,
      "uncertainty": {
       "type": "symmetric",
       "value": 0.7
      }
     },
     "initialLevelIndex": 124,
     "finalLevelIndex": 99
    },
    {
     "energy": {
      "unit": "keV",
      "value": 1065.96,
      "uncertainty": {
       "type": "symmetric",
       "value": 0.09
      }
     },
     "gammaIntensity": {
      "value": 100,
      "uncertainty": {
       "type": "symmetric",
       "value": 9
      }
     },
     "initialLevelIndex": 124,
     "finalLevelIndex": 16
    }
   ],
   "band": 6,
   "comments": [
    {
     "type": "comment",
     "head": [
      {
       "name": "J"
      }
     ],
     "body": "187.505\\ensuremath{\\gamma} to (3/2\\ensuremath{^{-}}), 1065.96\\ensuremath{\\gamma} to 5/2\\ensuremath{^{-}}; band assignment (tentative)"
    }
   ]
  },
  {
   "energy": {
    "unit": "keV",
    "value": 1829.252,
    "uncertainty": {
     "type": "symmetric",
     "value": 0.008
    }
   },
   "spinParity": {
    "values": [
     {
      "twoTimesSpin": 19,
      "isTentativeSpin": true,
      "parity": "+",
      "isTentativeParity": true
     }
    ]
   },
   "isStable": false,
   "crossReferences": [
    {
     "dataset": "176LU(N,G) E=THERMAL"
    }
   ],
   "gammas": [
    {
     "energy": {
      "unit": "keV",
      "value": 206.002,
      "uncertainty": {
       "type": "symmetric",
       "value": 0.008
      }
     },
     "gammaIntensity": {
      "value": 6,
      "uncertainty": {
       "type": "symmetric",
       "value": 3
      }
     },
     "initialLevelIndex": 125,
     "finalLevelIndex": 93
    },
    {
     "energy": {
      "unit": "keV",
      "value": 484.458,
      "uncertainty": {
       "type": "symmetric",
       "value": 0.018
      }
     },
     "gammaIntensity": {
      "value": 25,
      "uncertainty": {
       "type": "symmetric",
       "value": 6
      }
     },
     "initialLevelIndex": 125,
     "finalLevelIndex": 61
    },
    {
     "energy": {
      "unit": "keV",
      "value": 652.451,
      "uncertainty": {
       "type": "symmetric",
       "value": 0.008
      }
     },
     "gammaIntensity": {
      "value": 100,
      "uncertainty": {
       "type": "symmetric",
       "value": 13
      }
     },
     "initialLevelIndex": 125,
     "finalLevelIndex": 43
    }
   ],
   "comments": [
    {
     "type": "comment",
     "head": [
      {
       "name": "J"
      }
     ],
     "body": "206.002\\ensuremath{\\gamma} to 19/2\\ensuremath{^{+}}, 652.451\\ensuremath{\\gamma} to 15/2\\ensuremath{^{+}}. Non observation of \\ensuremath{\\gamma}$'$s to levels with J=13/2 would argue against J=17/2"
    }
   ]
  },
  {
   "energy": {
    "unit": "keV",
    "value": 1841.9,
    "uncertainty": {
     "type": "symmetric",
     "value": 1.1
    }
   },
   "isStable": false,
   "crossReferences": [
    {
     "dataset": "176LU(N,G) E=THERMAL"
    },
    {
     "dataset": "176LU(D,P)",
     "level": 1839
    },
    {
     "dataset": "178HF(T,A)"
    }
   ]
  },
  {
   "energy": {
    "unit": "keV",
    "value": 1850.7,
    "uncertainty": {
     "type": "symmetric",
     "value": 0.5
    }
   },
   "spinParity": {
    "values": [
     {
      "twoTimesSpin": 29,
      "isTentativeSpin": false,
      "parity": "-",
      "isTentativeParity": false
     }
    ]
   },
   "isStable": false,
   "flags": [
    "F"
   ],
   "crossReferences": [
    {
     "dataset": "(HI,XNG)"
    }
   ],
   "gammas": [
    {
     "energy": {
      "unit": "keV",
      "value": 314.1,
      "uncertainty": {
       "type": "symmetric",
       "value": 0.5
      }
     },
     "gammaIntensity": {
      "value": 58,
      "uncertainty": {
       "type": "symmetric",
       "value": 4
      }
     },
     "initialLevelIndex": 127,
     "finalLevelIndex": 79,
     "flags": [
      "S"
     ]
    },
    {
     "energy": {
      "unit": "keV",
      "value": 607.8,
      "uncertainty": {
       "type": "symmetric",
       "value": 0.5
      }
     },
     "gammaIntensity": {
      "value": 100,
      "uncertainty": {
       "type": "unreported"
      }
     },
     "initialLevelIndex": 127,
     "finalLevelIndex": 50,
     "flags": [
      "S"
     ]
    }
   ],
   "band": 8,
   "comments": [
    {
     "type": "comment",
     "head": [
      {
       "name": "J"
      }
     ],
     "body": "314.1\\ensuremath{\\gamma} to 27/2\\ensuremath{^{-}}, 607.8\\ensuremath{\\gamma} to 25/2\\ensuremath{^{-}}; band assignment"
    }
   ]
  },
  {
   "energy": {
    "unit": "keV",
    "value": 1852,
    "uncertainty": {
     "type": "symmetric",
     "value": 1
    }
   },
   "isStable": false,
   "crossReferences": [
    {
     "dataset": "176LU(N,G) E=THERMAL"
    },
    {
     "assignment": "ambiguous",
     "dataset": "176LU(D,P)",
     "level": 1857
    }
   ]
  },
  {
   "energy": {
    "unit": "keV",
    "value": 1859.2,
    "uncertainty": {
     "type": "symmetric",
     "value": 0.4
    }
   },
   "spinParity": {
    "values": [
     {
      "twoTimesSpin": 11,
      "isTentativeSpin": true,
      "parity": "-",
      "isTentativeParity": true
     }
    ]
   },
   "isStable": false,
   "crossReferences": [
    {
     "dataset": "176LU(N,G) E=THERMAL"
    },
    {
     "assignment": "ambiguous",
     "dataset": "176LU(D,P)",
     "level": 1857
    },
    {
     "dataset": "176YB(3HE,D),(A,T)"
    }
   ],
   "comments": [
    {
     "type": "comment",
     "head": [
      {
       "name": "J"
      }
     ],
     "body": "L=(5) in \\ensuremath{^{\\textnormal{176}}}Yb(\\ensuremath{^{3}}He,d),(\\ensuremath{\\alpha},t). The assignment is tentative."
    }
   ]
  },
  {
   "energy": {
    "unit": "keV",
    "value": 1862.1,
    "uncertainty": {
     "type": "symmetric",
     "value": 1.3
    }
   },
   "isStable": false,
   "crossReferences": [
    {
     "dataset": "176LU(N,G) E=THERMAL"
    },
    {
     "assignment": "ambiguous",
     "dataset": "176LU(D,P)",
     "level": 1857
    }
   ]
  },
  {
   "energy": {
    "unit": "keV",
    "value": 1872.2,
    "uncertainty": {
     "type": "symmetric",
     "value": 0.4
    }
   },
   "spinParity": {
    "values": [
     {
      "twoTimesSpin": 25,
      "isTentativeSpin": false,
      "parity": "-",
      "isTentativeParity": false
     }
    ]
   },
   "isStable": false,
   "flags": [
    "B"
   ],
   "crossReferences": [
    {
     "dataset": "(HI,XNG)"
    }
   ],
   "gammas": [
    {
     "energy": {
      "unit": "keV",
      "value": 283.4,
      "uncertainty": {
       "type": "symmetric",
       "value": 0.5
      }
     },
     "gammaIntensity": {
      "value": 46,
      "uncertainty": {
       "type": "limit",
       "limitType": "upper",
       "isInclusive": true
      }
     },
     "initialLevelIndex": 131,
     "finalLevelIndex": 88,
     "multipolarity": {
      "stringRepresentation": "[M1+E2]",
      "isMixedTransition": true,
      "spins": [
       {
        "spin": 1,
        "evaluatorInferred": true
       },
       {
        "spin": 2,
        "evaluatorInferred": true
       }
      ],
      "parity": "+"
     },
     "theoreticalInternalConversionCoefficients": {
      "totalValue": {
       "value": 0.199,
       "uncertainty": {
        "type": "unreported"
       }
      },
      "shellValues": [
       {
        "includesOuterShells": false,
        "shell": "K",
        "value": 0.1668,
        "uncertainty": {
         "type": "symmetric",
         "value": 0.0025
        }
       },
       {
        "includesOuterShells": false,
        "shell": "L",
        "value": 0.0253,
        "uncertainty": {
         "type": "symmetric",
         "value": 0.0004
        }
       },
       {
        "includesOuterShells": false,
        "shell": "M",
        "value": 0.00568,
        "uncertainty": {
         "type": "symmetric",
         "value": 0.00009
        }
       },
       {
        "includesOuterShells": false,
        "shell": "N",
        "value": 0.001343,
        "uncertainty": {
         "type": "symmetric",
         "value": 0.00002
        }
       },
       {
        "includesOuterShells": false,
        "shell": "O",
        "value": 0.000199,
        "uncertainty": {
         "type": "symmetric",
         "value": 0.000003
        }
       },
       {
        "includesOuterShells": false,
        "shell": "P",
        "value": 0.00001238,
        "uncertainty": {
         "type": "symmetric",
         "value": 1.9e-7
        }
       }
      ]
     },
     "flags": [
      "S"
     ]
    },
    {
     "energy": {
      "unit": "keV",
      "value": 550,
      "uncertainty": {
       "type": "symmetric",
       "value": 0.5
      }
     },
     "gammaIntensity": {
      "value": 100,
      "uncertainty": {
       "type": "symmetric",
       "value": 23
      }
     },
     "initialLevelIndex": 131,
     "finalLevelIndex": 56,
     "multipolarity": {
      "stringRepresentation": "[E2]",
      "spins": [
       {
        "spin": 2,
        "evaluatorInferred": true
       }
      ],
      "parity": "+"
     },
     "theoreticalInternalConversionCoefficients": {
      "totalValue": {
       "value": 0.01466,
       "uncertainty": {
        "type": "unreported"
       }
      },
      "shellValues": [
       {
        "includesOuterShells": false,
        "shell": "K",
        "value": 0.01159,
        "uncertainty": {
         "type": "symmetric",
         "value": 0.00017
        }
       },
       {
        "includesOuterShells": false,
        "shell": "L",
        "value": 0.00237,
        "uncertainty": {
         "type": "symmetric",
         "value": 0.00004
        }
       },
       {
        "includesOuterShells": false,
        "shell": "M",
        "value": 0.000549,
        "uncertainty": {
         "type": "symmetric",
         "value": 0.000008
        }
       },
       {
        "includesOuterShells": false,
        "shell": "N",
        "value": 0.0001283,
        "uncertainty": {
         "type": "symmetric",
         "value": 0.0000019
        }
       },
       {
        "includesOuterShells": false,
        "shell": "O",
        "value": 0.0000179,
        "uncertainty": {
         "type": "symmetric",
         "value": 3e-7
        }
       },
       {
        "includesOuterShells": false,
        "shell": "P",
        "value": 7.86e-7,
        "uncertainty": {
         "type": "symmetric",
         "value": 1.2e-8
        }
       }
      ]
     },
     "flags": [
      "S"
     ]
    }
   ],
   "band": 1,
   "comments": [
    {
     "type": "comment",
     "head": [
      {
       "name": "J"
      }
     ],
     "body": "283.4\\ensuremath{\\gamma} to 23/2\\ensuremath{^{-}}; 550.0\\ensuremath{\\gamma} to 21/2\\ensuremath{^{-}}; band assignment."
    }
   ]
  },
  {
   "energy": {
    "unit": "keV",
    "value": 1873.59,
    "uncertainty": {
     "type": "symmetric",
     "value": 0.03
    }
   },
   "spinParity": {
    "values": [
     {
      "twoTimesSpin": 17,
      "isTentativeSpin": true,
      "parity": "+",
      "isTentativeParity": true
     }
    ]
   },
   "isStable": false,
   "flags": [
    "K"
   ],
   "crossReferences": [
    {
     "dataset": "176LU(N,G) E=THERMAL"
    },
    {
     "assignment": "ambiguous",
     "dataset": "176LU(D,P)",
     "level": 1880
    }
   ],
   "gammas": [
    {
     "energy": {
      "unit": "keV",
      "value": 196.41,
      "uncertainty": {
       "type": "symmetric",
       "value": 0.03
      }
     },
     "gammaIntensity": {
      "value": 5.1,
      "uncertainty": {
       "type": "symmetric",
       "value": 0.8
      }
     },
     "initialLevelIndex": 132,
     "finalLevelIndex": 104
    },
    {
     "energy": {
      "unit": "keV",
      "value": 1020.2,
      "uncertainty": {
       "type": "symmetric",
       "value": 1
      }
     },
     "initialLevelIndex": 132,
     "finalLevelIndex": 24
    },
    {
     "energy": {
      "unit": "keV",
      "value": 1237.15,
      "uncertainty": {
       "type": "symmetric",
       "value": 0.11
      }
     },
     "gammaIntensity": {
      "value": 100,
      "uncertainty": {
       "type": "symmetric",
       "value": 16
      }
     },
     "initialLevelIndex": 132,
     "finalLevelIndex": 11,
     "multipolarity": {
      "stringRepresentation": "M1(+E2)",
      "isMixedTransition": true,
      "spins": [
       {
        "spin": 1
       },
       {
        "spin": 2
       }
      ],
      "parity": "+"
     },
     "theoreticalInternalConversionCoefficients": {
      "totalValue": {
       "value": 0.0046,
       "uncertainty": {
        "type": "unreported"
       }
      },
      "pairCreationValue": {
       "value": 0.00001171,
       "uncertainty": {
        "type": "symmetric",
        "value": 1.7e-7
       }
      },
      "shellValues": [
       {
        "includesOuterShells": false,
        "shell": "K",
        "value": 0.00387,
        "uncertainty": {
         "type": "symmetric",
         "value": 0.00006
        }
       },
       {
        "includesOuterShells": false,
        "shell": "L",
        "value": 0.000559,
        "uncertainty": {
         "type": "symmetric",
         "value": 0.000008
        }
       },
       {
        "includesOuterShells": false,
        "shell": "M",
        "value": 0.0001249,
        "uncertainty": {
         "type": "symmetric",
         "value": 0.0000018
        }
       },
       {
        "includesOuterShells": false,
        "shell": "N",
        "value": 0.0000295,
        "uncertainty": {
         "type": "symmetric",
         "value": 5e-7
        }
       },
       {
        "includesOuterShells": false,
        "shell": "O",
        "value": 0.0000044,
        "uncertainty": {
         "type": "symmetric",
         "value": 7e-8
        }
       },
       {
        "includesOuterShells": false,
        "shell": "P",
        "value": 2.79e-7,
        "uncertainty": {
         "type": "symmetric",
         "value": 4e-9
        }
       }
      ]
     },
     "comments": [
      {
       "type": "comment",
       "head": [
        {
         "name": "M"
        }
       ],
       "body": "\\ensuremath{\\alpha}(K)exp=0.0050 (1971Ma45)"
      }
     ]
    },
    {
     "energy": {
      "unit": "keV",
      "value": 1433.1,
      "uncertainty": {
       "type": "symmetric",
       "value": 1
      }
     },
     "initialLevelIndex": 132,
     "finalLevelIndex": 5
    }
   ],
   "band": 11,
   "comments": [
    {
     "type": "comment",
     "head": [
      {
       "name": "J"
      }
     ],
     "body": "1237.15\\ensuremath{\\gamma} M1(+E2) to 15/2\\ensuremath{^{+}}, 1433.1\\ensuremath{\\gamma} to 13/2\\ensuremath{^{+}}; band assignment."
    }
   ]
  },
  {
   "energy": {
    "unit": "keV",
    "value": 1882.18,
    "uncertainty": {
     "type": "symmetric",
     "value": 0.017
    }
   },
   "spinParity": {
    "values": [
     {
      "twoTimesSpin": 11,
      "isTentativeSpin": true,
      "parity": "+",
      "isTentativeParity": true
     }
    ]
   },
   "isStable": false,
   "flags": [
    "x"
   ],
   "crossReferences": [
    {
     "dataset": "176LU(N,G) E=THERMAL"
    },
    {
     "assignment": "ambiguous",
     "dataset": "176LU(D,P)",
     "level": 1880
    },
    {
     "assignment": "ambiguous",
     "dataset": "176YB(3HE,D),(A,T)",
     "level": 1883
    }
   ],
   "gammas": [
    {
     "energy": {
      "unit": "keV",
      "value": 896,
      "uncertainty": {
       "type": "symmetric",
       "value": 0.8
      }
     },
     "initialLevelIndex": 133,
     "finalLevelIndex": 31
    },
    {
     "energy": {
      "unit": "keV",
      "value": 1065.7,
      "uncertainty": {
       "type": "symmetric",
       "value": 0.8
      }
     },
     "gammaIntensity": {
      "value": 100,
      "uncertainty": {
       "type": "unreported"
      }
     },
     "initialLevelIndex": 133,
     "finalLevelIndex": 20,
     "multipolarity": {
      "stringRepresentation": "M1(+E2)",
      "isMixedTransition": true,
      "spins": [
       {
        "spin": 1
       },
       {
        "spin": 2
       }
      ],
      "parity": "+"
     },
     "theoreticalInternalConversionCoefficients": {
      "totalValue": {
       "value": 0.0066,
       "uncertainty": {
        "type": "unreported"
       }
      },
      "shellValues": [
       {
        "includesOuterShells": false,
        "shell": "K",
        "value": 0.00556,
        "uncertainty": {
         "type": "symmetric",
         "value": 0.00008
        }
       },
       {
        "includesOuterShells": false,
        "shell": "L",
        "value": 0.000808,
        "uncertainty": {
         "type": "symmetric",
         "value": 0.000012
        }
       },
       {
        "includesOuterShells": false,
        "shell": "M",
        "value": 0.000181,
        "uncertainty": {
         "type": "symmetric",
         "value": 0.000003
        }
       },
       {
        "includesOuterShells": false,
        "shell": "N",
        "value": 0.0000427,
        "uncertainty": {
         "type": "symmetric",
         "value": 6e-7
        }
       },
       {
        "includesOuterShells": false,
        "shell": "O",
        "value": 0.00000636,
        "uncertainty": {
         "type": "symmetric",
         "value": 9e-8
        }
       },
       {
        "includesOuterShells": false,
        "shell": "P",
        "value": 4.03e-7,
        "uncertainty": {
         "type": "symmetric",
         "value": 6e-9
        }
       }
      ]
     },
     "comments": [
      {
       "type": "comment",
       "head": [
        {
         "name": "M"
        }
       ],
       "body": "\\ensuremath{\\alpha}(K)exp=0.0023 (1971Ma45)"
      }
     ]
    }
   ],
   "band": 25,
   "comments": [
    {
     "type": "comment",
     "head": [
      {
       "name": "J"
      }
     ],
     "body": "896.0\\ensuremath{\\gamma} to 13/2\\ensuremath{^{+}}, 1065.7\\ensuremath{\\gamma} M1(+E2) to 11/2\\ensuremath{^{+}}; proposed configuration"
    },
    {
     "type": "comment",
     "head": [
      {
       "name": "CONF"
      }
     ],
     "body": "\\ensuremath{K^{\\pi}}=11/2\\ensuremath{^{+}}:\\ensuremath{\\pi}5/2[402]\\ensuremath{\\otimes}\\ensuremath{\\nu}\\ensuremath{^{\\textnormal{2}}}(7/2[514],1/2[510]). The assignment is tentative."
    }
   ]
  },
  {
   "energy": {
    "unit": "keV",
    "value": 1894.6,
    "uncertainty": {
     "type": "unreported"
    }
   },
   "isStable": false,
   "flags": [
    "Z"
   ],
   "crossReferences": [
    {
     "dataset": "176LU(N,G) E=THERMAL"
    },
    {
     "assignment": "ambiguous",
     "dataset": "178HF(T,A)",
     "level": 1897
    }
   ]
  },
  {
   "energy": {
    "unit": "keV",
    "value": 1902.2,
    "uncertainty": {
     "type": "unreported"
    }
   },
   "isStable": false,
   "flags": [
    "Z"
   ],
   "crossReferences": [
    {
     "dataset": "176LU(N,G) E=THERMAL"
    }
   ]
  },
  {
   "energy": {
    "unit": "keV",
    "value": 1907.3,
    "uncertainty": {
     "type": "symmetric",
     "value": 0.5
    }
   },
   "spinParity": {
    "values": [
     {
      "twoTimesSpin": 29,
      "isTentativeSpin": false,
      "parity": "+",
      "isTentativeParity": false
     }
    ]
   },
   "isStable": false,
   "flags": [
    "J"
   ],
   "crossReferences": [
    {
     "dataset": "(HI,XNG)"
    }
   ],
   "gammas": [
    {
     "energy": {
      "unit": "keV",
      "value": 301.4,
      "uncertainty": {
       "type": "symmetric",
       "value": 0.5
      }
     },
     "gammaIntensity": {
      "value": 100,
      "uncertainty": {
       "type": "unreported"
      }
     },
     "initialLevelIndex": 136,
     "finalLevelIndex": 91,
     "flags": [
      "S"
     ]
    },
    {
     "energy": {
      "unit": "keV",
      "value": 582.9,
      "uncertainty": {
       "type": "symmetric",
       "value": 0.5
      }
     },
     "gammaIntensity": {
      "value": 83,
      "uncertainty": {
       "type": "symmetric",
       "value": 9
      }
     },
     "initialLevelIndex": 136,
     "finalLevelIndex": 57,
     "flags": [
      "S"
     ]
    }
   ],
   "band": 9,
   "comments": [
    {
     "type": "comment",
     "head": [
      {
       "name": "J"
      }
     ],
     "body": "301.4\\ensuremath{\\gamma} to 27/2\\ensuremath{^{+}}, 582.9\\ensuremath{\\gamma} to 25/2\\ensuremath{^{+}}; band assignment"
    }
   ]
  },
  {
   "energy": {
    "unit": "keV",
    "value": 1912.6,
    "uncertainty": {
     "type": "symmetric",
     "value": 0.7
    }
   },
   "spinParity": {
    "values": [
     {
      "twoTimesSpin": 13,
      "isTentativeSpin": true,
      "parity": "+",
      "isTentativeParity": true
     }
    ]
   },
   "isStable": false,
   "flags": [
    "u"
   ],
   "crossReferences": [
    {
     "dataset": "176LU(N,G) E=THERMAL"
    },
    {
     "dataset": "176LU(D,P)",
     "level": 1902
    }
   ],
   "gammas": [
    {
     "energy": {
      "unit": "keV",
      "value": 155.917,
      "uncertainty": {
       "type": "unreported"
      }
     },
     "gammaIntensity": {
      "value": 83,
      "uncertainty": {
       "type": "unreported"
      }
     },
     "initialLevelIndex": 137,
     "finalLevelIndex": 116
    },
    {
     "energy": {
      "unit": "keV",
      "value": 289.55,
      "uncertainty": {
       "type": "unreported"
      }
     },
     "gammaIntensity": {
      "value": 100,
      "uncertainty": {
       "type": "unreported"
      }
     },
     "initialLevelIndex": 137,
     "finalLevelIndex": 94
    }
   ],
   "band": 22,
   "comments": [
    {
     "type": "comment",
     "head": [
      {
       "name": "J"
      }
     ],
     "body": "155.917\\ensuremath{\\gamma} to (11/2\\ensuremath{^{+}}), 289.55\\ensuremath{\\gamma} to (9/2\\ensuremath{^{+}}); band assignment"
    }
   ]
  },
  {
   "energy": {
    "unit": "keV",
    "value": 1919,
    "uncertainty": {
     "type": "unreported"
    }
   },
   "isStable": false,
   "flags": [
    "Z"
   ],
   "crossReferences": [
    {
     "dataset": "176LU(N,G) E=THERMAL"
    }
   ]
  },
  {
   "energy": {
    "unit": "keV",
    "value": 1922,
    "uncertainty": {
     "type": "symmetric",
     "value": 0.7
    }
   },
   "spinParity": {
    "values": [
     {
      "twoTimesSpin": 25,
      "isTentativeSpin": true,
      "parity": "+",
      "isTentativeParity": true
     }
    ]
   },
   "isStable": false,
   "flags": [
    "A"
   ],
   "crossReferences": [
    {
     "dataset": "(HI,XNG)"
    }
   ],
   "gammas": [
    {
     "energy": {
      "unit": "keV",
      "value": 569.5,
      "uncertainty": {
       "type": "symmetric",
       "value": 0.5
      }
     },
     "gammaIntensity": {
      "value": 100,
      "uncertainty": {
       "type": "unreported"
      }
     },
     "initialLevelIndex": 139,
     "finalLevelIndex": 63,
     "multipolarity": {
      "stringRepresentation": "[E2]",
      "spins": [
       {
        "spin": 2,
        "evaluatorInferred": true
       }
      ],
      "parity": "+"
     },
     "theoreticalInternalConversionCoefficients": {
      "totalValue": {
       "value": 0.01347,
       "uncertainty": {
        "type": "unreported"
       }
      },
      "shellValues": [
       {
        "includesOuterShells": false,
        "shell": "K",
        "value": 0.0107,
        "uncertainty": {
         "type": "symmetric",
         "value": 0.00016
        }
       },
       {
        "includesOuterShells": false,
        "shell": "L",
        "value": 0.00214,
        "uncertainty": {
         "type": "symmetric",
         "value": 0.00003
        }
       },
       {
        "includesOuterShells": false,
        "shell": "M",
        "value": 0.000496,
        "uncertainty": {
         "type": "symmetric",
         "value": 0.000007
        }
       },
       {
        "includesOuterShells": false,
        "shell": "N",
        "value": 0.000116,
        "uncertainty": {
         "type": "symmetric",
         "value": 0.0000017
        }
       },
       {
        "includesOuterShells": false,
        "shell": "O",
        "value": 0.00001618,
        "uncertainty": {
         "type": "symmetric",
         "value": 2.3e-7
        }
       },
       {
        "includesOuterShells": false,
        "shell": "P",
        "value": 7.27e-7,
        "uncertainty": {
         "type": "symmetric",
         "value": 1.1e-8
        }
       }
      ]
     },
     "flags": [
      "S"
     ]
    }
   ],
   "band": 0,
   "comments": [
    {
     "type": "comment",
     "head": [
      {
       "name": "J"
      }
     ],
     "body": "569.5\\ensuremath{\\gamma} to (21/2\\ensuremath{^{+}}); band assignment."
    }
   ]
  },
  {
   "energy": {
    "unit": "keV",
    "value": 1925.404,
    "uncertainty": {
     "type": "symmetric",
     "value": 0.016
    }
   },
   "spinParity": {
    "values": [
     {
      "twoTimesSpin": 15,
      "isTentativeSpin": false,
      "parity": "+",
      "isTentativeParity": false
     }
    ]
   },
   "isStable": false,
   "flags": [
    "w"
   ],
   "crossReferences": [
    {
     "dataset": "176LU(N,G) E=THERMAL"
    }
   ],
   "gammas": [
    {
     "energy": {
      "unit": "keV",
      "value": 196.41,
      "uncertainty": {
       "type": "symmetric",
       "value": 0.03
      }
     },
     "gammaIntensity": {
      "value": 7,
      "uncertainty": {
       "type": "symmetric",
       "value": 1.1
      }
     },
     "initialLevelIndex": 140,
     "finalLevelIndex": 109
    },
    {
     "energy": {
      "unit": "keV",
      "value": 534.5,
      "uncertainty": {
       "type": "symmetric",
       "value": 0.4
      }
     },
     "gammaIntensity": {
      "value": 27,
      "uncertainty": {
       "type": "symmetric",
       "value": 18
      }
     },
     "initialLevelIndex": 140,
     "finalLevelIndex": 66,
     "multipolarity": {
      "stringRepresentation": "M1(+E2)",
      "isMixedTransition": true,
      "spins": [
       {
        "spin": 1
       },
       {
        "spin": 2
       }
      ],
      "parity": "+"
     },
     "theoreticalInternalConversionCoefficients": {
      "totalValue": {
       "value": 0.0374,
       "uncertainty": {
        "type": "unreported"
       }
      },
      "shellValues": [
       {
        "includesOuterShells": false,
        "shell": "K",
        "value": 0.0314,
        "uncertainty": {
         "type": "symmetric",
         "value": 0.0005
        }
       },
       {
        "includesOuterShells": false,
        "shell": "L",
        "value": 0.00467,
        "uncertainty": {
         "type": "symmetric",
         "value": 0.00007
        }
       },
       {
        "includesOuterShells": false,
        "shell": "M",
        "value": 0.001045,
        "uncertainty": {
         "type": "symmetric",
         "value": 0.000015
        }
       },
       {
        "includesOuterShells": false,
        "shell": "N",
        "value": 0.000247,
        "uncertainty": {
         "type": "symmetric",
         "value": 0.000004
        }
       },
       {
        "includesOuterShells": false,
        "shell": "O",
        "value": 0.0000367,
        "uncertainty": {
         "type": "symmetric",
         "value": 6e-7
        }
       },
       {
        "includesOuterShells": false,
        "shell": "P",
        "value": 0.0000023,
        "uncertainty": {
         "type": "symmetric",
         "value": 4e-8
        }
       }
      ]
     },
     "comments": [
      {
       "type": "comment",
       "head": [
        {
         "name": "M"
        }
       ],
       "body": "\\ensuremath{\\alpha}(K)exp=0.030 (1971Ma45)."
      }
     ]
    },
    {
     "energy": {
      "unit": "keV",
      "value": 747.3,
      "uncertainty": {
       "type": "symmetric",
       "value": 0.8
      }
     },
     "gammaIntensity": {
      "value": 31,
      "uncertainty": {
       "type": "symmetric",
       "value": 18
      }
     },
     "initialLevelIndex": 140,
     "finalLevelIndex": 43,
     "multipolarity": {
      "stringRepresentation": "M1(+E2)",
      "isMixedTransition": true,
      "spins": [
       {
        "spin": 1
       },
       {
        "spin": 2
       }
      ],
      "parity": "+"
     },
     "theoreticalInternalConversionCoefficients": {
      "totalValue": {
       "value": 0.01593,
       "uncertainty": {
        "type": "unreported"
       }
      },
      "shellValues": [
       {
        "includesOuterShells": false,
        "shell": "K",
        "value": 0.0134,
        "uncertainty": {
         "type": "symmetric",
         "value": 0.0002
        }
       },
       {
        "includesOuterShells": false,
        "shell": "L",
        "value": 0.00197,
        "uncertainty": {
         "type": "symmetric",
         "value": 0.00003
        }
       },
       {
        "includesOuterShells": false,
        "shell": "M",
        "value": 0.000441,
        "uncertainty": {
         "type": "symmetric",
         "value": 0.000007
        }
       },
       {
        "includesOuterShells": false,
        "shell": "N",
        "value": 0.0001041,
        "uncertainty": {
         "type": "symmetric",
         "value": 0.0000015
        }
       },
       {
        "includesOuterShells": false,
        "shell": "O",
        "value": 0.0000155,
        "uncertainty": {
         "type": "symmetric",
         "value": 2.3e-7
        }
       },
       {
        "includesOuterShells": false,
        "shell": "P",
        "value": 9.76e-7,
        "uncertainty": {
         "type": "symmetric",
         "value": 1.4e-8
        }
       }
      ]
     },
     "comments": [
      {
       "type": "comment",
       "head": [
        {
         "name": "M"
        }
       ],
       "body": "\\ensuremath{\\alpha}(K)exp=0.005 (1971Ma45)."
      }
     ]
    },
    {
     "energy": {
      "unit": "keV",
      "value": 940.143,
      "uncertainty": {
       "type": "symmetric",
       "value": 0.018
      }
     },
     "gammaIntensity": {
      "value": 100,
      "uncertainty": {
       "type": "symmetric",
       "value": 12
      }
     },
     "initialLevelIndex": 140,
     "finalLevelIndex": 31,
     "multipolarity": {
      "stringRepresentation": "M1(+E2)",
      "isMixedTransition": true,
      "spins": [
       {
        "spin": 1
       },
       {
        "spin": 2
       }
      ],
      "parity": "+"
     },
     "theoreticalInternalConversionCoefficients": {
      "totalValue": {
       "value": 0.00899,
       "uncertainty": {
        "type": "unreported"
       }
      },
      "shellValues": [
       {
        "includesOuterShells": false,
        "shell": "K",
        "value": 0.00757,
        "uncertainty": {
         "type": "symmetric",
         "value": 0.00011
        }
       },
       {
        "includesOuterShells": false,
        "shell": "L",
        "value": 0.001105,
        "uncertainty": {
         "type": "symmetric",
         "value": 0.000016
        }
       },
       {
        "includesOuterShells": false,
        "shell": "M",
        "value": 0.000247,
        "uncertainty": {
         "type": "symmetric",
         "value": 0.000004
        }
       },
       {
        "includesOuterShells": false,
        "shell": "N",
        "value": 0.0000583,
        "uncertainty": {
         "type": "symmetric",
         "value": 9e-7
        }
       },
       {
        "includesOuterShells": false,
        "shell": "O",
        "value": 0.00000869,
        "uncertainty": {
         "type": "symmetric",
         "value": 1.3e-7
        }
       },
       {
        "includesOuterShells": false,
        "shell": "P",
        "value": 5.49e-7,
        "uncertainty": {
         "type": "symmetric",
         "value": 8e-9
        }
       }
      ]
     },
     "comments": [
      {
       "type": "comment",
       "head": [
        {
         "name": "M"
        }
       ],
       "body": "\\ensuremath{\\alpha}(K)exp=0.0060 (1971Ma45)."
      }
     ]
    },
    {
     "energy": {
      "unit": "keV",
      "value": 1108,
      "uncertainty": {
       "type": "symmetric",
       "value": 1.2
      }
     },
     "initialLevelIndex": 140,
     "finalLevelIndex": 20
    }
   ],
   "band": 24,
   "comments": [
    {
     "type": "comment",
     "head": [
      {
       "name": "J"
      }
     ],
     "body": "196.41\\ensuremath{\\gamma} to 13/2\\ensuremath{^{+}}, 534.5\\ensuremath{\\gamma} M1(+E2) to 17/2\\ensuremath{^{+}}; band assignment."
    }
   ]
  },
  {
   "energy": {
    "unit": "keV",
    "value": 1925.7,
    "uncertainty": {
     "type": "symmetric",
     "value": 0.7
    }
   },
   "spinParity": {
    "values": [
     {
      "twoTimesSpin": 21,
      "isTentativeSpin": true,
      "parity": "-",
      "isTentativeParity": true
     }
    ]
   },
   "isStable": false,
   "flags": [
    "O"
   ],
   "crossReferences": [
    {
     "dataset": "(HI,XNG)"
    }
   ],
   "gammas": [
    {
     "energy": {
      "unit": "keV",
      "value": 254,
      "uncertainty": {
       "type": "symmetric",
       "value": 0.5
      }
     },
     "gammaIntensity": {
      "value": 100,
      "uncertainty": {
       "type": "symmetric",
       "value": 36
      }
     },
     "initialLevelIndex": 141,
     "finalLevelIndex": 103,
     "multipolarity": {
      "stringRepresentation": "[M1+E2]",
      "isMixedTransition": true,
      "spins": [
       {
        "spin": 1,
        "evaluatorInferred": true
       },
       {
        "spin": 2,
        "evaluatorInferred": true
       }
      ],
      "parity": "+"
     },
     "theoreticalInternalConversionCoefficients": {
      "totalValue": {
       "value": 0.268,
       "uncertainty": {
        "type": "unreported"
       }
      },
      "shellValues": [
       {
        "includesOuterShells": false,
        "shell": "K",
        "value": 0.225,
        "uncertainty": {
         "type": "symmetric",
         "value": 0.004
        }
       },
       {
        "includesOuterShells": false,
        "shell": "L",
        "value": 0.0342,
        "uncertainty": {
         "type": "symmetric",
         "value": 0.0006
        }
       },
       {
        "includesOuterShells": false,
        "shell": "M",
        "value": 0.00767,
        "uncertainty": {
         "type": "symmetric",
         "value": 0.00012
        }
       },
       {
        "includesOuterShells": false,
        "shell": "N",
        "value": 0.00181,
        "uncertainty": {
         "type": "symmetric",
         "value": 0.00003
        }
       },
       {
        "includesOuterShells": false,
        "shell": "O",
        "value": 0.000269,
        "uncertainty": {
         "type": "symmetric",
         "value": 0.000004
        }
       },
       {
        "includesOuterShells": false,
        "shell": "P",
        "value": 0.0000167,
        "uncertainty": {
         "type": "symmetric",
         "value": 3e-7
        }
       }
      ]
     },
     "flags": [
      "S"
     ]
    },
    {
     "energy": {
      "unit": "keV",
      "value": 487,
      "uncertainty": {
       "type": "symmetric",
       "value": 0.5
      }
     },
     "gammaIntensity": {
      "value": 36,
      "uncertainty": {
       "type": "limit",
       "limitType": "upper",
       "isInclusive": true
      }
     },
     "initialLevelIndex": 141,
     "finalLevelIndex": 69,
     "multipolarity": {
      "stringRepresentation": "[E2]",
      "spins": [
       {
        "spin": 2,
        "evaluatorInferred": true
       }
      ],
      "parity": "+"
     },
     "theoreticalInternalConversionCoefficients": {
      "totalValue": {
       "value": 0.0199,
       "uncertainty": {
        "type": "unreported"
       }
      },
      "shellValues": [
       {
        "includesOuterShells": false,
        "shell": "K",
        "value": 0.01546,
        "uncertainty": {
         "type": "symmetric",
         "value": 0.00022
        }
       },
       {
        "includesOuterShells": false,
        "shell": "L",
        "value": 0.0034,
        "uncertainty": {
         "type": "symmetric",
         "value": 0.00005
        }
       },
       {
        "includesOuterShells": false,
        "shell": "M",
        "value": 0.000792,
        "uncertainty": {
         "type": "symmetric",
         "value": 0.000012
        }
       },
       {
        "includesOuterShells": false,
        "shell": "N",
        "value": 0.000185,
        "uncertainty": {
         "type": "symmetric",
         "value": 0.000003
        }
       },
       {
        "includesOuterShells": false,
        "shell": "O",
        "value": 0.0000255,
        "uncertainty": {
         "type": "symmetric",
         "value": 4e-7
        }
       },
       {
        "includesOuterShells": false,
        "shell": "P",
        "value": 0.000001039,
        "uncertainty": {
         "type": "symmetric",
         "value": 1.5e-8
        }
       }
      ]
     },
     "flags": [
      "S"
     ]
    }
   ],
   "band": 15,
   "comments": [
    {
     "type": "comment",
     "head": [
      {
       "name": "J"
      }
     ],
     "body": "254.0\\ensuremath{\\gamma} to (19/2\\ensuremath{^{-}}); 487.0\\ensuremath{\\gamma} to (17/2\\ensuremath{^{-}}); band assignment."
    }
   ]
  },
  {
   "energy": {
    "unit": "keV",
    "value": 1935,
    "uncertainty": {
     "type": "symmetric",
     "value": 4
    }
   },
   "isStable": false,
   "flags": [
    "U"
   ],
   "crossReferences": [
    {
     "dataset": "176LU(D,P)"
    }
   ]
  },
  {
   "energy": {
    "unit": "keV",
    "value": 1942.6,
    "uncertainty": {
     "type": "unreported"
    }
   },
   "isStable": false,
   "flags": [
    "Z"
   ],
   "crossReferences": [
    {
     "dataset": "176LU(N,G) E=THERMAL"
    }
   ]
  },
  {
   "energy": {
    "unit": "keV",
    "value": 1948,
    "uncertainty": {
     "type": "symmetric",
     "value": 1.1
    }
   },
   "isStable": false,
   "flags": [
    "Z"
   ],
   "crossReferences": [
    {
     "dataset": "176LU(N,G) E=THERMAL"
    }
   ]
  },
  {
   "energy": {
    "unit": "keV",
    "value": 1954.6,
    "uncertainty": {
     "type": "symmetric",
     "value": 1
    }
   },
   "spinParity": {
    "values": [
     {
      "twoTimesSpin": 11,
      "isTentativeSpin": true,
      "parity": "+",
      "isTentativeParity": true
     }
    ]
   },
   "isStable": false,
   "flags": [
    "v"
   ],
   "crossReferences": [
    {
     "dataset": "176LU(N,G) E=THERMAL"
    }
   ],
   "gammas": [
    {
     "energy": {
      "unit": "keV",
      "value": 132.816,
      "uncertainty": {
       "type": "symmetric",
       "value": 0.006
      }
     },
     "gammaIntensity": {
      "value": 27,
      "uncertainty": {
       "type": "symmetric",
       "value": 7
      }
     },
     "initialLevelIndex": 145,
     "finalLevelIndex": 123
    },
    {
     "energy": {
      "unit": "keV",
      "value": 242.74,
      "uncertainty": {
       "type": "symmetric",
       "value": 0.05
      }
     },
     "gammaIntensity": {
      "value": 100,
      "uncertainty": {
       "type": "symmetric",
       "value": 32
      }
     },
     "initialLevelIndex": 145,
     "finalLevelIndex": 108
    }
   ],
   "band": 23,
   "comments": [
    {
     "type": "comment",
     "head": [
      {
       "name": "J"
      }
     ],
     "body": "132.816\\ensuremath{\\gamma} to (9/2\\ensuremath{^{+}}), 242.74\\ensuremath{\\gamma} to (7/2\\ensuremath{^{+}}); band assignment."
    }
   ]
  },
  {
   "energy": {
    "unit": "keV",
    "value": 1957.167,
    "uncertainty": {
     "type": "symmetric",
     "value": 0.022
    }
   },
   "spinParity": {
    "values": [
     {
      "twoTimesSpin": 11,
      "isTentativeSpin": true,
      "parity": "-",
      "isTentativeParity": true
     }
    ]
   },
   "isStable": false,
   "flags": [
    "H"
   ],
   "crossReferences": [
    {
     "dataset": "176LU(N,G) E=THERMAL"
    }
   ],
   "gammas": [
    {
     "energy": {
      "unit": "keV",
      "value": 1000.495,
      "uncertainty": {
       "type": "symmetric",
       "value": 0.022
      }
     },
     "gammaIntensity": {
      "value": 100,
      "uncertainty": {
       "type": "symmetric",
       "value": 17
      }
     },
     "initialLevelIndex": 146,
     "finalLevelIndex": 27
    },
    {
     "energy": {
      "unit": "keV",
      "value": 1146.2,
      "uncertainty": {
       "type": "symmetric",
       "value": 0.3
      }
     },
     "gammaIntensity": {
      "value": 67,
      "uncertainty": {
       "type": "symmetric",
       "value": 11
      }
     },
     "initialLevelIndex": 146,
     "finalLevelIndex": 19,
     "multipolarity": {
      "stringRepresentation": "M1(+E2)",
      "isMixedTransition": true,
      "spins": [
       {
        "spin": 1
       },
       {
        "spin": 2
       }
      ],
      "parity": "+"
     },
     "theoreticalInternalConversionCoefficients": {
      "totalValue": {
       "value": 0.00553,
       "uncertainty": {
        "type": "unreported"
       }
      },
      "pairCreationValue": {
       "value": 0.00000161,
       "uncertainty": {
        "type": "symmetric",
        "value": 3e-8
       }
      },
      "shellValues": [
       {
        "includesOuterShells": false,
        "shell": "K",
        "value": 0.00466,
        "uncertainty": {
         "type": "symmetric",
         "value": 0.00007
        }
       },
       {
        "includesOuterShells": false,
        "shell": "L",
        "value": 0.000675,
        "uncertainty": {
         "type": "symmetric",
         "value": 0.00001
        }
       },
       {
        "includesOuterShells": false,
        "shell": "M",
        "value": 0.0001508,
        "uncertainty": {
         "type": "symmetric",
         "value": 0.0000022
        }
       },
       {
        "includesOuterShells": false,
        "shell": "N",
        "value": 0.0000356,
        "uncertainty": {
         "type": "symmetric",
         "value": 5e-7
        }
       },
       {
        "includesOuterShells": false,
        "shell": "O",
        "value": 0.00000531,
        "uncertainty": {
         "type": "symmetric",
         "value": 8e-8
        }
       },
       {
        "includesOuterShells": false,
        "shell": "P",
        "value": 3.37e-7,
        "uncertainty": {
         "type": "symmetric",
         "value": 5e-9
        }
       }
      ]
     },
     "comments": [
      {
       "type": "comment",
       "head": [
        {
         "name": "M"
        }
       ],
       "body": "\\ensuremath{\\alpha}(K)exp=0.007 (1971Ma45)."
      }
     ]
    }
   ],
   "band": 5,
   "comments": [
    {
     "type": "comment",
     "head": [
      {
       "name": "J"
      }
     ],
     "body": "1146.2\\ensuremath{\\gamma} M1(+E2) to 9/2\\ensuremath{^{-}}; band assignment."
    }
   ]
  },
  {
   "energy": {
    "unit": "keV",
    "value": 1960.3,
    "uncertainty": {
     "type": "unreported"
    }
   },
   "isStable": false,
   "crossReferences": [
    {
     "dataset": "176LU(N,G) E=THERMAL"
    },
    {
     "assignment": "ambiguous",
     "dataset": "176YB(3HE,D),(A,T)",
     "level": 1964
    }
   ]
  },
  {
   "existence": "uncertain",
   "energy": {
    "unit": "keV",
    "value": 1966.9,
    "uncertainty": {
     "type": "unreported"
    }
   },
   "isStable": false,
   "crossReferences": [
    {
     "dataset": "176LU(N,G) E=THERMAL"
    },
    {
     "assignment": "ambiguous",
     "dataset": "176YB(3HE,D),(A,T)",
     "level": 1964
    }
   ]
  },
  {
   "energy": {
    "unit": "keV",
    "value": 1976.9,
    "uncertainty": {
     "type": "symmetric",
     "value": 0.7
    }
   },
   "spinParity": {
    "values": [
     {
      "twoTimesSpin": 25,
      "isTentativeSpin": true,
      "parity": "-",
      "isTentativeParity": true
     }
    ]
   },
   "isStable": false,
   "flags": [
    "E"
   ],
   "crossReferences": [
    {
     "dataset": "176LU(D,P)",
     "level": 1974
    },
    {
     "dataset": "(HI,XNG)"
    }
   ],
   "gammas": [
    {
     "energy": {
      "unit": "keV",
      "value": 434,
      "uncertainty": {
       "type": "symmetric",
       "value": 0.5
      }
     },
     "gammaIntensity": {
      "value": 100,
      "uncertainty": {
       "type": "unreported"
      }
     },
     "initialLevelIndex": 149,
     "finalLevelIndex": 81,
     "multipolarity": {
      "stringRepresentation": "[E2]",
      "spins": [
       {
        "spin": 2,
        "evaluatorInferred": true
       }
      ],
      "parity": "+"
     },
     "theoreticalInternalConversionCoefficients": {
      "totalValue": {
       "value": 0.0268,
       "uncertainty": {
        "type": "unreported"
       }
      },
      "shellValues": [
       {
        "includesOuterShells": false,
        "shell": "K",
        "value": 0.0205,
        "uncertainty": {
         "type": "symmetric",
         "value": 0.0003
        }
       },
       {
        "includesOuterShells": false,
        "shell": "L",
        "value": 0.00487,
        "uncertainty": {
         "type": "symmetric",
         "value": 0.00007
        }
       },
       {
        "includesOuterShells": false,
        "shell": "M",
        "value": 0.001143,
        "uncertainty": {
         "type": "symmetric",
         "value": 0.000017
        }
       },
       {
        "includesOuterShells": false,
        "shell": "N",
        "value": 0.000267,
        "uncertainty": {
         "type": "symmetric",
         "value": 0.000004
        }
       },
       {
        "includesOuterShells": false,
        "shell": "O",
        "value": 0.0000363,
        "uncertainty": {
         "type": "symmetric",
         "value": 6e-7
        }
       },
       {
        "includesOuterShells": false,
        "shell": "P",
        "value": 0.000001362,
        "uncertainty": {
         "type": "symmetric",
         "value": 2e-8
        }
       }
      ]
     },
     "flags": [
      "S"
     ]
    }
   ],
   "band": 4,
   "comments": [
    {
     "type": "comment",
     "head": [
      {
       "name": "J"
      }
     ],
     "body": "434.0\\ensuremath{\\gamma} to (21/2\\ensuremath{^{-}}); band assignment."
    }
   ]
  },
  {
   "energy": {
    "unit": "keV",
    "value": 1982.7,
    "uncertainty": {
     "type": "unreported"
    }
   },
   "isStable": false,
   "flags": [
    "Z"
   ],
   "crossReferences": [
    {
     "dataset": "176LU(N,G) E=THERMAL"
    }
   ]
  },
  {
   "energy": {
    "unit": "keV",
    "value": 1991,
    "uncertainty": {
     "type": "unreported"
    }
   },
   "isStable": false,
   "flags": [
    "Z"
   ],
   "crossReferences": [
    {
     "dataset": "176LU(N,G) E=THERMAL"
    }
   ]
  },
  {
   "energy": {
    "unit": "keV",
    "value": 1997.6,
    "uncertainty": {
     "type": "unreported"
    }
   },
   "isStable": false,
   "flags": [
    "Z"
   ],
   "crossReferences": [
    {
     "dataset": "176LU(N,G) E=THERMAL"
    },
    {
     "dataset": "176LU(D,P)",
     "level": 2000
    },
    {
     "dataset": "176YB(3HE,D),(A,T)",
     "level": 1995
    }
   ]
  },
  {
   "existence": "uncertain",
   "energy": {
    "unit": "keV",
    "value": 2006,
    "uncertainty": {
     "type": "unreported"
    }
   },
   "isStable": false,
   "flags": [
    "Z"
   ],
   "crossReferences": [
    {
     "dataset": "176LU(N,G) E=THERMAL"
    },
    {
     "assignment": "ambiguous",
     "dataset": "178HF(T,A)",
     "level": 2009
    }
   ]
  },
  {
   "existence": "uncertain",
   "energy": {
    "unit": "keV",
    "value": 2012.8,
    "uncertainty": {
     "type": "unreported"
    }
   },
   "isStable": false,
   "flags": [
    "Z"
   ],
   "crossReferences": [
    {
     "dataset": "176LU(N,G) E=THERMAL"
    },
    {
     "assignment": "ambiguous",
     "dataset": "178HF(T,A)",
     "level": 2009
    }
   ]
  },
  {
   "energy": {
    "unit": "keV",
    "value": 2019.7,
    "uncertainty": {
     "type": "unreported"
    }
   },
   "isStable": false,
   "flags": [
    "Z"
   ],
   "crossReferences": [
    {
     "dataset": "176LU(N,G) E=THERMAL"
    },
    {
     "dataset": "176LU(D,P)",
     "level": 2018
    }
   ]
  },
  {
   "energy": {
    "unit": "keV",
    "value": 2033.4,
    "uncertainty": {
     "type": "unreported"
    }
   },
   "isStable": false,
   "flags": [
    "Z"
   ],
   "crossReferences": [
    {
     "dataset": "176LU(N,G) E=THERMAL"
    },
    {
     "dataset": "176LU(D,P)",
     "level": 2037
    },
    {
     "dataset": "178HF(T,A)",
     "level": 2037
    }
   ]
  },
  {
   "energy": {
    "unit": "keV",
    "value": 2049.5,
    "uncertainty": {
     "type": "unreported"
    }
   },
   "isStable": false,
   "flags": [
    "Z"
   ],
   "crossReferences": [
    {
     "dataset": "176LU(N,G) E=THERMAL"
    },
    {
     "dataset": "176YB(3HE,D),(A,T)",
     "level": 2047
    }
   ]
  },
  {
   "energy": {
    "unit": "keV",
    "value": 2053.392,
    "uncertainty": {
     "type": "symmetric",
     "value": 0.013
    }
   },
   "spinParity": {
    "values": [
     {
      "twoTimesSpin": 13,
      "isTentativeSpin": true,
      "parity": "+",
      "isTentativeParity": true
     }
    ]
   },
   "isStable": false,
   "flags": [
    "x"
   ],
   "crossReferences": [
    {
     "dataset": "176LU(N,G) E=THERMAL"
    },
    {
     "dataset": "176LU(D,P)",
     "level": 2057
    }
   ],
   "gammas": [
    {
     "energy": {
      "unit": "keV",
      "value": 171.212,
      "uncertainty": {
       "type": "symmetric",
       "value": 0.011
      }
     },
     "gammaIntensity": {
      "value": 3,
      "uncertainty": {
       "type": "symmetric",
       "value": 0.5
      }
     },
     "initialLevelIndex": 158,
     "finalLevelIndex": 133
    },
    {
     "energy": {
      "unit": "keV",
      "value": 876.586,
      "uncertainty": {
       "type": "symmetric",
       "value": 0.013
      }
     },
     "gammaIntensity": {
      "value": 100,
      "uncertainty": {
       "type": "symmetric",
       "value": 11
      }
     },
     "initialLevelIndex": 158,
     "finalLevelIndex": 43
    },
    {
     "energy": {
      "unit": "keV",
      "value": 1237.15,
      "uncertainty": {
       "type": "symmetric",
       "value": 0.11
      }
     },
     "gammaIntensity": {
      "value": 55,
      "uncertainty": {
       "type": "symmetric",
       "value": 9
      }
     },
     "initialLevelIndex": 158,
     "finalLevelIndex": 20,
     "multipolarity": {
      "stringRepresentation": "M1(+E2)",
      "isMixedTransition": true,
      "spins": [
       {
        "spin": 1
       },
       {
        "spin": 2
       }
      ],
      "parity": "+"
     },
     "theoreticalInternalConversionCoefficients": {
      "totalValue": {
       "value": 0.0046,
       "uncertainty": {
        "type": "unreported"
       }
      },
      "pairCreationValue": {
       "value": 0.00001171,
       "uncertainty": {
        "type": "symmetric",
        "value": 1.7e-7
       }
      },
      "shellValues": [
       {
        "includesOuterShells": false,
        "shell": "K",
        "value": 0.00387,
        "uncertainty": {
         "type": "symmetric",
         "value": 0.00006
        }
       },
       {
        "includesOuterShells": false,
        "shell": "L",
        "value": 0.000559,
        "uncertainty": {
         "type": "symmetric",
         "value": 0.000008
        }
       },
       {
        "includesOuterShells": false,
        "shell": "M",
        "value": 0.0001249,
        "uncertainty": {
         "type": "symmetric",
         "value": 0.0000018
        }
       },
       {
        "includesOuterShells": false,
        "shell": "N",
        "value": 0.0000295,
        "uncertainty": {
         "type": "symmetric",
         "value": 5e-7
        }
       },
       {
        "includesOuterShells": false,
        "shell": "O",
        "value": 0.0000044,
        "uncertainty": {
         "type": "symmetric",
         "value": 7e-8
        }
       },
       {
        "includesOuterShells": false,
        "shell": "P",
        "value": 2.79e-7,
        "uncertainty": {
         "type": "symmetric",
         "value": 4e-9
        }
       }
      ]
     },
     "comments": [
      {
       "type": "comment",
       "head": [
        {
         "name": "M"
        }
       ],
       "body": "\\ensuremath{\\alpha}(K)exp=0.005 (1971Ma45)."
      }
     ]
    },
    {
     "energy": {
      "unit": "keV",
      "value": 1382,
      "uncertainty": {
       "type": "symmetric",
       "value": 1
      }
     },
     "gammaIntensity": {
      "value": 32,
      "uncertainty": {
       "type": "symmetric",
       "value": 9
      }
     },
     "initialLevelIndex": 158,
     "finalLevelIndex": 13
    }
   ],
   "band": 25,
   "comments": [
    {
     "type": "comment",
     "head": [
      {
       "name": "J"
      }
     ],
     "body": "876.586\\ensuremath{\\gamma} to 15/2\\ensuremath{^{+}}, 1237.15\\ensuremath{\\gamma} M1(+E2) to 11/2\\ensuremath{^{+}}; band assignment."
    }
   ]
  },
  {
   "energy": {
    "unit": "keV",
    "value": 2077,
    "uncertainty": {
     "type": "symmetric",
     "value": 5
    }
   },
   "isStable": false,
   "flags": [
    "T"
   ],
   "crossReferences": [
    {
     "dataset": "178HF(T,A)"
    }
   ]
  },
  {
   "energy": {
    "unit": "keV",
    "value": 2090.3,
    "uncertainty": {
     "type": "symmetric",
     "value": 0.7
    }
   },
   "spinParity": {
    "values": [
     {
      "twoTimesSpin": 15,
      "isTentativeSpin": true,
      "parity": "+",
      "isTentativeParity": true
     }
    ]
   },
   "isStable": false,
   "flags": [
    "u"
   ],
   "crossReferences": [
    {
     "dataset": "176LU(N,G) E=THERMAL"
    },
    {
     "dataset": "176LU(D,P)",
     "level": 2085
    }
   ],
   "gammas": [
    {
     "energy": {
      "unit": "keV",
      "value": 177.671,
      "uncertainty": {
       "type": "symmetric",
       "value": 0.011
      }
     },
     "gammaIntensity": {
      "value": 41,
      "uncertainty": {
       "type": "symmetric",
       "value": 18
      }
     },
     "initialLevelIndex": 160,
     "finalLevelIndex": 137
    },
    {
     "energy": {
      "unit": "keV",
      "value": 333.148,
      "uncertainty": {
       "type": "symmetric",
       "value": 0.004
      }
     },
     "gammaIntensity": {
      "value": 100,
      "uncertainty": {
       "type": "symmetric",
       "value": 12
      }
     },
     "initialLevelIndex": 160,
     "finalLevelIndex": 116
    }
   ],
   "band": 22,
   "comments": [
    {
     "type": "comment",
     "head": [
      {
       "name": "J"
      }
     ],
     "body": "177.671\\ensuremath{\\gamma} to (13/2\\ensuremath{^{+}}), 333.148\\ensuremath{\\gamma} to (11/2\\ensuremath{^{+}}); band assignment."
    }
   ]
  },
  {
   "existence": "uncertain",
   "energy": {
    "unit": "keV",
    "value": 2110.5,
    "uncertainty": {
     "type": "unreported"
    }
   },
   "spinParity": {
    "values": [
     {
      "twoTimesSpin": 13,
      "isTentativeSpin": true,
      "parity": "+",
      "isTentativeParity": true
     }
    ]
   },
   "isStable": false,
   "flags": [
    "v"
   ],
   "crossReferences": [
    {
     "dataset": "176LU(N,G) E=THERMAL"
    },
    {
     "dataset": "176LU(D,P)",
     "level": 2108
    }
   ],
   "gammas": [
    {
     "energy": {
      "unit": "keV",
      "value": 155.917,
      "uncertainty": {
       "type": "unreported"
      }
     },
     "gammaIntensity": {
      "value": 100,
      "uncertainty": {
       "type": "unreported"
      }
     },
     "initialLevelIndex": 161,
     "finalLevelIndex": 145
    }
   ],
   "band": 23,
   "comments": [
    {
     "type": "comment",
     "head": [
      {
       "name": "J"
      }
     ],
     "body": "177.671\\ensuremath{\\gamma} to (11/2\\ensuremath{^{+}}); band assignment"
    }
   ]
  },
  {
   "energy": {
    "unit": "keV",
    "value": 2116.9,
    "uncertainty": {
     "type": "unreported"
    }
   },
   "isStable": false,
   "flags": [
    "Z"
   ],
   "crossReferences": [
    {
     "dataset": "176LU(N,G) E=THERMAL"
    }
   ]
  },
  {
   "energy": {
    "unit": "keV",
    "value": 2134.4,
    "uncertainty": {
     "type": "unreported"
    }
   },
   "isStable": false,
   "flags": [
    "Z"
   ],
   "crossReferences": [
    {
     "dataset": "176LU(N,G) E=THERMAL"
    }
   ]
  },
  {
   "energy": {
    "unit": "keV",
    "value": 2142,
    "uncertainty": {
     "type": "symmetric",
     "value": 3
    }
   },
   "isStable": false,
   "flags": [
    "U"
   ],
   "crossReferences": [
    {
     "dataset": "176LU(D,P)"
    }
   ]
  },
  {
   "energy": {
    "unit": "keV",
    "value": 2155,
    "uncertainty": {
     "type": "symmetric",
     "value": 0.04
    }
   },
   "spinParity": {
    "values": [
     {
      "twoTimesSpin": 17,
      "isTentativeSpin": false,
      "parity": "+",
      "isTentativeParity": false
     }
    ]
   },
   "isStable": false,
   "flags": [
    "w"
   ],
   "crossReferences": [
    {
     "dataset": "176LU(N,G) E=THERMAL"
    }
   ],
   "gammas": [
    {
     "energy": {
      "unit": "keV",
      "value": 229.6,
      "uncertainty": {
       "type": "symmetric",
       "value": 0.03
      }
     },
     "gammaIntensity": {
      "value": 8,
      "uncertainty": {
       "type": "symmetric",
       "value": 3
      }
     },
     "initialLevelIndex": 165,
     "finalLevelIndex": 140
    },
    {
     "energy": {
      "unit": "keV",
      "value": 426.1,
      "uncertainty": {
       "type": "symmetric",
       "value": 0.2
      }
     },
     "gammaIntensity": {
      "value": 20,
      "uncertainty": {
       "type": "symmetric",
       "value": 5
      }
     },
     "initialLevelIndex": 165,
     "finalLevelIndex": 109,
     "multipolarity": {
      "stringRepresentation": "(E2)",
      "spins": [
       {
        "spin": 2
       }
      ],
      "parity": "+"
     },
     "theoreticalInternalConversionCoefficients": {
      "totalValue": {
       "value": 0.0282,
       "uncertainty": {
        "type": "unreported"
       }
      },
      "shellValues": [
       {
        "includesOuterShells": false,
        "shell": "K",
        "value": 0.0215,
        "uncertainty": {
         "type": "symmetric",
         "value": 0.0003
        }
       },
       {
        "includesOuterShells": false,
        "shell": "L",
        "value": 0.00517,
        "uncertainty": {
         "type": "symmetric",
         "value": 0.00008
        }
       },
       {
        "includesOuterShells": false,
        "shell": "M",
        "value": 0.001214,
        "uncertainty": {
         "type": "symmetric",
         "value": 0.000017
        }
       },
       {
        "includesOuterShells": false,
        "shell": "N",
        "value": 0.000283,
        "uncertainty": {
         "type": "symmetric",
         "value": 0.000004
        }
       },
       {
        "includesOuterShells": false,
        "shell": "O",
        "value": 0.0000384,
        "uncertainty": {
         "type": "symmetric",
         "value": 6e-7
        }
       },
       {
        "includesOuterShells": false,
        "shell": "P",
        "value": 0.000001423,
        "uncertainty": {
         "type": "symmetric",
         "value": 2e-8
        }
       }
      ]
     },
     "comments": [
      {
       "type": "comment",
       "head": [
        {
         "name": "M"
        }
       ],
       "body": "\\ensuremath{\\alpha}(K)exp=0.047 (1971Ma45)."
      }
     ]
    },
    {
     "energy": {
      "unit": "keV",
      "value": 977.4,
      "uncertainty": {
       "type": "symmetric",
       "value": 0.6
      }
     },
     "gammaIntensity": {
      "value": 100,
      "uncertainty": {
       "type": "symmetric",
       "value": 13
      }
     },
     "initialLevelIndex": 165,
     "finalLevelIndex": 43,
     "multipolarity": {
      "stringRepresentation": "M1(+E2)",
      "isMixedTransition": true,
      "spins": [
       {
        "spin": 1
       },
       {
        "spin": 2
       }
      ],
      "parity": "+"
     },
     "theoreticalInternalConversionCoefficients": {
      "totalValue": {
       "value": 0.00817,
       "uncertainty": {
        "type": "unreported"
       }
      },
      "shellValues": [
       {
        "includesOuterShells": false,
        "shell": "K",
        "value": 0.00688,
        "uncertainty": {
         "type": "symmetric",
         "value": 0.0001
        }
       },
       {
        "includesOuterShells": false,
        "shell": "L",
        "value": 0.001002,
        "uncertainty": {
         "type": "symmetric",
         "value": 0.000015
        }
       },
       {
        "includesOuterShells": false,
        "shell": "M",
        "value": 0.000224,
        "uncertainty": {
         "type": "symmetric",
         "value": 0.000004
        }
       },
       {
        "includesOuterShells": false,
        "shell": "N",
        "value": 0.0000529,
        "uncertainty": {
         "type": "symmetric",
         "value": 8e-7
        }
       },
       {
        "includesOuterShells": false,
        "shell": "O",
        "value": 0.00000788,
        "uncertainty": {
         "type": "symmetric",
         "value": 1.2e-7
        }
       },
       {
        "includesOuterShells": false,
        "shell": "P",
        "value": 4.99e-7,
        "uncertainty": {
         "type": "symmetric",
         "value": 7e-9
        }
       }
      ]
     },
     "comments": [
      {
       "type": "comment",
       "head": [
        {
         "name": "M"
        }
       ],
       "body": "\\ensuremath{\\alpha}(K)exp=0.0053 (1971Ma45)."
      }
     ]
    },
    {
     "energy": {
      "unit": "keV",
      "value": 1171.5,
      "uncertainty": {
       "type": "symmetric",
       "value": 1.2
      }
     },
     "gammaIntensity": {
      "value": 73,
      "uncertainty": {
       "type": "symmetric",
       "value": 28
      }
     },
     "initialLevelIndex": 165,
     "finalLevelIndex": 31,
     "multipolarity": {
      "stringRepresentation": "E2",
      "spins": [
       {
        "spin": 2
       }
      ],
      "parity": "+"
     },
     "theoreticalInternalConversionCoefficients": {
      "totalValue": {
       "value": 0.00284,
       "uncertainty": {
        "type": "unreported"
       }
      },
      "pairCreationValue": {
       "value": 0.00000253,
       "uncertainty": {
        "type": "symmetric",
        "value": 9e-8
       }
      },
      "shellValues": [
       {
        "includesOuterShells": false,
        "shell": "K",
        "value": 0.00237,
        "uncertainty": {
         "type": "symmetric",
         "value": 0.00004
        }
       },
       {
        "includesOuterShells": false,
        "shell": "L",
        "value": 0.000365,
        "uncertainty": {
         "type": "symmetric",
         "value": 0.000006
        }
       },
       {
        "includesOuterShells": false,
        "shell": "M",
        "value": 0.0000821,
        "uncertainty": {
         "type": "symmetric",
         "value": 0.0000012
        }
       },
       {
        "includesOuterShells": false,
        "shell": "N",
        "value": 0.0000193,
        "uncertainty": {
         "type": "symmetric",
         "value": 3e-7
        }
       },
       {
        "includesOuterShells": false,
        "shell": "O",
        "value": 0.00000282,
        "uncertainty": {
         "type": "symmetric",
         "value": 4e-8
        }
       },
       {
        "includesOuterShells": false,
        "shell": "P",
        "value": 1.635e-7,
        "uncertainty": {
         "type": "symmetric",
         "value": 2.4e-9
        }
       }
      ]
     },
     "comments": [
      {
       "type": "comment",
       "head": [
        {
         "name": "M"
        }
       ],
       "body": "\\ensuremath{\\alpha}(K)exp=0.0018 (1971Ma45)."
      }
     ]
    }
   ],
   "band": 24,
   "comments": [
    {
     "type": "comment",
     "head": [
      {
       "name": "J"
      }
     ],
     "body": "977.4\\ensuremath{\\gamma} M1(+E2) to 15/2\\ensuremath{^{+}}, 1171.5\\ensuremath{\\gamma} E2 to 13/2\\ensuremath{^{+}}; band assignment."
    }
   ]
  },
  {
   "energy": {
    "unit": "keV",
    "value": 2158,
    "uncertainty": {
     "type": "symmetric",
     "value": 5
    }
   },
   "isStable": false,
   "flags": [
    "T"
   ],
   "crossReferences": [
    {
     "dataset": "178HF(T,A)"
    },
    {
     "dataset": "176YB(3HE,D),(A,T)",
     "level": 2164
    }
   ]
  },
  {
   "energy": {
    "unit": "keV",
    "value": 2173.7,
    "uncertainty": {
     "type": "symmetric",
     "value": 0.6
    }
   },
   "spinParity": {
    "values": [
     {
      "twoTimesSpin": 27,
      "isTentativeSpin": true,
      "parity": "-",
      "isTentativeParity": true
     }
    ]
   },
   "isStable": false,
   "flags": [
    "B"
   ],
   "crossReferences": [
    {
     "dataset": "(HI,XNG)"
    }
   ],
   "gammas": [
    {
     "energy": {
      "unit": "keV",
      "value": 585,
      "uncertainty": {
       "type": "symmetric",
       "value": 0.5
      }
     },
     "gammaIntensity": {
      "value": 100,
      "uncertainty": {
       "type": "unreported"
      }
     },
     "initialLevelIndex": 167,
     "finalLevelIndex": 88,
     "multipolarity": {
      "stringRepresentation": "[E2]",
      "spins": [
       {
        "spin": 2,
        "evaluatorInferred": true
       }
      ],
      "parity": "+"
     },
     "theoreticalInternalConversionCoefficients": {
      "totalValue": {
       "value": 0.01263,
       "uncertainty": {
        "type": "unreported"
       }
      },
      "shellValues": [
       {
        "includesOuterShells": false,
        "shell": "K",
        "value": 0.01006,
        "uncertainty": {
         "type": "symmetric",
         "value": 0.00015
        }
       },
       {
        "includesOuterShells": false,
        "shell": "L",
        "value": 0.00199,
        "uncertainty": {
         "type": "symmetric",
         "value": 0.00003
        }
       },
       {
        "includesOuterShells": false,
        "shell": "M",
        "value": 0.000459,
        "uncertainty": {
         "type": "symmetric",
         "value": 0.000007
        }
       },
       {
        "includesOuterShells": false,
        "shell": "N",
        "value": 0.0001074,
        "uncertainty": {
         "type": "symmetric",
         "value": 0.0000016
        }
       },
       {
        "includesOuterShells": false,
        "shell": "O",
        "value": 0.00001502,
        "uncertainty": {
         "type": "symmetric",
         "value": 2.2e-7
        }
       },
       {
        "includesOuterShells": false,
        "shell": "P",
        "value": 6.85e-7,
        "uncertainty": {
         "type": "symmetric",
         "value": 1e-8
        }
       }
      ]
     },
     "flags": [
      "S"
     ]
    }
   ],
   "band": 1,
   "comments": [
    {
     "type": "comment",
     "head": [
      {
       "name": "J"
      }
     ],
     "body": "585.0\\ensuremath{\\gamma} to 23/2\\ensuremath{^{-}}; band assignment."
    }
   ]
  },
  {
   "energy": {
    "unit": "keV",
    "value": 2184.9,
    "uncertainty": {
     "type": "symmetric",
     "value": 0.5
    }
   },
   "spinParity": {
    "values": [
     {
      "twoTimesSpin": 31,
      "isTentativeSpin": false,
      "parity": "-",
      "isTentativeParity": false
     }
    ]
   },
   "isStable": false,
   "flags": [
    "F"
   ],
   "crossReferences": [
    {
     "dataset": "(HI,XNG)"
    }
   ],
   "gammas": [
    {
     "energy": {
      "unit": "keV",
      "value": 334.4,
      "uncertainty": {
       "type": "symmetric",
       "value": 0.5
      }
     },
     "gammaIntensity": {
      "value": 35.2,
      "uncertainty": {
       "type": "symmetric",
       "value": 2
      }
     },
     "initialLevelIndex": 168,
     "finalLevelIndex": 127,
     "flags": [
      "S"
     ]
    },
    {
     "energy": {
      "unit": "keV",
      "value": 648.3,
      "uncertainty": {
       "type": "symmetric",
       "value": 0.5
      }
     },
     "gammaIntensity": {
      "value": 100,
      "uncertainty": {
       "type": "unreported"
      }
     },
     "initialLevelIndex": 168,
     "finalLevelIndex": 79,
     "flags": [
      "S"
     ]
    }
   ],
   "band": 8,
   "comments": [
    {
     "type": "comment",
     "head": [
      {
       "name": "J"
      }
     ],
     "body": "334.4\\ensuremath{\\gamma} to 29/2\\ensuremath{^{-}}, 648.3\\ensuremath{\\gamma}\\hphantom{a}to 27/2\\ensuremath{^{-}}; band assignment."
    }
   ]
  },
  {
   "energy": {
    "unit": "keV",
    "value": 2185.2,
    "uncertainty": {
     "type": "symmetric",
     "value": 0.6
    }
   },
   "isStable": false,
   "crossReferences": [
    {
     "dataset": "176LU(D,P)"
    },
    {
     "dataset": "176YB(3HE,D),(A,T)",
     "level": 2184
    }
   ]
  },
  {
   "energy": {
    "unit": "keV",
    "value": 2200.5,
    "uncertainty": {
     "type": "symmetric",
     "value": 0.7
    }
   },
   "spinParity": {
    "values": [
     {
      "twoTimesSpin": 23,
      "isTentativeSpin": true,
      "parity": "-",
      "isTentativeParity": true
     }
    ]
   },
   "isStable": false,
   "flags": [
    "O"
   ],
   "crossReferences": [
    {
     "dataset": "(HI,XNG)"
    }
   ],
   "gammas": [
    {
     "energy": {
      "unit": "keV",
      "value": 274,
      "uncertainty": {
       "type": "symmetric",
       "value": 0.5
      }
     },
     "gammaIntensity": {
      "value": 100,
      "uncertainty": {
       "type": "symmetric",
       "value": 45
      }
     },
     "initialLevelIndex": 170,
     "finalLevelIndex": 141,
     "multipolarity": {
      "stringRepresentation": "[M1+E2]",
      "isMixedTransition": true,
      "spins": [
       {
        "spin": 1,
        "evaluatorInferred": true
       },
       {
        "spin": 2,
        "evaluatorInferred": true
       }
      ],
      "parity": "+"
     },
     "theoreticalInternalConversionCoefficients": {
      "totalValue": {
       "value": 0.218,
       "uncertainty": {
        "type": "symmetric",
        "value": 0.004
       }
      },
      "shellValues": [
       {
        "includesOuterShells": false,
        "shell": "K",
        "value": 0.183,
        "uncertainty": {
         "type": "symmetric",
         "value": 0.003
        }
       },
       {
        "includesOuterShells": false,
        "shell": "L",
        "value": 0.0278,
        "uncertainty": {
         "type": "symmetric",
         "value": 0.0005
        }
       },
       {
        "includesOuterShells": false,
        "shell": "M",
        "value": 0.00623,
        "uncertainty": {
         "type": "symmetric",
         "value": 0.0001
        }
       },
       {
        "includesOuterShells": false,
        "shell": "N",
        "value": 0.001472,
        "uncertainty": {
         "type": "symmetric",
         "value": 0.000022
        }
       },
       {
        "includesOuterShells": false,
        "shell": "O",
        "value": 0.000218,
        "uncertainty": {
         "type": "symmetric",
         "value": 0.000004
        }
       },
       {
        "includesOuterShells": false,
        "shell": "P",
        "value": 0.00001357,
        "uncertainty": {
         "type": "symmetric",
         "value": 2.1e-7
        }
       }
      ]
     },
     "flags": [
      "S"
     ]
    },
    {
     "energy": {
      "unit": "keV",
      "value": 530,
      "uncertainty": {
       "type": "symmetric",
       "value": 0.5
      }
     },
     "gammaIntensity": {
      "value": 45,
      "uncertainty": {
       "type": "limit",
       "limitType": "upper",
       "isInclusive": false
      }
     },
     "initialLevelIndex": 170,
     "finalLevelIndex": 103,
     "multipolarity": {
      "stringRepresentation": "[E2]",
      "spins": [
       {
        "spin": 2,
        "evaluatorInferred": true
       }
      ],
      "parity": "+"
     },
     "theoreticalInternalConversionCoefficients": {
      "totalValue": {
       "value": 0.01606,
       "uncertainty": {
        "type": "unreported"
       }
      },
      "shellValues": [
       {
        "includesOuterShells": false,
        "shell": "K",
        "value": 0.01264,
        "uncertainty": {
         "type": "symmetric",
         "value": 0.00018
        }
       },
       {
        "includesOuterShells": false,
        "shell": "L",
        "value": 0.00264,
        "uncertainty": {
         "type": "symmetric",
         "value": 0.00004
        }
       },
       {
        "includesOuterShells": false,
        "shell": "M",
        "value": 0.000612,
        "uncertainty": {
         "type": "symmetric",
         "value": 0.000009
        }
       },
       {
        "includesOuterShells": false,
        "shell": "N",
        "value": 0.0001432,
        "uncertainty": {
         "type": "symmetric",
         "value": 0.0000021
        }
       },
       {
        "includesOuterShells": false,
        "shell": "O",
        "value": 0.0000199,
        "uncertainty": {
         "type": "symmetric",
         "value": 3e-7
        }
       },
       {
        "includesOuterShells": false,
        "shell": "P",
        "value": 8.55e-7,
        "uncertainty": {
         "type": "symmetric",
         "value": 1.3e-8
        }
       }
      ]
     },
     "flags": [
      "S"
     ]
    }
   ],
   "band": 15,
   "comments": [
    {
     "type": "comment",
     "head": [
      {
       "name": "J"
      }
     ],
     "body": "274.0\\ensuremath{\\gamma} to (21/2\\ensuremath{^{-}}), 530.0\\ensuremath{\\gamma} to (19/2\\ensuremath{^{-}}); band assignment."
    }
   ]
  },
  {
   "energy": {
    "unit": "keV",
    "value": 2206.1,
    "uncertainty": {
     "type": "unreported"
    }
   },
   "isStable": false,
   "flags": [
    "Z"
   ],
   "crossReferences": [
    {
     "dataset": "176LU(N,G) E=THERMAL"
    },
    {
     "dataset": "176LU(D,P)",
     "level": 2209
    }
   ]
  },
  {
   "energy": {
    "unit": "keV",
    "value": 2228.9,
    "uncertainty": {
     "type": "symmetric",
     "value": 0.6
    }
   },
   "spinParity": {
    "values": [
     {
      "twoTimesSpin": 31,
      "isTentativeSpin": false,
      "parity": "+",
      "isTentativeParity": false
     }
    ]
   },
   "isStable": false,
   "flags": [
    "J"
   ],
   "crossReferences": [
    {
     "dataset": "(HI,XNG)"
    }
   ],
   "gammas": [
    {
     "energy": {
      "unit": "keV",
      "value": 321.4,
      "uncertainty": {
       "type": "symmetric",
       "value": 0.5
      }
     },
     "gammaIntensity": {
      "value": 100,
      "uncertainty": {
       "type": "unreported"
      }
     },
     "initialLevelIndex": 172,
     "finalLevelIndex": 136
    },
    {
     "energy": {
      "unit": "keV",
      "value": 623.1,
      "uncertainty": {
       "type": "symmetric",
       "value": 0.5
      }
     },
     "gammaIntensity": {
      "value": 42,
      "uncertainty": {
       "type": "symmetric",
       "value": 4
      }
     },
     "initialLevelIndex": 172,
     "finalLevelIndex": 91
    }
   ],
   "band": 9,
   "comments": [
    {
     "type": "comment",
     "head": [
      {
       "name": "J"
      }
     ],
     "body": "321.4\\ensuremath{\\gamma} to 29/2\\ensuremath{^{+}}, 623.1\\ensuremath{\\gamma} to 27/2\\ensuremath{^{+}}; band assignment."
    }
   ]
  },
  {
   "energy": {
    "unit": "keV",
    "value": 2230,
    "uncertainty": {
     "type": "symmetric",
     "value": 5
    }
   },
   "isStable": false,
   "flags": [
    "T"
   ],
   "crossReferences": [
    {
     "dataset": "178HF(T,A)"
    }
   ]
  },
  {
   "energy": {
    "unit": "keV",
    "value": 2248.001,
    "uncertainty": {
     "type": "symmetric",
     "value": 0.024
    }
   },
   "spinParity": {
    "values": [
     {
      "twoTimesSpin": 15,
      "isTentativeSpin": true,
      "parity": "+",
      "isTentativeParity": true
     }
    ]
   },
   "isStable": false,
   "flags": [
    "x"
   ],
   "crossReferences": [
    {
     "dataset": "176LU(N,G) E=THERMAL"
    },
    {
     "dataset": "176LU(D,P)",
     "level": 2241
    }
   ],
   "gammas": [
    {
     "energy": {
      "unit": "keV",
      "value": 194.612,
      "uncertainty": {
       "type": "symmetric",
       "value": 0.02
      }
     },
     "gammaIntensity": {
      "value": 55,
      "uncertainty": {
       "type": "symmetric",
       "value": 13
      }
     },
     "initialLevelIndex": 174,
     "finalLevelIndex": 158
    },
    {
     "energy": {
      "unit": "keV",
      "value": 856.9,
      "uncertainty": {
       "type": "symmetric",
       "value": 0.5
      }
     },
     "gammaIntensity": {
      "value": 100,
      "uncertainty": {
       "type": "symmetric",
       "value": 15
      }
     },
     "initialLevelIndex": 174,
     "finalLevelIndex": 66,
     "multipolarity": {
      "stringRepresentation": "M1(+E2)",
      "isMixedTransition": true,
      "spins": [
       {
        "spin": 1
       },
       {
        "spin": 2
       }
      ],
      "parity": "+"
     },
     "theoreticalInternalConversionCoefficients": {
      "totalValue": {
       "value": 0.01132,
       "uncertainty": {
        "type": "unreported"
       }
      },
      "shellValues": [
       {
        "includesOuterShells": false,
        "shell": "K",
        "value": 0.00952,
        "uncertainty": {
         "type": "symmetric",
         "value": 0.00014
        }
       },
       {
        "includesOuterShells": false,
        "shell": "L",
        "value": 0.001394,
        "uncertainty": {
         "type": "symmetric",
         "value": 0.00002
        }
       },
       {
        "includesOuterShells": false,
        "shell": "M",
        "value": 0.000312,
        "uncertainty": {
         "type": "symmetric",
         "value": 0.000005
        }
       },
       {
        "includesOuterShells": false,
        "shell": "N",
        "value": 0.0000736,
        "uncertainty": {
         "type": "symmetric",
         "value": 0.0000011
        }
       },
       {
        "includesOuterShells": false,
        "shell": "O",
        "value": 0.00001096,
        "uncertainty": {
         "type": "symmetric",
         "value": 1.6e-7
        }
       },
       {
        "includesOuterShells": false,
        "shell": "P",
        "value": 6.92e-7,
        "uncertainty": {
         "type": "symmetric",
         "value": 1e-8
        }
       }
      ]
     },
     "comments": [
      {
       "type": "comment",
       "head": [
        {
         "name": "E"
        }
       ],
       "body": "856.924 keV \\textit{15} in \\ensuremath{^{\\textnormal{176}}}Lu(n,\\ensuremath{\\gamma})"
      }
     ]
    },
    {
     "energy": {
      "unit": "keV",
      "value": 1262.2,
      "uncertainty": {
       "type": "symmetric",
       "value": 1.2
      }
     },
     "gammaIntensity": {
      "value": 84,
      "uncertainty": {
       "type": "symmetric",
       "value": 53
      }
     },
     "initialLevelIndex": 174,
     "finalLevelIndex": 31,
     "multipolarity": {
      "stringRepresentation": "M1(+E2)",
      "isMixedTransition": true,
      "spins": [
       {
        "spin": 1
       },
       {
        "spin": 2
       }
      ],
      "parity": "+"
     },
     "theoreticalInternalConversionCoefficients": {
      "totalValue": {
       "value": 0.00438,
       "uncertainty": {
        "type": "unreported"
       }
      },
      "pairCreationValue": {
       "value": 0.0000161,
       "uncertainty": {
        "type": "symmetric",
        "value": 4e-7
       }
      },
      "shellValues": [
       {
        "includesOuterShells": false,
        "shell": "K",
        "value": 0.00368,
        "uncertainty": {
         "type": "symmetric",
         "value": 0.00006
        }
       },
       {
        "includesOuterShells": false,
        "shell": "L",
        "value": 0.000532,
        "uncertainty": {
         "type": "symmetric",
         "value": 0.000008
        }
       },
       {
        "includesOuterShells": false,
        "shell": "M",
        "value": 0.0001189,
        "uncertainty": {
         "type": "symmetric",
         "value": 0.0000017
        }
       },
       {
        "includesOuterShells": false,
        "shell": "N",
        "value": 0.0000281,
        "uncertainty": {
         "type": "symmetric",
         "value": 4e-7
        }
       },
       {
        "includesOuterShells": false,
        "shell": "O",
        "value": 0.00000419,
        "uncertainty": {
         "type": "symmetric",
         "value": 6e-8
        }
       },
       {
        "includesOuterShells": false,
        "shell": "P",
        "value": 2.66e-7,
        "uncertainty": {
         "type": "symmetric",
         "value": 4e-9
        }
       }
      ]
     }
    },
    {
     "energy": {
      "unit": "keV",
      "value": 1429,
      "uncertainty": {
       "type": "symmetric",
       "value": 1.2
      }
     },
     "gammaIntensity": {
      "value": 63,
      "uncertainty": {
       "type": "symmetric",
       "value": 25
      }
     },
     "initialLevelIndex": 174,
     "finalLevelIndex": 20,
     "multipolarity": {
      "stringRepresentation": "(E2)",
      "spins": [
       {
        "spin": 2
       }
      ],
      "parity": "+"
     },
     "theoreticalInternalConversionCoefficients": {
      "totalValue": {
       "value": 0.00198,
       "uncertainty": {
        "type": "unreported"
       }
      },
      "pairCreationValue": {
       "value": 0.0000486,
       "uncertainty": {
        "type": "symmetric",
        "value": 8e-7
       }
      },
      "shellValues": [
       {
        "includesOuterShells": false,
        "shell": "K",
        "value": 0.001624,
        "uncertainty": {
         "type": "symmetric",
         "value": 0.000023
        }
       },
       {
        "includesOuterShells": false,
        "shell": "L",
        "value": 0.000241,
        "uncertainty": {
         "type": "symmetric",
         "value": 0.000004
        }
       },
       {
        "includesOuterShells": false,
        "shell": "M",
        "value": 0.000054,
        "uncertainty": {
         "type": "symmetric",
         "value": 8e-7
        }
       },
       {
        "includesOuterShells": false,
        "shell": "N",
        "value": 0.00001272,
        "uncertainty": {
         "type": "symmetric",
         "value": 1.8e-7
        }
       },
       {
        "includesOuterShells": false,
        "shell": "O",
        "value": 0.00000187,
        "uncertainty": {
         "type": "symmetric",
         "value": 3e-8
        }
       },
       {
        "includesOuterShells": false,
        "shell": "P",
        "value": 1.12e-7,
        "uncertainty": {
         "type": "symmetric",
         "value": 1.6e-9
        }
       }
      ]
     }
    }
   ],
   "band": 25,
   "comments": [
    {
     "type": "comment",
     "head": [
      {
       "name": "J"
      }
     ],
     "body": "857.8\\ensuremath{\\gamma} M1(+E2) to 17/2\\ensuremath{^{+}} level, 1262.2\\ensuremath{\\gamma} M1(+E2) to 13/2\\ensuremath{^{+}}, 1429.0\\ensuremath{\\gamma} (E2) to 11/2\\ensuremath{^{+}} level; band assignment."
    }
   ]
  },
  {
   "energy": {
    "unit": "keV",
    "value": 2278,
    "uncertainty": {
     "type": "unreported"
    }
   },
   "isStable": false,
   "flags": [
    "U"
   ],
   "crossReferences": [
    {
     "dataset": "176LU(D,P)"
    }
   ]
  },
  {
   "energy": {
    "unit": "keV",
    "value": 2294,
    "uncertainty": {
     "type": "symmetric",
     "value": 5
    }
   },
   "isStable": false,
   "flags": [
    "T"
   ],
   "crossReferences": [
    {
     "dataset": "178HF(T,A)"
    }
   ]
  },
  {
   "energy": {
    "unit": "keV",
    "value": 2345.3,
    "uncertainty": {
     "type": "symmetric",
     "value": 1.2
    }
   },
   "spinParity": {
    "values": [
     {
      "twoTimesSpin": 23,
      "isTentativeSpin": true,
      "parity": "+",
      "isTentativeParity": true
     }
    ]
   },
   "isStable": false,
   "flags": [
    "D"
   ],
   "crossReferences": [
    {
     "dataset": "(HI,XNG)"
    }
   ],
   "gammas": [
    {
     "energy": {
      "unit": "keV",
      "value": 541,
      "uncertainty": {
       "type": "symmetric",
       "value": 1
      }
     },
     "gammaIntensity": {
      "value": 100,
      "uncertainty": {
       "type": "unreported"
      }
     },
     "initialLevelIndex": 177,
     "finalLevelIndex": 120,
     "flags": [
      "S"
     ]
    }
   ],
   "band": 3,
   "comments": [
    {
     "type": "comment",
     "head": [
      {
       "name": "J"
      }
     ],
     "body": "541\\ensuremath{\\gamma} to (19/2\\ensuremath{^{+}})"
    }
   ]
  },
  {
   "energy": {
    "unit": "keV",
    "value": 2373,
    "uncertainty": {
     "type": "symmetric",
     "value": 3
    }
   },
   "isStable": false,
   "flags": [
    "U"
   ],
   "crossReferences": [
    {
     "dataset": "176LU(D,P)"
    }
   ]
  },
  {
   "energy": {
    "unit": "keV",
    "value": 2417,
    "uncertainty": {
     "type": "symmetric",
     "value": 4
    }
   },
   "isStable": false,
   "flags": [
    "U"
   ],
   "crossReferences": [
    {
     "dataset": "176LU(D,P)"
    }
   ]
  },
  {
   "energy": {
    "unit": "keV",
    "value": 2427,
    "uncertainty": {
     "type": "unreported"
    }
   },
   "isStable": false,
   "flags": [
    "R"
   ],
   "crossReferences": [
    {
     "dataset": "176YB(3HE,D),(A,T)"
    }
   ]
  },
  {
   "energy": {
    "unit": "keV",
    "value": 2497.9,
    "uncertainty": {
     "type": "symmetric",
     "value": 0.9
    }
   },
   "spinParity": {
    "values": [
     {
      "twoTimesSpin": 29,
      "isTentativeSpin": true,
      "parity": "-",
      "isTentativeParity": true
     }
    ]
   },
   "isStable": false,
   "flags": [
    "E"
   ],
   "crossReferences": [
    {
     "dataset": "(HI,XNG)"
    }
   ],
   "gammas": [
    {
     "energy": {
      "unit": "keV",
      "value": 521,
      "uncertainty": {
       "type": "symmetric",
       "value": 0.5
      }
     },
     "gammaIntensity": {
      "value": 100,
      "uncertainty": {
       "type": "unreported"
      }
     },
     "initialLevelIndex": 181,
     "finalLevelIndex": 149,
     "multipolarity": {
      "stringRepresentation": "[E2]",
      "spins": [
       {
        "spin": 2,
        "evaluatorInferred": true
       }
      ],
      "parity": "+"
     },
     "theoreticalInternalConversionCoefficients": {
      "totalValue": {
       "value": 0.01675,
       "uncertainty": {
        "type": "unreported"
       }
      },
      "shellValues": [
       {
        "includesOuterShells": false,
        "shell": "K",
        "value": 0.01316,
        "uncertainty": {
         "type": "symmetric",
         "value": 0.00019
        }
       },
       {
        "includesOuterShells": false,
        "shell": "L",
        "value": 0.00278,
        "uncertainty": {
         "type": "symmetric",
         "value": 0.00004
        }
       },
       {
        "includesOuterShells": false,
        "shell": "M",
        "value": 0.000645,
        "uncertainty": {
         "type": "symmetric",
         "value": 0.00001
        }
       },
       {
        "includesOuterShells": false,
        "shell": "N",
        "value": 0.0001507,
        "uncertainty": {
         "type": "symmetric",
         "value": 0.0000022
        }
       },
       {
        "includesOuterShells": false,
        "shell": "O",
        "value": 0.0000209,
        "uncertainty": {
         "type": "symmetric",
         "value": 3e-7
        }
       },
       {
        "includesOuterShells": false,
        "shell": "P",
        "value": 8.89e-7,
        "uncertainty": {
         "type": "symmetric",
         "value": 1.3e-8
        }
       }
      ]
     },
     "flags": [
      "S"
     ]
    }
   ],
   "band": 4,
   "comments": [
    {
     "type": "comment",
     "head": [
      {
       "name": "J"
      }
     ],
     "body": "521.0\\ensuremath{\\gamma} to (25/2\\ensuremath{^{-}}); band assignment."
    }
   ]
  },
  {
   "energy": {
    "unit": "keV",
    "value": 2539,
    "uncertainty": {
     "type": "symmetric",
     "value": 0.5
    }
   },
   "spinParity": {
    "values": [
     {
      "twoTimesSpin": 33,
      "isTentativeSpin": false,
      "parity": "-",
      "isTentativeParity": false
     }
    ]
   },
   "isStable": false,
   "flags": [
    "F"
   ],
   "crossReferences": [
    {
     "dataset": "(HI,XNG)"
    }
   ],
   "gammas": [
    {
     "energy": {
      "unit": "keV",
      "value": 353.8,
      "uncertainty": {
       "type": "symmetric",
       "value": 0.5
      }
     },
     "gammaIntensity": {
      "value": 23.5,
      "uncertainty": {
       "type": "symmetric",
       "value": 1.9
      }
     },
     "initialLevelIndex": 182,
     "finalLevelIndex": 168,
     "flags": [
      "S"
     ]
    },
    {
     "energy": {
      "unit": "keV",
      "value": 688.4,
      "uncertainty": {
       "type": "symmetric",
       "value": 0.5
      }
     },
     "gammaIntensity": {
      "value": 100,
      "uncertainty": {
       "type": "unreported"
      }
     },
     "initialLevelIndex": 182,
     "finalLevelIndex": 127,
     "flags": [
      "S"
     ]
    }
   ],
   "band": 8,
   "comments": [
    {
     "type": "comment",
     "head": [
      {
       "name": "J"
      }
     ],
     "body": "353.8\\ensuremath{\\gamma} to 31/2\\ensuremath{^{-}}, 688.4\\ensuremath{\\gamma} to 29/2\\ensuremath{^{-}}; band assignment."
    }
   ]
  },
  {
   "energy": {
    "unit": "keV",
    "value": 2605,
    "uncertainty": {
     "type": "symmetric",
     "value": 3
    }
   },
   "isStable": false,
   "flags": [
    "U"
   ],
   "crossReferences": [
    {
     "dataset": "176LU(D,P)"
    }
   ]
  },
  {
   "energy": {
    "unit": "keV",
    "value": 2637,
    "uncertainty": {
     "type": "symmetric",
     "value": 4
    }
   },
   "isStable": false,
   "flags": [
    "U"
   ],
   "crossReferences": [
    {
     "dataset": "176LU(D,P)"
    }
   ]
  },
  {
   "energy": {
    "unit": "keV",
    "value": 2668,
    "uncertainty": {
     "type": "symmetric",
     "value": 3
    }
   },
   "isStable": false,
   "flags": [
    "U"
   ],
   "crossReferences": [
    {
     "dataset": "176LU(D,P)"
    }
   ]
  },
  {
   "energy": {
    "unit": "keV",
    "value": 2771.7,
    "uncertainty": {
     "type": "symmetric",
     "value": 0.5
    }
   },
   "spinParity": {
    "values": [
     {
      "twoTimesSpin": 33,
      "isTentativeSpin": false,
      "parity": "+",
      "isTentativeParity": false
     }
    ]
   },
   "isStable": false,
   "halfLife": {
    "unit": "ns",
    "value": 625,
    "uncertainty": {
     "type": "symmetric",
     "value": 62
    }
   },
   "flags": [
    "P"
   ],
   "crossReferences": [
    {
     "dataset": "(HI,XNG)"
    }
   ],
   "gammas": [
    {
     "energy": {
      "unit": "keV",
      "value": 542.6,
      "uncertainty": {
       "type": "symmetric",
       "value": 0.5
      }
     },
     "gammaIntensity": {
      "value": 78,
      "uncertainty": {
       "type": "symmetric",
       "value": 7
      }
     },
     "initialLevelIndex": 186,
     "finalLevelIndex": 172,
     "multipolarity": {
      "stringRepresentation": "[M1]",
      "spins": [
       {
        "spin": 1,
        "evaluatorInferred": true
       }
      ],
      "parity": "+"
     },
     "theoreticalInternalConversionCoefficients": {
      "totalValue": {
       "value": 0.0359,
       "uncertainty": {
        "type": "unreported"
       }
      },
      "shellValues": [
       {
        "includesOuterShells": false,
        "shell": "K",
        "value": 0.0302,
        "uncertainty": {
         "type": "symmetric",
         "value": 0.0005
        }
       },
       {
        "includesOuterShells": false,
        "shell": "L",
        "value": 0.00449,
        "uncertainty": {
         "type": "symmetric",
         "value": 0.00007
        }
       },
       {
        "includesOuterShells": false,
        "shell": "M",
        "value": 0.001005,
        "uncertainty": {
         "type": "symmetric",
         "value": 0.000015
        }
       },
       {
        "includesOuterShells": false,
        "shell": "N",
        "value": 0.000237,
        "uncertainty": {
         "type": "symmetric",
         "value": 0.000004
        }
       },
       {
        "includesOuterShells": false,
        "shell": "O",
        "value": 0.0000353,
        "uncertainty": {
         "type": "symmetric",
         "value": 5e-7
        }
       },
       {
        "includesOuterShells": false,
        "shell": "P",
        "value": 0.00000221,
        "uncertainty": {
         "type": "symmetric",
         "value": 4e-8
        }
       }
      ]
     },
     "reducedTransitionProbabilities": [
      {
       "multipolarity": "M1",
       "unit": "W.u.",
       "value": 7.5e-8,
       "uncertainty": {
        "type": "symmetric",
        "value": 1e-8
       }
      }
     ],
     "flags": [
      "S"
     ]
    },
    {
     "energy": {
      "unit": "keV",
      "value": 586.5,
      "uncertainty": {
       "type": "symmetric",
       "value": 0.5
      }
     },
     "gammaIntensity": {
      "value": 49,
      "uncertainty": {
       "type": "symmetric",
       "value": 5
      }
     },
     "initialLevelIndex": 186,
     "finalLevelIndex": 168,
     "multipolarity": {
      "stringRepresentation": "[E1]",
      "spins": [
       {
        "spin": 1,
        "evaluatorInferred": true
       }
      ],
      "parity": "-"
     },
     "theoreticalInternalConversionCoefficients": {
      "totalValue": {
       "value": 0.00448,
       "uncertainty": {
        "type": "unreported"
       }
      },
      "shellValues": [
       {
        "includesOuterShells": false,
        "shell": "K",
        "value": 0.00379,
        "uncertainty": {
         "type": "symmetric",
         "value": 0.00006
        }
       },
       {
        "includesOuterShells": false,
        "shell": "L",
        "value": 0.00054,
        "uncertainty": {
         "type": "symmetric",
         "value": 0.000008
        }
       },
       {
        "includesOuterShells": false,
        "shell": "M",
        "value": 0.0001202,
        "uncertainty": {
         "type": "symmetric",
         "value": 0.0000017
        }
       },
       {
        "includesOuterShells": false,
        "shell": "N",
        "value": 0.0000282,
        "uncertainty": {
         "type": "symmetric",
         "value": 4e-7
        }
       },
       {
        "includesOuterShells": false,
        "shell": "O",
        "value": 0.00000413,
        "uncertainty": {
         "type": "symmetric",
         "value": 6e-8
        }
       },
       {
        "includesOuterShells": false,
        "shell": "P",
        "value": 2.45e-7,
        "uncertainty": {
         "type": "symmetric",
         "value": 4e-9
        }
       }
      ]
     },
     "reducedTransitionProbabilities": [
      {
       "multipolarity": "E1",
       "unit": "W.u.",
       "value": 3.6e-10,
       "uncertainty": {
        "type": "symmetric",
        "value": 5e-11
       }
      }
     ],
     "flags": [
      "S"
     ]
    },
    {
     "energy": {
      "unit": "keV",
      "value": 864.4,
      "uncertainty": {
       "type": "symmetric",
       "value": 0.5
      }
     },
     "gammaIntensity": {
      "value": 100,
      "uncertainty": {
       "type": "symmetric",
       "value": 10
      }
     },
     "initialLevelIndex": 186,
     "finalLevelIndex": 136,
     "multipolarity": {
      "stringRepresentation": "[E2]",
      "spins": [
       {
        "spin": 2,
        "evaluatorInferred": true
       }
      ],
      "parity": "+"
     },
     "theoreticalInternalConversionCoefficients": {
      "totalValue": {
       "value": 0.00526,
       "uncertainty": {
        "type": "unreported"
       }
      },
      "shellValues": [
       {
        "includesOuterShells": false,
        "shell": "K",
        "value": 0.00433,
        "uncertainty": {
         "type": "symmetric",
         "value": 0.00006
        }
       },
       {
        "includesOuterShells": false,
        "shell": "L",
        "value": 0.000724,
        "uncertainty": {
         "type": "symmetric",
         "value": 0.000011
        }
       },
       {
        "includesOuterShells": false,
        "shell": "M",
        "value": 0.0001645,
        "uncertainty": {
         "type": "symmetric",
         "value": 0.0000024
        }
       },
       {
        "includesOuterShells": false,
        "shell": "N",
        "value": 0.0000386,
        "uncertainty": {
         "type": "symmetric",
         "value": 6e-7
        }
       },
       {
        "includesOuterShells": false,
        "shell": "O",
        "value": 0.00000556,
        "uncertainty": {
         "type": "symmetric",
         "value": 8e-8
        }
       },
       {
        "includesOuterShells": false,
        "shell": "P",
        "value": 2.99e-7,
        "uncertainty": {
         "type": "symmetric",
         "value": 5e-9
        }
       }
      ]
     },
     "reducedTransitionProbabilities": [
      {
       "multipolarity": "E2",
       "unit": "W.u.",
       "value": 0.0000138,
       "uncertainty": {
        "type": "symmetric",
        "value": 0.0000017
       }
      }
     ],
     "flags": [
      "S"
     ]
    }
   ],
   "band": 10,
   "comments": [
    {
     "type": "comment",
     "head": [
      {
       "name": "J"
      }
     ],
     "body": "542.6\\ensuremath{\\gamma} to 31/2\\ensuremath{^{+}}, 864.4\\ensuremath{\\gamma} to 29/2\\ensuremath{^{+}}; proposed configuration"
    },
    {
     "type": "comment",
     "head": [
      {
       "name": "T"
      }
     ],
     "body": "From \\ensuremath{\\gamma}\\ensuremath{\\gamma}(t) in 2004Dr06"
    },
    {
     "type": "comment",
     "head": [
      {
       "name": "CONF"
      }
     ],
     "body": "\\ensuremath{K^{\\pi}}=33/2\\ensuremath{^{+}}, \\ensuremath{\\pi}\\ensuremath{^{\\textnormal{3}}}(1/2[411],7/2[404],9/2[514])\\ensuremath{\\otimes} \\ensuremath{\\nu}\\ensuremath{^{\\textnormal{2}}}(7/2[514],9/2[624])"
    }
   ]
  },
  {
   "energy": {
    "unit": "keV",
    "value": 2911.7,
    "uncertainty": {
     "type": "symmetric",
     "value": 0.6
    }
   },
   "spinParity": {
    "values": [
     {
      "twoTimesSpin": 35,
      "isTentativeSpin": false,
      "parity": "-",
      "isTentativeParity": false
     }
    ]
   },
   "isStable": false,
   "flags": [
    "F"
   ],
   "crossReferences": [
    {
     "dataset": "(HI,XNG)"
    }
   ],
   "gammas": [
    {
     "energy": {
      "unit": "keV",
      "value": 372.8,
      "uncertainty": {
       "type": "symmetric",
       "value": 0.5
      }
     },
     "gammaIntensity": {
      "value": 21,
      "uncertainty": {
       "type": "symmetric",
       "value": 3
      }
     },
     "initialLevelIndex": 187,
     "finalLevelIndex": 182,
     "flags": [
      "S"
     ]
    },
    {
     "energy": {
      "unit": "keV",
      "value": 726.8,
      "uncertainty": {
       "type": "symmetric",
       "value": 0.5
      }
     },
     "gammaIntensity": {
      "value": 100,
      "uncertainty": {
       "type": "unreported"
      }
     },
     "initialLevelIndex": 187,
     "finalLevelIndex": 168,
     "flags": [
      "S"
     ]
    }
   ],
   "band": 8,
   "comments": [
    {
     "type": "comment",
     "head": [
      {
       "name": "J"
      }
     ],
     "body": "372.8\\ensuremath{\\gamma} to 33/2\\ensuremath{^{-}}, 726.8\\ensuremath{\\gamma} to 31/2\\ensuremath{^{-}}; band assignment."
    }
   ]
  },
  {
   "energy": {
    "unit": "keV",
    "value": 3128,
    "uncertainty": {
     "type": "symmetric",
     "value": 0.6
    }
   },
   "spinParity": {
    "values": [
     {
      "twoTimesSpin": 35,
      "isTentativeSpin": false,
      "parity": "+",
      "isTentativeParity": false
     }
    ]
   },
   "isStable": false,
   "flags": [
    "P"
   ],
   "crossReferences": [
    {
     "dataset": "(HI,XNG)"
    }
   ],
   "gammas": [
    {
     "energy": {
      "unit": "keV",
      "value": 356.1,
      "uncertainty": {
       "type": "symmetric",
       "value": 0.5
      }
     },
     "gammaIntensity": {
      "value": 100,
      "uncertainty": {
       "type": "unreported"
      }
     },
     "initialLevelIndex": 188,
     "finalLevelIndex": 186,
     "flags": [
      "S"
     ]
    }
   ],
   "band": 10,
   "comments": [
    {
     "type": "comment",
     "head": [
      {
       "name": "J"
      }
     ],
     "body": "356.1\\ensuremath{\\gamma} to 33/2\\ensuremath{^{+}}; band assignment."
    }
   ]
  },
  {
   "energy": {
    "unit": "keV",
    "value": 3303.7,
    "uncertainty": {
     "type": "symmetric",
     "value": 0.6
    }
   },
   "spinParity": {
    "values": [
     {
      "twoTimesSpin": 37,
      "isTentativeSpin": false,
      "parity": "-",
      "isTentativeParity": false
     }
    ]
   },
   "isStable": false,
   "flags": [
    "F"
   ],
   "crossReferences": [
    {
     "dataset": "(HI,XNG)"
    }
   ],
   "gammas": [
    {
     "energy": {
      "unit": "keV",
      "value": 392.2,
      "uncertainty": {
       "type": "symmetric",
       "value": 0.5
      }
     },
     "gammaIntensity": {
      "value": 11.5,
      "uncertainty": {
       "type": "symmetric",
       "value": 2
      }
     },
     "initialLevelIndex": 189,
     "finalLevelIndex": 187,
     "flags": [
      "S"
     ]
    },
    {
     "energy": {
      "unit": "keV",
      "value": 764.6,
      "uncertainty": {
       "type": "symmetric",
       "value": 0.5
      }
     },
     "gammaIntensity": {
      "value": 100,
      "uncertainty": {
       "type": "unreported"
      }
     },
     "initialLevelIndex": 189,
     "finalLevelIndex": 182,
     "flags": [
      "S"
     ]
    }
   ],
   "band": 8,
   "comments": [
    {
     "type": "comment",
     "head": [
      {
       "name": "J"
      }
     ],
     "body": "392.2\\ensuremath{\\gamma} to 35/2\\ensuremath{^{-}}, 764.6\\ensuremath{\\gamma} to 33/2\\ensuremath{^{-}}; band assignment."
    }
   ]
  },
  {
   "energy": {
    "unit": "keV",
    "value": 3505.4,
    "uncertainty": {
     "type": "symmetric",
     "value": 0.8
    }
   },
   "spinParity": {
    "values": [
     {
      "twoTimesSpin": 37,
      "isTentativeSpin": false,
      "parity": "+",
      "isTentativeParity": false
     }
    ]
   },
   "isStable": false,
   "flags": [
    "P"
   ],
   "crossReferences": [
    {
     "dataset": "(HI,XNG)"
    }
   ],
   "gammas": [
    {
     "energy": {
      "unit": "keV",
      "value": 377.4,
      "uncertainty": {
       "type": "symmetric",
       "value": 0.5
      }
     },
     "gammaIntensity": {
      "value": 100,
      "uncertainty": {
       "type": "unreported"
      }
     },
     "initialLevelIndex": 190,
     "finalLevelIndex": 188,
     "flags": [
      "S"
     ]
    }
   ],
   "band": 10,
   "comments": [
    {
     "type": "comment",
     "head": [
      {
       "name": "J"
      }
     ],
     "body": "377.4\\ensuremath{\\gamma} to 35/2\\ensuremath{^{+}}; band assignment."
    }
   ]
  },
  {
   "energy": {
    "unit": "keV",
    "value": 3530.4,
    "uncertainty": {
     "type": "symmetric",
     "value": 0.6
    }
   },
   "spinParity": {
    "values": [
     {
      "twoTimesSpin": 39,
      "isTentativeSpin": false,
      "parity": "-",
      "isTentativeParity": false
     }
    ]
   },
   "isStable": false,
   "halfLife": {
    "unit": "us",
    "value": 6,
    "uncertainty": {
     "type": "symmetric",
     "value": 2
    }
   },
   "decayBranchingRatios": {
    "observed": [
     {
      "decayString": "IT",
      "decayMode": [
       {
        "radiation": "internalTransition",
        "multiplicity": 1
       }
      ],
      "value": 100,
      "uncertainty": {
       "type": "symmetric",
       "value": 0
      }
     }
    ]
   },
   "flags": [
    "Q"
   ],
   "crossReferences": [
    {
     "dataset": "(HI,XNG)"
    }
   ],
   "gammas": [
    {
     "energy": {
      "unit": "keV",
      "value": 226.7,
      "uncertainty": {
       "type": "symmetric",
       "value": 0.5
      }
     },
     "gammaIntensity": {
      "value": 61,
      "uncertainty": {
       "type": "symmetric",
       "value": 5
      }
     },
     "initialLevelIndex": 191,
     "finalLevelIndex": 189,
     "multipolarity": {
      "stringRepresentation": "M1",
      "spins": [
       {
        "spin": 1
       }
      ],
      "parity": "+"
     },
     "theoreticalInternalConversionCoefficients": {
      "totalValue": {
       "value": 0.367,
       "uncertainty": {
        "type": "unreported"
       }
      },
      "shellValues": [
       {
        "includesOuterShells": false,
        "shell": "K",
        "value": 0.306,
        "uncertainty": {
         "type": "symmetric",
         "value": 0.005
        }
       },
       {
        "includesOuterShells": false,
        "shell": "L",
        "value": 0.0467,
        "uncertainty": {
         "type": "symmetric",
         "value": 0.0008
        }
       },
       {
        "includesOuterShells": false,
        "shell": "M",
        "value": 0.0105,
        "uncertainty": {
         "type": "symmetric",
         "value": 0.00016
        }
       },
       {
        "includesOuterShells": false,
        "shell": "N",
        "value": 0.00248,
        "uncertainty": {
         "type": "symmetric",
         "value": 0.00004
        }
       },
       {
        "includesOuterShells": false,
        "shell": "O",
        "value": 0.000368,
        "uncertainty": {
         "type": "symmetric",
         "value": 0.000006
        }
       },
       {
        "includesOuterShells": false,
        "shell": "P",
        "value": 0.0000228,
        "uncertainty": {
         "type": "symmetric",
         "value": 4e-7
        }
       }
      ]
     },
     "reducedTransitionProbabilities": [
      {
       "multipolarity": "M1",
       "unit": "W.u.",
       "value": 8e-8,
       "uncertainty": {
        "type": "symmetric",
        "value": 3e-8
       }
      }
     ],
     "flags": [
      "S"
     ],
     "comments": [
      {
       "type": "comment",
       "head": [
        {
         "name": "M"
        }
       ],
       "body": "From \\ensuremath{\\alpha}(exp)=0.32 \\textit{6} (2004Dr06)"
      }
     ]
    },
    {
     "energy": {
      "unit": "keV",
      "value": 402.2,
      "uncertainty": {
       "type": "symmetric",
       "value": 0.5
      }
     },
     "gammaIntensity": {
      "value": 16,
      "uncertainty": {
       "type": "symmetric",
       "value": 3
      }
     },
     "initialLevelIndex": 191,
     "finalLevelIndex": 188,
     "multipolarity": {
      "stringRepresentation": "[M2]",
      "spins": [
       {
        "spin": 2,
        "evaluatorInferred": true
       }
      ],
      "parity": "-"
     },
     "theoreticalInternalConversionCoefficients": {
      "totalValue": {
       "value": 0.271,
       "uncertainty": {
        "type": "unreported"
       }
      },
      "shellValues": [
       {
        "includesOuterShells": false,
        "shell": "K",
        "value": 0.218,
        "uncertainty": {
         "type": "symmetric",
         "value": 0.004
        }
       },
       {
        "includesOuterShells": false,
        "shell": "L",
        "value": 0.0406,
        "uncertainty": {
         "type": "symmetric",
         "value": 0.0006
        }
       },
       {
        "includesOuterShells": false,
        "shell": "M",
        "value": 0.00937,
        "uncertainty": {
         "type": "symmetric",
         "value": 0.00014
        }
       },
       {
        "includesOuterShells": false,
        "shell": "N",
        "value": 0.00222,
        "uncertainty": {
         "type": "symmetric",
         "value": 0.00004
        }
       },
       {
        "includesOuterShells": false,
        "shell": "O",
        "value": 0.000326,
        "uncertainty": {
         "type": "symmetric",
         "value": 0.000005
        }
       },
       {
        "includesOuterShells": false,
        "shell": "P",
        "value": 0.0000192,
        "uncertainty": {
         "type": "symmetric",
         "value": 3e-7
        }
       }
      ]
     },
     "reducedTransitionProbabilities": [
      {
       "multipolarity": "M2",
       "unit": "W.u.",
       "value": 0.0011,
       "uncertainty": {
        "type": "symmetric",
        "value": 0.0004
       }
      }
     ],
     "flags": [
      "S"
     ]
    },
    {
     "energy": {
      "unit": "keV",
      "value": 618.7,
      "uncertainty": {
       "type": "symmetric",
       "value": 0.5
      }
     },
     "gammaIntensity": {
      "value": 100,
      "uncertainty": {
       "type": "symmetric",
       "value": 9
      }
     },
     "initialLevelIndex": 191,
     "finalLevelIndex": 187,
     "multipolarity": {
      "stringRepresentation": "[E2]",
      "spins": [
       {
        "spin": 2,
        "evaluatorInferred": true
       }
      ],
      "parity": "+"
     },
     "theoreticalInternalConversionCoefficients": {
      "totalValue": {
       "value": 0.01106,
       "uncertainty": {
        "type": "unreported"
       }
      },
      "shellValues": [
       {
        "includesOuterShells": false,
        "shell": "K",
        "value": 0.00886,
        "uncertainty": {
         "type": "symmetric",
         "value": 0.00013
        }
       },
       {
        "includesOuterShells": false,
        "shell": "L",
        "value": 0.001701,
        "uncertainty": {
         "type": "symmetric",
         "value": 0.000025
        }
       },
       {
        "includesOuterShells": false,
        "shell": "M",
        "value": 0.000392,
        "uncertainty": {
         "type": "symmetric",
         "value": 0.000006
        }
       },
       {
        "includesOuterShells": false,
        "shell": "N",
        "value": 0.0000917,
        "uncertainty": {
         "type": "symmetric",
         "value": 0.0000013
        }
       },
       {
        "includesOuterShells": false,
        "shell": "O",
        "value": 0.00001289,
        "uncertainty": {
         "type": "symmetric",
         "value": 1.9e-7
        }
       },
       {
        "includesOuterShells": false,
        "shell": "P",
        "value": 6.05e-7,
        "uncertainty": {
         "type": "symmetric",
         "value": 9e-9
        }
       }
      ]
     },
     "reducedTransitionProbabilities": [
      {
       "multipolarity": "E2",
       "unit": "W.u.",
       "value": 0.000008,
       "uncertainty": {
        "type": "symmetric",
        "value": 0.000003
       }
      }
     ],
     "flags": [
      "S"
     ]
    },
    {
     "energy": {
      "unit": "keV",
      "value": 758.8,
      "uncertainty": {
       "type": "symmetric",
       "value": 0.5
      }
     },
     "gammaIntensity": {
      "value": 27,
      "uncertainty": {
       "type": "symmetric",
       "value": 7
      }
     },
     "initialLevelIndex": 191,
     "finalLevelIndex": 186,
     "multipolarity": {
      "stringRepresentation": "[E3]",
      "spins": [
       {
        "spin": 3,
        "evaluatorInferred": true
       }
      ],
      "parity": "-"
     },
     "theoreticalInternalConversionCoefficients": {
      "totalValue": {
       "value": 0.01692,
       "uncertainty": {
        "type": "unreported"
       }
      },
      "shellValues": [
       {
        "includesOuterShells": false,
        "shell": "K",
        "value": 0.01283,
        "uncertainty": {
         "type": "symmetric",
         "value": 0.00018
        }
       },
       {
        "includesOuterShells": false,
        "shell": "L",
        "value": 0.00315,
        "uncertainty": {
         "type": "symmetric",
         "value": 0.00005
        }
       },
       {
        "includesOuterShells": false,
        "shell": "M",
        "value": 0.000742,
        "uncertainty": {
         "type": "symmetric",
         "value": 0.000011
        }
       },
       {
        "includesOuterShells": false,
        "shell": "N",
        "value": 0.000174,
        "uncertainty": {
         "type": "symmetric",
         "value": 0.0000025
        }
       },
       {
        "includesOuterShells": false,
        "shell": "O",
        "value": 0.000024,
        "uncertainty": {
         "type": "symmetric",
         "value": 4e-7
        }
       },
       {
        "includesOuterShells": false,
        "shell": "P",
        "value": 9.78e-7,
        "uncertainty": {
         "type": "symmetric",
         "value": 1.4e-8
        }
       }
      ]
     },
     "reducedTransitionProbabilities": [
      {
       "multipolarity": "E3",
       "unit": "W.u.",
       "value": 0.09,
       "uncertainty": {
        "type": "symmetric",
        "value": 0.04
       }
      }
     ],
     "flags": [
      "S"
     ]
    }
   ],
   "comments": [
    {
     "type": "comment",
     "head": [
      {
       "name": "J"
      }
     ],
     "body": "226.7\\ensuremath{\\gamma} M1 to 37/2\\ensuremath{^{-}}, 618.7\\ensuremath{\\gamma} to 35/2\\ensuremath{^{-}}; proposed configuration"
    },
    {
     "type": "comment",
     "head": [
      {
       "name": "T"
      }
     ],
     "body": "From \\ensuremath{\\gamma}\\ensuremath{\\gamma}(t), pulsed beam, private communication from G.D. Dracoulis (ANU), quoted in 2015Ko14. Others: \\ensuremath{\\beta}\\ensuremath{^{-}}-decaying, \\ensuremath{K^{\\pi}}=39/2\\ensuremath{^{-}} isomer (T\\ensuremath{_{\\textnormal{1/2}}}=7 m \\textit{2}) was proposed in 2004Al04, 2002AlZX, and 2002AlZY using a two isomers fit to the growth of \\ensuremath{\\gamma}-ray intensity as a function of time for transitions following the decay of the \\ensuremath{K^{\\pi}}=37/2\\ensuremath{^{-}} isomer (T\\ensuremath{_{\\textnormal{1/2}}}=51.4 m \\textit{5}) in \\ensuremath{^{\\textnormal{177}}}Hf. However, no such isomer was confirmed in 2004Dr06. The short lifetime of the \\ensuremath{K^{\\pi}}=39/2\\ensuremath{^{-}} isomer is inconsistent with the proposed \\ensuremath{\\beta}\\ensuremath{^{-}}-decaying branch in 2004Al04, 2002AlZX, and 2002AlZY."
    },
    {
     "type": "comment",
     "head": [
      {
       "name": "CONF"
      }
     ],
     "body": "\\ensuremath{K^{\\pi}}=39/2\\ensuremath{^{-}}, \\ensuremath{\\pi}\\ensuremath{^{\\textnormal{3}}}(7/2[404],7/2[523],9/2[514])\\ensuremath{\\otimes} \\ensuremath{\\nu}\\ensuremath{^{\\textnormal{2}}}(7/2[514],9/2[624])"
    }
   ]
  }
 ],
 "header": {
  "documentType": "adopted",
  "schemaVersion": "beta",
  "datasetName": "ADOPTED LEVELS, GAMMAS",
  "database": "ENSDF",
  "z": 71,
  "n": 106,
  "a": 177,
  "elementName": "Lutetium",
  "elementSymbol": "Lu",
  "history": {
   "fullEvaluation": {
    "cutoffDate": "2019-08-30",
    "publication": "NDS 159, 1 (2019)",
    "authors": [
     {
      "name": "F.G. KONDEV"
     }
    ]
   },
   "updates": [
    {
     "date": "2023-12-12",
     "authors": [
      {
       "name": "NNDC"
      }
     ],
     "comments": [
      "Automatically parsed w/ ensdf-parser on 2023-12-12"
     ]
    }
   ]
  }
 },
 "comments": {
  "flagComments": [
   {
    "appliesTo": "level",
    "type": "comment",
    "head": [
     {
      "name": "BAND",
      "flags": [
       "A"
      ]
     }
    ],
    "body": "K|p=7/2+, |p7/2[404]"
   },
   {
    "appliesTo": "level",
    "type": "comment",
    "head": [
     {
      "name": "BAND",
      "flags": [
       "B"
      ]
     }
    ],
    "body": "K|p=9/2-, |p9/2[514]"
   },
   {
    "appliesTo": "level",
    "type": "comment",
    "head": [
     {
      "name": "BAND",
      "flags": [
       "C"
      ]
     }
    ],
    "body": "K|p=5/2+, |p5/2[402]"
   },
   {
    "appliesTo": "level",
    "type": "comment",
    "head": [
     {
      "name": "BAND",
      "flags": [
       "D"
      ]
     }
    ],
    "body": "K|p=1/2+, |p1/2[411]"
   },
   {
    "appliesTo": "level",
    "type": "comment",
    "head": [
     {
      "name": "BAND",
      "flags": [
       "E"
      ]
     }
    ],
    "body": "K|p=1/2-, |p1/2[541]"
   },
   {
    "appliesTo": "level",
    "type": "comment",
    "head": [
     {
      "name": "BAND",
      "flags": [
       "H"
      ]
     }
    ],
    "body": "K|p=3/2-, |p3/2[532]"
   },
   {
    "appliesTo": "level",
    "type": "comment",
    "head": [
     {
      "name": "BAND",
      "flags": [
       "I"
      ]
     }
    ],
    "body": "K|p=1/2-, |p1/2[530]"
   },
   {
    "appliesTo": "level",
    "type": "comment",
    "head": [
     {
      "name": "BAND",
      "flags": [
       "G"
      ]
     }
    ],
    "body": "K|p=3/2+, |p3/2[411]"
   },
   {
    "appliesTo": "level",
    "type": "comment",
    "head": [
     {
      "name": "BAND",
      "flags": [
       "F"
      ]
     }
    ],
    "body": "K|p=23/2-, |p(7/2[404])~#|n{+2}(7/2[514],9/2[624])"
   },
   {
    "appliesTo": "level",
    "type": "comment",
    "head": [
     {
      "name": "BAND",
      "flags": [
       "J"
      ]
     }
    ],
    "body": "K|p=25/2+, |p(9/2[514])~#|n{+2}(7/2[514],9/2[624])"
   },
   {
    "appliesTo": "level",
    "type": "comment",
    "head": [
     {
      "name": "BAND",
      "flags": [
       "P"
      ]
     }
    ],
    "body": "K|p=33/2+, |p{+3}(1/2[411],7/2[404],9/2[514])~# |n{+2}(7/2[514],9/2[624])"
   },
   {
    "appliesTo": "level",
    "type": "comment",
    "head": [
     {
      "name": "E",
      "flags": [
       "Q"
      ]
     }
    ],
    "body": "\\ensuremath{K^{\\pi}}=39/2\\ensuremath{^{-}}, \\ensuremath{\\pi}\\ensuremath{^{\\textnormal{3}}}(7/2[404],7/2[523],9/2[514])\\ensuremath{\\otimes} \\ensuremath{\\nu}\\ensuremath{^{\\textnormal{2}}}(7/2[514],9/2[624])"
   },
   {
    "appliesTo": "level",
    "type": "comment",
    "head": [
     {
      "name": "BAND",
      "flags": [
       "K"
      ]
     }
    ],
    "body": "K|p=13/2+, |p7/2[404]~#|n{+2}(7/2[514],1/2[510])"
   },
   {
    "appliesTo": "level",
    "type": "comment",
    "head": [
     {
      "name": "BAND",
      "flags": [
       "L"
      ]
     }
    ],
    "body": "K|p=15/2+, |p7/2[404]~#|n{+2}(7/2[514],1/2[510])"
   },
   {
    "appliesTo": "level",
    "type": "comment",
    "head": [
     {
      "name": "BAND",
      "flags": [
       "M"
      ]
     }
    ],
    "body": "K|p=11/2+, 50% |p7/2[404] + K=2 GAMMA vibration phonon and 50% |p7/2[404]~#|n{+2}(7/2[514],3/2[512])"
   },
   {
    "appliesTo": "level",
    "type": "comment",
    "head": [
     {
      "name": "BAND",
      "flags": [
       "N"
      ]
     }
    ],
    "body": "K|p=11/2+. The assignment is tentative."
   },
   {
    "appliesTo": "level",
    "type": "comment",
    "head": [
     {
      "name": "BAND",
      "flags": [
       "O"
      ]
     }
    ],
    "body": "K|p=17/2-, |p(9/2[514])~#|n{+2}(1/2[510],7/2[514]) or |p(7/2[404])~#|n{+2}(1/2[510],9/2[624])."
   },
   {
    "appliesTo": "level",
    "type": "comment",
    "head": [
     {
      "name": "BAND",
      "flags": [
       "o"
      ]
     }
    ],
    "body": "K|p=13/2+, |p7/2[404]~#|n{+2}(7/2[514],1/2[521])"
   },
   {
    "appliesTo": "level",
    "type": "comment",
    "head": [
     {
      "name": "BAND",
      "flags": [
       "p"
      ]
     }
    ],
    "body": "K|p=15/2+, |p7/2[404]~#|n{+2}(7/2[514],1/2[521])"
   },
   {
    "appliesTo": "level",
    "type": "comment",
    "head": [
     {
      "name": "BAND",
      "flags": [
       "q"
      ]
     }
    ],
    "body": "K|p=11/2+, |p9/2[514]~#|n{+2}(7/2[514],9/2[624])"
   },
   {
    "appliesTo": "level",
    "type": "comment",
    "head": [
     {
      "name": "BAND",
      "flags": [
       "r"
      ]
     }
    ],
    "body": "K|p=7/2+, |p9/2[514]~#|n{+2}(7/2[514],9/2[624])"
   },
   {
    "appliesTo": "level",
    "type": "comment",
    "head": [
     {
      "name": "BAND",
      "flags": [
       "s"
      ]
     }
    ],
    "body": "K|p=11/2+. The assignment is tentative."
   },
   {
    "appliesTo": "level",
    "type": "comment",
    "head": [
     {
      "name": "BAND",
      "flags": [
       "t"
      ]
     }
    ],
    "body": "K|p=(3/2+), |p7/2[404] - K=2 GAMMA vibration phonon. The assignment is tentative."
   },
   {
    "appliesTo": "level",
    "type": "comment",
    "head": [
     {
      "name": "BAND",
      "flags": [
       "u"
      ]
     }
    ],
    "body": "K|p=(9/2+), |p1/2[411]~#|n{+2}(7/2[514],1/2[510]). The assignment is tentative."
   },
   {
    "appliesTo": "level",
    "type": "comment",
    "head": [
     {
      "name": "BAND",
      "flags": [
       "v"
      ]
     }
    ],
    "body": "K|p=(7/2+), |p1/2[411]~#|n{+2}(7/2[514],1/2[510]). The assignment is tentative."
   },
   {
    "appliesTo": "level",
    "type": "comment",
    "head": [
     {
      "name": "BAND",
      "flags": [
       "w"
      ]
     }
    ],
    "body": "K|p=(13/2+), |p5/2[402]~#|n{+2}(7/2[514],1/2[510]). The assignment is tentative."
   },
   {
    "appliesTo": "level",
    "type": "comment",
    "head": [
     {
      "name": "BAND",
      "flags": [
       "x"
      ]
     }
    ],
    "body": "K|p=(11/2+), |p5/2[402]~#|n{+2}(7/2[514],1/2[510]). The assignment is tentative."
   },
   {
    "appliesTo": "level",
    "type": "comment",
    "head": [
     {
      "name": "BAND",
      "flags": [
       "y"
      ]
     }
    ],
    "body": "K|p=9/2-, |p7/2[404]~#|n{+2}(7/2[514],9/2[624])"
   },
   {
    "appliesTo": "level",
    "type": "comment",
    "head": [
     {
      "name": "E",
      "flags": [
       "R"
      ]
     }
    ],
    "body": "From \\ensuremath{^{\\textnormal{176}}}Yb(\\ensuremath{^{\\textnormal{3}}}He,d),(\\ensuremath{\\alpha},t)."
   },
   {
    "appliesTo": "level",
    "type": "comment",
    "head": [
     {
      "name": "E",
      "flags": [
       "T"
      ]
     }
    ],
    "body": "From \\ensuremath{^{\\textnormal{178}}}Hf(t,\\ensuremath{\\alpha})."
   },
   {
    "appliesTo": "level",
    "type": "comment",
    "head": [
     {
      "name": "E",
      "flags": [
       "U"
      ]
     }
    ],
    "body": "From \\ensuremath{^{\\textnormal{176}}}Lu(d,p)."
   },
   {
    "appliesTo": "level",
    "type": "comment",
    "head": [
     {
      "name": "E",
      "flags": [
       "Z"
      ]
     }
    ],
    "body": "Populated by primary \\ensuremath{\\gamma}-ray transition in \\ensuremath{^{\\textnormal{176}}}Lu(n,\\ensuremath{\\gamma}) E=thermal"
   },
   {
    "appliesTo": "gamma",
    "type": "comment",
    "head": [
     {
      "name": "E",
      "flags": [
       "P"
      ]
     },
     {
      "name": "RI",
      "flags": [
       "P"
      ]
     }
    ],
    "body": "From \\ensuremath{^{\\textnormal{177}}}Lu IT decay (160.4 d)."
   },
   {
    "appliesTo": "gamma",
    "type": "comment",
    "head": [
     {
      "name": "E",
      "flags": [
       "Q"
      ]
     },
     {
      "name": "RI",
      "flags": [
       "Q"
      ]
     }
    ],
    "body": "From \\ensuremath{^{\\textnormal{177}}}Yb \\ensuremath{\\beta}\\ensuremath{^{-}} decay."
   },
   {
    "appliesTo": "gamma",
    "type": "comment",
    "head": [
     {
      "name": "E",
      "flags": [
       "S"
      ]
     },
     {
      "name": "RI",
      "flags": [
       "S"
      ]
     }
    ],
    "body": "From (HI,xn\\ensuremath{\\gamma})."
   },
   {
    "appliesTo": "gamma",
    "type": "comment",
    "head": [
     {
      "name": "E",
      "flags": [
       "X"
      ]
     }
    ],
    "body": "Value and uncertainty were rounded-off by the evaluator"
   }
  ],
  "generalComments": [
   {
    "appliesTo": "level",
    "type": "comment",
    "head": [
     {
      "name": "E"
     }
    ],
    "body": "From a least-squares fit to E\\ensuremath{\\gamma}, unless otherwise stated"
   },
   {
    "appliesTo": "gamma",
    "type": "comment",
    "head": [
     {
      "name": "E"
     },
     {
      "name": "RI"
     }
    ],
    "body": "From \\ensuremath{^{\\textnormal{176}}}Lu(n,\\ensuremath{\\gamma}) E=thermal, unless otherwise stated"
   },
   {
    "appliesTo": "gamma",
    "type": "comment",
    "head": [
     {
      "name": "M"
     }
    ],
    "body": "From ce in \\ensuremath{^{\\textnormal{176}}}Lu(n,\\ensuremath{\\gamma}) E=thermal (1996Pe05,1971Ma45), unless otherwise stated."
   },
   {
    "appliesTo": "gamma",
    "type": "document",
    "head": [
     {
      "name": "CC"
     }
    ],
    "body": "FROM BrIcc v2.3b (16-Dec-2014) 2008Ki07, \"Frozen Orbitals\" appr."
   },
   {
    "appliesTo": "gamma",
    "type": "comment",
    "head": [
     {
      "name": "MR"
     }
    ],
    "body": "If no value given it was assumed \\ensuremath{\\delta}=0.00 for E2/M1, \\ensuremath{\\delta}=1.00 for E3/M2 and \\ensuremath{\\delta}=0.10 for the other multipolarities"
   }
  ]
 },
 "bands": [
  "A",
  "B",
  "C",
  "D",
  "E",
  "H",
  "I",
  "G",
  "F",
  "J",
  "P",
  "K",
  "L",
  "M",
  "N",
  "O",
  "o",
  "p",
  "q",
  "r",
  "s",
  "t",
  "u",
  "v",
  "w",
  "x",
  "y"
 ]
}
;
