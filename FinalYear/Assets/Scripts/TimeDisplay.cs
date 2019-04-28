using System.Collections;
using System.Collections.Generic;
using UnityEngine;
using UnityEngine.UI;

public class TimeDisplay : MonoBehaviour {

 
    LevelManager lm;
    public Text timeText;

    // Use this for initialization
    void Start () {
       
        lm = FindObjectOfType<LevelManager>();
        
        //timeText = GetComponent("Time") as Text;
    }
	
	// Update is called once per frame
	void Update () {

        timeText.text = "Time: " + lm.timeRemaining.ToString("0");
	}
}
