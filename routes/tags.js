
// const Auth = require('../middleware/auth')
const Tag = require('../models/Tag')
const User = require('../models/Tag')

// Get all tags for user, which is extracted from token.
router.get('/:filter', Auth, (req,res,next) => {
    // Validate token 

    // Extract userId from token
    
    // Querry tags by userId

    // Filter results by given param

    // Sort results alphabetically

})

// Get all tags for given user by id
router.get('/:userId', (req,res,next) => {
    // Querry tags by userId

})

// Add a new tag for a user, which is extracted from token
router.post('/', Auth, (req,res,next) => {
    // Validate Token

    // Extract userId from token

    // Create new tag, attach userId

})

// Edit a tag, try auth and make sure that token corresponds to user, also check if user owns tag
router.patch('/:tagId', Auth, (req,res,next) => {
    // Validate token

    // Extract userId from token 

    // Check if user owns tag

    // Update Tag

})

// Delete a tag, try auth and make sure that token corresponds to user that owns the tag
router.delete('/:tagId', Auth, (req,res,next) => {

})



// ALTERNATIVE: user model stores tags