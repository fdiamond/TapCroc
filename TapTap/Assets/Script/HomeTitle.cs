using UnityEngine;
using System.Collections;


public class HomeTitle : MonoBehaviour {

    public Texture2D controlTexture;

    // Use this for initialization
    void Start () {
	
	}
	
	// Update is called once per frame
	void Update () {
	
	}

    void OnGUI()
    {
        GUI.Label(new Rect(Screen.width, Screen.height, 128, 128), controlTexture);
    }
}
