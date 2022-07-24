<?php
header('Content-type: Application/json');
$news = file_get_contents(__DIR__.'/news.json');
echo $news;
?>