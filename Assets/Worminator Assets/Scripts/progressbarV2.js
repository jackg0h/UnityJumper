var barWidth : float = 20;
var barHeight : float = 300;
var progIcon : Texture;
private var barProgress : float;
var startPoint : Transform;
var endPoint : Transform;
var playerPos : Transform;

 
    function Update()
    {
    // get level distance by subtracting start and end
    var totalDist : float = Vector3.Distance(startPoint.position, endPoint.position);
    //get player distance from start in X axis only so slopes/ height doesn't  affect result
    var playerDist : float = Vector3.Distance(startPoint.position,playerPos.position);
    //get players progress as a percentage of the whole distance
    var playerProgress : float = playerDist / totalDist * 100;
 
    //turn the playerProgress percentage back into the scale of barWidth
    barProgress = playerProgress / 100 * barHeight; 
    }
    function OnGUI()
    {
    //create a GUI group with width of the bar and twice its height
    GUI.BeginGroup (new Rect (10, 90, barWidth, barHeight*2)); 
    //draw box
    GUI.Box(Rect (0, 0, barWidth, barHeight), "");
    //draw icon
    GUI.Label (Rect(4,290-barProgress, progIcon.width, progIcon.height),progIcon);
    GUI.EndGroup();
    GUI.contentColor = Color.black;
    GUI.Label(Rect(progIcon.width/2, 65, 50, barHeight), "End");
    GUI.Label(Rect(barWidth-11, 390, 100,barHeight), "Start");
    }