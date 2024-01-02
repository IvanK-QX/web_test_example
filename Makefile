##############################
# Instale Node 
##############################
node:
	npm install

##############################
# Run all Tests
##############################
test single:
	npx playwright test --workers=1

##############################
# Run all Tests
##############################
test:
	npm run test

##############################
# Open Reporter
##############################
report:
	npm run allure:generate-open