#pragma strict

var playBtn: GUIStyle;

function Start () {

}

function Update () {

}

function OnGUI () {
    //if(GUI.Button (Rect (Screen.width/2-64, Screen.height/2-64,128,128),playBtn)){ //if button clicked, so tell unity to :
    if(GUI.Button (Rect (Screen.width/2-64, Screen.height/2-64,128,128),"",playBtn)){ //if button clicked, so tell unity to :
        //load gameplay page
        print("Gameplay Page");
    }
}