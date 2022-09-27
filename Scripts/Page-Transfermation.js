
function redirectLink(link){
    const indecators = 
    [
        // Home
        ["/",
        "AboutMe/",
        "SM/"
        ,"Tutorials/"
        ,"Projects/"
        ],
        ["../",
        "../AboutMe/",
        "../SM/"
        ,"../Tutorials/"
        ,"../Projects/"
        ],
        [
            "https://twitter.com/H_Mohamed24",
            "https://www.instagram.com/mohamed_hedibi.insta/",
            "#",
            "#",
            "https://discord.gg/BGenGtSZ5R",
            "#",
            "https://insight-center.netlify.app/",
            "https://www.freecodecamp.org/certification/H_Mohamed/responsive-web-design",
            "https://www.freecodecamp.org/certification/H_Mohamed/javascript-algorithms-and-data-structures"
        ]
        
    ]
    if(window.location.pathname == "/"){
        switch (link){
            case "Home":
                document.location.href = indecators[0][0];
                break;
            case "aboutme":
                document.location.href = indecators[0][1];
                break;
            case "Sm":
                document.location.href =indecators[0][2];
                break;
            case "Tut":
                document.location.href =indecators[0][3];
                break;
            case "ProjectsAndBooks":  
                document.location.href =indecators[0][4];
                break;
            case "twiter":
                open(indecators[2][0],"_blank");
                break;
            case "insta":
                open(indecators[2][1],"_blank");
               break;
            case "discord":
                open(indecators[2][4],"_blank");
                break;        
            case "insight":
                open(indecators[2][6],"_blank");
                break;
            default:
                alert("Sorry The Page Your going to Is under Construction or Does Not Exsist");
                break;

        }
    }else{
        switch (link){
            case "Home":
                document.location.href = indecators[1][0];
                break;
            case "aboutme":
                document.location.href = indecators[1][1];
                break;
            case "Sm":
                document.location.href =indecators[1][2];
                break;
            case "Tut":
                document.location.href =indecators[1][3];
                break;
            case "ProjectsAndBooks":  
                document.location.href =indecators[1][4];
                break;
            case "twiter":
                open(indecators[2][0],"_blank");
                break;
            case "insta":
                open(indecators[2][1],"_blank");
               break;
            case "discord":
                open(indecators[2][4],"_blank");
                break;        
            case "insight":
                open(indecators[2][6],"_blank");
                break;
            case "FCCResWebDes":
                open(indecators[2][7],"_blank");
                break;
            case "FCCJsAlGo":
                open(indecators[2][8],"_blank");
                break;
            default:
                alert("Sorry The Page Your going to Is under Construction or does not exsist")
                break;

        }
    }

};
