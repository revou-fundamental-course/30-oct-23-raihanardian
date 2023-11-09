$(document).ready(function(){

    $('.checkoption').click(function() {
         $('.checkoption').not(this).prop('checked', false);
    });

});


function refresh(){
    window.location.reload("Refresh")
  }

$(document).ready(function() {
    
    $("#hasil_container").hide();
    $("#hasil_container_btn").hide();

    $(document).on('submit', '#my-form', function() {
        
        $("#hasil_container").show();
        $("#hasil_container_btn").show();

        let berat = $("#berat_bdn").val();
        let usia = $("#usia").val();
        let tinggi = $("#tinggi_bdn").val();
        let jenis_kelamin = $("#jk").val();
        
        let tinggi_cm = tinggi/100;

        let rumus_tinggi = tinggi_cm * tinggi_cm;

        let hasil_bmi = berat / rumus_tinggi;
        
        let fix_hasil_bmi = hasil_bmi.toFixed(1);

        if(fix_hasil_bmi <18.5){
            var desc_bmi = "Kekurangan Berat Badan";
            var indi_bmi = "Hasil Perhitungan BMI kurang dari 18.5";
            var desc_penyakit = "Beberapa penyakit yang berasal dari "+desc_bmi;
            var hasil_penyakit = "<li>Kekurangan Nutrisi</li><li>Tubuh Lebih Rentan Sakit</li><li>Meningkatkan Risiko Osteoporosis</li>";
        }else if(fix_hasil_bmi <= 24.9){
            var desc_bmi = "Berat Badan Normal (Ideal)";
            var indi_bmi = "Hasil Perhitungan BMI diantara 18.5 - 24.9";
            $("#hasil_container_penyakit").hide();
            $("#hasil_container_btn").hide();
        }else if(fix_hasil_bmi <= 29.9){
            var desc_bmi = "Kelebihan Berat Badan";
            var indi_bmi = "Hasil Perhitungan BMI diantara 25.0 - 29.9";
            var desc_penyakit = "Beberapa penyakit yang berasal dari "+desc_bmi;
            var hasil_penyakit = "<li>Diabetes Tipe 2</li><li>Penyakit jantung</li><li>Gangguan Pernapasan</li><li>GERD</li><li>Sleep Apnea</li><li>Radang Sendi</li>";
        }else if(fix_hasil_bmi >= 30.0){
            var desc_bmi = "Kegemukan (Obesitas)";
            var indi_bmi = "Hasil Perhitungan BMI lebih dari 30.0";
            var desc_penyakit = "Beberapa penyakit yang berasal dari "+desc_bmi;
            var hasil_penyakit = "<li>Diabetes Tipe 2</li><li>Batu Empedu</li><li>Asam Urat</li><li>Penurunan Tingkat Kesuburan Reproduksi</li>";
        }
        
        $("#berat_text").html("Berat Badan : "+berat+" Kg |");
        $("#usia_text").html("Usia : "+usia+" Tahun |");
        $("#tinggi_text").html("Tinggi Badan : "+tinggi+" cm |");
        $("#jk_text").html("Jenis Kelamin : "+jenis_kelamin);

        
        $("#desc_penyakit").html(desc_penyakit);
        $("#hasil_penyakit").html(hasil_penyakit);
        
        $("#indikator_bmi").html(indi_bmi);
        $("#desc_bmi").html(desc_bmi);
        $("#hasil_bmi").html(fix_hasil_bmi);

      return false;
     });
}); 

