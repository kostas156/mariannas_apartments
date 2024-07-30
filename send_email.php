<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
  $name = $_POST['name'];
  $email = $_POST['email'];
  $message = $_POST['message'];

  // Create a timestamp for the submission
  $timestamp = date('Y-m-d H:i:s');

  // Format the form data
  $data = "Timestamp: $timestamp\n";
  $data .= "Name: $name\n";
  $data .= "Email: $email\n";
  $data .= "Message: $message\n\n";

  // Define the file to save the form data
  $file = dirname(__FILE__) . '/form_submissions.txt';

  // Save the form data to the file
  if (file_put_contents($file, $data, FILE_APPEND | LOCK_EX) !== false) {
    // Redirect to a thank you page
    header("Location: thank_you.html");
    exit();
  } else {
    // Display an error message if there's an issue saving the file
    echo "Sorry, there was an error saving your form submission. Please try again later.";
  }
}
?>
