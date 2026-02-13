function getTimeEnd(){
    let t = new Date(("2026-02-23")).getTime() - (new Date()).getTime(),
    days = Math.floor(t / (1000 * 60 * 60 *24)),
    hoirs = Math.floor((t / (1000 * 60 * 60)) %24),
    min = Math.floor((t / 1000 / 60) % 60),
    secomds = Math.floor((t / 1000) % 60)
}

getTimeEnd()