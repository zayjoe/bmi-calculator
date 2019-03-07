$( document ).ready(function() {
    console.log( "ready!" );

    // date picker for pregnancy
    var date_input=$('input[name="date"]'); //our date input has the name "date"
          var container=$('.bootstrap-iso form').length>0 ? $('.bootstrap-iso form').parent() : "body";
          var options={
            format: 'mm/dd/yyyy',
            container: container,
            todayHighlight: true,
            autoclose: true,
          };
          date_input.datepicker(options);

    //bmi data collect and calculate
    $( ".bmi-wrap input[type='submit']" ).click(function() {
        var ibmWeight = parseInt($("#ibm_weight").val());
        //console.log(ibmWeight);

        //console.log(weiht);
        var feet = parseInt($("#ibm_height_feet").val());
        //feet to inches
        var feet = feet * 12;
        var inches = parseInt($("#ibm_height_inches").val());
        //total height (inches)
        var heighTotal = feet + inches ;
        var heighTotal = Math.pow(heighTotal,2);
        //console.log(heighTotal);
        var youdata = (ibmWeight / heighTotal)*703;
        //console.log(youdata);

            if(youdata < 18.5){
                $('#bmiModal #bmi').text(Math.round(youdata * 100) / 100);
                $('#bmiModal #youbmiResult').text(
                    'လူကြီးမင်း၏ကိုယ်အလေးချိန်သည် ပုံမှန်အောက်အလွန့်အလွန်လျော့နည်းသည်။ BMI ၁၈.၅ အောက်ရောက်ရှိနေလျှင် ကိုယ်အလေးချိန် ပုံမှန်အောက် လျော့နည်းနေသူဖြစ်ပါသည်။ ကိုယ်အလေးချိန်နည်းရခြင်း၏ အကြောင်းရင်းကို ရှာဖွေရပါမည်။ ကိုယ်အလေးချိန် ပုံမှန်ထက်နည်းရခြင်းအကြောင်းရင်းများ (၁) ရောဂါတစ်ခုခုဖြစ်နေခြင်း (ဆရာဝန်နှင့်တိုင်ပင်ပြီး ကျန်းမာရေးစစ်ဆေးသင့်ပါသည်။) (၂) နေ့စဉ်စားသည့်အစားအသောက် မလုံလောက်ခြင်း (အချို့က နံနက်စာကို လုံးဝမစားဘဲ နေလေ့ရှိသည်။ ထိုခံယူချက်မမှန်ပါ။ နံနက်စာကို စားဖြစ်အောင်စားရပါမည်။ တစ်နေ့ ၃ ကြိမ်စားလျှင် နံနက်စာကို အများဆုံးစားပြီး နေ့လည်စာ ညနေစာများကို လျှော့စားနိုင်ပါသည်။ အဓိကမှာ တစ်နေ့တာလိုအပ်ချက် ကယ်လိုရီ ပြည့်မီအောင် စားရန်ဖြစ်ပါသည်။'
                );
                $('#bmiModal').modal();
                //console.log('under weight');
            }else if(youdata>=18.5 && youdata<=25) {
                $('#bmiModal #bmi').text(Math.round(youdata * 100) / 100);
                $('#bmiModal #youbmiResult').text(
                    'လူကြီးမင်း၏ကိုယ်အလေးချိန်သည်ပုံမှန်အတိုင်းဖြစ်သည်။ BMI ၁၈.၅ မှ ၂၄.၉ အတွင်း ရှိနေပါက ခန္ဓာကိုယ်ထုထည်စံနှုန်း ပုံမှန်အတိုင်းရှိသည်ဟု ဆိုနိုင်ပါသည်။ ကျန်းမာရေးနှင့် ညီညွတ်သော ကိုယ်အလေးချိန်ဖြစ်ပါသည်။ ဒီအတိုင်း ဆက်လက်ထိန်းသိမ်းသွားနိုင်ရန် ကြိုးစားပါ။'
                );
                $('#bmiModal').modal();
            }else if(youdata >= 25 && youdata <= 30){
                $('#bmiModal #bmi').text(Math.round(youdata * 100) / 100);
                $('#bmiModal #youbmiResult').text(
                    'သင်သည်ကျန်းမာရေးကို အတွက် BMI ၁၈.၅ မှ ၂၅ အတွင်းရရှိရန် ကိုယ်အလေ:ချိန်ကိုလျှော့ချရန်လိုအပ်လာပြီဖြစ်သည်။'
                );
                $('#bmiModal').modal();
                //console.log('hurry');
            }else if(isNaN(youdata)) {
                $('#bmiModal #youbmiResult').text(
                    'ကျေးဇူးပြု၍ သင်၏ အသက်၊ကိုယ်အလေးချိန်၊အရပ်အမြင့်ကို ထည့်ပေးပါ။'
                );
                $('#bmiModal').modal();
                //console.log('Are you fool fill the correct data');
            }else {
                $('#bmiModal #bmi').text(Math.round(youdata * 100) / 100);
                $('#bmiModal #youbmiResult').text(
                    'လူကြီးမင်း၏ကိုယ်အလေးချိန်သည် ပုံမှန်ထက်အလွန့်အလွန်များနေသည်။ BMI ၃၀ နှင့်အထက် ဖြစ်နေသည်'
                );
                $('#bmiModal').modal();
                console.log('over')
            }


      });
});