# Identificar característiques dels llenguatges de marques en diferents documents (svg, html, xml...)

## 1. SVG (Scalable Vector Graphics)

- **Descripció:** SVG és un llenguatge utilitzat per a la creació de gràfics vectorials escalables.

- **Característiques:**
  - **Vectorial:** Permet escalar els gràfics sense pèrdua de qualitat.
  - **Basat en XML:** La seva sintaxi és XML, facilitant la seva integració amb altres tecnologies basades en XML.
  - **Interactivitat:** Suporta animacions i interactivitat mitjançant CSS i JavaScript.
  - **Format de fitxer:** Els fitxers SVG són textuals i poden ser editats manualment.
  - **Suport per a DOM:** Permet la manipulació del Document Object Model (DOM) amb JavaScript.

## 2. HTML (HyperText Markup Language)

- **Descripció:** HTML és el llenguatge de marques estàndard per a la creació de pàgines web.

- **Característiques:**
  - **Estructuració del contingut:** Permet definir l'estructura de la pàgina web, com títols, paràgrafs, imatges, i enllaços.
  - **Semàntica:** Utilitza etiquetes semàntiques (com `<header>`, `<article>`, `<footer>`) per millorar la comprensió del contingut per part dels cercadors i tecnologies d'accessibilitat.
  - **Integració amb CSS i JavaScript:** Permet estilitzar contingut i afegir interactivitat mitjançant CSS i JavaScript.
  - **Accessible:** Dissenyat per ser accessible a tot tipus d'usuaris i dispositius.
  - **Format de fitxer:** Els fitxers HTML són textuals i poden ser editats manualment.

## 3. XML (eXtensible Markup Language)

- **Descripció:** XML és un llenguatge de marques que permet emmagatzemar i transportar dades de manera estructurada.

- **Característiques:**
  - **Extensible:** Permet als usuaris crear les seves pròpies etiquetes i estructures de dades.
  - **Basat en text:** Els fitxers XML són textuals, la qual cosa facilita la seva edició manual i la seva lectura per humans.
  - **Estructuració de dades:** Dissenyat per descriure estructures de dades de manera jeràrquica, amb una clara separació entre contingut i presentació.
  - **Compatibilitat:** Pot ser utilitzat amb una àmplia gamma de llenguatges de programació i sistemes.
  - **Validació:** Permet la validació de dades mitjançant esquemes com DTD (Document Type Definition) i XSD (XML Schema Definition).

## Comparació Ràpida

| Característica         | SVG                              | HTML                             | XML                             |
|-----------------------|----------------------------------|----------------------------------|---------------------------------|
| Tipus de contingut    | Gràfics vectorials               | Pàgines web                      | Dades estructurades             |
| Escalabilitat         | Sí                               | No                               | N/A                             |
| Semàntica             | Limitada (gràfics)              | Alta (estructura de contingut)  | Alta (dades i etiquetes)       |
| Interactivitat        | Sí (amb CSS/JavaScript)         | Sí (amb CSS/JavaScript)         | Limitada (no està dissenyat per a això) |
| Format de fitxer      | Textual                          | Textual                          | Textual                         |
| Validació             | N/A (tipus de gràfic)            | DTD/XHTML                        | DTD/XSD                         |

## Conclusió

Cada llenguatge de marques té les seves pròpies característiques i propòsits. SVG s'utilitza principalment per a gràfics, HTML per a estructurar pàgines web i XML per a la representació de dades. Tots ells comparteixen el principi de separar el contingut de la presentació, facilitant la manipulació i la visualització d'informació.
