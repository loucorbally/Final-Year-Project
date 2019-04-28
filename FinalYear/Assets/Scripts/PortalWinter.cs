using System.Collections;
using System.Collections.Generic;
using UnityEngine;
using UnityEngine.SceneManagement;

public class PortalWinter : MonoBehaviour {
    private LevelManager LevelManager;
    void OnTriggerEnter(Collider collision)
    {
        if (collision.gameObject.tag.Equals("Player"))
        {
            SceneManager.LoadScene(2);
            Debug.Log("Load Scene 4 function called");
        }
    }
}
