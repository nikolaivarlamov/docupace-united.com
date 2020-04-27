module.exports = {




// after hook - will be executed in the end of test
  after: function(browser) {
    console.log('I am done.')
    browser.end();
  },

  'Open united.com webpage' (browser) {
    const firstResultSelector = '.serp-list .organic__subtitle b'

    browser
      .url('https://www.united.com', () => {
        console.log('Loading united.com...');
      })
      .waitForElementVisible('body')
      .assert.titleContains('United');
    },

    'choose one-way option' (browser) {
      const originInput = browser.globals.originInput
      const oneWay = browser.globals.oneWay

      browser
      .click(oneWay)
      .assert.visible(originInput);
    },

    'fill origin field' (browser) {
      const originInput = browser.globals.originInput
      const airportFirstChoiceFromList = browser.globals.airportFirstChoiceFromList
      const jfkKennedy = browser.globals.jfkKennedy

      browser
      .click(originInput)
      .assert.visible(airportFirstChoiceFromList)
      .click(airportFirstChoiceFromList)
      .setValue(originInput, 'New York JFK')
      .assert.visible(jfkKennedy)
      .click(jfkKennedy);
    },

    'fill destination field' (browser) {
      const destinationInput = browser.globals.destinationInput
      const airportFirstChoiceFromList = browser.globals.airportFirstChoiceFromList
      const miamiAll = browser.globals.miamiAll

      browser
      .click(destinationInput)
      .assert.visible(airportFirstChoiceFromList)
      .click(airportFirstChoiceFromList)
      .setValue(destinationInput, 'Miami')
      .assert.visible(miamiAll)
      .click(miamiAll);
    },

    'fill departing date' (browser) {
      const backKey = browser.globals.backKey;

      // delete 7 symbols
      for (var i = 0; i < 6; i += 1) {

        browser.setValue('#DepartDate', backKey)
      }
      //.setValue('#DepartDate', ['backKey', 'backKey, '\u0008', '\u0008', '\u0008', '\u0008', '\u0008'])
      browser.setValue('#DepartDate', 'Aug 20');
    },

    'choose cabin type' (browser) {
      const cabinFirstChoiceFromList = browser.globals.cabinFirstChoiceFromList


      browser
      .assert.visible('#cabinType')
      .click('#cabinType')
      .assert.visible(cabinFirstChoiceFromList)
      .click(cabinFirstChoiceFromList);
    },

    'search flight' (browser) {
      const findFlights = browser.globals.findFlights
      browser
      // navigate to flight search
      .click(findFlights)
      // check we are in "flight search" page
      .assert.titleContains('Flight Search Results | United Airlines');
    },

    'sort by Economy (Most Restricted)' (browser) {
      browser

     .click('#column-ECO-BASIC')
     .pause(4000)
     .assert.visible('#column-ECO-BASIC')
     // .assert.visible('button[class="edit-search-submit btn btn-tertiary editSearch-btn"]')
     // .click('button[class="edit-search-submit btn btn-tertiary editSearch-btn"]')
     //  .assert.visible('#column-ECO-BASIC')

     //#flightSearch > fieldset > div > div.bookingType > div > div.editSearch-padding > button
   },

    //table.querySelectorAll('div.row')

// using selenium understand how parse request
// fl-results - table -> loop to find all rows - razobratsja v selectore, kakoi class u stroki -> then in every row parser var obj = ()
// 3rd - using jquery find all elements that have data
     'Collect Depart, Arrive, Stops, Duration, Price' (browser) {

       const { JSDOM } = require( "jsdom" );
       const { window } = new JSDOM( "" );
       const $ = require( "jquery" )( window );

    //  browser.assert.visible('#flight-result-list-revised')

       // var i;
       // for (i = 1; i<10; i++) {
      // //   browser.getText('xpath', '//*[@id="flight-result-list-revised"]/li[' + i + ']/div[3]/div[1]/div[1]/div[1]/text()', function(result) {
      // //   console.log('Depart', result.value);
      // // })

      // $("#flight-result-list-revised").each(function(){
      //   var self=$(this);
      //
      //   if(self.hasClass("flight-time flight-time-depart"))
      //   {
      //     console.log(self.text())
      //   } else
      //   {
    // other code logic
    //   }
    // });

//  UNSUCCESFUL IMPLEMENTATION - WORK IN PROGRESS
    $(window.document).on('.//*[@id="flight-result-list-revised"]/li[1]/div[2]/div[1]/div[1]/div[1]/text()', function () {
    var result =  $(this).text();
    console.log(result)
});

    //   var result = $('#flight-result-list-revised > li:nth-child(1) > div.flight-block-summary-container > div.lof-summary.flight-summary > div.flight-summary-top > div.flight-time.flight-time-depart > span:nth-child(1)').contents().first().text();
    //
    //   console.log(result)
    //   $(window.document).ready(function(){
    //     var filenames = $('.visuallyhidden').map(function(){
    //     return $(this).text();
    //   }).get();
    // //
    // // if you want it as a string separated by a comma
    // $('#result').text(filenames.toString());
    //   console.log(filenames)


         // $('#flight-result-list-revised').each(function(){
         //   $(this).find('//*[@id="flight-result-list-revised"]/li[' + i + ']/div[2]/div[1]/div[1]/div[1]/text()').each(function(){
         //     console.log("Depart: ", $(this));
            // #flight-result-list-revised > li:nth-child(2)
        //  do your stuff, you can use $(this) to get current cell
      // })
    // })
      // }
     }

}
