 function get_fleeting_id(length = 16){
     const last = app.vault.getFiles().filter(f => f.path.startsWith("fleeting")).length
     let new_name = (last >>> 0).toString(2).split("").reverse()
     return new_name.concat(Array(length).fill(0)).slice(0,length).reverse().join("");
 }
 
 module.exports = get_fleeting_id
