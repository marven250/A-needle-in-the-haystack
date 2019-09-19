function findNeedle(haystack) {
    let reg = /needle/
    for (let i = 0; i < haystack.length; i++) {
        if (reg.test(haystack[i])) {
            return "found the needle at position " + i
        }
    }
}