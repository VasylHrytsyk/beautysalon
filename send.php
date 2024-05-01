<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $name = $_POST['name'];
    $email = $_POST['email'];
    $message = $_POST['message'];

    $to = 'sofi.kovaluk1@gmail.com';
    $subject = 'New message from contact form';
    $message_body = "Name: $name\nEmail: $email\nMessage:\n$message";

    if (mail($to, $subject, $message_body)) {
        echo 'Message sent successfully.';
    } else {
        echo 'Error sending message.';
    }
} else {
    echo 'Invalid request.';
}
?>