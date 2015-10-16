#pragma strict


private var hit: RaycastHit;

function Start () {

}

function Update () {
    //touch input control

    var ray = Camera.main.ScreenPointToRay(Input.mousePosition);
    if(Input.GetMouseButtonDown(0)){ //Get user input
        if(Physics.Raycast (ray, hit, Mathf.Infinity)){ //Raycast detection
            if(hit.collider.tag == "breakable"){
                //print("Hit!");
                Smash();
            }
        }  
    }
}

function Smash(){
    //find object HP script
    var script1: ObjectHP = hit.collider.GetComponent("ObjectHP");

    if(script1.currentHP>0){
        script1.currentHP-=10.0f;
        GUIControl_Gameplay.score+=10;
        print("HP: "+script1.currentHP);
    }
    //if(script1.currentHP<=0){
    //    print("broken!");
    //}
}