var homeContent = `<div class="home-content">
<p>Yume Hime (stylized as 夢姫 or ゆめひめ), meaning "Dream Princess", is a Yume Nikki 
    fangame created by Rad Tunez. Development began in 2021, and first playable release 
    came out on XX/XX/XX.</p>
<div class="download-container">
<div class="download-box"><p>Version 0.03 Download: <span>Click Here</span></p></div>
<div class="download-box"><p>Version 0.02 Download: <span>Click Here</span></p></div>
<div class="download-box"><p>Version 0.01 Download: <span>Click Here</span></p></div>
<div class="download-box"><p>Gameplay Demo Download: <span>Click Here</span></p></div>
</div> <!--download container-->
</div>`;

var katsukiContent = `<div class="home-content">
<p>Katsuki is the main and playable character in Yume Hime. Not much is known about her personality. 
    She has a hime (princess) aesthetic, as seen from her dream room, clothes, and haircut.
    When she is not in the dream realm, she is depicted with red open eyes and brown shoes. 
    Her crown is missing from her design.</p>
    <img src="images/awakedown.png" width="408px" height="163px">
</div>`;

var effectsContent = `<div class="effects-container">
<div class="effect-box">
                <div class="effect-image" style="background-image: url(images/horsie.png);"></div>
                <div class="effect-info">
                    <h1>Horsie Effect</h1>
                    <h3>Found in Rocking Horse Attic</h3>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate quod provident ullam sed rem. 
                        Consectetur libero neque recusandae veniam fuga.</p>
                        <p>Practical Uses: 2x Speed</p>
                        <p>Passive Effect: None</p>
                </div>
</div> <!--effect box closing-->
<div class="effect-box">
                <div class="effect-image" style="background-image: url(images/mermaid.png);"></div>
                <div class="effect-info">
                    <h1>Mermaid Effect</h1>
                    <h3>Found in Mermaid Park</h3>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate quod provident ullam sed rem. 
                        Consectetur libero neque recusandae veniam fuga.</p>
                        <p>Practical Uses: 2x Speed Underwater</p>
                        <p>Passive Effect: None</p>
                </div>
</div> <!--effect box closing-->
<div class="effect-box">
                <div class="effect-image" style="background-image: url(images/child.png);"></div>
                <div class="effect-info">
                    <h1>Child Effect</h1>
                    <h3>Found in Tooth Fairy World</h3>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate quod provident ullam sed rem. 
                        Consectetur libero neque recusandae veniam fuga.</p>
                        <p>Practical Uses: Fit into small spaces</p>
                        <p>Passive Effect: Ability to see things that aren't usually there</p>
                </div>
</div> <!--effect box closing-->
<div class="effect-box">
                <div class="effect-image" style="background-image: url(images/potion.png);"></div>
                <div class="effect-info">
                    <h1>Potion Effect</h1>
                    <h3>Found in The Lab</h3>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate quod provident ullam sed rem. 
                        Consectetur libero neque recusandae veniam fuga.</p>
                        <p>Practical Uses: Return to the Nexus</p>
                        <p>Passive Effect: None</p>
                </div>
</div> <!--effect box closing-->
<div class="effect-box">
                <div class="effect-image" style="background-image: url(images/imp.png);"></div>
                <div class="effect-info">
                    <h1>Imp Effect</h1>
                    <h3>Found in Glue World</h3>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate quod provident ullam sed rem. 
                        Consectetur libero neque recusandae veniam fuga.</p>
                        <p>Practical Uses: Fit into small spaces</p>
                        <p>Passive Effect: None</p>
                </div>
</div> <!--effect box closing-->
</div>`;

var dreamworldsContent = `<div class="dream-worlds-content">
<h1>Dream Worlds List</h1>
<h3>The Nexus:</h3>
<p>Shapes World</p>
<p>Carnival World</p>
<p>Paint Bucket World</p>

<h3>Other:</h3>
<p>Diving Boards World</p>
<p>The Lab</p>
<p>Glue World</p>
<p>Tooth Fairy World</p>
<p>Rocking Horse Attic</p>
<p>Mermaid Park</p>
<p>Broken Bones World</p>
<img src="images/in-bed.png" width="182px" height="214px">
</div>`;

function initListeners(){
    $("nav a").click(function (e) {
        let btnID = e.currentTarget.id;
        loadPageContent(btnID);
        //console.log("click " + btnID);
    });
}

function loadPageContent(pageName){
    let contentID = pageName + "Content";
    $("#app").html(eval(contentID));
}

function initApp(){
    initListeners();
}

$(document).ready(function(){
    loadPageContent("home");
    initApp();
});