const MEDIUMS = [
    "web-article",
    "web-video",
    "paper",
    "book"
]

function get_files(folder, ext = false){
    return app.vault.getFiles().filter(f => f.path.startsWith(folder)).map(f => ext ? f.name : f.basename)
}

const templates = [
    {
        name: "fleeting",
        props: [
            {
                name: "project",
                type: "suggest",
                depends_on: null,
                choices: () => get_files("project")
            },
        ]
    },
    {
        name: "reference",
        props: [
            {
                name: "medium", //mandatory
                type: "suggest", //mandatory
                depends_on: null, //mandatory
                choices: () => MEDIUMS // if type == "suggest"
            },
            {
                name: "author",
                type: "prompt",
                depends_on: null
            },
            {
                name: "url",
                type: "prompt",
                depends_on: "medium",
                condition: (medium) => ["web-article", "web-video"].includes(medium) //ask only if condition is met
            },
            {
                name: "reference",
                type: "suggest",
                depends_on: "medium",
                choices: () => get_files("_resources", true)
            },
            {
                name: "project",
                type: "suggest",
                depends_on: null,
                choices: () => get_files("project")
            },
        ],
    },
    {
        name: "permanent",
        props: [
            {
                name: "project",
                type: "suggest",
                depends_on: null,
                choices: () => get_files("project")
            },
        ],
    }
]

async function prepare(tp, template){
    const {name, props} = templates.find(e => e.name === template)
    props.sort(e => e.depends_on ? 1 : -1 )
    for(const prop of props){
        let value;
        if(prop.hasOwnProperty("condition") && !prop.condition(tp.config.target_file[prop.depends_on].value)){
            continue
        }
        if(prop.type == "prompt"){
            value = await tp.system.prompt(prop.name)
        } else if (prop.type == "suggest"){
            value = await tp.system.suggester(prop.choices(), prop.choices(), true, prop.name)
        }
        tp.config.target_file[prop.name] = value
    }
}

module.exports = prepare
