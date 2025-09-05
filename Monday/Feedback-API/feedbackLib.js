let feedbacks = [];
let nextId = 1;

function getAll(){
    return feedbacks;
}

function addOne(sender, message, rating) {
    const newFeedback = {
        id: nextId++,
        sender,
        message,
        rating,
    };

    feedbacks.push(newFeedback);
    return newFeedback;
}

function findById(id) {
    const feedback = feedbacks.find((item) => item.id ==id);
    if (feedback) {
        return pet;
    } else {
        return false;
    }
}

function updateOne(id, sender, message, rating) {
    const feedback = findById(id);
    if (!feedback) return null;
    feedback.sender = sender;
    feedback.message = message;
    feedback.rating = rating;
    return feedback;
}


if (require.main === module) {
 let result = addOne("John Smith", {"message": "Great session on React components! I found the examples very helpful."}, 4);
 console.log(result);
 console.log("getAll called:", getAll());
 console.log("findById called:", findById(1));
 console.log(updateOne(1, "Jesper Holmström", "Updated message", 2));
 // rest of the tests here
}

Feedback = {
    getAll,
    addOne,
    findById,
    updateOne,
};
module.exports = Feedback;


