// Code your solution in this file!
const drivers = ['Antonia', 'Nuru', 'Amari', 'Mo']; 
  
 var returnFirstTwoDrivers = function(drivers) { 
     return drivers.slice(0, 2) 
 } 
  
 var returnLastTwoDrivers = function(drivers) { 
     return drivers.slice(-2) 
 } 
 const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers]; 
  
 const createFareMultiplier = function (fareMultiplier) { 
     return function(cost) { 
         return fareMultiplier * cost; 
       } 
 } 
  
 const fareDoubler = createFareMultiplier(2); 
 const fareTripler = createFareMultiplier(3); 
  
 function selectDifferentDrivers(drivers, drive) { 
   return drive(drivers); 
 } 
  