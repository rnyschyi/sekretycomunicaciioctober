<?php
//Для тесту  URL http:// ... test_mail.php?first-name=РОМАН&email=test@mail.com&phone=911
require_once 'swiftmailer-5.x/lib/swift_required.php';


	$message = "Повідомлення нема :( \r\nвоно пусте або не заповнене хочаб одне з обовязкових полів!!! Фатал ерор бляха-муха :) Ромку - шукай в себе десь ))) ";
	if( isset($_POST['first-name']) && isset($_POST['email']) && isset($_POST['phone']) ) {
		$message = "
		Name: {$_POST['first-name']}
		<br>Email: {$_POST['email']}
		<br>Phone: {$_POST['phone']}
		";
	}

$swift_message = Swift_Message::newInstance()
	->setSubject('Реєстрація нового користувача')
	// Set the From address with an associative array
	->setFrom(array('wowes@test.com' => 'hr-kavjarnia'))
	->setTo(array('rnyschyy@gmail.com' => 'Получатель письма'))
	->addPart($message, 'text/html')
;


$transport = Swift_SmtpTransport::newInstance('challenger.prowebdns.com', 465, 'ssl')
	->setUsername('kavjarn')
	->setPassword('MJF1iRKF4TeD')
;

$mailer = Swift_Mailer::newInstance($transport);
var_dump($mailer->send($swift_message));