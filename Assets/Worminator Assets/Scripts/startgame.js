renderer.material.color = Color.black;

function OnMouseEnter () 
{
	renderer.material.color = Color.red;
}
function OnMouseExit()
{
	renderer.material.color = Color.black;
}


function OnMouseDown()
{
	Application.LoadLevel(1);
}