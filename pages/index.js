import Head from 'next/head'
import styles from '../styles/Home.module.css'
import Nav from "../components/Nav.jsx"
import { useState, useEffect } from 'react'
import * as fcl from "@onflow/fcl"


export default function Home() {
  const [newGreeting, setNewGreeting] = useState('');
  const [greeting, setGreeting] = useState('');
  const [newNumber, setNewNumber] = useState('');

  async function runTransaction() {

    const transactionId = await fcl.mutate({
      cadence: `
      import HelloWorld from 0x5eedf13288966e43
  
      transaction(myNewGreeting: String) {
  
        prepare(signer: AuthAccount) {}
  
        execute {
          HelloWorld.changeGreeting(newGreeting: myNewGreeting)
        }
      }
      `,
      args: (arg, t) => [
        arg(newGreeting, t.String)
      ],
      proposer: fcl.authz,
      payer: fcl.authz,
      authorizations: [fcl.authz],
      limit: 999
    })

  }
    
    async function runTransactionTwo() {
      const transactionId = await fcl.mutate({
        cadence: `
        import SimpleTest from 0x6c0d53c676256e8c
    
        transaction(myNewNumber: Int) {
    
          prepare(signer: AuthAccount) {}
    
          execute {
            SimpleTest.updateNumber(newNumber: myNewNumber)
          }
        }
        `,
        args: (arg, t) => [
          arg(newNumber, t.Int)
        ],
        proposer: fcl.authz,
        payer: fcl.authz,
        authorizations: [fcl.authz],
        limit: 999
      })

    console.log("Hello! You have just run a transaction.");
    console.log("Changing the greeting to: " + newGreeting);
    console.log("Here is the transactionId: " + transactionId);
  
    await fcl.tx(transactionId).onceSealed();
    executeScript();

    await fcl.tx(transactionId).onceSealed();
    executeScriptTwo();

  }

  async function executeScript() {
    const response = await fcl.query({
      cadence: `
      import HelloWorld from 0x5eedf13288966e43
  
      pub fun main(): String {
          return HelloWorld.greeting
      }
      `, 
      args: (arg, t) => [] // ARGUMENTS GO IN HERE
    })
  
    setGreeting(response);
  }

  async function executeScriptTwo() {
    const response = await fcl.query({
      cadence: `
      import SimpleTest from 0x6c0d53c676256e8c
  
      pub fun main(): Int {
          return SimpleTest.number
      }
      `, 
      args: (arg, t) => [] // ARGUMENTS GO IN HERE
    })
  
    console.log("Response from Script Two: " + response);
  }

  async function executeScriptThree() {
    const response = await fcl.query({
      cadence: `
      pub fun main(
        a: Int, 
        b: String, 
        c: UFix64, 
        d: Address, 
        e: Bool,
        f: String?,
        g: [Int],
        h: {Int: String}
      ) {
        // Example:
        // a = 25
        // b = "I am so utterly good-looking."
        // c = 25.0
        // d = 0x30cf7c47ed237b76
        // e = true
        // f = nil
        // g = [25, 27, 18]
        // h = {1: "Toyota Prius", 100: "Ferrari Enzo"}
      }
      `,
      args: (arg, t) => [
        arg("25", t.Int),
        arg("I am so utterly good-looking", t.String),
        arg("25.0", t.UFix64),
        arg("0x30cf7c47ed237b76", t.Address),
        arg(true, t.Bool),
        arg(null, t.Optional(t.String)),
        arg([25, 27, 18], t.Array(t.Int)),
        arg(
          [
            { key: 1, value: "Toyota Prius" },
            { key: 100, value: "Ferrari Enzo" }
          ], 
          t.Dictionary({ key: t.Int, value: t.String })
        )
      ]
    })

    console.log("Response from Script Three:" + response)

  }

  useEffect(() => {
    executeScript()
  }, [])

  useEffect(() => {
    executeScriptTwo()
  }, [])

  useEffect(() => {
    executeScriptThree()
  }, [])

  return (
    <div className={styles.container}>
      <Head>
        <title>Emerald DApp</title>
        <meta name="description" content="Created by The Juice and Emerald Academy" />
        <link rel="icon" href="https://i.imgur.com/hvNtbgD.png" />
      </Head>

      <Nav />

    <div className={styles.welcome}>
    <h1 className={styles.title}>
    Welcome to my first-ever <a href="https://tell.ie/NancyARubel" target="_blank">Emerald DApp!</a>
    </h1>
    <p>Is The Juice worth the squeeze?</p>
    </div>

<main className={styles.main}>
  <p>{greeting}</p>
  <div className={styles.flex}>
    <input onChange={(e) => setNewGreeting(e.target.value)} placeholder="Is it, Punk?" />
    <button onClick={runTransaction}>Run Transaction</button>
    <button onClick={runTransactionTwo}>Run Transaction Two</button>
  </div>
</main>
  </div>

    )
  }
