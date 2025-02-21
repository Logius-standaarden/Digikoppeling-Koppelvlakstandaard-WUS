# Inleiding

## Doel en Doelgroep

Dit document beschrijft de functionele specificaties voor de Digikoppeling
koppelvlak standaard WUS

Het document is bestemd voor architecten en ontwikkelaars die op basis van WUS
gegevens willen uitwisselen via Digikoppeling.

Alle Digikoppeling webservices die op WUS gebaseerd zijn, moeten conformeren aan
de koppelvlakstandaard WUS. Deze wordt tot in detail in dit document
gespecificeerd. Doel van dit document is ontwikkelaars te informeren wat deze
koppelvlakstandaard nu precies inhoudt en waar zij zich aan moeten conformeren.
Het document is bestemd voor architecten en ontwikkelaars die op basis van WUS
gegevens willen uitwisselen via Digikoppeling. Het gaat hierbij om zowel service
providers als service requesters (clients).

## Opbouw Digikoppeling documentatie

Digikoppeling is beschreven in een set van documenten. Deze set is als volgt
opgebouwd:

<figure>
  <object data="https://logius-standaarden.github.io/publicatie/dk/actueel/media/DK_Specificatie_structuur.svg" type="image/svg+xml" id="infographic">Overzicht van de onderdelen van de Digikoppeling Standaard, de standaard is onderverdeeld in normatieve en ondersteunende onderdelen</object>
  <figcaption>Opbouw documentatie Digikoppeling</figcaption>
</figure>

<b>Legenda</b>


<table class="legendum">
    <thead>
        <tr>
            <th><strong>Kleur</strong></th>
            <th><strong>Soort Document</strong></th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td class="green">Groen</td>
            <td>Standaard documentatie</td>
        </tr>
        <tr>
            <td class="grey">Grijs</td>
            <td>Ondersteunende documentatie</td>
        </tr>
    </tbody>
</table>


<b>Beheer</b>

- De standaarddocumenten (groen/vierkant aangegeven) vallen onder het beheer zoals geformaliseerd in het document [[[?DK-Beheermodel]]].

- De ondersteunende documentatie wordt onderhouden door Logius als de beheerder van de standaard (en afgestemd met stakeholders/ gebruikers).

- Alle goedgekeurde documenten zijn te vinden op de website van Logius, [www.logius.nl](https://www.logius.nl/onze-dienstverlening/domeinen/gegevensuitwisseling/digikoppeling).

Dit document beschrijft de WUS-variant van de koppelvlakstandaarden. Naast de
Koppelvlakstandaard WUS zijn er ook de ebMS2- en REST-API-standaarden. Deze worden in een aparte
documenten beschreven.

## Koppelvlak & koppelvlakstandaard

Een koppelvlak is een interface die volgens standaarden de gegevensuitwisseling
vastlegt. Het werken met vaste standaarden is essentieel voor een koppelvlak.
Hierdoor wordt implementatie vergemakkelijkt. Ook wordt het mogelijk diverse
soorten berichten door te sturen met een grote mate van interoperabiliteit,
omdat via de standaard afspraken over hun inhoud gemaakt is.

Eén van de belangrijkste eisen die door de overheid gesteld worden bij de
inrichting van generieke voorzieningen, is dat er niet veel maatwerk ontwikkeld
hoeft te worden, maar dat er van “off the shelf” commercieel of Open source
geleverde software gebruik gemaakt kan worden. Voor Digikoppeling, dus voor de
logistieke laag, betreft dat het niet willen ontwikkelen van software voor de
adapters.

Dit doel kan bereikt (benaderd) worden doordat gekozen wordt voor internationale
(de jure of de facto) vastgelegde standaarden, die door “alle” leveranciers
interoperabel zijn geïmplementeerd.

Een andere eis is dat met name afnemers gebruik kunnen maken van één “stekker”
(één logistiek koppelpunt). Aanbieders dienen hiervoor de nodige voorzieningen
te treffen.

Een koppelvlakspecificatie beschrijft de eisen die gesteld worden aan de
adapters om interoperabel met elkaar te kunnen communiceren. Digikoppeling gaat
over logistiek, dus over de envelop en niet over de inhoud. De hele set
informatie die tezamen nodig is voor een complete generieke Digikoppeling
koppelvlakdefinitie bestaat uit:

- Interfacedefinitie “on the wire”, (voorbeeld)listing van SOAP headers en
    informatie over velden en hun specifieke inhoud.

De voor Digikoppeling vereiste interoperabiliteit van de WUS standaarden van
OASIS en W3C wordt gebaseerd op de profielen (en tests) van OASIS WS-BRSP
(voorheen WS-I).

## Opbouw van dit document

Hoofdstuk 1 bevat een aantal algemene inleidende onderwerpen.

Hoofdstuk 2 bevat de kern van de standaard. Deze is onderverdeeld naar
onderwerpen/gebieden: WSDL, WS-Addressing, naamgeving, beveiliging,
betrouwbaarheid en binaire data. Het identificeert de gekozen internationale
(WS-I) profielen die dienen als fundament voor de Digikoppeling
Koppelvlakstandaard WUS. Die keuzes, de nadere invullingen voor Digikoppeling
binnen de ruimte van die standaarden/profielen en specifieke aandachtspunten bij
de keuzes, vormen tezamen de “voorschriften” per onderwerp.

Hoofdstuk 3 definieert de resulterende Digikoppeling WUS profielen.

Gehanteerde terminologie: Glossary

Voor de definities die binnen het Digikoppeling project gehanteerd worden, zie
de ‘Digikoppeling Glossary’ via de onderstaande website.

Website

Dit document en andere documentatie is beschikbaar op
[www.logius.nl/digikoppeling](http://www.logius.nl/digikoppeling).

