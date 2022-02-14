var APP_DATA = {
  "scenes": [
    {
      "id": "0-entrance",
      "name": "Entrance",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1344,
      "initialViewParameters": {
        "yaw": 0.1554515923541615,
        "pitch": 0.022185973788131363,
        "fov": 1.5252856979340437
      },
      "linkHotspots": [
        {
          "yaw": 1.4164113612684197,
          "pitch": 0.13069582156943937,
          "rotation": 0,
          "target": "1-path-1"
        }
      ],
      "infoHotspots": [
        {
          "yaw": -1.7892175117478608,
          "pitch": 0.24880022557031367,
          "title": "Entrance to land",
          "text": "<span style=\"font-size: 16px; background-color: rgba(103, 115, 131, 0.8);\">Entrance to land</span>"
        }
      ]
    },
    {
      "id": "1-path-1",
      "name": "path 1",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1344,
      "initialViewParameters": {
        "yaw": -3.116320711724777,
        "pitch": 0.16095732374738247,
        "fov": 1.5252856979340437
      },
      "linkHotspots": [
        {
          "yaw": 0.6977171734079697,
          "pitch": 0.090862228707282,
          "rotation": 0,
          "target": "0-entrance"
        },
        {
          "yaw": -2.28664286184177,
          "pitch": 0.11517902369404887,
          "rotation": 0,
          "target": "2-path-2"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "2-path-2",
      "name": "path 2",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1344,
      "initialViewParameters": {
        "yaw": -3.1253581612637973,
        "pitch": 0.35444628060939465,
        "fov": 1.5252856979340437
      },
      "linkHotspots": [
        {
          "yaw": 0.4055382167230146,
          "pitch": 0.13670650033562382,
          "rotation": 0,
          "target": "1-path-1"
        },
        {
          "yaw": -2.2434783577670725,
          "pitch": -0.030408262218299953,
          "rotation": 0,
          "target": "3-path-3"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "3-path-3",
      "name": "path 3",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1344,
      "initialViewParameters": {
        "yaw": -2.550470878659496,
        "pitch": 0.09645261431852425,
        "fov": 1.5252856979340437
      },
      "linkHotspots": [
        {
          "yaw": 1.5554834449861517,
          "pitch": 0.08068310846990912,
          "rotation": 0,
          "target": "2-path-2"
        },
        {
          "yaw": -1.271549650980523,
          "pitch": 0.05179701537534598,
          "rotation": 0,
          "target": "4-yard"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "4-yard",
      "name": "Yard",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1344,
      "initialViewParameters": {
        "yaw": -2.460355214460577,
        "pitch": 0.06330927144143672,
        "fov": 1.5252856979340437
      },
      "linkHotspots": [
        {
          "yaw": 1.014864518194564,
          "pitch": 0.12451230214698583,
          "rotation": 0,
          "target": "3-path-3"
        },
        {
          "yaw": -1.6275293062466716,
          "pitch": 0.006111944470353237,
          "rotation": 0,
          "target": "5-level-access"
        },
        {
          "yaw": -2.1913106333011925,
          "pitch": 0.020835345492413282,
          "rotation": 0,
          "target": "8-path-to-bridge"
        },
        {
          "yaw": -3.065734142369452,
          "pitch": 0.3499292137035894,
          "rotation": 2.356194490192345,
          "target": "9-watermill-door"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "5-level-access",
      "name": "Level access",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1344,
      "initialViewParameters": {
        "yaw": -2.0504205167951888,
        "pitch": -0.049067679121829855,
        "fov": 1.5252856979340437
      },
      "linkHotspots": [
        {
          "yaw": -3.1017170048376386,
          "pitch": -0.1264550624680041,
          "rotation": 0,
          "target": "6-path-to-barn"
        },
        {
          "yaw": -0.7539142199228568,
          "pitch": 0.5019689730615049,
          "rotation": 0,
          "target": "4-yard"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "6-path-to-barn",
      "name": "Path to barn",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1344,
      "initialViewParameters": {
        "yaw": 2.99898068101922,
        "pitch": 0.14768190492139865,
        "fov": 1.5252856979340437
      },
      "linkHotspots": [
        {
          "yaw": 1.852346350664531,
          "pitch": 0.2182521773433308,
          "rotation": 0,
          "target": "4-yard"
        },
        {
          "yaw": -1.4262363978079833,
          "pitch": 0.0541107079665899,
          "rotation": 0,
          "target": "7-barn"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "7-barn",
      "name": "Barn",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1344,
      "initialViewParameters": {
        "yaw": 2.8695620514952855,
        "pitch": -0.23295272477540152,
        "fov": 1.5252856979340437
      },
      "linkHotspots": [
        {
          "yaw": -2.351019077619478,
          "pitch": 0.22640786599625073,
          "rotation": 0,
          "target": "6-path-to-barn"
        }
      ],
      "infoHotspots": [
        {
          "yaw": -0.4968953687741955,
          "pitch": 0.3756009785216641,
          "title": "Bridge",
          "text": "bridge"
        }
      ]
    },
    {
      "id": "8-path-to-bridge",
      "name": "path to bridge",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1344,
      "initialViewParameters": {
        "yaw": -1.724649952686839,
        "pitch": 0.2056347232529987,
        "fov": 1.5252856979340437
      },
      "linkHotspots": [
        {
          "yaw": -1.6026332674314592,
          "pitch": 0.14212414829467335,
          "rotation": 0,
          "target": "4-yard"
        },
        {
          "yaw": -1.0481525890287529,
          "pitch": 0.36179715668009926,
          "rotation": 0,
          "target": "9-watermill-door"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "9-watermill-door",
      "name": "watermill door",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1344,
      "initialViewParameters": {
        "yaw": 0.9630410526011275,
        "pitch": 0.649641549418412,
        "fov": 1.5252856979340437
      },
      "linkHotspots": [
        {
          "yaw": 1.841283771369552,
          "pitch": -0.14444638805080423,
          "rotation": 0,
          "target": "8-path-to-bridge"
        },
        {
          "yaw": -2.3863831422281994,
          "pitch": -0.10319864424351444,
          "rotation": 0,
          "target": "4-yard"
        },
        {
          "yaw": 0.6469204084447391,
          "pitch": 0.7898663186817121,
          "rotation": 0,
          "target": "10-inside-watermill"
        },
        {
          "yaw": -1.413286639067275,
          "pitch": 0.23725916546770875,
          "rotation": 0,
          "target": "11-path-to-lower-land"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "10-inside-watermill",
      "name": "inside watermill",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1344,
      "initialViewParameters": {
        "yaw": 0.5461812704335234,
        "pitch": 0.07765090825846599,
        "fov": 1.5252856979340437
      },
      "linkHotspots": [
        {
          "yaw": 1.1726763249781431,
          "pitch": -0.20264573522543117,
          "rotation": 0,
          "target": "9-watermill-door"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "11-path-to-lower-land",
      "name": "path to lower land",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1344,
      "initialViewParameters": {
        "yaw": 1.8190004684874124,
        "pitch": 0.08957459117568689,
        "fov": 1.5252856979340437
      },
      "linkHotspots": [
        {
          "yaw": 2.3800167322170944,
          "pitch": -0.10152236989157792,
          "rotation": 0,
          "target": "9-watermill-door"
        },
        {
          "yaw": -0.9896835723114528,
          "pitch": 0.17602677918872978,
          "rotation": 0,
          "target": "12-lower-land-1"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "12-lower-land-1",
      "name": "lower land 1",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1344,
      "initialViewParameters": {
        "yaw": 2.1297454740527453,
        "pitch": 0.4287539538285081,
        "fov": 1.5252856979340437
      },
      "linkHotspots": [
        {
          "yaw": -1.8165100457359866,
          "pitch": -0.06747475866115593,
          "rotation": 0,
          "target": "11-path-to-lower-land"
        },
        {
          "yaw": -2.387871117099113,
          "pitch": 0.21491908010962568,
          "rotation": 0,
          "target": "29-below-watermill"
        },
        {
          "yaw": 0.9751687315447164,
          "pitch": 0.10748129946741969,
          "rotation": 0,
          "target": "13-lower-land-2"
        },
        {
          "yaw": 2.6552973071301347,
          "pitch": 0.6147640186911367,
          "rotation": 0,
          "target": "28-watermill-level-2"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "13-lower-land-2",
      "name": "lower land 2",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1344,
      "initialViewParameters": {
        "yaw": 2.4058627487632895,
        "pitch": 0.16516682553879747,
        "fov": 1.5252856979340437
      },
      "linkHotspots": [
        {
          "yaw": -1.482356822286711,
          "pitch": 0.12208273261603964,
          "rotation": 0,
          "target": "12-lower-land-1"
        },
        {
          "yaw": 1.5948153200924189,
          "pitch": 0.1931791751900711,
          "rotation": 0,
          "target": "14-lower-land-3"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "14-lower-land-3",
      "name": "lower land 3",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1344,
      "initialViewParameters": {
        "yaw": -1.087733240422624,
        "pitch": 0.13866233617582147,
        "fov": 1.5252856979340437
      },
      "linkHotspots": [
        {
          "yaw": -1.3840264354733787,
          "pitch": 0.1761282106896438,
          "rotation": 0,
          "target": "15-lower-land-4"
        },
        {
          "yaw": 1.6571370164201094,
          "pitch": 0.1446542582516379,
          "rotation": 0,
          "target": "14-lower-land-3"
        },
        {
          "yaw": -0.02087037720714946,
          "pitch": 0.531293008298233,
          "rotation": 0,
          "target": "26-watermill-level"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "15-lower-land-4",
      "name": "lower land 4",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1344,
      "initialViewParameters": {
        "yaw": 2.4908093540182215,
        "pitch": -0.11980724486914696,
        "fov": 1.5252856979340437
      },
      "linkHotspots": [
        {
          "yaw": 0.12355459156738036,
          "pitch": 0.4597034444049406,
          "rotation": 0,
          "target": "16-stream-path"
        },
        {
          "yaw": 1.1089531846258662,
          "pitch": 0.20304956160491905,
          "rotation": 0,
          "target": "14-lower-land-3"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "16-stream-path",
      "name": "stream path",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1344,
      "initialViewParameters": {
        "yaw": 0.8121096744053933,
        "pitch": 0.08401462889928268,
        "fov": 1.5252856979340437
      },
      "linkHotspots": [
        {
          "yaw": -0.13990448082556206,
          "pitch": 0.16087632004389008,
          "rotation": 0,
          "target": "26-watermill-level"
        },
        {
          "yaw": -1.358365561605293,
          "pitch": 0.5590022667630414,
          "rotation": 0,
          "target": "17-stream"
        },
        {
          "yaw": 1.4678332333368855,
          "pitch": 0.20280436386811473,
          "rotation": 0,
          "target": "15-lower-land-4"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "17-stream",
      "name": "stream",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1344,
      "initialViewParameters": {
        "yaw": 2.7513027924841706,
        "pitch": 0.1340416611532813,
        "fov": 1.5252856979340437
      },
      "linkHotspots": [
        {
          "yaw": 2.64761201475074,
          "pitch": 0.1778170118380622,
          "rotation": 0,
          "target": "18-stream-1"
        },
        {
          "yaw": -2.0176471071351614,
          "pitch": -0.4619382530109064,
          "rotation": 0,
          "target": "16-stream-path"
        }
      ],
      "infoHotspots": [
        {
          "yaw": 0.6047636330032571,
          "pitch": 0.42069226760677836,
          "title": "Continues to this side",
          "text": "<span style=\"font-size: 16px; background-color: rgba(103, 115, 131, 0.8);\">Continues to this side</span>"
        }
      ]
    },
    {
      "id": "18-stream-1",
      "name": "stream 1",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1344,
      "initialViewParameters": {
        "yaw": 0.13210668074239784,
        "pitch": 0.26900493218109034,
        "fov": 1.5252856979340437
      },
      "linkHotspots": [
        {
          "yaw": 0.9461730546745102,
          "pitch": 0.29946769296666886,
          "rotation": 0,
          "target": "19-stream-2"
        },
        {
          "yaw": -1.238297466616464,
          "pitch": 0.09645382433394545,
          "rotation": 0,
          "target": "18-stream-1"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "19-stream-2",
      "name": "stream 2",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1344,
      "initialViewParameters": {
        "yaw": -1.1470011153987265,
        "pitch": -0.019412727064617386,
        "fov": 1.5252856979340437
      },
      "linkHotspots": [
        {
          "yaw": -1.5205746770809547,
          "pitch": 0.06902990288925892,
          "rotation": 0,
          "target": "20-stream-3"
        },
        {
          "yaw": 1.8975988213765396,
          "pitch": 0.1156623710124709,
          "rotation": 0,
          "target": "19-stream-2"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "20-stream-3",
      "name": "stream 3",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1344,
      "initialViewParameters": {
        "yaw": -0.6617196161021592,
        "pitch": -0.0443719475762574,
        "fov": 1.5252856979340437
      },
      "linkHotspots": [
        {
          "yaw": -0.3495284261212497,
          "pitch": 0.22842715678149617,
          "rotation": 0,
          "target": "21-stream-4"
        },
        {
          "yaw": 2.9460291227384436,
          "pitch": 0.19475722230088977,
          "rotation": 0,
          "target": "20-stream-3"
        },
        {
          "yaw": 1.0896203566714497,
          "pitch": -0.5285722040236092,
          "rotation": 0,
          "target": "26-watermill-level"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "21-stream-4",
      "name": "stream 4",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1344,
      "initialViewParameters": {
        "yaw": 2.935867951763406,
        "pitch": 0.11807634086596863,
        "fov": 1.5252856979340437
      },
      "linkHotspots": [
        {
          "yaw": 0.6003356015100181,
          "pitch": 0.1411311157434305,
          "rotation": 0,
          "target": "20-stream-3"
        },
        {
          "yaw": 2.655788003339387,
          "pitch": -0.22108349026669316,
          "rotation": 0,
          "target": "22-across-stream"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "22-across-stream",
      "name": "across stream",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1344,
      "initialViewParameters": {
        "yaw": -0.5671882423732946,
        "pitch": -0.05823818119385393,
        "fov": 1.5252856979340437
      },
      "linkHotspots": [
        {
          "yaw": 0.7482512508557662,
          "pitch": -0.04175249422210392,
          "rotation": 0,
          "target": "26-watermill-level"
        },
        {
          "yaw": 1.0447372245008903,
          "pitch": 0.27407640884583984,
          "rotation": 0,
          "target": "20-stream-3"
        },
        {
          "yaw": 0.5183073259675588,
          "pitch": 0.4138174818945277,
          "rotation": 2.356194490192345,
          "target": "21-stream-4"
        },
        {
          "yaw": -0.9528666881961811,
          "pitch": 0.3436838877024595,
          "rotation": 0,
          "target": "23-stream-5"
        },
        {
          "yaw": -0.7038770614283081,
          "pitch": -0.2356289640943139,
          "rotation": 0,
          "target": "27-watermill-level-1"
        },
        {
          "yaw": 0.28347607149091303,
          "pitch": -0.3462051124584118,
          "rotation": 0,
          "target": "3-path-3"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "23-stream-5",
      "name": "stream 5",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1344,
      "initialViewParameters": {
        "yaw": 2.3197426195650728,
        "pitch": 0.23673442485290508,
        "fov": 1.5252856979340437
      },
      "linkHotspots": [
        {
          "yaw": 0.4900003650875391,
          "pitch": 0.039147950975984,
          "rotation": 0,
          "target": "22-across-stream"
        },
        {
          "yaw": 2.7819597709672887,
          "pitch": -0.10635380080844925,
          "rotation": 0,
          "target": "24-stream-6"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "24-stream-6",
      "name": "stream 6",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1344,
      "initialViewParameters": {
        "yaw": -0.7142370459515401,
        "pitch": -0.030505713958678626,
        "fov": 1.5252856979340437
      },
      "linkHotspots": [
        {
          "yaw": 2.5552474905795357,
          "pitch": 0.41314408942466585,
          "rotation": 0,
          "target": "23-stream-5"
        },
        {
          "yaw": -0.95250698318387,
          "pitch": 0.20491485164791712,
          "rotation": 0,
          "target": "25-stream-7"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "25-stream-7",
      "name": "stream 7",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1344,
      "initialViewParameters": {
        "yaw": 1.4014906451358318,
        "pitch": 0.28030607046372324,
        "fov": 1.5252856979340437
      },
      "linkHotspots": [
        {
          "yaw": 2.5775199163517444,
          "pitch": -0.49384354757658144,
          "rotation": 0,
          "target": "28-watermill-level-2"
        },
        {
          "yaw": -0.8973840409622547,
          "pitch": 0.22787397431778444,
          "rotation": 0,
          "target": "24-stream-6"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "26-watermill-level",
      "name": "watermill level",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1344,
      "initialViewParameters": {
        "yaw": -1.064053032250417,
        "pitch": 0.37364256065662715,
        "fov": 1.5252856979340437
      },
      "linkHotspots": [
        {
          "yaw": -0.13551688164942632,
          "pitch": 0.11169491513348184,
          "rotation": 0,
          "target": "27-watermill-level-1"
        },
        {
          "yaw": 1.7161533770783972,
          "pitch": -0.33045531222867197,
          "rotation": 0,
          "target": "15-lower-land-4"
        },
        {
          "yaw": 2.540720900092605,
          "pitch": 0.2067510830519339,
          "rotation": 0,
          "target": "16-stream-path"
        },
        {
          "yaw": -1.2472440677071646,
          "pitch": 0.3855727176035728,
          "rotation": 0,
          "target": "20-stream-3"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "27-watermill-level-1",
      "name": "watermill level 1",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1344,
      "initialViewParameters": {
        "yaw": 0.27930219618968266,
        "pitch": 0.23233681886391722,
        "fov": 1.5252856979340437
      },
      "linkHotspots": [
        {
          "yaw": -2.8682060323822203,
          "pitch": 0.09677788361560502,
          "rotation": 0,
          "target": "28-watermill-level-2"
        },
        {
          "yaw": -0.271617324388151,
          "pitch": 0.10335607899274457,
          "rotation": 0,
          "target": "26-watermill-level"
        },
        {
          "yaw": -1.6888180558950623,
          "pitch": -0.3470405150074729,
          "rotation": 0,
          "target": "12-lower-land-1"
        },
        {
          "yaw": 1.0439514900747326,
          "pitch": 0.5910151599336544,
          "rotation": 0,
          "target": "23-stream-5"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "28-watermill-level-2",
      "name": "watermill level 2",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1344,
      "initialViewParameters": {
        "yaw": -1.485398282561647,
        "pitch": -0.06413133048132025,
        "fov": 1.5252856979340437
      },
      "linkHotspots": [
        {
          "yaw": 0.14233893575697287,
          "pitch": -0.3327436501335921,
          "rotation": 0,
          "target": "12-lower-land-1"
        },
        {
          "yaw": -1.7370231701812777,
          "pitch": -0.03518109688327087,
          "rotation": 0,
          "target": "29-below-watermill"
        },
        {
          "yaw": 1.206736397501082,
          "pitch": 0.11865910057891504,
          "rotation": 0,
          "target": "27-watermill-level-1"
        },
        {
          "yaw": 2.8103286511052907,
          "pitch": 0.16743970001550323,
          "rotation": 2.356194490192345,
          "target": "25-stream-7"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "29-below-watermill",
      "name": "below watermill",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1344,
      "initialViewParameters": {
        "yaw": 1.0736606664295074,
        "pitch": 0.1719500234682041,
        "fov": 1.5252856979340437
      },
      "linkHotspots": [
        {
          "yaw": -1.587767550100553,
          "pitch": 0.1947943898655886,
          "rotation": 0,
          "target": "28-watermill-level-2"
        }
      ],
      "infoHotspots": []
    }
  ],
  "name": "Project Title",
  "settings": {
    "mouseViewMode": "drag",
    "autorotateEnabled": true,
    "fullscreenButton": false,
    "viewControlButtons": false
  }
};
