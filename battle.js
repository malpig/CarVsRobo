var nop = 0;
var person=[];

function numToName(n)
{
    if (n < 0)
        return "none";
    else
        return person[n].name;

}

function updateP()
{
    let paras = document.getElementsByTagName('P');
    for (let p of paras)
    {
        let i = p.id;
        console.log("updating paragraph ", i);
        if (person[i].dead)
            p.style = "border:1px solid red";
        else
            p.style = "border:1px solid black";
        let pn = p.firstChild;
        pn.nodeValue = person[i].name + "-\u00A0";
        pn = pn.nextSibling;
        pn.nodeValue = `H: ${person[i].health} /${person[i].maxHealth}\u00A0\u00A0\u00A0`;
        pn = pn.nextSibling;
        pn.nodeValue = `D: ${person[i].defence}\u00A0\u00A0\u00A0`;
        pn = pn.nextSibling;
        pn.nodeValue = `A: ${person[i].attack}\u00A0\u00A0\u00A0`;
        pn = pn.nextSibling;
        pn.nodeValue = "enemy: " + numToName(person[i].enemy) + "\u00A0\u00A0\u00A0";
        pn = pn.nextSibling;
        pn.id = p.id;
        pn = pn.nextSibling;
        pn.id = p.id;
    }
}

function healer(event)
{
    let n = event.target.id;
    person[n].health = person[n].maxHealth;
    person[n].dead = false;
    updateP();
}

function editDone(event)
{
    n = event.target.id;
    ipn = document.body.lastChild.firstChild;
    console.log("editDone:", ipn);
    ipn = ipn.nextSibling
    console.log(ipn);
    person[n].name = ipn.value;
    ipn = ipn.nextSibling.nextSibling;
    person[n].health = ipn.value;
    ipn = ipn.nextSibling.nextSibling;
    person[n].maxHealth = ipn.value;
    ipn = ipn.nextSibling.nextSibling;
    person[n].defence = ipn.value;
    ipn = ipn.nextSibling.nextSibling;
    person[n].attack = ipn.value;
    ipn = ipn.nextSibling.nextSibling.firstChild;
    console.log("the ipn is:",ipn);
    person[n].enemy = ipn.value;
    console.log("assigning:", ipn.value, person[n].enemy);
    document.body.removeChild(document.body.lastChild);
    updateP();
}

function removePerson(event)
{
    let n = event.target.id;

    let paras = document.getElementsByTagName('P');
    for (let p of paras)
    {
        console.log("looking at paragraph:", p.id);
        if (p.id == n)
        {
            console.log("removing:", p.id, "---", p);
            p.tagName = "";
            document.body.removeChild(p);
        }
    }

    person.splice(n, 1);
    nop--;
    for (let i = n; i < nop; i++) {
        person[i].number = i;
        person[i].para.id = i;
    }
    document.body.removeChild(document.body.lastChild);
    updateP();
}

function editPerson(event)
{
    let editp = document.createElement("P");
    let n = event.target.id;

    let ntn = document.createTextNode("name:");
    editp.appendChild(ntn);

    let inText = document.createElement("INPUT");
    inText.type= "text";
    inText.defaultValue = person[n].name;
    editp.appendChild(inText);

    ntn = document.createTextNode("health:");
    editp.appendChild(ntn);

    inText = document.createElement("INPUT");
    inText.type = "text";
    inText.defaultValue = person[n].health;
    editp.appendChild(inText);


    ntn = document.createTextNode(`max health:`);
    editp.appendChild(ntn);

    inText = document.createElement("INPUT");
    inText.type = "text";
    inText.defaultValue = person[n].maxHealth;
    editp.appendChild(inText);

    ntn = document.createTextNode("defence:");
    editp.appendChild(ntn);

    inText = document.createElement("INPUT");
    inText.type = "text";
    inText.defaultValue = person[n].defence;
    editp.appendChild(inText);

    ntn = document.createTextNode("attack:");
    editp.appendChild(ntn);

    inText = document.createElement("INPUT");
    inText.type = "text";
    inText.defaultValue = person[n].attack;
    editp.appendChild(inText);

    ntn = document.createTextNode("enemy:");
    editp.appendChild(ntn);

    let label = document.createElement("label");
    let select = document.createElement("select");
    for (let i = -1; i < nop; i++)
    {
        let option = document.createElement("option");
        option.value = i;
        option.text = numToName(i);
        option.selected = (option.value == person[n].enemy);
        select.appendChild(option);
    }
    label.appendChild(select);
    
    editp.appendChild(label);

    let button = document.createElement("button");
    button.innerText = "done";
    button.id = n;
    button.addEventListener("click", function (event) { editDone(event) });
    editp.appendChild(button);

    button = document.createElement("button");
    button.innerText = "remove person";
    button.id = n;
    button.addEventListener("click", function (event) { removePerson(event) });
    editp.appendChild(button);

    document.body.appendChild(editp);

}

function addPerson(event)
{
    var newp = { name: `person ${nop}`, number: nop, maxHealth: 10, health: 10, defence: 1, attack: 3, enemy: -1, dead: false, para: 0 };
    newp.para = document.createElement("P");
    newp.para.innerText = newp.name + "-\u00A0";
    newp.para.style = "border:1px solid black";
    newp.para.id = nop;
    person.push(newp);
    document.body.appendChild(person[nop].para);

    let ntn = document.createTextNode(`H: ${person[nop].health} /${person[nop].maxHealth}\u00A0\u00A0\u00A0`);
    ntn.id = "health";
    person[nop].para.appendChild(ntn);

    ntn = document.createTextNode(`D: ${person[nop].defence}\u00A0\u00A0\u00A0`);
    ntn.id = "defence";
    person[nop].para.appendChild(ntn);

    ntn = document.createTextNode(`A: ${person[nop].attack}\u00A0\u00A0\u00A0`);
    ntn.id = "attack";
    person[nop].para.appendChild(ntn);

    ntn = document.createTextNode("enemy: " + numToName(newp.enemy)+"\u00A0\u00A0\u00A0");
    ntn.id = "enemy";
    person[nop].para.appendChild(ntn);

    let button = document.createElement("button");
    button.innerText = "heal";
    button.id = nop;
    button.addEventListener("click", function (event) { healer(event) });
    person[nop].para.appendChild(button);

    button = document.createElement("button");
    button.innerText = "edit";
    button.id = nop;
    button.addEventListener("click", function (event) { editPerson(event) });
    person[nop].para.appendChild(button);


    nop++;
    console.log("end of addPerson");
}

function battle(event)
{
    let j = -1, d = 0;
    for (let i = 0; i < nop; i++)
        if (person[i].enemy >= 0 && !person[i].dead)
        {
            j = person[i].enemy;
            d = Math.ceil(person[i].attack * Math.random()) - person[j].defence;
            if (d < 0)
                d = 0;
            person[j].health -= d;
            if (person[j].health <= 0) {
                person[j].health = 0;
                person[j].dead = true;
            }
        }
    updateP();
}