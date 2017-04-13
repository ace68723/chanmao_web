"use strict";
import {expect} from 'chai';
import Auth from './Auth/Auth.w';

describe('starwars-names', function() {
   it('should work!', async ()=> {
      const testData = {
        username:'ace68723',
        password:'ace68723',
        deviceToken:'test'
      }
      const result = await Auth.AppLogin(testData);
      expect(result.result).to.equal(0);
  });
});
