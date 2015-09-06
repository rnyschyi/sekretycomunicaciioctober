<?php
//Для тесту  URL http:// ... test_mail.php?first-name=РОМАН&email=test@mail.com&phone=911
require_once 'swiftmailer-5.x/lib/swift_required.php';


	$message = "Повідомлення нема :( \r\n ";
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
	->setFrom(array('noreply@hr-kavjarnia.com.ua' => 'hr-kavjarnia'))
	->setTo(array('info@hr-kavjarnia.com.ua' => 'Получатель письма'))
	->addPart($message, 'text/html')
;


$transport = Swift_SmtpTransport::newInstance('challenger.prowebdns.com', 465, 'ssl')
	->setUsername('kavjarn')
	->setPassword('MJF1iRKF4TeD')
;

$mailer = Swift_Mailer::newInstance($transport);
var_dump($mailer->send($swift_message));