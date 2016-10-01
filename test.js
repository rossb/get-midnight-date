const chai = require('chai');
const expect = chai.expect;

const GetMidnightDate = require('./index.js');

describe('GetMidnightDate(dateObj)', function() {

  describe('valid Date object', function(){
    it('should return same day on midnight', function() {

      expect( GetMidnightDate( new Date(2016,5,1,12,45,500) ) ).to.deep.equal( new Date(2016,5,1,0,0,0) );
      expect( GetMidnightDate( new Date(1201,5,1,12,45,500) ) ).to.deep.equal( new Date(1201,5,1,0,0,0) );
      expect( GetMidnightDate( new Date(2525,5,1,12,45,500) ) ).to.deep.equal( new Date(2525,5,1,0,0,0) );

    });
  });

  describe('non-Date object', function(){
    it("should return 'Invalid Date'", function() {

      expect( GetMidnightDate('string').toString() ).to.equal('Invalid Date');
      expect( GetMidnightDate([]).toString() ).to.equal('Invalid Date');
      expect( GetMidnightDate({}).toString() ).to.equal('Invalid Date');
      expect( GetMidnightDate(/regex/).toString() ).to.equal('Invalid Date');
      expect( GetMidnightDate(function() {}).toString() ).to.equal('Invalid Date');

    });
  });

  describe('invalid Date object', function(){
    it("should return 'Invalid Date'", function() {

      expect( GetMidnightDate(new Date('not a date string')).toString() ).to.equal('Invalid Date');
      expect( GetMidnightDate(new Date([])).toString() ).to.equal('Invalid Date');
      expect( GetMidnightDate(new Date({})).toString() ).to.equal('Invalid Date');
      expect( GetMidnightDate(new Date(undefined)).toString() ).to.equal('Invalid Date');
      expect( GetMidnightDate(new Date('')).toString() ).to.equal('Invalid Date');

    });
  });

});