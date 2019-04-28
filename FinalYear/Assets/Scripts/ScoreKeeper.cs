using System.Collections;
using System.Collections.Generic;
using UnityEngine;

public class ScoreKeeper : MonoBehaviour
{

    int score = 0;

    // Use this for initialization
    void Start()
    {

    }

    // Update is called once per frame
    void Update()
    {

    }

    public void IncrementScore(int amount)
    {
        score += amount;
        //displayScore();
        //AudioSource source = GetComponent<AudioSource>();
        //source.Play();
    }

    void displayScore()
    {
        print("Your score is: " + score);
    }

    public int getScore()
    {
        return score;
    }
}
