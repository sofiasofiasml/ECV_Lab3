var scene = null;
var ready;
var renderer = null;
var pbrpipeline = null;
var camera = null;
var character = null;
var boolText= true; 
var prev_pos=null;
var walk_area = new WalkArea();
//walk_area.fromJSON({"areas":[[[-67.43950653076172,0,27.14199447631836],[-68.60884857177734,0,1.6977691650390625],[-66.0120620727539,0,-18.62609100341797],[-59.49505615234375,0,-34.965919494628906],[-53.883453369140625,0,-42.809669494628906],[-45.22100067138672,0,-50.44482421875],[-34.76663589477539,0,-57.18958282470703],[-24.48322296142578,0,-60.806602478027344],[-14.468236923217773,0,-63.164527893066406],[0.2191905975341797,0,-65.42658233642578],[11.598743438720703,0,-64.39415740966797],[24.562318801879883,0,-61.85474395751953],[33.63792419433594,0,-57.093994140625],[43.393898010253906,0,-51.424407958984375],[52.34059143066406,0,-43.49116516113281],[56.70361328125,0,-39.1881103515625],[63.25800323486328,0,-30.85161590576172],[69.17809295654297,0,-13.493255615234375],[71.12821197509766,0,2.1404876708984375],[72.38911437988281,0,14.06646728515625],[68.96778106689453,0,28.836013793945312],[62.83252716064453,0,43.141571044921875],[55.816612243652344,0,52.28385925292969],[48.54535675048828,0,59.929229736328125],[41.558387756347656,0,64.44621276855469],[26.194931030273438,0,67.84548950195312],[16.232131958007812,0,67.67469024658203],[15.86273193359375,0,77.07205200195312],[16.249343872070312,0,199.18592834472656],[13.834224700927734,0,207.2829132080078],[20.628711700439453,0,210.40333557128906],[26.43111801147461,0,216.2852783203125],[30.565601348876953,0,221.28213500976562],[33.417999267578125,0,226.0157012939453],[36.20587921142578,0,235.23687744140625],[37.06705856323242,0,243.6142120361328],[36.613948822021484,0,251.53488159179688],[33.94417953491211,0,259.04559326171875],[25.693714141845703,0,267.9446105957031],[16.99365234375,0,273.63165283203125],[12.06222915649414,0,275.48797607421875],[6.282081604003906,0,277.01727294921875],[1.0061531066894531,0,276.95269775390625],[-4.451702117919922,0,276.8858642578125],[-9.403038024902344,0,276.29620361328125],[-14.327470779418945,0,273.8014831542969],[-18.868410110473633,0,271.219970703125],[-22.9046688079834,0,269.13934326171875],[-25.808549880981445,0,266.4019470214844],[-29.157733917236328,0,262.9125671386719],[-31.674936294555664,0,259.59783935546875],[-34.13269805908203,0,253.63046264648438],[-36.21385192871094,0,248.73399353027344],[-37.84327697753906,0,241.8677978515625],[-37.30628967285156,0,234.86280822753906],[-35.140838623046875,0,225.7530517578125],[-30.493955612182617,0,221.13607788085938],[-26.235143661499023,0,214.57081604003906],[-16.647897720336914,0,209.40765380859375],[-11.7703857421875,0,208.25387573242188],[-9.119853973388672,0,205.8162841796875],[-7.352268218994141,0,200.71109008789062],[-4.9514923095703125,0,145.0354766845703],[-10.120262145996094,0,140.52171325683594],[-19.4090576171875,0,146.3279571533203],[-139.442138671875,0,145.9815216064453],[-129.48841857910156,0,151.51980590820312],[-135.79637145996094,0,160.4047088623047],[-138.74867248535156,0,167.08901977539062],[-142.7275390625,0,172.54782104492188],[-152.0655975341797,0,183.43711853027344],[-158.25941467285156,0,189.70462036132812],[-171.33131408691406,0,197.63629150390625],[-181.89906311035156,0,201.74417114257812],[-191.7296142578125,0,203.71533203125],[-199.94775390625,0,204.97935485839844],[-209.7423095703125,0,204.00045776367188],[-225.1020050048828,0,199.63198852539062],[-232.95462036132812,0,196.5361328125],[-241.578857421875,0,192.510986328125],[-249.53955078125,0,185.4997100830078],[-255.01190185546875,0,179.73448181152344],[-259.70343017578125,0,174.0128631591797],[-265.95947265625,0,164.75230407714844],[-269.90032958984375,0,155.53192138671875],[-271.50689697265625,0,148.72857666015625],[-273.301025390625,0,141.48341369628906],[-273.26837158203125,0,133.5370635986328],[-273.33056640625,0,126.17120361328125],[-272.8503112792969,0,119.74468231201172],[-271.0365295410156,0,111.14738464355469],[-267.6318054199219,0,101.33502197265625],[-264.50299072265625,0,94.78378295898438],[-257.4447021484375,0,84.10099792480469],[-246.65777587890625,0,73.22871398925781],[-232.451416015625,0,63.900848388671875],[-219.60353088378906,0,61.41123962402344],[-206.05380249023438,0,62.53312683105469],[-193.39175415039062,0,64.42364501953125],[-177.07354736328125,0,67.6707763671875],[-162.08511352539062,0,75.40185546875],[-151.97235107421875,0,82.9378662109375],[-144.580322265625,0,89.6924819946289],[-140.51544189453125,0,99.02220153808594],[-138.18533325195312,0,108.83415222167969],[-130.75418090820312,0,120.1640625],[-128.29476928710938,0,122.36970520019531],[-142.93685913085938,0,117.91482543945312],[-142.82513427734375,0,122.94216918945312],[-7.911102294921875,0,128.62582397460938],[-7.69793701171875,0,71.74114990234375],[-4.140861511230469,0,73.36605834960938],[-3.4749069213867188,0,64.75283813476562],[-11.255683898925781,0,67.06536865234375],[-15.177421569824219,0,74.78070068359375],[-43.28008270263672,0,64.59876251220703],[-47.847511291503906,0,58.00347137451172],[-52.72294998168945,0,54.267539978027344],[-58.80341339111328,0,45.193199157714844],[-64.54081726074219,0,34.90238952636719],[-71.01737213134766,0,17.940841674804688]]]});
//walk_area.addRect([-10,0,0],100,100); 
walk_area.fromJSON({"areas":[[[-138.40635681152344,0,143.9536895751953],[-145.98104858398438,0,136.97711181640625],[-145.2307586669922,0,121.17062377929688],[-135.45428466796875,0,110.80111694335938],[-140.58596801757812,0,98.78411865234375],[-157.77761840820312,0,71.77935791015625],[-180.48858642578125,0,60.30901336669922],[-193.51016235351562,0,58.177032470703125],[-209.97711181640625,0,58.01230239868164],[-228.39584350585938,0,62.43254852294922],[-243.58258056640625,0,70.58946228027344],[-254.76034545898438,0,80.20855712890625],[-260.3860168457031,0,88.560302734375],[-255.48550415039062,0,89.96037292480469],[-249.85198974609375,0,92.05384826660156],[-249.0650634765625,0,104.27604675292969],[-251.27435302734375,0,130.14231872558594],[-254.4954833984375,0,145.88340759277344],[-254.61151123046875,0,152.8804473876953],[-244.1751708984375,0,155.81968688964844],[-229.3519287109375,0,149.5094757080078],[-222.5101318359375,0,145.89649963378906],[-216.87103271484375,0,133.4989776611328],[-211.19186401367188,0,122.90043640136719],[-203.69332885742188,0,112.54740905761719],[-190.08856201171875,0,114.02110290527344],[-184.47097778320312,0,124.38713073730469],[-186.1875,0,133.54188537597656],[-187.45529174804688,0,144.3522186279297],[-188.94309997558594,0,153.3551483154297],[-181.71206665039062,0,155.9369659423828],[-139.03298950195312,0,145.6238250732422]],[[-135.948486328125,0,146.28529357910156],[-134.5504913330078,0,153.68936157226562],[-136.2526397705078,0,159.2961883544922],[-141.2645721435547,0,171.05593872070312],[-147.14645385742188,0,180.7188720703125],[-159.28005981445312,0,190.6143341064453],[-171.46473693847656,0,196.52651977539062],[-184.19264221191406,0,202.86337280273438],[-197.67230224609375,0,205.32579040527344],[-210.63116455078125,0,202.16049194335938],[-229.38467407226562,0,196.4720001220703],[-243.54635620117188,0,189.8831787109375],[-260.7453308105469,0,174.98341369628906],[-269.51422119140625,0,161.44052124023438],[-275.0980224609375,0,145.951416015625],[-274.0279846191406,0,141.45469665527344],[-257.14007568359375,0,142.08013916015625],[-254.2812042236328,0,124.5426025390625],[-253.26693725585938,0,118.1817626953125],[-253.56155395507812,0,107.34080505371094],[-232.73912048339844,0,110.57254028320312],[-224.17062377929688,0,117.52777099609375],[-217.7334747314453,0,130.98170471191406],[-212.30569458007812,0,140.82228088378906],[-204.5783233642578,0,146.18313598632812],[-197.34793090820312,0,146.68649291992188],[-189.268798828125,0,142.60858154296875],[-185.3580322265625,0,134.06124877929688],[-137.75469970703125,0,142.0763397216797],[-135.2400665283203,0,139.9351043701172]],[[-0.9962158203125,0,147.83245849609375],[-0.4546356201171875,0,129.28665161132812],[-144.89456176757812,0,128.47589111328125],[-144.6507568359375,0,141.82308959960938],[-136.9736328125,0,147.22459411621094]],[[9.593514442443848,0,276.1041564941406],[7.332314491271973,0,250.39306640625],[-6.082281112670898,0,248.71139526367188],[-8.09023666381836,0,247.30555725097656],[-8.07818603515625,0,230.14183044433594],[11.131179809570312,0,230.57565307617188],[15.35113525390625,0,230.57223510742188],[14.014877319335938,0,203.91168212890625],[6.27667236328125,0,193.3488006591797],[-4.757698059082031,0,195.93287658691406],[-7.089302062988281,0,203.9761505126953],[-13.461984634399414,0,206.1615753173828],[-27.83103370666504,0,215.4453887939453],[-26.396106719970703,0,224.385498046875],[-27.071453094482422,0,234.67495727539062],[-28.90755271911621,0,243.43841552734375],[-37.057334899902344,0,243.26039123535156],[-34.649654388427734,0,254.24478149414062],[-28.60091781616211,0,263.01611328125],[-17.601791381835938,0,274.451904296875],[-7.775566101074219,0,275.71484375],[3.0608673095703125,0,275.74029541015625],[8.35788345336914,0,277.02508544921875]],[[-12.733306884765625,0,75.98255920410156],[-18.024871826171875,0,18.184246063232422],[-22.066482543945312,0,12.793913841247559],[-20.809295654296875,0,3.5441665649414062],[-20.372085571289062,0,-7.829275131225586],[-19.0731201171875,0,-17.472291946411133],[-18.350173950195312,0,-27.528440475463867],[-19.348052978515625,0,-34.04181671142578],[-21.291244506835938,0,-46.72576141357422],[-21.605499267578125,0,-60.02449035644531],[-22.678253173828125,0,-63.261436462402344],[-29.546539306640625,0,-60.570770263671875],[-36.38999938964844,0,-56.854736328125],[-45.039031982421875,0,-51.838340759277344],[-49.90184020996094,0,-47.07221984863281],[-53.76490783691406,0,-43.11309051513672],[-57.70680236816406,0,-37.9825439453125],[-62.16032409667969,0,-29.52419090270996],[-65.46134948730469,0,-20.286752700805664],[-68.0089111328125,0,-9.84330940246582],[-69.13111877441406,0,-2.8212413787841797],[-70.85440063476562,0,6.910228729248047],[-68.75680541992188,0,25.239120483398438],[-64.04322814941406,0,37.59144592285156],[-59.12310791015625,0,48.37420654296875],[-53.13526916503906,0,55.42488098144531],[-47.353424072265625,0,59.62751770019531],[-37.06779479980469,0,66.30196380615234],[-27.114212036132812,0,71.5274429321289],[-11.638595581054688,0,75.42440795898438]],[[-12.444072723388672,0,75.21636962890625],[-11.709171295166016,0,76.2613296508789],[-17.266765594482422,0,19.199800491333008],[14.643318176269531,0,19.03775978088379],[23.550857543945312,0,8.128372192382812],[25.064285278320312,0,-8.629165649414062],[20.39935302734375,0,-17.19500732421875],[15.5123291015625,0,-25.35150718688965],[18.583648681640625,0,-30.533510208129883],[25.436065673828125,0,-33.9512939453125],[38.99615478515625,0,-34.408897399902344],[55.44157409667969,0,-35.37291717529297],[63.42340087890625,0,-21.3527889251709],[65.44268798828125,0,-8.691884994506836],[68.13192749023438,0,6.541389465332031],[67.43307495117188,0,17.789764404296875],[63.9014892578125,0,30.922290802001953],[55.45643615722656,0,44.88475799560547],[46.587249755859375,0,57.157569885253906],[36.1527099609375,0,66.9788818359375],[23.751251220703125,0,75.00408935546875],[-5.3455810546875,0,75.0659408569336]],[[14.37738037109375,0,185.21368408203125],[14.147688865661621,0,202.60316467285156],[16.444381713867188,0,208.48825073242188],[27.19098472595215,0,218.7067108154297],[32.87220001220703,0,226.97512817382812],[36.34788131713867,0,237.9964599609375],[36.808570861816406,0,246.43020629882812],[32.9708251953125,0,258.2674865722656],[23.410293579101562,0,268.01806640625],[16.0301513671875,0,272.4063720703125],[7.9572343826293945,0,275.8615417480469],[3.143383264541626,0,278.47900390625],[2.7281994819641113,0,252.2721710205078],[9.50352668762207,0,249.85324096679688],[9.740012168884277,0,238.20362854003906],[8.510566711425781,0,230.71502685546875],[9.068078994750977,0,199.88204956054688],[9.218061447143555,0,185.9960174560547]],[[18.5478515625,0,74.77117919921875],[17.447189331054688,0,190.64564514160156],[17.05633544921875,0,195.4185333251953],[-7.2385711669921875,0,194.47023010253906],[-7.941375732421875,0,76.11029052734375]]]});

var listIDS =[];
var anim_idle = null;
var anim_walk = null;
var area_points = [];
var skeleton = new RD.Skeleton();

function lerp(v1, v2, t) {
	// anim= anim_walk;
	// anim.assignTime( t * 0.001 * 1 );
	// character_user.children[0].skeleton.copyFrom( anim.skeleton );
	var x= v1[0]*(1.0-t)+v2[0]*t;
	var y =v1[1]*(1.0-t)+v2[1]*t;
	var z = v1[2]*(1.0-t)+v2[2]*t;
	return [x,y,z]
  }


function onWalk(prev_pos,new_pos,usr){
	if(ready){
		var t = getTime();
		var user = WORLD.users[usr.id];
		user.character.moveLocal([0,0,1]);
		user.character.position= lerp(prev_pos, new_pos, 0.001*t,user.character); 
		anim.assignTime( 0 );
		anim= anim_idle;
	}
	
}

function onNewUser(character_user,id){
	if(scene){
		if (!listIDS.includes(id)){
			var girl = new RD.SceneNode({
				scaling: 0.2,
				mesh: "girl/girl.wbin",
				material: "girl"
			});
			character_user.addChild(girl);
			scene.root.addChild( character_user );
			var skeleton = new RD.Skeleton();
			girl.skeleton = skeleton;
			character_user.personID = id;
			listIDS.push(id);
			return scene.root.children.length-1
		}
	}

}
function initCanvas()
{
	//create the rendering context
	var context = GL.create({width: window.innerWidth, height:window.innerHeight});
	renderer = new RD.Renderer(context);
	document.body.appendChild(renderer.canvas); //attach

	//PBRPipeline: NOT BEING USED NOW
	
	// pbrpipeline = new RD.PBRPipeline( renderer );
	// renderer.loadShaders("js/extra/pbr-shaders.glsl");
	// pbrpipeline.bgcolor.set([2,2,2,1]); //set background and ambient color
	// pbrpipeline.loadEnvironment( "data/pisa.hdre"); //set skybox image
	// renderer.pipeline = pbrpipeline;
	

	//create a scene
	scene = new RD.Scene();

	//get shaders from a single text file
	renderer.loadShaders("shaders.txt");

	//folder where stuff will be loaded	(textures, meshes, shaders )
	renderer.setDataFolder("data");
	renderer.autoload_assets = true;
	//renderer.default_texture_settings.magFilter = gl.NEAREST;
	//renderer.default_texture_settings.minFilter = gl.NEAREST_MIPMAP_NEAREST;

	//create camera
	camera = new RD.Camera();
	camera.perspective( 60, gl.canvas.width / gl.canvas.height, 0.1, 1000 );
	camera.lookAt( [0,40,100],[0,20,0],[0,1,0] );

	//global settings
	var bg_color = [0.1,0.1,0.1,1];

	//add some objects to the scene
	var mat = new RD.Material({	textures: { color: "girl/girl.png" } });
	mat.register("girl");
	var girl_pivot = new RD.SceneNode({
		position: [-40,0,0]
	});
	

	var girl = new RD.SceneNode({
		scaling: 0.2,
		mesh: "girl/girl.wbin",
		material: "girl"
	});
	girl_pivot.addChild(girl);
	prev_pos = [0, 0, 0];
	scene.root.addChild( girl_pivot );
	character = girl_pivot;
	WORLD.local_user.character=character;
	listIDS.push(WORLD.local_user.id);
	girl.skeleton = skeleton;

	var listUsers = WORLD.users;
	for (id in listUsers){
		var user = listUsers[id];
		if(user.id!=WORLD.local_user.id){
			// user.anim_idle = new RD.SkeletalAnimation();
			// user.anim_idle.load("data/girl/idle.skanim");
			// user.anim_walk = new RD.SkeletalAnimation();
			// user.anim_walk.load("data/girl/walking.skanim");
			var node=onNewUser(user.character,user.id);
			user.node=node;
		}
	}



	//skybox.color = [1,0,0,1];
	var skybox = new RD.SceneNode({scaling:80});
	skybox.loadGLTF("data/skybox.gltf");
	scene.root.addChild( skybox );
	//skybox.moveLocal([-200,0,130]);

	anim_idle = new RD.SkeletalAnimation();
	anim_idle.load("data/girl/idle.skanim");
	anim_walk = new RD.SkeletalAnimation();
	anim_walk.load("data/girl/walking.skanim");

	var torreef = new RD.SceneNode({scaling:2.3});
	torreef.loadGLTF("data/torreeffel.gltf");
	scene.root.addChild( torreef );

	
	var pisa = new RD.SceneNode({scaling:3});
	pisa.loadGLTF("data/pisa.gltf");
	scene.root.addChild( pisa );
	pisa.moveLocal([-200,0,130]);

	var pyPtahemwia = new RD.SceneNode({scaling:2});
	pyPtahemwia.loadGLTF("data/pyramidion-of-ptahemwia.gltf");
	scene.root.addChild( pyPtahemwia );
	pyPtahemwia.moveLocal([0,10,240]);
		
	var passage = new RD.SceneNode({scaling:3});
	passage.loadGLTF("data/pasage.gltf");
	scene.root.addChild( passage );

	var gioconda = new RD.SceneNode({scaling:[30, 50,1], position:[0,25,-40], rotation:[-0.1,0,0], mesh:"plane"});
	gioconda.name = "gioconda";
	gioconda.material = "gioconda"; 
	scene.root.addChild( gioconda );
	var mat = new RD.Material({textures: {color : "texture/gioconda.jpg"}}); 
	mat.register("gioconda")
	

	var damas = new RD.SceneNode({scaling:[15, 20,1], position:[-32,10,230], rotation:[0,0.7,0], mesh:"plane"});
	damas.name = "damas";
	damas.material = "damas"; 
	scene.root.addChild( damas );
	var mat = new RD.Material({textures: {color : "texture/damas.jpg"}}); 
	mat.register("damas")

	var venus = new RD.SceneNode({scaling:[30, 50,1], position:[-255,25,120], rotation:[0,0.7,0], mesh:"plane"});
	venus.name = "venus";
	venus.material = "venus"; 
	scene.root.addChild( venus );
	var mat = new RD.Material({textures: {color : "texture/venus.jpg"}}); 
	mat.register("venus")
	
	var info = new RD.SceneNode({scaling:5, position:[20,10,0],});
	info.loadGLTF("data/info.gltf");
	info.id = "info_effel"; 
	scene.root.addChild( info );

	var infoGioconda = new RD.SceneNode({scaling:5, position:[20,10,-20],rotation:[0,0.5,0]});
	infoGioconda.loadGLTF("data/info.gltf");
	infoGioconda.id = "info_gioconda"; 
	scene.root.addChild( infoGioconda );

	var infodamas = new RD.SceneNode({scaling:5, position:[-20,10,230],rotation:[0,0,0]});
	infodamas.loadGLTF("data/info.gltf");
	infodamas.id = "info_damas"; 
	scene.root.addChild( infodamas );

	var infoPtahemwia = new RD.SceneNode({scaling:5, position:[20,10,240],rotation:[0,0,0]});
	infoPtahemwia.loadGLTF("data/info.gltf");
	infoPtahemwia.id = "info_ptahemwia"; 
	scene.root.addChild( infoPtahemwia );

	var infoPisa = new RD.SceneNode({scaling:5, position:[-200,10,115],rotation:[0,0,0]});
	infoPisa.loadGLTF("data/info.gltf");
	infoPisa.id = "info_pisa"; 
	scene.root.addChild( infoPisa );

	var infoVenus = new RD.SceneNode({scaling:5, position:[-250,10,110],rotation:[0,0,0]});
	infoVenus.loadGLTF("data/info.gltf");
	infoVenus.id = "info_venus"; 
	scene.root.addChild( infoVenus );
	// var offscreen_canvas = document.createElement("button"); 
	// offscreen_canvas.width = 512; 
	// offscreen_canvas.height = 512; 
	
	// main loop ***********************

	//main draw function
	context.ondraw = function(){
		gl.canvas.width = document.body.offsetWidth;
		gl.canvas.height = document.body.offsetHeight;
		gl.viewport(0,0,gl.canvas.width,gl.canvas.height);

		var current_camera = camera;
		camera.target = character.localToGlobal([0,80,0]);
	
			
		var eye = character.localToGlobal([0,20,-30]);
		var target =  character.localToGlobal([0,20,30]);
		var eye2= vec3.lerp(vec3.create(),eye,current_camera.position,0.9);
		current_camera.lookAt(eye2, target, [0,1,0]);
		prev_pos=character.position;
		

		current_camera.perspective( 60, gl.canvas.width / gl.canvas.height, 0.1, 1000 );
		

		// if(!texture)
		// {
		// 	texture = new GL.Texture(offscreen_canvas.width, offscreen_canvas.height, {format: GL.RGB}); 
		// 	gl.texture["button"] = texture; 
		// }
		// if(texture)
		// 	texture.uploadImage(offscreen_canvas); 
		//clear
		renderer.clear(bg_color);
		//render scene
		renderer.render(scene,  current_camera);
		//renderer.renderPoints(walk_area.getVertices(),null,camera,null,null,5,gl.LINES);
	}
	
	var walking = [2,3,4,5,6,7,8,9];

	//main update
	context.onupdate = function(dt)
	{
		scene.update(dt);
		var t = getTime();
		var anim = anim_idle;
		var time_factor = 1;

		if(gl.keys["W"])
		{
			character.moveLocal([0,0,1]);
			character.position = walk_area.adjustPosition(character.position);
			anim = anim_walk;
		}
		else if(gl.keys["S"])
		{
			character.moveLocal([0,0,-1]);
			character.position = walk_area.adjustPosition(character.position);
			anim = anim_walk;
			time_factor = -1;
		}
		if(gl.keys["D"])
			character.rotate(-90*DEG2RAD*dt,[0,1,0]);
		else if(gl.keys["A"])
			character.rotate(90*DEG2RAD*dt,[0,1,0]);

		anim.assignTime( t * 0.001 * time_factor );
		girl.skeleton.copyFrom( anim.skeleton );
		anim.assignTime( 0 );

		for(i in WORLD.users){
			var user = WORLD.users[i];
			
			if(user.id!=WORLD.local_user.id && user && user.character.children.length>0 && user.character.children[0].skeleton && user.goPos){
				//user.character.moveLocal([0,0,1]);
				//user.character.position= vec3.lerp(user.character.position, user.goPos, 0.001*t);
				var new_pos= lerp(user.character.position, user.goPos, 0.02); 
				user.character.lookAt(user.character.position,new_pos);
				var anim_id = anim_idle;
				var time_factor = 1;
				var factor = 0.001;
				user.character.position=new_pos;
				character.position = walk_area.adjustPosition(character.position);
				//user.character.position = walk_area.adjustPosition(user.character.position);
				var x = Math.abs(user.character.position[0]-user.goPos[0]);
				var z = Math.abs(user.character.position[2]-user.goPos[2]);
				if(x>1.5 || z>1.5){
					
					anim_id=anim_walk;
					//console.log(z,x);
				}
				else {
					anim_id = anim_idle;
				}

				anim_id.assignTime( t *factor * time_factor );
				user.character.children[0].skeleton.copyFrom( anim_id.skeleton );
				anim_id.assignTime( 0 );
			}
		}
		

		var now = getTime() * 0.001;
		// if(now%2==0)
		// 	info.scale(4); 
		// else
		// 	info.scale(5); 
	}
	
	//user input ***********************

	//detect clicks
	context.onmouseup = function(e)
	{
		if(e.click_time < 200) //fast click
		{
			//compute collision with floor plane
			var ray = camera.getRay(e.canvasx, e.canvasy);
			
			var node = scene.testRay( ray );
			console.log(node._parent.id); 

			if(node._parent.id == "info_effel")
			{
				var name = "Torre Eiffel"; 
				var text = `La Torre Eiffel es una construcci\ón de hierro de 300 metros de altura que fue creada para la Exposición Universal de París de 1889. Actualmente constituye el símbolo más representativo de París. 
				
				Con un diseño creado por Gustave Eiffel, la construcción de la Torre Eiffel duró poco más de dos años y en ella trabajaron 250 obreros.

				A principios del siglo XX, con la llegada de las guerras mundiales, las autoridades encontraron su utilidad como antena de radiodifusión y con ella captaron mensajes que ayudaron a los aliados de forma decisiva.`; 
				descriptionInfo(name, text); 
			}
			if(node._parent.id == "info_gioconda")
			{
				var name = "La Gioconda"; 
				var text = `La Mona Lisa, también conocida como La Gioconda, es una obra del Renacimiento pintada por artista multifacético Leonardo da Vinci. El cuadro fue pintado entre los años 1503 y 1506 y, hoy por hoy, es uno de los más importantes símbolos de la cultura occidental. Se encuentra actualmente en el Museo del Louvre en París, Francia.
				
				Si quieres verlo tendrás que viajar a Francia, ya que se exhibe en el Museo del Louvre, en la ciudad de París. Los visitantes suelen quedarse sorprendidos la primera vez que lo ven ya que en realidad es un cuadro bastante pequeño que mide 77 x 53 cms.`; 
				descriptionInfo(name, text); 
				
			}
			if(node._parent.id == "info_damas")
			{
				var name = "Damas"; 
				var text = `Cuadro de la época egipcia`; 
				descriptionInfo(name, text); 
				
			}
			if(node._parent.id == "info_ptahemwia")
			{
				var name = "Piramidión de Ptahemwia"; 
				var text = `El piramidión de Ptahemwia (dinastía XIX, período Ramesside, c. 1200 a. C.) caliza, 28 cm de ancho, 42 cm de alto) también muestra escenas relacionadas con el sol.:252 El dios del sol, Re-Horakhti, y el dios del inframundo, Osiris, se muestran en una cara lateral. Frente a los dos dioses, en la cara lateral adyacente, está el difunto Ptahemwia, de pie en una pose de ofrenda, frente a tres columnas de jeroglíficos.`; 
				descriptionInfo(name, text); 
				
			}
			if(node._parent.id == "info_pisa")
			{
				var name = "Torre de Pisa"; 
				var text = `La torre de Pisa o torre inclinada de Pisa (en italiano: torre pendente di Pisa) es la torre campanario de la catedral de Pisa, situada en la plaza del Duomo de Pisa, en la ciudad del mismo nombre, municipio de la región italiana de la Toscana y capital de la provincia homónima de Italia.
				
				La torre comenzó a inclinarse tan pronto como se inició su construcción en agosto de 1173. En 1987, el conjunto patrimonial de la plaza del Duomo fue declarado Patrimonio de la Humanidad por la Unesco`; 
				descriptionInfo(name, text); 
				
			}
			if(node._parent.id == "info_venus")
			{
				var name = "El nacimiento de Venus"; 
				var text = `El cuadro El nacimiento de Venus o La nascita di Venere de Sandro Botticelli fue pintado entre los años 1482 y 1485, en pleno contexto histórico del Renacimiento. Se trata del primer cuadro en tela pintado en Tuscania, Italia. La obra mide aproximadamente 1,80 metros de alto y 2,75 metros de largo y se encuentra actualmente en el Museo Uffizi en Florencia, Italia.
				
				El nacimiento de Venus se inscribe en la sensibilidad propia del Renacimiento, tiempo en que se renovó la representación de los mitos de la Antigüedad Clásica, en los cuales los renacentistas encontraban verdades escondidas sobre la naturaleza humana. Esto significó una verdadera defensa del humanismo antropocéntrico frente al teocentrismo del pasado.`; 
				descriptionInfo(name, text); 
				
			}
			
			
			
			if( ray.testPlane( RD.ZERO, RD.UP ) ) //collision
			{
				console.log( "floor position clicked", ray.collision_point );
				// if(walk_area.isInsideArea(ray.collision_point)){
				// 	
				// walk_area.clear()
				// area_points.push(typedArrayToArray(ray.collision_point));
				// walk_area.addShape(area_points);
				

			}
		}
	}

	context.onmousemove = function(e)
	{
		if(e.dragging)
		{
			//orbit camera around
			//camera.orbit( e.deltax * -0.01, RD.UP );
			//camera.position = vec3.scaleAndAdd( camera.position, camera.position, RD.UP, e.deltay );
			camera.moveLocal([-e.deltax*0.1, e.deltay*0.1,0]);
		}
	}

	context.onmousewheel = function(e)
	{
		//move camera forward
		camera.moveLocal([0,0,e.wheel < 0 ? 10 : -10] );
	}

	//capture mouse events
	context.captureMouse(true);
	context.captureKeys();

	//launch loop
	context.animate();

}

function togglePopup()
{
	//cancel speaking
	speechSynthesis.cancel(); 
	document.getElementById("popup-AddEvent").classList.toggle("active"); 
	var divOverlay = document.querySelector("#Description_overlay"); 
	//Borrar hijos del div overlay 
	while (divOverlay.firstChild) {
		divOverlay.removeChild(divOverlay.firstChild);
	}
}

function descriptionInfo(name, text)
{
	togglePopup(); 
	var divOverlay = document.querySelector("#Description_overlay"); 
	var divEvent = document.createElement("h3"); 
	divEvent.innerText = name; 
	var div1Event = document.createElement("h4"); 
	div1Event.innerText = text; 
	
	speakDescription(divEvent.innerText); 
	speakDescription(div1Event.innerText); 
	divOverlay.appendChild(divEvent); 
	divOverlay.appendChild(div1Event); 
}

function hidenTextArea()
{
	var element = document.querySelector("#writtenArea"); 
	var one = true; 
	if(boolText  && one){
		boolText=false; 
		element.style.display = 'none';  
		one = false; 
	}
	if(!boolText && one){
		boolText = true; 
		element.style.display = 'block';   
		one = false;
	}
}
/* example of computing movement vector
	var delta = vec3.sub( vec3.create(), target, sprite.position );
	vec3.normalize(delta,delta);
	vec3.scaleAndAdd( sprite.position, sprite.position, delta, dt * 50 );
	sprite.updateMatrices();
	sprite.flags.flipX = delta[0] < 0;
*/
