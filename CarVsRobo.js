var backcol='rgb(0,100,0)';
var levelNum=0,wonGame=false,lives= -1,paused=0;
var world={xmin:0, xmax:3000, ymin:0, ymax:2000, width:2000, height:2000};
var car={x:0, y:0, vx:0, vy:0, ap:0, dir:0, width:40, height:40, r:20, rsq:400, paused:false, unPauseT:0};
var robo=[];//{x:0, y:0, vx:0.0, vy:0.0, a:0.05, dir:0.0, width:35, height:35, r:0, rsq:0, fireTime:0, fireSpace:200, reloadTime:2000};
var instructions=0,treeimg,hutimg,boltimg=[],boomimg,treefireimg,goalimg,lifeimg,roboimg=[],winimga,winimgb,pausedimg;
var powsound=[],wpow=0;
var soundOfDeath;
var soundOfLife
var roboPow;
var wallBoom=[],wwall=0;
var flameHead;
var viewport={xmin:0,ymin:0};
var keysd=[false,false,false,false,false,false];
var rect=[],circ=[];
var bolt=[];
var boltReadyTime=0;
var wmap={carx0:0, cary0:0, cardir0:0, robox0:[], roboy0:[], goalx:0, goaly:0, wall:[], treeArea:[], treeOrHut:0};

function drawinstructions()
{
	    context.fillStyle='rgb(30,30,30)';
        context.fillRect(0,0,canvas.width,canvas.height);
        context.drawImage(instructions,20,20,320,320);
}
function md(event)
{
    if(!instructions)
    {
        instructions=document.createElement("img");
        instructions.src="instructions.jpg";
        instructions.addEventListener("load",drawinstructions());
    }
    drawinstructions();
}

function changeSize()
{
    console.log("height by width is",canvas.height,canvas.width);
    canvas.height=window.innerHeight*0.9;
    canvas.width=window.innerWidth*0.9;
    console.log("height by width is",canvas.height,canvas.width);
    context.fillStyle=`rgb(100,100,100)`;
 	context.fillRect(0,0,canvas.width,canvas.height);
}
function resetLevel(event)
{
    inimap();
    car.x=wmap.carx0;
    car.y=wmap.cary0;
    car.dir=wmap.cardir0;
    car.vx=0;
    car.vy=0;

}

function win()
{
    soundOfLife.play();
    levelNum++;
    lives++;
    wonGame=inimap();
    if(!wonGame)
    {
        car.x=wmap.carx0;
        car.y=wmap.cary0;
        car.dir=wmap.cardir0;
        car.vx=0;
        car.vy=0;
    }
}
function lose()
{
    circ.length=0;
    backcol='rgb(0,0,0)'
    levelNum=0;
    context.fillStyle=backcol;
    context.fillRect(0,0,canvas.width,canvas.height);

}
function drawlives(n)
{
    for(let i=0;i<n;i++)
    {
	    context.save();
	    context.translate(15*i+15,15);
	    context.drawImage(lifeimg,-5,-5,10,10);
	    context.restore();
    }
}
function drawcarat(x,y)
{
	context.save();
	context.translate(x,y);
	context.rotate(car.dir);
	context.drawImage(car.img,-car.width/2,-car.height/2,car.width,car.height);
	context.restore();
	context.beginPath();
	context.arc(x,y,car.r,0,Math.PI*2);
	context.stroke();
}
function drawcar()
{
	drawcarat(car.x-viewport.xmin,car.y-viewport.ymin);
}
function drawroboat(x,y,k,type)
{
	context.save();
	context.translate(x,y);
	context.rotate(robo[k].dir);
    if(type==3)
    {
        context.translate(5,0);
        let rot=0;
        if(!robo[k].snoozing)
        {
            rot=Date.now()%300;
            if(rot<100)
                rot=0;
            else if(rot<200)
                rot=0.2618;
            else
                rot=0.5236;
        }
        context.rotate(rot);         
        context.drawImage(sawimg,-robo[k].width/2,-robo[k].height/2,robo[k].width,robo[k].height);
        context.rotate(-rot);
        context.translate(-5,0);
        context.rotate(2.356194);
    }
    if(robo[k].type!=4)
        context.drawImage(roboimg[type],-robo[k].width/2,-robo[k].height/2,robo[k].width,robo[k].height);
    else
    {
        context.rotate(1.5708);
        context.drawImage(roboimg[type],-robo[k].width/2,-robo[k].height/2,robo[k].width,robo[k].height);
    }
	context.restore();
}
function drawrobo()
{
    for(let k=0;k<robo.length;k++)
        if(!robo[k].notActive)
            drawroboat(robo[k].x-viewport.xmin,robo[k].y-viewport.ymin,k,robo[k].type);
}
function drawgoal()
{
    context.save();
	context.translate(wmap.goalx-viewport.xmin,wmap.goaly-viewport.ymin);
	context.drawImage(goalimg,-20,-20,40,40);
	context.restore();
}
function drawrects()
{	
	for(let i=0;i<rect.length;i++)
    {
        context.fillStyle=`rgb(${(4-rect[i].health)*50},${rect[i].health*50},0)`;
		context.fillRect(rect[i].xmin-viewport.xmin,rect[i].ymin-viewport.ymin,rect[i].width,rect[i].height);
    }
}
function drawfireat(x,y,r,fang)
{
	let offset=31*r/13;
	let dim=offset*2;
	context.save();
	context.translate(x,y);
	context.rotate(fang);
	context.drawImage(treefireimg,-offset,-offset,dim,dim);
	context.restore();
}
function drawtreeat(x,y,r)
{
	let offset=15*r/13;
	let dim=offset*2;
	context.save();
	context.translate(x,y);
    if(wmap.treeOrHut==0)
	    context.drawImage(treeimg,-offset,-offset,dim,dim);
    else
	    context.drawImage(hutimg,-offset,-offset,dim,dim);
	context.restore();
}
function drawcircs()
{
	for(let i=0;i<circ.length;i++)
	{
		if(circ[i].x+circ[i].radius>=viewport.xmin&&circ[i].x-circ[i].radius<=viewport.xmin+canvas.width&&
			circ[i].y+circ[i].radius>=viewport.ymin&&circ[i].y-circ[i].radius<=viewport.ymin+canvas.width)
		{
			if(circ[i].fire-Date.now()>0)
				drawfireat(circ[i].x-viewport.xmin,circ[i].y-viewport.ymin,circ[i].radius,circ[i].fireang);
			drawtreeat(circ[i].x-viewport.xmin,circ[i].y-viewport.ymin,circ[i].radius);
		}
	}
}
function drawbolt()
{

	for(let i=0;i<bolt.length;i++)
	{
		context.save();
		context.translate(bolt[i].x-viewport.xmin,bolt[i].y-viewport.ymin);
		if(bolt[i].bang==0)
		{
			context.rotate(bolt[i].dir);
		    context.drawImage(boltimg[bolt[i].wbimg],-9,-2,18,4);
		}
		else
		{
			if(bolt[i].bang-Date.now()>0)
			{
				context.rotate(Math.random()*Math.PI*2);
				context.drawImage(boomimg,-30,-30,60,60);
			}
			else
			{
				bolt.splice(i,1);
				i--;
			}
		}
		context.restore();
	}
	
}
function bounce(d)
{
    let vc={x:0, y:0, mag:0}
    d.nx=d.x/d.mag;
    d.ny=d.y/d.mag;
    vc.mag=car.vx*d.nx+car.vy*d.ny;
    vc.x=vc.mag*d.nx;
    vc.y=vc.mag*d.ny;
    car.vx-=2*vc.x;
    car.vy-=2*vc.y;

}
function roboVel()
{
    for(let k=0;k<robo.length;k++)
    {
        if(!robo[k].notActive)
        {
            let angadj=0.05;
            if(robo[k].type==3)
                angadj=0.01;
            else if(robo[k].type==4)
                angadj=0.1;
            let d={x:car.x-robo[k].x, y:car.y-robo[k].y};
            d.mag=Math.sqrt(d.x*d.x+d.y*d.y);
            if(!robo[k].snoozing)
            {
                if(robo[k].type==4&&d.mag<400)
                {
                    let t=d.mag/10;
                    d.x+=car.vx*t;
                    d.y+=car.vy*t;
                    context.strokeStyle='rgb(170,10,10)';
                    context.beginPath();
                    context.moveTo(robo[k].x-viewport.xmin,robo[k].y-viewport.ymin);
                    context.lineTo(robo[k].x+d.x-viewport.xmin,robo[k].y+d.y-viewport.ymin);
                    context.stroke();

                }
                if(robo[k].type<4||d.mag<400)
                {
	                d.xp=d.x*Math.cos(robo[k].dir)+d.y*Math.sin(robo[k].dir);
	                d.yp=d.y*Math.cos(robo[k].dir)-d.x*Math.sin(robo[k].dir);
	                d.ang=Math.atan2(d.yp,d.xp);
	                if(d.yp>0)
		                if(d.xp<0||d.ang>angadj)
			                robo[k].dir+=angadj;
		                else
			                robo[k].dir+=d.ang;
	                if(d.yp<0)
	                {
		                d.ang= -d.ang;
		                if(d.xp<0||d.ang>angadj)
			                robo[k].dir-=angadj;
		                else
			                robo[k].dir-=d.ang;
	                }
                    if(robo[k].type!=3)
                    {
	                    let dn={x:Math.cos(robo[k].dir), y:Math.sin(robo[k].dir)};
	                    let vdotd=robo[k].vx*dn.x+robo[k].vy*dn.y;
	                    let vp={x:robo[k].vx-robo[k].vx*dn.x, y:robo[k].vy-robo[k].vy*dn.y};
	                    robo[k].vx-=vp.x*0.001;
	                    robo[k].vy-=vp.y*0.001;
	                    if(vdotd<2.0)
	                    {
		                    robo[k].vx+=dn.x*robo[k].a;
		                    robo[k].vy+=dn.y*robo[k].a;
	                    }
	                    robo[k].vmag=Math.sqrt(robo[k].vx*robo[k].vx+robo[k].vy*robo[k].vy);
                    }
                    else if(robo[k].type==3)
                    {
                        robo[k].vx=0.4*Math.cos(robo[k].dir);
                        robo[k].vy=0.4*Math.sin(robo[k].dir);
                    }
                }
                else
                {
                    robo[k].vx*=0.9;
                    robo[k].vy*=0.9;
                }
            }
            else
                if(d.mag<400)
                    robo[k].snoozing=false;
        }
        else
        {
            if(Date.now()>robo[k].notActive)
                robo[k].notActive=0
        }
    }
}
function roboPos()
{
    for(let k=0;k<robo.length;k++)
    {
        if(!robo[k].notActive)
        {
	        let x=robo[k].x+robo[k].vx;
	        let y=robo[k].y+robo[k].vy;

            let d={x:x-car.x, y:y-car.y};
            d.mag=Math.sqrt(d.x*d.x+d.y*d.y);
            if(d.mag<car.r+robo[k].r)
                if(robo[k].type!=3)
                {
                    bounce(d);
                }
                else
                {
                    if(d.x*Math.cos(robo[k].dir)+d.y*Math.sin(robo[k].dir)>0)
                        bounce(d);
                    else
                    {
                        let b={x:car.x, y:car.y, dir:0, vx:0, vy:0, bang:Date.now+1000, wbimg:1};
            	        bolt.push(b);
                        carHit();
                    }
                }

	        for(let i=0;i<circ.length;i++)
	        {
	            d={x:circ[i].x-x, y:circ[i].y-y};
		        d.mag=Math.sqrt(d.x*d.x+d.y*d.y);
		        if(d.mag<robo[k].r+circ[i].radius)
		        {
			        let vc={x:0, y:0, mag:0}
			        d.nx=d.x/d.mag;
			        d.ny=d.y/d.mag;
			        vc.mag=robo[k].vx*d.nx+robo[k].vy*d.ny;
			        vc.x=vc.mag*d.nx;
			        vc.y=vc.mag*d.ny;
			        robo[k].vx-=2*vc.x;
			        robo[k].vy-=2*vc.y;
			        x=robo[k].x+robo[k].vx;
                    y=robo[k].y+robo[k].vy;
		        }
	        }

            for(let i=0;i<robo.length;i++)
                if(i!=k)
                {
	                d={x:robo[i].x-x, y:robo[i].y-y};
		            d.mag=Math.sqrt(d.x*d.x+d.y*d.y);
		            if(d.mag<robo[k].r+robo[i].r)
		            {
			            let vc={x:0, y:0, mag:0}
			            d.nx=d.x/d.mag;
			            d.ny=d.y/d.mag;
			            vc.mag=robo[k].vx*d.nx+robo[k].vy*d.ny;
			            vc.x=vc.mag*d.nx;
			            vc.y=vc.mag*d.ny;
			            robo[k].vx-=2*vc.x;
			            robo[k].vy-=2*vc.y;
			            x=robo[k].x+robo[k].vx;
                        y=robo[k].y+robo[k].vy;
		            }
                }

            for(let i=0;i<wmap.wall.length;i++)
            {
                if(wmap.wall[i].type=='L'||wmap.wall[i].type=='R')
                {
                    if(y>wmap.wall[i].min&&y<wmap.wall[i].max)  //next to wall
                    {
                        if(wmap.wall[i].type=='L'&&x>wmap.wall[i].pos&&x<wmap.wall[i].pos+robo[k].r&&robo[k].vx<0)
                        {
                            robo[k].vx= -robo[k].vx;
			                x=robo[k].x+robo[k].vx;
                            y=robo[k].y+robo[k].vy;
                        }
                        if(wmap.wall[i].type=='R'&&x<wmap.wall[i].pos&&x>wmap.wall[i].pos-robo[k].r&&robo[k].vx>0)
                        {
                            robo[k].vx= -robo[k].vx;
			                x=robo[k].x+robo[k].vx;
                            y=robo[k].y+robo[k].vy;
                        }
                    }
                    else if(y+robo[k].r>wmap.wall[i].min&&y-robo[k].r<wmap.wall[i].max) //near end of wall
                    {
                        let d={x:wmap.wall[i].pos-x, y:0, mag:(-1)};
                        if(y<wmap.wall[i].min)
                        {
                            d.y=wmap.wall[i].min-y;
                            d.mag=Math.sqrt(d.x*d.x+d.y*d.y);
                        }
                        else if(y>wmap.wall[i].max)
                        {
                            d.y=wmap.wall[i].max-y;
                            d.mag=Math.sqrt(d.x*d.x+d.y*d.y);
                        }
                        if(d.mag>=0&&d.mag<robo[k].r)
                        {
                            let vc={x:0, y:0, mag:0};
                            d.nx=d.x/d.mag;
                            d.ny=d.y/d.mag;
                            vc.mag=robo[k].vx*d.nx+robo[k].vy*d.ny;
                            vc.x=vc.mag*d.nx;
                            vc.y=vc.mag*d.ny;
                            robo[k].vx-=2*vc.x;
                            robo[k].vy-=2*vc.y;
    	    		        x=robo[k].x+robo[k].vx;
                            y=robo[k].y+robo[k].vy;
                        }
                    }
                }
                else
                {
                    if(x>wmap.wall[i].min&&x<wmap.wall[i].max)  //next to wall
                    {
                        if(wmap.wall[i].type=='T'&&y>wmap.wall[i].pos&&y<wmap.wall[i].pos+robo[k].r&&robo[k].vy<0)
                        {
                            robo[k].vy= -robo[k].vy;
			                x=robo[k].x+robo[k].vx;
                            y=robo[k].y+robo[k].vy;
                        }
                        if(wmap.wall[i].type=='B'&&y<wmap.wall[i].pos&&y>wmap.wall[i].pos-robo[k].r&&robo[k].vy>0)
                        {
                            robo[k].vy= -robo[k].vy
			                x=robo[k].x+robo[k].vx;
                            y=robo[k].y+robo[k].vy;
                        }
                    }
                    else if(x+robo[k].r>wmap.wall[i].min&&x-robo[k].r<wmap.wall[i].max) //near end of wall
                    {
                        let d={x:0, y:wmap.wall[i].pos-y, mag:(-1)};
                        if(x<wmap.wall[i].min)
                        {
                            d.x=wmap.wall[i].min-x;
                            d.mag=Math.sqrt(d.x*d.x+d.y*d.y);
                        }
                        else if(x>wmap.wall[i].max)
                        {
                            d.x=wmap.wall[i].max-x;
                            d.mag=Math.sqrt(d.x*d.x+d.y*d.y);
                        }
                        if(d.mag>=0&&d.mag<robo[k].r)
                        {
                            let vc={x:0, y:0, mag:0};
                            d.nx=d.x/d.mag;
                            d.ny=d.y/d.mag;
                            vc.mag=robo[k].vx*d.nx+robo[k].vy*d.ny;
                            vc.x=vc.mag*d.nx;
                            vc.y=vc.mag*d.ny;
                            robo[k].vx-=2*vc.x;
                            robo[k].vy-=2*vc.y;
			                x=robo[k].x+robo[k].vx;
                            y=robo[k].y+robo[k].vy;
                        }
                    }
                }
            }
            for(let i=0;i<rect.length;i++)
            {
                if(x>=rect[i].xmin&&x<=rect[i].xmax)
                    if((robo[k].y<rect[i].ymin-robo[k].r&&y>rect[i].ymin-robo[k].r)||(robo[k].y>rect[i].ymax+robo[k].r&&y<rect[i].ymax+robo[k].r))
                    {
                        robo[k].vy= -robo[k].vy;
                        return;
                    }
                if(y>=rect[i].ymin&&y<=rect[i].ymax)
                    if((robo[k].x<rect[i].xmin-robo[k].r&&x>rect[i].xmin-robo[k].r)||(robo[k].x>rect[i].xmax+robo[k].r&&x<rect[i].xmax+robo[k].r))
                    {
                        robo[k].vx= -robo[k].vx;
                        return;
                    }
                let corner={x:0, y:0};
                if(x<rect[i].xmin)
                    corner.x=rect[i].xmin;
                else   
                    corner.x=rect[i].xmax;
                if(y<rect[i].ymin)
                    corner.y=rect[i].ymin;
                else    
                    corner.y=rect[i].ymax;
                let d={x:corner.x-x, y:corner.y-y};
                d.mag=Math.sqrt(d.x*d.x+d.y*d.y);
                if(d.mag<robo[k].r)
                {
                    let vc={x:0, y:0, mag:0};
                    d.nx=d.x/d.mag;
                    d.ny=d.y/d.mag;
                    vc.mag=robo[k].vx*d.nx+robo[k].vy*d.ny;
                    vc.x=vc.mag*d.nx;
                    vc.y=vc.mag*d.ny;
                    robo[k].vx-=2*vc.x;
                    robo[k].vy-=2*vc.y;
                    return;
                }


            }
	        robo[k].x=x;
	        robo[k].y=y;

            if(robo[k].type!=3)
            {    
                d=Math.sqrt((car.x-robo[k].x)*(car.x-robo[k].x)+(car.y-robo[k].y)*(car.y-robo[k].y));
                if(d<robo[k].fireSpace&&Date.now()>robo[k].fireTime)
                {
                    createRoboBolt(k);
                    robo[k].fireTime=Date.now()+robo[k].reloadTime;
                }
            }
        }
    }
}
function carVel()
{
    if(car.paused)
    {
        if(Date.now()>car.unPauseT)
        {
            car.paused=false;
            car.x=wmap.carx0;
            car.y=wmap.cary0;
        }
        else
        {
            car.vx=0;
            car.vy=0;
        }
    }
    else
    {
		let n={x:Math.cos(car.dir), y:Math.sin(car.dir)};
		let vp={mag:0, x:0, y:0};
		vp.mag=car.vx*n.x+car.vy*n.y;
		vp.x=vp.mag*n.x;
		vp.y=vp.mag*n.y;
		let vt={x:car.vx-vp.x, y:car.vy-vp.y};
		vt.mag=Math.sqrt(vt.x*vt.x+vt.y*vt.y);
		if(vt.mag>0)
		{
			vt.nx=vt.x/vt.mag;
			vt.ny=vt.y/vt.mag;
		}
		else
		{
			vt.nx=0;
			vt.ny=0;
		}
		let at=Math.sqrt(0.04-car.ap*car.ap);
		if(at>vt.mag)
			at= -vt.mag;
		else
			at= -at;
		car.vx+=car.ap*n.x+at*vt.nx;
		car.vy+=car.ap*n.y+at*vt.ny;
		car.ap=0;
    }
}
function carPos()
{
	let x=car.x+car.vx;
	let y=car.y+car.vy;
	for(let i=0;i<circ.length;i++)
	{
		let d={x:circ[i].x-x, y:circ[i].y-y};
		d.mag=Math.sqrt(d.x*d.x+d.y*d.y);
		if(d.mag<car.r+circ[i].radius)
		{
			let vc={x:0, y:0, mag:0}
			d.nx=d.x/d.mag;
			d.ny=d.y/d.mag;
			vc.mag=car.vx*d.nx+car.vy*d.ny;
			vc.x=vc.mag*d.nx;
			vc.y=vc.mag*d.ny;
			car.vx-=2*vc.x;
			car.vy-=2*vc.y;
			return;
		}
	}

    for(let i=0;i<wmap.wall.length;i++)
    {
        if(wmap.wall[i].type=='L'||wmap.wall[i].type=='R')
        {
            if(y>wmap.wall[i].min&&y<wmap.wall[i].max)  //next to wall
            {
                if(wmap.wall[i].type=='L'&&x>wmap.wall[i].pos&&x<wmap.wall[i].pos+car.r&&car.vx<0)
                {
                    car.vx= -car.vx;
                    return;
                }
                if(wmap.wall[i].type=='R'&&x<wmap.wall[i].pos&&x>wmap.wall[i].pos-car.r&&car.vx>0)
                {
                    car.vx= -car.vx;
                    return;
                }
            }
            else if(y+car.r>wmap.wall[i].min&&y-car.r<wmap.wall[i].max) //near end of wall
            {
                let d={x:wmap.wall[i].pos-x, y:0, mag:(-1)};
                if(y<wmap.wall[i].min)
                {
                    d.y=wmap.wall[i].min-y;
                    d.mag=Math.sqrt(d.x*d.x+d.y*d.y);
                }
                else if(y>wmap.wall[i].max)
                {
                    d.y=wmap.wall[i].max-y;
                    d.mag=Math.sqrt(d.x*d.x+d.y*d.y);
                }
                if(d.mag>=0&&d.mag<car.r)
                {
                    let vc={x:0, y:0, mag:0};
                    d.nx=d.x/d.mag;
                    d.ny=d.y/d.mag;
                    vc.mag=car.vx*d.nx+car.vy*d.ny;
                    vc.x=vc.mag*d.nx;
                    vc.y=vc.mag*d.ny;
                    car.vx-=2*vc.x;
                    car.vy-=2*vc.y;
                    return;
                }
            }
        }
        else
        {
            if(x>wmap.wall[i].min&&x<wmap.wall[i].max)  //next to wall
            {
                if(wmap.wall[i].type=='T'&&y>wmap.wall[i].pos&&y<wmap.wall[i].pos+car.r&&car.vy<0)
                {
                    car.vy= -car.vy;
                    return;
                }
                if(wmap.wall[i].type=='B'&&y<wmap.wall[i].pos&&y>wmap.wall[i].pos-car.r&&car.vy>0)
                {
                    car.vy= -car.vy
                    return;
                }
            }
            else if(x+car.r>wmap.wall[i].min&&x-car.r<wmap.wall[i].max) //near end of wall
            {
                let d={x:0, y:wmap.wall[i].pos-y, mag:(-1)};
                if(x<wmap.wall[i].min)
                {
                    d.x=wmap.wall[i].min-x;
                    d.mag=Math.sqrt(d.x*d.x+d.y*d.y);
                }
                else if(x>wmap.wall[i].max)
                {
                    d.x=wmap.wall[i].max-x;
                    d.mag=Math.sqrt(d.x*d.x+d.y*d.y);
                }
                if(d.mag>=0&&d.mag<car.r)
                {
                    let vc={x:0, y:0, mag:0};
                    d.nx=d.x/d.mag;
                    d.ny=d.y/d.mag;
                    vc.mag=car.vx*d.nx+car.vy*d.ny;
                    vc.x=vc.mag*d.nx;
                    vc.y=vc.mag*d.ny;
                    car.vx-=2*vc.x;
                    car.vy-=2*vc.y;
                    return;
                }
            }
        }
    }

    for(let i=0;i<rect.length;i++)
    {
        if(x>=rect[i].xmin&&x<=rect[i].xmax)
            if((car.y<rect[i].ymin-car.r&&y>rect[i].ymin-car.r)||(car.y>rect[i].ymax+car.r&&y<rect[i].ymax+car.r))
            {
                car.vy= -car.vy;
                return;
            }
        if(y>=rect[i].ymin&&y<=rect[i].ymax)
            if((car.x<rect[i].xmin-car.r&&x>rect[i].xmin-car.r)||(car.x>rect[i].xmax+car.r&&x<rect[i].xmax+car.r))
            {
                car.vx= -car.vx;
                return;
            }
        let corner={x:0, y:0};
        if(x<rect[i].xmin)
            corner.x=rect[i].xmin;
        else   
            corner.x=rect[i].xmax;
        if(y<rect[i].ymin)
            corner.y=rect[i].ymin;
        else    
            corner.y=rect[i].ymax;
        let d={x:corner.x-x, y:corner.y-y};
        d.mag=Math.sqrt(d.x*d.x+d.y*d.y);
        if(d.mag<car.r)
        {
            let vc={x:0, y:0, mag:0};
            d.nx=d.x/d.mag;
            d.ny=d.y/d.mag;
            vc.mag=car.vx*d.nx+car.vy*d.ny;
            vc.x=vc.mag*d.nx;
            vc.y=vc.mag*d.ny;
            car.vx-=2*vc.x;
            car.vy-=2*vc.y;
            return;
        }

    }
	car.x=x;
	car.y=y;
    let d=Math.sqrt((car.x-wmap.goalx)*(car.x-wmap.goalx)+(car.y-wmap.goaly)*(car.y-wmap.goaly));
    if(d<car.r+20)
        win();
}
function carHit()
{
    if(car.paused)
        return;
    soundOfDeath.play();
    lives--;
    if(lives<0)
        lose();
    else
    {
        car.paused=true;
        car.unPauseT=Date.now()+1000;
        car.vx=0;
        car.vy=0;
    }
}
function boltPos()
{
	for(let i=0;i<bolt.length;i++)
	{
		if(bolt[i].bang==0)
		{
			let x=bolt[i].x+bolt[i].vx;
			let y=bolt[i].y+bolt[i].vy;
            for(let j=0;j<wmap.wall.length;j++)
			    if((wmap.wall[j].type=='R'&&y>wmap.wall[j].min&&y<wmap.wall[j].max&&x>wmap.wall[j].pos&&bolt[i].x<wmap.wall[j].pos)||
                    (wmap.wall[j].type=='L'&&y>wmap.wall[j].min&&y<wmap.wall[j].max&&x<wmap.wall[j].pos&&bolt[i].x>wmap.wall[j].pos)||
                    (wmap.wall[j].type=='B'&&x>wmap.wall[j].min&&x<wmap.wall[j].max&&y>wmap.wall[j].pos&&bolt[i].y<wmap.wall[j].pos)||
                    (wmap.wall[j].type=='T'&&x>wmap.wall[j].min&&x<wmap.wall[j].max&&y<wmap.wall[j].pos&&bolt[i].y>wmap.wall[j].pos))
                {
				    bolt[i].bang=Date.now()+1000;
                    wwall++;
            	    if(wwall>=5)
		                wwall=0;
	                wallBoom[wwall].play();
                }
            for(let j=0;j<rect.length;j++)
                if(x<rect[j].xmax&&x>rect[j].xmin&&y<rect[j].ymax&&y>rect[j].ymin)
                {
                    bolt[i].bang=Date.now()+1000;
                    wwall++;
            	    if(wwall>=5)
		                wwall=0;
	                wallBoom[wwall].play();
                    rect[j].health--;
                    if(rect[j].health<0)
                        rect.splice(j,1);
                }
            bolt[i].x=x;
            bolt[i].y=y;
			for(let j=0;j<circ.length;j++)
			{
				let d={x:circ[j].x-bolt[i].x, y:circ[j].y-bolt[i].y};
				d.magsq=d.x*d.x+d.y*d.y;
				if(d.magsq<circ[j].radius*circ[j].radius)
				{
					bolt[i].bang=Date.now()+1000;
					circ[j].fire=Date.now()+1500;
					let ang=Math.atan2(d.y,d.x);
					circ[j].fireang=ang-Math.PI/2;
				}
			}
		}
        for(let k=0;k<robo.length;k++)
        {
		    let d={x:robo[k].x-bolt[i].x, y:robo[k].y-bolt[i].y};
		    d.magsq=d.x*d.x+d.y*d.y;
		    if(d.magsq<robo[k].rsq&&bolt[i].bang==0)
		    {
                let boom=true;
                if(robo[k].type==3)
                {
                    let dirn={x:Math.cos(robo[k].dir), y:Math.sin(robo[k].dir)};
                    if(d.x*dirn.x+d.y*dirn.y<0)
                    {
                        boom=false;
                        d.mag=Math.sqrt(d.magsq);
                        d.nx=d.x/d.mag;
                        d.ny=d.y/d.mag;
                        let vc={x:0, y:0, mag:bolt[i].vx*d.nx+bolt[i].vy*d.ny};
                        vc.x=vc.mag*d.nx;
                        vc.y=vc.mag*d.ny;
                        bolt[i].vx-=2*vc.x;
                        bolt[i].vy-=2*vc.y;
                        bolt[i].x+=bolt[i].vx;
                        bolt[i].y+=bolt[i].vy;
                    }
                }
                if(boom)
                {
    			    bolt[i].bang=Date.now()+1000;
                    flameHead.play();
                    robo[k].notActive=3000+Date.now();
		    	    robo[k].x=wmap.robox0[k];
			        robo[k].y=wmap.roboy0[k];
                }
		    }
        }
        if(bolt[i].bang==0)
        {
            let d={x:car.x-bolt[i].x, y:car.y-bolt[i].y};
            d.magsq=d.x*d.x+d.y*d.y;
		    if(d.magsq<car.rsq)
            {
                bolt[i].bang=Date.now()+1000;
                carHit();
            }
        }
	}
}
function createBolt(wbolt)
{
    if(wbolt==0)
    {
	    var b={x:car.x+car.r*Math.cos(car.dir), y:car.y+car.r*Math.sin(car.dir), dir:car.dir, vx:car.vx+5*Math.cos(car.dir), vy:car.vy+5*Math.sin(car.dir), bang:0, wbimg:wbolt};
        bolt.push(b);
	    wpow++;
	    if(wpow>=5)
		    wpow=0;
	    powsound[wpow].play();
    }
}
function createRoboBolt(k)
{
        var b={x:robo[k].x+robo[k].r*Math.cos(robo[k].dir), y:robo[k].y+robo[k].r*Math.sin(robo[k].dir), dir:robo[k].dir, vx:robo[k].vx+5*Math.cos(robo[k].dir), vy:robo[k].vy+5*Math.sin(robo[k].dir), bang:0, wbimg:1};
	    if(robo[k].type==4)
        {
            b.vx-=robo[k].vx;
            b.vy-=robo[k].vy;
        }
        bolt.push(b);
	    roboPow.play();
}
function winimate()
{
    context.fillStyle=`rgb(${Math.random()*255},${Math.random()*255},${Math.random()*255})`;
 	context.fillRect(0,0,canvas.width,canvas.height);
    if(levelNum>0)
    {
        levelNum=0;
        context.drawImage(winimga,0,0,canvas.width,canvas.height);
    }
    else
    {
        levelNum=1;
        context.drawImage(winimgb,0,0,canvas.width,canvas.height);
    }
}
function animate()
{
    var x0,y0,x1,y1;
    if(!paused)
    {
	    if(keysd[0])
	    {
		    car.ap=0.1;
	    }
	    if(keysd[1])
	    {
		    car.dir-=0.05;
		    if(car.dir<0)
			    car.dir+=Math.PI*2;
	    }
	    if(keysd[2])
	    {
		    car.dir+=0.05;
		    if(car.dir>Math.PI*2)
			    car.dir-=Math.PI*2;
	    }
	    if(keysd[3])
	    {
		    car.ap= -0.08;
	    }
	    if(keysd[4])
	    {
		    if(Date.now()>boltReadyTime)
		    {
			    createBolt(0);
			    boltReadyTime=Date.now()+200;
		    }
	    }
        if(keysd[5])
        {
            paused=1;
        }


	    carVel();
	    carPos();

        context.fillStyle=backcol;
	    context.fillRect(0,0,canvas.width,canvas.height);

	    roboVel();
	    roboPos();

	    boltPos();


	    context.strokeStyle='rgb(255,0,0)';
        for(let i=0; i<wmap.wall.length; i++)
        {
            if(wmap.wall[i].type=='L'||wmap.wall[i].type=='R')
            {
                x0=wmap.wall[i].pos-viewport.xmin;
                x1=wmap.wall[i].pos-viewport.xmin;
                y0=wmap.wall[i].min-viewport.ymin;
                y1=wmap.wall[i].max-viewport.ymin;
            }
            else
            {
                y0=wmap.wall[i].pos-viewport.ymin;
                y1=wmap.wall[i].pos-viewport.ymin;
                x0=wmap.wall[i].min-viewport.xmin;
                x1=wmap.wall[i].max-viewport.xmin;
            }
            context.beginPath();
            context.moveTo(x0,y0);
            context.lineTo(x1,y1);
            context.stroke();
        }

	    if(car.x>viewport.xmin+5*canvas.width/8)
		    viewport.xmin=car.x-5*canvas.width/8;
	    if(car.y>viewport.ymin+5*canvas.height/8)
		    viewport.ymin=car.y-5*canvas.height/8;
	    if(car.x<viewport.xmin+3*canvas.width/8)
		    viewport.xmin=car.x-3*canvas.width/8;
	    if(car.y<viewport.ymin+3*canvas.height/8)
		    viewport.ymin=car.y-3*canvas.height/8;

        drawgoal();
	    drawcar();
	    drawrobo();
	    drawbolt();
        drawrects();
	    drawcircs();
        drawlives(lives);
    }
    else 
    {
        context.drawImage(pausedimg,0,0,canvas.width,canvas.height);
        if(paused==1)
        {
            if(!keysd[5])
                paused=2;
        }
        else
        {
            if(keysd[5])
            {
                paused=0;
                keysd[5]=false;
            }
        }
    }

	if(lives>=0)
    {
        if(!wonGame)
            requestAnimationFrame(animate);
        else
            setInterval(winimate,1000);
    }
}
function keyfunc(event)
{
	event.preventDefault();
	if(event.type=="keydown")
	{
		if(event.code=="KeyW"||event.code=="ArrowUp")
			keysd[0]=true;
		if(event.code=="KeyA"||event.code=="ArrowLeft")
			keysd[1]=true;
		if(event.code=="KeyD"||event.code=="ArrowRight")
			keysd[2]=true;
		if(event.code=="KeyS"||event.code=="ArrowDown")
			keysd[3]=true;
		if(event.code=="KeyH"||event.code=="Space")
			keysd[4]=true;
        if(event.code=="KeyP"||event.code=="Enter")
            keysd[5]=true;
	}
	if(event.type=="keyup")
	{
		if(event.code=="KeyW"||event.code=="ArrowUp")
			keysd[0]=false;
		if(event.code=="KeyA"||event.code=="ArrowLeft")
			keysd[1]=false;
		if(event.code=="KeyD"||event.code=="ArrowRight")
			keysd[2]=false;
		if(event.code=="KeyS"||event.code=="ArrowDown")
			keysd[3]=false;
		if(event.code=="KeyH"||event.code=="Space")
			keysd[4]=false;
        if(event.code=="KeyP"||event.code=="Enter")
            keysd[5]=false;
	}
}
function iniCircles()
{
    for(let j=circ.length;j>0;j--)
        circ.pop();
	for(let i=0;i<wmap.treeArea.length;i++)
        for(let j=0;j<wmap.treeArea[i].num;j++)
	    {

		    let c={radius:20+Math.random()*40, x:wmap.treeArea[i].xmin+Math.random()*wmap.treeArea[i].width, y:wmap.treeArea[i].ymin+Math.random()*wmap.treeArea[i].height, fire:0, fireang:0};
		    circ.push(c);
	    }
}

function gopig(event)
{
    if(lives>=0)
        return;
    lives=3;
	backcol='rgb(255,255,255)';
	context.fillStyle=backcol;
	context.fillRect(0,0,canvas.width,canvas.height);
    window.addEventListener("resize",changeSize);
	window.addEventListener("keydown",keyfunc);
	window.addEventListener("keyup",keyfunc);
	treeimg=document.createElement("img");
	treeimg.src="tree.png";
	hutimg=document.createElement("img");
	hutimg.src="hut.png";
	let bimg=document.createElement("img");
	bimg.src="bolt.png";
    boltimg.push(bimg);
    bimg=document.createElement("img");
	bimg.src="robobolt.png";
    boltimg.push(bimg);
	boomimg=document.createElement("img");
	boomimg.src="boom.png";
	treefireimg=document.createElement("img");
	treefireimg.src="treefire.png";
    inimap();
	car.x=wmap.carx0;
	car.y=wmap.cary0;
	car.img=document.createElement("img");
	car.img.src="roundcar.png";
	car.img.addEventListener("load",drawcar);
    changeSize();
 	context.fillRect(0,0,canvas.width,canvas.height);
    for(let i=0;i<5;i++)
    {
	    roboimg[i]=document.createElement("img");
	    roboimg[i].src=`robopic${i}.png`;
	    roboimg[i].addEventListener("load",drawrobo);
    }
    sawimg=document.createElement("img");
    sawimg.src="saw.png";
    goalimg=document.createElement("img");
	goalimg.src="goal1.png";
    lifeimg=document.createElement("img");
	lifeimg.src="lifeheart.png";
    winimga=document.createElement("img");
    winimga.src="winpica.png";
    winimgb=document.createElement("img");
    winimgb.src="winpicb.png";
    pausedimg=document.createElement("img");
    pausedimg.src="paused.png";
	for(let i=0;i<5;i++)
	{
		let ps=document.createElement("audio");
		ps.src="pow.mp3";
		ps.setAttribute("preload","auto");
		ps.setAttribute("controls","none");
		ps.style.display="none";
		powsound.push(ps);
		document.body.appendChild(powsound[i]);
        ps=document.createElement("audio");
		ps.src="wallBoom.mp3";
		ps.setAttribute("preload","auto");
		ps.setAttribute("controls","none");
		ps.style.display="none";
		wallBoom.push(ps);
		document.body.appendChild(wallBoom[i]);
	}
    soundOfDeath=document.createElement("audio");
	soundOfDeath.src="lose1.mp3";
	soundOfDeath.setAttribute("preload","auto");
	soundOfDeath.setAttribute("controls","none");
	soundOfDeath.style.display="none";
	document.body.appendChild(soundOfDeath);
    flameHead=document.createElement("audio");
	flameHead.src="flameHead.mp3";
	flameHead.setAttribute("preload","auto");
	flameHead.setAttribute("controls","none");
	flameHead.style.display="none";
	document.body.appendChild(flameHead);
    roboPow=document.createElement("audio");
	roboPow.src="robopow.mp3";
	roboPow.setAttribute("preload","auto");
	roboPow.setAttribute("controls","none");
	roboPow.style.display="none";
	document.body.appendChild(roboPow);
    soundOfLife=document.createElement("audio");
	soundOfLife.src="win.mp3";
	soundOfLife.setAttribute("preload","auto");
	soundOfLife.setAttribute("controls","none");
	soundOfLife.style.display="none";
	document.body.appendChild(soundOfLife);
    iniCircles();
    soundOfLife.play();
	animate();
}