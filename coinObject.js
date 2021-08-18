const header = document.createElement('header')
const headerText = document.createElement('h1')
const body = document.querySelector('body')
const main = document.createElement('main')
const htString = document.createElement('div')
const htImg = document.createElement('div')

header.appendChild(headerText)
body.appendChild(header)
main.appendChild(htString)
main.appendChild(htImg)
body.appendChild(main)

htString.id = 'htString'
htImg.id = 'htImg'

headerText.innerHTML = 'Heads or Tails?'


const coin = {
    state: 0,

    flip: function () {
        this.state = Math.round(Math.random())
    },

    toString: function () {
        return this.state === 0 ? 'Heads' : 'Tails'
    },

    toHTML: function () {
        const image = document.createElement('img')
        htImg.appendChild(image)
        this.state === 0 ? image.src = 'img/moeda-heads.png' : image.src = 'img/moeda-tails.png'
        return image
    },
}

const display20Flips = () => {
    const results = []
    for (let i = 0; i < 20; i++) {
        coin.flip()
        let headsOrTailsStr = document.createElement('p')
        htString.appendChild(headsOrTailsStr)
        headsOrTailsStr.innerHTML = coin.toString()
        results.push(coin.toString())
    }
    return results
}
display20Flips()

const display20Images = () => {
    const results = []
    for (let i = 0; i < 20; i++) {
        coin.flip()
        results.push(coin.toHTML())
    }
    return results
}
display20Images()