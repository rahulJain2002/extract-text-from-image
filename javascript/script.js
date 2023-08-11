const URL = "https://api.apilayer.com/image_to_text/upload";
const imageInput = document.getElementById("imageInput");
const extractButton = document.getElementById("extractButton");
const resultDiv = document.getElementById("result");
const spinner = document.querySelector(".spin-container");

extractButton.addEventListener("click", async () => {
    try{
        const selectedImage = imageInput.files[0];
        
        if(selectedImage===undefined){
            alert("Please select the image");
            throw new Error("Select the image first");
        }


        extractButton.style.display = "none";
        spinner.style.display = "block";


        const myHeaders = new Headers();
        myHeaders.append("apikey", "XvkgGO4fcr3ZaaVRvzLfLcD9mP6kB4Lb");

        const requestOptions = {
            method: "POST",
            headers: myHeaders,
            body: selectedImage,
        };

    
        const response = await fetch(URL,requestOptions);
        
        if(response.ok===false){
            extractButton.style.display = "block";
            spinner.style.display = "none";
            alert("Enter image file only");
            throw new Error("Enter image file only");
        }
        const result = await response.json();
        console.log(result);
        resultDiv.textContent = result.all_text;
        console.log(result.all_text);

        extractButton.style.display = "blocck";
        spinner.style.display = "none";
    } 
    catch (error) {
        console.log(error);
    }


});
