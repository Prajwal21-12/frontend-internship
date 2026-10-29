const button = document.getElementById("getActivity");
const activity = document.getElementById("activity");
const message = document.getElementById("message");

async function getActivity() {
    activity.textContent = "Loading...";
    message.textContent = "";

    try {
        const response = await fetch(
            "https://jsonplaceholder.typicode.com/todos/1"
        );

        if (!response.ok) {
            throw new Error("Failed to fetch data");
        }

        const data = await response.json();

        activity.textContent = data.title;
    } catch (error) {
        activity.textContent = "Could not load data. Please try again.";
        console.error("API Error:", error);
    }
}

button.addEventListener("click", getActivity);