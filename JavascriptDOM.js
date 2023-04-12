//pengisian data inputan
document.getElementById("submit").onclick = fizzbuzz
//pengambilan value input
function fizzbuzz(){
//mengambil angka yang dimasukan
var num = parseFloat(document.getElementById("enter").value)
//mendapatkan hasil yang diinputkan
//bagian untuk meng-hide button
document.getElementById("fizz").style.visibility="hidden";
document.getElementById("buzz").style.visibility="hidden";
document.getElementById("fizzbuzz").style.visibility="hidden";
document.getElementById("error").style.visibility="hidden";

//jika user menginputkan angka yang bisa dibagi 3 dan 5 tidak ada reminder untuk tampilan fizzbuzz
 if(num%3==0 && num%5==0){
   document.getElementById("result").innerHTML= "Fizzbuzz!" ;
   document.getElementById("enter").value = "" ;
   //menampilkan fizzbuzz button
   document.getElementById("fizzbuzz").style.visibility="visible";
   document.getElementById("fizzbuzz").onclick = fizzbuzz;
   //menampilkan jawaban ketika button fizzbuzz ditekan
   function fizzbuzz(){
    document.getElementById("why").innerHTML= "Angka ini bisa dibagi dengan 3 atau 5" ;
   }
 }

//jika user menginputkan angka yang bisa dibagi 3 tidak ada reminder untuk tampilan fizz
 else if(num%3==0){
   document.getElementById("result").innerHTML= "Fizz..." ;
   document.getElementById("enter").value = "" ;
   //menampilkan kenapa fizz button
   document.getElementById("fizz").style.visibility="visible";
   document.getElementById("fizz").onclick = fizz;
   //menampilkan jawaban ketika button fizz ditekan
   function fizz(){
    document.getElementById("why").innerHTML= "Angka ini bisa dibagi dengan 3" ;
   }
 }

//jika user menginputkan angka yang bisa dibagi 5 tidak ada reminder untuk tampilan buzz
 else if(num%5==0){
   document.getElementById("result").innerHTML= "buzz..." ;
   document.getElementById("enter").value = "" ;
   //menampilkan kenapa buzz button
   document.getElementById("buzz").style.visibility="visible";
   document.getElementById("buzz").onclick = buzz;
   //menampilkan jawaban ketika button buzz ditekan
   function buzz(){
    document.getElementById("why").innerHTML= "Angka ini bisa dibagi dengan 5" ;
   }
 }else{
   document.getElementById("result").innerHTML= "Maaf, silahkan input angka baru. Aku tidak dapat mengenalinya." ;
   document.getElementById("enter").value = "" ;
   //menampilkan error button
   document.getElementById("error").style.visibility="visible";
   document.getElementById("error").onclick = error;
   //menampilkan jawaban ketika error pada angka yang diinputkan
   function error(){
    document.getElementById("why").innerHTML= "Angka ini tidak bisa dibagi dengan 3 atau 5" ;
   }
 }
}