
let actives = []

class Bottle {
    constructor() {
        let bottle = document.createElement("div")
        bottle.classList.add("cub")
        this.active = false
        this.rengs = []

        this.item = bottle
    }

}

class Reng {
    constructor(color) {
        let reng = document.createElement("div")
        reng.classList.add("reng")
        reng.style.backgroundColor = color

        this.item = reng
    }
}

function doldur(bottle) {
    for (let i = 0; i < 4; i++) {
        let random = Math.floor(Math.random() * colorList.length)

        let reng = new Reng(colorList[random])
        colorList.splice(random, 1)
        bottle.item.append(reng.item)
        bottle.rengs.push(reng)


    }

}


let colorList = ["red", "blue", "green", "blueviolet", "red", "blue", "green", "blueviolet", "red", "blue", "green", "blueviolet", "red", "blue", "green", "blueviolet"]

let bottles = []



for (let i = 0; i < 4; i++) {

    let bottle = new Bottle()
    bottles.push(bottle)
    doldur(bottle)
    document.body.append(bottle.item)

}
for (let i = 0; i < 2; i++) {
    let bottle = new Bottle()
    bottles.push(bottle)
    document.body.append(bottle.item)

}

let fullCount = 0




bottles.forEach(x => {

    x.item.addEventListener("click", () => {

        if (actives.length != 0) {
            let prev = actives.pop()
            console.log(prev.rengs[prev.rengs.length-1]);

            prev.item.style.scale = 1
            if (prev.rengs.length == 0
            ) {
                console.log("Bos");

            }
            else if (x.rengs.length == 4) {
                console.log("Target dolu");

            }


            else if (x.rengs.length == 0 || prev.rengs[prev.rengs.length-1].item.style.backgroundColor == x.rengs[x.rengs.length-1].item.style.backgroundColor) {
                let color = prev.rengs.pop()
                x.rengs.push(color)
                prev.item.removeChild(color.item)
                x.item.append(color.item)
                if (x.rengs.length == 4) {
                    x.rengs.every(y => y.item.style.backgroundColor == x.rengs[0].item.style.backgroundColor) ?
                        fullCount++ : console.log("salam");
                }

                if (fullCount == 4) {
                    let h1 = document.createElement("h1")
                    h1.innerHTML = "You Win"
                    document.body.appendChild(h1)
                }
            }


        }
        else if (actives == 0) {
            x.rengs.length > 3 ?
                x.rengs.every(y => y.item.style.backgroundColor == x.rengs[0].item.style.backgroundColor) ?
                    console.log("bu bottle fulldur")

                    : x.rengs.length > 0 ?
                        (actives.push(x),
                            x.item.style.scale = 1.1)
                        : console.log("reng yoxdur")
                : (actives.push(x),
                    x.item.style.scale = 1.1);
        }

    })

})




