const { Given, When, Then } = require('@cucumber/cucumber')
const { assertThat } = require('hamjest')
const Person = require('../../src/demo.js')      

    Given('Lucy is located {int} metres from Sean', function(distance) {
        
           this.lucy = new Person
           this.sean = new Person
           this.lucy.moveTo(distance)
          
         })
       
     
        
    When('Sean shouts {string}', function(message) {
        this.sean.shout(message)
        this.message = message
           
         })
       
    
        
     