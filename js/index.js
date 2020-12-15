const reviews = []
 
 //review constructor
 function Review(name,text,img) {
    this.name = name
    this.text = text
    this.img = img
}

//Create new customer using the constructor function

function createReview(img, text, name) {

    let image = `${img}`
    let review = new Review(name, text, image )

    reviews.push(review);
}

createReview('./images/1.jpg',"Celebrated my granddaughters' Communion with a Sunday Brunch! Food was delicious...sweet treats were yummy! Service was excellent! Thank you Jenna...Mulberry House is outstanding!","Anne Hobbs");
createReview('./images/2.jpg',"The frittatas, tea sandwiches, scones and the tea were ALL delicious!  The servers were extremely helpful and friendly.  My Daughter's 3rd birthday tea party was a smashing success thanks to Mulberry House Restaurant catering.  And Jenna was a delight to work with!!  I would highly recommend utilizing their catering services.", "Candyce Savare");
createReview('./images/3.jpg',"Loved the Stuffed waffles, so good, everything blending well together. However food could be a little warmer.  Thought my sausages were a little cold.  The tea was a welcomed new experience, I had somthing with vanilla ans it was very refreshing.  It would have been nice if we had known about the BYOBB, for New Year champagne.  I will xome again, need ro taste some more!","David Wright");
createReview('./images/4.jpg',"Really nice tea shop with delicious food and a nice selection of teas. Very busy though, so make reservations.","Brett Florance");
createReview('./images/5.jpg',"I highly recommend Mulberry House to host your next event. I threw a surprise 60th birthday for my spouse and Jenna was great.  She is very nice, courteous, attentive and her staff was wonderful during the event.  Everyone loved the hors d'oeuvres and  the food! The party was a success! Thank you Jenna!","Rey Wong");

document.getElementById("customerImage").setAttribute("src",reviews[0].img);
document.getElementById("customerName").innerText=reviews[0].name;
document.getElementById("customerReview").innerText=reviews[0].text;

function setReview(index){
    document.getElementById("customerImage").setAttribute("src",reviews[index].img);
    document.getElementById("customerName").innerText=reviews[index].name;
    document.getElementById("customerReview").innerText=reviews[index].text;
}

let index=0;

document.getElementById("prevButton").addEventListener("click", function(){
if(index==0){
    index=4;
    setReview(index);
}
else{
    index--;
    setReview(index);
}
});

document.getElementById("nextButton").addEventListener("click", function(){
    if(index==4){
        index=0;
        setReview(index);
    }
    else{
        index++;
        setReview(index);
    }
});