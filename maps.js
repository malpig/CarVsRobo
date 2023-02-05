function inimap()
{
    wmap.treeArea.splice(0,wmap.treeArea.length);
    iniCircles();
    rect.splice(0,rect.length);
    robo.splice(0,robo.length);
    bolt.splice(0,bolt.length);
    document.getElementById("res").innerHTML=`reset level ${levelNum}`;
    if(levelNum==0)
    {
        wmap.carx0=50;
        wmap.cary0=500;
        wmap.cardir0=0;
        wmap.robox0=[];
        wmap.roboy0=[];
        wmap.goalx=2350;
        wmap.goaly=500;
        wmap.wall=
        [
            {type:'L', pos:0, min:450, max:550},
            {type:'L', pos:100, min:0, max:450},
            {type:'L', pos:100, min:550, max:1000},
            {type:'L', pos:1200, min:0, max:450},
            {type:'L', pos:1200, min:550, max:1000},
            {type:'R', pos:2400, min:450, max:550},
            {type:'R', pos:1100, min:0, max:450},
            {type:'R', pos:1100, min:550, max:1000},
            {type:'R', pos:2200, min:0, max:450},
            {type:'R', pos:2200, min:550, max:1000},
            {type:'T', pos:0, min:100, max:1100},
            {type:'T', pos:0, min:1200, max:2200},
            {type:'T', pos:450, min:0, max:100},
            {type:'T', pos:450, min:1100, max:1200},
            {type:'T', pos:450, min:2200, max:2400},
            {type:'B', pos:1000, min:100, max:1100},
            {type:'B', pos:1000, min:1200, max:2200},
            {type:'B', pos:550, min:0, max:100},
            {type:'B', pos:550, min:1100, max:1200},
            {type:'B', pos:550, min:2200, max:2400}
        ];
        wmap.treeArea=
        [
            {xmin:200, ymin:50, width:800, height:900, num:10},
            {xmin:1300, ymin:50, width:800, height:900, num:10}
        ];
        iniCircles();
        wmap.treeOrHut=0;

        return false;
    }

    if(levelNum==1)
    {
        wmap.carx0=50;
        wmap.cary0=500;
        wmap.cardir0=0;
        wmap.robox0=[2250];
        wmap.roboy0=[500];
        wmap.goalx=2350;
        wmap.goaly=500;
        wmap.wall=
        [
            {type:'L', pos:0, min:450, max:550},
            {type:'L', pos:100, min:0, max:450},
            {type:'L', pos:100, min:550, max:1000},
            {type:'L', pos:1200, min:0, max:450},
            {type:'L', pos:1200, min:550, max:1000},
            {type:'R', pos:2400, min:450, max:550},
            {type:'R', pos:1100, min:0, max:450},
            {type:'R', pos:1100, min:550, max:1000},
            {type:'R', pos:2200, min:0, max:450},
            {type:'R', pos:2200, min:550, max:1000},
            {type:'T', pos:0, min:100, max:1100},
            {type:'T', pos:0, min:1200, max:2200},
            {type:'T', pos:450, min:0, max:100},
            {type:'T', pos:450, min:1100, max:1200},
            {type:'T', pos:450, min:2200, max:2400},
            {type:'B', pos:1000, min:100, max:1100},
            {type:'B', pos:1000, min:1200, max:2200},
            {type:'B', pos:550, min:0, max:100},
            {type:'B', pos:550, min:1100, max:1200},
            {type:'B', pos:550, min:2200, max:2400}
        ];
        wmap.treeArea=
        [
            {xmin:200, ymin:50, width:800, height:900, num:10},
            {xmin:1300, ymin:50, width:800, height:900, num:10}
        ];
        iniCircles();
        wmap.treeOrHut=0;

        robo=[{x:wmap.robox0[0], y:wmap.roboy0[0], vx:0.0, vy:0.0, a:0.05, dir:Math.random()*6.28, width:35, height:35,
                r:17.5, rsq:306.25, fireTime:0, fireSpace:200, reloadTime:2000, snoozing:false, notActive:0, type:0}];
        return false;
    }

    if(levelNum==2)
    {
        wmap.carx0=50;
        wmap.cary0=2050;
        wmap.cardir0=0.0;
        wmap.robox0=[50,1050];
        wmap.roboy0=[1050,50];
        wmap.goalx=2070;
        wmap.goaly=30;
        wmap.wall=
        [
            {type:'B', pos:2050, min:100, max:1050},
            {type:'R', pos:1050, min:1100, max:2050},
            {type:'B', pos:1100, min:1050, max:1100},
            {type:'R', pos:1100, min:1050, max:1100},
            {type:'B', pos:1050, min:1100, max:2050},
            {type:'R', pos:2050, min:100, max:1050},
            {type:'B', pos:100, min:2050, max:2100},
            {type:'R', pos:2100, min:0, max:100},
            {type:'T', pos:0, min:2000, max:2100},
            {type:'L', pos:2000, min:0, max:50},
            {type:'T', pos:50, min:1100, max:2000},
            {type:'R', pos:1100, min:0, max:50},
            {type:'T', pos:0, min:1000, max:1100},
            {type:'L', pos:1000, min:0, max:100},
            {type:'B', pos:100, min:1000, max:1050},
            {type:'L', pos:1050, min:100, max:1000},
            {type:'T', pos:1000, min:1000, max:1050},
            {type:'L', pos:1000, min:1000, max:1050},
            {type:'T', pos:1050, min:100, max:1000},
            {type:'R', pos:100, min:1000, max:1050},
            {type:'T', pos:1000, min:0, max:100},
            {type:'L', pos:0, min:1000, max:1100},
            {type:'B', pos:1100, min:0, max:50},
            {type:'L', pos:50, min:1100, max:2000},
            {type:'T',pos:2000, min:0, max:50},
            {type:'L',pos:0, min:2000, max:2100},
            {type:'B',pos:2100, min:0, max:100},
            {type:'R',pos:100, min:2050, max:2100}
        ];
        wmap.treeArea=
        [
            {xmin:150, ymin:1150, width:800, height:800, num:15},
            {xmin:1150, ymin:150, width:800, height:800, num:15}
        ];
        iniCircles();
        wmap.treeOrHut=0;

        robo=
        [
              {x:wmap.robox0[0], y:wmap.roboy0[0], vx:0.0, vy:0.0, a:0.05, dir:Math.random()*6.28, width:35, height:35,
                r:17.5, rsq:306.25, fireTime:0, fireSpace:200, reloadTime:2000, snoozing:false, notActive:0, type:0},
              {x:wmap.robox0[1], y:wmap.roboy0[1], vx:0.0, vy:0.0, a:0.05, dir:Math.random()*6.28, width:35, height:35,
                    r:17.5, rsq:306.25, fireTime:0, fireSpace:200, reloadTime:2000, snoozing:false, notActive:0, type:1}
        ];
        return false;

    }

    if(levelNum==3)
    {
        wmap.carx0=600;
        wmap.cary0=1750;
        wmap.cardir0=4.71;
        wmap.robox0=[50,1150];
        wmap.roboy0=[50,50];
        wmap.goalx=600;
        wmap.goaly=50;
        wmap.wall=
        [
            {type:'L', pos:0, min:0, max:100},
            {type:'L', pos:100, min:100, max:200},
            {type:'L', pos:200, min:200, max:1700},
            {type:'L', pos:550, min:1700, max:1800},
            {type:'R', pos:650, min:1700, max:1800},
            {type:'R', pos:1000, min:200, max:1700},
            {type:'R', pos:1100, min:100, max:200},
            {type:'R', pos:1200, min:0, max:100},
            {type:'T', pos:0, min:0, max:1200},
            {type:'B', pos:100, min:0, max:100},
            {type:'B', pos:200, min:100, max:200},
            {type:'B', pos:1700, min:200, max:550},
            {type:'B', pos:1800, min:550, max:650},
            {type:'B', pos:1700, min:650, max:1000},
            {type:'B', pos:200, min:1000, max:1100},
            {type:'B', pos:100, min:1100, max:1200},
            {type:'L', pos:1020, min:100, max:120},
            {type:'R', pos:180, min:100, max:120},
            {type:'T', pos:120, min:180, max:1020},
            {type:'B', pos:100, min:180, max:1020},
        ];
        wmap.treeArea=
        [
            {xmin:300, ymin:300, width:600, height:1300, num:15}
        ];
        iniCircles();
        wmap.treeOrHut=0;

        robo=
        [
              {x:wmap.robox0[0], y:wmap.roboy0[0], vx:0.0, vy:0.0, a:0.05, dir:Math.random()*6.28, width:35, height:35,
                r:17.5, rsq:306.25, fireTime:0, fireSpace:200, reloadTime:2000,  snoozing:false, notActive:0,type:0},
              {x:wmap.robox0[1], y:wmap.roboy0[1], vx:0.0, vy:0.0, a:0.05, dir:Math.random()*6.28, width:35, height:35,
                    r:17.5, rsq:306.25, fireTime:0, fireSpace:200, reloadTime:2000,  snoozing:false, notActive:0,type:1}
        ];
        return false;
    }

    if(levelNum==4)
    {
        wmap.carx0=150;
        wmap.cary0=1070;
        wmap.cardir0=4.71;
        wmap.robox0=[930,950,830];
        wmap.roboy0=[170,1450,1070];
        wmap.goalx=270;
        wmap.goaly=1070;
        wmap.wall=
        [
            {type:'L', pos:0, min:0, max:1000},
            {type:'T', pos:0, min:0, max:2000},
            {type:'R', pos:2000, min:0, max:2000},
            {type:'B', pos:2000, min:0, max:2000},
            {type:'L', pos:0, min:1120, max:2000},
            {type:'T', pos:1120, min:0, max:220},
            {type:'L', pos:220, min:1020, max:1120},
            {type:'T', pos:1020, min:220, max:880},
            {type:'R', pos:880, min:1020, max:1750},
            {type:'B', pos:1750, min:200, max:880},
            {type:'R', pos:200, min:1750, max:1800},
            {type:'T', pos:1800, min:200, max:1000},
            {type:'L', pos:1000, min:1500, max:1800},
            {type:'B', pos:1500, min:900, max:1000},
            {type:'L', pos:900, min:1400, max:1500},
            {type:'T', pos:1400, min:900, max:1000},
            {type:'L', pos:1000, min:100, max:1400},
            {type:'B', pos:100, min:880, max:1000},
            {type:'R', pos:880, min:100, max:120},
            {type:'T', pos:120, min:880, max:980},
            {type:'R', pos:980, min:120, max:220},
            {type:'B', pos:220, min:880, max:980},
            {type:'R', pos:880, min:220, max:1000},
            {type:'B', pos:1000, min:200, max:880},
            {type:'R', pos:200, min:1000, max:1100},
            {type:'B', pos:1100, min:100, max:200},
            {type:'L', pos:100, min:1000, max:1100},
            {type:'B', pos:1000, min:0, max:100},

            {type:'R', pos:1200, min:100, max:500},
            {type:'B', pos:100, min:1200, max:1600},
            {type:'L', pos:1600, min:100, max:500},
            {type:'T', pos:500, min:1200, max:1600},
            {type:'R', pos:1010, min:1010, max:1310},
            {type:'B', pos:1010, min:1010, max:1310},
            {type:'L', pos:1310, min:1010, max:1310},
            {type:'T', pos:1310, min:1010, max:1310}
        ];

        wmap.treeArea=
        [
            {xmin:100, ymin:100, width:680, height:800, num:10},
            {xmin:1100, ymin:600, width:800, height:1300, num:15},
            {xmin:100, ymin:1220, width:680, height:400, num:10}
        ];
        iniCircles();
        wmap.treeOrHut=0;

        robo=
        [
              {x:wmap.robox0[0], y:wmap.roboy0[0], vx:0.0, vy:0.0, a:0.05, dir:Math.random()*6.28, width:35, height:35,
                   r:17.5, rsq:306.25, fireTime:0, fireSpace:200, reloadTime:2000,  snoozing:false, notActive:0,type:0},
              {x:wmap.robox0[1], y:wmap.roboy0[1], vx:0.0, vy:0.0, a:0.05, dir:Math.random()*6.28, width:35, height:35,
                    r:17.5, rsq:306.25, fireTime:0, fireSpace:200, reloadTime:2000,  snoozing:false, notActive:0,type:1},
              {x:wmap.robox0[2], y:wmap.roboy0[2], vx:0.0, vy:0.0, a:0.05, dir:Math.random()*6.28, width:35, height:35,
                    r:17.5, rsq:306.25, fireTime:0, fireSpace:200, reloadTime:2000,  snoozing:false, notActive:0,type:2}
        ];
        return false;
    }

    if(levelNum==5)
    {
        wmap.carx0=50;
        wmap.cary0=50;
        wmap.cardir0=0.0;
        wmap.robox0=[1380,320,940];
        wmap.roboy0=[1600,320,960];
        wmap.goalx=540;
        wmap.goaly=960;
        wmap.wall=
        [
            {type:'T', pos:0, min:0, max:1700},
            {type:'B', pos:1920, min:0, max:1700},
            {type:'L', pos:0, min:0, max:1920},
            {type:'R', pos:1700, min:0, max:1920},

            {type:'B', pos:200, min:200, max:1500},
            {type:'T', pos:220, min:220, max:1480},
            {type:'B', pos:1700, min:220, max:420},
            {type:'B', pos:1700, min:640, max:1480},
            {type:'T', pos:1720, min:200, max:420},
            {type:'T', pos:1720, min:640, max:1500},
            {type:'L', pos:420, min:1700, max:1720},
            {type:'R', pos:640, min:1700, max:1720},

            {type:'R', pos:200, min:200, max:1720},
            {type:'L', pos:220, min:220, max:1700},
            {type:'R', pos:1480, min:220, max:420},
            {type:'R', pos:1480, min:640, max:1700},
            {type:'L', pos:1500, min:200, max:420},
            {type:'L', pos:1500, min:640, max:1720},
            {type:'T', pos:420, min:1480, max:1500},
            {type:'B', pos:640, min:1480, max:1500},

            {type:'B', pos:420, min:420, max:1280},
            {type:'T', pos:1500, min:420, max:1280},
            {type:'T', pos:440, min:420, max:1260},
            {type:'B', pos:1480, min:420, max:1260},
            {type:'L', pos:1280, min:420, max:1500},
            {type:'R', pos:1260, min:440, max:1480},
            {type:'R', pos:420, min:420, max:440},
            {type:'R', pos:420, min:1480, max:1500},

            {type:'B', pos:640, min:420, max:1060},
            {type:'T', pos:1280, min:420, max:1060},
            {type:'T', pos:660, min:440, max:1040},
            {type:'B', pos:1260, min:440, max:1040},
            {type:'R', pos:420, min:640, max:1280},
            {type:'L', pos:440, min:660, max:1260},
            {type:'R', pos:1040, min:660, max:860},
            {type:'R', pos:1040, min:1060, max:1260},
            {type:'L', pos:1060, min:640, max:860},
            {type:'L', pos:1060, min:1060, max:1280},
            {type:'T', pos:860, min:1040, max:1060},
            {type:'B', pos:1060, min:1040, max:1060},

            {type:'B', pos:860, min:640, max:840},
            {type:'T', pos:1060, min:640, max:840},
            {type:'R', pos:640, min:860, max:1060},
            {type:'L', pos:840, min:860, max:1060}
        ];

        robo=
        [
              {x:wmap.robox0[0], y:wmap.roboy0[0], vx:0.0, vy:0.0, a:0.05, dir:Math.random()*6.28, width:35, height:35,
                   r:17.5, rsq:306.25, fireTime:0, fireSpace:200, reloadTime:2000,  snoozing:false, notActive:0,type:0},
              {x:wmap.robox0[1], y:wmap.roboy0[1], vx:0.0, vy:0.0, a:0.05, dir:Math.random()*6.28, width:35, height:35,
                    r:17.5, rsq:306.25, fireTime:0, fireSpace:200, reloadTime:2000,  snoozing:false, notActive:0,type:1},
              {x:wmap.robox0[2], y:wmap.roboy0[2], vx:0.0, vy:0.0, a:0.05, dir:Math.random()*6.28, width:35, height:35,
                    r:17.5, rsq:306.25, fireTime:0, fireSpace:200, reloadTime:2000,  snoozing:false, notActive:0,type:2}
        ];
        return false;
    }

    if(levelNum==6)
    {
        wmap.carx0=50;
        wmap.cary0=50;
        wmap.cardir0=0.0;
        wmap.robox0=[350];
        wmap.roboy0=[1050];
        wmap.goalx=500;
        wmap.goaly=450;
        wmap.wall=
        [
            {type:'L', pos:450, min:100, max:120},
            {type:'B', pos:100, min:0, max:450},
            {type:'L', pos:0, min:0, max:100},
            {type:'T', pos:0, min:0, max:550},
            {type:'R', pos:550, min:0, max:120},
            {type:'T', pos:120, min:550, max:1000},
            {type:'R', pos:1000, min:120, max:980},
            {type:'B', pos:980, min:550, max:1000},
            {type:'R', pos:550, min:980, max:1200},
            {type:'B', pos:1200, min:300, max:550},
            {type:'L', pos:300, min:1000, max:1200},
            {type:'T', pos:1000, min:300, max:400},
            {type:'R', pos:400, min:1000, max:1100},
            {type:'T', pos:1100, min:400, max:450},
            {type:'L', pos:450, min:980, max:1100},
            {type:'B', pos:980, min:0, max:450},
            {type:'L', pos:0, min:120, max:980},
            {type:'T', pos:120, min:0, max:450},

            {type:'L', pos:450, min:300, max:800},
            {type:'T', pos:800, min:200, max:450},
            {type:'R', pos:200, min:750, max:800},
            {type:'B', pos:750, min:200, max:400},
            {type:'R', pos:400, min:350, max:750},
            {type:'T', pos:350, min:200, max:400},
            {type:'R', pos:200, min:300, max:350},
            {type:'B', pos:300, min:200, max:450},

            {type:'R', pos:550, min:300, max:800},
            {type:'B', pos:300, min:550, max:800},
            {type:'L', pos:800, min:300, max:350},
            {type:'T', pos:350, min:600, max:800},
            {type:'L', pos:600, min:350, max:750},
            {type:'B', pos:750, min:600, max:800},
            {type:'L', pos:800, min:750, max:800},
            {type:'T', pos:800, min:550, max:800}
        ];

        rect=
        [
            {xmin:300, ymin:5, xmax:350, ymax:95},
            {xmin:5, ymin:300, xmax:195, ymax:350},
            {xmin:5, ymin:750, xmax:195, ymax:800},
            {xmin:805, ymin:300, xmax:995, ymax:350},
            {xmin:805, ymin:750, xmax:995, ymax:800},
            {xmin:455, ymin:300, xmax:545, ymax:350},
            {xmin:400, ymin:805, xmax:450, ymax:975},
            {xmin:550, ymin:805, xmax:600, ymax:975}
        ];
        for(let i=0;i<rect.length;i++)
        {
            rect[i].health=4;
            rect[i].width=rect[i].xmax-rect[i].xmin;
            rect[i].height=rect[i].ymax-rect[i].ymin;
        }

        robo=
        [
            {x:500, y:500, vx:0.0, vy:0.0, a:0.05, dir:Math.random()*6.28, width:35, height:35,
                r:17.5, rsq:306.25, fireTime:0, fireSpace:200, reloadTime:2000,  snoozing:false, notActive:0,type:3},
            {x:500, y:550, vx:0.0, vy:0.0, a:0.05, dir:Math.random()*6.28, width:35, height:35,
                r:17.5, rsq:306.25, fireTime:0, fireSpace:200, reloadTime:2000,  snoozing:false, notActive:0,type:3},                
        ];
        return false;
    }

    if(levelNum==7)
    {
        wmap.carx0=870;
        wmap.cary0=50;
        wmap.cardir0=3.14;
        wmap.robox0=[730,770,430,410,50,220,750];
        wmap.roboy0=[170,220,170,850,50,720,1250];
        wmap.goalx=870;
        wmap.goaly=170;
        wmap.wall=
        [
            {type:'T', pos:0, min:0, max:920},
            {type:'L', pos:0, min:0, max:100},
            {type:'B', pos:100, min:0, max:500},
            {type:'L', pos:500, min:100, max:500},
            {type:'T', pos:500, min:380, max:500},
            {type:'R', pos:380, min:480, max:500},
            {type:'B', pos:480, min:380, max:480},
            {type:'R', pos:480, min:120, max:480},
            {type:'T', pos:120, min:0, max:480},
            {type:'L', pos:0, min:120, max:1420},
            {type:'B', pos:1420, min:0, max:920},
            {type:'R', pos:920, min:1200, max:1420},
            {type:'T', pos:1200, min:800, max:920},
            {type:'R', pos:800, min:1150, max:1200},
            {type:'B', pos:1150, min:800, max:920},
            {type:'R', pos:920, min:850, max:1150},
            {type:'T', pos:850, min:800, max:920},
            {type:'R', pos:800, min:800, max:850},
            {type:'B', pos:800, min:800, max:920},
            {type:'R', pos:920, min:120, max:800},
            {type:'T', pos:120, min:820, max:920},
            {type:'L', pos:820, min:120, max:650},
            {type:'T', pos:650, min:700, max:820},
            {type:'R', pos:700, min:600, max:650},
            {type:'B', pos:600, min:700, max:800},
            {type:'R', pos:800, min:100, max:600},
            {type:'B', pos:100, min:800, max:920},
            {type:'R', pos:920, min:0, max:100},

            {type:'B', pos:100, min:600, max:700},
            {type:'R', pos:600, min:100, max:500},
            {type:'T', pos:500, min:600, max:700},
            {type:'L', pos:700, min:100, max:500},

            {type:'B', pos:600, min:100, max:600},
            {type:'R', pos:100, min:600, max:650},
            {type:'T', pos:650, min:100, max:600},
            {type:'L', pos:600, min:600, max:650},

            {type:'B', pos:750, min:100, max:120},
            {type:'T', pos:1000, min:100, max:120},
            {type:'R', pos:100, min:750, max:1000},
            {type:'L', pos:120, min:750, max:1000},

            {type:'B', pos:750, min:320, max:340},
            {type:'T', pos:1000, min:320, max:340},
            {type:'R', pos:320, min:750, max:1000},
            {type:'L', pos:340, min:750, max:1000},
 
            {type:'B', pos:750, min:480, max:500},
            {type:'T', pos:1000, min:480, max:500},
            {type:'R', pos:480, min:750, max:1000},
            {type:'L', pos:500, min:750, max:1000},

            {type:'B', pos:1100, min:320, max:500},
            {type:'T', pos:1120, min:320, max:500},
            {type:'R', pos:500, min:1100, max:1120},
            {type:'L', pos:320, min:1100, max:1120},


            {type:'B', pos:750, min:600, max:700},
            {type:'T', pos:1000, min:600, max:820},
            {type:'B', pos:950, min:700, max:820},
            {type:'R', pos:600, min:750, max:1000},
            {type:'L', pos:700, min:750, max:950},
            {type:'L', pos:820, min:950, max:1000},

            {type:'B', pos:1100, min:100, max:120},
            {type:'T', pos:1320, min:100, max:340},
            {type:'B', pos:1300, min:120, max:340},
            {type:'R', pos:100, min:1100, max:1320},
            {type:'L', pos:120, min:1100, max:1300},
            {type:'L', pos:340, min:1300, max:1320},

            {type:'T', pos:1320, min:480, max:820},
            {type:'B', pos:1300, min:480, max:600},
            {type:'B', pos:1100, min:600, max:700},
            {type:'B', pos:1300, min:700, max:820},
            {type:'R', pos:480, min:1300, max:1320},
            {type:'L', pos:820, min:1300, max:1320},
            {type:'R', pos:600, min:1100, max:1300},
            {type:'L', pos:700, min:1100, max:1300}
        ];

        rect=
        [
            {xmin:510, ymin:100, xmax:590, ymax:120},
            {xmin:710, ymin:100, xmax:790, ymax:120},

            {xmin:150, ymin:250, xmax:250, ymax:350},
            {xmin:300, ymin:300, xmax:380, ymax:380},

            {xmin:10, ymin:500, xmax:90, ymax:600},
            {xmin:830, ymin:500, xmax:910, ymax:600},

            {xmin:100, ymin:660, xmax:120, ymax:740},
            {xmin:320, ymin:660, xmax:340, ymax:740},
            {xmin:480, ymin:660, xmax:500, ymax:740},
            {xmin:600, ymin:660, xmax:700, ymax:740},

            {xmin:100, ymin:1010, xmax:120, ymax:1090},
            {xmin:320, ymin:1010, xmax:340, ymax:1090},
            {xmin:480, ymin:1010, xmax:500, ymax:1090}
        ];
        for(let i=0;i<rect.length;i++)
        {
            rect[i].health=4;
            rect[i].width=rect[i].xmax-rect[i].xmin;
            rect[i].height=rect[i].ymax-rect[i].ymin;
        }
 
        robo=
        [
              {x:wmap.robox0[0], y:wmap.roboy0[0], vx:0.0, vy:0.0, a:0.05, dir:Math.random()*6.28, width:35, height:35,
                   r:17.5, rsq:306.25, fireTime:0, fireSpace:200, reloadTime:2000,  snoozing:false, notActive:0,type:0},
              {x:wmap.robox0[1], y:wmap.roboy0[1], vx:0.0, vy:0.0, a:0.05, dir:Math.random()*6.28, width:35, height:35,
                   r:17.5, rsq:306.25, fireTime:0, fireSpace:200, reloadTime:2000,  snoozing:false, notActive:0,type:1},
              {x:wmap.robox0[2], y:wmap.roboy0[2], vx:0.0, vy:0.0, a:0.05, dir:Math.random()*6.28, width:35, height:35,
                   r:17.5, rsq:306.25, fireTime:0, fireSpace:200, reloadTime:2000,  snoozing:false, notActive:0,type:2},
              {x:wmap.robox0[3], y:wmap.roboy0[3], vx:0.0, vy:0.0, a:0.05, dir:Math.random()*6.28, width:35, height:35,
                   r:17.5, rsq:306.25, fireTime:0, fireSpace:200, reloadTime:2000,  snoozing:false, notActive:0,type:0},
              {x:wmap.robox0[4], y:wmap.roboy0[4], vx:0.0, vy:0.0, a:0.05, dir:Math.random()*6.28, width:35, height:35,
                   r:17.5, rsq:306.25, fireTime:0, fireSpace:200, reloadTime:2000,  snoozing:false, notActive:0,type:3},
              {x:wmap.robox0[5], y:wmap.roboy0[5], vx:0.0, vy:0.0, a:0.05, dir:Math.random()*6.28, width:35, height:35,
                   r:17.5, rsq:306.25, fireTime:0, fireSpace:200, reloadTime:2000,  snoozing:false, notActive:0,type:3},
              {x:wmap.robox0[6], y:wmap.roboy0[6], vx:0.0, vy:0.0, a:0.05, dir:Math.random()*6.28, width:35, height:35,
                   r:17.5, rsq:306.25, fireTime:0, fireSpace:200, reloadTime:2000,  snoozing:false, notActive:0,type:3}
        ];
        return false;
    }

    if(levelNum==8)
    {
        wmap.carx0=50;
        wmap.cary0=500;
        wmap.cardir0=0;
        wmap.robox0=[600];
        wmap.roboy0=[500];
        wmap.goalx=1550;
        wmap.goaly=500;
        wmap.wall=
        [
            {type:'T', pos:0, min:100, max:1500},
            {type:'T', pos:450, min:0, max:100},
            {type:'T', pos:450, min:1500, max:1600},
            {type:'B', pos:1000, min:100, max:1500},
            {type:'B', pos:550, min:0, max:100},
            {type:'B', pos:550, min:1500, max:1600},
            {type:'L', pos:0, min:450, max:550},
            {type:'L', pos:100, min:0, max:450},
            {type:'L', pos:100, min:550, max:1000},
            {type:'R', pos:1600, min:450, max:550},
            {type:'R', pos:1500, min:0, max:450},
            {type:'R', pos:1500, min:550, max:1000},
        ];
        wmap.treeArea=
        [
            {xmin:200, ymin:50, width:300, height:900, num:5},
            {xmin:700, ymin:50, width:700, height:900, num:15}
        ];
        iniCircles();
        wmap.treeOrHut=1;

        robo=[{x:wmap.robox0[0], y:wmap.roboy0[0], vx:0.0, vy:0.0, a:0.05, dir:Math.random()*6.28, width:35, height:81,
                r:17.5, rsq:306.25, fireTime:0, fireSpace:380, reloadTime:2000,  snoozing:false, notActive:0,type:4}];
        return false;
    }

    if(levelNum==9)
    {
        wmap.carx0=50;
        wmap.cary0=2150;
        wmap.cardir0=1.57;
        wmap.robox0=[50,2750,3250,50,3150,1920,2240,2560,2880];
        wmap.roboy0=[750,50,50,1650,1900,1750,2050,1750,2050];
        wmap.goalx=3000;
        wmap.goaly=50;
        wmap.wall=
        [
            {type:'L', pos:0, min:1600, max:2200},
            {type:'B', pos:2200, min:0, max:1600},
            {type:'R', pos:1600, min:2100, max:2200},
            {type:'B', pos:2100, min:1600, max:3200},
            {type:'R', pos:3200, min:1000, max:2100},
            {type:'B', pos:1000, min:3200, max:3300},
            {type:'R', pos:3300, min:0, max:1000},
            {type:'T', pos:0, min:2700, max:3300},
            {type:'L', pos:2700, min:0, max:600},
            {type:'T', pos:600, min:0, max:2700},
            {type:'L', pos:0, min:600, max:800},
            {type:'B', pos:800, min:0, max:100},
            {type:'R', pos:100, min:700, max:800},
            {type:'B', pos:700, min:100, max:1000},
            {type:'L', pos:1000, min:700, max:1600},
            {type:'T', pos:1600, min:0, max:1000},

            {type:'T', pos:1700, min:1600, max:2800},
            {type:'L', pos:2800, min:1000, max:1700},
            {type:'B', pos:1000, min:2700, max:2800},
            {type:'L', pos:2700, min:700, max:1000},
            {type:'B', pos:700, min:1100, max:2700},
            {type:'R', pos:1100, min:700, max:1600},
            {type:'T', pos:1600, min:1100, max:1600},
            {type:'R', pos:1600, min:1600, max:1700}
        ];
        wmap.treeArea=
        [
            {xmin:100, ymin:1700, width:1400, height:400, num:15},
            {xmin:2800, ymin:100, width:400, height:800, num:15}
        ];
        iniCircles();
        wmap.treeOrHut=0;

        rect=
        [
            {xmin:2710, ymin:100, xmax:2810, ymax:120},
            {xmin:1500, ymin:605, xmax:1550, ymax:620},
            {xmin:1800, ymin:680, xmax:1850, ymax:695},
            {xmin:2300, ymin:605, xmax:2350, ymax:620},
            {xmin:2650, ymin:605, xmax:2700, ymax:695}
        ];
        for(let i=0;i<rect.length;i++)
        {
            rect[i].health=4;
            rect[i].width=rect[i].xmax-rect[i].xmin;
            rect[i].height=rect[i].ymax-rect[i].ymin;
        }
 
        robo=
        [
              {x:wmap.robox0[0], y:wmap.roboy0[0], vx:0.0, vy:0.0, a:0.05, dir:Math.random()*6.28, width:35, height:35,
                   r:17.5, rsq:306.25, fireTime:0, fireSpace:200, reloadTime:2000,  snoozing:false, notActive:0,type:0},
              {x:wmap.robox0[1], y:wmap.roboy0[1], vx:0.0, vy:0.0, a:0.05, dir:Math.random()*6.28, width:35, height:35,
                   r:17.5, rsq:306.25, fireTime:0, fireSpace:200, reloadTime:2000,  snoozing:true, notActive:0,type:1},
              {x:wmap.robox0[2], y:wmap.roboy0[2], vx:0.0, vy:0.0, a:0.05, dir:Math.random()*6.28, width:35, height:35,
                   r:17.5, rsq:306.25, fireTime:0, fireSpace:200, reloadTime:2000,  snoozing:true, notActive:0,type:2},
              {x:wmap.robox0[3], y:wmap.roboy0[3], vx:0.0, vy:0.0, a:0.05, dir:Math.random()*6.28, width:35, height:35,
                   r:17.5, rsq:306.25, fireTime:0, fireSpace:200, reloadTime:2000,  snoozing:false, notActive:0,type:3},
              {x:wmap.robox0[4], y:wmap.roboy0[4], vx:0.0, vy:0.0, a:0.05, dir:Math.random()*6.28, width:35, height:35,
                   r:17.5, rsq:306.25, fireTime:0, fireSpace:200, reloadTime:2000,  snoozing:false, notActive:0,type:3},
              {x:wmap.robox0[5], y:wmap.roboy0[5], vx:0.0, vy:0.0, a:0.05, dir:Math.random()*6.28, width:35, height:81,
                   r:17.5, rsq:306.25, fireTime:0, fireSpace:380, reloadTime:2000,  snoozing:false, notActive:0,type:4},
              {x:wmap.robox0[6], y:wmap.roboy0[6], vx:0.0, vy:0.0, a:0.05, dir:Math.random()*6.28, width:35, height:81,
                   r:17.5, rsq:306.25, fireTime:0, fireSpace:380, reloadTime:2000,  snoozing:false, notActive:0,type:4},
              {x:wmap.robox0[7], y:wmap.roboy0[7], vx:0.0, vy:0.0, a:0.05, dir:Math.random()*6.28, width:35, height:81,
                   r:17.5, rsq:306.25, fireTime:0, fireSpace:380, reloadTime:2000,  snoozing:false, notActive:0,type:4},
              {x:wmap.robox0[8], y:wmap.roboy0[8], vx:0.0, vy:0.0, a:0.05, dir:Math.random()*6.28, width:35, height:81,
                   r:17.5, rsq:306.25, fireTime:0, fireSpace:380, reloadTime:2000,  snoozing:false, notActive:0,type:4}
        ];
        return false;
    }

    if(levelNum==10)
    {
        wmap.carx0=50;
        wmap.cary0=1150;
        wmap.cardir0=0;
        wmap.robox0=[1350,950,350,1150,100];
        wmap.roboy0=[50,950,350,910,800];
        wmap.goalx=550;
        wmap.goaly=540;
        wmap.wall=
        [
            {type:"B", pos:1400, min:0, max:1400},
            {type:"R", pos:1400, min:0, max:1400},
            {type:"T", pos:0, min:0, max:1400},
            {type:"L", pos:0, min:0, max:1080},
            {type:"B", pos:1080, min:0, max:1080},
            {type:"R", pos:1080, min:250, max:1080},
            {type:"T", pos:250, min:250, max:1080},
            {type:"L", pos:250, min:250, max:830},
            {type:"B", pos:830, min:250, max:830},
            {type:"R", pos:830, min:500, max:830},
            {type:"T", pos:500, min:500, max:830},
            {type:"L", pos:500, min:500, max:580},
            {type:"B", pos:580, min:500, max:600},
            {type:"L", pos:600, min:580, max:600},
            {type:"T", pos:600, min:480, max:600},
            {type:"R", pos:480, min:480, max:600},
            {type:"B", pos:480, min:480, max:850},
            {type:"L", pos:850, min:480, max:850},
            {type:"T", pos:850, min:230, max:850},
            {type:"R", pos:230, min:230, max:850},
            {type:"B", pos:230, min:230, max:1100},
            {type:"L", pos:1100, min:230, max:1100},
            {type:"T", pos:1100, min:0, max:1100},
            {type:"L", pos:0, min:1100, max:1400}
        ];
  
        rect=
        [
            {xmin:480, ymin:1110, width:200, height:140},
            {xmin:1110, ymin:960, width:140, height:140},
            {xmin:230, ymin:120, width:150, height:100},
            {xmin:10, ymin:860, width:210, height:210},
            {xmin:750, ymin:360, width:100, height:100}
        ];
        for(let i=0;i<rect.length;i++)
        {
            rect[i].health=4;
            rect[i].xmax=rect[i].width+rect[i].xmin;
            rect[i].ymax=rect[i].height+rect[i].ymin;
        }

        robo=
        [
              {x:wmap.robox0[0], y:wmap.roboy0[0], vx:0.0, vy:0.0, a:0.05, dir:Math.random()*6.28, width:35, height:35,
                   r:17.5, rsq:306.25, fireTime:0, fireSpace:200, reloadTime:2000,  snoozing:false, notActive:0,type:0},
              {x:wmap.robox0[1], y:wmap.roboy0[1], vx:0.0, vy:0.0, a:0.05, dir:Math.random()*6.28, width:35, height:35,
                   r:17.5, rsq:306.25, fireTime:0, fireSpace:200, reloadTime:2000,  snoozing:false, notActive:0,type:1},
              {x:wmap.robox0[2], y:wmap.roboy0[2], vx:0.0, vy:0.0, a:0.05, dir:Math.random()*6.28, width:35, height:35,
                   r:17.5, rsq:306.25, fireTime:0, fireSpace:200, reloadTime:2000,  snoozing:false, notActive:0,type:2},
              {x:wmap.robox0[3], y:wmap.roboy0[3], vx:0.0, vy:0.0, a:0.05, dir:Math.random()*6.28, width:35, height:35,
                   r:17.5, rsq:306.25, fireTime:0, fireSpace:200, reloadTime:2000,  snoozing:false, notActive:0,type:3},
              {x:wmap.robox0[4], y:wmap.roboy0[4], vx:0.0, vy:0.0, a:0.05, dir:Math.random()*6.28, width:35, height:81,
                   r:17.5, rsq:306.25, fireTime:0, fireSpace:380, reloadTime:2000,  snoozing:false, notActive:0,type:4}
        ];
        return false;
    }

    if(levelNum==11)
    {
        wmap.carx0=770;
        wmap.cary0=2470;
        wmap.cardir0=4.7123;
        wmap.robox0=[50,50,550,550,770,770,1290,1540,1790];
        wmap.roboy0=[1040,1880,620,1460,800,1600,1000,220,1000];
        wmap.goalx=770;
        wmap.goaly=2350;
        wmap.wall=
        [
            {type:"B", pos:2670, min:0, max:1840},
            {type:"R", pos:1840, min:0, max:2670},
            {type:"T", pos:0, min:0, max:1840},
            {type:"L", pos:0, min:0, max:2670},

            {type:"T", pos:2420, min:720, max:820},
            {type:"R", pos:820, min:2420, max:2520},
            {type:"T", pos:2520, min:820, max:1690},
            {type:"L", pos:1690, min:2300, max:2520},
            {type:"B", pos:2300, min:1240, max:1690},
            {type:"L", pos:1240, min:290, max:2300},
            {type:"B", pos:290, min:1220, max:1240},
            {type:"R", pos:1220, min:290, max:2300},
            {type:"B", pos:2300, min:820, max:1220},
            {type:"R", pos:820, min:2300, max:2400},
            {type:"B", pos:2400, min:720, max:820},
            {type:"L", pos:720, min:2300, max:2400},
            {type:"B", pos:2300, min:620, max:720},
            {type:"L", pos:620, min:290,max:2300},
            {type:"B", pos:290, min:600,max:620},
            {type:"R", pos:600, min:290,max:2300},
            {type:"B", pos:2300, min:150,max:600},
            {type:"R", pos:150, min:2300, max:2520},
            {type:"T", pos:2520, min:150, max:720},
            {type:"L", pos:720, min:2420, max:2520},

            {type:"T", pos:170, min:150, max:1690},
            {type:"B", pos:150, min:150, max:1690},
            {type:"L", pos:1690, min:150, max:170},
            {type:"R", pos:150, min:150, max:170}
        ];

        wmap.treeArea=
        [
            {xmin:100, ymin:270, width:400, height:2000, num:20},
            {xmin:1340, ymin:270, width:400, height:2000, num:20}
        ];
        iniCircles();
        wmap.treeOrHut=1;

        rect=
        [
            {xmin:5, ymin:150, xmax:145, ymax:170},
            {xmin:1695, ymin:150, xmax:1835, ymax:170},
            {xmin:600, ymin:175, xmax:620, ymax:285},
            {xmin:1220, ymin:175, xmax:1240, ymax:285},
            {xmin:150, ymin:2525, xmax:190, ymax:2665},
            {xmin:1650, ymin:2525, xmax:1690, ymax:2665}
        ];
        for(let i=0;i<rect.length;i++)
        {
            rect[i].health=4;
            rect[i].width=rect[i].xmax-rect[i].xmin;
            rect[i].height=rect[i].ymax-rect[i].ymin;
        }


        robo=
        [
              {x:wmap.robox0[0], y:wmap.roboy0[0], vx:0.0, vy:0.0, a:0.05, dir:Math.random()*6.28, width:35, height:35,
                   r:17.5, rsq:306.25, fireTime:0, fireSpace:200, reloadTime:2000,  snoozing:false, notActive:0,type:3},
              {x:wmap.robox0[1], y:wmap.roboy0[1], vx:0.0, vy:0.0, a:0.05, dir:Math.random()*6.28, width:35, height:35,
                   r:17.5, rsq:306.25, fireTime:0, fireSpace:200, reloadTime:2000,  snoozing:false, notActive:0,type:3},
              {x:wmap.robox0[2], y:wmap.roboy0[2], vx:0.0, vy:0.0, a:0.05, dir:Math.random()*6.28, width:35, height:35,
                   r:17.5, rsq:306.25, fireTime:0, fireSpace:200, reloadTime:2000,  snoozing:false, notActive:0,type:3},
              {x:wmap.robox0[3], y:wmap.roboy0[3], vx:0.0, vy:0.0, a:0.05, dir:Math.random()*6.28, width:35, height:35,
                   r:17.5, rsq:306.25, fireTime:0, fireSpace:200, reloadTime:2000,  snoozing:false, notActive:0,type:3},
              {x:wmap.robox0[4], y:wmap.roboy0[4], vx:0.0, vy:0.0, a:0.05, dir:Math.random()*6.28, width:35, height:35,
                   r:17.5, rsq:306.25, fireTime:0, fireSpace:200, reloadTime:2000,  snoozing:true, notActive:0,type:2},
              {x:wmap.robox0[5], y:wmap.roboy0[5], vx:0.0, vy:0.0, a:0.05, dir:Math.random()*6.28, width:35, height:35,
                   r:17.5, rsq:306.25, fireTime:0, fireSpace:200, reloadTime:2000,  snoozing:true, notActive:0,type:2},
              {x:wmap.robox0[6], y:wmap.roboy0[6], vx:0.0, vy:0.0, a:0.05, dir:Math.random()*6.28, width:35, height:81,
                   r:17.5, rsq:306.25, fireTime:0, fireSpace:380, reloadTime:2000,  snoozing:true, notActive:0,type:4},
              {x:wmap.robox0[7], y:wmap.roboy0[7], vx:0.0, vy:0.0, a:0.05, dir:Math.random()*6.28, width:35, height:81,
                   r:17.5, rsq:306.25, fireTime:0, fireSpace:380, reloadTime:2000,  snoozing:true, notActive:0,type:4},
              {x:wmap.robox0[8], y:wmap.roboy0[8], vx:0.0, vy:0.0, a:0.05, dir:Math.random()*6.28, width:35, height:81,
                   r:17.5, rsq:306.25, fireTime:0, fireSpace:380, reloadTime:2000,  snoozing:true, notActive:0,type:4}
        ];

        return false;
    }

    if(levelNum==12)
    {
        var i,j,k,p,q,rri=[],rrj=[];
        wmap.carx0=50;
        wmap.cary0=50;
        wmap.cardir=0;
        wmap.robox0=[];
        wmap.roboy0=[];
        for(k=0;k<5;k++)
        {
            i=0;
            j=0;
            while(i==0&&j==0)
            {
                i=Math.floor(Math.random()*5);
                j=Math.floor(Math.random()*5);
            }
            i*=2;
            j*=2;
            q=0;
            for(p=0;p<k;p++)
                if(rri[p]==i&&rrj[p]==j)
                    q=1;
            if(q)
                k--;
            else
            {
                rri[k]=i;
                rrj[k]=j;
            }
        }
        for(k=5;k<10;k++)
        {
             i=2*Math.floor(Math.random()*5)+1;
             j=2*Math.floor(Math.random()*5)+1;
             q=0;
             for(p=5;p<k;p++)
                 if(rri[p]==i&&rrj[p]==j)
                     q=1;
             if(q)
                 k--;
             else
             {
                 rri[k]=i;
                 rrj[k]=j;
             }
        }
        for(k=0;k<10;k++)
        {
            wmap.robox0[k]=rri[k]*700+300;
            wmap.roboy0[k]=rrj[k]*700+300;
        }
        i=2*Math.floor(Math.random()*4)+3;
        j=2*Math.floor(Math.random()*4)+3;
        wmap.goalx=i*700+300;
        wmap.goaly=j*700+300;
        wmap.wall=
        [
			{type:"L", pos:0, min:0, max:600},
			{type:"T", pos:0, min:0, max:600},
			{type:"R", pos:600, min:0, max:200},
			{type:"R", pos:600, min:400, max:600},
			{type:"B", pos:600, min:0, max:200},
			{type:"B", pos:600, min:400, max:600},
			{type:"L", pos:200, min:600, max:700},
			{type:"R", pos:400, min:600, max:700},
			{type:"T", pos:200, min:600, max:700},
			{type:"B", pos:400, min:600, max:700},
			{type:"L", pos:0, min:700, max:1300},
			{type:"T", pos:700, min:0, max:200},
			{type:"T", pos:700, min:400, max:600},
			{type:"R", pos:600, min:700, max:900},
			{type:"R", pos:600, min:1100, max:1300},
			{type:"B", pos:1300, min:0, max:200},
			{type:"B", pos:1300, min:400, max:600},
			{type:"L", pos:200, min:1300, max:1400},
			{type:"R", pos:400, min:1300, max:1400},
			{type:"T", pos:900, min:600, max:700},
			{type:"B", pos:1100, min:600, max:700},
			{type:"L", pos:0, min:1400, max:2000},
			{type:"T", pos:1400, min:0, max:200},
			{type:"T", pos:1400, min:400, max:600},
			{type:"R", pos:600, min:1400, max:1600},
			{type:"R", pos:600, min:1800, max:2000},
			{type:"B", pos:2000, min:0, max:200},
			{type:"B", pos:2000, min:400, max:600},
			{type:"L", pos:200, min:2000, max:2100},
			{type:"R", pos:400, min:2000, max:2100},
			{type:"T", pos:1600, min:600, max:700},
			{type:"B", pos:1800, min:600, max:700},
			{type:"L", pos:0, min:2100, max:2700},
			{type:"T", pos:2100, min:0, max:200},
			{type:"T", pos:2100, min:400, max:600},
			{type:"R", pos:600, min:2100, max:2300},
			{type:"R", pos:600, min:2500, max:2700},
			{type:"B", pos:2700, min:0, max:200},
			{type:"B", pos:2700, min:400, max:600},
			{type:"L", pos:200, min:2700, max:2800},
			{type:"R", pos:400, min:2700, max:2800},
			{type:"T", pos:2300, min:600, max:700},
			{type:"B", pos:2500, min:600, max:700},
			{type:"L", pos:0, min:2800, max:3400},
			{type:"T", pos:2800, min:0, max:200},
			{type:"T", pos:2800, min:400, max:600},
			{type:"R", pos:600, min:2800, max:3000},
			{type:"R", pos:600, min:3200, max:3400},
			{type:"B", pos:3400, min:0, max:200},
			{type:"B", pos:3400, min:400, max:600},
			{type:"L", pos:200, min:3400, max:3500},
			{type:"R", pos:400, min:3400, max:3500},
			{type:"T", pos:3000, min:600, max:700},
			{type:"B", pos:3200, min:600, max:700},
			{type:"L", pos:0, min:3500, max:4100},
			{type:"T", pos:3500, min:0, max:200},
			{type:"T", pos:3500, min:400, max:600},
			{type:"R", pos:600, min:3500, max:3700},
			{type:"R", pos:600, min:3900, max:4100},
			{type:"B", pos:4100, min:0, max:200},
			{type:"B", pos:4100, min:400, max:600},
			{type:"L", pos:200, min:4100, max:4200},
			{type:"R", pos:400, min:4100, max:4200},
			{type:"T", pos:3700, min:600, max:700},
			{type:"B", pos:3900, min:600, max:700},
			{type:"L", pos:0, min:4200, max:4800},
			{type:"T", pos:4200, min:0, max:200},
			{type:"T", pos:4200, min:400, max:600},
			{type:"R", pos:600, min:4200, max:4400},
			{type:"R", pos:600, min:4600, max:4800},
			{type:"B", pos:4800, min:0, max:200},
			{type:"B", pos:4800, min:400, max:600},
			{type:"L", pos:200, min:4800, max:4900},
			{type:"R", pos:400, min:4800, max:4900},
			{type:"T", pos:4400, min:600, max:700},
			{type:"B", pos:4600, min:600, max:700},
			{type:"L", pos:0, min:4900, max:5500},
			{type:"T", pos:4900, min:0, max:200},
			{type:"T", pos:4900, min:400, max:600},
			{type:"R", pos:600, min:4900, max:5100},
			{type:"R", pos:600, min:5300, max:5500},
			{type:"B", pos:5500, min:0, max:200},
			{type:"B", pos:5500, min:400, max:600},
			{type:"L", pos:200, min:5500, max:5600},
			{type:"R", pos:400, min:5500, max:5600},
			{type:"T", pos:5100, min:600, max:700},
			{type:"B", pos:5300, min:600, max:700},
			{type:"L", pos:0, min:5600, max:6200},
			{type:"T", pos:5600, min:0, max:200},
			{type:"T", pos:5600, min:400, max:600},
			{type:"R", pos:600, min:5600, max:5800},
			{type:"R", pos:600, min:6000, max:6200},
			{type:"B", pos:6200, min:0, max:200},
			{type:"B", pos:6200, min:400, max:600},
			{type:"L", pos:200, min:6200, max:6300},
			{type:"R", pos:400, min:6200, max:6300},
			{type:"T", pos:5800, min:600, max:700},
			{type:"B", pos:6000, min:600, max:700},
			{type:"L", pos:0, min:6300, max:6900},
			{type:"T", pos:6300, min:0, max:200},
			{type:"T", pos:6300, min:400, max:600},
			{type:"R", pos:600, min:6300, max:6500},
			{type:"R", pos:600, min:6700, max:6900},
			{type:"B", pos:6900, min:0, max:200},
			{type:"B", pos:6900, min:400, max:600},
			{type:"L", pos:200, min:6900, max:7000},
			{type:"R", pos:400, min:6900, max:7000},
			{type:"T", pos:6500, min:600, max:700},
			{type:"B", pos:6700, min:600, max:700},
			{type:"L", pos:700, min:0, max:200},
			{type:"L", pos:700, min:400, max:600},
			{type:"T", pos:0, min:700, max:1300},
			{type:"R", pos:1300, min:0, max:200},
			{type:"R", pos:1300, min:400, max:600},
			{type:"B", pos:600, min:700, max:900},
			{type:"B", pos:600, min:1100, max:1300},
			{type:"L", pos:900, min:600, max:700},
			{type:"R", pos:1100, min:600, max:700},
			{type:"T", pos:200, min:1300, max:1400},
			{type:"B", pos:400, min:1300, max:1400},
			{type:"L", pos:700, min:700, max:900},
			{type:"L", pos:700, min:1100, max:1300},
			{type:"T", pos:700, min:700, max:900},
			{type:"T", pos:700, min:1100, max:1300},
			{type:"R", pos:1300, min:700, max:900},
			{type:"R", pos:1300, min:1100, max:1300},
			{type:"B", pos:1300, min:700, max:900},
			{type:"B", pos:1300, min:1100, max:1300},
			{type:"L", pos:900, min:1300, max:1400},
			{type:"R", pos:1100, min:1300, max:1400},
			{type:"T", pos:900, min:1300, max:1400},
			{type:"B", pos:1100, min:1300, max:1400},
			{type:"L", pos:700, min:1400, max:1600},
			{type:"L", pos:700, min:1800, max:2000},
			{type:"T", pos:1400, min:700, max:900},
			{type:"T", pos:1400, min:1100, max:1300},
			{type:"R", pos:1300, min:1400, max:1600},
			{type:"R", pos:1300, min:1800, max:2000},
			{type:"B", pos:2000, min:700, max:900},
			{type:"B", pos:2000, min:1100, max:1300},
			{type:"L", pos:900, min:2000, max:2100},
			{type:"R", pos:1100, min:2000, max:2100},
			{type:"T", pos:1600, min:1300, max:1400},
			{type:"B", pos:1800, min:1300, max:1400},
			{type:"L", pos:700, min:2100, max:2300},
			{type:"L", pos:700, min:2500, max:2700},
			{type:"T", pos:2100, min:700, max:900},
			{type:"T", pos:2100, min:1100, max:1300},
			{type:"R", pos:1300, min:2100, max:2300},
			{type:"R", pos:1300, min:2500, max:2700},
			{type:"B", pos:2700, min:700, max:900},
			{type:"B", pos:2700, min:1100, max:1300},
			{type:"L", pos:900, min:2700, max:2800},
			{type:"R", pos:1100, min:2700, max:2800},
			{type:"T", pos:2300, min:1300, max:1400},
			{type:"B", pos:2500, min:1300, max:1400},
			{type:"L", pos:700, min:2800, max:3000},
			{type:"L", pos:700, min:3200, max:3400},
			{type:"T", pos:2800, min:700, max:900},
			{type:"T", pos:2800, min:1100, max:1300},
			{type:"R", pos:1300, min:2800, max:3000},
			{type:"R", pos:1300, min:3200, max:3400},
			{type:"B", pos:3400, min:700, max:900},
			{type:"B", pos:3400, min:1100, max:1300},
			{type:"L", pos:900, min:3400, max:3500},
			{type:"R", pos:1100, min:3400, max:3500},
			{type:"T", pos:3000, min:1300, max:1400},
			{type:"B", pos:3200, min:1300, max:1400},
			{type:"L", pos:700, min:3500, max:3700},
			{type:"L", pos:700, min:3900, max:4100},
			{type:"T", pos:3500, min:700, max:900},
			{type:"T", pos:3500, min:1100, max:1300},
			{type:"R", pos:1300, min:3500, max:3700},
			{type:"R", pos:1300, min:3900, max:4100},
			{type:"B", pos:4100, min:700, max:900},
			{type:"B", pos:4100, min:1100, max:1300},
			{type:"L", pos:900, min:4100, max:4200},
			{type:"R", pos:1100, min:4100, max:4200},
			{type:"T", pos:3700, min:1300, max:1400},
			{type:"B", pos:3900, min:1300, max:1400},
			{type:"L", pos:700, min:4200, max:4400},
			{type:"L", pos:700, min:4600, max:4800},
			{type:"T", pos:4200, min:700, max:900},
			{type:"T", pos:4200, min:1100, max:1300},
			{type:"R", pos:1300, min:4200, max:4400},
			{type:"R", pos:1300, min:4600, max:4800},
			{type:"B", pos:4800, min:700, max:900},
			{type:"B", pos:4800, min:1100, max:1300},
			{type:"L", pos:900, min:4800, max:4900},
			{type:"R", pos:1100, min:4800, max:4900},
			{type:"T", pos:4400, min:1300, max:1400},
			{type:"B", pos:4600, min:1300, max:1400},
			{type:"L", pos:700, min:4900, max:5100},
			{type:"L", pos:700, min:5300, max:5500},
			{type:"T", pos:4900, min:700, max:900},
			{type:"T", pos:4900, min:1100, max:1300},
			{type:"R", pos:1300, min:4900, max:5100},
			{type:"R", pos:1300, min:5300, max:5500},
			{type:"B", pos:5500, min:700, max:900},
			{type:"B", pos:5500, min:1100, max:1300},
			{type:"L", pos:900, min:5500, max:5600},
			{type:"R", pos:1100, min:5500, max:5600},
			{type:"T", pos:5100, min:1300, max:1400},
			{type:"B", pos:5300, min:1300, max:1400},
			{type:"L", pos:700, min:5600, max:5800},
			{type:"L", pos:700, min:6000, max:6200},
			{type:"T", pos:5600, min:700, max:900},
			{type:"T", pos:5600, min:1100, max:1300},
			{type:"R", pos:1300, min:5600, max:5800},
			{type:"R", pos:1300, min:6000, max:6200},
			{type:"B", pos:6200, min:700, max:900},
			{type:"B", pos:6200, min:1100, max:1300},
			{type:"L", pos:900, min:6200, max:6300},
			{type:"R", pos:1100, min:6200, max:6300},
			{type:"T", pos:5800, min:1300, max:1400},
			{type:"B", pos:6000, min:1300, max:1400},
			{type:"L", pos:700, min:6300, max:6500},
			{type:"L", pos:700, min:6700, max:6900},
			{type:"T", pos:6300, min:700, max:900},
			{type:"T", pos:6300, min:1100, max:1300},
			{type:"R", pos:1300, min:6300, max:6500},
			{type:"R", pos:1300, min:6700, max:6900},
			{type:"B", pos:6900, min:700, max:900},
			{type:"B", pos:6900, min:1100, max:1300},
			{type:"L", pos:900, min:6900, max:7000},
			{type:"R", pos:1100, min:6900, max:7000},
			{type:"T", pos:6500, min:1300, max:1400},
			{type:"B", pos:6700, min:1300, max:1400},
			{type:"L", pos:1400, min:0, max:200},
			{type:"L", pos:1400, min:400, max:600},
			{type:"T", pos:0, min:1400, max:2000},
			{type:"R", pos:2000, min:0, max:200},
			{type:"R", pos:2000, min:400, max:600},
			{type:"B", pos:600, min:1400, max:1600},
			{type:"B", pos:600, min:1800, max:2000},
			{type:"L", pos:1600, min:600, max:700},
			{type:"R", pos:1800, min:600, max:700},
			{type:"T", pos:200, min:2000, max:2100},
			{type:"B", pos:400, min:2000, max:2100},
			{type:"L", pos:1400, min:700, max:900},
			{type:"L", pos:1400, min:1100, max:1300},
			{type:"T", pos:700, min:1400, max:1600},
			{type:"T", pos:700, min:1800, max:2000},
			{type:"R", pos:2000, min:700, max:900},
			{type:"R", pos:2000, min:1100, max:1300},
			{type:"B", pos:1300, min:1400, max:1600},
			{type:"B", pos:1300, min:1800, max:2000},
			{type:"L", pos:1600, min:1300, max:1400},
			{type:"R", pos:1800, min:1300, max:1400},
			{type:"T", pos:900, min:2000, max:2100},
			{type:"B", pos:1100, min:2000, max:2100},
			{type:"L", pos:1400, min:1400, max:1600},
			{type:"L", pos:1400, min:1800, max:2000},
			{type:"T", pos:1400, min:1400, max:1600},
			{type:"T", pos:1400, min:1800, max:2000},
			{type:"R", pos:2000, min:1400, max:1600},
			{type:"R", pos:2000, min:1800, max:2000},
			{type:"B", pos:2000, min:1400, max:1600},
			{type:"B", pos:2000, min:1800, max:2000},
			{type:"L", pos:1600, min:2000, max:2100},
			{type:"R", pos:1800, min:2000, max:2100},
			{type:"T", pos:1600, min:2000, max:2100},
			{type:"B", pos:1800, min:2000, max:2100},
			{type:"L", pos:1400, min:2100, max:2300},
			{type:"L", pos:1400, min:2500, max:2700},
			{type:"T", pos:2100, min:1400, max:1600},
			{type:"T", pos:2100, min:1800, max:2000},
			{type:"R", pos:2000, min:2100, max:2300},
			{type:"R", pos:2000, min:2500, max:2700},
			{type:"B", pos:2700, min:1400, max:1600},
			{type:"B", pos:2700, min:1800, max:2000},
			{type:"L", pos:1600, min:2700, max:2800},
			{type:"R", pos:1800, min:2700, max:2800},
			{type:"T", pos:2300, min:2000, max:2100},
			{type:"B", pos:2500, min:2000, max:2100},
			{type:"L", pos:1400, min:2800, max:3000},
			{type:"L", pos:1400, min:3200, max:3400},
			{type:"T", pos:2800, min:1400, max:1600},
			{type:"T", pos:2800, min:1800, max:2000},
			{type:"R", pos:2000, min:2800, max:3000},
			{type:"R", pos:2000, min:3200, max:3400},
			{type:"B", pos:3400, min:1400, max:1600},
			{type:"B", pos:3400, min:1800, max:2000},
			{type:"L", pos:1600, min:3400, max:3500},
			{type:"R", pos:1800, min:3400, max:3500},
			{type:"T", pos:3000, min:2000, max:2100},
			{type:"B", pos:3200, min:2000, max:2100},
			{type:"L", pos:1400, min:3500, max:3700},
			{type:"L", pos:1400, min:3900, max:4100},
			{type:"T", pos:3500, min:1400, max:1600},
			{type:"T", pos:3500, min:1800, max:2000},
			{type:"R", pos:2000, min:3500, max:3700},
			{type:"R", pos:2000, min:3900, max:4100},
			{type:"B", pos:4100, min:1400, max:1600},
			{type:"B", pos:4100, min:1800, max:2000},
			{type:"L", pos:1600, min:4100, max:4200},
			{type:"R", pos:1800, min:4100, max:4200},
			{type:"T", pos:3700, min:2000, max:2100},
			{type:"B", pos:3900, min:2000, max:2100},
			{type:"L", pos:1400, min:4200, max:4400},
			{type:"L", pos:1400, min:4600, max:4800},
			{type:"T", pos:4200, min:1400, max:1600},
			{type:"T", pos:4200, min:1800, max:2000},
			{type:"R", pos:2000, min:4200, max:4400},
			{type:"R", pos:2000, min:4600, max:4800},
			{type:"B", pos:4800, min:1400, max:1600},
			{type:"B", pos:4800, min:1800, max:2000},
			{type:"L", pos:1600, min:4800, max:4900},
			{type:"R", pos:1800, min:4800, max:4900},
			{type:"T", pos:4400, min:2000, max:2100},
			{type:"B", pos:4600, min:2000, max:2100},
			{type:"L", pos:1400, min:4900, max:5100},
			{type:"L", pos:1400, min:5300, max:5500},
			{type:"T", pos:4900, min:1400, max:1600},
			{type:"T", pos:4900, min:1800, max:2000},
			{type:"R", pos:2000, min:4900, max:5100},
			{type:"R", pos:2000, min:5300, max:5500},
			{type:"B", pos:5500, min:1400, max:1600},
			{type:"B", pos:5500, min:1800, max:2000},
			{type:"L", pos:1600, min:5500, max:5600},
			{type:"R", pos:1800, min:5500, max:5600},
			{type:"T", pos:5100, min:2000, max:2100},
			{type:"B", pos:5300, min:2000, max:2100},
			{type:"L", pos:1400, min:5600, max:5800},
			{type:"L", pos:1400, min:6000, max:6200},
			{type:"T", pos:5600, min:1400, max:1600},
			{type:"T", pos:5600, min:1800, max:2000},
			{type:"R", pos:2000, min:5600, max:5800},
			{type:"R", pos:2000, min:6000, max:6200},
			{type:"B", pos:6200, min:1400, max:1600},
			{type:"B", pos:6200, min:1800, max:2000},
			{type:"L", pos:1600, min:6200, max:6300},
			{type:"R", pos:1800, min:6200, max:6300},
			{type:"T", pos:5800, min:2000, max:2100},
			{type:"B", pos:6000, min:2000, max:2100},
			{type:"L", pos:1400, min:6300, max:6500},
			{type:"L", pos:1400, min:6700, max:6900},
			{type:"T", pos:6300, min:1400, max:1600},
			{type:"T", pos:6300, min:1800, max:2000},
			{type:"R", pos:2000, min:6300, max:6500},
			{type:"R", pos:2000, min:6700, max:6900},
			{type:"B", pos:6900, min:1400, max:1600},
			{type:"B", pos:6900, min:1800, max:2000},
			{type:"L", pos:1600, min:6900, max:7000},
			{type:"R", pos:1800, min:6900, max:7000},
			{type:"T", pos:6500, min:2000, max:2100},
			{type:"B", pos:6700, min:2000, max:2100},
			{type:"L", pos:2100, min:0, max:200},
			{type:"L", pos:2100, min:400, max:600},
			{type:"T", pos:0, min:2100, max:2700},
			{type:"R", pos:2700, min:0, max:200},
			{type:"R", pos:2700, min:400, max:600},
			{type:"B", pos:600, min:2100, max:2300},
			{type:"B", pos:600, min:2500, max:2700},
			{type:"L", pos:2300, min:600, max:700},
			{type:"R", pos:2500, min:600, max:700},
			{type:"T", pos:200, min:2700, max:2800},
			{type:"B", pos:400, min:2700, max:2800},
			{type:"L", pos:2100, min:700, max:900},
			{type:"L", pos:2100, min:1100, max:1300},
			{type:"T", pos:700, min:2100, max:2300},
			{type:"T", pos:700, min:2500, max:2700},
			{type:"R", pos:2700, min:700, max:900},
			{type:"R", pos:2700, min:1100, max:1300},
			{type:"B", pos:1300, min:2100, max:2300},
			{type:"B", pos:1300, min:2500, max:2700},
			{type:"L", pos:2300, min:1300, max:1400},
			{type:"R", pos:2500, min:1300, max:1400},
			{type:"T", pos:900, min:2700, max:2800},
			{type:"B", pos:1100, min:2700, max:2800},
			{type:"L", pos:2100, min:1400, max:1600},
			{type:"L", pos:2100, min:1800, max:2000},
			{type:"T", pos:1400, min:2100, max:2300},
			{type:"T", pos:1400, min:2500, max:2700},
			{type:"R", pos:2700, min:1400, max:1600},
			{type:"R", pos:2700, min:1800, max:2000},
			{type:"B", pos:2000, min:2100, max:2300},
			{type:"B", pos:2000, min:2500, max:2700},
			{type:"L", pos:2300, min:2000, max:2100},
			{type:"R", pos:2500, min:2000, max:2100},
			{type:"T", pos:1600, min:2700, max:2800},
			{type:"B", pos:1800, min:2700, max:2800},
			{type:"L", pos:2100, min:2100, max:2300},
			{type:"L", pos:2100, min:2500, max:2700},
			{type:"T", pos:2100, min:2100, max:2300},
			{type:"T", pos:2100, min:2500, max:2700},
			{type:"R", pos:2700, min:2100, max:2300},
			{type:"R", pos:2700, min:2500, max:2700},
			{type:"B", pos:2700, min:2100, max:2300},
			{type:"B", pos:2700, min:2500, max:2700},
			{type:"L", pos:2300, min:2700, max:2800},
			{type:"R", pos:2500, min:2700, max:2800},
			{type:"T", pos:2300, min:2700, max:2800},
			{type:"B", pos:2500, min:2700, max:2800},
			{type:"L", pos:2100, min:2800, max:3000},
			{type:"L", pos:2100, min:3200, max:3400},
			{type:"T", pos:2800, min:2100, max:2300},
			{type:"T", pos:2800, min:2500, max:2700},
			{type:"R", pos:2700, min:2800, max:3000},
			{type:"R", pos:2700, min:3200, max:3400},
			{type:"B", pos:3400, min:2100, max:2300},
			{type:"B", pos:3400, min:2500, max:2700},
			{type:"L", pos:2300, min:3400, max:3500},
			{type:"R", pos:2500, min:3400, max:3500},
			{type:"T", pos:3000, min:2700, max:2800},
			{type:"B", pos:3200, min:2700, max:2800},
			{type:"L", pos:2100, min:3500, max:3700},
			{type:"L", pos:2100, min:3900, max:4100},
			{type:"T", pos:3500, min:2100, max:2300},
			{type:"T", pos:3500, min:2500, max:2700},
			{type:"R", pos:2700, min:3500, max:3700},
			{type:"R", pos:2700, min:3900, max:4100},
			{type:"B", pos:4100, min:2100, max:2300},
			{type:"B", pos:4100, min:2500, max:2700},
			{type:"L", pos:2300, min:4100, max:4200},
			{type:"R", pos:2500, min:4100, max:4200},
			{type:"T", pos:3700, min:2700, max:2800},
			{type:"B", pos:3900, min:2700, max:2800},
			{type:"L", pos:2100, min:4200, max:4400},
			{type:"L", pos:2100, min:4600, max:4800},
			{type:"T", pos:4200, min:2100, max:2300},
			{type:"T", pos:4200, min:2500, max:2700},
			{type:"R", pos:2700, min:4200, max:4400},
			{type:"R", pos:2700, min:4600, max:4800},
			{type:"B", pos:4800, min:2100, max:2300},
			{type:"B", pos:4800, min:2500, max:2700},
			{type:"L", pos:2300, min:4800, max:4900},
			{type:"R", pos:2500, min:4800, max:4900},
			{type:"T", pos:4400, min:2700, max:2800},
			{type:"B", pos:4600, min:2700, max:2800},
			{type:"L", pos:2100, min:4900, max:5100},
			{type:"L", pos:2100, min:5300, max:5500},
			{type:"T", pos:4900, min:2100, max:2300},
			{type:"T", pos:4900, min:2500, max:2700},
			{type:"R", pos:2700, min:4900, max:5100},
			{type:"R", pos:2700, min:5300, max:5500},
			{type:"B", pos:5500, min:2100, max:2300},
			{type:"B", pos:5500, min:2500, max:2700},
			{type:"L", pos:2300, min:5500, max:5600},
			{type:"R", pos:2500, min:5500, max:5600},
			{type:"T", pos:5100, min:2700, max:2800},
			{type:"B", pos:5300, min:2700, max:2800},
			{type:"L", pos:2100, min:5600, max:5800},
			{type:"L", pos:2100, min:6000, max:6200},
			{type:"T", pos:5600, min:2100, max:2300},
			{type:"T", pos:5600, min:2500, max:2700},
			{type:"R", pos:2700, min:5600, max:5800},
			{type:"R", pos:2700, min:6000, max:6200},
			{type:"B", pos:6200, min:2100, max:2300},
			{type:"B", pos:6200, min:2500, max:2700},
			{type:"L", pos:2300, min:6200, max:6300},
			{type:"R", pos:2500, min:6200, max:6300},
			{type:"T", pos:5800, min:2700, max:2800},
			{type:"B", pos:6000, min:2700, max:2800},
			{type:"L", pos:2100, min:6300, max:6500},
			{type:"L", pos:2100, min:6700, max:6900},
			{type:"T", pos:6300, min:2100, max:2300},
			{type:"T", pos:6300, min:2500, max:2700},
			{type:"R", pos:2700, min:6300, max:6500},
			{type:"R", pos:2700, min:6700, max:6900},
			{type:"B", pos:6900, min:2100, max:2300},
			{type:"B", pos:6900, min:2500, max:2700},
			{type:"L", pos:2300, min:6900, max:7000},
			{type:"R", pos:2500, min:6900, max:7000},
			{type:"T", pos:6500, min:2700, max:2800},
			{type:"B", pos:6700, min:2700, max:2800},
			{type:"L", pos:2800, min:0, max:200},
			{type:"L", pos:2800, min:400, max:600},
			{type:"T", pos:0, min:2800, max:3400},
			{type:"R", pos:3400, min:0, max:200},
			{type:"R", pos:3400, min:400, max:600},
			{type:"B", pos:600, min:2800, max:3000},
			{type:"B", pos:600, min:3200, max:3400},
			{type:"L", pos:3000, min:600, max:700},
			{type:"R", pos:3200, min:600, max:700},
			{type:"T", pos:200, min:3400, max:3500},
			{type:"B", pos:400, min:3400, max:3500},
			{type:"L", pos:2800, min:700, max:900},
			{type:"L", pos:2800, min:1100, max:1300},
			{type:"T", pos:700, min:2800, max:3000},
			{type:"T", pos:700, min:3200, max:3400},
			{type:"R", pos:3400, min:700, max:900},
			{type:"R", pos:3400, min:1100, max:1300},
			{type:"B", pos:1300, min:2800, max:3000},
			{type:"B", pos:1300, min:3200, max:3400},
			{type:"L", pos:3000, min:1300, max:1400},
			{type:"R", pos:3200, min:1300, max:1400},
			{type:"T", pos:900, min:3400, max:3500},
			{type:"B", pos:1100, min:3400, max:3500},
			{type:"L", pos:2800, min:1400, max:1600},
			{type:"L", pos:2800, min:1800, max:2000},
			{type:"T", pos:1400, min:2800, max:3000},
			{type:"T", pos:1400, min:3200, max:3400},
			{type:"R", pos:3400, min:1400, max:1600},
			{type:"R", pos:3400, min:1800, max:2000},
			{type:"B", pos:2000, min:2800, max:3000},
			{type:"B", pos:2000, min:3200, max:3400},
			{type:"L", pos:3000, min:2000, max:2100},
			{type:"R", pos:3200, min:2000, max:2100},
			{type:"T", pos:1600, min:3400, max:3500},
			{type:"B", pos:1800, min:3400, max:3500},
			{type:"L", pos:2800, min:2100, max:2300},
			{type:"L", pos:2800, min:2500, max:2700},
			{type:"T", pos:2100, min:2800, max:3000},
			{type:"T", pos:2100, min:3200, max:3400},
			{type:"R", pos:3400, min:2100, max:2300},
			{type:"R", pos:3400, min:2500, max:2700},
			{type:"B", pos:2700, min:2800, max:3000},
			{type:"B", pos:2700, min:3200, max:3400},
			{type:"L", pos:3000, min:2700, max:2800},
			{type:"R", pos:3200, min:2700, max:2800},
			{type:"T", pos:2300, min:3400, max:3500},
			{type:"B", pos:2500, min:3400, max:3500},
			{type:"L", pos:2800, min:2800, max:3000},
			{type:"L", pos:2800, min:3200, max:3400},
			{type:"T", pos:2800, min:2800, max:3000},
			{type:"T", pos:2800, min:3200, max:3400},
			{type:"R", pos:3400, min:2800, max:3000},
			{type:"R", pos:3400, min:3200, max:3400},
			{type:"B", pos:3400, min:2800, max:3000},
			{type:"B", pos:3400, min:3200, max:3400},
			{type:"L", pos:3000, min:3400, max:3500},
			{type:"R", pos:3200, min:3400, max:3500},
			{type:"T", pos:3000, min:3400, max:3500},
			{type:"B", pos:3200, min:3400, max:3500},
			{type:"L", pos:2800, min:3500, max:3700},
			{type:"L", pos:2800, min:3900, max:4100},
			{type:"T", pos:3500, min:2800, max:3000},
			{type:"T", pos:3500, min:3200, max:3400},
			{type:"R", pos:3400, min:3500, max:3700},
			{type:"R", pos:3400, min:3900, max:4100},
			{type:"B", pos:4100, min:2800, max:3000},
			{type:"B", pos:4100, min:3200, max:3400},
			{type:"L", pos:3000, min:4100, max:4200},
			{type:"R", pos:3200, min:4100, max:4200},
			{type:"T", pos:3700, min:3400, max:3500},
			{type:"B", pos:3900, min:3400, max:3500},
			{type:"L", pos:2800, min:4200, max:4400},
			{type:"L", pos:2800, min:4600, max:4800},
			{type:"T", pos:4200, min:2800, max:3000},
			{type:"T", pos:4200, min:3200, max:3400},
			{type:"R", pos:3400, min:4200, max:4400},
			{type:"R", pos:3400, min:4600, max:4800},
			{type:"B", pos:4800, min:2800, max:3000},
			{type:"B", pos:4800, min:3200, max:3400},
			{type:"L", pos:3000, min:4800, max:4900},
			{type:"R", pos:3200, min:4800, max:4900},
			{type:"T", pos:4400, min:3400, max:3500},
			{type:"B", pos:4600, min:3400, max:3500},
			{type:"L", pos:2800, min:4900, max:5100},
			{type:"L", pos:2800, min:5300, max:5500},
			{type:"T", pos:4900, min:2800, max:3000},
			{type:"T", pos:4900, min:3200, max:3400},
			{type:"R", pos:3400, min:4900, max:5100},
			{type:"R", pos:3400, min:5300, max:5500},
			{type:"B", pos:5500, min:2800, max:3000},
			{type:"B", pos:5500, min:3200, max:3400},
			{type:"L", pos:3000, min:5500, max:5600},
			{type:"R", pos:3200, min:5500, max:5600},
			{type:"T", pos:5100, min:3400, max:3500},
			{type:"B", pos:5300, min:3400, max:3500},
			{type:"L", pos:2800, min:5600, max:5800},
			{type:"L", pos:2800, min:6000, max:6200},
			{type:"T", pos:5600, min:2800, max:3000},
			{type:"T", pos:5600, min:3200, max:3400},
			{type:"R", pos:3400, min:5600, max:5800},
			{type:"R", pos:3400, min:6000, max:6200},
			{type:"B", pos:6200, min:2800, max:3000},
			{type:"B", pos:6200, min:3200, max:3400},
			{type:"L", pos:3000, min:6200, max:6300},
			{type:"R", pos:3200, min:6200, max:6300},
			{type:"T", pos:5800, min:3400, max:3500},
			{type:"B", pos:6000, min:3400, max:3500},
			{type:"L", pos:2800, min:6300, max:6500},
			{type:"L", pos:2800, min:6700, max:6900},
			{type:"T", pos:6300, min:2800, max:3000},
			{type:"T", pos:6300, min:3200, max:3400},
			{type:"R", pos:3400, min:6300, max:6500},
			{type:"R", pos:3400, min:6700, max:6900},
			{type:"B", pos:6900, min:2800, max:3000},
			{type:"B", pos:6900, min:3200, max:3400},
			{type:"L", pos:3000, min:6900, max:7000},
			{type:"R", pos:3200, min:6900, max:7000},
			{type:"T", pos:6500, min:3400, max:3500},
			{type:"B", pos:6700, min:3400, max:3500},
			{type:"L", pos:3500, min:0, max:200},
			{type:"L", pos:3500, min:400, max:600},
			{type:"T", pos:0, min:3500, max:4100},
			{type:"R", pos:4100, min:0, max:200},
			{type:"R", pos:4100, min:400, max:600},
			{type:"B", pos:600, min:3500, max:3700},
			{type:"B", pos:600, min:3900, max:4100},
			{type:"L", pos:3700, min:600, max:700},
			{type:"R", pos:3900, min:600, max:700},
			{type:"T", pos:200, min:4100, max:4200},
			{type:"B", pos:400, min:4100, max:4200},
			{type:"L", pos:3500, min:700, max:900},
			{type:"L", pos:3500, min:1100, max:1300},
			{type:"T", pos:700, min:3500, max:3700},
			{type:"T", pos:700, min:3900, max:4100},
			{type:"R", pos:4100, min:700, max:900},
			{type:"R", pos:4100, min:1100, max:1300},
			{type:"B", pos:1300, min:3500, max:3700},
			{type:"B", pos:1300, min:3900, max:4100},
			{type:"L", pos:3700, min:1300, max:1400},
			{type:"R", pos:3900, min:1300, max:1400},
			{type:"T", pos:900, min:4100, max:4200},
			{type:"B", pos:1100, min:4100, max:4200},
			{type:"L", pos:3500, min:1400, max:1600},
			{type:"L", pos:3500, min:1800, max:2000},
			{type:"T", pos:1400, min:3500, max:3700},
			{type:"T", pos:1400, min:3900, max:4100},
			{type:"R", pos:4100, min:1400, max:1600},
			{type:"R", pos:4100, min:1800, max:2000},
			{type:"B", pos:2000, min:3500, max:3700},
			{type:"B", pos:2000, min:3900, max:4100},
			{type:"L", pos:3700, min:2000, max:2100},
			{type:"R", pos:3900, min:2000, max:2100},
			{type:"T", pos:1600, min:4100, max:4200},
			{type:"B", pos:1800, min:4100, max:4200},
			{type:"L", pos:3500, min:2100, max:2300},
			{type:"L", pos:3500, min:2500, max:2700},
			{type:"T", pos:2100, min:3500, max:3700},
			{type:"T", pos:2100, min:3900, max:4100},
			{type:"R", pos:4100, min:2100, max:2300},
			{type:"R", pos:4100, min:2500, max:2700},
			{type:"B", pos:2700, min:3500, max:3700},
			{type:"B", pos:2700, min:3900, max:4100},
			{type:"L", pos:3700, min:2700, max:2800},
			{type:"R", pos:3900, min:2700, max:2800},
			{type:"T", pos:2300, min:4100, max:4200},
			{type:"B", pos:2500, min:4100, max:4200},
			{type:"L", pos:3500, min:2800, max:3000},
			{type:"L", pos:3500, min:3200, max:3400},
			{type:"T", pos:2800, min:3500, max:3700},
			{type:"T", pos:2800, min:3900, max:4100},
			{type:"R", pos:4100, min:2800, max:3000},
			{type:"R", pos:4100, min:3200, max:3400},
			{type:"B", pos:3400, min:3500, max:3700},
			{type:"B", pos:3400, min:3900, max:4100},
			{type:"L", pos:3700, min:3400, max:3500},
			{type:"R", pos:3900, min:3400, max:3500},
			{type:"T", pos:3000, min:4100, max:4200},
			{type:"B", pos:3200, min:4100, max:4200},
			{type:"L", pos:3500, min:3500, max:3700},
			{type:"L", pos:3500, min:3900, max:4100},
			{type:"T", pos:3500, min:3500, max:3700},
			{type:"T", pos:3500, min:3900, max:4100},
			{type:"R", pos:4100, min:3500, max:3700},
			{type:"R", pos:4100, min:3900, max:4100},
			{type:"B", pos:4100, min:3500, max:3700},
			{type:"B", pos:4100, min:3900, max:4100},
			{type:"L", pos:3700, min:4100, max:4200},
			{type:"R", pos:3900, min:4100, max:4200},
			{type:"T", pos:3700, min:4100, max:4200},
			{type:"B", pos:3900, min:4100, max:4200},
			{type:"L", pos:3500, min:4200, max:4400},
			{type:"L", pos:3500, min:4600, max:4800},
			{type:"T", pos:4200, min:3500, max:3700},
			{type:"T", pos:4200, min:3900, max:4100},
			{type:"R", pos:4100, min:4200, max:4400},
			{type:"R", pos:4100, min:4600, max:4800},
			{type:"B", pos:4800, min:3500, max:3700},
			{type:"B", pos:4800, min:3900, max:4100},
			{type:"L", pos:3700, min:4800, max:4900},
			{type:"R", pos:3900, min:4800, max:4900},
			{type:"T", pos:4400, min:4100, max:4200},
			{type:"B", pos:4600, min:4100, max:4200},
			{type:"L", pos:3500, min:4900, max:5100},
			{type:"L", pos:3500, min:5300, max:5500},
			{type:"T", pos:4900, min:3500, max:3700},
			{type:"T", pos:4900, min:3900, max:4100},
			{type:"R", pos:4100, min:4900, max:5100},
			{type:"R", pos:4100, min:5300, max:5500},
			{type:"B", pos:5500, min:3500, max:3700},
			{type:"B", pos:5500, min:3900, max:4100},
			{type:"L", pos:3700, min:5500, max:5600},
			{type:"R", pos:3900, min:5500, max:5600},
			{type:"T", pos:5100, min:4100, max:4200},
			{type:"B", pos:5300, min:4100, max:4200},
			{type:"L", pos:3500, min:5600, max:5800},
			{type:"L", pos:3500, min:6000, max:6200},
			{type:"T", pos:5600, min:3500, max:3700},
			{type:"T", pos:5600, min:3900, max:4100},
			{type:"R", pos:4100, min:5600, max:5800},
			{type:"R", pos:4100, min:6000, max:6200},
			{type:"B", pos:6200, min:3500, max:3700},
			{type:"B", pos:6200, min:3900, max:4100},
			{type:"L", pos:3700, min:6200, max:6300},
			{type:"R", pos:3900, min:6200, max:6300},
			{type:"T", pos:5800, min:4100, max:4200},
			{type:"B", pos:6000, min:4100, max:4200},
			{type:"L", pos:3500, min:6300, max:6500},
			{type:"L", pos:3500, min:6700, max:6900},
			{type:"T", pos:6300, min:3500, max:3700},
			{type:"T", pos:6300, min:3900, max:4100},
			{type:"R", pos:4100, min:6300, max:6500},
			{type:"R", pos:4100, min:6700, max:6900},
			{type:"B", pos:6900, min:3500, max:3700},
			{type:"B", pos:6900, min:3900, max:4100},
			{type:"L", pos:3700, min:6900, max:7000},
			{type:"R", pos:3900, min:6900, max:7000},
			{type:"T", pos:6500, min:4100, max:4200},
			{type:"B", pos:6700, min:4100, max:4200},
			{type:"L", pos:4200, min:0, max:200},
			{type:"L", pos:4200, min:400, max:600},
			{type:"T", pos:0, min:4200, max:4800},
			{type:"R", pos:4800, min:0, max:200},
			{type:"R", pos:4800, min:400, max:600},
			{type:"B", pos:600, min:4200, max:4400},
			{type:"B", pos:600, min:4600, max:4800},
			{type:"L", pos:4400, min:600, max:700},
			{type:"R", pos:4600, min:600, max:700},
			{type:"T", pos:200, min:4800, max:4900},
			{type:"B", pos:400, min:4800, max:4900},
			{type:"L", pos:4200, min:700, max:900},
			{type:"L", pos:4200, min:1100, max:1300},
			{type:"T", pos:700, min:4200, max:4400},
			{type:"T", pos:700, min:4600, max:4800},
			{type:"R", pos:4800, min:700, max:900},
			{type:"R", pos:4800, min:1100, max:1300},
			{type:"B", pos:1300, min:4200, max:4400},
			{type:"B", pos:1300, min:4600, max:4800},
			{type:"L", pos:4400, min:1300, max:1400},
			{type:"R", pos:4600, min:1300, max:1400},
			{type:"T", pos:900, min:4800, max:4900},
			{type:"B", pos:1100, min:4800, max:4900},
			{type:"L", pos:4200, min:1400, max:1600},
			{type:"L", pos:4200, min:1800, max:2000},
			{type:"T", pos:1400, min:4200, max:4400},
			{type:"T", pos:1400, min:4600, max:4800},
			{type:"R", pos:4800, min:1400, max:1600},
			{type:"R", pos:4800, min:1800, max:2000},
			{type:"B", pos:2000, min:4200, max:4400},
			{type:"B", pos:2000, min:4600, max:4800},
			{type:"L", pos:4400, min:2000, max:2100},
			{type:"R", pos:4600, min:2000, max:2100},
			{type:"T", pos:1600, min:4800, max:4900},
			{type:"B", pos:1800, min:4800, max:4900},
			{type:"L", pos:4200, min:2100, max:2300},
			{type:"L", pos:4200, min:2500, max:2700},
			{type:"T", pos:2100, min:4200, max:4400},
			{type:"T", pos:2100, min:4600, max:4800},
			{type:"R", pos:4800, min:2100, max:2300},
			{type:"R", pos:4800, min:2500, max:2700},
			{type:"B", pos:2700, min:4200, max:4400},
			{type:"B", pos:2700, min:4600, max:4800},
			{type:"L", pos:4400, min:2700, max:2800},
			{type:"R", pos:4600, min:2700, max:2800},
			{type:"T", pos:2300, min:4800, max:4900},
			{type:"B", pos:2500, min:4800, max:4900},
			{type:"L", pos:4200, min:2800, max:3000},
			{type:"L", pos:4200, min:3200, max:3400},
			{type:"T", pos:2800, min:4200, max:4400},
			{type:"T", pos:2800, min:4600, max:4800},
			{type:"R", pos:4800, min:2800, max:3000},
			{type:"R", pos:4800, min:3200, max:3400},
			{type:"B", pos:3400, min:4200, max:4400},
			{type:"B", pos:3400, min:4600, max:4800},
			{type:"L", pos:4400, min:3400, max:3500},
			{type:"R", pos:4600, min:3400, max:3500},
			{type:"T", pos:3000, min:4800, max:4900},
			{type:"B", pos:3200, min:4800, max:4900},
			{type:"L", pos:4200, min:3500, max:3700},
			{type:"L", pos:4200, min:3900, max:4100},
			{type:"T", pos:3500, min:4200, max:4400},
			{type:"T", pos:3500, min:4600, max:4800},
			{type:"R", pos:4800, min:3500, max:3700},
			{type:"R", pos:4800, min:3900, max:4100},
			{type:"B", pos:4100, min:4200, max:4400},
			{type:"B", pos:4100, min:4600, max:4800},
			{type:"L", pos:4400, min:4100, max:4200},
			{type:"R", pos:4600, min:4100, max:4200},
			{type:"T", pos:3700, min:4800, max:4900},
			{type:"B", pos:3900, min:4800, max:4900},
			{type:"L", pos:4200, min:4200, max:4400},
			{type:"L", pos:4200, min:4600, max:4800},
			{type:"T", pos:4200, min:4200, max:4400},
			{type:"T", pos:4200, min:4600, max:4800},
			{type:"R", pos:4800, min:4200, max:4400},
			{type:"R", pos:4800, min:4600, max:4800},
			{type:"B", pos:4800, min:4200, max:4400},
			{type:"B", pos:4800, min:4600, max:4800},
			{type:"L", pos:4400, min:4800, max:4900},
			{type:"R", pos:4600, min:4800, max:4900},
			{type:"T", pos:4400, min:4800, max:4900},
			{type:"B", pos:4600, min:4800, max:4900},
			{type:"L", pos:4200, min:4900, max:5100},
			{type:"L", pos:4200, min:5300, max:5500},
			{type:"T", pos:4900, min:4200, max:4400},
			{type:"T", pos:4900, min:4600, max:4800},
			{type:"R", pos:4800, min:4900, max:5100},
			{type:"R", pos:4800, min:5300, max:5500},
			{type:"B", pos:5500, min:4200, max:4400},
			{type:"B", pos:5500, min:4600, max:4800},
			{type:"L", pos:4400, min:5500, max:5600},
			{type:"R", pos:4600, min:5500, max:5600},
			{type:"T", pos:5100, min:4800, max:4900},
			{type:"B", pos:5300, min:4800, max:4900},
			{type:"L", pos:4200, min:5600, max:5800},
			{type:"L", pos:4200, min:6000, max:6200},
			{type:"T", pos:5600, min:4200, max:4400},
			{type:"T", pos:5600, min:4600, max:4800},
			{type:"R", pos:4800, min:5600, max:5800},
			{type:"R", pos:4800, min:6000, max:6200},
			{type:"B", pos:6200, min:4200, max:4400},
			{type:"B", pos:6200, min:4600, max:4800},
			{type:"L", pos:4400, min:6200, max:6300},
			{type:"R", pos:4600, min:6200, max:6300},
			{type:"T", pos:5800, min:4800, max:4900},
			{type:"B", pos:6000, min:4800, max:4900},
			{type:"L", pos:4200, min:6300, max:6500},
			{type:"L", pos:4200, min:6700, max:6900},
			{type:"T", pos:6300, min:4200, max:4400},
			{type:"T", pos:6300, min:4600, max:4800},
			{type:"R", pos:4800, min:6300, max:6500},
			{type:"R", pos:4800, min:6700, max:6900},
			{type:"B", pos:6900, min:4200, max:4400},
			{type:"B", pos:6900, min:4600, max:4800},
			{type:"L", pos:4400, min:6900, max:7000},
			{type:"R", pos:4600, min:6900, max:7000},
			{type:"T", pos:6500, min:4800, max:4900},
			{type:"B", pos:6700, min:4800, max:4900},
			{type:"L", pos:4900, min:0, max:200},
			{type:"L", pos:4900, min:400, max:600},
			{type:"T", pos:0, min:4900, max:5500},
			{type:"R", pos:5500, min:0, max:200},
			{type:"R", pos:5500, min:400, max:600},
			{type:"B", pos:600, min:4900, max:5100},
			{type:"B", pos:600, min:5300, max:5500},
			{type:"L", pos:5100, min:600, max:700},
			{type:"R", pos:5300, min:600, max:700},
			{type:"T", pos:200, min:5500, max:5600},
			{type:"B", pos:400, min:5500, max:5600},
			{type:"L", pos:4900, min:700, max:900},
			{type:"L", pos:4900, min:1100, max:1300},
			{type:"T", pos:700, min:4900, max:5100},
			{type:"T", pos:700, min:5300, max:5500},
			{type:"R", pos:5500, min:700, max:900},
			{type:"R", pos:5500, min:1100, max:1300},
			{type:"B", pos:1300, min:4900, max:5100},
			{type:"B", pos:1300, min:5300, max:5500},
			{type:"L", pos:5100, min:1300, max:1400},
			{type:"R", pos:5300, min:1300, max:1400},
			{type:"T", pos:900, min:5500, max:5600},
			{type:"B", pos:1100, min:5500, max:5600},
			{type:"L", pos:4900, min:1400, max:1600},
			{type:"L", pos:4900, min:1800, max:2000},
			{type:"T", pos:1400, min:4900, max:5100},
			{type:"T", pos:1400, min:5300, max:5500},
			{type:"R", pos:5500, min:1400, max:1600},
			{type:"R", pos:5500, min:1800, max:2000},
			{type:"B", pos:2000, min:4900, max:5100},
			{type:"B", pos:2000, min:5300, max:5500},
			{type:"L", pos:5100, min:2000, max:2100},
			{type:"R", pos:5300, min:2000, max:2100},
			{type:"T", pos:1600, min:5500, max:5600},
			{type:"B", pos:1800, min:5500, max:5600},
			{type:"L", pos:4900, min:2100, max:2300},
			{type:"L", pos:4900, min:2500, max:2700},
			{type:"T", pos:2100, min:4900, max:5100},
			{type:"T", pos:2100, min:5300, max:5500},
			{type:"R", pos:5500, min:2100, max:2300},
			{type:"R", pos:5500, min:2500, max:2700},
			{type:"B", pos:2700, min:4900, max:5100},
			{type:"B", pos:2700, min:5300, max:5500},
			{type:"L", pos:5100, min:2700, max:2800},
			{type:"R", pos:5300, min:2700, max:2800},
			{type:"T", pos:2300, min:5500, max:5600},
			{type:"B", pos:2500, min:5500, max:5600},
			{type:"L", pos:4900, min:2800, max:3000},
			{type:"L", pos:4900, min:3200, max:3400},
			{type:"T", pos:2800, min:4900, max:5100},
			{type:"T", pos:2800, min:5300, max:5500},
			{type:"R", pos:5500, min:2800, max:3000},
			{type:"R", pos:5500, min:3200, max:3400},
			{type:"B", pos:3400, min:4900, max:5100},
			{type:"B", pos:3400, min:5300, max:5500},
			{type:"L", pos:5100, min:3400, max:3500},
			{type:"R", pos:5300, min:3400, max:3500},
			{type:"T", pos:3000, min:5500, max:5600},
			{type:"B", pos:3200, min:5500, max:5600},
			{type:"L", pos:4900, min:3500, max:3700},
			{type:"L", pos:4900, min:3900, max:4100},
			{type:"T", pos:3500, min:4900, max:5100},
			{type:"T", pos:3500, min:5300, max:5500},
			{type:"R", pos:5500, min:3500, max:3700},
			{type:"R", pos:5500, min:3900, max:4100},
			{type:"B", pos:4100, min:4900, max:5100},
			{type:"B", pos:4100, min:5300, max:5500},
			{type:"L", pos:5100, min:4100, max:4200},
			{type:"R", pos:5300, min:4100, max:4200},
			{type:"T", pos:3700, min:5500, max:5600},
			{type:"B", pos:3900, min:5500, max:5600},
			{type:"L", pos:4900, min:4200, max:4400},
			{type:"L", pos:4900, min:4600, max:4800},
			{type:"T", pos:4200, min:4900, max:5100},
			{type:"T", pos:4200, min:5300, max:5500},
			{type:"R", pos:5500, min:4200, max:4400},
			{type:"R", pos:5500, min:4600, max:4800},
			{type:"B", pos:4800, min:4900, max:5100},
			{type:"B", pos:4800, min:5300, max:5500},
			{type:"L", pos:5100, min:4800, max:4900},
			{type:"R", pos:5300, min:4800, max:4900},
			{type:"T", pos:4400, min:5500, max:5600},
			{type:"B", pos:4600, min:5500, max:5600},
			{type:"L", pos:4900, min:4900, max:5100},
			{type:"L", pos:4900, min:5300, max:5500},
			{type:"T", pos:4900, min:4900, max:5100},
			{type:"T", pos:4900, min:5300, max:5500},
			{type:"R", pos:5500, min:4900, max:5100},
			{type:"R", pos:5500, min:5300, max:5500},
			{type:"B", pos:5500, min:4900, max:5100},
			{type:"B", pos:5500, min:5300, max:5500},
			{type:"L", pos:5100, min:5500, max:5600},
			{type:"R", pos:5300, min:5500, max:5600},
			{type:"T", pos:5100, min:5500, max:5600},
			{type:"B", pos:5300, min:5500, max:5600},
			{type:"L", pos:4900, min:5600, max:5800},
			{type:"L", pos:4900, min:6000, max:6200},
			{type:"T", pos:5600, min:4900, max:5100},
			{type:"T", pos:5600, min:5300, max:5500},
			{type:"R", pos:5500, min:5600, max:5800},
			{type:"R", pos:5500, min:6000, max:6200},
			{type:"B", pos:6200, min:4900, max:5100},
			{type:"B", pos:6200, min:5300, max:5500},
			{type:"L", pos:5100, min:6200, max:6300},
			{type:"R", pos:5300, min:6200, max:6300},
			{type:"T", pos:5800, min:5500, max:5600},
			{type:"B", pos:6000, min:5500, max:5600},
			{type:"L", pos:4900, min:6300, max:6500},
			{type:"L", pos:4900, min:6700, max:6900},
			{type:"T", pos:6300, min:4900, max:5100},
			{type:"T", pos:6300, min:5300, max:5500},
			{type:"R", pos:5500, min:6300, max:6500},
			{type:"R", pos:5500, min:6700, max:6900},
			{type:"B", pos:6900, min:4900, max:5100},
			{type:"B", pos:6900, min:5300, max:5500},
			{type:"L", pos:5100, min:6900, max:7000},
			{type:"R", pos:5300, min:6900, max:7000},
			{type:"T", pos:6500, min:5500, max:5600},
			{type:"B", pos:6700, min:5500, max:5600},
			{type:"L", pos:5600, min:0, max:200},
			{type:"L", pos:5600, min:400, max:600},
			{type:"T", pos:0, min:5600, max:6200},
			{type:"R", pos:6200, min:0, max:200},
			{type:"R", pos:6200, min:400, max:600},
			{type:"B", pos:600, min:5600, max:5800},
			{type:"B", pos:600, min:6000, max:6200},
			{type:"L", pos:5800, min:600, max:700},
			{type:"R", pos:6000, min:600, max:700},
			{type:"T", pos:200, min:6200, max:6300},
			{type:"B", pos:400, min:6200, max:6300},
			{type:"L", pos:5600, min:700, max:900},
			{type:"L", pos:5600, min:1100, max:1300},
			{type:"T", pos:700, min:5600, max:5800},
			{type:"T", pos:700, min:6000, max:6200},
			{type:"R", pos:6200, min:700, max:900},
			{type:"R", pos:6200, min:1100, max:1300},
			{type:"B", pos:1300, min:5600, max:5800},
			{type:"B", pos:1300, min:6000, max:6200},
			{type:"L", pos:5800, min:1300, max:1400},
			{type:"R", pos:6000, min:1300, max:1400},
			{type:"T", pos:900, min:6200, max:6300},
			{type:"B", pos:1100, min:6200, max:6300},
			{type:"L", pos:5600, min:1400, max:1600},
			{type:"L", pos:5600, min:1800, max:2000},
			{type:"T", pos:1400, min:5600, max:5800},
			{type:"T", pos:1400, min:6000, max:6200},
			{type:"R", pos:6200, min:1400, max:1600},
			{type:"R", pos:6200, min:1800, max:2000},
			{type:"B", pos:2000, min:5600, max:5800},
			{type:"B", pos:2000, min:6000, max:6200},
			{type:"L", pos:5800, min:2000, max:2100},
			{type:"R", pos:6000, min:2000, max:2100},
			{type:"T", pos:1600, min:6200, max:6300},
			{type:"B", pos:1800, min:6200, max:6300},
			{type:"L", pos:5600, min:2100, max:2300},
			{type:"L", pos:5600, min:2500, max:2700},
			{type:"T", pos:2100, min:5600, max:5800},
			{type:"T", pos:2100, min:6000, max:6200},
			{type:"R", pos:6200, min:2100, max:2300},
			{type:"R", pos:6200, min:2500, max:2700},
			{type:"B", pos:2700, min:5600, max:5800},
			{type:"B", pos:2700, min:6000, max:6200},
			{type:"L", pos:5800, min:2700, max:2800},
			{type:"R", pos:6000, min:2700, max:2800},
			{type:"T", pos:2300, min:6200, max:6300},
			{type:"B", pos:2500, min:6200, max:6300},
			{type:"L", pos:5600, min:2800, max:3000},
			{type:"L", pos:5600, min:3200, max:3400},
			{type:"T", pos:2800, min:5600, max:5800},
			{type:"T", pos:2800, min:6000, max:6200},
			{type:"R", pos:6200, min:2800, max:3000},
			{type:"R", pos:6200, min:3200, max:3400},
			{type:"B", pos:3400, min:5600, max:5800},
			{type:"B", pos:3400, min:6000, max:6200},
			{type:"L", pos:5800, min:3400, max:3500},
			{type:"R", pos:6000, min:3400, max:3500},
			{type:"T", pos:3000, min:6200, max:6300},
			{type:"B", pos:3200, min:6200, max:6300},
			{type:"L", pos:5600, min:3500, max:3700},
			{type:"L", pos:5600, min:3900, max:4100},
			{type:"T", pos:3500, min:5600, max:5800},
			{type:"T", pos:3500, min:6000, max:6200},
			{type:"R", pos:6200, min:3500, max:3700},
			{type:"R", pos:6200, min:3900, max:4100},
			{type:"B", pos:4100, min:5600, max:5800},
			{type:"B", pos:4100, min:6000, max:6200},
			{type:"L", pos:5800, min:4100, max:4200},
			{type:"R", pos:6000, min:4100, max:4200},
			{type:"T", pos:3700, min:6200, max:6300},
			{type:"B", pos:3900, min:6200, max:6300},
			{type:"L", pos:5600, min:4200, max:4400},
			{type:"L", pos:5600, min:4600, max:4800},
			{type:"T", pos:4200, min:5600, max:5800},
			{type:"T", pos:4200, min:6000, max:6200},
			{type:"R", pos:6200, min:4200, max:4400},
			{type:"R", pos:6200, min:4600, max:4800},
			{type:"B", pos:4800, min:5600, max:5800},
			{type:"B", pos:4800, min:6000, max:6200},
			{type:"L", pos:5800, min:4800, max:4900},
			{type:"R", pos:6000, min:4800, max:4900},
			{type:"T", pos:4400, min:6200, max:6300},
			{type:"B", pos:4600, min:6200, max:6300},
			{type:"L", pos:5600, min:4900, max:5100},
			{type:"L", pos:5600, min:5300, max:5500},
			{type:"T", pos:4900, min:5600, max:5800},
			{type:"T", pos:4900, min:6000, max:6200},
			{type:"R", pos:6200, min:4900, max:5100},
			{type:"R", pos:6200, min:5300, max:5500},
			{type:"B", pos:5500, min:5600, max:5800},
			{type:"B", pos:5500, min:6000, max:6200},
			{type:"L", pos:5800, min:5500, max:5600},
			{type:"R", pos:6000, min:5500, max:5600},
			{type:"T", pos:5100, min:6200, max:6300},
			{type:"B", pos:5300, min:6200, max:6300},
			{type:"L", pos:5600, min:5600, max:5800},
			{type:"L", pos:5600, min:6000, max:6200},
			{type:"T", pos:5600, min:5600, max:5800},
			{type:"T", pos:5600, min:6000, max:6200},
			{type:"R", pos:6200, min:5600, max:5800},
			{type:"R", pos:6200, min:6000, max:6200},
			{type:"B", pos:6200, min:5600, max:5800},
			{type:"B", pos:6200, min:6000, max:6200},
			{type:"L", pos:5800, min:6200, max:6300},
			{type:"R", pos:6000, min:6200, max:6300},
			{type:"T", pos:5800, min:6200, max:6300},
			{type:"B", pos:6000, min:6200, max:6300},
			{type:"L", pos:5600, min:6300, max:6500},
			{type:"L", pos:5600, min:6700, max:6900},
			{type:"T", pos:6300, min:5600, max:5800},
			{type:"T", pos:6300, min:6000, max:6200},
			{type:"R", pos:6200, min:6300, max:6500},
			{type:"R", pos:6200, min:6700, max:6900},
			{type:"B", pos:6900, min:5600, max:5800},
			{type:"B", pos:6900, min:6000, max:6200},
			{type:"L", pos:5800, min:6900, max:7000},
			{type:"R", pos:6000, min:6900, max:7000},
			{type:"T", pos:6500, min:6200, max:6300},
			{type:"B", pos:6700, min:6200, max:6300},
			{type:"L", pos:6300, min:0, max:200},
			{type:"L", pos:6300, min:400, max:600},
			{type:"T", pos:0, min:6300, max:6900},
			{type:"R", pos:6900, min:0, max:200},
			{type:"R", pos:6900, min:400, max:600},
			{type:"B", pos:600, min:6300, max:6500},
			{type:"B", pos:600, min:6700, max:6900},
			{type:"L", pos:6500, min:600, max:700},
			{type:"R", pos:6700, min:600, max:700},
			{type:"T", pos:200, min:6900, max:7000},
			{type:"B", pos:400, min:6900, max:7000},
			{type:"L", pos:6300, min:700, max:900},
			{type:"L", pos:6300, min:1100, max:1300},
			{type:"T", pos:700, min:6300, max:6500},
			{type:"T", pos:700, min:6700, max:6900},
			{type:"R", pos:6900, min:700, max:900},
			{type:"R", pos:6900, min:1100, max:1300},
			{type:"B", pos:1300, min:6300, max:6500},
			{type:"B", pos:1300, min:6700, max:6900},
			{type:"L", pos:6500, min:1300, max:1400},
			{type:"R", pos:6700, min:1300, max:1400},
			{type:"T", pos:900, min:6900, max:7000},
			{type:"B", pos:1100, min:6900, max:7000},
			{type:"L", pos:6300, min:1400, max:1600},
			{type:"L", pos:6300, min:1800, max:2000},
			{type:"T", pos:1400, min:6300, max:6500},
			{type:"T", pos:1400, min:6700, max:6900},
			{type:"R", pos:6900, min:1400, max:1600},
			{type:"R", pos:6900, min:1800, max:2000},
			{type:"B", pos:2000, min:6300, max:6500},
			{type:"B", pos:2000, min:6700, max:6900},
			{type:"L", pos:6500, min:2000, max:2100},
			{type:"R", pos:6700, min:2000, max:2100},
			{type:"T", pos:1600, min:6900, max:7000},
			{type:"B", pos:1800, min:6900, max:7000},
			{type:"L", pos:6300, min:2100, max:2300},
			{type:"L", pos:6300, min:2500, max:2700},
			{type:"T", pos:2100, min:6300, max:6500},
			{type:"T", pos:2100, min:6700, max:6900},
			{type:"R", pos:6900, min:2100, max:2300},
			{type:"R", pos:6900, min:2500, max:2700},
			{type:"B", pos:2700, min:6300, max:6500},
			{type:"B", pos:2700, min:6700, max:6900},
			{type:"L", pos:6500, min:2700, max:2800},
			{type:"R", pos:6700, min:2700, max:2800},
			{type:"T", pos:2300, min:6900, max:7000},
			{type:"B", pos:2500, min:6900, max:7000},
			{type:"L", pos:6300, min:2800, max:3000},
			{type:"L", pos:6300, min:3200, max:3400},
			{type:"T", pos:2800, min:6300, max:6500},
			{type:"T", pos:2800, min:6700, max:6900},
			{type:"R", pos:6900, min:2800, max:3000},
			{type:"R", pos:6900, min:3200, max:3400},
			{type:"B", pos:3400, min:6300, max:6500},
			{type:"B", pos:3400, min:6700, max:6900},
			{type:"L", pos:6500, min:3400, max:3500},
			{type:"R", pos:6700, min:3400, max:3500},
			{type:"T", pos:3000, min:6900, max:7000},
			{type:"B", pos:3200, min:6900, max:7000},
			{type:"L", pos:6300, min:3500, max:3700},
			{type:"L", pos:6300, min:3900, max:4100},
			{type:"T", pos:3500, min:6300, max:6500},
			{type:"T", pos:3500, min:6700, max:6900},
			{type:"R", pos:6900, min:3500, max:3700},
			{type:"R", pos:6900, min:3900, max:4100},
			{type:"B", pos:4100, min:6300, max:6500},
			{type:"B", pos:4100, min:6700, max:6900},
			{type:"L", pos:6500, min:4100, max:4200},
			{type:"R", pos:6700, min:4100, max:4200},
			{type:"T", pos:3700, min:6900, max:7000},
			{type:"B", pos:3900, min:6900, max:7000},
			{type:"L", pos:6300, min:4200, max:4400},
			{type:"L", pos:6300, min:4600, max:4800},
			{type:"T", pos:4200, min:6300, max:6500},
			{type:"T", pos:4200, min:6700, max:6900},
			{type:"R", pos:6900, min:4200, max:4400},
			{type:"R", pos:6900, min:4600, max:4800},
			{type:"B", pos:4800, min:6300, max:6500},
			{type:"B", pos:4800, min:6700, max:6900},
			{type:"L", pos:6500, min:4800, max:4900},
			{type:"R", pos:6700, min:4800, max:4900},
			{type:"T", pos:4400, min:6900, max:7000},
			{type:"B", pos:4600, min:6900, max:7000},
			{type:"L", pos:6300, min:4900, max:5100},
			{type:"L", pos:6300, min:5300, max:5500},
			{type:"T", pos:4900, min:6300, max:6500},
			{type:"T", pos:4900, min:6700, max:6900},
			{type:"R", pos:6900, min:4900, max:5100},
			{type:"R", pos:6900, min:5300, max:5500},
			{type:"B", pos:5500, min:6300, max:6500},
			{type:"B", pos:5500, min:6700, max:6900},
			{type:"L", pos:6500, min:5500, max:5600},
			{type:"R", pos:6700, min:5500, max:5600},
			{type:"T", pos:5100, min:6900, max:7000},
			{type:"B", pos:5300, min:6900, max:7000},
			{type:"L", pos:6300, min:5600, max:5800},
			{type:"L", pos:6300, min:6000, max:6200},
			{type:"T", pos:5600, min:6300, max:6500},
			{type:"T", pos:5600, min:6700, max:6900},
			{type:"R", pos:6900, min:5600, max:5800},
			{type:"R", pos:6900, min:6000, max:6200},
			{type:"B", pos:6200, min:6300, max:6500},
			{type:"B", pos:6200, min:6700, max:6900},
			{type:"L", pos:6500, min:6200, max:6300},
			{type:"R", pos:6700, min:6200, max:6300},
			{type:"T", pos:5800, min:6900, max:7000},
			{type:"B", pos:6000, min:6900, max:7000},
			{type:"L", pos:6300, min:6300, max:6500},
			{type:"L", pos:6300, min:6700, max:6900},
			{type:"T", pos:6300, min:6300, max:6500},
			{type:"T", pos:6300, min:6700, max:6900},
			{type:"R", pos:6900, min:6300, max:6500},
			{type:"R", pos:6900, min:6700, max:6900},
			{type:"B", pos:6900, min:6300, max:6500},
			{type:"B", pos:6900, min:6700, max:6900},
			{type:"L", pos:6500, min:6900, max:7000},
			{type:"R", pos:6700, min:6900, max:7000},
			{type:"T", pos:6500, min:6900, max:7000},
			{type:"B", pos:6700, min:6900, max:7000},
			{type:"B", pos:7000, min:200, max:400},
			{type:"R", pos:7000, min:200, max:400},
			{type:"B", pos:7000, min:900, max:1100},
			{type:"R", pos:7000, min:900, max:1100},
			{type:"B", pos:7000, min:1600, max:1800},
			{type:"R", pos:7000, min:1600, max:1800},
			{type:"B", pos:7000, min:2300, max:2500},
			{type:"R", pos:7000, min:2300, max:2500},
			{type:"B", pos:7000, min:3000, max:3200},
			{type:"R", pos:7000, min:3000, max:3200},
			{type:"B", pos:7000, min:3700, max:3900},
			{type:"R", pos:7000, min:3700, max:3900},
			{type:"B", pos:7000, min:4400, max:4600},
			{type:"R", pos:7000, min:4400, max:4600},
			{type:"B", pos:7000, min:5100, max:5300},
			{type:"R", pos:7000, min:5100, max:5300},
			{type:"B", pos:7000, min:5800, max:6000},
			{type:"R", pos:7000, min:5800, max:6000},
			{type:"B", pos:7000, min:6500, max:6700},
			{type:"R", pos:7000, min:6500, max:6700}
        ];
		  
		wmap.treeArea=
		[
			{xmin:100, ymin:800, width:400, height:400, num:5},
			{xmin:100, ymin:2200, width:400, height:400, num:5},
			{xmin:100, ymin:3600, width:400, height:400, num:5},
			{xmin:100, ymin:5000, width:400, height:400, num:5},
			{xmin:100, ymin:6400, width:400, height:400, num:5},
			{xmin:800, ymin:100, width:400, height:400, num:5},
			{xmin:800, ymin:1500, width:400, height:400, num:5},
			{xmin:800, ymin:2900, width:400, height:400, num:5},
			{xmin:800, ymin:4300, width:400, height:400, num:5},
			{xmin:800, ymin:5700, width:400, height:400, num:5},
			{xmin:1500, ymin:800, width:400, height:400, num:5},
			{xmin:1500, ymin:2200, width:400, height:400, num:5},
			{xmin:1500, ymin:3600, width:400, height:400, num:5},
			{xmin:1500, ymin:5000, width:400, height:400, num:5},
			{xmin:1500, ymin:6400, width:400, height:400, num:5},
			{xmin:2200, ymin:100, width:400, height:400, num:5},
			{xmin:2200, ymin:1500, width:400, height:400, num:5},
			{xmin:2200, ymin:2900, width:400, height:400, num:5},
			{xmin:2200, ymin:4300, width:400, height:400, num:5},
			{xmin:2200, ymin:5700, width:400, height:400, num:5},
			{xmin:2900, ymin:800, width:400, height:400, num:5},
			{xmin:2900, ymin:2200, width:400, height:400, num:5},
			{xmin:2900, ymin:3600, width:400, height:400, num:5},
			{xmin:2900, ymin:5000, width:400, height:400, num:5},
			{xmin:2900, ymin:6400, width:400, height:400, num:5},
			{xmin:3600, ymin:100, width:400, height:400, num:5},
			{xmin:3600, ymin:1500, width:400, height:400, num:5},
			{xmin:3600, ymin:2900, width:400, height:400, num:5},
			{xmin:3600, ymin:4300, width:400, height:400, num:5},
			{xmin:3600, ymin:5700, width:400, height:400, num:5},
			{xmin:4300, ymin:800, width:400, height:400, num:5},
			{xmin:4300, ymin:2200, width:400, height:400, num:5},
			{xmin:4300, ymin:3600, width:400, height:400, num:5},
			{xmin:4300, ymin:5000, width:400, height:400, num:5},
			{xmin:4300, ymin:6400, width:400, height:400, num:5},
			{xmin:5000, ymin:100, width:400, height:400, num:5},
			{xmin:5000, ymin:1500, width:400, height:400, num:5},
			{xmin:5000, ymin:2900, width:400, height:400, num:5},
			{xmin:5000, ymin:4300, width:400, height:400, num:5},
			{xmin:5000, ymin:5700, width:400, height:400, num:5},
			{xmin:5700, ymin:800, width:400, height:400, num:5},
			{xmin:5700, ymin:2200, width:400, height:400, num:5},
			{xmin:5700, ymin:3600, width:400, height:400, num:5},
			{xmin:5700, ymin:5000, width:400, height:400, num:5},
			{xmin:5700, ymin:6400, width:400, height:400, num:5},
			{xmin:6400, ymin:100, width:400, height:400, num:5},
			{xmin:6400, ymin:1500, width:400, height:400, num:5},
			{xmin:6400, ymin:2900, width:400, height:400, num:5},
			{xmin:6400, ymin:4300, width:400, height:400, num:5},
			{xmin:6400, ymin:5700, width:400, height:400, num:5}
		];
		iniCircles();

        robo=
        [
              {x:wmap.robox0[0], y:wmap.roboy0[0], vx:0.0, vy:0.0, a:0.05, dir:Math.random()*6.28, width:35, height:35,
                   r:17.5, rsq:306.25, fireTime:0, fireSpace:200, reloadTime:2000,  snoozing:false, notActive:0,type:0},
              {x:wmap.robox0[1], y:wmap.roboy0[1], vx:0.0, vy:0.0, a:0.05, dir:Math.random()*6.28, width:35, height:35,
                   r:17.5, rsq:306.25, fireTime:0, fireSpace:200, reloadTime:2000,  snoozing:false, notActive:0,type:0},
              {x:wmap.robox0[2], y:wmap.roboy0[2], vx:0.0, vy:0.0, a:0.05, dir:Math.random()*6.28, width:35, height:35,
                   r:17.5, rsq:306.25, fireTime:0, fireSpace:200, reloadTime:2000,  snoozing:false, notActive:0,type:1},
              {x:wmap.robox0[3], y:wmap.roboy0[3], vx:0.0, vy:0.0, a:0.05, dir:Math.random()*6.28, width:35, height:35,
                   r:17.5, rsq:306.25, fireTime:0, fireSpace:200, reloadTime:2000,  snoozing:false, notActive:0,type:1},
              {x:wmap.robox0[4], y:wmap.roboy0[4], vx:0.0, vy:0.0, a:0.05, dir:Math.random()*6.28, width:35, height:35,
                   r:17.5, rsq:306.25, fireTime:0, fireSpace:200, reloadTime:2000,  snoozing:false, notActive:0,type:2},
              {x:wmap.robox0[5], y:wmap.roboy0[5], vx:0.0, vy:0.0, a:0.05, dir:Math.random()*6.28, width:35, height:35,
                   r:17.5, rsq:306.25, fireTime:0, fireSpace:200, reloadTime:2000,  snoozing:false, notActive:0,type:2},
              {x:wmap.robox0[6], y:wmap.roboy0[6], vx:0.0, vy:0.0, a:0.05, dir:Math.random()*6.28, width:35, height:35,
                   r:17.5, rsq:306.25, fireTime:0, fireSpace:200, reloadTime:2000,  snoozing:false, notActive:0,type:3},
              {x:wmap.robox0[7], y:wmap.roboy0[7], vx:0.0, vy:0.0, a:0.05, dir:Math.random()*6.28, width:35, height:35,
                   r:17.5, rsq:306.25, fireTime:0, fireSpace:200, reloadTime:2000,  snoozing:false, notActive:0,type:3},
              {x:wmap.robox0[8], y:wmap.roboy0[8], vx:0.0, vy:0.0, a:0.05, dir:Math.random()*6.28, width:35, height:81,
                   r:17.5, rsq:306.25, fireTime:0, fireSpace:380, reloadTime:2000,  snoozing:false, notActive:0,type:4},
              {x:wmap.robox0[9], y:wmap.roboy0[9], vx:0.0, vy:0.0, a:0.05, dir:Math.random()*6.28, width:35, height:81,
                   r:17.5, rsq:306.25, fireTime:0, fireSpace:380, reloadTime:2000,  snoozing:false, notActive:0,type:4}
        ];

		return false;
	}

    return true;
}
