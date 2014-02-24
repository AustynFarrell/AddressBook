describe("Contact", function() {
  describe("fullName", function() {
    it('takes the first name and the last name and combines', function() {
      var testContact = Object.create(Contact);
      testContact.firstName = "Dolly";
      testContact.lastName = "Parton";
      testContact.fullName().should.equal("Dolly Parton");
    });
  });
});
