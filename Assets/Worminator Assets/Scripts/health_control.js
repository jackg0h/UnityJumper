var health1 : Texture2D; 
var health2 : Texture2D; 
var health3 : Texture2D;
var health0 : Texture2D;

static var LIVES = 3;

function Update () {

	switch(LIVES)
	{
	case 3:
	guiTexture.texture = health3;
	break;
	case 2:
	guiTexture.texture = health2;
	break;
	case 1:
	guiTexture.texture = health1;
	break;
	case 0:
	guiTexture.texture = health0;
	DeathZone.playerIsRunOutLife = true;
	break;
	}

}