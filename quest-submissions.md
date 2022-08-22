# Emerald DApp Course Quest Submissions

## Chapter 1 Day 1 (Day 1)

**1. Explain what the Blockchain is in your own words. You can read this to help you, but you don't have to: https://www.investopedia.com/terms/b/blockchain.asp**

A blockchain is a decentralized digital public ledger. Broken down, that means the blockchain is a record of all transactions made on a specific network, no single entity has control over the blockchain, the blockchain exists solely in the digital realm, and anyone can view, make changes to, or store data on the blockchain at any time (it's an open and transparent network).

.

**2. Explain what a Smart Contract is. You can read this to help you, but you don't have to: https://www.ibm.com/topics/smart-contracts**

A Smart Contract is a program (kind of like a middleman), or "rulebook," that a developer makes on a blockchain so that users can interact with/do certain things on the blockchain.

.

**3. Explain the difference between a script and a transaction.**

A transaction modifies data on a blockchain and costs money (gas), whereas scripts read data from a blockchain and are free.

.

**4. What is the difference between Testnet and Mainnet? When would you develop on each?**

Testnet is an environment/blockchain where everything is fake, and you would develop on Testnet when you're just testing out the bugs in your smart contract or DApp. It's okay if you mess up on Testnet because no one cares, there's no real money involved. Testnet is for testing unfinished products.

Mainnet is an environment/blockchain where everything is real, and you would only develop on Mainnet when you want to make permanent changes to your smart contracts or DApps on the blockchain. If you mess up on Mainnet, that's usually very bad because there is real money involved, therefore people care. Mainnet is for finished products.

## Chapter 1 Day 2 (Day 2)

NO QUESTS!!!

## Chapter 2 Day 1 (Day 3)

**1. What is the difference between frontend and backend? Can you provide a real life example (you can't use the one in this chapter)?**

Frontend is what the user of a website is experiencing and how they're interacting with it (what is being displayed on the website, how the website looks/the styling of the website, what happens on the website when a user clicks something on the website), whereas backend is what's going on behind the scenes of a website a user is interacting with (like fetching information, storing information in a database, doing complex procedures to prevent loading times from being too long).

An example of frontend is Twitter when you are:
- Scrolling through your home feed
- Looking at people's Twitter posts
- Blocking spammers from your DMs
- Liking and retweeting someone's post, where the heart button turns red and the retweet button turns green

An example of backend is Twitter when you are:
- Clicking on a user's profile: the backend will load all data about that user's account so the frontend can display it
- Making a Tweet: the backend will take the data on a Tweet, like the text and image (if applicable), and send it to a database somewhere

.

**2. What is the difference between global styling and module styling?**

Global styling is a CSS file that applies to EVERYTHING and will affect everything, whereas modules styling only applies to the files that they are imported in. 

.

**3. Take a screenshot of the running application and upload it to your quest submissions.**

![image](https://user-images.githubusercontent.com/104703860/182711060-3ee4843a-8cb2-49ee-838b-a3bbf9bcefa7.png)

.

**4. Upload the link to your public GitHub repository.**

https://github.com/TheJuiceIsSimulated/beginner-emerald-dapp

## Chapter 2 Day 2 (Day 4)

**1. Change the color of "Emerald DApp" to whatever color you want**

**2. Change the font size of the title**

**3. Change the "Emerald DApp" link to a different link (this means messing with the `<a>` tag)**
  
**4.There are two parts.**
  
**4a. Inside of your `<main>` tag, add a `<p>` tag and put whatever text you want in it.**

**4b. Go to the `.main` class and add this line: `flex-direction: column`. Watch what it does!**

**The box model for Quest #4 looks like this:**

![image](https://user-images.githubusercontent.com/104703860/185212537-92a9a3e8-1d70-44d6-ad45-15d85b3cb393.png)

**Take a screenshot of your changes (both the code and the result) and upload it to your quests**

.

***ANSWERS***

#1, #2, #4b
  
![image](https://user-images.githubusercontent.com/104703860/185213277-b7adee7b-10bd-4925-abcf-26c6d270feb9.png)
  
#3, #4a
  
![image](https://user-images.githubusercontent.com/104703860/185214493-7642ab2e-85b8-42ea-94e7-612f8428cd68.png)

#1-#4b
  
![image](https://user-images.githubusercontent.com/104703860/185214614-d06b0ccd-af43-4d8b-b219-1d42e7d652ff.png)

## Chapter 2 Day 3 (Day 5)

**1. In this part, we will be adding another button and changing up some styling.**
* Wrap the `<button>` tag we added inside of a `<div>`. Add a `className` called `styles.flex` to that `<div>`. Make sure the `<button>` is inside of it.
* Then, add another `<button>` inside the `<div>` tag and put "Goodbye" inside of it.
* In `./styles/Home.module.css`, add a new style for the "flex" class, and inside of it, add one line: `display: flex`.
* Your page should now look like this:

![image](https://user-images.githubusercontent.com/104703860/185459450-3e555c4a-1b43-406a-a46c-45965814e556.png)

**Here is the box model for what your code should look like:**

![image](https://user-images.githubusercontent.com/104703860/185459491-f72780a0-9b8a-4c91-8184-1c856d6ec1af.png)

**2. Now we're going to add an action to your new button.**

* To your second button, add an `onClick` handler and call a function named `printGoodbye`.
* Define a new function called `printGoodbye` under the `printHello` function
* Make it `console.log` "Goodbye"

**To submit your quests, take a picture of both the screen and the console logs in the developer console.**

.

***ANSWERS***

#1 3rd Bullet Point (Not sure if this code is correct)

![image](https://user-images.githubusercontent.com/104703860/185460540-cef38a47-0260-42b5-a1dd-eb230b88efe4.png)

#1-#2

![image](https://user-images.githubusercontent.com/104703860/185461694-24702e7a-7919-4723-b852-fce352367df9.png)

#1-#2

![image](https://user-images.githubusercontent.com/104703860/185462098-86ec05d4-ea7d-48ef-9360-505d8a153194.png)

## Chapter 2 Day 4 (Day 6)

**1. Change the `printHello` function to be called `runTransaction`.**

**2. Change the "Hello" text inside the button to "Run Transaction".**

**3. Inside the `runTransaction` function, add some code to console log your `newGreeting` variable to the developer console.**

**4. Go back to your webpage, type something into the input box, and press "Run Transaction". Open your developer console and you will see some thing being printed!**

**To upload your quests, show us your `./pages/index.js` file and take a screenshot of your `newGreeting` being printed to the developer console.**

.

***ANSWERS***

#1-3

![image](https://user-images.githubusercontent.com/104703860/185494541-a022b796-8c49-4143-9faf-2afbbbb759e2.png)

#4

![image](https://user-images.githubusercontent.com/104703860/185494608-1bbe530b-5f65-40a6-b4fc-9d8df7890b9c.png)

## Chapter 3 Day 1 (Day 7)

**1. Deploy a contract to account 0x03 called "JacobTucker". Inside that contract, declare a constant variable named is, and make it have type String. Initialize it to "the best" when your contract gets deployed.**

![image](https://user-images.githubusercontent.com/104703860/185513095-87fc8f99-2595-4459-a05f-755969856b3c.png)

.

**2. Check that your variable is actually equals "the best" by executing a script to read that variable. Include a screenshot of the output.**

![image](https://user-images.githubusercontent.com/104703860/185513126-49a2193f-ed74-4e5b-94c7-ed1aa458f2f8.png)

## Chapter 3 Day 2 (Day 8)

**1. Explain why we wouldn't call `changeGreeting` in a script.**

We wouldn't call `changeGreeting` in a script because scripts are only for reading/viewing data on the blockchain, not changing/modifying data on the blockchain. We would have to use a transaction if we wanted to call `changeGreeting` and change/modify data on the blockchain.

.

**2. What does the `AuthAccount` mean in the `prepare` phase of the transaction?**

In the `prepare` phase of the transaction, the `AuthAccount` is a type in Cadence that is being called when you press the "Approve" button on a transaction and then accesses the data in your account. 

.

**3. What is the difference between the `prepare` phase and the `execute` phase in the transaction?**

The `prepare` phase in a transaction accesses the information/data in your account, whereas the `execute` phases calls functions and does stuff to change the data on the blockchain (in the smart contract you're applying the transaction to).

.

**4. This is the hardest quest so far, so if it takes you some time, do not worry! I can help you in the Discord if you have questions.**

* Add two new things inside your contract:
  * A variable named `myNumber` that has type `Int` (set it to 0 when the contract is deployed)
  * A function named `updateMyNumber` that takes in a new number named `newNumber` as a parameter that has type `Int` and updates `myNumber` to be `newNumber`

![image](https://user-images.githubusercontent.com/104703860/185518112-8f32d53a-17bb-46f9-851a-625daaa7cb32.png)

* Add a script that reads `myNumber` from the contract

![image](https://user-images.githubusercontent.com/104703860/185518161-cd9d92db-818f-433e-a1a1-7c1284a559b7.png)

* Add a transaction that takes in a parameter named `myNewNumber` and passes it into the `updateMyNumber` function. Verify that your number changed by running the script again.

![image](https://user-images.githubusercontent.com/104703860/185518182-2c16f953-5648-4ea9-8ba1-804d02bad691.png)

![image](https://user-images.githubusercontent.com/104703860/185518190-21a878fd-aa57-416a-b11b-e6e7a9f2e747.png)

## Chapter 3 Day 3 (Day 9)

**1. Create a new smart contract in Cadence that has at least the following two things:**

* A variable to hold a value (like a number or a piece of text)
* A function to change that variable

![image](https://user-images.githubusercontent.com/104703860/185773210-60b46989-4ba9-46d6-9c00-4b7639d271e3.png)

**After, deploy that contract to the same testnet account you generated today.**

![image](https://user-images.githubusercontent.com/104703860/185773223-ae1184d7-c535-4d01-a884-abba506bcc22.png)

.

**2. Send a screenshot of you reading the variable from your new contract using the Flow CLI**

![image](https://user-images.githubusercontent.com/104703860/185773320-ddf70684-1774-485e-96ca-abd43c1d396e.png)

![image](https://user-images.githubusercontent.com/104703860/185773323-d996e350-b4ed-46a2-b231-036f5ea5eacd.png)

.

**3. Send a screenshot of you changing the variable from your new contract using the Flow CLI**

![image](https://user-images.githubusercontent.com/104703860/185773368-62f274a0-18b6-42b0-b0e0-a11d5440d847.png)

![image](https://user-images.githubusercontent.com/104703860/185773480-6785be9f-c147-4994-9d80-0d70586fce59.png)

.

**4. Send a screenshot of you reading your changed variable from your new contract using the Flow CLI**

![image](https://user-images.githubusercontent.com/104703860/185773539-9cf83079-ca69-4e99-ad09-517b7075f620.png)

.

**5. Go to https://flow-view-source.com/testnet/. Where it says "Account", paste in the Flow address you generated and click "Go". On the left hand side, you should see your "HelloWorld" contract and your new contract. Isn't it so cool to see them live on Testnet? Then, send the URL to the page.**

* EXAMPLE: https://flow-view-source.com/testnet/account/0x90250c4359cebac7/

https://flow-view-source.com/testnet/account/0x5eedf13288966e43

## Chapter 4 Day 1 (Day 10)

1. How did we get the address of the user? Please explain in words and then in code.

We get the address of the user through the `user` variable, since the address of the user is stored in the `user` variable.

.

2. What do `fcl.authenticate` and `fcl.unauthenticate` do?

.

3. Why did we make a `config.js` file? What does it do?

.

4. What does our `useEffect` do?

`useEffect` is a function that runs every time something that is put in the `[]` brackets happens in our DApp. In this case, because the `[]` brackets are empty, it means make sure the `user` variable keeps its value every time the DApp page is refreshed (In code, this means run `fcl.currentUser.subscribe(setUser)` every time the DApp page is refreshed.). 

.

5. How do we import FCL?

We import the Flow Client Library by first installing it by running the command `npm install @onflow/fcl` in the terminal, then by writing the code `import { config } from "@onflow/fcl";` in our `config.js` file.

.

6. What does `fcl.currentUser.subscribe(setUser);` do?

`fcl.currentUser.subscribe(setUser);` 

.

## Chapter 4 Day 2 (Day 11)

## Chapter 4 Day 3 (Day 12)

## Chapter 4 Day 4 (Day 13)

## Chapter 5 Day 1 (Day 14)

## Chapter 5 Day 1 (Day 15)

## Chapter 5 Day 2 (Day 16)
