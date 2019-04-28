using System.Collections;
using System.Collections.Generic;
using UnityEngine;
[RequireComponent(typeof(AudioSource))]

public class Coin : MonoBehaviour {
    public static int CoinCount = 0;
    public AudioClip coinCollect;
    AudioSource audioSource;

    //speed at which coin rotates
    public float speed = 100.0f;

    public Renderer CoinVisibility { get; private set; }



    // Use this for initialization
    void Awake () {
        audioSource = GetComponent<AudioSource>();
        ++Coin.CoinCount;
	}
    private void OnTriggerEnter(Collider col)
    {
        //If player collects coin then the coin should be destroyed
        if (col.CompareTag("Player"))
        {
            audioSource.PlayOneShot(coinCollect, 0.7F);
            CoinVisibility = GetComponent<Renderer>();
            CoinVisibility.enabled = false;

            Destroy(gameObject, coinCollect.length);
        }
    }
    private void OnDestroy()
    {
        --Coin.CoinCount;
        //Check remaining coins
      
    }

    // Update is called once per frame
    void Update () {

        //rotates coin for visual affect
        transform.Rotate(Vector3.up * speed * Time.deltaTime);

    }
}
