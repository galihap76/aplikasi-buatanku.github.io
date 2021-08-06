// JavaScript Document
let jawaban = document.querySelectorAll('input[name="jawaban"]');
let info_jawaban = document.querySelectorAll('.info-jawaban');
let selainPilihanbenar = document.querySelectorAll('input[name="selainPilihanbenar"]');
let card_body = document.querySelectorAll('.card-body');
let cekKeberhasilan = document.querySelector('.btn-warning');
let btn_loading = document.querySelector('.btn_loading');
let info_benar = document.querySelector('.info-benar');
let info_salah = document.querySelector('.info-salah');
let info_validasi = document.querySelector('.info-validasi');
cekKeberhasilan.addEventListener('click', checkSkorUntukuser);




function checkSkorUntukuser(){
	//hapus tombol cek berhasilan
	cekKeberhasilan.classList.add('d-none');
	//tampilkan tombol loading
	btn_loading.classList.add('d-block');
	//menunggu 3 detik
	setTimeout(function(){
	//tarik kembali jendela window
	window.scrollTo(0,0);
	//cek jawaban ketika benar
	jawaban.forEach(function(jawabanSoal){
	//jika jawaban benar semua tampilkan info
	if(jawabanSoal.checked ){
	//berikan info dan pengertian jawaban pada user
	info_jawaban.forEach(function(tampilkanInfo){
	tampilkanInfo.classList.add('d-block');
	});
	//berikan info benar kepada user
	info_benar.classList.add('d-block');
	  } 
	 });
		
	//cek jawaban ketika ada yang salah
	selainPilihanbenar.forEach(function(jawabanSoalketikaSalah){
	//jika jawaban ada yang salah tampilkan info kesalahan
	if(jawabanSoalketikaSalah.checked){
	//hilangkan info dan pengertian pada user
	info_jawaban.forEach(function(tampilkanInfo){
	tampilkanInfo.classList.add('d-block');
	});
	//berikan info kesalahan kepada user
	info_salah.classList.add('d-block');
		}
	});
		
	//validasi kuis
	jawaban.forEach(function(jawabanSoal){
		selainPilihanbenar.forEach(function(jawabanSoalketikaSalah){
		if(jawabanSoal.checked == false && jawabanSoalketikaSalah.checked == false){
		card_body.forEach(function(card){
			card.classList.add('d-none');
		});
		info_validasi.classList.add('d-block');
	}
		});
	});
	//hilangkan tombol loading
	btn_loading.classList.remove('d-block');
	
	}, 3000);
//	 if(html.checked==false && html2.checked==false && html3.checked==false && javascript.checked==false &&  javascript2.checked==false && javascript3.checked==false && pemrograman.checked==false &&  pemrograman2.checked==false && pemrograman3.checked==false && dbms.checked==false &&  dbms2.checked==false && dbms3.checked==false && dekstop.checked==false &&  dekstop2.checked==false && dekstop3.checked==false){
//		form.style.display='none';
//	noneContent.innerHTML=`<div class="container">
//   <div class="row" id="noneContent">
//   	<div class="col-md">
//   	<center>
//   		<div class="card mt-5 border-all w-75" >
//    <div class="card-body">
//    <h5 class="card-title text-center">Oops anda berusaha untuk langsung men-submit harap ulang halaman kembali!</h5>
//  </div>
//</div>
//		</center>
//   	</div>
//   </div>`;
//		c.preventDefault();
//	}
}
 