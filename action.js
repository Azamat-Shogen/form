
/* VARIABLES **************************************************/

    let form_container = document.getElementById('form-container');
    let form_instruction = document.getElementById('form_instruction_id');
    let bod = document.body;
    
    (function(){
    form_container.style.display = 'Block';
    form_container.style.margin = '0px';
    form_container.style.width = '950px';
    form_container.style.height = '1000px';
    form_instruction_id.style.display = 'Block';
     
})();


// ******************************* FORM FUNCTIONS **************************************************


 function printForm(){
     form_instruction_id.style.display = 'None';
     window.print();
     form_instruction_id.style.display = 'Block'; 
 }

//****************** CONSTRUCTION FUNCTION FOR CARRIER ***********************
    
 function Carrier(name, address1, address2, phone, usdot, fein, ifta, email){
    this.name = name;
    this.address1 = address1;
    this.address2 = address2;
    this.phone = phone;
    this.usdot = usdot;
    this.fein = fein;
    this.ifta = ifta;
    this.email = email;
    
}   
    
// ***************************** *******************************   
let carrierArray = [];

let empty_carrier = new Carrier("",
                               "",
                               "",
                               "",
                               "",
                               "",
                               "",
                               "");
 
let gap_global = new Carrier("Gap Global Inc",
                             "800 WERNER COURT, STE  275",
                             "Casper, WY, 82602",
                             "224-347-4944",
                             "2790505",
                             "47-4783711",
                             "47478371101",
                             "permits@gogapglobal.com");


let jet_motors = new Carrier("Jet Motors Inc",
                             "1185 BUCKINGHAM CT. 1D",
                             "Wheeling, IL, 60090",
                             "847-902-5393",
                             "2909644",
                             "81-3249195",
                             "IL81324919501",
                             "jetmotors2015@gmail.com");


let turun_llc = new Carrier("Turun LLC",
                             "16816 SE POWELL BLVD, APT 104",
                             "Portland, OR, 97236",
                             "802-777-7888",
                             "3324532",
                             "84-2768591",
                             "OR08689",
                             "turunllc@gmail.com");


let gt_express = new Carrier("GT Express INC",
                             "8500W 191st Street Unit1",
                             "Mokena, IL, 60448",
                             "779-333-7283",
                             "2472326",
                             "45-5384850",
                             "45-5384850",
                             "greg@gtexpress.com");

let ktm_united = new Carrier("KTM UNITED INC",
                             "9001 GOLF RD 9B",
                             "Des Plaines, IL, 60016",
                             "773-677-4777",
                             "2327771",
                             "46-0635589",
                             "IL46063558901",
                             "ktmunited@hotmail.com");

let extreme_carriers = new Carrier("Extreme Carriers Inc",
                             "4652 N ORANGE AVE ",
                             "Norridge, IL, 60706",
                             "888-566-1170",
                             "2635389",
                             "474003344",
                             "IL47400334401",
                             "EXTREMECARRIERSINC@GMAIL.COM");

let imc_trans = new Carrier("Imc Trans Inc ",
                             "3205 N Wilke RD, suite 3205-118",
                             "Arlington Heights, IL, 60004",
                             "***-***-****",
                             "2551991",
                             "47-2130588",
                             "IL47213058801",
                             "Dispatch@imctrans.com");

let am_carriers = new Carrier("A&M Carriers Inc",
                             "1325 VALLEY ST",
                             "Dayton, OH, 45404",
                             "224-434-1684",
                             "2836509",
                             "81-1011683",
                             "IL81101168301",
                             "amdispatch247@gmail.com");

let global_transport = new Carrier("global transportation llc",
                             "4500 S Monaco st",
                             "Denver, CO, 80237",
                             "720-325-6760",
                             "2439316",
                             "46-3673743",
                             "CO-46-3673743",
                             "opendeck@kavkazexpress.net");

let total_quality = new Carrier("TOTAL QUALITY TRUCKING INC",
                             "490 Riverview Dr Suite #5",
                             "Totowa, NJ, 07512",
                             "866-702-0022",
                             "2548733",
                             "47-1058618",
                             "**********",
                             "tqtdispatch@gmail.com");


let yellowstone = new Carrier("Yellowstone Logistics LLC",
                             "212 Overmount ave, apt H",
                             "Woodland Park, NJ, 07424",
                             "973-510-3598",
                             "3367868",
                             "84-3844268",
                             "**********",
                             "yellow36722@gmail.com");

let eagle_logistics = new Carrier("EAGLE LOGISTICS, LLC",
                             "657 UNION BLD",
                             "Totowa, NJ, 07512",
                             "973-500-6191",
                             "2416696",
                             "80-0933941",
                             "**********",
                             "jakub@goeaglelogistics.com");

let gt_xpress = new Carrier("GT Xpress Inc",
                             "7722 Greenley Blvd",
                             "Tinley Park, IL, 60487",
                             "877-377-2720",
                             "2836194",
                             "81-0922832",
                             "45-5384850",
                             "greg@gtexpress.com");


let love_usa = new Carrier("Love USA Transportation Inc",
                             "1120 Fox Dr, Apt 408",
                             "Monroeville, PA",
                             "412-499-3010",
                             "3004468",
                             "81-4188369",
                             "*********",
                             "loveusa.9898@gmail.com");
    
let right_path = new Carrier("Right Path Trucking Inc",
                             "2743 W Arthur ave #3",
                             "Chicago, IL, 60645",
                             "312-498-4303",
                             "3129753",
                             "82-5331873",
                             "IL82533187301",
                             "rightpathtruckinginc@gmail.com");

let american_power = new Carrier("American Power Trucking LLC",
                             "24910 103rd Ave SE, #C105",
                             "Kent, WA 98030",
                             "(253) 334 - 8529",
                             "2442013",
                             "85-1586011",
                             "************",
                             "billing@americanpowertrucking.com");

let universalWaysCorp = new Carrier("Universal Ways Corp",
                             "3444 N Ozark ave.",
                             "Chicago, IL, 60634",
                             "872-999-3777",
                             "3089385",
                             "81-5066377",
                             "IL81506637701",
                             "universalwayssafety@gmail.com");

let botashEnterpriceCorp = new Carrier("Botash Enterprise Corp",
                             "552 Greystone Lane, Apt D1",
                             "Wheeling, IL 60090",
                             "847-278-0380",
                             "2062477",
                             "27-3174536",
                             "***********",
                             "botashenterprises@gmail.com");

let vozel_transport = new Carrier("Vozel Transport Inc",
                             "361 Evening Star Ct",
                             "Bolingbrook, IL 60440",
                             "847-595-0847",
                             "3177198",
                             "465562606",
                             "18507-33920",
                             "office@vozeltransport.com");


//carrierArray.push(empty_carrier);
carrierArray.push(gap_global);
carrierArray.push(gt_express);
carrierArray.push(jet_motors);
carrierArray.push(turun_llc);
carrierArray.push(ktm_united);
carrierArray.push(extreme_carriers);
carrierArray.push(imc_trans);
carrierArray.push(am_carriers);
carrierArray.push(global_transport);
carrierArray.push(total_quality);
carrierArray.push(yellowstone);
carrierArray.push(eagle_logistics);
carrierArray.push(gt_xpress);
carrierArray.push(love_usa);
carrierArray.push(right_path);
carrierArray.push(american_power);
carrierArray.push(universalWaysCorp);
carrierArray.push(botashEnterpriceCorp);
carrierArray.push(vozel_transport);

  
    
function selectedCarrier(indx){
   document.getElementById('carr_id').value = carrierArray[indx].name;
   document.getElementById('address_id1').value = carrierArray[indx].address1;
   document.getElementById('address_id2').value = carrierArray[indx].address2;
   document.querySelector('.phone_class').value = carrierArray[indx].phone; 
   document.getElementById('usdot').value = carrierArray[indx].usdot;
   document.getElementById('fein').value = carrierArray[indx].fein;
   document.getElementById('ifta').value = carrierArray[indx].ifta;
   document.getElementById('email_input').value = carrierArray[indx].email;
}
    
 // **************** GET CARRIER INFO ***************** //
 
    
function selectUsdot(){
    var input_usdot = document.getElementById('usdot-val').value;
    
    if (input_usdot.length >= 8){
        alert('The USDOT you entered has too many digits.\n Clear and click "Submit" to enter the information manually!\n (max - 7 digits)');
    }

    else{
    document.getElementById('section-0').style.display = 'None';
    document.getElementById('section-1').style.display = 'Grid';
    console.log(input_usdot);
        
    let index = carrierArray.findIndex(el => el.usdot === input_usdot);
    if( index === -1){alert('Not found!\n Please enter the information manually');}
        else{selectedCarrier(index);}

    }
    bod.style.backgroundImage = "url('images/pic3.jpg')";
        
}

