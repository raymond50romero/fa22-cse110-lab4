function currTime() {
    let timer = setInterval(function() {
        let d = new Date()
        let time = d.toLocaleTimeString()
        setTimeout(function() {
            console.log(time)
        }, 1000)
    }, 1000)
}

currTime()
