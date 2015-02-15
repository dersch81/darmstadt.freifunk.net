---
title: Wie funktioniert Freifunk?
permalink: /wie-funktioniert-freifunk/
layout: page
top_url: /wie-funktioniert-freifunk
sub_menu: true
top_url: /mitmachen/
sub_weight: 2
---

<div class="gallery items-7">

	<div id="item-1" class="control-operator"></div>
	<div id="item-2" class="control-operator"></div>
	<div id="item-3" class="control-operator"></div>
	<div id="item-4" class="control-operator"></div>
	<div id="item-5" class="control-operator"></div>
	<div id="item-6" class="control-operator"></div>
	<div id="item-7" class="control-operator"></div>
  
	<figure class="item">
		<section class="box superfluous">
			<h3>Der Stand der Dinge</h3>
			<img src="/images/network_1.jpg" class="full-width" />
			
			<p>Jeder ist heute im Besitz eines privaten Internetzugangs, den er sowohl per Kabel als auch über WLAN verwendet. Über das WLAN ist jedoch nicht nur Internet, sondern auch das eigene Heimnetzwerk erreichbar. Will man nun den Internetzugang teilen, so steht man unmittelbar vor zwei Problemen:</p>
			<ul>
				<li>Mit dem WLAN-Zugang steht dem Gast neben Internet auch noch das persönliche Heimnetzwerk offen: Dateifreigaben, Drucker, Komponenten des "Internet der Dinge" wie Licht, Strom und Heizungssteuerung.</li>
				<li>Verursachen Gäste über den eigenen Internetzugang rechtliche Probleme, so haftet man als Störer.</li>
			</ul>
			<p>Dies führt zu Vorbehalten, anderen Zugang zum eigenen WLAN-Netzwerk zu gewähren. Die Folge sind zahllose eigenständige Netze, auf die jeweils nur der jeweilige Betreiber Zugriff hat. Ist man unterwegs, muss man so das Volumen seines Mobilfunk-Datentarif aufbrauchen oder für einen kommerziellen WLAN-Hotspot zahlen. Will man Daten mit seinen Nachbarn austauschen, so müssen die Daten dennoch einen Umweg über das Internet nehmen.</p>
		</section>
	</figure>
	
	<div class="secondary-controls">
		<div class="superfluous">
			<nav>
				<a href="#item-7"><img src="/images/arrow-left.svg" alt="Left pointing arrow"></a>
				<a href="#item-2"><img src="/images/arrow-right.svg" alt="Right pointing arrow"></a>
			</nav>
		</div>
	</div>

	<figure class="item">
		<section class="box superfluous">
			<h3>Freifunk als gemeinschaftliches Netzwerk</h3>
			<img src="/images/network_2.jpg" class="full-width" />
			<p>Benachbarte Router, die mit der Freifunk-Firmware betrieben werden, bauen untereinander das Freifunk-Netzwerk auf, durch das sie auf direktem Wege Daten austauschen können, ohne den Umweg über das Internet nehmen zu müssen. Diese Funkverbindungen können je nach Modell Entfernungen von einigen dutzend Metern bis hin zu mehreren Kilometern überbrücken und so auch Gebiete erreichen, die nur rudimentär oder gar nicht an das Internet angeschlossen sind.</p>
			<p>Der Zugang zum Freifunk-Netzwerk ist mit jedem WLAN-fähigen Endgerät oder direkt per Kabel am Freifunk-Router ohne Registrierung oder Passwort möglich.</p>
		</section>
	</figure>
	
	<div class="secondary-controls">
		<div class="superfluous">
			<nav>
				<a href="#item-1"><img src="/images/arrow-left.svg" alt="Left pointing arrow"></a>
				<a href="#item-3"><img src="/images/arrow-right.svg" alt="Right pointing arrow"></a>
			</nav>
		</div>
	</div>

	<figure class="item">
		<section class="box superfluous">
			<h3>Einzelne Freifunk-Wolken verbinden sich</h3>
			<img src="/images/network_3.jpg" class="full-width" />
			<p>Da sich jedoch nicht alle Freifunk-Router untereinander per Funk erreichen, können sie sich außerdem verschlüsselt über das Internet miteinander verbinden. Diese Anbindung an den Rest der Freifunk-Wolke wird von den Routern auch per Funk an benachbarte Freifunk-Router weitergegeben, so dass nicht jeder Router einen Internetzugang benötigt.</p>
		</section>
	</figure>
	
	<div class="secondary-controls">
		<div class="superfluous">
			<nav>
				<a href="#item-2"><img src="/images/arrow-left.svg" alt="Left pointing arrow"></a>
				<a href="#item-4"><img src="/images/arrow-right.svg" alt="Right pointing arrow"></a>
			</nav>
		</div>
	</div>
  
	<figure class="item">
		<section class="box superfluous">
			<h3>Das Heimnetz bleibt privat</h3>
			<p>Zu jedem Zeitpunkt bleiben Freifunk-Netz und Heimnetz strikt getrennt. Das gilt auch, wenn der eigene Router sich über die Internetverbindung im Heimnetzwerk mit dem Rest der Freifunk-Wolke verbindet. Aus dem Freifunk-Netzwerk heraus ist kein Zugriff auf das private Netzwerk möglich.</p>
		</section>
	</figure>
	
	<div class="secondary-controls">
		<div class="superfluous">
			<nav>
				<a href="#item-3"><img src="/images/arrow-left.svg" alt="Left pointing arrow"></a>
				<a href="#item-5"><img src="/images/arrow-right.svg" alt="Right pointing arrow"></a>
			</nav>
		</div>
	</div>
  
	<figure class="item">
		<section class="box">
			<h3>Zugang zum Internet</h3>
			<p>Über das Freifunk-Netzwerk steht auch ein Internetzugang zur Verfügung. Dieser erfolgt über eine Reihe von Gateways, welche den Verkehr erst von dort aus ins Internet weiterleiten. Von welchem Freifunker-Router eine Verbindung ins Internet kommt, ist aus dem Internet nicht mehr erkenntlich. Somit lässt sich das Problem der Störerhaftung für Knotenbetreiber vermeiden.</p>
		</section>
	</figure>
	
	<div class="secondary-controls">
		<div class="superfluous">
			<nav>
				<a href="#item-4"><img src="/images/arrow-left.svg" alt="Left pointing arrow"></a>
				<a href="#item-6"><img src="/images/arrow-right.svg" alt="Right pointing arrow"></a>
			</nav>
		</div>
	</div>

	<figure class="item">
		<section class="box">
			<h3>Lokale Dienste im Freifunk-Netz</h3>
			<p>Wer einen Dienst mit lokalem Bezug zur Verfügung stellen will, ist im Freifunk-Netz genau richtig. Es reicht, den Computer, auf dem der Dienst läuft, mit einem Freifunk-Router zu verbinden, um den Dienst im Freifunk-Netz bereitzustellen.</p>
			<p>Es existiert eine <a href="/lokale-dienste/">Liste</a> bereits vorhandener Dienste sowie von Ideen für weitere, neue Dienste.</p>
		</section>
	</figure>
	
	<div class="secondary-controls">
		<div class="superfluous">
			<nav>
				<a href="#item-5"><img src="/images/arrow-left.svg" alt="Left pointing arrow"></a>
				<a href="#item-7"><img src="/images/arrow-right.svg" alt="Right pointing arrow"></a>
			</nav>
		</div>
	</div>
  
	<figure class="item">
		<section class="box superfluous">
			<h3>Dienste anderer Freifunk-Communities</h3>
			<p>Über die Freifunk-Wolke besteht auch Zugang zu den Netzwerken anderer deutschlandweiter Freifunk-Communities, mitsamt der dort vorhandenen Dienste.</p>
		</section>
	</figure>
	
	<div class="secondary-controls">
		<div class="superfluous">
			<nav>
				<a href="#item-6"><img src="/images/arrow-left.svg" alt="Left pointing arrow"></a>
				<a href="#item-1"><img src="/images/arrow-right.svg" alt="Right pointing arrow"></a>
			</nav>
		</div>
	</div>
	
	<div class="controls">
		<a href="#item-1" class="control-button">•</a>
		<a href="#item-2" class="control-button">•</a>
		<a href="#item-3" class="control-button">•</a>
		<a href="#item-4" class="control-button">•</a>
		<a href="#item-5" class="control-button">•</a>
		<a href="#item-6" class="control-button">•</a>
		<a href="#item-7" class="control-button">•</a>
	</div>
	
</div>

Benachbarte Router, die mit der Freifunk-Firmware betrieben werden, bauen untereinander das Freifunk-Netzwerk auf, durch das sie auf direktem Wege Daten austauschen können, ohne den Umweg über das Internet nehmen zu müssen. Diese Funkverbindungen können je nach Modell Entfernungen von einigen dutzend Metern bis hin zu mehreren Kilometern überbrücken und so auch Gebiete erreichen, die nur rudimentär oder gar nicht an das Internet angeschlossen sind.

Der Zugang zum Freifunk-Netzwerk ist mit jedem WLAN-fähigen Endgerät oder direkt per Kabel am Freifunk-Router ohne Registrierung oder Passwort möglich.


## Einzelne Freifunk-Wolken verbinden sich

Da sich jedoch nicht alle Freifunk-Router untereinander per Funk erreichen, können sie sich außerdem verschlüsselt über das Internet miteinander verbinden. Diese Anbindung an den Rest der Freifunk-Wolke wird von den Routern auch per Funk an benachbarte Freifunk-Router weitergegeben, so dass nicht jeder Router einen Internetzugang benötigt.


## Das Heimnetz bleibt privat
Zu jedem Zeitpunkt bleiben Freifunk-Netz und Heimnetz strikt getrennt. Das gilt auch, wenn der eigene Router sich über die Internetverbindung im Heimnetzwerk mit dem Rest der Freifunk-Wolke verbindet. Aus dem Freifunk-Netzwerk heraus ist kein Zugriff auf das private Netzwerk möglich.


## Zugang zum Internet
Über das Freifunk-Netzwerk steht auch ein Internetzugang zur Verfügung. Dieser erfolgt über eine Reihe von Gateways, welche den Verkehr erst von dort aus ins Internet weiterleiten. Von welchem Freifunker-Router eine Verbindung ins Internet kommt, ist aus dem Internet nicht mehr erkenntlich. Somit lässt sich das Problem der Störerhaftung für Knotenbetreiber vermeiden.


## Lokale Dienste im Freifunk-Netz
Wer einen Dienst mit lokalem Bezug zur Verfügung stellen will, ist im Freifunk-Netz genau richtig. Es reicht, den Computer, auf dem der Dienst läuft, mit einem Freifunk-Router zu verbinden, um den Dienst im Freifunk-Netz bereitzustellen.

Es existiert eine <a href="/lokale-dienste/">Liste</a> bereits vorhandener Dienste sowie von Ideen für weitere, neue Dienste.

## Dienste anderer Freifunk-Communities
Über die Freifunk-Wolke besteht auch Zugang zu den Netzwerken anderer deutschlandweiter Freifunk-Communities, mitsamt der dort vorhandenen Dienste.