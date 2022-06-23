// Go back button
function goBack() {
  window.history.back();
}
// Submit to WhatToMine for earning estimations
function submitForm() {
  var algo = document.getElementById("algo");
  var selectedValue = algo.options[algo.selectedIndex].value;
  if(selectedValue == "ethash"){
    var urlParam = "eth=true&factor[eth_hr]=" + document.getElementById("hash").value + "&factor[eth_p]=0&factor[e4g_hr]=0&factor[e4g_p]=0&factor[zh_hr]=0&factor[zh_p]=0&factor[cnh_hr]=0&factor[cnh_p]=0&factor[cng_hr]=0&factor[cng_p]=0&factor[cnf_hr]=0&factor[cnf_p]=0&factor[cx_hr]=0&factor[cx_p]=0&factor[eqa_hr]=0&factor[eqa_p]=0&factor[cc_hr]=0&factor[cc_p]=0&factor[cr29_hr]=0&factor[cr29_p]=0&factor[ct31_hr]=0&factor[ct31_p]=0&factor[ct32_hr]=0&factor[ct32_p]=0&factor[eqb_hr]=0&factor[eqb_p]=0&factor[rmx_hr]=0&factor[rmx_p]=0&factor[ns_hr]=0&factor[ns_p]=0&factor[al_hr]=0&factor[al_p]=0&factor[ops_hr]=0&factor[ops_p]=0&factor[eqz_hr]=0&factor[eqz_p]=0&factor[zlh_hr]=0&factor[zlh_p]=0&factor[kpw_hr]=0&factor[kpw_p]=0&factor[ppw_hr]=0&factor[ppw_p]=0&factor[x25x_hr]=0&factor[x25x_p]=0&factor[fpw_hr]=0&factor[fpw_p]=0&factor[vh_hr]=0&factor[vh_p]=0&factor[cost]=0.0&factor[cost_currency]=USD&sort=Difficulty&volume=0&revenue=current&factor[exchanges][]=&factor[exchanges][]=binance&dataset=Main&commit=Calculate";
    var URL = "https://whattomine.com/coins";
    var encodedUrl = URL + "?" + encodeURI(urlParam);
    window.location.href = encodedUrl;
  } else if(selectedValue == "etchash") {
    var urlParam = "eth=false&factor[eth_hr]=0&e4g=true&factor[eth_p]=0&factor[e4g_hr]=" + document.getElementById("hash").value + "&factor[e4g_p]=0&factor[zh_hr]=0&factor[zh_p]=0&factor[cnh_hr]=0&factor[cnh_p]=0&factor[cng_hr]=0&factor[cng_p]=0&factor[cnf_hr]=0&factor[cnf_p]=0&factor[cx_hr]=0&factor[cx_p]=0&factor[eqa_hr]=0&factor[eqa_p]=0&factor[cc_hr]=0&factor[cc_p]=0&factor[cr29_hr]=0&factor[cr29_p]=0&factor[ct31_hr]=0&factor[ct31_p]=0&factor[ct32_hr]=0&factor[ct32_p]=0&factor[eqb_hr]=0&factor[eqb_p]=0&factor[rmx_hr]=0&factor[rmx_p]=0&factor[ns_hr]=0&factor[ns_p]=0&factor[al_hr]=0&factor[al_p]=0&factor[ops_hr]=0&factor[ops_p]=0&factor[eqz_hr]=0&factor[eqz_p]=0&factor[zlh_hr]=0&factor[zlh_p]=0&kpw=false&factor[kpw_hr]=0&factor[kpw_p]=0&factor[ppw_hr]=0&factor[ppw_p]=0&factor[x25x_hr]=0&factor[x25x_p]=0&factor[fpw_hr]=0&factor[fpw_p]=0&factor[vh_hr]=0&factor[vh_p]=0&factor[cost]=0.0&factor[cost_currency]=USD&sort=Difficulty&volume=0&revenue=current&factor[exchanges][]=&factor[exchanges][]=binance&dataset=Main&commit=Calculate";
    var URL = "https://whattomine.com/coins";
    var encodedUrl = URL + "?" + encodeURI(urlParam);
    window.location.href = encodedUrl;
  } else if(selectedValue == "KawPow") {
    var urlParam = "eth=false&factor[eth_hr]=0&factor[eth_p]=0&factor[e4g_hr]=0&factor[e4g_p]=0&factor[zh_hr]=0&factor[zh_p]=0&factor[cnh_hr]=0&factor[cnh_p]=0&factor[cng_hr]=0&factor[cng_p]=0&factor[cnf_hr]=0&factor[cnf_p]=0&factor[cx_hr]=0&factor[cx_p]=0&factor[eqa_hr]=0&factor[eqa_p]=0&factor[cc_hr]=0&factor[cc_p]=0&factor[cr29_hr]=0&factor[cr29_p]=0&factor[ct31_hr]=0&factor[ct31_p]=0&factor[ct32_hr]=0&factor[ct32_p]=0&factor[eqb_hr]=0&factor[eqb_p]=0&factor[rmx_hr]=0&factor[rmx_p]=0&factor[ns_hr]=0&factor[ns_p]=0&factor[al_hr]=0&factor[al_p]=0&factor[ops_hr]=0&factor[ops_p]=0&factor[eqz_hr]=0&factor[eqz_p]=0&factor[zlh_hr]=0&factor[zlh_p]=0&kpw=true&factor[kpw_hr]=" + document.getElementById("hash").value + "&factor[kpw_p]=0&factor[ppw_hr]=0&factor[ppw_p]=0&factor[x25x_hr]=0&factor[x25x_p]=0&factor[fpw_hr]=0&factor[fpw_p]=0&factor[vh_hr]=0&factor[vh_p]=0&factor[cost]=0.0&factor[cost_currency]=USD&sort=Difficulty&volume=0&revenue=current&factor[exchanges][]=&factor[exchanges][]=binance&dataset=Main&commit=Calculate";
    var URL = "https://whattomine.com/coins";
    var encodedUrl = URL + "?" + encodeURI(urlParam);
    window.location.href = encodedUrl;
  }

}