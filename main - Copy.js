function startidentify(){
    navigator.mediaDevices.getUserMedia({audio:true});
    classifier=ml5.soundClassifier("https://teachablemachine.withgoogle.com/models/dhi-Gezk7/model.json",modelReady);
}

function modelReady(){
    classifier.classify(gotResults);
}

function gotResults(error,results){
    if (error){
        console.error(error);

    }

    else {
        console.log(results);
        random_r=Math.floor(Math.random()*255)+1;
        random_g=Math.floor(Math.random()*255)+1;
        random_b=Math.floor(Math.random()*255)+1;
        
        document.getElementById("resultLabel").innerHTML=results[0].label;
        document.getElementById("ResultConfidence").innerHTML=(results[0].confidence*100).toFixed(2)+"%";

        document.getElementById("resultLabel").style.color="rgb("+random_r+","+random_g+","+random_b+")";
        document.getElementById("ResultConfidence").style.color="rgb("+random_r+","+random_g+","+random_b+")";

        im1=document.getElementById("img1");
        im2=document.getElementById("img2");
        im3=document.getElementById("img3");
        im4=document.getElementById("img4");

        if(results[0].label=="BARKING"){
            im1.src="d.png";
            im2.src="o.png";
            im3.src="s.png";
            im4.src="tj.gif";
        }

        else if(results[0].label=="WHISTLE"){
            im1.src="d.gif";
            im2.src="o.png";
            im3.src="s.png";
            im4.src="tj.png";
        }

        else if(results[0].label=="CLAP"){
            im1.src="d.png";
            im2.src="o.gif";
            im3.src="s.png";
            im4.src="tj.png";
        }

        else if(results[0].label=="TEMPLE BELLS"){
            im1.src="d.png";
            im2.src="o.png";
            im3.src="s.gif";
            im4.src="tj.png";
        }

        else{
            im1.src="p.gif";
            im2.src="p.gif";
            im3.src="p.gif";
            im4.src="p.gif";
        }

    }
}

