const { readFile } = require("fs")
const { writeFile } = require("fs")

readFile("./content/first.txt", { encoding: "utf-8" }, (err, result) => {
    if (err) {
        console.log(err)
        return
    }
    const first = result
    readFile("./content/second.txt", { encoding: "utf-8" }, (err, result) => {
        if (err) {
            console.log(err)
            return
        }
        const second = result
        writeFile("./content/asyncFile.txt", `i want to append 1st and second ${first, second}`, { flag: 'a' }, (err, result) => {
            if (err) {
                console.log(err)
                return
            }
            console.log("successfully written")
        })
    })
})