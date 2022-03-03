// DNS Module - {Domain Name System}

import dns from "dns" ;


// dns.lookup('geekyshows.com', (error, address)=>{
//     if(error) {
//       throw error ;
//     } 
//     else {
//       console.log(address) ;
//     }  
// })




// dns.lookup('geekyshows.com', (error, address, family)=>{
//     if(error) {
//       throw error ;
//     } 
//     else {
//       console.log(address) ;
//       console.log(family) ;
//     }  
// })



// dns.resolve('geekyshows.com', (error, records)=>{
//     if(error) {
//       throw error ;
//     } 
//     else {
//       console.log(records) ;
//     }  
// })



// dns.resolve('geekyshows.com', "MX", (error, records)=>{
//     if(error) {
//       throw error ;
//     } 
//     else {
//       console.log(records) ;
//     }  
// })



dns.resolve('geekyshows.com', "NS", (error, records)=>{
    if(error) {
      throw error ;
    } 
    else {
      console.log(records) ;
    }  
})