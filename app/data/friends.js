// ou should save your application's data inside of `app/data/friends.js` as an array of objects. Each of these objects should roughly follow the format below.

// ```json
// {
//   "name":"Ahmed",
//   "photo":"https://media.licdn.com/mpr/mpr/shrinknp_400_400/p/6/005/064/1bd/3435aa3.jpg",
//   "scores":[
//       5,
//       1,
//       4,
//       4,
//       5,
//       1,
//       2,
//       5,
//       4,
//       1
//     ]
// }
// ```

// ===============================================================================
// DATA
// Below data will hold all of the friends
// ===============================================================================

var friendsArray = [{
    name: "Ahmed",
    photo: "https://media.licdn.com/mpr/mpr/shrinknp_400_400/p/6/005/064/1bd/3435aa3.jpg",
    scores: [
        '1',
        '3',
        '2',
        '1',
        '5',
        '3',
        '1',
        '2',
        '2',
        '5'
    ]
}, {
    name: "cindy",
    photo: "https://www.google.com/search?safe=off&hl=en&biw=1680&bih=890&tbm=isch&sa=1&ei=vBkMXZTiG4GM8AOopJvADw&q=cindy&oq=cindy&gs_l=img.3..0i67j0j0i67j0l7.1367.2079..3354...0.0..0.81.389.5......0....1..gws-wiz-img.......35i39.ExL8mqGpzy0#imgrc=jOA5WVY-9ZkXHM:",
    scores: [
        '5',
        '3',
        '1',
        '4',
        '2',
        '5',
        '1',
        '4',
        '4',
        '2',
    ]
}, {
    name: "stacy",
    photo: "https://www.google.com/url?sa=i&source=images&cd=&ved=2ahUKEwj9y7uLofniAhUKsZ4KHSRyCa4QjRx6BAgBEAU&url=https%3A%2F%2Fen.wikipedia.org%2Fwiki%2FStacy_Keibler&psig=AOvVaw3LRC0ALznPI6oCIY5JlYQQ&ust=1561161273296950",
    scores: [
        '5',
        '5',
        '5',
        '5',
        '5',
        '5',
        '5',
        '5',
        '5',
        '5'
    ]
}, {
    name: "gil",
    photo: "https://www.google.com/url?sa=i&source=images&cd=&ved=2ahUKEwiapuinofniAhWOpp4KHYPcCnsQjRx6BAgBEAU&url=https%3A%2F%2Fsmarthandytech.com%2Fauthor%2Fgilgolf%2F&psig=AOvVaw3cXsOuI8x3l-XT6DBPv46F&ust=1561161333621100",
    scores: [
        '4',
        '4',
        '3',
        '4',
        '5',
        '3',
        '3',
        '4',
        '3',
        '4'
    ]
}, {
    name: "freddy",
    photo: "https://www.google.com/url?sa=i&source=images&cd=&ved=2ahUKEwjI1KXZofniAhVUo54KHYrgDlAQjRx6BAgBEAU&url=https%3A%2F%2Fwww.partycity.com%2Ffreddy-krueger-sweater---a-nightmare-on-elm-street-687872.html&psig=AOvVaw3JUyYCY7syYHQ6pJQ5Dgbr&ust=1561161434757883",
    scores: [
        '5',
        '4',
        '3',
        '2',
        '1',
        '2',
        '3',
        '4',
        '5',
        '4'
    ]
}, {
    name: "barry",
    photo: "https://www.google.com/url?sa=i&source=images&cd=&ved=2ahUKEwjh5brzofniAhXUs54KHRmFDn0QjRx6BAgBEAU&url=https%3A%2F%2Fwww.hbo.com%2Fbarry&psig=AOvVaw1KJ_gNamWR_Jdn1GMTRGFh&ust=1561161486378809",
    scores: [
        '2',
        '2',
        '2',
        '2',
        '2',
        '2',
        '2',
        '2',
        '2',
        '2'
    ]
}];

// Note how we export the array. This makes it accessible to other files using require.
module.exports = friendsArray;