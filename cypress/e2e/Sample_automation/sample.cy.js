describe('MarkovML Application Login and Add file functionality check', () => {
    
    it('MarkovML Application Login and Add file functionality check', () => {
      // Visit the login page
      cy.visit('https://app.markovml.com/', {timeout:60000});

      // Enter username 
      cy.get('input[id="username"]').type('nanibhavesh@gmail.com');

      // Submit the username
      cy.xpath('(//button[@type="submit"])[1]').click();

      //Enter Password
      cy.get('input[id="password"]').type('Bhavesh@2001');

      // Submit the login button
      cy.get('button[type="submit"]').click();
      cy.wait(10000);
        
      //Selecting the Workflow icon
      cy.xpath('(//*[local-name()="svg"])[3]').should('be.visible').click();
      cy.wait(5000);
      //Creating a new workflow
      cy.xpath('(//*[local-name()="svg"])[5]').click();
    
    
      //Selecting the INPUTS section
      cy.xpath('(//button[@type="button"]//div[contains(.,"Inputs")])[1]').click();
      cy.wait(2000);
      //Drag and drop the Add file object to the canvas  
      cy.get('[style="min-width: 100%; display: table;"] > .mantine-SimpleGrid-root > [data-testid="workflow-operator-opmkvlibraryconnectorsource01"]').drag('.react-flow__pane');
    
      cy.xpath('(//img[contains(@src,"file-upload")])[3]').click();
      cy.xpath('//span[contains(text(),"Add new")]').click();

      //Upload a file from fixtures
      cy.xpath('//input[@accept="text/csv,.csv,text/plain,.txt,text/tab-separated-values,.tsv"]').attachFile('numericaldata.csv');
      cy.xpath('//span[contains(text(),"See preview and upload")]').click();
      cy.wait(4000);
      cy.xpath('//span[contains(text(),"Upload")]').click({ force: true });

    });
});
  