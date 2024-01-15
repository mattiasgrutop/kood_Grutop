function submitFeedback() {
    const feedbackText = document.getElementById('feedback').value;

    // Validate and handle feedback
    if (feedbackText) {
        // You can handle the feedback as needed (e.g., store it, display it, etc.)
        console.log(`User Feedback: ${feedbackText}`);
        alert('Tänan tagasiside eest!');
    } else {
        alert('Palun sisesta tagasiside enne vastamist.');
    }
}
