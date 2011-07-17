/*
// Random olarak oluşturduğum array'de ki aynı sayıları ayıklar.
var util = {};
util.array = {};
util.array.unique = function (arrayItem){
	var a = [], l = arrayItem.length;
    for(var i=0; i<l; i++){
    	for(var j=i+1; j<l; j++){
    		if(arrayItem[i] === arrayItem[j]){
   				j = ++i;
   			}
   	}
   	a.push(arrayItem[i]);
}
return a;
};

var game = {};
game.Zone = function(){
    var box = 3, 
		clicked = 0, 
		score = 0, 
		randomArr = [], 
		lev = 1;
	// Random sayılar ile dizi oluşturur.
    randomNumber = function(){
        for(var i=0; i<box; i++){
           randomArr[i] = Math.floor(Math.random()*40);
		}
		console.log(randomArr);
        randomArr = util.array.unique(randomArr);
		console.log(randomArr);
        if(randomArr.length !== box){
            randomNumber();
        }
        gameZoneBox();
        return randomArr;
    }
	// Oyun başladığında tıklanacak kutuların arkaplanlarına image ekler ve 2 sn sonra kaybeder.
    gameZoneBox = function(){
        $('.gameZone').addClass('displayNone').fadeIn(600);
        for(var i=0; i<box; i++){
            $('#gameZone'+randomArr[i]).css('background-image','url(images/'+randomArr[i]+'.png)');
        }
        setTimeout(function(){
            $('.gameZone').css('background-image','');
        },2000);
    }
	// tıklanan kutunun id'si ile random array de ki id aynı değilse err classı ekliyoruz, aynı ise err classını silip ok classı ekliyoruz.
    $('.gameZone').click(function(e){
        for(var i=0; i<box; i++){
            if(e.currentTarget.id !== 'gameZone'+randomArr[i]){
                $('#'+e.currentTarget.id).addClass("err");
            }else{
                $('#'+e.currentTarget.id).removeClass("err").addClass("ok").toggleClass("clicked");
                break;
            }
        }
    });
	// kutunun err classı varsa oyunu bitiriyoruz.
    $('.gameZone').click(function(e){
        if($('#'+e.currentTarget.id).hasClass("err")){
            alert('Kaybettin! Puanın: '+score);
            location.reload();
        }
    });
	// tıklanan kutuda clicked classı varsa clicked ı arttırıyoruz yoksa eksiltiyoruz.
    $('.gameZone').click(function(e){
		if($('#'+e.currentTarget.id).hasClass("clicked")){
        	clicked++;
        }else{
        	clicked--;
   		}
    });
	// tıklanan ve ok classı olan kutu sayısı gösterdiğimiz kutu sayısına eşit ise sonra ki aşamaya hazırlık yapılıyor.
    $('.gameZone').click(function(e){
        if(clicked == box){
            score = score+box*5;
			clicked = 0; 
			box++;
            $('.gameZone').removeClass("ok err");
            $('.score').text('IQ Puan: ' + score);
			// gösterdiğimiz kutu sayısı 23 e eşit olursa tebrikler deyip oyunu bitiyoruz, değilse bir sonra ki aşamaya geçiyoruz.
            if(box == 23){
                alert('Tebrikler, Oyunu bitirdin :) '+'Puanınız: '+score);
                location.reload();
            }else{
                $('.level').text('Beyin Gücü: '+lev);
				lev++;
                $('.gameZone').removeClass("clicked");
            }
			// random olayı milisaniyeye göre hesaplandığı için aynı sayıların gelmemesini sağlıyoruz.
			setTimeout(function(){
            	randomNumber();						
			},500);
        }
	});
}

$(function(){
	var level = new game.Zone();
	// startGame id li butona tıklarsa oyunu başlatıyoruz.
	$("#startGame").click(function(){
        $('.infoBox').fadeOut(200).addClass('displayNone');
        randomNumber();
    });
});
*/