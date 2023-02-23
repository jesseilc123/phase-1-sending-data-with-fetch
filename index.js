// Add your code here
// const formData = {
//     dogName: "Byron",
//     dogBreed: "Poodle",
// };

// const configurationObject = {
//     method: "POST",
//     headers: {
//         "Content-Type": "application/json",
//         "Accept": "application/json",
//     },
//     body: JSON.stringify(formData),
// };

// fetch("http://localhost:3000/dogs", configurationObject)
//     .then(function(response){
//         return response.json();
//     })
//     .then(function(object){
//         console.log(object);
//     })
//     .catch(function(error){
//         alert("Bad things! Ragnarők!");
//         console.log(error.message);
//     });

function submitData(userName, userEmail){
    const formData = {
        name: userName,
        email: userEmail 
    };

    function add2DOM(id){
        document.querySelector("body").append(id)
    }

    return fetch("http://localhost:3000/users", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            "Accept": "application/json",
        },
        body: JSON.stringify(formData)
    })
    .then(res => res.json())
    .then(user => add2DOM(user.id))
    .catch(function(error){
        alert("Error");
        return add2DOM(error.message)
    });
}
