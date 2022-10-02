 function get_fleeting_id(length = 8){
    const fleetingNotes = app.vault.getFiles().filter(f => f.path.startsWith("fleeting") && !f.name.startsWith('Untitled'))
    console.log(fleetingNotes)
    const numbering = fleetingNotes.map(e => Number.parseInt(e.basename))
    console.log(numbering)
    const last = Math.max(...numbering)
    console.log(last)
    let new_name = (last +1 >>> 0).toString().split("").reverse()
    return new_name.concat(Array(length).fill(0)).slice(0,length).reverse().join("");
 }
 
 module.exports = get_fleeting_id
