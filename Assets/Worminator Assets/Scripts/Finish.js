var spawnPoint : GameObject;
static var finish = false;

function OnCollisionEnter(hit : Collision) {
	
	//If we have touched the player:
	if(hit.gameObject.tag == "Player") 
	{	
 	finish = true;
 	Debug.Log("Player Finished");
	}
}

