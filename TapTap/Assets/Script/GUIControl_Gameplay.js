#pragma strict

static var score: int = 0;
var textStyle: GUIStyle;

function Start () {

}

function Update () {

}

function OnGUI () {

    GUI.Label (Rect (Screen.width/2-128,0,256,32),String.Format("{0}", score), textStyle );
    //if(GUI.Button (Rect (Screen.width/2-64, Screen.height/2-64,128,128),"",playBtn)){ //if button clicked, so tell unity to :
    //    //load gameplay page
    //    print("Gameplay Page");
    //}
}