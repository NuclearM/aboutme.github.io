<?php
if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    if (isset($_POST['url'])) {
        $url = $_POST['url'];
        $shortened_url = generateRandomString(6); // Change the number to the desired length of your shortened URL

        // Store the mapping of shortened URL to the original URL in a database or file.
        // For simplicity, we'll use a file in this example.
        file_put_contents('urls.txt', $shortened_url . '|' . $url . PHP_EOL, FILE_APPEND);

        echo 'Shortened URL: ' . $_SERVER['HTTP_HOST'] . '/' . $shortened_url;
        exit();
    }
}

if ($_SERVER['REQUEST_METHOD'] === 'GET') {
    if (isset($_GET['url'])) {
        $requested_url = $_GET['url'];
        $urls = file('urls.txt');

        foreach ($urls as $line) {
            list($shortened_url, $original_url) = explode('|', trim($line));

            if ($requested_url === $shortened_url) {
                header('Location: ' . $original_url);
                exit();
            }
        }

        echo 'Invalid or expired URL.';
        exit();
    }
}

function generateRandomString($length) {
    $characters = '0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ';
    $characters_length = strlen($characters);
    $random_string = '';

    for ($i = 0; $i < $length; $i++) {
        $random_string .= $characters[rand(0, $characters_length - 1)];
    }

    return $random_string;
}
?>
