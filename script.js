let teamMembers = [

    {
        name: "Wayne Barnett",
        role: "Founder & CEO",
        photo: "wayne-barnett-founder-ceo.jpg"
    },

    {
        name: "Angela Caroll",
        role: "Chief Editor",
        photo: "angela-caroll-chief-editor.jpg"
    },

    {
        name: "Walter Gordon",
        role: "Office Manager",
        photo: "walter-gordon-office-manager.jpg"
    },

    {
        name: "Angela Lopez",
        role: "Social Media Manager",
        photo: "angela-lopez-social-media-manager.jpg"
    },

    {
        name: "Scott Estrada",
        role: "Developer",
        photo: "scott-estrada-developer.jpg"
    },

    {
        name: "Barbara Ramos",
        role: "Graphic Designer",
        photo: "barbara-ramos-graphic-designer.jpg"
    },

]

function compileCards(){

    let cardName;
    let cardRole;
    let cardPhoto;

    for(i=0; i<teamMembers.length; i++){

        cardName = document.getElementById('idCardName' + (i+1));
        cardRole = document.getElementById('idCardRole' + (i+1));
        cardPhoto = document.getElementById('idCardPhoto' + (i+1));

        cardName.innerHTML = teamMembers[i].name;
        cardRole.innerHTML = teamMembers[i].role;
        cardPhoto.src = "./assets/img/" + teamMembers[i].photo;
    }

}

compileCards();