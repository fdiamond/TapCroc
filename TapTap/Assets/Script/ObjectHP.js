#pragma strict

var currentHP: float=100.0f;
var pieces: GameObject;

function Start () {
}

function Update () {
    if(currentHP<=0){
        print("Broken!");

        Destroy(gameObject);
        var piecesTemp: GameObject = Instantiate(pieces,transform.position,transform.rotation) as GameObject;

        Destroy(piecesTemp,3.90f);

    }
}