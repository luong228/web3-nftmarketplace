# Install package
yarn install
# See your Solidity code for the contract 
# is ok and compile without any error or warning.
compile="yarn hardhat compile",
# Write tests to see the smart contract code works 
# as you expect for various situations.
test="yarn hardhat test",

# Run local solidity development environment.
# It will set up dummy accounts that you can use to test.
serve="yarn hardhat node",
# Upload your Solidity contract code to it 
# before you run the frontend code -> Deploy the contract to network.
deploy="yarn hardhat run scripts/deploy.js --network localhost",

# Run your React frontend code.
yarn start