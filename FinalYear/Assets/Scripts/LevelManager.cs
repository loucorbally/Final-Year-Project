using System.Collections;
using System.Collections.Generic;
using UnityEngine;
using UnityEngine.SceneManagement;

public class LevelManager : MonoBehaviour {

    public bool timedLevel = false;
    public float timeRemaining = 20.0f;
    Coin Coin;

	// Use this for initialization
	void Start () {
        
	}
	
	// Update is called once per frame
	void Update () {

            if (Input.GetKeyDown(KeyCode.Escape))
            {
            SceneManager.LoadScene(1);
            Debug.Log("Escape key pressed, exiting level");
        }

            if (timedLevel)
        {
            timeRemaining -= Time.deltaTime;
            if(timeRemaining <0)
            {
                SceneManager.LoadScene(1);
                Debug.Log("No time remaining, exiting level");
            }
        }
        if (Coin.CoinCount <= 0)
        {
            SceneManager.LoadScene(1);
            Debug.Log("No coins left on level, exiting level");
        }
    }






    /*public void LoadNextScene()
    {
        int currentSceneIndex = SceneManager.GetActiveScene().buildIndex; // get the current scene index        
        SceneManager.LoadScene(currentSceneIndex + 1); // load next scene
    }

    public void LoadMenu()
    {
        SceneManager.LoadScene(0); // load next scene
    }

    public void LoadMainGame()
    {
        SceneManager.LoadScene(1); // load next scene
    }
    public void LoadLevel2()
    {
        SceneManager.LoadScene(2);//Load Next scene
    }*/
}
