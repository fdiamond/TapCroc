#pragma strict

var controlTexture: Texture2D;

function Start () {

}

function Update () {

}

function OnGUI(){
    GUI.Label(Rect(Screen.width, Screen.height,128,128),controlTexture);
}