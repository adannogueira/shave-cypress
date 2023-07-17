require('dotenv').config()
import cypress from 'cypress'
import tesults from 'cypress-tesults-reporter'

cypress.run()
  .then((results) => tesults.results(results, { target: process.env.TOKEN }))
  .catch((err) => console.error(err))
