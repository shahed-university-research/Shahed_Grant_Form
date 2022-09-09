
//set the dimensions and margins of the graph



// var F2F = new f2f();


var qrcode
var qrcode_text

var A = 4
var B = 0.5
var research_score = 0
var percent = 0

var total_grant_state1 = 0
var total_grant_state2 = 0
var total_grant_state3 = 0

var personnel_grant_state1 = 0
var personnel_grant_state2 = 0
var personnel_grant_state3 = 0

var non_personnel_grant_state1 = 0
var non_personnel_grant_state2 = 0
var non_personnel_grant_state3 = 0

var code1
var code2

var print_file_name = 'shahed_grant'
var email_title = 'Shahed-Grant-1401-no.name'


d3.select('#AA').node().value = A
d3.select('#BB').node().value = B

d3.select("#name1").on("change", function () { update() })
d3.select("#name2").on("change", function () { update() })
d3.select("#faculty").on("change", function () { update() })
d3.select("#group").on("change", function () { update() })

function update() {

  research_score = Number(d3.select('#research_score').property("value"))
  percent = Number(d3.select('#percent').property("value"))
  if (percent > 75) { percent = 75 }
  if (percent < 0) { percent = 0 }
  d3.select('#percent').node().value = percent
  print_file_name = d3.select('#meli').property("value")
  email_title = 'پژوهانه دانشگاه شاهد - 1401 - ' + d3.select('#name1').property("value") + ' ' + d3.select('#name2').property("value")


  // for state 1
  total_grant_state1 = A + research_score * B
  if (total_grant_state1 > 5) { personnel_grant_state1 = 5 + 40 * (total_grant_state1 - 5) / 100 }
  non_personnel_grant_state1 = total_grant_state1 - personnel_grant_state1

  // for state 2
  personnel_grant_state2 = personnel_grant_state1 * (100 - percent) / 100
  non_personnel_grant_state2 = non_personnel_grant_state1 + personnel_grant_state1 * 3 * percent / 100
  total_grant_state2 = personnel_grant_state2 + non_personnel_grant_state2

  // for state 3
  non_personnel_grant_state3 = non_personnel_grant_state1 - non_personnel_grant_state1 * percent / 100
  personnel_grant_state3 = personnel_grant_state1 + (non_personnel_grant_state1 - non_personnel_grant_state3) * 0.3
  total_grant_state3 = personnel_grant_state3 + non_personnel_grant_state3


  if (d3.select("#state").property("value") == 1) {
    d3.select('#state_result').text('پژوهانه پایه')
    d3.select('#percent_title').text("بدون تبدیل:")
    d3.select('#percent').node().value = 0
    d3.select('#percent').property("disabled", true)
    d3.select('#total_grant').text(total_grant_state1.toFixed(3))
    // d3.select('#percent_result_title').html('<h5>بدون تبدیل</h5>')
    d3.select('#percent_result_value').text('---')
    d3.select('#personnel_grant').text(personnel_grant_state1.toFixed(3))
    d3.select('#non_personnel_grant').text(non_personnel_grant_state1.toFixed(3))
    d3.select('#name1_output').text(d3.select('#name1').property("value"))
    d3.select('#name2_output').text(d3.select('#name2').property("value"))
    d3.select('#meli_output').text(d3.select('#meli').property("value"))
    d3.select('#email_output').text(d3.select('#email').property("value"))
    d3.select('#faculty_output').text(d3.select('#faculty').property("value"))
    d3.select('#group_output').text(d3.select('#group').property("value"))
    // code1 = '#NUM#,' +F2F.simplef2f(d3.select('#name1').property("value")) + ',' + F2F.simplef2f(d3.select('#name2').property("value")) + ',' + F2F.simplef2f(d3.select('#faculty').property("value")) + ',' + F2F.simplef2f(d3.select('#group').property("value"))+ ',' +d3.select('#meli').property("value") + ',' + d3.select('#email').property("value") + ',' + d3.select("#state").property("value") + ',' + percent + ',' + research_score + ',' + personnel_grant_state3.toFixed(3) + ',' + non_personnel_grant_state3.toFixed(3) + ',' + total_grant_state3.toFixed(3)+ ',#NUM#'
    code1 = '#NUM#,' + d3.select('#meli').property("value") + ',' + d3.select('#email').property("value") + ',' + d3.select("#state").property("value") + ',' + percent + ',' + research_score + ',' + personnel_grant_state3.toFixed(3) + ',' + non_personnel_grant_state3.toFixed(3) + ',' + total_grant_state3.toFixed(3) + ',#NUM#'
    code2 = '#NAM#,' + d3.select('#name1').property("value") + ',' + d3.select('#name2').property("value") + ',' + d3.select('#faculty').property("value") + ',' + d3.select('#group').property("value") + ',#NAM#'
    qrcode_text = d3.select('#meli').property("value") + ',' + d3.select('#email').property("value") + ',' + d3.select("#state").property("value") + ',' + percent + ',' + research_score + ',' + personnel_grant_state3.toFixed(3) + ',' + non_personnel_grant_state3.toFixed(3) + ',' + total_grant_state3.toFixed(3) + ',' + d3.select('#name1').property("value") + ',' + d3.select('#name2').property("value") + ',' + d3.select('#faculty').property("value") + ',' + d3.select('#group').property("value")
  }

  if (d3.select("#state").property("value") == 2) {
    d3.select('#state_result').text('اعتبار اسنادی افزایش یافته')
    d3.select('#percent_title').text("درصد تبدیل حق التحقیق به اسنادی (0% تا 75%):")
    d3.select('#percent').property("disabled", false)
    d3.select('#total_grant').text(total_grant_state2.toFixed(3))
    // d3.select('#percent_result_title').html('<h5>درصد تبدیل (%)</h5>')
    d3.select('#percent_result_value').text(percent)
    d3.select('#personnel_grant').text(personnel_grant_state2.toFixed(3))
    d3.select('#non_personnel_grant').text(non_personnel_grant_state2.toFixed(3))
    d3.select('#name1_output').text(d3.select('#name1').property("value"))
    d3.select('#name2_output').text(d3.select('#name2').property("value"))
    d3.select('#meli_output').text(d3.select('#meli').property("value"))
    d3.select('#email_output').text(d3.select('#email').property("value"))
    d3.select('#faculty_output').text(d3.select('#faculty').property("value"))
    d3.select('#group_output').text(d3.select('#group').property("value"))
    // code1 = '#NUM#,' +F2F.simplef2f(d3.select('#name1').property("value")) + ',' + F2F.simplef2f(d3.select('#name2').property("value")) + ',' + F2F.simplef2f(d3.select('#faculty').property("value")) + ',' + F2F.simplef2f(d3.select('#group').property("value"))+ ',' +d3.select('#meli').property("value") + ',' + d3.select('#email').property("value") + ',' + d3.select("#state").property("value") + ',' + percent + ',' + research_score + ',' + personnel_grant_state3.toFixed(3) + ',' + non_personnel_grant_state3.toFixed(3) + ',' + total_grant_state3.toFixed(3)+ ',#NUM#'
    code1 = '#NUM#,' + d3.select('#meli').property("value") + ',' + d3.select('#email').property("value") + ',' + d3.select("#state").property("value") + ',' + percent + ',' + research_score + ',' + personnel_grant_state3.toFixed(3) + ',' + non_personnel_grant_state3.toFixed(3) + ',' + total_grant_state3.toFixed(3) + ',#NUM#'
    code2 = '#NAM#,' + d3.select('#name1').property("value") + ',' + d3.select('#name2').property("value") + ',' + d3.select('#faculty').property("value") + ',' + d3.select('#group').property("value") + ',#NAM#'
    qrcode_text = d3.select('#meli').property("value") + ',' + d3.select('#email').property("value") + ',' + d3.select("#state").property("value") + ',' + percent + ',' + research_score + ',' + personnel_grant_state3.toFixed(3) + ',' + non_personnel_grant_state3.toFixed(3) + ',' + total_grant_state3.toFixed(3) + ',' + d3.select('#name1').property("value") + ',' + d3.select('#name2').property("value") + ',' + d3.select('#faculty').property("value") + ',' + d3.select('#group').property("value")

  }

  if (d3.select("#state").property("value") == 3) {
    d3.select('#state_result').text('حق التحقیق افزایش یافته')
    d3.select('#percent_title').text("درصد تبدیل اسنادی به حق التحقیق (0% تا 75%):")
    d3.select('#percent').property("disabled", false)
    d3.select('#total_grant').text(total_grant_state3.toFixed(3))
    // d3.select('#percent_result_title').html('<h5>درصد تبدیل (%)</h5>')
    d3.select('#percent_result_value').text(percent)
    d3.select('#personnel_grant').text(personnel_grant_state3.toFixed(3))
    d3.select('#non_personnel_grant').text(non_personnel_grant_state3.toFixed(3))
    d3.select('#name1_output').text(d3.select('#name1').property("value"))
    d3.select('#name2_output').text(d3.select('#name2').property("value"))
    d3.select('#meli_output').text(d3.select('#meli').property("value"))
    d3.select('#email_output').text(d3.select('#email').property("value"))
    d3.select('#faculty_output').text(d3.select('#faculty').property("value"))
    d3.select('#group_output').text(d3.select('#group').property("value"))
    // code1 = '#NUM#,' +F2F.simplef2f(d3.select('#name1').property("value")) + ',' + F2F.simplef2f(d3.select('#name2').property("value")) + ',' + F2F.simplef2f(d3.select('#faculty').property("value")) + ',' + F2F.simplef2f(d3.select('#group').property("value"))+ ',' +d3.select('#meli').property("value") + ',' + d3.select('#email').property("value") + ',' + d3.select("#state").property("value") + ',' + percent + ',' + research_score + ',' + personnel_grant_state3.toFixed(3) + ',' + non_personnel_grant_state3.toFixed(3) + ',' + total_grant_state3.toFixed(3)+ ',#NUM#'
    code1 = '#NUM#,' + d3.select('#meli').property("value") + ',' + d3.select('#email').property("value") + ',' + d3.select("#state").property("value") + ',' + percent + ',' + research_score + ',' + personnel_grant_state3.toFixed(3) + ',' + non_personnel_grant_state3.toFixed(3) + ',' + total_grant_state3.toFixed(3) + ',#NUM#'
    code2 = '#NAM#,' + d3.select('#name1').property("value") + ',' + d3.select('#name2').property("value") + ',' + d3.select('#faculty').property("value") + ',' + d3.select('#group').property("value") + ',#NAM#'
    qrcode_text = d3.select('#meli').property("value") + ',' + d3.select('#email').property("value") + ',' + d3.select("#state").property("value") + ',' + percent + ',' + research_score + ',' + personnel_grant_state3.toFixed(3) + ',' + non_personnel_grant_state3.toFixed(3) + ',' + total_grant_state3.toFixed(3) + ',' + d3.select('#name1').property("value") + ',' + d3.select('#name2').property("value") + ',' + d3.select('#faculty').property("value") + ',' + d3.select('#group').property("value")

  }

  // d3.select('#full_name').html('<b>' + d3.select('#name1').property("value") + " " + d3.select('#name2').property("value") + '</b>')
  // d3.select('#full_aff').text("دانشکده " + d3.select('#faculty').property("value") + " - گروه " + d3.select('#group').property("value"))
  d3.select('#research_score_result').text(d3.select('#research_score').property("value"))

  console.log('message - update')
}
update()


d3.select("#state").on("change", function () {
  console.log('message1')
  A = 4
  B = 0.5
  research_score = 0
  percent = 0

  total_grant_state1 = 0
  total_grant_state2 = 0
  total_grant_state3 = 0

  personnel_grant_state1 = 0
  personnel_grant_state2 = 0
  personnel_grant_state3 = 0

  non_personnel_grant_state1 = 0
  non_personnel_grant_state2 = 0
  non_personnel_grant_state3 = 0

  d3.select('#research_score').node().value = research_score
  d3.select('#percent').node().value = percent

  update()
});

d3.select("#percent").on("change", function () {
  console.log('message2')
  update()
});

d3.select("#research_score").on("change", function () {
  console.log('message2')
  update()
});

d3.select("#email").on("change", function () {
  console.log('message2')
  update()
});

d3.select("#meli").on("change", function () {
  console.log('message2')
  update()
});

d3.select("#faculty").on("change", function () {
  console.log('message2')
  update()
});

d3.select("#group").on("change", function () {
  console.log('message2')
  update()
});

var state_value = 0
var word1
var word2
var word3
var word4
var word5
var word6
var word7


d3.select("#letter").on("click", function () {
  state_value = d3.select("#state").property("value")
  word1 = d3.select('#name1').property("value")
  word2 = d3.select('#name2').property("value")
  word3 = d3.select('#faculty').property("value")
  word4 = d3.select('#group').property("value")
  word5 = d3.select('#research_score').property("value")
  word6 = d3.select('#meli').property("value")
  word7 = d3.select('#email').property("value")
  console.log('state_value')
  console.log(state_value)
  d3.select('#calculator').html(
    '<div class="row">   <div class="col"></div>   <div class="col col-lg-8">     <div class="alert alert-warning" role="alert">       <P> ترجیحا بعد از زدن دکمه "چاپ" بخش Destination را روی حالت Save to PDF قرار دهید. </P>       <P>لطفا از آدرس و عنوان زیر جهت ارسال ایمیل استفاده نمایید.</P>       <p> آدرس ایمیل: </p>       <P><strong>research2@shahed.ac.ir</strong></P>       <p>عنوان ایمیل:</p>       <p> <strong><span id="email_title">1</span></strong> </p>     </div>   </div>   <div class="col"></div> </div> <div class="row">   <div class="col"></div>   <div class="col">     <form class="card p-2">       <div class="input-group"> <button id="print_btn" class="w-100 btn btn-success btn-lg" type="button"           onclick="printDiv(print_file_name)">چاپ</button> </div>     </form>   </div>   <div class="col"></div>   <div class="col">     <form class="card p-2">       <div class="input-group"> <button id="return_btn" class="w-100 btn btn-primary btn-lg" type="button"           onclick="first_page()">بازگشت</button> </div>     </form>   </div>   <div class="col"></div> </div> <div class="row">   <div class="col col-xs"></div>   <div id="printableArea" class="row">     <div class="col col-xs"></div>     <div class="col col-lg-8 card">       <table>         <tbody>           <tr>             <td rowspan="8"><img style="width:100px;" src="img/form1.png" /></td>             <td height="50" align="center"><img style="width:100px;" src="img/Untitled.png" /></td>           </tr>           <tr>             <td height="50"> </td>           </tr>           <tr>             <td height="1">               <p style="font-weight: bold;"> معاون محترم پژوهش و فناوری دانشگاه شاهد </p>             </td>           </tr>           <tr>             <td height="1">               <p style="font-weight: bold;"> موضوع: تعیین حالت پژوهانه دریافتی </p>             </td>           </tr>           <tr>             <td height="1">               <p>احتراماً، پیرو "دستورالعمل اجرایی تخصيص پژوهانه عملکردی اعضای هيأت علمي دانشگاه شاهد" پژوهانه مورد                 درخواست اینجانب به شرح ذیل می باشد. </p>             </td>           </tr>           <tr>             <td height="1">               <div class="row">                 <div class="col">                   <table class="table table-striped table-bordered">                     <tbody>                       <tr>                         <th scope="row"> <strong>حالت انتخابی</strong> </th>                         <td><strong><span id="state_result">1</span></strong></td>                       </tr>                       <tr>                         <th scope="row"> <strong>درصد تبدیل (%)</strong> </th>                         <td><strong><span id="percent_result_value"></span></strong></td>                       </tr>                       <tr>                         <th scope="row"> <strong>امتیاز پژوهشی</strong> </th>                         <td><strong><span id="research_score_result">1</span></strong></td>                       </tr>                       <tr>                         <th scope="row"> <strong>میزان حق التحقیق (میلیون تومان)</strong> </th>                         <td><strong><span id="personnel_grant">1</span></strong></td>                       </tr>                       <tr>                         <th scope="row"> <strong>میزان اسنادی (میلیون تومان)</strong> </th>                         <td><strong><span id="non_personnel_grant">1</span></strong></td>                       </tr>                       <tr>                         <th scope="row"> <strong>مبلغ کل پژوهانه (میلیون تومان)</strong> </th>                         <td><strong><span id="total_grant">1</span></strong></td>                       </tr>                     </tbody>                   </table>                 </div>               </div>             </td>           </tr>           <tr>             <td height="100">               <div class="row">                  <div id="qrcode" class="col card border-light mx-auto position-absolute end-0"                   style="width: 230px;height: 210px;"></div>                  <div class="col">                   <strong>                     <p><span id="full_name">1</span></p>                   </strong>                   <strong>                     <p><span id="aff1">1</span></p>                   </strong>                   <strong>                     <p><span id="aff2">1</span></p>                   </strong>                   <strong>                     <p><span id="full_meli">1</span></p>                   </strong>                   <strong>                     <p><span id="full_email">1</span></p>                   </strong>                 </div>                </div>              </td>           </tr>           <tr>             <td height="200"><br><br><span>.</span></td>           </tr>         </tbody>       </table>     </div>     <div class="col col-xs"></div>   </div>   <div class="col col-xs"></div> </div>'
  )
  print_letter()

});

function print_letter() {

  if (state_value == 1) {
    d3.select('#state_result').text('پژوهانه پایه')
    d3.select('#percent_title').text("بدون تبدیل:")
    d3.select('#total_grant').text(total_grant_state1.toFixed(3))
    d3.select('#percent_result_value').text('---')
    d3.select('#personnel_grant').text(personnel_grant_state1.toFixed(3))
    d3.select('#non_personnel_grant').text(non_personnel_grant_state1.toFixed(3))
    d3.select('#research_score_result').text(research_score)
  }

  if (state_value == 2) {
    d3.select('#state_result').text('اعتبار اسنادی افزایش یافته')
    d3.select('#percent_title').text("درصد تبدیل حق التحقیق به اسنادی (0% تا 75%):")
    d3.select('#percent').property("disabled", false)
    d3.select('#total_grant').text(total_grant_state2.toFixed(3))
    d3.select('#percent_result_value').text(percent)
    d3.select('#personnel_grant').text(personnel_grant_state2.toFixed(3))
    d3.select('#non_personnel_grant').text(non_personnel_grant_state2.toFixed(3))
    d3.select('#research_score_result').text(research_score)
  }

  if (state_value == 3) {
    d3.select('#state_result').text('حق التحقیق افزایش یافته')
    d3.select('#percent_title').text("درصد تبدیل اسنادی به حق التحقیق (0% تا 75%):")
    d3.select('#percent').property("disabled", false)
    d3.select('#total_grant').text(total_grant_state3.toFixed(3))
    d3.select('#percent_result_value').text(percent)
    d3.select('#personnel_grant').text(personnel_grant_state3.toFixed(3))
    d3.select('#non_personnel_grant').text(non_personnel_grant_state3.toFixed(3))
    d3.select('#research_score_result').text(research_score)

  }

  d3.select('#full_name').html('<b>' + word1 + " " + word2 + '</b>')
  d3.select('#aff1').text("دانشکده: " + word3)
  d3.select('#aff2').text("گروه: " + word4)
  d3.select('#full_meli').text("کد ملی: " + word6)
  d3.select('#full_email').text("ایمیل: " + word7)
  d3.select('#code1').text(code1)
  d3.select('#code2').text(code2)
  d3.select('#email_title').text(email_title)

  console.log(qrcode_text)

  qrcode = new QRCode(document.getElementById("qrcode"), {
    width: 1024,
    height: 1024,
    colorDark: "#000000",
    colorLight: "#ffffff",
    correctLevel: QRCode.CorrectLevel.L
  });

  qrcode.makeCode(qrcode_text);



}

function first_page() {
  console.log('return_btn')
  d3.select('#calculator').html(
    '<div class="col-md-5 col-lg-6 order-md-last">           <h4 class="d-flex justify-content-between align-items-center mb-3">             <span class="text-muted">خروجی</span>           </h4>           <ul class="list-group mb-3">             <li class="list-group-item d-flex justify-content-between">               <div>                 <h6 class="my-0">نام:</h6>                 <small class="text-muted"> </small>               </div>               <strong><span id="name1_output" class="text-dark">-</span></strong>             </li>             <li class="list-group-item d-flex justify-content-between">               <div>                 <h6 class="my-0">نام خانوادگی:</h6>                 <small class="text-muted"> </small>               </div>               <strong><span id="name2_output" class="text-dark">-</span></strong>             </li>             <li class="list-group-item d-flex justify-content-between">               <div>                 <h6 class="my-0">دانشکده:</h6>                 <small class="text-muted"> </small>               </div>               <strong><span id="faculty_output" class="text-dark">-</span></strong>             </li>             <li class="list-group-item d-flex justify-content-between">               <div>                 <h6 class="my-0">گروه:</h6>                 <small class="text-muted"> </small>               </div>               <strong><span id="group_output" class="text-dark">-</span></strong>             </li>             <li class="list-group-item d-flex justify-content-between">               <div>                 <h6 class="my-0">کدملی:</h6>                 <small class="text-muted"> </small>               </div>               <strong><span id="meli_output" class="text-dark">-</span></strong>             </li>             <li class="list-group-item d-flex justify-content-between">               <div>                 <h6 class="my-0">آدرس ایمیل:</h6>                 <small class="text-muted"> </small>               </div>               <strong><span id="email_output" class="text-dark">-</span></strong>             </li>             <li class="list-group-item d-flex justify-content-between">               <div>                 <h6 class="my-0">حالت انتخابی:</h6>                 <small class="text-muted"> </small>               </div>               <strong><span id="state_result" class="text-success">پ</span></strong>             </li>             <li class="list-group-item d-flex justify-content-between">               <div>                 <h6 class="my-0">درصد تبدیل (%):</span></h6>                 <small class="text-muted"> </small>               </div>               <strong><span id="percent_result_value" class="text-danger">25</span></strong>              </li>             <li class="list-group-item d-flex justify-content-between">               <div>                 <h6 class="my-0">امتیاز پژوهشی:</h6>                 <small class="text-muted"> </small>               </div>               <strong><span id="research_score_result" class="text-danger">30</span></strong>              </li>             <li class="list-group-item d-flex justify-content-between">               <div>                 <h6 class="my-0">میزان حق التحقیق (میلیون تومان):</h6>                 <small class="text-muted"> </small>               </div>               <strong><span id="personnel_grant" class="text-primary">30</span></strong>             </li>             <li class="list-group-item d-flex justify-content-between">               <div>                 <h6 class="my-0">میزان اسنادی (میلیون تومان):</h6>                 <small class="text-muted"> </small>               </div>               <strong><span id="non_personnel_grant" class="text-primary">30.55</span></strong>             </li>             <li class="list-group-item d-flex justify-content-between">               <div>                 <h6 class="my-0">مبلغ کل پژوهانه (میلیون تومان):</h6>                 <small class="text-muted"> </small>               </div>               <strong><span id="total_grant" class="text-primary">30.33</span></strong>             </li>            </ul>            <form class="card p-2">             <div class="input-group">               <button id="letter" class="w-100 btn btn-primary btn-lg" type="button">ایجاد نامه</button>             </div>           </form>         </div>         <div class="col-md-7 col-lg-6">           <h4 class="mb-3">ورودی‌</h4>           <form class="needs-validation" novalidate>             <div class="row g-3">                <div class="input-group mb-3">                 <span class="input-group-text">نام:</span>                 <input id="name1" type="text" class="form-control" value="">                 <span class="input-group-text">نام خانوادگی:</span>                 <input id="name2" type="text" class="form-control" value="">               </div>                <div class="input-group mb-3">                 <span class="input-group-text">دانشکده:</span>                 <input id="faculty" type="text" class="form-control" value="">                 <span class="input-group-text">گروه:</span>                 <input id="group" type="text" class="form-control" value="">               </div>                <div class="input-group mb-3">                 <span class="input-group-text">کدملی:</span>                 <input id="meli" type="text" class="form-control" value="">                 <span class="input-group-text">آدرس ایمیل:</span>                 <input id="email" type="text" class="form-control" value="">               </div>                <div class="input-group mb-3">                 <span class="input-group-text">حالت:</span>                 <select id="state" class="form-select" aria-label="Default select example">                   <option value="1" selected>پژوهانه پایه</option>                   <option value="2">اعتبار اسنادی افزایش یافته</option>                   <option value="3">حق التحقیق افزایش یافته</option>                 </select>               </div>                <div class="input-group mb-3">                 <span class="input-group-text">مبلغ ثابت پژوهانه (A):</span>                 <input id="AA" type="text" class="form-control" value="0" disabled>                 <span class="input-group-text">میلیون تومان</span>               </div>                <div class="input-group mb-3">                 <span class="input-group-text">ضریب (B):</span>                 <input id="BB" type="text" class="form-control" value="0" disabled>               </div>                <div class="input-group mb-3">                 <span class="input-group-text">امتیاز پژوهشی (K):</span>                 <input id="research_score" type="text" class="form-control" value="0">                 <!-- <span class="input-group-text">امتیاز</span> -->               </div>                <div class="input-group mb-3">                 <span id="percent_title" class="input-group-text">میزان تبدیل:</span>                 <input id="percent" type="text" class="form-control" value="15">                 <span class="input-group-text">درصد</span>               </div>               </form>         </div>'
  )
  location.reload()
};



