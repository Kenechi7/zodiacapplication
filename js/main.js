// My variable for the 12 zodiac signs.
var zodiacs = [
   {
   	sign: 'aries',
   	fortune: 'You have a habit of HEADBUTTING people!',
   	image: 'img/aries.png'
   },
    {
   	sign: 'taurus',
   	fortune: 'You\'re strong like a BULL!',
   	image: 'img/taurus.png'
   },
    {
   	sign: 'gemini',
   	fortune: 'You believe you can actually FLY!',
   	image: 'img/gemini.png'
   },
    {
   	sign: 'cancer',
   	fortune: 'You have a STRONG grip on life!',
   	image: 'img/cancer.png'
   },
    {
   	sign: 'leo',
   	fortune: 'You\'re the LEADER of your domain!',
   	image: 'img/leo.png'
   },
    {
   	sign: 'virgo',
   	fortune: 'You can FLY!',
   	image: 'img/virgo.png'
   },
    {
   	sign: 'libra',
   	fortune: 'You have a habit of WEIGHING yourself!',
   	image: 'img/libra.png'
   },
    {
   	sign: 'scorpio',
   	fortune: 'You\'re an excellent SWIMMER!',
   	image: 'img/scorpio.png'
   },
    {
   	sign: 'sagittarius',
   	fortune: 'You like to eat HAY!',
   	image: 'img/sagittarius.png'
   },
    {
   	sign: 'capricorn',
   	fortune: 'You think GOAT milk is better than cow milk!',
   	image: 'img/capricorn.png'
   },
    {
   	sign: 'aquarius',
   	fortune: 'You love WATER!',
   	image: 'img/aquarius.png'
   },
    {
   	sign: 'pisces',
   	fortune: 'You drink like a FISH!',
   	image: 'img/pisces.png'
   }
];

// This will select the empty info from my HTML
var emptyH1 = document.querySelector("#emptyH1");
var emptyP = document.getElementById("emptyP");
var emptyImg = document.querySelector("#emptyImg");

var input = document.getElementsByTagName("input")[0];

// This function will fill in all the info from my variable into my HTML code
function getHoroscope() {
	for(var i = 0; i < zodiacs.length; i++) {
		// I have to make it lowercase sensitive incase there are capital letters entered.
		if(input.value.toLowerCase() == zodiacs[i].sign) {
			emptyH1.innerText = zodiacs[i].sign;
			emptyP.innerText = zodiacs[i].fortune;
			emptyImg.src = zodiacs[i].image;
			return;
		}
	}

	// This alert will come up if you enter anything other than the 12 zodiac signs!
	alert("That's not a valid zodiac!")
}