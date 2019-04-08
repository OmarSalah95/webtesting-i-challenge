const enhancer = require('./enhancer.js');
// test away!
describe('Game tests', () => {
    it('Take in an item object and restore durability to 100%', () => {
        expect(enhancer.repair(
            {   name:"Omar", 
                enhancement: 20, 
                durability: 50
            }
        ))
            .toEqual(
                {   name:"Omar", 
                    enhancement: 20, 
                    durability: 100
                }
            );
    });

    it('Takes Handles enhancement success', () => {
        expect(enhancer.succeed(
            {   name:"Omar", 
                enhancement: 19, 
                durability: 100
            }
        ))
            .toEqual(
                {   name:"Omar", 
                    enhancement: 18, 
                    durability: 90
                }
            );
    });
    
});