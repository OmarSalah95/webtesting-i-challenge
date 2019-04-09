const enhancer = require('./enhancer.js');
// test away!
describe('Game tests', () => {
    // Sanity check
    it('Shows you the object', () => {
        expect(enhancer.get(
            {   name:"Omar", 
                enhancement: 20, 
                durability: 100
            }
        ))
            .toEqual(
                {   name:"Omar", 
                    enhancement: 20, 
                    durability: 100
                }
            );
    });



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
    describe('Handle Success of enhancement ', () => {
        it('Takes Handles enhancement success', () => {
            expect(enhancer.succeed(
                {   name:"Omar", 
                    enhancement: 19, 
                    durability: 100
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
                {   name:"Adam", 
                    enhancement: 20, 
                    durability: 100
                }
            ))
                .toEqual(
                    {   name:"Adam", 
                        enhancement: 20, 
                        durability: 100
                    }
                );
        });
    });
    
    describe('Enhancment Failure', () => {
        it('Enhancement below 15 failure reduces durability by 5', () => {
            expect(enhancer.fail(
                {   name:"Adam", 
                    enhancement: 11, 
                    durability: 100
                }
            ))
                .toEqual(
                    {   name:"Adam", 
                        enhancement: 11, 
                        durability: 95
                    }
                );
        });

        it('Enhancement 15 or greater failure reduces durability by 10', () => {
            expect(enhancer.fail(
                {   name:"Adam", 
                    enhancement: 15, 
                    durability: 100
                }
            ))
                .toEqual(
                    {   name:"Adam", 
                        enhancement: 15, 
                        durability: 90
                    }
                );
        });

        it('Enhancement above 16 failure reduces durability by 10, and enhancement by 1', () => {
            expect(enhancer.fail(
                {   name:"Adam", 
                    enhancement: 17, 
                    durability: 100
                }
            ))
                .toEqual(
                    {   name:"Adam", 
                        enhancement: 16, 
                        durability: 90
                    }
                );
        });
 
    });
    
});
// look Adam