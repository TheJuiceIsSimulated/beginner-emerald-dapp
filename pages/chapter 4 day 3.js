import * as fcl from "@onflow/fcl"


export default function Home(){

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
        executeScriptThree()
      }, [])

}