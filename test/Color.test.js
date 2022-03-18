const Color = artifacts.require("Color");

contract('Color', (accounts) => {
    let colorContract; 
    before (async () => {
        colorContract = await Color.deployed()
    })

    describe('Deployment', async () => {
        it('Deploy successfully', async () => {
            const address = colorContract.address
            assert.notEqual(address, null)
            assert.notEqual(address, '')
            assert.notEqual(address, 0x0)
        })

        it('Has a name', async () => {
            const name = await colorContract.name()
            assert.equal(name, 'Color')
        })

        it('Has a symbol', async () => {
            const symbol = await colorContract.symbol()
            assert.equal(symbol, 'COLOR')
        })
    })

    describe('Minting', async () => {
        it('Create a new token', async () => {
            const result = await colorContract.mint('#666666')
            const totalTokens = await colorContract.totalSupply()
            assert.equal(totalTokens, 1)
            const event = result.logs[0].args
            assert.equal(event.tokenId.toNumber(), 0, 'id is correct')
            assert.equal(event.from, '0x0000000000000000000000000000000000000000', 'from is correct')
            assert.equal(event.to, accounts[0], 'to is correct')

            //FAILURE: Cannot mint same color twice
            //await colorContract.mint('#666666').should.be.rejected

        })
    })
    describe('Indexin', async () => {
        it('Check list of elements', async () => {
            await colorContract.mint('#666665')
            await colorContract.mint('#666664')
            await colorContract.mint('#666663')

            //total miting elements
            const totalSupply = await colorContract.totalSupply();

            //get the list of elements
            let color, result=[]
            for(let i = 0; i < totalSupply; i++) {
                color = await colorContract.colors(i)
                result.push(color)
            }
            //show elements
            const expected = ['#666666','#666665','#666664','#666663']
            assert.equal(result.join(','), expected.join(','), 'should be equal')
        })
    })
})
