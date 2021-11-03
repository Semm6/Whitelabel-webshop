# Ux Research Mediaan

## Context

Dit onderzoek gaat over de UX van de Mediaan applicatie die ik bouw met mijn groepje van de proftaak.  Om dit onderzoek goed uit te voeren ga ik designs maken voor de applicatie en deze vervolgens testen en aanpassen waar nodig. Ondertussen spreek ik ook veel met de stakeholder over het verbeteren van de UX tijdens en na het testen. Hieronder staat ook de opdracht die we hebben gekregen van Mediaan.

```
Digital Menu Application 
Introduction 
Mediaan is an international IT company, founded in Heerlen, the Netherlands, in 1969. We are in Heerlen, Amsterdam, Düsseldorf, München and Brussel. We believe that technology can make a difference in every company. Using smart processes and the newest technologies, companies can connect, inspire and grow.  
We deliver technology ranging from mobile apps to back-end services. Quality is of the utmost importance to us and our designs are unique. As soon as customers are interested in collaborating with Mediaan, but aren't sure of the feasibility of a project, Mediaan will offer a Proof of Concept. Currently, Mediaan has an idea for restaurants. However, this can only be realised with limited budget. Therefor Mediaan turns to students.  
Case 
The process in a restaurant is usually the same. Customers get seated, are hand over the menu, order drinks and food, consume the drinks and food and finally have dessert. A restaurant has a new idea to convert the above process to a digital experience. You will be developing the requested proof of concept in an agile fashion. Initially you'll focus on the MVP (the most important features) and then continue to flesh out the application.  
Milestone 1 (the MVP) 
After being welcomed by the staff, a customer takes seat at a table in the restaurant. On each table in the restaurant, a QR-code is placed. When a customer scans the QR-code, they will be presented with the digital menu of the restaurant. By scanning the QR-code and opening the application, the system should register their table and open a new session for the duration of the customer's stay.  
The customer should then be able to order from the digital menu. When the customer submits their order, it should be sent in real-time to the kitchen staff, who must then process the order. They will receive the order in a 'live-view'-screen in the kitchen. The system should aid the kitchen staff in organizing their work. A way to see which orders are new, processing and completed is preferred. 
Milestone 2 
The digital menu has a certain structure. Maybe there are categories of dishes, the dishes themselves, ingredients of the dishes and their nutritional information. The restaurant owner or the chef can administrate the products of the digital menu, in order to keep it up to date.  
Milestone 3 
The restaurant wants to have an inventory management system. This system should be able to be updated from the customer (when ordering something) or the kitchen (when creating waste or getting new inventory). This system needs to make sure that customers are not able to order a meal when this is not available. 
Bonus 
Create a white label application. Create or refactor the application in such a manner that it can be deployed at other restaurants. That means not only should the restaurant be able to create their digital menu. They should also be able to upload their logo and create their colour scheme. The digital menu application will then always render in the style of the restaurant.  
Bonus 
Integrate a food review system. A customer should be able to rate their meal in the menu. Other customers can directly see scores and reviews for each meal. They can also react to the reviews by for example simple down or upvoting the review. The restaurant is also able to react to these reviews. 
Technologies 
You will touch upon the following technologies:  
•	Webservices / back-end systems 
•	WebSockets for real-time communication 
•	Front-end development 
•	Databases  
```

## Research

### Respondenten

Ik heb 3 mensen getest. 2 vrouwen en 1 man. Hieronder heb ik de informatie over de respondenten neergezet. Ze hebben allemaal alle testen afgelegd en door deze respondenten heb ik goeie informatie gekregen.

```
Respondent 1:
Naam: Jane Janssen
Geslacht: Vrouw
Leeftijd: 33

Respondent 2: 
Naam: Stef de Neer
Geslacht: Man
Leeftijd: 50

Respondent 3: 
Naam: Sanne van Helden
Geslacht: Vrouw
Leeftijd: 23
```

### Resultaten

#### Designs

<table>
  <tr>
    <td><img src="https://i.postimg.cc/TYV0SgBb/Design-1.png" width=500 height=250></td> 
    <td><img src="https://i.postimg.cc/k54yBZGN/Design-2.png" width=500 height=250></td> 
  </tr>
 <tr>
    <td><img src="https://i.postimg.cc/DZGLGKTG/Design-3.png" width=500 height=600></td> 
    <td><img src="https://i.postimg.cc/jjw7VrC1/Design-4.png" width=500 height=600></td> 
  </tr>
 </table>

#### Begeleid testen

```
Jane Janssen

Samen met Jane heb ik de volgende test gedaan:
1.	Qr code scannen
2.	Categorie döner selecteren
3.	Teruggaan naar de categorieën pagina
4.	Categorie pizza selecteren
5.	Pizza salami aanklikken
6.	Prijs checken

-	Uitkomst: Jane heeft de test goed doorlopen. Ze vond het een fijne ervaring om door de applicatie heen te gaan.

-	Feedback Jane: “Het begeleid testen ging prima. Nadat ik samen met Sem nog even heb gesproken over de back button die er op dit moment nog inzit kwamen we samen tot een conclusie dat deze niet nodig is. Je kunt namelijk op mobiel en pc altijd gemakkelijk terug naar de vorige pagina.
```


#### Taak geven (met tijdsduur)

```
Jane Janssen

Jane heeft als taak gekregen om een broodje gyros toe te voegen aan de winkelmand.

-	Uitkomst: Jane heeft de test goed doorlopen zonder problemen. Ze heeft er in totaal 15 seconden over gedaan. 

-	Feedback Jane: “Ik vind het scannen van de Qr code een fijne optie als klant in een restaurant. Verder had ik ook geen problemen met het zoeken en vinden van de specifieke categorie en het broodje gyros in dit geval.” 
```
```
Stef de Neer

Stef heeft als taak gekregen om een pizza salami zoeken en hier de prijs van checken

-	Uitkomst: Stef heeft ook alle stappen netjes doorlopen. Hij heeft er in totaal ook 15 seconden over gedaan net als Jane. 

-	Feedback Stef: “Ik vond net als Jane het scannen van de Qr code erg fijn om te gebruiken. Zelf heb ik dit eerder in een restaurant gebruikt dus voor mij was dit niks nieuws. Ook vond ik het navigeren erg soepel gaan en zag ik duidelijk alle informatie die ik nodig had.”
```
```
Sanne van Helden

Sanne heeft als taak gekregen om naar het admin paneel te gaan en vervolgens een nieuwe categorie toe te voegen.

-	Uitkomst: Sanne heeft de taak ook goed doorlopen. Dit is duurde in totaal 30 seconden.

-	Feedback Sanne: “Zelf vond ik de taak duidelijk uitgelegd en tijdens het uitvoeren ervan heb ik ook geen problemen ervaren. De tekstvelden om de data van de nieuwe categorie aan te maken vond ik ook duidelijk neergezet. Nadat ik dit had gedaan kwam de nieuwe categorie netjes bij de andere terecht. Dus ik vond mijn test geslaagd”
```

#### 5 seconden test

```
Jane Janssen

Jane heeft de categorieën pagina bekeken voor 5 seconden. Het eerste woord wat in haar opkwam was gestructureerd. Dit kwam doordat de kaartjes met de verschillende categorieën netjes langs mekaar stonden. 

Conclusie
Tijdens het designen van deze pagina heb ik veel gekeken naar voorbeelden voor inspiratie en uiteindelijk kwam ik hierop. De rede dat ik uiteindelijk ook voor dit design ben gegaan is omdat het zoals Jane ook zegt erg gestructureerd, netjes en duidelijk is. Dit is tijdens het bestellen via een applicatie erg belangrijk. Op deze manier ontstaan er ook geen onduidelijkheden voor de klant. Deze test is dus geslaagd!
```
```
Stef de Neer

Stef heeft het design van het winkelmandje bekeken. De eerste paar woorden die in hem op kwamen waren: aandacht en duidelijkheid. Dit kwam voornamelijk omdat de producten in het mandje netjes onder mekaar stonden en de afbeeldingen van de producten echt de aandacht trokken.

Conclusie
Mijn doel tijdens het designen was ook om het zo duidelijk en makkelijk mogelijk te maken voor de klant om alles te kunnen zien wat er in het mandje zat. Deze test is dus geslaagd!
```
```
Sanne van Helden

Sanne heeft het design van de adminpanels gezien. Het eerste woord wat in haar opkwam was simpel. Dit komt door het basic design wat ik heb bedacht voor de popup en de pagina’s. Ze heeft ook nadrukkelijk aangegeven dat ze dit prettig zou vinden om mee te werken. 

Conclusie
Sanne was ook erg tevreden over de designs en ziet verder geen problemen. Het was ook goed om te horen dat haar eerste woord simpel was. Dit was namelijk ook de reactie die ik had verwacht.
```
