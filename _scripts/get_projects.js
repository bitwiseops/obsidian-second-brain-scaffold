function get_projects(){
    return app.vault.getFiles().filter(f => f.path.startsWith("project")).map(f => f.basename)
}

module.exports = get_projects